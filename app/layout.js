import { Dancing_Script, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

const d_script = Dancing_Script({ subsets: ["latin"] });
const nanumMyeongjo = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Sufyan Abbada",
  description:
    "Full-stack developer with expertise in top JS frameworks. Crafting user-centric solutions with a global outlook, prioritizing performance and scalability.",
  generator: "Next.js",
  applicationName: "Sufyan's Profile",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Full Stack Engineer",
  ],
  authors: [{ name: "Sufyan Abbada" }],
  creator: "Sufyan Abbada",
  publisher: "Sufyan Abbada",
  category: "technology",

  openGraph: {
    title: "Sufyan's Professional Portfolio",
    type: "profile",
    images: [
      {
        url: `${process.env.CLOUDINARY_URL}/SufyanAbbadaFrontImage-fotor-2023082364916_1_qsssxp.png`,
        alt: "Sufyan's Photo",
      },
    ],
    url: "https://example.com/path-to-article", // Todo: Change the URL to deployed URL afterwards
    description:
      "Full-stack developer with expertise in top JS frameworks. Crafting user-centric solutions with a global outlook, prioritizing performance and scalability.",
    site_name: "Sufyan Abbada",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nanumMyeongjo.className}>{children}</body>
    </html>
  );
}
