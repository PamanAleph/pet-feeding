import React from "react";
import { FaBowlFood } from "react-icons/fa6";

interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  let color =
    status === "moving" ? "white" : status === "idle" ? "black" : "red";

  return (
    <section className="flex py-8">
      <div className="border-2 rounded-full p-16 border-black">
        <FaBowlFood color={color} size={100} />
      </div>
    </section>
  );
}
