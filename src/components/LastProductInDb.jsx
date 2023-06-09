import React from 'react'

function LastProductInDb() {
    const [product, setProduct]= React.useState()
    React.useEffect(()=>{
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => {
                const last = data.data[data.data.length -1] 
                setProduct(last)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        product && 
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <p>{product.name}</p>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3001/images/products/${product.image}`} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>{product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LastProductInDb)