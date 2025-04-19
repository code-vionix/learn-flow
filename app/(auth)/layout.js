import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Your App",
  description: "Your description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
