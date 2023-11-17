"use client";

import Page1 from "@/components/pages/page1";
import MobileFooter from "@/components/mobileFooter";
import SideBar from "@/components/SideBar";

export default function Home() {

  return (
    <>
      <main className="bg-[var(--White)] mx-4 max-sm:mb-[10rem] p-4 shadow-xl rounded-lg">
        <section className="mainSection sm:grid">
          <SideBar />
          <Page1 />
          <MobileFooter />
        </section>

      </main>

    </>
  )
}
