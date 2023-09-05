"use client";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Header />
    </main>
  );
}
