import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import menuItems from "../../json-data/menuItems.json";
import HamburgerIcon from "@/app/assets/svg/HamburgerIcon";
import "./desktopMenu.css";

interface DesktopMenuProps {
  mobileView: boolean;
  setMobileView: (value: boolean) => void;
}

interface MenuItem {
  label: string;
  link: string;
  className?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = (props) => {
  const { mobileView, setMobileView } = props;
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Image src={logo} alt="Logo" className="w-20 h-20" />
      </div>
      <div
        className="sm:visible lg:invisible text-black xs:mr-5"
        onClick={() => setMobileView(!mobileView)}
      >
        <HamburgerIcon />
      </div>
      <div className="menu-items">
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div
            key={index}
            className="lg:px-1 lg:py-7 xs:px-0 font-bold cursor-pointer"
          >
            <Link href={menuItem.link} className="py-1 slg:px-4 xmd:px-1 text-black block">
              {menuItem.label}
            </Link>
          </div>
        ))}
        <div className="lg:px-1 xs:px-0 bg-sky-500 font-bold cursor-pointer">
          <Link
            href="/contact-us"
            className="pl-2 pr-16 py-7 text-black block text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
