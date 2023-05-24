import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import RichTextComponents from '@components/RichTextComponents';

import { Post } from '../../../../typings';

import urlFor from '@lib/imageUrlBuilder';
import { sanityQueries } from '@lib/queries';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts: Post[] = await sanityQueries.posts();
  const slugs = posts.map(({ slug }) => slug.current);
  return slugs.map((slug) => ({
    slug
  }));
}
export default async function Post({ params: { slug } }: Props) {
  const post: Post = await sanityQueries.postBySlug(slug);
  return (
    <main className="lg:flex flex-row justify-center gap-4 max-w-6xl mx-auto mt-4">
      {/* Blog post side */}
      <div className="max-w-5xl w-full bg-white">
        <div className="w-full max-h-72 overflow-hidden relative h-[300px]">
          <Image
            src={urlFor(post.mainImage).url()}
            alt="Post"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-[3%]">
          <h1 className="text-5xl font-bold mr-[25%] mt-2">{post.title}</h1>

          <div className="flex my-4">
            <h3 className="bg-slate-400 px-1 py-[2px] rounded">
              {post.categories.map((category) => category.title)}
            </h3>
          </div>

          <div className="flex flex-row gap-3">
            <Image
              src={urlFor(post.author.image).url()}
              width={50}
              height={50}
              alt="profile"
              className="rounded-full drop-shadow-md"
            />
            <div className="h-[50px] w-[80%] self-center">
              <h2>{post.author.name}</h2>
              <span>
                {new Date(post.publishedAt).toLocaleDateString('pt-br')}
              </span>
            </div>
          </div>
          <article className="mt-2">
            <PortableText components={RichTextComponents} value={post.body} />
          </article>
        </div>
      </div>
      {/* Sidebar */}
      <div className="lg:max-w-xs w-full bg-white p-[3%] pt-8 relative mt-8 lg:mt-0 lg:h-full">
        <div className="grid place-items-center gap-4">
          <div className="lg:block mx-auto flex items-center justify-evenly w-[90%] max-w-3xl ">
            <div className="flex items-center gap-4 lg:justify-center">
              <Image
                src={urlFor(post.author.image).url()}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full drop-shadow-md"
              />
              <p>{post.author.name}</p>
            </div>
            <div className="w-[70%] lg:w-full max-w-sm lg:mt-8 text-xs flex justify-center gap-8">
              <Link
                href={post.author.linkedin}
                className="flex items-center gap-2 text-lg"
              >
                <Image
                  src="/icons/linkedin.svg"
                  height={20}
                  width={20}
                  alt="Linkedin button"
                />
                {'LinkedIn'}
              </Link>
              <Link
                href={post.author.github}
                className="flex items-center gap-2 text-lg"
              >
                <Image
                  src="/icons/github.svg"
                  height={20}
                  width={20}
                  alt="GitHub button"
                />
                {'GitHub'}
              </Link>
            </div>
          </div>
          <h4 className="lg:mx-4 text-sm">
            <PortableText
              components={RichTextComponents}
              value={post.author.bio}
            />
          </h4>
        </div>
      </div>
    </main>
  );
}
