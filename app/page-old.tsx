/* import Image from "next/image"; */
import Section from "@/layout/section";
import AccordionUI from "@/layout/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
        <Section />
        <Section />
        <AccordionUI />
        <Link href="/posts" className="bg-fuchsia-600 text-white px-6 py-3 rounded hover:bg-fuchsia-700">
          View Posts
        </Link>
    </div>
  );
}
