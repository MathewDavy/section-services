'use client';
import banner from '../images/banner.jpg';

import styled from 'styled-components';

const LeftGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: transparent;
  background-image: linear-gradient(to right, white 5%, transparent 20%, transparent 40%);
`;

export default function TextBlock({ id }: { id: string }) {
  return (
    <div id={id} className="w-full">
      <div className="flex  h-[30px] w-full items-center ">
        <h1 className=" whitespace-nowrap">About us</h1>
        <div className="relative w-full h-full">
          <img src={banner.src} className="h-full w-full object-cover" />
          <LeftGradient />
        </div>
      </div>
      <p className="text-[8px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </p>
    </div>
  );
}
