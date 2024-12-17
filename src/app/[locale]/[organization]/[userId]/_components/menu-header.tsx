"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MenuHeader = ({
  organizationLogo,
  urlNewOrder,
  lbImpact,
  lbAboutProject,
  lbNewOrder,
}: {
  organizationLogo: string;
  urlNewOrder: string;
  lbImpact: string;
  lbAboutProject: string;
  lbNewOrder: string;
}) => {
  const [bgColor, setBgColor] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > window.screen.height - 100) {
      setBgColor("bg-black");
    } else {
      setBgColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        `grid grid-cols-2 md:grid-cols-3 h-fit text-white justify-items-stretch fixed w-full p-5 ` +
          bgColor
      )}
    >
      <Avatar className="w-28 h-10">
        <AvatarImage src={organizationLogo} />
      </Avatar>
      <div className="flex justify-center gap-8 menu">
        <Button
          variant="link"
          className="text-white font-semibold hover:underline decoration-white text-xs"
        >
          <Link href="#contribution-section">{lbImpact}</Link>
        </Button>
        <Button
          variant="link"
          className="text-white font-semibold hover:underline decoration-white text-xs"
        >
          <Link href="#about-project">{lbAboutProject}</Link>
        </Button>
      </div>
      <Link
        className="w-fit items-center justify-self-end"
        href={urlNewOrder}
      >
        <Button className="bg-white text-black">{lbNewOrder}</Button>
      </Link>
    </div>
  );
};

export default MenuHeader;
