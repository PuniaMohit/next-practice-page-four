import Image from "next/image";

const Content: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-5">
        <div
          className="md:flex xs:flex-none items-center"
          style={{ justifyContent: "space-evenly", height: "400px" }}
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
              height={100}
              alt="Picture"
            />
          </div>
        </div>
        <div>
          <div>What we do</div>
        </div>
      </div>
    </div>
  );
};

export default Content;

