import UserNavBar from "../components/UserNavBar";
import Link from "next/link";

export default function LandPage() {
  return (
    <div className="defaultContainer flex flex-col">
      <UserNavBar />
      <div className=" text-white">Hello world</div>
    </div>
  );
}
