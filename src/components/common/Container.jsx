import { cn } from "../../utils/cn";

export default function Container({ children, className }) {
  return <div className={cn("container-page", className)}>{children}</div>;
}
