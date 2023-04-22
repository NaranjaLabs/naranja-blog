// import { previewData } from 'next/dist/client/components/headers';

import { previewData } from 'next/headers';

import Article from '@components/components/Article';
import MainArticle from '@components/components/MainArticle';

export default function Blog() {
  console.log(previewData());

  if (previewData()) {
    return <div>Preview Mode</div>;
  } else {
    return (
      <main className="max-w-6xl px-10 m-auto mt-12 place-items-center">
        <MainArticle />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          <Article />
          <Article />
          <Article />
        </div>
      </main>
    );
  }
}
