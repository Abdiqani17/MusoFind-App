import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { useSession } from "@supabase/auth-helpers-react"

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const session = useSession()
    return (
        <nav>
            <Link href="/">
                <Image
                    src="vercel.svg"
                    alt="Logo"
                    width={137}
                    height={50}
                />
            </Link>
            <div id="mobile">
                <div className={isNavExpanded ? "hide" : "display"}>
                    <button
                        className="icon"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className={isNavExpanded ? "display" : "hide"}>
                    <button
                        className="icon"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <ul className={isNavExpanded ? "display" : "hide"}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/gigs"}>Gigs</Link>
                </li>
                <li>
                    <Link href={"/musicians"}>Articles</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li>
                {!session ? (
                    <Link href={"/login"}>Login</Link>
                    ) : (<Link href={"/login"}>Account</Link>)}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar