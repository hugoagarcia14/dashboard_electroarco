import React, { useEffect, useState } from 'react';

function SearchProducts(props) {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    const getProducts = () => {
        fetch(`http://localhost:3001/api/products?search=${keyword}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data || []);
            })
            .catch(err => {
                console.log('Error: ', err);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    const onSearch = (e) => {
        e.preventDefault();
        getProducts();
    };

    return (
        <div className="container-fluid">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {/* Buscador */}
                    <form onSubmit={onSearch}>
                        <div className="form-group">
                            <label htmlFor="">Buscar por Nombre:</label>
                            <input type="text" className="form-control" onChange={(e) => setKeyword(e.target.value)} />
                        </div>
                        <button className="btn btn-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Productos para la palabra: {keyword}</h2>
                </div>
                {/* Listado de productos */}
                {products.length > 0 ? (
                    products.map((product, i) => (
                        <div className="col-sm-6 col-md-3 my-4" key={i}>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img
                                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                            src={`http://localhost:3001/images/products/${product.image}`}
                                            alt={product.description}
                                            style={{ width: '100%', objectFit: 'cover' }}
                                        />
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="alert alert-warning text-center">No se encontraron productos</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchProducts;