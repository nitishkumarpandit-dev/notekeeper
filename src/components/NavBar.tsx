"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <main className="p-8">
      <header className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-title-large">Good Morning!</h2>
          <p className="">Fri, Jul 05 2024</p>
        </div>

        <div className="flex gap-5 items-start">
          <Image
            src={`/images/${theme === "light" ? "brightness.png" : "moon.png"}`}
            width={25}
            height={25}
            alt="theme"
            className="invert cursor-pointer"
          />

          <Sheet>
            <SheetTrigger>
              <Image
                src={`/images/hamburger.png`}
                width={25}
                height={25}
                alt="theme"
                className="invert cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </main>
  );
};

export default NavBar;
