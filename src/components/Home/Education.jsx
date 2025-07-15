import educationData from "./educationData";

export default function Education() {
  

  return (
    <div className="relative border-l-2 border-gray-300 ml-4 pl-6">
      {educationData.map((item, index) => (
        <div key={index} className="mb-10">
          <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1.5"></div>
          <p className="text-sm text-gray-500">{item.date}</p>
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
