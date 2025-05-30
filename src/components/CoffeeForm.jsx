import { coffeeOptions } from '../utils/index'
import { useState } from 'react'

export default function CoffeeForm(){

  const [ showCoffeeTypes, setShowCoffeeTypes ] = useState(false)
  const [ coffeeSelection, setCoffeeSelection ] = useState(null)
  const [ coffeeCost, setCoffeeCost ] = useState(0)
  const [ hour, setHour ] = useState(0)
  const [ mins, setMins] = useState(0)

  function handleSubmitForm(){
    console.log(coffeeSelection, coffeeCost, hour, mins)
  }

  return(
    <>
    <div className="section-header">
      <i className="fa-solid fa-pencil"></i>
      <h2>Start Tracking Today</h2>
    </div>
    <h4>Select coffee type</h4>
    <div className="coffee-grid">
      {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
        return (
          <button 
          className={"button-card " + (option.name == coffeeSelection ? ' coffee-button-selected':  ' ') }
          key={optionIndex}
          onClick={() => {setCoffeeSelection(option.name)
            setShowCoffeeTypes(false)
          }}>
             <h4>{option.name}</h4>
             <p>{option.caffeine}mg</p>
        </button>
        )
      })}
      <button 
      className={"button-card " + (showCoffeeTypes ? ' coffee-button-selected':  ' ') }
       onClick={() => {
        setShowCoffeeTypes(true)
        setCoffeeSelection(false)
        }}>
        <h4>Other</h4>

      </button>
    </div>
   { showCoffeeTypes
   &&
   <select
   onChange={(e) => {
    setCoffeeSelection(e.target.value)
   }}
   id="coffee-list" name="coffee-list">
      <option value={null}>
        Select types
      </option>
      {coffeeOptions.slice(5).map((option, optionIndex) => {
        return (
          <option value={option.name} key={optionIndex}>
            {option.name} ({option.caffeine}mg)
          </option>
        )
      } )}
    </select>}
    <h4>Add the cost ($)</h4>
    <input 
    onChange={(e) => {
      setCoffeeCost(e.target.value)
    }}
    className='w-full' 
    type="number" 
    value={coffeeCost}
    placeholder='4.50'/>
    <h4>Time since consumption</h4>
    <div className='time-entry'>
      <div>
        <h6>Hours</h6>
        <select 
        onChange={(e) => {
          setHour(e.target.value)
        }}
        id="hours-select">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hours, hoursIndex) => {
            return (
              <option key={hoursIndex} value={hours}>{hours}
              </option>
            )
          })}
        </select>
      </div>

      <div>
        <h6>Mins</h6>
        <select 
        onChange={(e) => {
          setMins(e.target.value)
        }}
        id = 'mins-select'>
          {[0,5,10,15,30,45].map((mins, minsIndex) => {
            return <option key={minsIndex} value={mins}>{mins}</option>
          })}
        </select>
      </div>
    </div>
    <button
    onClick={handleSubmitForm}
    >
      <p>Add Entry</p>
    </button>
    </>
  )
}