"use client";
import { usePathname } from "next/navigation";
import HeaderBUBLER from "@/components/header";
import Footer from "@/components/footer";

export default function HeaderFooterWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/game";

  return (
    <>
      {!hideLayout && <HeaderBUBLER />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
