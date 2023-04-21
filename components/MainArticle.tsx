import Image from 'next/image';
import Link from 'next/link';

import img from '/public/imagem.webp';
export default function MainArticle() {
  return (
    <div className="lg:flex gap-4 border-[1px] rounded-md p-2">
      <div className="w-full">
        <Image
          alt="Imagem do artigo"
          // width={500}
          // height={280}
          src={img}
          className="h-full lg:min-w-[400px] object-cover"
        />
      </div>
      <div className="lg:max-w-2xl py-1">
        <div className="text-xs mb-2">
          <span className="font-bold">Front-end</span> * <span>1 Hour Ago</span>
        </div>
        <h2 className="font-black text-xl">
          Optimizing CSS for faster page loads{' '}
        </h2>
        <div className="mb-9 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
          Not long ago I decided to improve the loading times of my website. It
          already loads pretty fast, but I knew there was still room for
          improvement and one of them was CSS loading. I will walk you through
          the process and show you how you can improve your load times as well.
          To see how CSS affects the load time of a webpage we first have to
          know how the browser converts an HTML document into a functional
          webpage...
        </div>
        <div className="flex justify-between">
          <span>3 Min Read</span>
          <Link href="#" className="text-[#1473E6] font-bold">
            Read Full
          </Link>
        </div>
      </div>
    </div>
  );
}
