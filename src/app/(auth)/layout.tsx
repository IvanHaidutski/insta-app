import React from "react";

type Props = {
  children: React.ReactNode; //React.ReactNode - это данные любого типа, например кусок jsx кода
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default Layout;
