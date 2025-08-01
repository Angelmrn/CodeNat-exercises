"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage(){
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        if(!form.name || !form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if(!Regex.test(form.email)){
            setError("Invalid email format.");
            return;
        }
        if(form.password !== form.confirmPassword){
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try{
            const response = await fetch("https://bapi.suajam.com/arteukimil/api/v1/register", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password
                })
            });

            if(!response.ok){
                throw new Error("Registration failed. Please try again.");
            }
            alert("Registration successful!");
            router.push("/login");// Redirect to login page

        }catch(error){
            setError("User Registration Failed. Please try again.");
        }finally{
            setLoading(false);
        }
    };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">User Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
        
        <p className="text-center">
          ¿Already have an account? <Link href="/login" className="text-blue-500">Log in</Link>
        </p>
      </form>
    </div>
  );
}