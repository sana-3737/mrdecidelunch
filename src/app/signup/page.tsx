'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('確認メールを送ったよ！')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dot-pattern">
      <div className="bg-white shadow-md rounded-xl p-8 w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">会員登録</h1>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-black">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-black">パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          登録
        </button>

        <p className="text-center text-sm mt-4 text-black">{message}</p>

      </div>
    </div>
  )
}