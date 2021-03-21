import React from 'react'
import './App.scss'

import {DateRangePicker} from './components'

export default function App() {
    const [dateRange, setDateRange] = React.useState({});
    return (
        <div className="App">
            <DateRangePicker
                open={true}
                onChange={(range) => setDateRange(range)}
            />
        </div>
    )
}
