import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div>
        Page requested cannot be found<Link to="/">Return to dashboard</Link>
    </div>
);

export default NotFound;