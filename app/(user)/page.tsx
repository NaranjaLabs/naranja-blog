import Article from '@components/Article';
import MainArticle from '@components/MainArticle';

import { Post } from '../../typings';

import { sanityQueries } from '@lib/queries';

export default async function Blog() {
  const posts: Post[] = await sanityQueries.posts();
  return (
    <main className="max-w-6xl px-10 m-auto mt-12 place-items-center">
      <MainArticle post={posts[0]} />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.map(
          (post, i) => i > 0 && <Article post={post} key={post._id} />
        )}
      </div>
    </main>
  );
}
