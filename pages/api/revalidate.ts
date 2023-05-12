import { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate('/');
    await res.revalidate(`/post/${req.query.slug}`);
    const message = `Updated route: /blog/${req.query.slug}`;
    return res.status(200).json({ message });
  } catch (err: any) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
}
