export default function Project({title, desc, github}) {
  return (
    <section className="bg-stone-500 text-white rounded-xl shadow-md p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-stone-200">{desc}</p>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition"
      >
        Voir sur GitHub
      </a>
    </section>
  );
}
