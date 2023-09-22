"client side";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Nav_logged from "@/app/components/nav_logged_in/page";
import Nav_not_logged from "@/app/components/nav_not_logged/page";
import {hasCookie} from "@/helpers/cookieHelper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    const showComponent = hasCookie("token");

    return (
        <html lang="en">
            <body className={inter.className}>
                {showComponent ? ( // Render your component here
                    <Nav_logged />
                ) : (
                    <Nav_not_logged />
                )}
                <main>{children}</main>
            </body>
        </html>
    );
}
