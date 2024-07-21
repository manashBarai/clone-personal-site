import Image from "next/image";
import React from "react";

interface Thought {
  icon: string;
  title: string;
  service: string;
}
const thoughts: Thought[] = [
  {
    icon: "/images/thoughts/grouth.svg",
    title: "Productize Your Design Skills",
    service: "Business",
  },
  {
    icon: "/images/thoughts/freelanch.svg",
    title: "Freelancing in Digital Design",
    service: "Business",
  },
  {
    icon: "/images/thoughts/sharesvg.svg",
    title: "Designing for Shareability",
    service: "Design",
  },
  {
    icon: "/images/thoughts/Entripenure.svg",
    title: "A New Era of Entrepreneurship",
    service: "Business",
  },
  {
    icon: "/images/thoughts/vr.svg",
    title: "The Age of Mobile and VR",
    service: "Business",
  },
  {
    icon: "/images/thoughts/emolution.svg",
    title: "The Evolution of Digital",
    service: "Design",
  },
];

const social: Thought[] = [
  {
    icon: "/images/social/lemonwebp.webp",
    title: "Lemon Squeezy",
    service: "Payment Platform",
  },
  {
    icon: "/images/social/farmer.png",
    title: "Farmer",
    service: "Web Design Platform",
  },
  {
    icon: "/images/social/cron.webp",
    title: "Cron",
    service: "Calender",
  },
  {
    icon: "/images/social/figmawebp.webp",
    title: "Figma",
    service: "Design Tool",
  },
  {
    icon: "/images/social/arc.webp",
    title: "Arc",
    service: "Browser",
  },
  {
    icon: "/images/social/palakjpg.jpg",
    title: "Typefully",
    service: "Write & Scheduler for Twitter/X",
  },
];

