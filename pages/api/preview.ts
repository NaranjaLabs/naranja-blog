import { NextApiRequest, NextApiResponse } from 'next';

export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.setPreviewData({});
  response.writeHead(307, { Location: '/' });
  response.end();
}

// export default function preview(req, res) {
//   res.setPreviewData({});
//   res.writeHead(307, { Location: '/' });
//   res.end();
// }
