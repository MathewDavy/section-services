'use client';
import banner from '../app/images/banner.jpg';
import profile from '../app/images/profile.jpg';

import Nav from '../app/components/nav';
import styled from 'styled-components';
import TextBlock from './components/textBlock';
import Swiper from './components/swiper';

export default function Home() {
  return (
    <div className="grid relative mb-[100px]">
      <div>
        <Nav />
        <div className=" h-[100px] bg-black absolute top-0 w-full">
          <img src={banner.src} className="h-full w-full object-cover opacity-70 absolute" />
        </div>
      </div>
      <div className="p-4 w-full lg:max-w-[90rem]  flex flex-col gap-4 ml-auto mr-auto">
        <TextBlock
          id={'Services'}
          title={'Services'}
          body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum`}
        />

        <TextBlock
          id={'Contact'}
          title={'Contact'}
          body={
            <div className="flex h-[200px] gap-8">
              <div className="flex flex-col justify-center">
                <p>Dominic Guzzo</p>
                <p>0221649711</p>
                <p>davy.mathew@gmail.com</p>
              </div>
              <img src={profile.src} className=""></img>
            </div>
          }
        />

        <Swiper />
      </div>
    </div>
  );
}
