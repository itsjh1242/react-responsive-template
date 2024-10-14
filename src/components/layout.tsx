import { useIsMobile } from "@/hook/useIsMobile";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <h1 style={{ color: isMobile ? "red" : "blue" }}>반응형 예제</h1>
      {isMobile ? <p>현재 모바일 화면입니다! 📱</p> : <p>현재 데스크톱 화면입니다! 🖥️</p>}
    </div>
  );
};

export default Layout;
