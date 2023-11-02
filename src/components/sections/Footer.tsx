import Button from "../elements/ButtonSecondary";

const navigation = {
  legal: [
    { name: "Impressum", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Zertifizierung", href: "#" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: any) => (
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          {...props}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0647 6.30016C15.2027 6.26385 14.3455 6.43803 13.577 6.80561C12.8086 7.17319 12.1554 7.72154 11.6814 8.39689V6.28418H7.45741V19.6051H11.7113V13.1844C11.7113 11.49 12.1266 9.8542 14.5628 9.8542C17.0745 9.8542 17.4002 11.7911 17.4002 13.2963V19.6051H21.6668V12.4851C21.6668 8.98833 20.6713 6.30016 16.0647 6.30016Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.46683 0.938477C2.0449 0.938477 1.63244 1.05567 1.28161 1.27522C0.930789 1.49478 0.657354 1.80685 0.495887 2.17196C0.33442 2.53708 0.292173 2.93884 0.374488 3.32644C0.456804 3.71404 0.659984 4.07008 0.958336 4.34952C1.25669 4.62897 1.63681 4.81927 2.05064 4.89637C2.46446 4.97347 2.89341 4.9339 3.28322 4.78267C3.67304 4.63143 4.00622 4.37532 4.24063 4.04673C4.47505 3.71814 4.60016 3.33182 4.60016 2.93662C4.60016 2.40668 4.3754 1.89844 3.97532 1.52372C3.57525 1.14899 3.03263 0.938477 2.46683 0.938477Z"
            fill="white"
          />
          <path
            d="M4.60016 6.30016H0.333497V19.6051H4.60016V6.30016Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg
          {...props}
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3477 0.271484L16.759 15.3546L22.9965 26.2715H16.4329L10.1946 15.3546L18.8064 0.271484H25.3477ZM7.44804 3.50718L11.056 9.81511L6.07441 17.8459H0L4.91074 9.90816L1.27981 3.50718H7.44804Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-darkBlue" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-full  px-6 py-8 sm:py-8 sm:px-6 lg:px-20 lg:py-10">
        <div className="pt-8 lg:flex lg:items-center lg:justify-between">
          <img className="h-7" src="/Logo-white.svg" alt="Company name" />
          <div className="sm:mt-0 lg:flex lg:items-center lg:justify-between">
            <div className=" my-6 lg:mr-14 ">
              <Button
                backgroundColor="prymary"
                textColor="white"
                borderColor="white"
              >
                Kontakt aufnehmen
              </Button>
              {/* <button
                type="submit"
                className=" border border-white flex items-center justify-center bg-secondaryBlueDark px-3 py-2 text-xs font-medium text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryDarkBlue"
              >
                Kontakt aufnehmen
              </button> */}
            </div>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className=" pt-8  lg:flex lg:items-center lg:justify-between">
          <div className="mt-10 md:mt-0">
            <ul
              role="list"
              className="lg:flex lg:items-center lg:justify-between  gap-8"
            >
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base leading-6 text-skyblue hover:text-skyblue"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-base leading-5 text-skyblue md:order-1 md:mt-0">
            © 2023 Stadler, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
