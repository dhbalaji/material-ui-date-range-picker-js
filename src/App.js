import React from 'react'
import './App.scss'

import {DateRangePicker} from './components'

export default function App() {
    const [dateRange, setDateRange] = React.useState({});
    return (
        <div className="App">
            <h1>Hello date range</h1>
            <DateRangePicker
                open={true}
                onChange={(range) => setDateRange(range)}
            />
        </div>
    )
}
