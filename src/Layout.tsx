import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type componentProps = {
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
