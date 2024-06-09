import SelectLevel from "@/components/main/SelectLevel";
import Status from "@/components/main/Status";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col justify-center items-center max-w-7xl mx-auto">
      <Status status="idle" />
      <SelectLevel/>
    </section>
  );
}
