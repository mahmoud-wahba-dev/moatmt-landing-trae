import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const BtnConsult = () => {
  return (
    <Link
      href="/learn-more"
      className="btn btn-outline  font-bold text-14px text-white ml-4 hover:bg-white hover:text-primary flex items-center gap-2.5"
    >
      طلــب استشــارة خبيــر
      <MdOutlineKeyboardArrowLeft className="size-4" />
    </Link>
  );
};

export default BtnConsult;
