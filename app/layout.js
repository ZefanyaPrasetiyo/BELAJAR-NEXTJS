import Link from "next/link"

export default function layout({children}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <Link href={"/"}></Link>  
                    <Link href={"/pageDua"}></Link>
                    <Link href={"/pageTiga"}></Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    )
}