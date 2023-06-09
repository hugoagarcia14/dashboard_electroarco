import React from 'react'

class ProductsInDb extends React.Component {
    state = {
        products: [],
        overTitle: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onTitleOver = () => {
        this.setState({ overTitle: !this.state.overTitle })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.onTitleOver}>Productos Agregados</h5>
                    </div>
                    <div className={`card-body ${this.state.overTitle ? 'bg-secondary' : ''}`}>
                        <div className="row">
                            {this.state.products.map((product, index) =>
                                <div className="col-lg-6 mb-4" key={index}>

                                    <div className="card-header py-3">
                                        <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img
                                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                src={`http://localhost:3001/images/products/${product.image}`}
                                                style={{ width: '100%', objectFit: 'cover' }}
                                            />
                                            {product.description}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsInDb