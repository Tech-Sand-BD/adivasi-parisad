import Image from "next/image";

const data = [
  {
    src: "/indigenous-organizations.png",
    title: "Indigenous People's Organizations",
  },
  {
    src: "/national-governments.png",
    title: "National Governments",
  },
  {
    src: "/private-sector.png",
    title: "Private Sector",
  },
  {
    src: "/cooperation-agencies.png",
    title:
      "Donors, International Cooperation Agencies and International Organizations",
  },
  {
    src: "/internacionales-instances.png",
    title: "NGOs",
  },
];

const StrategicPartnerships = () => {
  return (
    <div className="max-w-[1250px] mx-auto px-4 py-10 md:py-20">
      <h1 className="text-4xl md:text-5xl text-center font-semibold mb-10">
        Strategic Partnerships
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image src={item.src} width={150} height={150} alt={item.title} />
            <h1 className="text-lg font-medium mt-4">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicPartnerships;
