export default function OffreCard({ variant, title, description }) {
  if (variant === "cta") {
    return (
      <div className="flex flex-col gap-3 bg-white p-6 rounded-xl">
        <span className="text-red-500 text-xl">👁</span>
        <h3 className="text-lg">Vous n'avez pas trouvé ce que vous cherchiez ?</h3>
        <button className="bg-red-500 text-white px-4 py-2 rounded self-start mt-2">
          Voir tous nos projets
        </button>
      </div>
    );
  }

  return (
    <div className="group flex flex-col gap-3 bg-transparent hover:bg-white p-6 rounded-xl transition-all duration-300 cursor-pointer">
      <h3 className="text-xl font-bold mb-10 mt-2 group-hover:text-red-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="group-hover:text-red-400 transition-colors duration-300">
        {description}
      </p>
      <span className="text-red-500 self-end mt-auto">→</span>
    </div>
  );
}