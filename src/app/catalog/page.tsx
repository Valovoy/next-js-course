import { FC } from "react";
import type { Metadata } from "next";
import { ProductService } from "~/services/product.service";
import Catalog from "~/components/ui/catalog/Catalog";

async function getProducts() {
  const data = await ProductService.getAll();

  return data;
}

export const metadata: Metadata = {
  title: "Catalog",
};

const CatalogPage: FC = async () => {
  const data = await getProducts();

  return <Catalog products={data} />;
};

export default CatalogPage;
