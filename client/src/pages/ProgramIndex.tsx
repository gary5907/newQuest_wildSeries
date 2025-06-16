import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type Program = {
  id: number;
  title: string;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState([] as Program[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <ul>
      {programs.map((program) => (
        <li key={program.id}>
          <NavLink to={`/programs/${program.id}`}>{program.title}</NavLink>
        </li>
      ))}
      <NavLink to={"/programs/new"}>Ajouter</NavLink>
    </ul>
  );
}

export default ProgramIndex;
