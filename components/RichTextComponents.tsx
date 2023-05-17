/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CodeText from './CodeText';

import urlFor from '@lib/imageUrlBuilder';

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Imagem da Publicação"
            fill
          />
        </div>
      );
    },
    code: ({ value: { code, language } }: any) => {
      return <CodeText language={language}>{code}</CodeText>;
    }
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 px-3 py-5 md:px-6">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal px-3 md:px-4">{children}</ol>
    )
  },
  block: {
    // normal: ({ children }: any) => (
    //   <p className="mb-6 break-words">{children}</p>
    // ),
    h1: ({ children }: any) => (
      <h1 className="py-10 text-3xl font-bold md:text-5xl">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="py-10 text-2xl font-semibold md:text-4xl">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="py-10 text-xl font-semibold md:text-3xl">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="py-10 text-lg font-semibold md:text-2xl">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-[#F7AB0A] py-5 pl-5">
        {children}
      </blockquote>
    )
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="self-center rounded-md bg-[#134F80] px-7 py-3 font-semibold
          text-white decoration-[#F7AB0A] hover:bg-[#008AFC] hover:decoration-black"
        >
          {children}
        </Link>
      );
    }
  }
};

export default RichTextComponents;
