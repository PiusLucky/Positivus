import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainButton from "../common/MainButton";

function ContactUsSection() {
  return (
    <section className="bg-accent flex justify-between w-full rounded-[45px] relative overflow-x-hidden">
      <div className="py-[60px] px-8 md:px-[100px] xl:pr-[500px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
          <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
            Contact Us
          </div>
          <p className="text-p">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="mt-[40px]">
          <div>
            <RadioGroup defaultValue="comfortable" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="say_hi" id="r1" />
                <Label htmlFor="r1">Say Hi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="get_a_quote" id="r2" />
                <Label htmlFor="r2">Get a Qoute</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mt-[25px]">
            <p className="pb-[5px]">Name</p>
            <Input type="text" placeholder="Name" />
          </div>

          <div className="mt-[25px]">
            <p className="pb-[5px]">Email*</p>
            <Input type="email" placeholder="Email" />
          </div>

          <div className="mt-[25px]">
            <p className="pb-[5px]">Message*</p>
            <Textarea placeholder="Message" />
          </div>
        </div>

        <div className="mt-[40px]">
          <MainButton
            text="Send Message"
            classes="bg-secondary text-white text-[18px] w-full md:w-full hover:text-black"
          />
        </div>
      </div>
      <div className="hidden xl:block absolute top-0 right-[-20rem]">
        <img src="/images/contact_illustration.png" alt="illustration" />
      </div>
    </section>
  );
}

export default ContactUsSection;
