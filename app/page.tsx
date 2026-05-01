import type { Metadata } from "next";
import { FAQSchema } from "@/components/ui/FAQSchema";
import { OrganizationSchema } from "@/components/ui/OrganizationSchema";
import { faq, pricing } from "@/content/siteContent";
import HomepageNav from "@/components/sections/HomepageNav";
import Hero from "@/components/sections/Hero";
import EmpathyHook from "@/components/sections/EmpathyHook";
import PriorAttempts from "@/components/sections/PriorAttempts";
import CostOfInaction from "@/components/sections/CostOfInaction";
import ProofInsight from "@/components/sections/ProofInsight";
import PathSelector from "@/components/sections/PathSelector";
import Mechanism from "@/components/sections/Mechanism";
import IdentityFrame from "@/components/sections/IdentityFrame";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import PracticeRequirement from "@/components/sections/PracticeRequirement";
import WhatItsNot from "@/components/sections/WhatItsNot";
import Testimonials from "@/components/sections/Testimonials";
import Founder from "@/components/sections/Founder";
import HomepageFAQ from "@/components/sections/HomepageFAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Accountability Coaching for Business Owners | Pallume",
  description:
    "Pallume builds a custom AI accountability system for business owners. Deep-dive interview, daily check-in, weekly coaching review. Starting at $1,000/month.",
  alternates: {
    canonical: "https://pallume.com",
  },
  openGraph: {
    title: "Accountability Coaching for Business Owners | Pallume",
    description:
      "Pallume builds a custom AI accountability system for business owners. Deep-dive interview, daily check-in, weekly coaching review. Starting at $1,000/month.",
    url: "https://pallume.com",
    siteName: "Pallume",
    locale: "en_US",
    type: "website",
  },
};

const HOMEPAGE_FAQ_QUESTIONS = [
  "Isn't this just ChatGPT? I could do this myself.",
  "How much time does this take each day?",
  "$1,000/month is a lot.",
  "What if I fall off the system or get busy?",
  "Is there a minimum commitment?",
];

const allFaqItems = [...faq.items, ...pricing.faq.items];

const homepageFaqItems = HOMEPAGE_FAQ_QUESTIONS.map((q) => {
  const item = allFaqItems.find((i) => i.question === q)!;
  return { question: item.question, answer: item.answer.join("\n\n") };
});

export default function Home() {
  return (
    <main>
      <OrganizationSchema />
      <FAQSchema items={homepageFaqItems} />
      <HomepageNav />
      <Hero />
      <EmpathyHook />
      <PriorAttempts />
      <CostOfInaction />
      <ProofInsight />
      {/* Journal product section — name TBD */}
      <Mechanism />
      <PathSelector />
      <HowItWorks />
      <Features />
      <PracticeRequirement />
      <IdentityFrame />
      <WhatItsNot />
      <Testimonials />
      <Founder />
      <HomepageFAQ />
      <CTA />
      <Footer />
    </main>
  );
}
