import React, { useEffect, useState } from 'react'
import './clock.scss'

const getTimeEveryOneSecond = () => {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return {
        hours,
        minutes,
        seconds
    }
}

function LiveClock() {
    const [{ hours, minutes, seconds }, setTime] = useState(
        getTimeEveryOneSecond()
    )

    useEffect(() => {
        let interval = setInterval(() => setTime(getTimeEveryOneSecond()), 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="clock">
            <span className="hour">{hours}</span>
            <span className="minutes"> : {minutes}</span>
            <span className="seconds"> : {seconds}</span>
        </div>
    )
}

export default LiveClock
