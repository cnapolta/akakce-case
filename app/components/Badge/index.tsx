import { BadgeProps } from "./types";

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
