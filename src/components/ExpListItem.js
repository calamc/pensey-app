import React from 'react'

import { connect } from 'react-redux'

// Link tag for reactrouter v4
import { Link } from 'react-router-dom'

const ExpListItem = ({id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>{amount} / {createdAt}</p>
    </div>
);

export default ExpListItem;