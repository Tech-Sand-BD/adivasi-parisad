export default function AboutTwo() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[65vh] bg-cover bg-center"
      style={{ backgroundImage: `url("/about_two.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content at the bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 max-w-[1250px] mx-auto px-8  ">
        <div className="text-white text-5xl font-bold mb-4">
          আদিবাসী উদ্ভাবনী সমাধান আলোকচিত্র প্রতিযোগিতা
        </div>

        <button className="bg-green-600 text-[12px] md:text-[18px] hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          বিজয়ী ছবিগুলি দেখুন এবং গল্পগুলি পড়ুন
        </button>
      </div>
    </section>
  );
}
