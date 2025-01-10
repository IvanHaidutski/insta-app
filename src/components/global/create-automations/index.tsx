import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

const CreateAutomations = (props: Props) => {
  return (
    //WIP: Create the automations in database using mutate
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white
    rounded-full from-[#3352CC] font-medium to-[#1C2D70]
    "
    >
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automations</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomations;
