import { useLoaderData, useNavigate } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";

type Category = {
  id: number;
  name: string;
};

function CategoryEdit() {
  const category = useLoaderData() as Category;
  const navigate = useNavigate();

  return (
    <CategoryForm
      defaultValue={category}
      onSubmit={(categoryData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/categories/${category.id}`, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        }).then((response) => {
          if (response.status === 204) {
            navigate(`/categories/${category.id}`);
          }
        });
      }}
    >
      Modifier
    </CategoryForm>
  );
}

export default CategoryEdit;
