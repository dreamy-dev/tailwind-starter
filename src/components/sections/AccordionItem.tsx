import React, { ReactNode, useState } from "react";
import H3 from "../typography/H3";


interface AccordionItemProps {
  title?: string;
  innerTitle?: string;
  textFirst?: string;
  titleInner2?: string;
  textSecond?: string;
  index?: number;

  children?: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  index,
  children,
}) => {


  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div key={index}>
      <H3>
        <button
          type="button"
          className={`flex justify-between items-center py-5 w-full font-medium text-left ${
            isOpen
              ? "text-black bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              : "text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          }`}
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`accordion-flush-body-${index}`}
        >
          {title}
          <svg
            data-accordion-icon=""
            className={`w-6 h-6 ${isOpen ? "rotate-180" : ""} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </H3>
      <div
        id={`accordion-flush-body-${index}`}
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-flush-heading-${index}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
