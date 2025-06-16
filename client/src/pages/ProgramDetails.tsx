import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgramDeleteForm from "../components/ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
};

function ProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <h1>{program.title}</h1>
        <Link to={`/programs/${id}/edit`}>Modifier</Link>
        <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
      </>
    )
  );
}

export default ProgramDetails;
