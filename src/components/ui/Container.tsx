import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full bg-sky-200 max-w[1250px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
