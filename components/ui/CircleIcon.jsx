import React from "react";

// icon: pass the icon component (e.g., BsBagHeartFill)
// bgClass: Tailwind classes for background color
// iconClass: Tailwind classes for the icon itself
export default function CircleIcon({
  icon: Icon,
  bgClass = "bg-secondary",
  iconClass = "size-8 text-primary",
  sizeClass = "size-[75px]",
  className = "mb-6",
  ...props
}) {
  return (
    <div
      className={`${sizeClass} center_flex rounded-40px ${bgClass} ${className}`}
      {...props}
    >
      <Icon className={iconClass} />
    </div>
  );
}
