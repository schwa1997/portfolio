import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContainerBlock } from "./components/ContainerBlock";
import { ThemeProvider } from "./util/provider/theme-provider";
import ActiveSectionContextProvider from "./context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Once&Blink",
  description: "Chen Huimin portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            <ContainerBlock>{children}</ContainerBlock>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
