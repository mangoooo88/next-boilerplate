import styled from "styled-components";
import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface IChildren {
  children: ReactNode
}

function DefaultLayout({children}: IChildren) {
  return (
    <Wrapper>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </Wrapper>
  );
}

export default DefaultLayout;