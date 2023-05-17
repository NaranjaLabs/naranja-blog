import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Post } from '../typings';

import urlFor from '@lib/imageUrlBuilder';

export default function Article({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug.current}`} className="font-bold">
      <div className="w-full p-2 border-[1px] rounded" key={post._id}>
        <div className="w-full mb-4 relative h-48">
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt="Imagem do artigo"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <div className="text-xs mb-4">
            <span>{post.categories[0].title}</span> *{' '}
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('pt-br')}
              </span>
            )}
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <div className="text-sm line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
              {post.description}
            </div>
          </div>
          <div className="text-[#1473E6] ">Ler completo</div>
        </div>
      </div>
    </Link>
  );
}
