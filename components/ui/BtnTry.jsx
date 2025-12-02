import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";

// Props for easy reusability (optional defaults)
export default function BtnTry({
  href = "/some-path",
  children = "جـــرّب مجــانًــا",
  className = "bg-white h-14 gap-3",
  icon = <GoArrowUpLeft />,
  iconContainerClassName = "bg-primary text-white",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`btn  rounded-40px  font-bold text-14px p-2.5 flex items-center  ${className}`}
      {...props}
    >
      {children}
      <span className={` size-11 center_flex rounded-full ${iconContainerClassName}`}>
        {icon}
      </span>
    </Link>
  );
}
