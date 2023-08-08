import Link from "next/link"
import "./../globals.css"
export default function NavBar(){
    return(
        <nav className="navbar">

            <h2><Link href="/" className="homeLink">Home</Link></h2>
            <h2><Link href="/addTopic" className="addTopic">Create Blog Post</Link></h2>
        </nav>
    )
}