import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

type componentProps = {
  // 해결해야함
  children: any;
};

const Layout = ({ children }: componentProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
