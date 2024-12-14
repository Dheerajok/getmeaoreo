
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Get Me A Oreo",
  description: "Get me a Oreo is a website that is used to take donation from the user. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>

      


    </html>
  );
}
