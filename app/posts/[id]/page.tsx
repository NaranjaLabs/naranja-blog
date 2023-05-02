import Image from 'next/image';
import React from 'react';

export default async function Post({ params }: { params: { id: string } }) {
  // const {
  //   data: { attributes }
  // } = await getData(params.id);

  return (
    <div className="lg:flex flex-row justify-center gap-4 max-w-6xl mx-auto mt-4">
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
          <h1 className="text-5xl font-bold mr-[25%] mt-2">Título do Post</h1>
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
              <h2>Vitor Veloso</h2>
              <span>26/04/2023 - 20:56</span>
            </div>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            accusantium fugit beatae voluptates nemo quasi, dolorem, quibusdam
            ex tenetur ratione ea adipisci ducimus perspiciatis nam iste
            inventore? Aut, id possimus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam accusantium fugit beatae voluptates nemo
            quasi, dolorem, quibusdam ex tenetur ratione ea adipisci ducimus
            perspiciatis nam iste inventore? Aut, id possimus?
          </p>
        </div>
      </div>
      {/* Sidebar */}
      <div className="lg:max-w-xs w-full bg-white p-[3%] pt-8 relative mt-8 lg:mt-0 h-72 lg:h-full">
        <div className="grid place-items-center gap-4">
          <div className="lg:block mx-auto flex items-center justify-evenly w-[90%] max-w-3xl ">
            <div className="flex items-center gap-4 lg:justify-center">
              <Image
                src={'/post/vitor.jpg'}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full drop-shadow-md"
              />
              <h2>Vitor Veloso</h2>
            </div>
            <div className="w-[70%] lg:w-full max-w-sm lg:mt-2 block text-xs">
              <a href="https://www.linkedin.com/in/vitorvelosodev">
                https://www.linkedin.com/in/vitorvelosodev
              </a>
              <br />
              <a href="https://github.com/vitorvelosodev">
                https://github.com/vitorvelosodev
              </a>
            </div>
          </div>
          <h4 className="lg:mx-4 text-sm">
            Bio: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi iusto voluptates corrupti tempora dolor modi, quos
            voluptate fugiat esse. Explicabo nesciunt sapiente alias iste ex,
            quia tempora soluta nulla minima.
          </h4>
        </div>
      </div>
    </div>
  );
}
