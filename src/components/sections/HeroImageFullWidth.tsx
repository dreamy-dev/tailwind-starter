"use client";

interface ProductHeroProps {
  imageUrl: string;
 
}

const ProductHero: React.FC<ProductHeroProps> = ({ imageUrl }) => {
  return (
    <section className="w-full h-auto">
      <img
        className="h-auto w-full"
       
        src={imageUrl}
        alt="hero product image"
      />
    </section>
  );
};

export default ProductHero;