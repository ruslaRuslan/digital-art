import Data from "../../Data.json";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavLinkComponents from "../NavLinkComponents";
import NavLinkForPhoneComponents from "../NavLinkForPhoneComponents";

export default function Example(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mt-[10px] bg-[#2B2B2B] text-[#fff]">
      <nav className="container px-10">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img src={Data.imageMarketplease} alt="" className="h-[45px]" />
            {Data.explore.slice(0, 1).map((element) => {
              return (
                <NavLinkComponents key={element.id} to={element.href}>
                  {element.title}
                </NavLinkComponents>
              );
            })}
          </div>
          <div className="min-[0px]:hidden md:hidden lg:block sm:hidden">
            <div className="flex gap-10 relative">
              {Data.explore.slice(1).map(({ id, title, href, images }) => {
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
              <svg
                className="h-8 w-8 text-red-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
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
            <div className="-m-1.5 p-1.5 flex items-center gap-1  ">
              <img
                alt=""
                src={Data.imageMarketplease}
                className="h-8 w-auto md:hidden sm:hidden"
              />
              {Data.explore.slice(0, 1).map((element) => {
                return (
                  <div key={element.id}>
                    <a href={element.href}>{element.title}</a>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className=" flex flex-col mt-7">
                {Data.explore.slice(1).map(({ id, title, href, images }) => {
                  return (
                    <NavLinkForPhoneComponents key={id} to={href}>
                      <div className="flex">
                        <img src={images} />
                        <p>{title}</p>
                      </div>
                    </NavLinkForPhoneComponents>
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
