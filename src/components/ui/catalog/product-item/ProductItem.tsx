import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "~/types/product.interface";
import { convertPrice } from "~/utils/convertPrice";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lh:h-80">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex-justify-between">
        <div>
          <h3 className="text-smt-text-gray-700">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {convertPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
