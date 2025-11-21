import "../src/styles/reset.scss";
import "../src/styles/global.scss";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
