import React from 'react';
import LeftLayout from '../../component/common/layouts/LeftLayout';
import List from '../../component/common/list';
import Spiner from '../../component/common/spiner';
import { IProductProbs } from './interface';
import { IProduct } from '../../containers/ShopContainer/interface';
import { ProductElemProduct } from '../../component/common/list/listElem';
import FilterProduct from '../../component/common/filter/filterProduct';

const ShopPage: React.FC<IProductProbs> = ({ data, loading }) => (
  <>
    <LeftLayout title="Магазин" classList="shoppage" functional={<FilterProduct />}>
      {!loading ? (
        <>
          {data?.length ? (
            <>
              <List
                data={data}
                render={(el: IProduct) => (
                  <>
                    <ProductElemProduct data={el} />
                  </>
                )}
              />
            </>
          ) : (
            0
          )}
        </>
      ) : (
        <Spiner />
      )}
    </LeftLayout>
  </>
);

export default ShopPage;
