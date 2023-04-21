import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img from '/public/imagem.webp';

export default function Article() {
  return (
    <div className="w-full p-2 border-[1px] rounded">
      <div className="w-full mb-4">
        <Image src={img} alt="Imagem do artigo" />
      </div>
      <div>
        <div className="text-xs mb-4">
          <span>Front-end</span> * <span>1 Month Ago</span>
          <h2 className="font-bold text-lg mb-2">Css Grid</h2>
          <div className="text-sm line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
            The CSS Grid Layout Module offers a grid-based layout system, with
            rows and columns, making it easier to design web pages without
            having to use floats and positioning.
          </div>
        </div>
        <div className="flex justify-between">
          <span>12 Min Read</span>
          <Link href="#" className="text-[#1473E6] font-bold">
            Read Full
          </Link>
        </div>
      </div>
    </div>
  );
}
