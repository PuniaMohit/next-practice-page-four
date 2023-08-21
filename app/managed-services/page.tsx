import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <div
        className="h-4/5 bg-cover bg-center flex justify-center items-center text-white"
        style={{
          backgroundImage: `url('/Asia-business-meetings.jpg')`,
        }}
      >
        <div
          className="mt-10 mb-10"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
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
              style={{ height: "450px", width: "450px" }}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
