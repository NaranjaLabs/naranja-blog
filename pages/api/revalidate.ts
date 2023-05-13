import { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const paths = [`/post/${req.query.slug}`, '/'];
  try {
    console.log(req.query.slug);
    for (const path of paths) {
      console.log(path);

      await res.revalidate(path);
    }
    // await res.revalidate(`/post/${req.query.slug}`);
    const message = `Updated route: /blog/${req.query.slug}`;
    return res.json({ message });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
}
