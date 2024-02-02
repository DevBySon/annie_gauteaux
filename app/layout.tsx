import type {Metadata} from 'next'
import './globals.css'
import {roboto} from "@/assets/fonts";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={cn(roboto.className)}>
        <main>{children}</main>
        </body>
        </html>
    )
}
