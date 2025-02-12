import type { Metadata } from "next";


import "./globals.css";
import { Navigation } from "./components/navigation";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body
          
        >
          <header className="bg-slate-900 text-white p-4 text-center">
            
            <Navigation />
          </header>
          {children}
          
        </body>
      </html>
   
  );
}
