"use client";
import { signOut } from "next-auth/react"
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { IoMdLogOut } from "react-icons/io";

const DropdownComponent = ({ data }: { data: any }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
          <Image
            src={data?.user?.image || "/assets/icons/user.svg"}
            alt={data?.user?.name || "user"}
            width={35}
            height={35}
            className="object-contain hover:scale-105 transition-all rounded-full cursor-pointer"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button className="cursor-pointer flex items-center gap-x-2 p-2 hover:bg-black/5 transition-colors w-full rounded-md" onClick={() => signOut()}>
                  <IoMdLogOut />
                  Logout
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DuplicateActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <DuplicateInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  Duplicate
                </button>
              )}
            </Menu.Item> */}
          </div>
          {/* <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <ArchiveActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArchiveInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  Archive
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <MoveActiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <MoveInactiveIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                  Move
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <DeleteActiveIcon
                      className="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <DeleteInactiveIcon
                      className="mr-2 h-5 w-5 text-violet-400"
                      aria-hidden="true"
                    />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </div> */}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownComponent;
