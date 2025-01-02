import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  return (
    //Query
    //WIP: Query client fetch data
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug}/>
      {/* Sidebar */}
    </div>
  );
};

export default Layout;
