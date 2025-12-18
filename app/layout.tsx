import { Metadata } from "next";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Bridge to Eclipse",
  description: "Official Eclipse Bridge.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "200x200",
      url: "/eclipse-favicon.png",
    },
  ],
  openGraph: {
    title: "Bridge to Eclipse",
    description: "Official Eclipse Bridge.",
    images: [
      {
        url: "/twitter-banner.png",
        width: 1200,
        height: 675,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge to Eclipse",
    description: "Official Eclipse Bridge.",
    images: [
      {
        url: "/twitter-banner.png",
        width: 2400,
        height: 1350,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
