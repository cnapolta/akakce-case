import { ContainerProps } from "./types";

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 w-full ${className}`}>
      <div className="flex justify-center gap-x-4">
        <img className="h-16" src="/akakce-logo.png" alt="logo" />
      </div>
      <p className="text-center my-4 text-gray-700 font-semibold">
        Akakçe Test Case - Can Polat
      </p>
      {children}
    </div>
  );
}
