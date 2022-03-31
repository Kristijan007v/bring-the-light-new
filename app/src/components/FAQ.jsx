import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyErrorBoundary from "./MyErrorBoundary";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    x: 0,
  },
  collapsed: { opacity: 0, height: 0, x: 30 },
};

const questions = [
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
  {
    question: "Is this a FAQ?",
    answer: "Here goes the answer to the question.",
  },
];

export default function FAQ({ text }) {
  const [faq, setFaq] = useState(false);

  const open = () => {
    setFaq(true);
  };

  const close = () => {
    setFaq(false);
  };

  return (
    <MyErrorBoundary>
      <div
        className={`rounded-md ${
          faq == "true" ? "bg-white" : "bg-gray-800"
        } p-3 lg:p-4`}
      >
        <div className="flex items-center justify-between space-x-2 text-gray-300">
          <p>{text}</p>
          <button
            className="btn-round"
            onClick={() => (faq ? close() : open())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 lg:h-5 lg:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {faq && (
            <motion.div
              className={`content mt-4 rounded-md bg-gray-600 p-4 text-white lg:p-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>Here goes the answer to the question.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MyErrorBoundary>
  );
}
