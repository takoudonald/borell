'use client'
import React, { useState } from "react";

export default function Retrait() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleRetrait = () => {
    if (!phoneNumber || !amount) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (amount < 1000 || amount > 1000000) {
      setError("Le montant doit être compris entre 1 000 et 1 000 000 FCFA.");
      return;
    }

    setError("");
    alert("Retrait confirmé !");
    // Envoyer les données au backend ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Retrait</h2>
        <p className="mb-4 text-sm text-gray-600">
          Effectuer un retrait est rapide et sécurisé. Sélectionnez votre méthode de paiement et saisissez vos détails.
        </p>

        {/* Méthodes de paiement */}
        <div className="flex justify-around mb-4">
          <button
            className={`p-2 rounded-lg ${paymentMethod === "MTN" ? "bg-yellow-500" : "bg-gray-200"}`}
            onClick={() => setPaymentMethod("MTN")}
          >
            <img src="/mtn-logo.png" alt="MTN" className="h-8" />
          </button>
          <button
            className={`p-2 rounded-lg ${paymentMethod === "Orange" ? "bg-orange-500" : "bg-gray-200"}`}
            onClick={() => setPaymentMethod("Orange")}
          >
            <img src="/orange-logo.png" alt="Orange" className="h-8" />
          </button>
        </div>

        {/* Formulaire */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Numéro de portable</label>
            <input
              type="text"
              placeholder="+237 6 XX XX XX XX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Montant</label>
            <input
              type="number"
              placeholder="Min: 1000, Max: 1000000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleRetrait}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
          >
            Retrait
          </button>
        </div>
      </div>
    </div>
  );
}
