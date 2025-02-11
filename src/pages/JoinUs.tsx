const JoinUs = () => {
  return (
    <div className="flex items-center py-10 px-2 md:py-20 justify-center   bg-gray-100">
      <div className="bg-[#709D31] text-white p-8 rounded-xl max-w-lg md:max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4">JOIN US!</h2>
        <p className="text-center mb-6">
          Join us to promote Indigenous solutions. Sign up to receive our
          newsletter and learn about volunteer opportunities worldwide.
        </p>
        <form className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="text"
            placeholder="Institution / Organization"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-red-100"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
