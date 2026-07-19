'use client'

import { tours } from '@/data'
import Link from 'next/link'
import { useState } from 'react'

export default function TourMenu() {
  const [hoveredTour, setHoveredTour] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🌍 Grand Tour Nord-Est</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">Scopri l\'Europa con Claude AI</p>
          <p className="text-blue-100">Un viaggio attraverso i gioielli dell\'Europa centrale</p>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {Object.entries(tours).map(([key, tour]) => (
            <Link
              key={key}
              href={`/${key}`}
              onMouseEnter={() => setHoveredTour(key)}
              onMouseLeave={() => setHoveredTour(null)}
              className={`group relative bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredTour === key ? \'scale-105 shadow-2xl\' : \'hover:shadow-xl\'
              }`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Card Content */}
              <div className="relative p-8">
                <div className="text-5xl mb-4">{tour.icon}</div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {tour.title}
                </h2>
                <p className="text-gray-600 mb-4">{tour.description}</p>

                {/* Tour Details */}
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <p>
                    <span className="font-semibold">📍 Distanza:</span> {tour.distance}
                  </p>
                  <p>
                    <span className="font-semibold">⏱️ Durata:</span> {tour.duration}
                  </p>
                  <p>
                    <span className="font-semibold">📅 Giorni:</span> {tour.days}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Visita →
                  </span>
                  {tour.status && (
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                      {tour.status}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Come funziona</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-semibold mb-2">Claude AI</h4>
              <p className="text-blue-100">Assistente intelligente che risponde a tutte le tue domande</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-semibold mb-2">Guida Personale</h4>
              <p className="text-blue-100">Consigli su cosa vedere, dove mangiare, come muoversi</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="font-semibold mb-2">Itinerari Completi</h4>
              <p className="text-blue-100">Tappe dettagliate con timeline e checklist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
