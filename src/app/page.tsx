import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-[100%] gap-x-5 flex justify-end">
        <UserButton></UserButton>
        <ThemeToggle />
      </div>

      <h1 className="text-blue-500 text-2xl font-poppins">Home page</h1>

      <Button variant={"link"}>Click</Button>
    </div>
  );
};

