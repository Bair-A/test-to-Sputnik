import { Currency, ProductType } from '@/shared/types';

export const MOCK_ITEMS: ProductType[] = [
  {
    id: 1,
    title: 'Чайник электрический',
    origin: 'Россия',
    price: 34900,
    currency: Currency.RUB,
    imageUrl: 'https://picsum.photos/id/1/200/300'
  },
  {
    id: 2,
    title: 'Кофемашина',
    origin: 'Германия',
    price: 120000,
    currency: Currency.EUR,
    imageUrl: 'https://picsum.photos/id/2/200/300'
  },
  {
    id: 3,
    title: 'Наушники',
    origin: 'США',
    price: 7999,
    currency: Currency.USD,
    imageUrl: 'https://picsum.photos/id/3/200/300'
  },
  {
    id: 4,
    title: 'Смартфон',
    origin: 'Южная Корея',
    price: 450000,
    currency: Currency.RUB,
    imageUrl: 'https://picsum.photos/id/4/200/300'
  },
  {
    id: 5,
    title: 'Пылесос',
    origin: 'Япония',
    price: 85000,
    currency: Currency.USD,
    imageUrl: 'https://picsum.photos/id/5/200/300'
  },
  {
    id: 6,
    title: 'Ноутбук',
    origin: 'США',
    price: 1500000,
    currency: Currency.RUB,
    imageUrl: 'https://picsum.photos/id/6/200/300'
  },
  {
    id: 7,
    title: 'Фитнес-браслет',
    origin: 'Китай',
    price: 2999,
    currency: Currency.USD,
    imageUrl: 'https://picsum.photos/id/7/200/300'
  }
];
