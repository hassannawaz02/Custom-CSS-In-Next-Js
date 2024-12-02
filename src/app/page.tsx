import Style from "./Styles/home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={Style.heading}>This is <span className={Style.span}><Link href="/">Home</Link></span> page</h1>
      <h1 className={Style.heading}>Go To <span className={Style.span}><Link href="#About">About</Link></span>Page </h1>
      <h1 className={Style.heading}>Go To <span className={Style.span}><Link href="#Contact">Contact</Link></span>Page </h1>
    </div>
  );
}
