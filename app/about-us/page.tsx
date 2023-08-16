import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="flex text-black">
      <div className="grid grid-cols-2 gap-2">
        <div className=" ">
          <Image
            src="/office.jpg"
            width={500}
            height={100}
            style={{ height: "350px" }}
            alt="Picture"
          />
        </div>
        <div className="">
          <Image
            src="/office.jpg"
            width={500}
            height={100}
            style={{ height: "350px" }}
            alt="Picture"
          />
        </div>
        <div className="">
          <Image
            src="/office.jpg"
            width={500}
            height={100}
            style={{ height: "350px" }}
            alt="Picture"
          />
        </div>
      </div>
      <div>
        <div>What Best Describe Us</div>
        <div>
          We empower business with tailored IT solutions, emphasizing effective
          communication customized support and uncompromising quality. Our
          experienced and delicated team is driven to overcome challeneges,
          achieve success and establish market dominance through contracts with
          businesses and governments
        </div>
        <div>
          <div className="flex">
            <div></div>
            <div className="ml-5">
              <div>Assured Services</div>
              <div>We are Always at the top in terms of satisfaction.</div>
            </div>
          </div>
          <div className="flex">
            <div></div>
            <div className="ml-5">
              <div>Worldwide Clients</div>
              <div>We are trusted by 20+ clients from worldwide</div>
            </div>
          </div>
          <div className="flex">
            <div></div>
            <div className="ml-5">
              <div>Tech Innovator</div>
              <div>
                Lifetime provider of uttermost tactics for your digital journey
              </div>
            </div>
          </div>
          <div className="flex">
            <div></div>
            <div className="ml-5">
              <div>Tech Centric</div>
              <div>24*7 Support from our expertise to your business</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
