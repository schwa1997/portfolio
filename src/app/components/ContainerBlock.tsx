import React, { FC, ReactNode } from "react";
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
      <NavBar />
      <div>{children}</div>
      <Footer/>

    </div>
  );
}
