import { useSearchParams, useLocation } from 'react-router-dom';

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const pathname = location.pathname;
  const keyword = searchParams.get('keyword');
  const instock = searchParams.get('instock');
  const rating = searchParams.get('rating');

  console.log('Pathname:', pathname);
  console.log('Keyword:', keyword);
  console.log('Instock:', instock);
  console.log('Rating:', rating);
  console.log(location);
  // console.log(
  //   searchParams.get('keyword'),
  //   searchParams.get('instock'),
  //   searchParams.get('rating')
  // );

  return (
    <main>
      <div className="component">ProductList</div>;
    </main>
  );
};
