import Badges from "@/components/resume/Badges";

export default function Skills({ skills }) {
  return (
    <>
      <h1 className="font-bold text-lg text-gray-950">{skills.label}</h1>

      <div className="flex flex-wrap gap-3 max-w-xl">
        {Object.keys(skills).map(
          (key) =>
            key !== "label" &&
            skills[key].map((item) => <Badges key={item}>{item}</Badges>)
        )}
      </div>
    </>
  );
}
