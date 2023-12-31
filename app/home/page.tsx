import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <BadgeCheck className="h-6 w-6 mr-2" />
          Learning made simple!
        </div>
        <h1 className="text-3xl md:text-6xl text-center mb-6">
          LearnFast, A solution to...
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-pink-700 text-white px-4 p-2 rounded-md pb-4 w-fit">
        Hit Targets, Unleash Success
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className,
      )}>
     Unleash your potential! Dive into diverse courses, expert-led content, and a supportive community. Learn at your pace and achieve your goals with LearnFast.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-in">
          Try it out!
        </Link>
      </Button>
    </div>
  );
};
export default MarketingPage;
