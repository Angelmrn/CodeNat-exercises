"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage(){
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
        first_name: "",
        last_name: "",
        is_staff: false,
        is_superuser: false
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
        if(!form.username || !form.email || !form.password1 || !form.password2 || !form.first_name || !form.last_name) {
            setError("All fields are required.");
            return;
        }
        if(!Regex.test(form.email)){
            setError("Invalid email format.");
            return;
        }
        if(form.password1 !== form.password2){
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try{
          console.log("Form data:", form);
            const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/auth/registration", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            });

            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Response data:", data);

            if(!response.ok){
                const errorMsg = data.detail || data.message || data.error || "Registration failed. Please try again.";
                throw new Error(errorMsg);

            }
            alert("Registration successful!");
            router.push("/login");// Redirect to login page

        }catch(error: any){
            setError(error.message || "User Registration Failed. Please try again.");
            console.error("Registration error:", error);
        }finally{
            setLoading(false);
        }
    };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">User Registration</h1>

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
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-black">Password</label>
          <input
            type="password"
            name="password1"
            value={form.password1}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-black">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={form.password2}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-black">First Name</label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        
        >
          Register
        </button>
        
        <p className="text-center">
          <Link href="/login" className="text-blue-500">¿Already have an account?</Link>
        </p>
      </form>
    </div>
  );
}