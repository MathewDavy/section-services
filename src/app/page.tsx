'use client';
import banner from '../app/images/banner.jpg';
import Nav from '../app/components/nav';
import styled from 'styled-components';
import TextBlock from './components/textBlock';

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: transparent;
`;

const BottomGradient = styled(Gradient)`
  background-image: linear-gradient(to top, white 5%, transparent 20%, transparent 40%);
`;
const TopGradient = styled(Gradient)`
  background-image: linear-gradient(white 5%, transparent 20%, transparent 40%);
`;

export default function Home() {
  return (
    <div className="grid">
      <Nav />
      <div className="relative h-[200px]">
        <img src={banner.src} className="h-full w-full object-cover" />
        <TopGradient />
        <BottomGradient />
      </div>
      <div className="p-4 max-w-[90rem]">
        <TextBlock id={'About'} />
        <div id="Contact"></div>
        <div id="Services"></div>
      </div>
    </div>
  );
}
