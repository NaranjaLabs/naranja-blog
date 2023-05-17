import { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const paths = [`/post/${req.query.slug}`, '/'];
  try {
    for (const path of paths) {
      await res.revalidate(path);
    }
    const message = `Updated route: /blog/${req.query.slug}`;
    return res.json({ message });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}
