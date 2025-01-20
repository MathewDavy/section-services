'use client';
import tree from '../images/tree.png';

import styled from 'styled-components';

const Gradient = styled.div`
  width: 100%;
  height: 120%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(transparent 70%, #1b2f33 80%, transparent);
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 20px;

  a {
    z-index: 1;
  }
  a:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 40px;
  aspect-ratio: 1;
`;

export default function Nav() {
  return (
    <>
      <Container>
        <div className="flex items-center bg-primary p-2">
          <Image src={tree.src} />
          <div className="text-white flex items-center w-full">
            <span className="">Section Services</span>
            <div className="ml-auto flex gap-1 text-[10px]">
              <a href="#Contact">
                <span className="">Contact</span>
              </a>
              <a href="#About">
                <span className="">About</span>
              </a>
              <a href="#Services">
                <span className="">Services</span>
              </a>
            </div>
          </div>
        </div>
        <Gradient />
      </Container>
    </>
  );
}
