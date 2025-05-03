// layout styles in the layout.css
import "./layout.css";

// design styles in the fanta.css
import "./fanta.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
        className={`antialiased`}
      >
        {/* Header */}
        <Header />

        {/* Main - Content Wrapper*/}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
