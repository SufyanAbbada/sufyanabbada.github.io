import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sufyan Abbada",
  description:
    "Full-stack developer with expertise in top JS frameworks. Crafting user-centric solutions with a global outlook, prioritizing performance and scalability.",
  generator: "Next.js",
  applicationName: "Sufyan's Portfolio",
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
        url: `${process.env.CLOUDINARY_URL}/SufyanAbbadaFrontImageFB_qoi9hm.png`,
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
