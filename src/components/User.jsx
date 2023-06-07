//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import UserList from './UserList'

class User extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/users')
        .then(res => res.json())
        .then(data => {
            this.setState({ users: data.data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                {/*<!-- USUARIO LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Usuarios en base de datos</h1>

                {/*<!-- DataTales -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Email</th>
                                        <th>Telefono</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user, index) => {
                                            return <UserList  {...user} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User
