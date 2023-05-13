import Image from 'next/image';
import Link from 'next/link';

import { Post } from '../typings';

import urlFor from '@lib/imageUrlBuilder';

export default function MainArticle({ post }: { post: Post }) {
  return (
    <div className="lg:flex gap-4 border-[1px] rounded-md p-2">
      <div className=" h-auto w-[400px] relative">
        <Image
          alt="Imagem do artigo"
          src={urlFor(post.mainImage).url()}
          className="object-cover"
          fill
        />
      </div>
      <div className="lg:max-w-2xl py-1">
        <div className="text-xs mb-2">
          <span className="font-bold">{post.categories[0].title}</span> *{' '}
          <span>{new Date(post.publishedAt).toLocaleDateString('pt-br')}</span>
        </div>
        <h2 className="font-black text-xl">{post.title}</h2>
        <div className="mb-9 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
          {post.description}
        </div>
        <div className="flex justify-between">
          <Link
            href={`/post/${post.slug.current}`}
            className="text-[#1473E6] font-bold"
          >
            Ler artigo
          </Link>
        </div>
      </div>
    </div>
  );
}
