"use client";

import "../src/styles/reset.scss";
import "../src/styles/global.scss";

import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { Provider } from "react-redux";
import store from "@/src/redux/store";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
