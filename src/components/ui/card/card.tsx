import React, { ReactNode, memo } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

function CardComponent({
  children,
  variant = "default",
  className = "",
}: CardProps): React.ReactElement {
  const baseClasses = "bg-white rounded-2xl shadow-sm border-0";

  const variantClasses = {
    default: "",
    primary: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
    secondary: "bg-gray-50 border border-gray-200",
  };

  const cardClasses =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return <div className={cardClasses}>{children}</div>;
}

export const Card = memo(CardComponent);
