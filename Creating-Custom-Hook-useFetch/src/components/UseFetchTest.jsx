import React from 'react';
import useFetch from './useFetch'; // ✅ Corrected name

function UseFetchTest() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  console.log(data, error, loading);

  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>Use Fetch Hook</h1>
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {
        data && data.products && data.products.length
          ? data.products.map(productItem => (
              <p key={productItem.id}>{productItem.title}</p>
            ))
          : null
      }
    </div>
  );
}

export default UseFetchTest;
