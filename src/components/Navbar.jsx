import { FaGithub } from "react-icons/fa";
import HyperText from "./magicui/hyper-text";
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 ">
            <div className="logo font-bold text-xl">
                <Link href="/">
                    <HyperText text={"Kalp-Medika"} className={"hover:cursor-pointer"}/>
                </Link>

            </div>
            <ul className="list-items flex gap-4 items-center hidden md:flex">
                <Link href="/">
                    <HyperText className={"text-xl hover:cursor-pointer"} text={"Home"} />
                </Link>
                <span className="text-gray-500">/</span>
                
                <Link href="/dashboard">
                    <HyperText className={"text-xl hover:cursor-pointer"} text={"Dashboard"} />
                </Link>
                    <span className="text-gray-500">/</span>

                <Link href="/">
                </Link>
                <HyperText className={"text-xl hover:cursor-pointer"} text={"About"} />

            </ul>
            <a href="https://github.com/Dhruv-Sood/kalp-medika" target="_blank" className="cursor:hover">
                <FaGithub size={24} />
            </a>
        </nav>
    );
}

export default Navbar;
