import Image from "next/image";
import "./managed-services.css";
import UnkownIcon from "../assets/svg/UnknownIcon";

const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="h-4/5 bg-cover bg-center flex justify-center items-center text-white managed-services-banner">
        <div className="mt-24 mb-24">
          <div className="text-5xl ml-5 mb-5 w-4/12 font-bold">
            Managed Services
          </div>
          <div className="text-xl ml-5 w-4/12">
            We outsourced IT services for protective management and maintainance
            of technology infrastructure.
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="flex justify-around pt-2">
          <div className="px-5 w-6/12">
            <div className="text-black text-3xl">Our Mangaged Solutions </div>
            <div className="text-black mt-2 ">
              We provide adaptable managed services tailored to meet our
              customers specific requirements, whether for long term retention
              or shorter project based engagements like client portal content
              migration initiatives. Our comprehensive solution encompasses a
              range of essential functions, including help desk, service desk,
              account management, asset management, remote controls and advanced
              reporting all within a secure multitenant architecture. By
              seamlessly intergrating with our clients internal teams we offer
              the necessary skills, training, tools and process intergration to
              facilitate a smooth tranistion while our adaptabliioty ensures
              scalable and agile managed services.
            </div>
          </div>
          <div className="">
            <Image
              src="/office.jpg"
              width={500}
              height={100}
              className="h-96 w-96"
              alt="Picture"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl my-10 text-black xs:text-center xmd:text-left">
          Our Values
        </div>
        <div className="sm:flex sm:flex-wrap xmd:flex-nowrap">
          <div className="bg-sky-500 py-10 sm:px-10 xs:px-5 ml-2">
            <div className="mb-7">
              <UnkownIcon />
            </div>
            <div className="mb-5 text-2xl">Transparency</div>
            <div>
              Maintaining utmost clarity throughout our process is key to
              delivering premium quialtiy results
            </div>
          </div>
          <div className="bg-blue-500 py-10 sm:px-10 xs:px-5 ml-2">
            <div className="mb-7">
              <UnkownIcon />
            </div>
            <div className="mb-5 text-2xl">Innovation</div>
            <div>
              We leverage cutting-edge technologies to pioneer furturistic
              solutions, transforming your ideas into tangible reality.
            </div>
          </div>
          <div className="bg-sky-500 py-10 sm:px-10 xs:px-5 ml-2">
            <div className="mb-7">
              <UnkownIcon />
            </div>
            <div className="mb-5 text-2xl">Collabration</div>
            <div>
              Our Collabaration approach, uniting technologies experts and
              business teams ensures we meet your goals
            </div>
          </div>
          <div className="bg-blue-500 py-10 sm:px-10 xs:px-5 ml-2">
            <div className="mb-7">
              <UnkownIcon />
            </div>
            <div className="mb-5 text-2xl">Expertise</div>
            <div>
              With a seamless integration of expertise and innovation, we
              develop and design your digital products to prefection.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
