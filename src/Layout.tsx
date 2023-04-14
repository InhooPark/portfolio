import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import MouseEvent from "@/src/MouseEvent";

type componentProps = {
  // 해결해야함
  children: any;
};

const Layout = ({ children }: componentProps) => {
  return (
    <>
      {/* <MouseEvent /> */}
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
