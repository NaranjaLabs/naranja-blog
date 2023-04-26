import Image from 'next/image';
import React from 'react';

interface Idatapost {
  id: number;
  attributes: {
    title: string;
    body: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    main_image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}

async function getData(id: string) {
  const response = await fetch(
    `http://127.0.0.1:1337/api/posts/${id}?populate=main_image`
  );
  const data = await response.json();

  return data;
}

export default async function Post({ params }: { params: { id: string } }) {
  const {
    data: { attributes }
  } = await getData(params.id);

  return (
    <div className="flex flex-row justify-center gap-4 max-w-6xl mx-auto mt-4">
      {/* Blog post side */}
      <div className="max-w-5xl w-full bg-white">
        <div className="w-full max-h-72 overflow-hidden relative h-[300px]">
          <Image
            src={`http://127.0.0.1:1337${attributes.main_image.data.attributes.url}`}
            alt="Post"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-[3%]">
          <h1 className="text-5xl font-bold mr-[25%] mt-2">
            {attributes.title}
          </h1>
          <div className="flex my-4">
            <h3 className="bg-slate-400 px-1 py-[2px] rounded">Tags</h3>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              src={'/post/vitor.jpg'}
              width={50}
              height={50}
              alt="profile"
              className="rounded-full drop-shadow-md"
            />
            <div className="h-[50px] w-[80%] self-center">
              <h2>{attributes.author}</h2>
              <span>{attributes.createdAt}</span>
            </div>
          </div>
          <p className="mt-2">{attributes.body}</p>
        </div>
      </div>
      {/* Sidebar */}
      <div className="max-w-xs w-full bg-white p-4 h-64 pt-8">
        <div className="grid place-items-center gap-4">
          <div className="flex items-center">
            <Image
              src={'/post/vitor.jpg'}
              width={40}
              height={40}
              alt="profile"
              className="rounded-full drop-shadow-md"
            />
            <h2>{attributes.author}</h2>
          </div>
          <button className="w-[70%] h-10 bg-sky-700 rounded-md drop-shadow-md text-white">
            Social Media
          </button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetch('http://127.0.0.1:1337/api/posts/');
  const data = await response.json();

  const posts = data.data.map((post: Idatapost) => ({
    id: `${post.id}`
  }));

  return posts;
}
