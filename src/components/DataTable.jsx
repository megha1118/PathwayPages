
import React, { useState, useEffect } from 'react';
import { DataTable as DataTablePrime } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {Tag} from 'primereact/tag';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';

export const DataTable = () => {
    const [products, setProducts] = useState([]);


    const Products = new ProductService

    useEffect(() => {
        Products.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    };

    // const imageBodyTemplate = (product) => {
    //     return <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    // };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };


    const imageBodyTemplate = (product) => {
        const image = product.image;
        return (
          <React.Fragment>
            <img
              className="product-list-img shadow-6"
              alt={image?.name}
              src={`https://unsplash.it/60?id${image?.image}`}
              onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              width={60}
              style={{ verticalAlign: "middle" }}
            />
           
          </React.Fragment>
        );
      };
    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
 <div className="card">
            <DataTablePrime value={products} header={header} footer={footer} tableStyle={{ minWidth: '85rem', minHeight:'12rem' }}>
                <Column field="name" header="Name"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTablePrime>
        </div>
        
       
    );
}
