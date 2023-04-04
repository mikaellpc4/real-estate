import { Root, Trigger, Portal, Content } from "@radix-ui/react-hover-card";
import { ReactNode } from "react";

type buttonHoverProps = {
  buttonName: string;
  children: ReactNode;
  position: "left" | "right";
};

export function ButtonHover({
  buttonName,
  children,
  position,
}: buttonHoverProps) {
  const isLeft = position === "left";

  return (
    <Root openDelay={150} closeDelay={150}>
      <Trigger asChild>
        <button
          className={`rounded-xl ${
            isLeft ? "rounded-r-none" : "rounded-l-none"
          } rounded-bl-none rounded-br-none bg-white p-4 text-xl hover:bg-[#fe6300]`}
        >
          {buttonName}
        </button>
      </Trigger>
      <Portal>
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
