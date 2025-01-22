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
  z-index: 1;

  a {
    z-index: 1;
  }
  a:hover {
    cursor: pointer;
  }
`;

export default function Nav() {
  return (
    <>
      <Container>
        <div className=" bg-primary p-4 h-[100px]">
          <div className="max-w-[90rem] p-0 pl-8 pr-8 h-full flex items-center ml-auto mr-auto">
            <img src={tree.src} className="aspect-square h-full" />
            <div className="text-white flex items-center w-full text-[1.25rem] md:text-[2rem]">
              <span className="pl-4">Section Services</span>
              <div className="ml-auto flex gap-4 text-[1rem] md:text-[1.25rem]">
                <a href="#Services">
                  <span className="">Services</span>
                </a>
                <a href="#Contact">
                  <span className="">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
