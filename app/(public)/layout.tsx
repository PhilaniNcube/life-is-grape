import { ReactNode } from "react";
import DesktopMenu from "./_components/desktop-menu";
import Footer from "./_components/footer";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh]">
      <DesktopMenu />
      <main>
      {children}
      </main>
     <Footer />
    </div>
  );
};
export default PublicLayout;
