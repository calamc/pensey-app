import React from 'react'

import { connect } from 'react-redux'

// Link tag for reactrouter v4
import { Link } from 'react-router-dom'

import numeral from 'numeral'
import moment from 'moment'
import '../locales/locales'

const ExpListItem = ({id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>
            <span>€</span>{numeral(amount / 100).format('0,0.00')} 
                / 
            {moment(createdAt).format('DD MMMM YY')}
        </p>
    </div>
);

export default ExpListItem;