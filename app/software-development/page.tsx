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
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="text-5xl ml-5 mb-5 w-4/12 font-bold">
            Software development
          </div>
          <div className="text-xl ml-5 w-4/12">
            Our proficiency lies in customized software engineering,
            specifically designed to meet your unqiue requirements.
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="flex justify-around pt-2">
          <div className="px-5 w-6/12">
            <div className="text-black text-3xl">
              Software Engineering Services
            </div>
            <div className="text-black mt-2 ">
              <div className="mb-5 mt-5">
                Synez technology offers a skilled team for end-to-end software
                developement services covering backend to application, including
                business CRM connection, mobile app design, push notification,
                security, GPS, and more with experitse in user administration,
                API connectivity, cloud storage and social network integration.
              </div>
              <div className="mb-5">
                Synez Techonology combines pragmatism, creativity, and a design
                focused approach to deliver high-end solutions within budget,
                leveraging expertise in maximizing value, mitigating risks, and
                extensive experience in distribution IT organization, resulting
                in best fit solutions with low management overhead.
              </div>
              <div className="mb-5">
                We embrace change, seize opportnities and deliver exceptinal
                outcomes in software development through our adaptable
                methodology without compromising quality.
              </div>
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
      <div className="text-black mt-16">
        <div className="text-3xl px-16 mb-8">Our Core Competencies</div>
        <hr />
        <div className="flex px-10">
          <div className="border-2 border-x-zinc-300 py-5 px-10">
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-orange-500 text-xl font-semibold">
              Product Conceptualization & Consulting
            </div>
            <div className="mb-40">
              We Provide end to end support validationg your ideas, building a
              prototype, adjusting the tech stack and outlining a market driven
              vision for future developement.
            </div>
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-indigo-800 text-xl font-semibold">
              Software As a service (SaaS) Development
            </div>
            <div>
              As a leading provider of SaaS product development services, our
              expertise in cloud based applications sets us apart wheter you are
              a startup or an established enterprise, we are prepared to be your
              partner throughout the entire SaaS software development journey.
              From conceptualization to post deployment maintenance, we are here
              to ensure your success in the ever evloving world of cloud-based
              solutions.
            </div>
          </div>
          <div className="border-2 border-x-zinc-300 py-5 px-10">
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-orange-500 text-xl font-semibold">
              User Experience & User Interface Design
            </div>
            <div className="mb-28">
              We leverage extensive research on your target audience to inform
              our product design decision, creating intuitive interfaces that
              deliver memorable experiences and a clear understanding of your
              offering.
            </div>
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-indigo-800 text-xl font-semibold">
              Software Testing And Quality Assurance
            </div>
            <div>
              We subject your software to meticulous testing, guaranteeing the
              utmost security and stable performance even under regualr and peak
              loads. Our team of experts possesses deep expertise in both manual
              and automated testing services. Through rigorous testing
              methodologies we identify and resolve any portential
              vulnerabilites or performance issues, ensuring a robust and
              reliable software solution
            </div>
          </div>
          <div className="border-2 border-x-zinc-300 py-5 px-10">
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-orange-500 text-xl font-semibold">
              Minimum vialbe Product (MVP) Development
            </div>
            <div className="mb-28">
              With our end-to-end partnership, we transform your idea into a
              functional prototype. From project to developing a
              proof-of-concept, we prioritize user feedback, ensuring quality
              assurance while optimizing resources.
            </div>
            <div className="mb-5">
              <UnkownIcon size={"w-10 h-10"} />
            </div>
            <div className="mb-5 text-indigo-800 text-xl font-semibold">
              Migration & Modernization
            </div>
            <div>
              Our experts specialize in re-architecting on-premises solutions or
              seamlessly migrating existing software to different techonologies,
              all while guaranteeing no performance drop. Rest assured, the
              migrated app will be seamlessly integrated with the systems
              supporting your established business processes, ensuring a smooth
              and uninterrupted workflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
