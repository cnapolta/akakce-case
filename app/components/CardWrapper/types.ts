export interface CardWrapperProps {
  children: React.ReactNode;
  noLink?: boolean;
  to: string;
  className: string;
  onClick?: () => void;
}
