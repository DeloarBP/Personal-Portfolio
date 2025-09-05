export default function SectionLayout({ title, children }) {
  return (
    <section className="grid grid-cols-3">
      <label className="col-span-1 mb-2 inline-block text-2xl font-bold">
        {title}
      </label>
      <div className="col-span-2">{children}</div>
    </section>
  );
}
