import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "MedSync - Doctor Appointment Scheduler",
  description: "Connecting with doctors anywhere, anytime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}>
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {/* {header} */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* {footer} */}
          <footer className="bg-muted/50 py-12">
            <div className="container max-auto px-4 text-center text-gray-200"><p>Footer</p></div>
          </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
