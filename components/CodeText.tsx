'use client';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function CodeText({
  children,
  language
}: {
  children: string;
  language: string;
}) {
  console.log(children);

  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      wrapLines={true}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  );
}
