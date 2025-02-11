const JoinUs = () => {
  return (
    <div className="flex items-center py-10 px-2 md:py-20 justify-center   bg-gray-100">
      <div className="bg-[#709D31] text-white p-8 rounded-xl max-w-lg md:max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4">
          আমাদের সাথে যোগদান করুন!
        </h2>
        <p className="text-center mb-6">
          আদিবাসী সমাধান প্রচারের জন্য আমাদের সাথে যোগ দিন। আমাদের নিউজলেটার
          পেতে এবং বিশ্বব্যাপী স্বেচ্ছাসেবক সুযোগ সম্পর্কে জানতে সাইন আপ করুন।
        </p>
        <form className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
          <input
            type="text"
            placeholder="নাম"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="text"
            placeholder="পদবি"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="email"
            placeholder="ইমেল"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <input
            type="text"
            placeholder="প্রতিষ্ঠান / সংস্থা"
            className="w-full p-3 rounded-lg text-gray-900"
          />
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-md hover:bg-red-100"
            >
              জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
