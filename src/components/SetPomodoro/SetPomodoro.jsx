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
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        let totalTime = e.target.work.value;
        let numberOfBreaks = e.target.numberOfBreaks.value;
        let longBreak = e.target.longBreak.value;
        let numberOfCycles = numberOfBreaks;
        let cycleTime = Math.round((totalTime*60) / numberOfCycles);
        const shortBreak = 5;

        if(totalTime == 0 || numberOfBreaks == 0 || longBreak == 0){
            alert("Please fill non Zero Values")
            return
        }


        newTimer.work = cycleTime;
        newTimer.short = shortBreak;
        newTimer.long = longBreak;



        updateExecute(newTimer)
    }


    return (
        <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div className="elements">
                    <label htmlFor="input">Working Time (hr)</label>
                    <input className="input" type="number" name="work" min="1" onChange={handleChange} defaultValue = {1}/>
                    </div>
                    <div className="elements">
                    <label htmlFor="input">No. of Breaks</label>
                    <input className="input" type="number" name="numberOfBreaks" min="1" onChange={handleChange} defaultValue = {2}/>
                    </div>
                    <div className="elements">
                    <label htmlFor="input">longest break(mins)</label>
                    <input className="input" type="number" name="longBreak" min="1" onChange={handleChange} defaultValue = {30}/>
                    </div>
                </div>
                <button type='submit'>Set</button>
            </form>
        </div>
    )
}

export default SetPomodoro
