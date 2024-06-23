import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  titleTop: string;
  titleBottom: string;
  bg: string;
  titleBg: string;
  image: string;
  darkArrow?: boolean;
  link?: string;
}

function ServiceCard({
  titleTop,
  titleBottom,
  bg,
  titleBg,
  image,
  darkArrow = true,
  link = "/",
}: IProps) {
  return (
    <div
      className={cn(
        bg,
        "rounded-[45px] p-8 md:p-[50px] border-b-[6px] border-b-black"
      )}
    >
      <div className="flex justify-between gap-4">
        <div className="block">
          <div
            className={cn(
              " bg-primary text-h3Mobile md:text-h3 rounded-[7px] px-1",
              titleBg
            )}
          >
            {titleTop}{" "}
          </div>
          <div
            className={cn(
              " bg-primary text-h3Mobile md:text-h3 rounded-[7px] inline-block px-1",
              titleBg
            )}
          >
            {titleBottom}{" "}
          </div>
        </div>
        <div>
          <img src={image} alt="card icon" />
        </div>
      </div>
      <Link href={link}>
        <div className="flex gap-2 items-center">
          <div>
            {darkArrow ? (
              <img src="/images/arrow_dark.png" alt="dark arrow icon" />
            ) : (
              <img src="/images/arrow_light.png" alt="light arrow icon" />
            )}
          </div>
          <p className={cn("text-p", darkArrow ? "text-black" : "text-white")}>
            Learn more
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
