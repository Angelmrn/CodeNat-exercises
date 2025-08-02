import Link from "next/link";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";



export default function Home(){
  return <Dashboard />;
}
  


/*
export default function Dashboard(){
  return(
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Link href="/register">Register</Link> <br />
      <Link href="/login">Login</Link><br />
      <Link href="/provider/create">Create Provider</Link><br />
      <Link href="/profile">Profile</Link>
    </div>
  );
}
  */
