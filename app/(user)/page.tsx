import Article from '@components/Article';
import MainArticle from '@components/MainArticle';

import { Post } from '../../typings';

import { sanityQueries } from '@lib/queries';

export default async function Blog() {
  const posts: Post[] = await sanityQueries.posts();
  const postsByDate = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <main className="max-w-6xl px-10 m-auto mt-12 place-items-center">
      <MainArticle post={posts[0]} />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {postsByDate?.map(
          (post, i) => i > 0 && <Article post={post} key={post._id} />
        )}
      </div>
    </main>
  );
}
