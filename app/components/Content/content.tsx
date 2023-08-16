import LeftArrowIcon from "@/app/assets/svg/LeftArrowIcon";
import RightArrowIcon from "@/app/assets/svg/RightArrowIcon";
import Image from "next/image";

const Content: React.FC = () => {
  return (
    <div className="bg-white py-10">
      <div className="mx-5">
        <div
          className="md:flex xs:flex-none items-center"
          style={{ justifyContent: "space-evenly" }}
        >
          <div className="px-5">
            <div className="text-black text-5xl mt-2">Who we are</div>
            <div className="text-black mt-2">
              We provide IT guidance on the process of product development by
              Creating and implementing the bleeding edge technologies to
              achieve an overall goal.
            </div>
            <div className="mt-2">
              <button className="border rounded-lg bg-blue-500 px-2 py-1">
                How we work
              </button>
            </div>
          </div>
          <div className="mr-4">
            <Image
              src="/Asia-business-meetings.jpg"
              width={1000}
              height={300}
              alt="Picture"
            />
          </div>
        </div>
        <div>
          <div className="text-black my-10 text-5xl">What we do</div>
          <div className="grid grid-rows-9 grid-flow-col grid-cols-3 gap-2">
            <div className="bg-orange-600 row-span-4 px-10 py-10">
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
            <div className="b row-start-5 row-span-5 ">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "620px" }}
                alt="Picture"
              />
            </div>
            <div className=" row-span-5">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "720px" }}
                alt="Picture"
              />
            </div>
            <div className="bg-sky-500 row-span-3  px-10 py-10">
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
            <div className="row-span-2">
              <Image
                src="/office.jpg"
                width={500}
                height={10}
                style={{ height: "350px" }}
                alt="Picture"
              />
            </div>
            <div className="bg-blue-800 row-span-3  px-10 py-10">
              <div className="text-3xl">Managed services</div>
              <div className="mt-10 text-xl">
                Efficiently manage your IT needs prioritize your core business
                activities with our reliable and secure managed IT services.
              </div>
              <div className="mt-10 border-solid rounded-none border-2	py-2 px-2 inline-block">
                Go to managed services
              </div>
            </div>
            <div className="row-span-3">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "500px" }}
                alt="Picture"
              />
            </div>
          </div>
        </div>
        <div className="text-black px-10 mt-10">
          <div className="text-3xl">What client Says</div>
          <div className="flex justify-between mt-10 text-center items-center	">
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
              <div className="mt-10 text-amber-900">
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
      <div
        className="h-4/5 bg-cover bg-center flex justify-center items-center text-white"
        style={{
          backgroundImage: `url('/Asia-business-meetings.jpg')`,
        }}
      >
        <div
          className="mt-10 mb-10"
          style={{ marginTop: "200px", marginBottom: "200px" }}
        >
          <div className="text-3xl ml-5 w-4/12">
            Increasing the level of customer satisfaction in every management
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
