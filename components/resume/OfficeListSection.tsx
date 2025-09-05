export default function OfficeListSection({ children }) {
  return (
    <ul className="relative space-y-6 before:absolute before:-left-8 before:h-full before:w-px before:bg-slate-100">
      {children}
    </ul>
  );
}
