export async function GET(request: Request) {
  console.log('🚀 ~ file: route.ts:2 ~ GET ~ request:', request);
  return new Response('Hello, Next.js!');
}
