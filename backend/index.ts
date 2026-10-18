import {
  router,
  json,
  error,
  db,
  requireAuth,
  requireAdminEmailAllowlist,
} from '@appdeploy/sdk';

const ADMIN_EMAILS = ['voidwatcher08@gmail.com'];
const TABLE = 'portfolio_x_posts';

function isValidXStatus(value: unknown): value is string {
  if (typeof value !== 'string' || value.length > 600) return false;
  try {
    const parsed = new URL(value);
    return (
      [
        'x.com',
        'www.x.com',
        'twitter.com',
        'www.twitter.com',
        'mobile.twitter.com',
      ].includes(parsed.hostname.toLowerCase()) &&
      /^\/(?:[^/]+)\/status\/\d+/.test(parsed.pathname)
    );
  } catch {
    return false;
  }
}

export const handler = router({
  'GET /api/_healthcheck': [async () => json({ message: 'Success' })],
  'GET /api/posts': [
    async () => {
      const result = await db.list<{ url: string; createdAt?: string }>(TABLE, {
        limit: 50,
      });
      const posts = result.items
        .filter(
          item => typeof item.url === 'string' && isValidXStatus(item.url)
        )
        .sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''))
        .map(item => ({
          id: item.id,
          url: item.url,
          createdAt: item.createdAt,
        }));
      return json({ posts });
    },
  ],
  'POST /api/posts': [
    requireAuth(),
    requireAdminEmailAllowlist(ADMIN_EMAILS),
    async ({ body }) => {
      const payload = body as { url?: unknown };
      if (!isValidXStatus(payload?.url))
        return error('Provide a direct X status URL.', 400);
      const url = payload.url.trim().split('?')[0];
      const existing = await db.list<{ url: string }>(TABLE, { limit: 50 });
      if (existing.items.some(item => item.url === url))
        return error('This post is already saved.', 409);
      const [id] = await db.add(TABLE, [
        { url, createdAt: new Date().toISOString() },
      ]);
      if (!id) return error('Could not save the post.', 500);
      return json({ post: { id, url } }, 201);
    },
  ],
  'DELETE /api/posts/:id': [
    requireAuth(),
    requireAdminEmailAllowlist(ADMIN_EMAILS),
    async ({ params }) => {
      if (!/^[A-Za-z0-9_-]{1,128}$/.test(params.id))
        return error('Invalid post ID.', 400);
      const [deleted] = await db.delete(TABLE, [params.id]);
      if (!deleted) return error('Post not found.', 404);
      return json({ deleted: true });
    },
  ],
});
