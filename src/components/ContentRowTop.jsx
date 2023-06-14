import React from 'react'

import ContentRowUserProducts from './ContentRowUserProducts'
import ProductsInDb from './ProductsInDb'
import LastProductInDb from './LastProductInDb'
import LastUserInDb from './LastUserInDb'


function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App ElectroArco</h1>
            </div>

            {/* <!-- Content Row products--> */}
            <ContentRowUserProducts />
            {/* <!-- End products in Data Base --> */}
           

            {/* <!-- Content Row Last Products, user in Data Base --> */}
            <div className="row">
                {/* <!-- Last product, user in DB --> */}
                <ProductsInDb />
                <LastProductInDb />
               

                {/* <!-- Products in DB --> */}
                
            </div>
        </div>
    )
}

export default React.memo(ContentRowTop)
