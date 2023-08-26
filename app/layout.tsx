"use client";

import "./globals.css";

import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="hidden lg:flex lg:gap-x-12">
                <Link
                  href="/create-task"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Create Task
                </Link>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Tasks
                </Link>
              </div>
            </nav>
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
