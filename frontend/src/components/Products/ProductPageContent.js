import React from "react";
import { Link } from 'react-router-dom'
import ProductList from './ProductList'
import ProductListFilters from './ProductListFilters'



class ProductsPageContent extends React.Component {
  render() {
    return (
      <div>
        <ProductListFilters />
        <Link className="ui primary button" to="/add-product">Add a product</Link>
        <Link className="ui secondary button" to="/edit-product">Edit a product</Link>

        <div className="ui component">
          <ProductList />
        </div>

      </div>
    );
  }
}

export default ProductsPageContent;
