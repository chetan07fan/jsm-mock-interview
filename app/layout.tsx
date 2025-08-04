import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Load the font with best hydration-safe options
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap", // Ensure hydration-safe font rendering
});

export const metadata: Metadata = {
  title: "prepwise",
  description: "Simulates technical interviews using voice AI and NLP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased`} // Removed "pattern" for now to avoid hydration mismatch
        suppressHydrationWarning={true} // Optional: suppress warning if mismatch is unavoidable
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
