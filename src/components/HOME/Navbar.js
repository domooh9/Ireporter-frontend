import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";


export default function Example() {
  return (

    <Disclosure as="nav" className="pt-6">
      {({ open }) => (
       <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg"
                    alt="Ireporter"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto mx-4"
                    src="https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg"
                    alt="Ireporter"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="/"
                    className="border-primary-color-500 text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="About"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    About 
                  </a>
                  <a
                    href="Partners"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Partners
                  </a>
                  <a
                    href="Cases"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Cases
                  </a>
                  <a
                    href="Testimonials"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="flex items-center justify-center gap-3">
                
                  <Link
                    to="/signup"
                    className="px-4 py-2 text-md text-white underline rounded-md hover:animate-pulse"
                  >
                    Register
                  </Link>

                  <Link
                    to="/signin"
                    className="px-4 py-2 text-sm md:text-base lg:text-base text-white pink-button rounded-md hover:bg-slate-900 hover:animate-pulse"
                  >
                    Customer Login
                  </Link>

                  <Link
                    to="/signin"
                    className="px-4 py-2 text-sm md:text-base lg:text-base text-white pink-button rounded-md hover:bg-slate-900 hover:animate-pulse"
                    
                  >
                    Admin Login
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-color-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
   
    <div className="navTop">
            <div className="navItem">
            <img src='https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg' alt="" width={100} height={100} />
            <div>iREPORTER</div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-white pb-8">
            <div className="pt-2 pb-3 space-y-1 ">
              {/* Current: "bg-primary-color-50 border-primary-color-500 text-primary-color-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-primary-color-50 border-primary-color-500 text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
              >
                Partners
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
              >
                Cases
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-md font-medium"
              >
                Testimonials
              </Disclosure.Button>
            </div>
            <div className="flex flex-col">
              <Link
                to="/signup"
                className="px-4 py-2 ml-2 w-48 text-md text-black underline rounded-md hover:animate-pulse"
              >
                Register
              </Link>

              <Link
                to="/signin"
                className="px-4 py-2 ml-2 w-48 text-md font-semibold text-white pink-button rounded-md hover:bg-pink-600 hover:animate-pulse"
              >
                Customer Login
              </Link>

              <Link
                to="/signin"
                className="px-4 py-2 ml-2 w-48 text-md font-semibold text-black border-1 border-primary-color rounded-md hover:bg-gray-700 hover:animate-pulse"
              >
                Admin Login
              </Link>
            </div>
          </Disclosure.Panel>
        </div>
        </div>
        </>
      )}
    </Disclosure>
  );
}

