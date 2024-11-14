import { Link, useLoaderData } from "react-router-dom";
import CategoryDeleteForm from "../components/CategoryDeleteForm";

type Category = {
  id: number;
  name: string;
};

function CategoryDetail() {
  const category = useLoaderData() as Category;

  return (
    <>
      <h1>{category.name}</h1>
      <Link to={`/categories/${category.id}/edit`}>Modifier</Link>
      <CategoryDeleteForm id={category.id}>Supprimer</CategoryDeleteForm>
    </>
  );
}

export default CategoryDetail;
