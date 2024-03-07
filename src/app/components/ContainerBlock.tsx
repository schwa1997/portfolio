import React, { FC, ReactNode } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";


interface ContainerBlockProps {
  children: ReactNode;
}

export const ContainerBlock: FC<ContainerBlockProps> = ({
  children,
}) => {
  return (
    <div>
      <Head>
        <title>HuiminChen</title>
      </Head>
      <NavBar />
      <div>{children}</div>
      <Footer/>

    </div>
  );
}
