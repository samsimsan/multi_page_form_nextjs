"use client";

import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import classNames from "classnames";
import Page1 from "@/components/pages/page1";

export default function Home() {

  return (
    <main className="bg-[var(--White)] mx-4">
      <Page1 />
    </main>
  )
}
