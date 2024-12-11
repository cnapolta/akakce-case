/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "@remix-run/react";
import { CardWrapperProps } from "./types";

export function CardWrapper({
  children,
  noLink,
  to,
  className,
  onClick,
}: CardWrapperProps) {
  if (noLink) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
