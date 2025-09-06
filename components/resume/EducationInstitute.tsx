interface Institute {
  institute: string;
  subject: string;
  result: string;
  passing_year: string;
}

export default function EducationInstitute({ institute }: Institute) {
  return (
        <li className="relative before:bg-white before:overflow-hidden  before:content-[var(--logo)] before:bg-cover before:p-1  before:absolute before:-left-14 before:block   before:h-12 before:w-12 before:rounded-lg before:border before:border-slate-200" style={{ "--logo": `url(${institute.logo})` }}>

      <h4 className="text-xl  font-medium text-slate-950">
        {institute.institute}
      </h4>
      <p className="">
        Result: <strong className="text-slate-950">{institute.result}</strong>
      </p>
      <p className="">
        Subject: <strong className="text-slate-950">{institute.subject}</strong>
      </p>

      <p className="text-slate-600">
        Passing year :{" "}
        <strong className="text-slate-950">{institute.passing_year}</strong>
      </p>
    </li>
  );
}
