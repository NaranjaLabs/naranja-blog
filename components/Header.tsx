import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full h-14 bg-[#fb7021] grid place-items-center ">
      <div className="max-w-[1072px] w-full flex items-center text-slate-100 justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo-vector.svg" width={56} height={56} alt="logo" />
          </Link>
          <h3 className=" ml-2 text-xl">NaranjaLabs</h3>
        </div>
        <div className="flex gap-6 mr-2">
          <Link href="/">Home</Link>
          {/* <Link href="/about">Sobre</Link> */}
        </div>
      </div>
    </header>
  );
}
