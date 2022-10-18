import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <div className="absolute z-0">
        <Image
          src="/static/background img.svg"
          alt="background"
          width={1200}
          height={600}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 pl-5 pt-5 z-10">
        <Image
          src="/static/inner box.svg"
          alt="innerbox"
          width={808}
          height={544}
        />
      </div>
      <div className="absolute ml-12 mt-12 z-20 w-[752px] h-[486px] bg-[#EEEEEE] rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Layout;
