import axios from "axios";
import { IProduct } from "~/types/product.interface";

export const ProductService = {
  async getAll() {
    const { data } = await axios<IProduct[]>({
      url: `${process.env.HOST_NAME}/products`,
      method: "GET",
    });

    return data;
  },
};
