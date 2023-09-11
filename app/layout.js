import "./globals.css";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { getServerSession } from "next-auth";
import Provider from "./context/client-provider";
import { authOptions } from "./api/auth/[...nextauth]/route";
export const metadata = {
  title: "Sipsafari",
  description: " Liqour delivered to you",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`relative bg-slate-100 h-full w-full text-black ${poppins.className}`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
