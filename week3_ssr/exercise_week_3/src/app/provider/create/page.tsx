"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateProvider(){
    const router = useRouter();
    const [form, setForm] = useState({
        business_name: "",
        email: "",
        phone:"",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        //VALIDATIONS
        if(!form.business_name || !form.email || !form.phone) {
            setError("All fields are required.");
            return;
        }
        if(!Regex.test(form.email)){
            setError("Invalid email format.");
            return;
        }
        setLoading(true);

        try{
          const response = await fetch("/api/auth/provider",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              business_name: form.business_name,
              email: form.email,
              phone: form.phone
            })
          });

          console.log("Provider creation response status: ", response.status);

          if(!response.ok){
            const errData = await response.json();
            console.log("Provider creation error data:", errData);
            throw new Error(errData.message || "Failed to create provider. Please try again.");
          }
          alert("Provider created successfully");
          

          router.push('/');

        }catch(error: any){
          console.error("Error creating provider:", error);
          setError(error.message || "Failed to create provider. Please try again.");

        }finally{
          setLoading(false);
        }
    };
  
  return(
<div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Create Provider</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-black">Business Name</label>
          <input
            type="text"
            name="business_name"
            value={form.business_name}
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
          <label className="block mb-1 text-black">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
           Create
        </button>
      </form>
    </div>
  );
}
      
        
