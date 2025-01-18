"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Utilisez useRouter depuis next/navigation
import { Link } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de validation ou de requête
    console.log("Utilisateur connecté :", email);
    router.push("/"); // Redirection vers la page d'accueil
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Se connecter
        </button>
        <p className="text-sm text-center text-gray-600 mt-4">
          Pas encore inscrit ?
          <button className="text-blue-600 hover:underline"><Link href="/register" >
            Créez un compte
          </Link>
          </button>
        </p>
      </form>
    </div>
  );
}
