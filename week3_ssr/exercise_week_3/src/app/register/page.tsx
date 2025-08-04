"use client";
import { use, useState } from "react";
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
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({ ...form, [e.target.name]: value });
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
          const response = await fetch("/api/auth/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: form.username,
              email: form.email,
              password1: form.password1,
              password2: form.password2,
              first_name: form.first_name,
              last_name: form.last_name,
              is_staff: form.is_staff,
              is_superuser: form.is_superuser
            })
          });

          if(!response.ok){
            const errData = await response.json();
            console.error("Registration error data:", errData);
            throw new Error(errData.error || "User Registration Failed. Please try again.");
          }

          alert("User registered successfully!");
          router.push("/login"); 


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

        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_staff"
            checked={form.is_staff}
            onChange={handleChange}
            className="mr-2 h-4 w-4"
          />
          <label className="text-black">is Staff</label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_superuser"
            checked={form.is_superuser}
            onChange={handleChange}
            className="mr-2 h-4 w-4"
          />
          <label className="text-black">is Superuser</label>
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