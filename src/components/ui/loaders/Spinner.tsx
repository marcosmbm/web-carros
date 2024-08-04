import { FaSpinner } from "react-icons/fa";

interface SpinnerProps {
  isFull?: boolean;
  size?: number;
}

export function Spinner({ isFull = false, size = 20 }: SpinnerProps) {
  if (isFull) {
    return (
      <div className="w-full flex items-center justify-center">
        <FaSpinner className="animate-spin" size={size} />
      </div>
    );
  }

  return <FaSpinner className="animate-spin" />;
}
