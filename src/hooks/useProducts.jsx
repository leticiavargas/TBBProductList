import { useEffect, useState } from "react";
import productsData from './products.json';

export function useProducts () {

  return productsData.data.nodes;
}