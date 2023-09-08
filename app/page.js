"use client";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import { Cinzel_Decorative } from "next/font/google";
import { Poiret_One } from "next/font/google";
import TechsList from "@/components/TechsList";
import { capitalize } from "lodash";

const cDecorative = Cinzel_Decorative({ subsets: ["latin"], weight: ["400"] });
const pOne = Poiret_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const frontend_techs = ["ReactJS", "VueJS", "Bootstrap", "TailwindCSS"];
  const backend_techs = ["NextJS", "ExpressJS", "NestJS", "GraphQL"];
  const database_techs = ["PostgreSQL", "MongoDB", "MySQL", "Prisma"];
  const deployment_techs = ["Heroku", "Vercel", "Docker", "Git"];

  return (
    <main>
      <CustomCursor />
      <Header />
      <main
        id="about-me"
        className={`${cDecorative.className} code-cursor text-white pb-64 `}
      >
        <div className="flex flex-col items-center p-12 text-center">
          <p>
            I&apos;m a Full-Stack Engineer, adept at transforming your visionary
            ideas into coded reality and your artistic designs into interactive{" "}
            web applications.
          </p>
          <p className="mt-3">
            I conjure this magic using the following skills and technologies
          </p>
        </div>
        <div className={`${pOne.className} techStack flex flex-wrap `}>
          {Object.entries({
            frontend_techs,
            backend_techs,
            database_techs,
            deployment_techs,
          }).map(([key, value]) => {
            return (
              <TechsList
                key={key}
                technologies={value}
                title={capitalize(key.split("_")[0])}
              />
            );
          })}
        </div>
      </main>
    </main>
  );
}
