import { Geist, Geist_Mono } from "next/font/google";

// layout styles in the layout.css
import "./layout.css";

// design styles in the fanta.css
import "./fanta.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brogram - Workout Plan",
  description: "Brogram - Your 30 Days Workout Plan",
};

/*

- How I sequentially progress in my project

1) Component Tree
2) Enter Content in the components
3) Make Styling
4) Add Interactivity

*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <Header />

        {/* Main - Content Wrapper*/}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
