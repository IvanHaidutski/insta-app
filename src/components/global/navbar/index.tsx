"use client";
import { usePaths } from "@/hooks/user-nav";
import React from "react";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  return <div>Navbar</div>;
};

export default Navbar;
