import Badges from "@/components/resume/Badges";

export default function Tools({ tools }) {
  return (
    <div className="flex flex-wrap gap-3 max-w-xl">
      {tools.map((tool) => (
        <Badges key={tool}>{tool}</Badges>
      ))}
    </div>
  );
}
