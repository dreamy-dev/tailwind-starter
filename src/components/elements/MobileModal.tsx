import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

export default function MobileModal() {
  useEffect(() => {
    // Add the "overflow-hidden" class to the body when the component mounts
    document.body.classList.add("overflow-hidden");

    // Remove the "overflow-hidden" class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div>
      <div className="relative z-10 ">
        <div>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-100 transition-opacity" />
        </div>
        <div className="fixed inset-0 w-screen ">
          <div className="flex h-full w-full items-center justify-center text-center">
            <div>
              <div className="relative transform w-full h-screen rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8  sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="text-base font-semibold leading-6 text-gray-900">
                      Diese Ansicht ist noch nicht fertig
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Diese Ansicht sind wir noch am Entwickeln
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
