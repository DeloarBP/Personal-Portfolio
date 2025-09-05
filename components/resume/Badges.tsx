export default function Badges({ children }) {
  return (
    <button className="flex shrink-0 rounded-full border border-slate-200 px-2 drop-shadow">
      {children}
    </button>
  );
}
