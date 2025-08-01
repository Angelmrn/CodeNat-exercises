import Link from "next/link";

export default function Dashboard(){
  return(
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Link href="/register">Register</Link> <br />
      <Link href="/login">Login</Link>
    </div>
  );
}