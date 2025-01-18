
"use client"
import React, { useState } from 'react';
import { Bell, Clock, History, Menu,  Heart, User, Calendar, ArrowRight, ChevronDown, Trophy, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '/components/ui/card';
import { Alert, AlertDescription } from '/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '/components/ui/tabs';
import Sidebar from '@/components/ui/sidebar';
import Link from 'next/link';

export default function Home() {

  const [activeTab, setActiveTab] = useState('results');
  
  const mainNumbers = [1, 22, 27, 28, 40];
  const chanceNumber = 2;
  const secondDrawNumbers = [4, 10, 25, 28, 35];
  const winningCodes = [
    'D 4173 5242', 'M 3002 1012', 'G 9629 2273',
    'D 1310 0794', 'A 9870 6802', 'J 1091 9198',
    'L 7852 4531', 'P 3664 4046', 'A 4613 4551',
    'O 8345 3565'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Header avec style FDJ */}
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
        
              
              <Sidebar/>
              
            
            <div className="text-2xl font-bold text-blue-900">FDJ</div>
          </div>
          <div className="flex items-center space-x-6">
            <Bell className="h-5 w-5 text-blue-900" />
            <Heart className="h-5 w-5 text-blue-900" />
            <History className="h-5 w-5 text-blue-900" />
            <button><Link href='/login'><User className="h-5 w-5 text-blue-900" /></Link></button>
          </div>
        </div>
      </div>
    </header>

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Logo LOTO et Date */}
      <div className="mb-8 text-center">
        <img src="/api/placeholder/200/80" alt="LOTO" className="mx-auto mb-4" />
        <div className="inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-full">
          <Calendar className="h-5 w-5 mr-2" />
          15/01/2025
        </div>
      </div>

      {/* Onglets Résultats/Simulateur */}
      <Tabs defaultValue="results" className="w-full mb-8">
        <TabsList className="w-full max-w-md mx-auto">
          <TabsTrigger value="results" className="w-1/2">Résultats</TabsTrigger>
          <TabsTrigger value="simulator" className="w-1/2">Simulateur</TabsTrigger>
        </TabsList>

        <TabsContent value="results">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              {/* Tirage Principal */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tirage du mercredi 15 janvier 2025</h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {mainNumbers.map((number) => (
                    <div key={number} className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                      {number}
                    </div>
                  ))}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg transform hover:scale-105 transition-transform">
                    {chanceNumber}
                  </div>
                </div>
              </div>

              {/* Second Tirage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Résultats Option 2nd tirage</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {secondDrawNumbers.map((number) => (
                    <div key={number} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                      {number}
                    </div>
                  ))}
                </div>
              </div>

              {/* Codes Gagnants */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  10 gagnants à 20 000 € tirés au sort
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {winningCodes.map((code) => (
                    <div key={code} className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-200">
                      {code}
                    </div>
                  ))}
                </div>
              </div>

              {/* Alertes Jackpot */}
              <Alert className="bg-yellow-50 border-yellow-200 mb-6">
                <AlertDescription>
                  Le jackpot Loto de 8 000 000 euros n'a pas été gagné !
                </AlertDescription>
              </Alert>

              {/* Prochain Tirage */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Prochain tirage</h2>
                <p className="text-4xl font-bold mb-4">9 000 000 €</p>
                <p className="mb-6">Samedi 18 janvier 2025</p>
                <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                  <Link href='./lotoGame'>Jouer</Link>
                  
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Section Historique et Stats */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center">
              <History className="h-6 w-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold">Historique des tirages</h3>
                <p className="text-sm text-gray-600">Téléchargez l'ensemble des tirages Loto</p>
              </div>
            </div>
            <Download className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center">
              <Trophy className="h-6 w-6 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold">Palmarès des numéros</h3>
                <p className="text-sm text-gray-600">Découvrez les statistiques des tirages</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </CardContent>
        </Card>
      </div>
    </main>

    {/* Footer avec liens sociaux */}
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">X</div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">f</div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <img src="/api/placeholder/20/20" alt="Instagram" className="w-5 h-5" />
          </div>
        </div>
        <p className="text-sm text-gray-400">© 2025 FDJ. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
);
}
