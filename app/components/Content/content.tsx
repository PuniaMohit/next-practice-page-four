const Content: React.FC = () => {
  return (
    <div
      className="flex bg-white items-center"
      style={{ justifyContent: "space-evenly", height: "400px" }}
    >
      <div className="px-5">
        <div className="text-black text-5xl mt-2">Who we are</div>
        <div className="text-black mt-2">
          We provide IT guidance on the process of product development by
          Creating and implementing the bleeding edge technologies to achieve an
          overall goal.
        </div>
        <div className="mt-2">
          <button className="border rounded-lg bg-blue-500 px-2 py-1">
            How we work
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://www.hrinasia.com/wp-content/uploads/2017/05/Asia-business-meetings.jpg"
          style={{ height: "50%", width: "80%" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
