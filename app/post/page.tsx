import Image from 'next/image';
import React from 'react';

export default function Post() {
  return (
    <div className="flex flex-row justify-center gap-4 max-w-6xl mx-auto mt-4">
      {/* Blog post side */}
      <div className="max-w-5xl w-full bg-white">
        <div className="w-full max-h-72 overflow-hidden relative h-[300px]">
          <Image
            src={'/post/dummyimage.webp'}
            alt="Post"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="p-[3%]">
          <h1 className="text-5xl font-bold mr-[25%] mt-2">Title</h1>
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
              <h2>Vitor</h2>
              <span>Date of Post</span>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            fugiat rem amet inventore omnis cum maiores saepe officia eius
            quidem libero illum, fugit blanditiis ex voluptatem deleniti,
            veritatis, neque maxime. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Culpa fugiat rem amet inventore omnis cum maiores
            saepe officia eius quidem libero illum, fugit blanditiis ex
            voluptatem deleniti, veritatis, neque maxime. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Culpa fugiat rem amet inventore
            omnis cum maiores saepe officia eius quidem libero illum, fugit
            blanditiis ex voluptatem deleniti, veritatis, neque maxime.
          </p>
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
            <h2>Vitor</h2>
          </div>
          <button className="w-[70%] h-10 bg-sky-700 rounded-md drop-shadow-md text-white">
            Social Media
          </button>
        </div>
      </div>
    </div>
  );
}
