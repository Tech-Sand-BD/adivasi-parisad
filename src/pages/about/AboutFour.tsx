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
        <div className="text-white text-5xl font-bold mb-4">আইপার্ড</div>
        <p className="text-white text-[20px] max-w-xl mb-6 ">
          আইপার্ড একটি বিশ্বব্যাপী উন্নয়ন জোট যা আদিবাসীদের অধিকার সুরক্ষিত
          করতে, সক্ষমতা জোরদার করতে এবং অর্থনৈতিক স্ব-উন্নয়নকে অনুঘটক করার জন্য
          বহু-ক্ষেত্রের অংশীদারদের আহ্বান করে।
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          IPARD সম্পর্কে জানুন
        </button>
      </div>
    </section>
  );
}
