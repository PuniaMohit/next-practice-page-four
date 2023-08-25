import Image from "next/image";
import UnkownIcon from "../assets/svg/UnknownIcon";
import "./about-us.css";

const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-4/5 bg-cover bg-center flex justify-center items-center text-white picture">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="sm:mt-24 sm:mb-24 xs:mt-12 xs:mb-12">
          <div className="text-3xl ml-5 w-4/12 about-us-picture-content font-extrabold	">
            Providing The Best I.T. Solutions
          </div>
          <div className="text-xl ml-5 w-4/12 about-us-picture-content">
            Founded in 2023 in India, we provide end-to-end services that help
            businesses bring their technology vision to life and achieve their
            goals.
          </div>
        </div>
      </div>
      <div className="sm:px-20 xs:px-5 pt-20">
        <div className="sm:flex text-black">
          <div className="slg:grid grid-cols-2 gap-4 sm:w-2/5">
            <div className="row-span-2">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                className="first-image"
                alt="Picture"
              />
            </div>
            <div className="">
              <Image
                src="/office.jpg"
                width={500}
                height={100}
                className="second-third-image"
                alt="Picture"
              />
            </div>
            <div className="">
              <Image
                src="/office.jpg"
                className="second-third-image"
                width={500}
                height={100}
                alt="Picture"
              />
            </div>
          </div>
          <div className="sm:w-4/6 sm:pl-20 sm:mt-0 mt-5">
            <div className="text-3xl mb-7">What Best Describe Us</div>
            <div className="mb-10 leading-10">
              We empower business with tailored IT solutions, emphasizing
              effective communication customized support and uncompromising
              quality. Our experienced and delicated team is driven to overcome
              challeneges, achieve success and establish market dominance
              through contracts with businesses and governments
            </div>
            <div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon color={"#ffa31a"} size={"w-10 h-10"} />
                </div>
                <div className="ml-5">
                  <div className="font-bold mb-3">Assured Services</div>
                  <div>We are Always at the top in terms of satisfaction.</div>
                </div>
              </div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon color={"#ffa31a"} size={"w-10 h-10"} />
                </div>
                <div className="ml-5">
                  <div className="font-bold">Worldwide Clients</div>
                  <div>We are trusted by 20+ clients from worldwide</div>
                </div>
              </div>
              <div className="flex mb-10">
                <div>
                  <UnkownIcon color={"#ffa31a"} size={"w-10 h-10"} />
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
                  <UnkownIcon color={"#ffa31a"} size={"w-10 h-10"} />
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
          <div className="text-3xl my-10 text-black xs:text-center xmd:text-left">
            Our Values
          </div>
          <div className="sm:flex sm:flex-wrap xmd:flex-nowrap">
            <div className="bg-sky-500 py-5 sm:px-10 xs:px-5 ml-2">
              <div className="mb-7">
                <UnkownIcon size={"w-10 h-10"} />
              </div>
              <div className="mb-5 text-2xl font-bold	">Transparency</div>
              <div>
                Maintaining utmost clarity throughout our process is key to
                delivering premium quialtiy results
              </div>
            </div>
            <div className="bg-blue-500 py-5 sm:px-10 xs:px-5 ml-2">
              <div className="mb-7">
                <UnkownIcon size={"w-10 h-10"} />
              </div>
              <div className="mb-5 text-2xl font-bold">Innovation</div>
              <div>
                We leverage cutting-edge technologies to pioneer furturistic
                solutions, transforming your ideas into tangible reality.
              </div>
            </div>
            <div className="bg-sky-500 py-5 sm:px-10 xs:px-5 ml-2">
              <div className="mb-7">
                <UnkownIcon size={"w-10 h-10"} />
              </div>
              <div className="mb-5 text-2xl font-bold">Collabration</div>
              <div >
                Our Collabaration approach, uniting technologies experts and
                business teams ensures we meet your goals
              </div>
            </div>
            <div className="bg-blue-500 py-5 sm:px-10 xs:px-5 ml-2">
              <div className="mb-7">
                <UnkownIcon size={"w-10 h-10"} />
              </div>
              <div className="mb-5 text-2xl font-bold">Expertise</div>
              <div>
                With a seamless integration of expertise and innovation, we
                develop and design your digital products to prefection.
              </div>
            </div>
          </div>
        </div>
        <div className="text-black">
          <div className="text-3xl my-10 text-black">Meet Our Leadership</div>
          <div className="sm:flex pb-10">
            <div className="border-b-2 border-sky-500 pb-5 xs:mb-5 sm:mb-0">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="mt-2">Abc Smith</div>
            </div>
            <div className="sm:ml-8 border-b-2 border-sky-500 xs:mb-5 sm:mb-0">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
            <div className="sm:ml-8 border-b-2 border-sky-500 xs:mb-5 sm:mb-0">
              <Image src="/office.jpg" width={500} height={100} alt="Picture" />
              <div className="my-2 font-semibold">Director</div>
              <div className="my-2">Abc Smith</div>
            </div>
            <div className="sm:ml-8 border-b-2 border-sky-500 xs:mb-5 sm:mb-0">
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
