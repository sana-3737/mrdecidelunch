import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>ホーム</h1>
            <ul>
            <li><Link href="/lunh">ランチ決定画面へ</Link></li>
            <li><Link href="/member">会員情報編集画面へ</Link></li>
            </ul>
        </main>
    )}