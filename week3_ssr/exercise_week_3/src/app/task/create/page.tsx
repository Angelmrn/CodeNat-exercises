"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { userAuth } from "@/hooks/userAuth";
import Loading from "./loading";

export default function CreateTask(){
    const router = useRouter();
    const { user, loading: authLoading } = userAuth();

    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    //const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [validationError, setValidationError] = useState("");
    const [criticalError, setCriticalError] = useState<Error | null>(null);

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
        if(!form.name || !form.description) {
            setValidationError("All fields are required.");
            return;
        }

        setLoading(true);

        try{
          const existingTask = JSON.parse(localStorage.getItem('tasks') || '[]');
          const newTask = {
            id: existingTask.length + 1,
            taskName: form.name,
            taskDescription: form.description,
          };

          const updatelist = [...existingTask, newTask];
          localStorage.setItem('tasks', JSON.stringify(updatelist));
          setForm({name: "", description: ""});
          alert("Task created successfully!");
          router.push('/');
        }catch(error){
          console.error("Error saving task:", error);
          setValidationError("Failed to create task. Please try again.");
        }finally{
          setLoading(false);
        }
    };

    if(authLoading){
      <Loading />
    }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Create Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-black">Task Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded border-black text-black"
          />
        </div>
        
        <div>
          <label className="block mb-1 text-black">Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
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
          <Link href="/" className="text-blue-500">Go Back</Link>
        </p>
      </form>
    </div>
  );
}