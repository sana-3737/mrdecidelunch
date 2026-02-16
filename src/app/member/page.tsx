"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function MemberPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // ユーザー情報を取得
  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) return;

      setEmail(data.user.email || "");
      setName(data.user.user_metadata?.name || "");
    };

    loadUser();
  }, []);

  // 名前の保存
  const saveProfile = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { name },
    });

    if (error) setMessage(error.message);
    else setMessage("プロフィールを更新しました！");
  };

  // パスワード変更
  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage("新しいパスワードが一致しません");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) setMessage(error.message);
    else setMessage("パスワードを変更しました！");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          会員情報
        </h1>

        {message && (
          <p className="text-blue-600 text-center mb-4">{message}</p>
        )}

        {/* 名前 */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700">お名前</label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* メール */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700">
            メールアドレス
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            value={email}
            readOnly
          />
          <p className="text-xs text-gray-500 mt-1">
            ※メールアドレスは変更できません
          </p>
        </div>

        <button
          onClick={saveProfile}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mb-8"
        >
          プロフィールを保存する
        </button>

        {/* パスワード変更 */}
        <h2 className="text-sm text-gray-500 uppercase text-center mb-4">
          パスワードの変更
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-700">
            新しいパスワード
          </label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="新しいパスワード（6文字以上）"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-gray-700">
            新しいパスワード（再入力）
          </label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="同じパスワードをもう一度入力"
          />
        </div>

        <button
          onClick={changePassword}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          パスワードを変更する
        </button>

        <p className="text-center text-sm mt-6">
          <a href="/home" className="text-blue-600 hover:underline">
            ホームに戻る
          </a>
        </p>
      </div>
    </div>
  );
}