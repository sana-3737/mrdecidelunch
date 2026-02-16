"use client";

export default function HomeMenu() {
  return (
    <>
      <style jsx>{`
        .menuPage {
          min-height: 100vh;
          background: #f7f7f7;
          padding: 32px 16px;
        }

        .menuTitle {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .menuList {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .menuList a {
          background: #fff;
          padding: 16px;
          border-radius: 12px;
          text-decoration: none;
          color: #333;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
      `}</style>

      <main className="menuPage">
        <h1 className="menuTitle">ホーム</h1>

        <nav className="menuList">
          <a href="/lunch">ランチ決定画面へ</a>
          <a href="/profile">会員情報編集画面へ</a>
        </nav>
      </main>
    </>
  );
}
