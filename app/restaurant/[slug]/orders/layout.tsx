import Navbar from "@/components/ui/navbar";
import { MarketProvider } from "@/lib/contexts/market-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Meerge Africa",
  description: "Menu",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MarketProvider>
      <Navbar pageName="Orders" showSearchbar={true} />
      {children}
    </MarketProvider>
  );
}
