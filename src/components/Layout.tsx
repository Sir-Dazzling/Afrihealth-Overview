import Head from "next/head";
import React from "react";
import { LayoutTypes } from "../interfaces";

const Layout: React.FC<LayoutTypes> = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        ></link>

        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <title>{title ? `${title}` : "Emexup"}</title>
      </Head>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;