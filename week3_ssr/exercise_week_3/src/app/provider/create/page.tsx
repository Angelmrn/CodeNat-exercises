"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateProvider(){
    const router = useRouter();
    const [form, setForm] = useState({
        business_name: "",
        email: "",
        phone:"",
    });

    //Validation errors
    const [validationError, setValidationError] = useState("");
    //Critical errors call error.tsx
    const [criticalError, setCriticalError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
      const getUserFromCookies = () => {
            const userCookies = document.cookie.split(';')
                .find(cookie => cookie.trim().startsWith('user='));

            if (!userCookies) {
                return null;
            }

            try {
                const userValue = userCookies.split('=')[1];
                return JSON.parse(decodeURIComponent(userValue));
            } catch (error) {
                console.error("Error parsing user cookie:", error);
                return null;
            }
        };

        const user = getUserFromCookies();
        if(!user){
          router.push("/login");
          return;
        }

        setUser(user);
        setLoading(false);
    }, [router]);

    useEffect(() => {
      if(criticalError){
        throw criticalError;
      }
    }, [criticalError])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError("");

        //VALIDATIONS
        if(!form.business_name || !form.email || !form.phone) {
            setValidationError("All fields are required.");
            return;
        }
        if(!Regex.test(form.email)){
            setValidationError("Invalid email format.");
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
            if(response.status == 401){
              setCriticalError(errData.message || "Unauthorized access.");
              return;
            }else if(response.status >= 500){
              setCriticalError(new Error("Server error. Please try again later."));
              return;
            }else if(response.status === 403){
              setCriticalError(new Error("You don't have permission to create providers."));
              return;
            }else{
              setValidationError(errData.detail || "Failed to create provider. Please check your data.");
            }
          }else{
            alert("Provider created successfully");
            router.push('/provider/providers_view');
          }

        }catch(error: any){
          console.error("Error creating provider:", error);

          setCriticalError(
            error instanceof Error ? error : new Error("An unexpected error occurred")
          );

        }finally{
          setLoading(false);
        }
    };

    if (loading && !criticalError) {
        return (
            <div>Loading...
            </div>
        );
    }

   if (!user && !loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <p>You need to be logged in to access this page.</p>
                    <button
                        onClick={() => router.push("/login?returnUrl=/provider/create")}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }
  
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
        
        {validationError && <p className="text-red-500">{validationError}</p>}
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
           Create
        </button>

        <p className="text-center">
          <Link href="/provider/providers_view" className="text-blue-500">Go Back</Link>
        </p>
      </form>
    </div>
  );
}
      
        
