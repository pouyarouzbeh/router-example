import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "لباس" },
  { id: 2, name: "کفش" },
  { id: 3, name: "کتاب" },
];

function Products() {
  return (
    <>
      <h2>محصولات:</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
