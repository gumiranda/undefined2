"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import type { SectionProps } from "../_shared/types";

function TabContent({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-(--radius-card) bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
      <p>{label}</p>
      <Image
        src="https://assets.aceternity.com/demos/Screenshot+2024-02-06+at+1.16.14%E2%80%AFPM.png"
        alt="feature screenshot"
        width={1000}
        height={1000}
        className="absolute -bottom-10 inset-x-0 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
      />
    </div>
  );
}

const tabsWithContent = [
  { title: "Product", value: "product", content: <TabContent label="Product" /> },
  { title: "Services", value: "services", content: <TabContent label="Services" /> },
  { title: "Resources", value: "resources", content: <TabContent label="Resources" /> },
  { title: "Pricing", value: "pricing", content: <TabContent label="Pricing" /> },
];

export default function FeaturesTabs({ className, id }: SectionProps) {
  return (
    <SectionWrapper id={id ?? "features"} className={className}>
      <SectionHeading
        title="Explore our platform"
        subtitle="Navigate through different areas of our product with animated tab transitions."
      />
      <div className="relative mx-auto flex h-[20rem] max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
        <Tabs tabs={tabsWithContent} />
      </div>
    </SectionWrapper>
  );
}
