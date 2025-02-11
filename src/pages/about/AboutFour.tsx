export default function AboutFour() {
  return (
    <section
      className="relative min-h-screen md:min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url("/about_four.jpeg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content at the bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 max-w-[1250px] mx-auto px-8  ">
        <div className="text-white text-5xl font-bold mb-4">
          <span className="text-yellow-500">I</span>IPARD
        </div>
        <p className="text-white text-[20px] max-w-xl mb-6 ">
          IPARD is a global development alliance convening multi-sector partners
          to secure Indigenous Peoples’ rights, strengthen capacities and
          catalyze economic self-development.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Learn about IPARD
        </button>
      </div>
    </section>
  );
}
