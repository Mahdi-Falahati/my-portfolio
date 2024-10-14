import MainHeader from "@/modules/MainHeader";
import "./globals.css";
import MainFooter from "@/modules/MainFooter";
import { PTSansNarrow } from "@/utils/fonts";

export const metadata = {
  title: "Mahdi-Falahati",
  description: "mahdi-falahati's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={PTSansNarrow.className}>
        <>
          <header className="container mx-[auto]">
            <MainHeader />
          </header>
          <main className="my-5 min-h-[71vh]">{children}</main>
          <footer>
            <MainFooter />
          </footer>
        </>
      </body>
    </html>
  );
}
