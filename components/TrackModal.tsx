"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { addUserEmailToProduct } from "@/lib/actions";
type Props = {
  productId: string
}
const TrackModal = ({productId}:Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await addUserEmailToProduct(productId,email);
    await setIsSubmitting(false);
    setIsOpen(false);

  };

  return (
    <>
      <button
        className="bg-gray-900 border-gray-900 hover:opacity-95 col-span-2 sm:col-span-4 p-4 text-white rounded-xl uppercase"
        onClick={openModal}
      >
        Track
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content ">
                <div className="flex w-full justify-between items-center ">
                  <div className="p-2 border">
                    <Image
                      src={"/assets/icons/logo.svg"}
                      alt="arrow"
                      width={25}
                      height={25}
                      //   className="max-xl:hidden absolute -left-[15%] -bottom-10 z-0"
                    />
                  </div>
                  <Image
                    src={"/assets/icons/x-close.svg"}
                    alt="close"
                    width={25}
                    height={25}
                    onClick={closeModal}
                  />
                </div>
                <div className="gap-2 grid my-4">
                  <h3 className="text-lg font-bold">
                    Stay updated with product pricing alerts right in your
                    inbox!
                  </h3>
                  <p className="text-sm">
                    Never miss a bargain again with our timely alerts!
                  </p>
                  <form className="w-full grid gap-2" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <div className="w-full flex border rounded-xl p-1 pl-2 items-center  ">
                      <Image
                        src={"/assets/icons/mail.svg"}
                        alt="email"
                        width={30}
                        height={30}
                        className="p-2 px-1"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-1 w-full outline-none "
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-900 border-gray-900 hover:opacity-95  p-4 text-white rounded-xl uppercase mt-4"
                    >
                      {isSubmitting ? "Tracking" : "Track Product"}
                    </button>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TrackModal;
