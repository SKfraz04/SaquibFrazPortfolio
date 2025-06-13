import type { Metadata } from "next";
import { Inter, Poppins, Source_Code_Pro, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const sourceCodePro = Source_Code_Pro({ 
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Saquib Fraz - Frontend Developer & MERN Stack Developer",
  description: "Passionate MERN Stack Developer specializing in React, Next.js, and blockchain technologies. Based in Mohali, Punjab, India.",
  keywords: ["Saquib Fraz", "Frontend Developer", "MERN Stack", "React.js", "Next.js", "Blockchain", "Web3", "Ethereum", "Solidity"],
  authors: [{ name: "Saquib Fraz" }],
  openGraph: {
    title: "Saquib Fraz - Frontend Developer & MERN Stack Developer",
    description: "Passionate MERN Stack Developer specializing in React, Next.js, and blockchain technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} ${sourceCodePro.variable} ${orbitron.variable} font-sans antialiased bg-background min-h-screen overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
