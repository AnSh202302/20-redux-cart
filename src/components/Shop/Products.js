import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    name: "My first book",
    description: "This is a first book",
  },
  {
    id: "p2",
    price: 3,
    name: "My second book",
    description: "This is a second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((book) => (
          <ProductItem
            key={book.id}
            id={book.id}
            title={book.name}
            price={book.price}
            description={book.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
