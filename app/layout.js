import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sufyan Abbada",
  description:
    "Full-stack developer with expertise in top JS frameworks. Crafting user-centric solutions with a global outlook, prioritizing performance and scalability.",
  author: "Sufyan Abbada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
