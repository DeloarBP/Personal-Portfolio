interface Office {
  name: string;
  logo?: string;
  duration: string;
  address: string;
  short_description?: string;
}

export default function Office({ office }: Office) {
  return (
    <li className="relative before:bg-white before:overflow-hidden  before:content-[var(--logo)] before:bg-cover before:p-1  before:absolute before:-left-14 before:block   before:h-12 before:w-12 before:rounded-lg before:border before:border-slate-200" style={{ "--logo": `url(${office.logo})` }}>

      <div className="flex items-center space-x-1">
        <h4 className="mb-1.5 text-xl font-medium text-slate-950">
          {office.name}
        </h4>
        <label className="text-sm font-normal text-slate-500">
          {office.duration}
        </label>
      </div>
      <address className="text-slate-600">{office.address}</address>
      <p className="text-slate-600">{office.short_description}</p>
    </li>
  );
}
