import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./../components/Navigation";
import SessionProviderWrapper from "./../components/SessionProviderWrapper";
import QueryProvider from "./../components/QueryProvider";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "My App",
//   description: "A Next.js app with authentication",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className + " min-h-screen flex flex-col relative"}>
        <SessionProviderWrapper>
          <QueryProvider>
            <Navigation />
            {children}
          </QueryProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}