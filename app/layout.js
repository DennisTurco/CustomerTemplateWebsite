import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "/styles/global.scss";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "Customer Template Website",
  description: "A template for customers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
