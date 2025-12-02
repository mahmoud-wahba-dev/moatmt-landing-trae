// InfoItem.jsx
export default function InfoItem({
  icon: Icon,
  iconClass = "text-secondary size-8",
  children,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-6 mb-7 ${className}`}>
      <Icon className={iconClass} />
      <p className="font-semibold text-base">{children}</p>
    </div>
  );
}
