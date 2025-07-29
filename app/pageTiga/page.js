import Link from "next/link"

export default function pageTiga () {
    return (
        <div>
            <h1>Selamat datang di halaman ke 3</h1>
            <nav>
                <p>halaman <Link href={"/pageDua"}>sebelumnya...</Link></p> 
            </nav>
        </div>
    )
    
}