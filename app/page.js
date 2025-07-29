import Link from "next/link"

export default function page () {
    return (
        <div>
            <h1>Selamat datang</h1>
            <nav>
                <p>lanjut ke halaman <Link href={"/pageDua"}>selanjutnya...</Link></p> 
            </nav>
        </div>
    )
    
}