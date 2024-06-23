import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CaseStudySection() {
  const studies = [
    {
      title:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      title:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      title:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Case Studies
        </div>
        <p className="text-p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] mt-[80px] bg-secondary text-white p-8 md:p-[50px]">
        {studies.map((study, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div>
              <p className="pb-[20px]">{study.title}</p>
              <Link href="/">
                <div className="flex gap-2 items-center">
                  <p className="text-primary">Learn more</p>
                  <div>
                    <img src="/images/arrow_rotate.png" />
                  </div>
                </div>
              </Link>
            </div>
            {index !== 2 && (
              <div className="mx-4 xl:mx-[64px] hidden md:block">
                <Separator orientation="vertical" className="h-[186px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
