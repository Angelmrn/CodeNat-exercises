"use client"
import { useEffect, useState } from "react"
import {useRouter, useParams} from "next/navigation"
import Link from "next/link"

interface Provider {
  id: number;
  business_name: string;
  email?: string;
  phone?: string;
}

export default function EditProvider(){
    const router = useRouter();
    const params = useParams();
    const providerId = params.id as string;
    const [form, setForm] = useState({
        business_name: "",
        email: "",
        phone: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const rejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        const fetchProvider = async () => {
            try{
                const response = await fetch(`/api/auth/provider/${providerId}`);
                const data = await response.json();
                if (!response.ok && data.fallback) {
                    console.log("Usando fallback de localStorage para provider:", providerId);
                    const providers: Provider[] = JSON.parse(localStorage.getItem("providers") || "[]");
                    const foundProvider = providers.find(p => p.id === parseInt(providerId));

                    if (foundProvider) {
                        setForm({
                          business_name: foundProvider.business_name,
                          email: foundProvider.email || "",
                          phone: foundProvider.phone || "",
                        });
                        return;
                    } else {
                      throw new Error("Provider not found in local storage");
                }
            }
                setForm({
                    business_name: data.business_name,
                    email: data.email,
                    phone: data.phone,
                });
            }catch(err: any){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        if (providerId) fetchProvider();
    }, [providerId]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        
        //VALIDATIONS
        if(!form.business_name || !form.email || !form.phone){
            setError("All fields are required");
            return;
        }
        if(!rejex.test(form.email)){
            setError("Invalid email format");
            return;
        }
        setLoading(true);
        try{
            const response = await fetch(`/api/auth/provider/${providerId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
                cache: "no-store",
            });
            
            const data = await response.json();
            if(!response.ok){
                throw new Error (data.detail || "Failed to update provider");
            }
            router.push("/provider/providers_view");
            router.refresh();
        }catch(err: any){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Edit Provider</h1>
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
            className="w-full p-2 border rounded border-black text-black"
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Save
        </button>
        <p className="text-center">
          <Link href="/provider/providers_view" className="text-blue-500">
            Go Back
          </Link>
        </p>
      </form>
    </div>
  );
}