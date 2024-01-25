import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ pedals }) => {
  return (
    <div className={styles.container}>
      {pedals &&
        pedals.map((pedal) => {
          return (
            <ProductCard
              key={pedal.id}
              name={pedal.name}
              company={pedal.company}
              description={pedal.description}
              id={pedal.id}
              image={pedal.image}
              shortName={pedal.shortName}
              type={pedal.type}
              price={pedal.price}
            />
          );
        })}
    </div>
  );
};

export default ProductGrid;
