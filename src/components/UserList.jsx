import React from 'react'
import PropTypes from 'prop-types'

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.rating}</td>
                <td>{props.awards}</td>
                <td>{props.length}</td>
            </tr>
        </React.Fragment>
    )
}

UserList.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    awards: PropTypes.number,
    length: PropTypes.number
}

export default UserList