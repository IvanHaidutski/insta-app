import React from "react";
import { Button } from "@/components/ui/button";

type Props = {};

const PaymentButton = (props: Props) => {
  //WIP: get their subscription details
  //WIP: Loading state
  return (
    <Button
      className="bg-gradient-to-br 
      text-white 
      rounded-full 
      from-[#9685D8] 
      via-[#9434E6] 
      font-bold 
      to-[#CC3BD4]"
    >
      Upgrade
    </Button>
  );
};

export default PaymentButton;
