import LeftArrowIcon from "@/app/assets/svg/LeftArrowIcon";
import RightArrowIcon from "@/app/assets/svg/RightArrowIcon";
import Image from "next/image";
import "./content.css";

const Content: React.FC = () => {
  return (
    <div className="bg-white pt-10">
      <div className="mx-5">
        <div className="md:flex xs:flex-none items-center sm:px-12 xs:px-0 xs:text-center sm:text-left justify-evenly">
          <div className="px-12 leading-8">
            <div className="text-black text-5xl mt-2">Who we are</div>
            <div className="text-black mt-2">
              We provide IT guidance on the process of product development by
              Creating and implementing the bleeding edge technologies to
              achieve an overall goal.
            </div>
            <div className="mt-2">
              <button className="border rounded-3xl bg-sky-400 px-3 py-1 xs:mb-10 sm:mb-0 ">
                How we work
              </button>
            </div>
          </div>
          <div className="shadow-box">
            <Image
              src="/Asia-business-meetings.jpg"
              width={1000}
              height={300}
              alt="Picture"
            />
          </div>
        </div>
        <div className="px-12">
          <div className="text-black my-10 text-5xl">What we do</div>
          <div className="xmd:grid grid-cols-3 gap-5">
            <div className="bg-orange-600 slg:row-span-2 xmd:row-span-1 px-10 py-10">
              <div className="text-3xl">Consultation</div>
              <div className="mt-10 text-xl">
                Empowering clients with innovative technology for digital
                transformation sucess as we partner together to achieve your IT
                goals.
              </div>
              <div className="mt-10 border-solid rounded-none border-2	py-2 px-2 inline-block">
                Go to consulting
              </div>
            </div>
            <div className="slg:row-span-3 xmd:row-span-3">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                className="xs:w-full main-pic"
                alt="Picture"
              />
            </div>
            <div className="slg:row-span-1 xmd:row-span-1">
              <Image
                src="/office.jpg"
                className="xs:w-full smallest-pic"
                width={500}
                height={100}
                alt="Picture"
              />
            </div>
            <div className="slg:row-span-3 slg:row-start-3	xmd:row-span-3 xmd:row-start-2">
              <Image
                src="/office.jpg"
                className="xs:w-full main-pic"
                width={500}
                height={100}
                alt="Picture"
              />
            </div>
            <div className="bg-sky-500 slg:row-span-2 slg:row-start-4 xmd:row-span-1 xmd:row-start-4 px-10 py-10">
              <div className="text-3xl">Software Development</div>
              <div className="mt-10 text-xl">
                Tailored solutions aligned with your business culture and goals
                trust us to exceed your expectations with proven list of
                satisfied clients.
              </div>
              <div className="mt-10 border-solid rounded-none border-2	py-2 px-2 inline-block">
                Go to Software development
              </div>
            </div>
            <div className="bg-blue-800 slg:row-span-2 xmd:row-span-2 px-10 py-10">
              <div className="text-3xl">Managed services</div>
              <div className="mt-10 text-xl">
                Efficiently manage your IT needs prioritize your core business
                activities with our reliable and secure managed IT services.
              </div>
              <div className="mt-10 border-solid rounded-none border-2 py-2 px-2 inline-block">
                Go to managed services
              </div>
            </div>
            <div className="slg:row-span-2 xmd:row-span-1 xmd:row-start-4">
              <Image
                src="/office.jpg"
                className="xs:w-full small-pic"
                width={500}
                height={100}
                alt="Picture"
              />
            </div>
          </div>
        </div>
        <div className="text-black sm:px-12 xs:px-0 mt-10 mb-10">
          <div className="text-3xl text-center xmd:text-left">
            What client Says
          </div>
          <div className="flex justify-between mt-10 text-center items-center">
            <div>
              <LeftArrowIcon />
            </div>
            <div className="w-6/12">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, laboriosam dolorum dolores vitae amet quos nostrum
                rerum, ullam facilis eveniet magnam? Autem earum reprehenderit
                non!
              </div>
              <div className="mt-10 text-yellow-600">
                <div>John Smith </div> <div>CEO of ABC</div>
              </div>
              <div className="mt-10">
                <div className="border-solid border-2 border-black rounded-2xl	py-1 px-1 inline-block ml-2"></div>
                <div className="border-solid border-2 border-black rounded-2xl	py-1 px-1 inline-block ml-2"></div>
                <div className="border-solid border-2 border-black rounded-2xl	py-1 px-1 inline-block ml-2"></div>
                <div className="border-solid border-2 border-black rounded-2xl	py-1 px-1 inline-block ml-2"></div>
              </div>
            </div>
            <div>
              <RightArrowIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="h-4/5 bg-cover bg-center flex items-center text-white homepage-below-picture relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="mt-24 mb-24 ml-20">
          <div className="text-3xl w-4/12 font-bold text-opacity-60">
            Increasing the level of customer satisfaction in every management
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
