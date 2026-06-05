// components/layout/Container.tsx

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-400
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
      "
    >
      {children}
    </div>
  );
}