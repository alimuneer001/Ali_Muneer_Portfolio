import "./globals.css";
import "./carousel.css";
import "./personal.css";

export const metadata = {
  title: "Ali Muneer — Full Stack Developer (MERN)",
  description:
    "Ali Muneer, Full Stack Developer at Spadasoft in Lahore, Pakistan. React, Next.js, Node.js and MERN applications.",
};
export const viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Browser extensions can add body attributes before React hydrates. */}
      <body
        className="antialiased text-[#111] bg-[#FAFAFA]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
