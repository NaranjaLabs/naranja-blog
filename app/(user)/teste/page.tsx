'use client';
import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const children = `<Link
  href={value.href}
  rel={rel}
  className="self-center rounded-md bg-[#134F80] px-7 py-3 font-semibold
  text-white decoration-[#F7AB0A] hover:bg-[#008AFC] hover:decoration-black"
  >
  {children}
</Link>
`;
export default function page() {
  return (
    <CopyBlock
      text={children}
      language="javascript"
      showLineNumbers={true}
      wrapLines
      theme={dracula}
    />
  );
}
