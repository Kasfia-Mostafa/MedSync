import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MedSyc - Doctor Appointment Scheduler",
  description: "Connecting with doctors anywhere, anytime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/* {header} */}
          <main className="min-h-screen">{children}</main>
          {/* {footer} */}
          <footer className="bg-muted/50 py-12">
            <div className="container max-auto px-4 text-center text-gray-200"><p>Footer</p></div>
          </footer>
      </body>
    </html>
  );
}
