interface Institute {
  institute: string;
  subject: string;
  result: string;
  passing_year: string;
}

export default function EducationInstitute({ institute }: Institute) {
  return (
    <li className="relative text-slate-600 before:absolute before:-left-12.5 before:h-10 before:w-10 before:rounded-sm before:border before:border-slate-200">
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
