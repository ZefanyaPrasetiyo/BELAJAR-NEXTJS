import Link from "next/link"

export default function pageDua () {
    return (
        <div>
            <h1>Selamat datang di halaman ke 2</h1>
            <nav>
                <p>lanjut ke halaman <Link href={"/pageTiga"}>selanjutnya...</Link>/<Link href={"/"}>Sebelumnya...</Link></p> 
            </nav>
        </div>
    )
    
}