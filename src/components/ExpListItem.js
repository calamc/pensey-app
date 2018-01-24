import React from 'react'

import { connect } from 'react-redux'

// Link tag for reactrouter v4
import { Link } from 'react-router-dom'

import numeral from 'numeral'
import moment from 'moment'
import '../locales/locales'

const ExpListItem = ({id, description, amount, createdAt }) => (
        <Link className="list-item" to={`/edit/${id}`}>
        <div><h1 className="list-item__title">{description}</h1><span
        className="list-item__sub">{moment(createdAt).format('DD MMMM YY')}</span></div>
        <h3 className="list-item__numerical"><span>€</span>{numeral(amount / 100).format('0,0.00')}</h3>
        </Link>
);

export default ExpListItem;