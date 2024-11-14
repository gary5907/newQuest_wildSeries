import { useLoaderData } from "react-router-dom";

type Program = {
  id: number;
  title: string;
};

function ProgramIndex() {
  const programs = useLoaderData() as Program[];

  return (
    <ul>
      {programs.map((program) => (
        <li key={program.id}>{program.title}</li>
      ))}
    </ul>
  );
}

export default ProgramIndex;
