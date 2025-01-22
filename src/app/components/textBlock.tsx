'use client';
import { ReactNode } from 'react';

export default function TextBlock({
  id,
  body,
  title
}: {
  id: string;
  body: string | ReactNode;
  title: string;
}) {
  return (
    <div id={id} className="w-full mt-8 md:mt-12">
      <div className="flex  h-[30px] w-full items-center ">
        <h1 className=" whitespace-nowrap text-[1.25rem] md:text-[2rem]">{title}</h1>
      </div>
      <div className="text-[0.75rem] md:text-[1rem] mt-2">{body}</div>
    </div>
  );
}
