import { Menu } from "lucide-react";
import Link from "next/link";

export default function UserNavBar() {
  return (
    <div className="absolute bg-gray-50 flex justify-between top-0 left-0 w-screen h-16 p-4 items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 font-semibold text-2xl">
        GymStats
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
