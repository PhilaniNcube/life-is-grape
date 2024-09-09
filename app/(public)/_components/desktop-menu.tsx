import Link from "next/link";
import WineShopMegamenu from "./mega-menu";

const DesktopMenu = () => {
  return (
    <header className="z-50 hidden md:block">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">Life Is Grape</Link>
        <WineShopMegamenu />
      </div>
    </header>
  );
};
export default DesktopMenu;
