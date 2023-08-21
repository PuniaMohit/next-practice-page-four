import Image from "next/image";
import UnkownIcon from "../assets/svg/UnknownIcon";

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
          style={{ marginTop: "200px", marginBottom: "200px" }}
        >
          <div className="text-3xl ml-5 w-4/12">
            Providing The Best I.T. Solutions
          </div>
          <div className="text-xl ml-5 w-4/12">
            Founded in 2023 in India, we provide end-to-end services that help businesses bring their technology vision to life and achieve their goals.
          </div>
        </div>
      </div>
      <div className="px-20 pt-20">
        <div className="sm:flex text-black">
          <div className="xmd:grid grid-cols-2 gap-2 sm:w-2/5">
            <div className="row-span-2 ">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "600px" }}
                alt="Picture"
              />
            </div>
            <div className="">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "300px" }}
                alt="Picture"
              />
            </div>
            <div className="">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                style={{ height: "300px" }}
                alt="Picture"
              />
            </div>
          </div>
          <div className="sm:w-3/6 sm:pl-20 sm:mt-0 mt-5">
            <div className="text-3xl mb-10">What Best Describe Us</div>
            <div className="mb-10">
              We empower business with tailored IT solutions, emphasizing
              effective communication customized support and uncompromising
              quality. Our experienced and delicated team is driven to overcome
              challeneges, achieve success and establish market dominance
              through contracts with businesses and governments
            </div>
            <div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon />
                </div>
                <div className="ml-5">
                  <div className="font-bold">Assured Services</div>
                  <div>We are Always at the top in terms of satisfaction.</div>
                </div>
              </div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon />
                </div>
                <div className="ml-5">
                  <div className="font-bold">Worldwide Clients</div>
                  <div>We are trusted by 20+ clients from worldwide</div>
                </div>
              </div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon />
                </div>
                <div className="ml-5">
                  <div className="font-bold">Tech Innovator</div>
                  <div>
                    Lifetime provider of uttermost tactics for your digital
                    journey
                  </div>
                </div>
              </div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon />
                </div>
                <div className="ml-5">
                  <div className="font-bold">Tech Centric</div>
                  <div>24*7 Support from our expertise to your business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl my-10 text-black">Our Values</div>
          <div className="sm:flex sm:flex-wrap xmd:flex-nowrap">
            <div className="bg-sky-500 py-10 px-10 ml-2">
              <div className="mb-7">
                <UnkownIcon />
              </div>
              <div className="mb-5 text-2xl">Transparency</div>
              <div>
                Maintaining utmost clarity throughout our process is key to
                delivering premium quialtiy results
              </div>
            </div>
            <div className="bg-blue-500 py-10 px-10 ml-2">
              <div className="mb-7">
                <UnkownIcon />
              </div>
              <div className="mb-5 text-2xl">Innovation</div>
              <div>
                We leverage cutting-edge technologies to pioneer furturistic
                solutions, transforming your ideas into tangible reality.
              </div>
            </div>
            <div className="bg-sky-500 py-10 px-10 ml-2">
              <div className="mb-7">
                <UnkownIcon />
              </div>
              <div className="mb-5 text-2xl">Collabration</div>
              <div>
                Our Collabaration approach, uniting technologies experts and
                business teams ensures we meet your goals
              </div>
            </div>
            <div className="bg-blue-500 py-10 px-10 ml-2">
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
        <div className="text-black">
          <div className="text-3xl my-10 text-black">Our Values</div>
          <div className="sm:flex pb-10">
            <div className="border-b-sky-500">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
            <div className="ml-2">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
            <div className="ml-2">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
            <div className="ml-2">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
