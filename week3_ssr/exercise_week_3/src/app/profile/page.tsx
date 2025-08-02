

import Link from "next/link";

export default function ProfilePage(){
    return (
        <form>
            <div>User profile page</div>
            <p className="text-center">
            <Link href="/" className="text-blue-500">Dashboard</Link>
            </p>
        </form>
        );
}