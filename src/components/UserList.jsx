import React from 'react'
import PropTypes from 'prop-types'

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                
            </tr>
        </React.Fragment>
    )
}

UserList.propTypes = {
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
}

export default UserList