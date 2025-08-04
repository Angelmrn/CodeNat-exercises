"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateProvider(){
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        content: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        //VALIDATIONS
        if(!form.name || !form.content) {
            setError("All fields are required.");
            return;
        }

        setLoading(true);
        try{
          const response = await fetch("/api/auth/provider", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name : form.name,
            content: form.content,
            })
          });

          if(!response.ok){
            const errData = await response.json();
            console.error("Registration error data:", errData);
            throw new Error(errData.error || "User Registration Failed. Please try again.");
          }

          alert("Provider registered successfully!");
          router.push("/"); 


        }catch(error: any){
            setError(error.message || "Provider Registration Failed. Please try again.");
            console.error("Registration error:", error);
        }finally{
            setLoading(false);
        }
    };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Create Provider</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-black">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-black">Content</label>
          <input
            type="text"
            name="content"
            value={form.content}
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
        
        <p className="text-center">
          <Link href="/" className="text-blue-500">Go Back</Link>
        </p>
      </form>
    </div>
  );
}