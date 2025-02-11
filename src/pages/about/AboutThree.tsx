export default function AboutThree() {
  return (
    <section
      className="relative min-h-screen md:min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url("/about_three.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content at the bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 max-w-[1250px] mx-auto px-8  ">
        <div className="text-white text-5xl font-bold mb-4">
          <span className="text-yellow-500">I</span>ndigenous Learning Platform
        </div>
        <p className="text-white text-[20px] max-w-xl mb-6 ">
          Collects information for and about Indigenous Peoples in one place for
          social learning.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Explore the platform
        </button>
      </div>
    </section>
  );
}
