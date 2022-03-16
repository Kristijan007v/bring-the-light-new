import React from "react";
import FlagLine from "./FlagLine";
import toast, { Toaster } from "react-hot-toast";
import Discord from "./Social/Discord";
import Twitter from "./Social/Twitter";
import Instagram from "./Social/Instagram";
import Button from "./Buttons/Button";

const NewsletterNotify = () =>
  toast.success("You have succesfully applied to our Newsletter. Hurray!");

export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="p-6 text-white">
        <div className="m-auto mb-6 w-full rounded-md bg-gradient-to-r from-blue-600 to-yellow-500 p-1 lg:w-3/5">
          <div className="border-grad relative rounded-md bg-gray-700 pt-14 pr-10 pb-14 pl-10 text-center">
            <p className="text-2xl">20.456 people have brought the light.</p>
            <span className="absolute bottom-4 right-4">
              <svg
                width="22"
                height="26"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 28.16C28.48 28.16 27.12 28.76 26.08 29.7L11.82 21.4C11.92 20.94 12 20.48 12 20C12 19.52 11.92 19.06 11.82 18.6L25.92 10.38C27 11.38 28.42 12 30 12C33.32 12 36 9.32 36 6C36 2.68 33.32 0 30 0C26.68 0 24 2.68 24 6C24 6.48 24.08 6.94 24.18 7.4L10.08 15.62C9 14.62 7.58 14 6 14C2.68 14 0 16.68 0 20C0 23.32 2.68 26 6 26C7.58 26 9 25.38 10.08 24.38L24.32 32.7C24.22 33.12 24.16 33.56 24.16 34C24.16 37.22 26.78 39.84 30 39.84C33.22 39.84 35.84 37.22 35.84 34C35.84 30.78 33.22 28.16 30 28.16Z"
                  fill="#C4C4C4"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center">
          <p className="heading-2">Stay up to date</p>
          <div className="flex w-full justify-center gap-2">
            <input
              className="input-text w-full lg:w-1/5"
              type="text"
              placeholder="Email address"
            />
            <Button text={"APPLY"} onclick={NewsletterNotify} />
          </div>
          <p className="heading-2">Follow us on</p>
          <div className="flex justify-center gap-4">
            <Twitter />

            <Discord />

            <Instagram />
          </div>
          <p className="text-gray-400">
            Art Allocated 2022. All Rights Reserved.
          </p>
        </div>
      </footer>
      <FlagLine />
    </div>
  );
}
