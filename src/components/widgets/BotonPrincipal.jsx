export default function BotonPrincipal({ titulo }) {
  return (
    <button className="active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-8 rounded-xl bg-gray-700 text-white text-sm font-thin">
      {titulo}
    </button>
  );
}
