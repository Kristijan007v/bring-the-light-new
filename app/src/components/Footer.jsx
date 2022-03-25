import React, { useState } from "react";
import FlagLine from "./FlagLine";
import toast, { Toaster } from "react-hot-toast";
import Discord from "./Social/Discord";
import Twitter from "./Social/Twitter";
import Instagram from "./Social/Instagram";
import Button from "./Buttons/Button";
import TextBox from "./TextBox";

export default function Footer({ openPrivacy, openTerms }) {
  const [query, setQuery] = useState({
    name: "",
    email: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(
      "https://getform.io/https://getform.io/f/4ca92670-a5be-4daa-ba6a-83eebcce170b",
      {
        method: "POST",
        body: formData,
      }
    ).then(() => setQuery({ name: "", email: "" }));
  };
  return (
    <div>
      <footer className="p-6 text-white">
        <div className="m-auto mb-6 w-full rounded-md bg-gradient-to-r from-blue-600 to-yellow-500 p-1 lg:w-3/5">
          <div
            className={`border-grad relative rounded-md bg-gray-700 pt-14 pr-10 pb-14 pl-10 text-center`}
          >
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
        <div className="flex flex-col gap-6 text-center lg:gap-8">
          <p className="heading-2">Stay up to date</p>
          <form
            className="flex w-full justify-center gap-2"
            onSubmit={formSubmit}
          >
            <input
              type="email"
              name="email"
              required
              className="form-control input-text w-full lg:w-1/5"
              placeholder="Email address"
              value={query.email}
              onChange={handleParam()}
            />
            <button className="btn" type="submit">
              Apply
            </button>
          </form>
          <p className="heading-2">Follow us on</p>
          <div className="flex justify-center gap-4">
            <Twitter />

            <Discord />

            <Instagram />
          </div>
          <div>
            <div className="m-auto mb-4 flex w-full flex-col justify-center gap-2 rounded-md bg-gray-800 p-4 lg:w-2/6 lg:flex-row lg:gap-6">
              <a className="link-special" onClick={openPrivacy}>
                PRIVACY POLICY
              </a>
              <a className="link-special" onClick={openTerms}>
                TERMS & CONDITIONS
              </a>
            </div>
            <div className="p-gray flex flex-col justify-center gap-2 lg:flex-row">
              <p>
                ©{" "}
                <a className="link" href="https://art-allocated.me">
                  {" "}
                  Art Allocated
                </a>{" "}
                2022.{" "}
              </p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <FlagLine />
    </div>
  );
}
