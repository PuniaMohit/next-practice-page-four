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

console.log(menuItems);

const DesktopMenu: React.FC<DesktopMenuProps> = (props) => {
  const { mobileView, setMobileView } = props;
  return (
    <div className="bg-white flex items-center">
      <div
        className="flex items-center w-full"
        style={{ justifyContent: "space-between" }}
      >
        <Image src={logo} alt="Logo" className="w-20 h-20" />
      </div>
      <div
        className="sm:visible md:invisible text-black"
        onClick={() => setMobileView(!mobileView)}
      >
        <HamburgerIcon />
      </div>
      <div className="gap-4 menu-items">
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div key={index} className="lg:px-1 xs:px-0">
            <Link href={menuItem.link} className="py-1 px-6 text-black block">
              {menuItem.label}
            </Link>
          </div>
        ))}
        <div className="lg:px-1 xs:px-0">
          <Link
            href="/contact-us"
            className="py-1 px-6 text-black block bg-blue-200 text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
