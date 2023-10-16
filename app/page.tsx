"use client";
import WhatIsVBot from "@/components/WhatIsVBot";
import Customers from "@/components/Customers";
import Download from "@/components/Download";
import WhyVBot from '@/components/WhyVBot';
import Features from "@/components/Features";
import News from "@/components/News";


export default function Home() {

  return (
    <>
      <WhatIsVBot />
      <Customers />
      <WhyVBot />
      <Features />
      <Download />
      <News />
    </>
  );
}
