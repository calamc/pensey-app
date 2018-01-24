import React from 'react'
import ExpList from './ExpList'
import ExpSummary from './ExpSummary'

import ExpListFilters from './ExpListFilters'

const Dashboard = () => (
    <div>
        <ExpSummary/>
        <ExpListFilters/>
        <ExpList/>
    </div>
);

export default Dashboard;