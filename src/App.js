import React from 'react'
import './App.scss'

import {DateRangePicker} from './components'

export default function App() {
    const [open, setOpen] = React.useState(true);
    const [dateRange, setDateRange] = React.useState({});
    // const toggle = () => setOpen(!open);
    console.log(dateRange);
    return (
        <div className="App">
            <h1>Hello date range</h1>
            <DateRangePicker
                open={open}
                // toggle={toggle}
                onChange={(range) => setDateRange(range)}
            />
        </div>
    )
}
