import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import menuItems from "../../json-data/menuItems.json";
import HamburgerIcon from "@/app/assets/svg/HamburgerIcon";

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
      <div className="sm:visible xs:invisible md:flex gap-4">
        {menuItems.map((menuItem: MenuItem, index: number) => (
          <div
            key={index}
            className={`lg:px-5 xs:px-0 ${menuItem.className || ""}`}
          >
            <Link
              href={menuItem.link}
              className={`py-1 text-black ${menuItem.className || ""}`}
            >
              {menuItem.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenu;