export default function page() {
  return (
    <div className="pt-16 pb-11 bg-transparent blurAnimation overflow-hidden">
      <section className="text-slate-50 flex flex-col gap-6">
        <div className="">
          <h1 className="text-5xl mb-2 font-bold">Hey, I am Jackson.</h1>
          <h1 className="text-5xl font-bold">
            I design <span className="text-zinc-600 ">software.</span>{" "}
          </h1>
        </div>
        <p className="text-zinc-600 text-2xl font-bold">
          The Original Dashboard-Styled Personal Website Template for <br />
          Farmer just got a revamp - with dashfolio NEO
        </p>

        <div className="flex gap-4 mt-1">
          <button className="border-zinc-600  rounded-lg  bg-zinc-700 text-slate-50 px-5 py-2">
            About
          </button>
          <button className="border-zinc-600 rounded-lg  border bg-transparent text-slate-50 px-5 py-2">
            Email
          </button>
        </div>
      </section>

      <section className="my-7">
        <p className="text-slate-50 mb-5 text-2xl">New Drops</p>
        <div className="flex gap-5">
          <div
            style={{ cursor: "pointer" }}
            className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden bg-white">
              <Image
                src="/images/2hOxU0GnHy6mNXV8Ei4WAFqTFps.avif"
                width={600}
                height={600}
                alt="Hero"
                className="hover:scale-110 transition-all duration-200"
              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Billify</h1>
                <p className="text-zinc-600 text-md">
                  A digital invoice template for designers
                </p>
              </div>

              <p className="border-zinc-700 text border rounded-xl h-[30px] w-[50px]  flex items-center justify-center ">
                $25
              </p>
            </div>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="flex-1 overflow-hidden bg-zinc-900 rounded-lg border-zinc-700 border cardAnimation"
          >
            <div className="h-[235px] overflow-hidden bg-white">
              <Image
                src="/images/sYwxVFlpwgzmT6YNHPrBLCpOuM.avif"
                width={600}
                height={600}
                alt="Hero"
                className="hover:scale-110 transition-all duration-200"
              />
            </div>
            <div className="p-5 flex justify-between  items-end">
              <div>
                <h1 className="text-slate-50 text-xl">Supply</h1>
                <p className="text-zinc-600 text-md">
                  A digital invoice template for designers
                </p>
              </div>

              <p className="border-zinc-700 text border rounded-xl h-[30px] w-[50px]  flex items-center justify-center ">
                $25
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 border border-zinc-700 rounded-lg mt-11 bg-zinc-900">
        <h2 className="font-bold px-5">Thoughts</h2>
        <p className="text-zinc-500 font-semibold text-sm px-5">
          Sharing experience, knowledge and videos on design & tech{" "}
        </p>

        <div className="grid grid-cols-2 my-7 px-2 " >
          {thoughts.map((thought: Thought, index: number) => (
            <button
              key={index}
              className="flex gap-4 hover:bg-zinc-800 hover:border-zinc-700 border border-transparent rounded-md py-3 w-[95%] px-3 transition-all duration-300  ease-linear items-center"
            >
              <div className="w-[37px] h-[37px] rounded-lg">
                <Image
                  src={thought.icon}
                  alt={thought.service}
                  width={37}
                  height={37}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                  {thought.title}
                </h1>
                <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                  {thought.service}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-zinc-800 px-5 grid grid-cols-2 justify-between py-7">
          <div>
            <h2 className="font-bold text-sm mb-1">Join 1k+ Readers</h2>
            <p className="text-zinc-500 font-semibold text-sm">
              Sent out every two weeks.No spam.
            </p>
          </div>
          <div className="justify-end flex gap-2">
          <input type="text" className="bg-zinc-800 border border-zinc-700 px-3 w-3/5 py-1 focus:border-zinc-600 outline-none transition-all duration-200 ease-linear rounded-lg" placeholder="Your E-Mail" />
          <button className="text-slate-50 font-bold px-3 rounded-lg py-1 bg-zinc-700">Subscribe</button>

          </div>
        </div>
      </section>

      <section className="flex  gap-11 my-11">
      <div className="feedcard bg-zinc-900 border-zinc-700 border rounded-lg p-6 flex-1 flex flex-col gap-7">
          <div className="rounded-full bg-zinc-800 p-2 border border-zinc-600 w-9 h-9 ">

            <Image src="/images/logo create (2)/Collage.png" alt="" quality={100} width={24} height={24}  />

          </div>

          <div>
            <h1 className="font-semibold">Feed</h1>
            <p className="text-zinc-500 text-[14px]">Dive into my quick thoughts</p>
          </div>
          <div>

          <button className="text-sm bg-zinc-800 px-4 rounded py-2 border border-zinc-700 ">View Feed</button>
          </div>



        </div>



        <div className="feedcard bg-zinc-900 border-zinc-700 border rounded-lg p-6 flex-1 flex flex-col gap-7">
          <div className="rounded-full bg-zinc-800 p-2 border border-zinc-600 w-9 h-9 ">

            <Image src="/images/logo create (2)/Collage.png" alt="" quality={100} width={24} height={24}  />

          </div>

          <div>
            <h1 className="font-semibold">Design Services</h1>
            <p className="text-zinc-500 text-[14px]">Explore my range of design services.</p>
          </div>
          <div>

          <button className="text-sm bg-zinc-800 px-4 rounded py-2 border border-zinc-700 ">View Services</button>
          </div>



        </div>
        


      </section>

      <section className="pt-6 border border-zinc-700 rounded-lg mt-11 bg-zinc-900">
        <h2 className="font-bold px-5">Stack</h2>
        <p className="text-zinc-500 font-semibold text-sm px-5">
        Software and resources I use on a regular basis.{" "}
        </p>

        <div className="grid grid-cols-2 my-7 px-2 " >
          {social.map((thought: Thought, index: number) => (
            <button
              key={index}
              className="flex gap-4 hover:bg-zinc-800 hover:border-zinc-700 border border-transparent rounded-md py-3 w-[95%] px-3 transition-all duration-300  ease-linear items-center"
            >
              <div className="w-[37px] h-[37px] rounded-lg">
                <Image
                  src={thought.icon}
                  alt={thought.service}
                  width={37}
                  height={37}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-slate-50 font-bold text-start text-sm my-0 p-0">
                  {thought.title}
                </h1>
                <p className="text-zinc-500 font-semibold text-[14px] text-start m-0 p-0">
                  {thought.service}
                </p>
              </div>
            </button>
          ))}
        </div>
<div className="px-5">

        <button className="text-slate-50 font-bold px-3 rounded-lg py-2 mb-8 w-full text-center border-zinc-700 border bg-zinc-800">View All</button>
</div>

      </section>

    </div>
  );
}
