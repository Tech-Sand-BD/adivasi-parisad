import Image from "next/image";

export default function WorkTestimonial() {
  return (
    <div className="flex  items-center justify-center px-2 py-10 md:py-20 bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1250px] mx-auto">
        {/* Left Image Section */}
        <div className="relative w-full h-full">
          <Image
            src="/indigenous-women.jpeg"
            alt="Group of women"
            width={800}
            height={800}
            className="rounded-l-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center p-8 bg-gray-800 rounded-r-lg">
          <h2 className="text-3xl font-bold mb-4">
            Are you interested in our work?
          </h2>
          <p className="mb-4 text-gray-300">
            Discover how you can participate and support our actions.
          </p>
          <button className="bg-green-500 w-[200px] text-black px-4 py-2 rounded-lg shadow hover:bg-green-400">
            GET INVOLVED
          </button>
        </div>
      </div>
    </div>
  );
}
