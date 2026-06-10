import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "잇다 — 가족을 잃은 후, 해야 할 모든 절차를 안내합니다",
  description: "사망신고부터 금융계좌 정리, 통신 해지, 상속 서류까지. 처음이라 막막한 절차들을 단계별로 안내해드립니다. 완전 무료.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
