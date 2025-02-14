"use client";

import { useQueryAutomation } from "@/hooks/user-queries";
import React from "react";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";
import ThenAction from "../then/then-action";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  //if (data?.data && data?.data?.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      <ActiveTrigger
        type={"COMMENT"}
        keywords={[
          {
            id: "4r34r34r4f4",
            word: "getstarted",
            automationId: id,
          },
        ]}
      />
      {/* WIP: add this for the type data.data.trigger[0].type */}
      {/* WIP: {data?.data?.trigger.length > 1 && <></>}*/}

      <>
        <div className="relative w-6/12 mt-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-12 left-1/2">
            or
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[1px]"
          />
        </div>
        <ActiveTrigger
          type={"MESSAGE"}
          keywords={[
            {
              id: "eefrfqq2i",
              word: "Maplease",
              automationId: id,
            },
          ]}
        />
      </>
      <ThenAction />
    </div>
  );
};

export default Trigger;
