// app/services/page.tsx
import type { Metadata } from "next";
import ClientServicePage from "./ClientServicePage";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Static site with custom fonts",
};

export default function Page() {
  return <ClientServicePage />;
}