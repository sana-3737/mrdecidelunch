import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dot-pattern">
      <div className="bg-white shadow-md rounded-xl p-8 w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">ログイン</h1>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-black">ユーザー名</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-black">パスワード</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          ログイン
        </button>

       <p className="text-center text-sm mt-4">
        <Link href="/signup" className="text-blue-600 hover:underline">
          会員登録はこちら
        </Link>
      </p> 
      </div>
    </div>
  );
}