import React from 'react'
import ProductListFiltersCSS from "../../assets/css/components-css/productsPage/productslistfilters.scss"

const ProductListFilters = () => {
  return <div className="container-filters">
          <div className="container-filter">
            <i className="container-icon-filter">Icon</i>
            <input className="input-filter" type="text" placeholder="ceva"></input>
            <i className="container-icon-filter">Action Icon</i>
          </div>
        </div>
}
 export default ProductListFilters