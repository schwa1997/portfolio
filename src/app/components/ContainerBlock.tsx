import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ContainerBlock({children, ...customMeta }) {
  const meta = {
    title: "HuiminChen - Developer",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <NavBar />
      <div>{children}</div>
      <Footer/>

    </div>
  );
}
