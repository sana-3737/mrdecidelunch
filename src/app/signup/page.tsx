export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dot-pattern">
      <div className="bg-white shadow-md rounded-xl p-8 w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">会員登録</h1>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-black">ユーザー名</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-gray-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-black">パスワード</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 text-black placeholder-gray-500"
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          登録する
        </button>
      </div>
    </div>
  );
}