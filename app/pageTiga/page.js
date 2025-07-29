import Link from "next/link"

export default function pageTiga () {
    return (
        <div>
            <h1>Selamat datang di halaman ke 3 ini halaman terakhir</h1>
            <nav>
                <p>halaman <Link href={"/pageDua"}>sebelumnya...</Link></p> 
            </nav>
        </div>
    )
    
}