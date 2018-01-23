import React from 'react'
import ExpList from './ExpList'

import ExpListFilters from './ExpListFilters'

const Dashboard = () => (
    <div>
        <ExpListFilters/>
        <ExpList/>
    </div>
);

export default Dashboard;