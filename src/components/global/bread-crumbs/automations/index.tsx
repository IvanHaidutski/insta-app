"use client";

import { ChevronRight, Pencil } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/user-queries";
import { useEditAutomation } from "@/hooks/use-automations";
import { useMutationDataState } from "@/hooks/use-mutation-data";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  //WIP: fetch the automation data
  //User mutation stuff to update the automations
  const { data } = useQueryAutomation(id);
  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

  const { latestVariable } = useMutationDataState(["update-automations"]);

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable?.variables : "Add a new name"
              }
              className="bg-transparent h-auto outline-none text-base border-none p-0"
            />
          ) : (
            <p className="text-[#9B9CA0] truncate">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name}
            </p>
          )}

          {edit ? (
            <></>
          ) : (
            <span
              className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0"
              onClick={enableEdit}
            >
              <Pencil size={14} />
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All updates are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationsBreadCrumb;
