import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import Image from "next/image"

import AvatarIcon from "./AvatarIcon"
import {
    useSession,
    useUser,
    useSupabaseClient,
} from "@supabase/auth-helpers-react"
import styles from "../styles/Navbar.module.css"
import { useRouter } from "next/router"

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const supabase = useSupabaseClient()
    const session = useSession()
    const user = useUser()
    const [username, setUsername] = useState("")
    const [avatarUrl, setAvatarUrl] = useState(null)
    const router = useRouter()

    async function getUsername() {
        if (user) {
            try {
                let { data, error } = await supabase
                    .from("profiles")
                    .select("username, avatar_url")
                    .eq("id", user.id)
                if (data) {
                    console.log(data[0].username)
                    console.log(data)
                    console.log(data[0].avatar_url)
                    setUsername(data[0].username)
                    setAvatarUrl(data[0].avatar_url)
                }
                if (error) {
                    console.log("getUserName error: ", user)
                    alert("fetch failed")
                }
            } catch (error) {
                alert(error.message)
                console.log("error")
            }
        }
    }
    if (user) {
        getUsername()
    }

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image src="/musoLogo.png" alt="Logo" width={75} height={75} />
            </Link>
            <div>
                <div className={isNavExpanded ? styles.hide : styles.display}>
                    <button
                        className={styles.icon}
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
                <div className={isNavExpanded ? styles.display : styles.hide}>
                    <button
                        className={styles.icon}
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
            <ul
                className={`${styles.ul} ${
                    isNavExpanded ? styles.display : styles.hide
                }`}
            >
                <li className={styles.li}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={styles.li}>
                    <Link href={"/gigs"}>Gigs</Link>
                </li>
                <li className={styles.li}>
                    <Link href={"/musicians"}>Musicians</Link>
                </li>
                <li className={styles.li}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={styles.li}>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                {!session ? (
                    <li className={styles.li}>
                        <Link href={"/login"}>Login</Link>
                    </li>
                ) : (
                    <>
                        <li className={`${styles.avataricon} ${styles.li}`}>
                            <Link href={"/login"}>
                                <AvatarIcon size={50} avatarUrl={avatarUrl} />
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link
                                href="/"
                                onClick={async () => {
                                    setUsername("")
                                    await supabase.auth.signOut()
                                    router.reload(window.location.pathname)
                                }}
                            >
                                Sign Out
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
