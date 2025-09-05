interface Office {
  name: string;
  logo?: string;
  duration: string;
  address: string;
  short_description?: string;
}

export default function Office({ office }: Office) {
  return (
    <li className="relative before:absolute before:-left-12.5 before:h-10 before:w-10 before:rounded-sm before:border before:border-slate-200">
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
