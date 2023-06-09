import React from 'react'
import UserList from './UserList'

class User extends React.Component {
    state = {
        users: []
    }

}
function LastUserInDb() {
    const [user, setUser] = React.useState()
    React.useEffect(() => {
        fetch('http://localhost:3001/api/users')
            .then(res => res.json())
            .then(data => {
                const last = data.data[data.data.length - 1]
                setUser(last)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        user &&
        <div className="lastUser">
            <div className="tableUser">
                <div className="card-header py-3">
                    <h5 className="title-last">Ultimo Usuario Agregado</h5>
                </div>
                <div className="card-margin-last-user">
                    <div className="card-body-last-user">
                        <div className="table-responsive">
                            <table className="table table1 table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>

                                    </tr>
                                </thead>
                                <tbody className='effec'>
                                    {
                                        <>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </>
                                       
                                        
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LastUserInDb)