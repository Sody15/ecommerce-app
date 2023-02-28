export default interface Product {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
}
