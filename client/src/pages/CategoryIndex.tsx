import { Link, useLoaderData } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

function CategoryIndex() {
  const categories = useLoaderData() as Category[];

  return (
    <>
      <Link to={"/categories/new"}>Ajouter</Link>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryIndex;
