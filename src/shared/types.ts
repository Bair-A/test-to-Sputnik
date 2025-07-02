export enum Currency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export type ProductType = {
  id: number;
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
};
