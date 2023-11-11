"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import classNames from "classnames";

export default function Home() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={`text-center ${theme?"bg-slate-300":"bg-slate-800"}`}>
      <h1 className={classNames("text-5xl", "font-bold", theme?"text-gray-800":"text-white")}>Hello!!!</h1>
      <Switch id="theFirst" className="mx-auto" checked={theme} onCheckedChange={setTheme} />
    </div>
  )
}
