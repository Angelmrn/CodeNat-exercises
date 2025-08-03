"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage(){
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        //VALIDATIONS
        if( !form.username || !form.email || !form.password ) {
            setError("All fields are required.");
            return;
        }
        if(!Regex.test(form.email)){
            setError("Invalid email format.");
            return;
        }

        setLoading(true);

        try{
            const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/login/", {
              method : "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                username: form.username,
                email: form.email,
                password: form.password
              })
            });

            console.log("Login response status: ", response.status);
          
            if(!response.ok){
              const errData = await response.json();
              console.log("Login error data:", errData);
              throw new Error(errData.message || "Invalid credentials. Please try again.");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token); // Store token in local storage
            localStorage.setItem("user", JSON.stringify({ // Store user data in local storage
              username: form.username,
              email: form.email
            }));
            router.push("/"); // Redirect to Dashboard

        }catch(error: any) {
          console.error("Login error:", error);
          setError(error.message || "Error logging in.");
        }finally {
          setLoading(false);
        }
    };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Log in</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-black">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black  text-black"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-black">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
           Log in
        </button>
        
        <p className="text-center">
           <Link href="/register" className="text-blue-500">¿Don't have an account?</Link>
        </p>
      </form>
    </div>
  );
}