"use client"; // Obligatoire pour utiliser le hook useState

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: "", password: "", name: "", surname: "", phone: "", filiere: "", niveau: "",});
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Chargement...");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Inscription réussie ! ✅");
    } else {
      setStatus("Une erreur est survenue. ❌");
    }
  };

  return (
    <div>
       <div className="flex flex-row items-center justify-between min-h-screen bg-gradient-to-br from-green-950 to-green-700">
     
       <div>
      <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md w-96">
        <h1 className="text-7xl bg-pink-400 font-bold mb-red-8"><marquee behavior="" direction="">Peace for you</marquee></h1>
     
      <div className="logi"><h1 className="text-7xl fon-bold bg-yellow- mb-6">Welcome</h1></div>
      <p className="w-[350px]text-gray-300 bg-purple-200 leading-7 mb-10">Since thou hast been precious in my sight, and honorable, and I have loved thee; therefore will I give men in thy stead, and peoples of thy life</p>
   
   <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Learn More</button>   </form>
    </div>
      <div>
  
      <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Inscription</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
         <input
          type="name"
          placeholder="name"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
         <input
          type="surname"
          placeholder="Surname"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
          required
        />
         <input
          type="phone"
          placeholder="Phone"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
         <input
          type="filiere"
          placeholder="Filière"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, filiere: e.target.value })}
          required
        />
         <input
          type="niveau"
          placeholder="Niveau"
          className="w-full p-2 mb-4 border rounded text-black"
          onChange={(e) => setFormData({ ...formData, niveau: e.target.value })}
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          S'inscrire
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}

      </form>
      </div>
     
    </div>
    </div>
    
  );
}