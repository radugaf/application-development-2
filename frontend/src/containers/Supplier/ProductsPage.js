import React from "react";
import ProductsPageContent from "../../components/Products/ProductPageContent.js";

class ProductsPage extends React.Component {
  render() {
    return (
      <>
      <div className="products-page-grid-container">

        {/* <div className="ProductsPageSideMenu">
            <ProductsPageSideMenu />
        </div> */}

        <div className="ProductsPageContent">
            <ProductsPageContent />
        </div>

      </div>
      </>
    );
  }
}

export default ProductsPage;
