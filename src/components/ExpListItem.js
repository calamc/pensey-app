import React from 'react'

import { connect } from 'react-redux'

// Link tag for reactrouter v4
import { Link } from 'react-router-dom'

import numeral from 'numeral'
import moment from 'moment'
import '../locales/locales'

const ExpListItem = ({id, title, amount, createdAt, category, km, receiptURL }) => (
        <Link className="list-item" to={`/edit/${id}`}>
        <div>
                <h1 className="list-item__title">{title}</h1>
                <span className="list-item__sub">{moment(createdAt).format('DD MMMM YY')}</span><br/>
                <span className="list-item__sub">{numeral(km / 100).format('0,0')}km</span><br/>
                <span className="list-item__sub">Category: {category}</span>
                <div>
                {receiptURL ?<img alt="Receipt" src={receiptURL} className="receipt"/> : <p>No Receipts added yet.</p>}
                </div>
        </div>
                <h3 className="list-item__numerical"><span>€ </span>{numeral(amount / 100).format('0,0.00')}</h3>
        </Link>
);

export default ExpListItem;