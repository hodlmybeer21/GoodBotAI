'use client'

import { useState } from 'react'

const BTC_ADDRESS = 'bc1qakn7jw6wjuhr3t5mpgjaw5ppnsp7gwt4534php'
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=bitcoin:${BTC_ADDRESS}&bgcolor=1f2128&color=ffffff&format=png`

export default function DonateModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(BTC_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-sm mx-auto rounded-2xl p-6 text-center"
        style={{ backgroundColor: '#1f2128', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span style={{ fontSize: '1.5rem' }}>₿</span>
          <h3 className="text-white font-bold text-lg">Support GoodBotAI</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          Help keep GoodBotAI running by sending any amount of Bitcoin to our donation address:
        </p>

        {/* BTC Address box */}
        <div
          className="flex items-center gap-2 p-3 rounded-xl mb-4 cursor-pointer hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#14161a' }}
          onClick={copyAddress}
        >
          <code className="text-gray-300 text-xs flex-1 text-left break-all leading-snug">{BTC_ADDRESS}</code>
          <button className="flex-shrink-0 text-gray-400 hover:text-white transition-colors text-sm">
            {copied ? '✓' : '📋'}
          </button>
        </div>

        {/* QR Code */}
        <p className="text-gray-500 text-xs mb-3">Scan QR code with your Bitcoin wallet:</p>
        <div className="inline-block rounded-xl overflow-hidden mb-5" style={{ backgroundColor: '#14161a' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={QR_URL}
            alt="Bitcoin QR Code"
            width={180}
            height={180}
            className="w-44 h-44 mx-auto"
          />
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-xs">
          Every donation helps us maintain this free resource. Thank you for your support! <span style={{ color: '#f97316' }}>🧡</span>
        </p>
      </div>
    </div>
  )
}