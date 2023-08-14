const Footer: React.FC = () => {
  return (
    <div className="bg-blue-700 md:flex xs:flex-none py-10 px-20">
      <div className="pr-20">
        <div className="text-6xl font-bold	">SYNEZ</div>
        <div className="mt-4">
          We offer technologies they need to become successful businesses in
          today world.
        </div>
      </div>
      <div>
        <div className="mb-5 text-2xl font-bold	">Explore </div>
        <div className="mb-5">HOME</div>
        <div className="mb-5">ABOUT US</div>
        <div className="mb-5">SOFTWARE DEVELOPMENT</div>
        <div className="mb-5">MANAGED SERVICES</div>
        <div className="mb-5">CONSULTING</div>
      </div>
      <div>
        <div className="mb-5 text-2xl font-bold	">Keep in touch</div>
        <div className="mb-5">
          Address: C56/30 Sector 62, Noida 201307, Uttar Pradesh, India{" "}
        </div>
        <div className="mb-5">Phone: +0120 3112279, +01203112280</div>
        <div className="mb-5">+91 9711311790 +91 7290 040306</div>
        <div className="mb-5">Email: </div>
      </div>
      <div className="flex self-start">
        <div className="border-solid rounded-none border-2	py-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="border-solid rounded-none border-2	ml-2 py-2 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
