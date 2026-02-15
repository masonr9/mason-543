/* import Image from "next/image"; */
import Section from "@/layout/section";
import AccordionUI from "@/layout/UI/accordion";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
        <Section />
        <Section />
        <AccordionUI />
    </div>
  );
}
