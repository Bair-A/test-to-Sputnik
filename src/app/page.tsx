import Products from '@/components/Products/Products';
import { MOCK_ITEMS } from '@/constants/constants';

export default function Home() {
  return <Products products={MOCK_ITEMS} />;
}
