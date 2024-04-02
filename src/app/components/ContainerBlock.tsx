import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ContainerBlockProps {
  children: ReactNode;
}

export const ContainerBlock: FC<ContainerBlockProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      {/* <NavBar /> */}
      <Header/>
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
};
