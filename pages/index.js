import Head from "next/head";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Merch from "./Merch";
import Frontpage from "./Frontpage";
import Tour from "./Tour";
import Contact from "./Contact";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Tour", href: "#tour", current: false },
  { name: "Merch", href: "#merch", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Dust Biters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Disclosure
        as="nav"
        className={` border-b border-gray-200 ${
          navOpen ? "bg-black" : "bg-white"
        }`}
      >
        {({ open }) => (
          <>
            <div
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-nowrap justify-end sm:justify-center`}
            >
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-orange-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden justify-self-end">
                  {/* Mobile menu button */}
                  <Disclosure.Button className=" inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2  focus:ring-gray-500">
                    <span className="sr-only">Open main menu</span>
                    {navOpen ? (
                      <XIcon
                        className="block h-6 w-6 text-orange-700"
                        aria-hidden="true"
                        onClick={() => setNavOpen(false)}
                      />
                    ) : (
                      <MenuIcon
                        className="block h-6 w-6 text-gray-400"
                        aria-hidden="true"
                        onClick={() => setNavOpen(true)}
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {navOpen && (
              <Disclosure.Panel className="sm:hidden" static>
                <div className=" h-screen bg-black pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      onClick={() => setNavOpen(false)}
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " border-orange-500 text-orange-700"
                          : "border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>

      <div className="py-10">
        <main>
          <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 sm:px-0">
              <Frontpage />
              <Tour />
              <Merch />
              <Contact />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}
