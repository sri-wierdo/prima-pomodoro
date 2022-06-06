import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import "./setpomodoro.css"

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 0.2,
        short: 0.1,
        long: 0.5,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        const totalTime = e.target.work.value;
        const numberOfBreaks = e.target.numberOfBreaks.value;
        const longBreak = e.target.longBreak.value;
        const numberOfCycles = numberOfBreaks;
        let cycleTime = Math.round((totalTime*60) / numberOfCycles);
        const shortBreak = 5;
        console.log(cycleTime)
        console.log(shortBreak)
        console.log(longBreak)
        console.log(numberOfCycles)
        newTimer.work = cycleTime;
        newTimer.short = shortBreak;
        newTimer.long = longBreak;
        let cycleCounter = 0;

        updateExecute(newTimer)
    }


    return (
        <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div className="elements">
                    <label htmlFor="input">Working Time (hr)</label>
                    <input className="input" type="number" name="work" onChange={handleChange} />
                    </div>
                    <div className="elements">
                    <label htmlFor="input">No. of Breaks</label>
                    <input className="input" type="number" name="numberOfBreaks" onChange={handleChange} />
                    </div>
                    <div className="elements">
                    <label htmlFor="input">longest break(mins)</label>
                    <input className="input" type="number" name="longBreak" onChange={handleChange} />
                    </div>
                </div>
                <button type='submit'>Set</button>
            </form>
        </div>
    )
}

export default SetPomodoro
