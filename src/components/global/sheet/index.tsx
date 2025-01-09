import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Sheet = ({ children, trigger, className }: Props) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
