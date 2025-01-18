// Importations nécessaires
'use client'
import React, { useState } from 'react';

const DepositPage = () => {
  const [depositNumber, setDepositNumber] = useState('');
  const [accountID, setAccountID] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!depositNumber || !accountID || !amount || !paymentMethod) {
      setErrorMessage('Veuillez remplir tous les champs correctement.');
      return;
    }

    if (parseInt(amount) < 9000) {
      setErrorMessage('Le montant minimum de dépôt est de XAF 9000.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Votre dépôt a été soumis avec succès. Veuillez patienter pour confirmation.');

    // Vous pouvez envoyer les données au serveur ici
    console.log({ depositNumber, accountID, amount, paymentMethod });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Recharger le compte</h1>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            <strong>Solde courant:</strong> <span className="text-xl font-bold">XAF 8,000</span>
          </p>
          <ul className="text-sm text-gray-600 mt-2">
            <li>- Le montant minimum de dépôt est de XAF 800</li>
            <li>- Après le dépôt, attendez la confirmation selon le moyen de paiement choisi.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Numéro de dépôt</label>
            <input
              type="text"
              value={depositNumber}
              onChange={(e) => setDepositNumber(e.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Entrez le numéro de dépôt"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Identifiant de compte</label>
            <input
              type="text"
              value={accountID}
              onChange={(e) => setAccountID(e.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="(NOM EN MAJUSCULE)"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Montant</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Entrez le montant"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Méthode de paiement</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Sélectionnez une méthode</option>
              <option value="mobile-money">Mobile Money</option>
              <option value="bank-transfer">Transfert Bancaire</option>
              <option value="credit-card">Carte de Crédit</option>
            </select>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Recharger
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositPage;
