import Link from "next/link";

export default function Header() {
    return (
        <header className="">
          <div className="flex items-center justify-between py-4 px-6 mx-auto">
            <Link href={"/"} className="font-bold text-xl">Job Directory</Link>
            <nav className="flex gap-4 *:py-2 *:px-4 *:rounded-md">
              <Link className="bg-gray-200" href={"/login"}>Login</Link>
              <Link className="bg-blue-600 text-white" href={"/new-listing"}>Post a job</Link>
            </nav>
          </div>
        </header>
    )
}