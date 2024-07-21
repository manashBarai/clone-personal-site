import Link from "next/link";
import React from "react";
import Clock from "./Clock";
interface NavbarProps {
  menuWidth: boolean;
}

export default function Footer({ menuWidth }: NavbarProps) {
  return (
    <div
      className={`bg-zinc-900 ${
        menuWidth ? "lg:px-52 px-10" : "px-20 lg:px-72"
      }  border-zinc-600 border-t`}
    >
      <div className="lg:flex gap-44 grid grid-cols-2 py-11">
        <ul className="text-zinc-600 flex flex-col gap-1 flex-wrap">
          <span className="text-white">Index</span>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Explore</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Boutique</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Projects</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Services</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>About</Link>{" "}
          </li>
        </ul>

        <ul className="text-zinc-600 flex flex-col gap-1">
          <span className="text-white">Products</span>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Billify</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Supply</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Linx</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>CourseOS</Link>{" "}
          </li>
        </ul>
        <ul className="text-zinc-600 flex flex-col gap-1">
          <span className="text-white">Resources</span>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Feed</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Thought</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Stack</Link>{" "}
          </li>
        </ul>
        <ul className="text-zinc-600 flex flex-col gap-1">
          <span className="text-white">Connect</span>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Contact</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Twitter</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>Linkedin</Link>{" "}
          </li>
          <li className="hover:text-white transition-all duration-150">
            {" "}
            <Link href={"#"}>YouTube</Link>{" "}
          </li>
        </ul>
      </div>

      <div className=" ">
        <ul className="flex justify-between border-b w-full gap-10 ">
          <div className="border-zinc-600 border-t flex-1 py-11 ">
            <div className="flex items-center gap-2  ">
              Currently 🧑🏼‍💻 working <div className="activeWorking"></div>{" "}
            </div>
            <Link
              href={"#"}
              className="text-zinc-700 hover:text-white transition-all duration-150"
            >
              Reach Out {"-->"}
            </Link>
          </div>

          <div className="border-zinc-600 border-t flex-1 text-zinc-700 py-11 ">
            <Clock />
          </div>
        </ul>

        <ul className="py-12 text-zinc-700 gap-16 flex">
            <li className="hover:text-white  transition-all duration-150 "> <Link href={"#"}> Buy this template {"-->"}</Link> </li>
            <li className="hover:text-white  transition-all duration-150 "> <Link href={"#"}>Pro Version</Link> </li>
            <li className="hover:text-white  transition-all duration-150 "> <Link href={"#"}>By Canvas Supply</Link> </li>
            <li className="hover:text-white  transition-all duration-150 "> <Link href={"#"}>Made in Farmer</Link> </li>
            

        </ul>

      </div>
      
    </div>
  );
}
