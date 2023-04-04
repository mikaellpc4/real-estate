import React from "react";
import { ButtonHover } from "../buttonHover";
import { Select } from "../select";
import { BsSearch } from "react-icons/bs";
import { UseFormSetValue } from "react-hook-form";

type HomeButtonProps = {
  buttonName: string;
  position: "left" | "right";
  itens: ButtonItem[];
  getter: (registeredName: string) => SelectItem;
  setter: UseFormSetValue<any>;
};

export const HomeButton = ({
  buttonName,
  position,
  itens,
  setter,
  getter,
}: HomeButtonProps) => {
  const isLeft = position === "left";
  return (
    <ButtonHover buttonName={buttonName} position={position}>
      <div className="relative w-[800px]">
        <div
          className={`mt-1/2 absolute ${
            isLeft ? "left-[32%]" : "left-[44%]"
          } flex h-24 w-full justify-around gap-16 rounded-lg rounded-tl-none bg-white p-4 shadow-2xl`}
        >
          <div className="relative flex w-[650px] gap-10">
            {itens.map((item) => (
              <Select
                items={item.itens}
                selectName={item.name}
                selectedItemState={getter(item.setName)}
                setSelectedItem={(value) => setter(item.setName, value)}
              ></Select>
            ))}
          </div>
          <div className="self-end rounded-2xl bg-green-700 p-5 text-white">
            <BsSearch size={25} />
          </div>
        </div>
      </div>
    </ButtonHover>
  );
};
