import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} font-noto-sans-jp`}>
        {children}
      </body>
    </html>
  );
}
