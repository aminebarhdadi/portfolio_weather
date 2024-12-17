
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlyonuiScript from '../components/FlyonuiScript';
import React from "react";

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
  title: "Porfolio",
  description: "Porfolio AB",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <Header />

        {children}

        <Footer />
      </body>
      <FlyonuiScript />
    </html>
  );
}
