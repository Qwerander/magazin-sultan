import React, { ReactNode } from "react";
import styled from "styled-components";

const BackgroundModalWindow = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3000;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

type MoodalType = {
	toggle: (value: boolean) => void
	children: ReactNode
}

export const Modal = ({ toggle, children }: MoodalType) => {

  return (
    <>
      <BackgroundModalWindow
        onClick={() => {
          toggle(false);
        }}
      >
        <Content
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Content>
      </BackgroundModalWindow>
    </>
  );
};