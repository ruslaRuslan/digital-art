"use client";
import Data from "../../Data.json";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinkComponents from "../NavLinkComponents";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        marginTop: 10,
        backgroundColor: "#2B2B2B",
        color: "#fff",
      }}
    >
      <nav className="container px-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img alt="" src={Data.imageMarketplease} />
            <p className="pt-1">{Data.MarketplaceTitle}</p>
          </div>
          <div className="min-[0px]:hidden md:hidden lg:block sm:hidden">
            <div className="flex gap-10">
              {Data.headerDates.map(({ id, title, href, images }) => {
                return (
                  <NavLinkComponents key={id} to={href}>
                    <div className="flex">
                      <img src={images} />
                      <p>{title}</p>
                    </div>
                  </NavLinkComponents>
                );
              })}
            </div>
          </div>
          <div className=" lg:hidden absolute right-10">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          style={{
            backgroundColor: mobileMenuOpen ? "#2B2B2B" : "white",
            border: mobileMenuOpen ? "none" : "1px solid #2B2B2B",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5 flex items-center  ">
              <img
                alt=""
                src={Data.imageMarketplease}
                className="h-8 w-auto md:hidden sm:hidden"
              />
              <p className="md:hidden sm:hidden">{Data.MarketplaceTitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                {Data.headerDates.map(({ id, title, href, images }) => {
                  return (
                    <div key={id} className="flex items-center gap-1">
                      <img src={images} />
                      <a
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                        href={href}
                      >
                        {title}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
