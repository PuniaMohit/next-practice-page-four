import EarthIcon from "@/app/assets/svg/EarthIcon";
import MessageIcon from "@/app/assets/svg/MessageIcon";
import UnkownIcon from "@/app/assets/svg/UnknownIcon";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-900 md:flex xs:flex-none justify-evenly py-10 px-10">
      <div className="xmd:pr-20  xs:pr-0 xmd:pl-10 xs:pl-0 sm:w-96 xs:w-auto leading-10 xs:text-center md:text-left">
        <div className="flex xs:justify-center sm:justify-start">
          <div>
            <EarthIcon />
          </div>
          <div className="text-5xl font-bold">SYNEZ</div>
        </div>
        <div className="mt-4 text-base sm:mr-10 xs:mr-0 ">
          We offer businesses the technologies they need to become successful
          businesses in today world.
        </div>
      </div>
      <div className="xs:text-center sm:text-left xs:mt-10 sm:mt-0">
        <div className="mb-5 text-2xl font-bold">Explore </div>
        <div className="mb-5">HOME</div>
        <div className="mb-5">ABOUT US</div>
        <div className="mb-5 xmd:w-1/5 slg:w-auto">SOFTWARE DEVELOPMENT</div>
        <div className="mb-5">MANAGED SERVICES</div>
        <div className="mb-5">CONSULTING</div>
      </div>
      <div className="md:w-1/4 xs:text-center sm:text-left">
        <div className="mb-5 text-2xl font-bold">Keep in touch</div>
        <div className="mb-5">
          <span className="font-bold">Address</span>: C56/30 Sector 62, Noida
          201307, Uttar Pradesh, India
        </div>
        <div className="mb-5">
          <span className="font-bold">Phone</span>: +0120 3112279, +01203112280
        </div>
        <div className="mb-5">
          <span className="font-bold">Mobile</span>: +91 9711311790 +91 7290
          040306
        </div>
        <div className="mb-5">
          <span className="font-bold">Email</span>: hr@innotechteam.in
        </div>
      </div>
      <div className="flex sm:self-start xs:justify-center">
        <div className="border-solid rounded-none border-2	py-2 px-2">
          <MessageIcon />
        </div>
        <div className="border-solid rounded-none border-2 ml-2 py-2 px-2">
          <UnkownIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
