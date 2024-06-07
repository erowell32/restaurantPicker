import { useState } from 'react'
import './App.css'
import { RESTAURANTS } from './data'
import Restaurant from './Components/Restaurant'
import FilterButton from './Components/FilterButton'
import Result from './Components/Result'

function genRandomInt(max) {
  return Math.floor(Math.random() * (max));
}

function getFilteredList(list, category, type) {
  if (category !== 'Any') {
    list = list.filter(item => item.category === category);
  }
  if (type !== 'Any') {
    list = list.filter(item => item.type === type);
  }
  return list;
}

function getCategories(list) {
  let categories = [];
  for (const item of list) {
    if (!categories.includes(item.category)) {
      categories.push(item.category)
    }
  }
  return categories;
}

function getTypes(list) {
  let types = [];
  for (const item of list) {
    if (!types.includes(item.type)) {
      types.push(item.type)
    }
  }
  return types;
}

const CATEGORIES = getCategories(RESTAURANTS);
const TYPES = getTypes(RESTAURANTS)

function App() {
  const [category, setCategory] = useState('Any');
  const [type, setType] = useState('Any');
  const [mainList, setMainList] = useState(RESTAURANTS);
  const [choice, setChoice] = useState(null);

  let list = getFilteredList(mainList, category, type);

  function handleRestaurantClick(name) {
    let newList = mainList.slice()
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].name === name) {
        newList[i].active = !newList[i].active
      }
    }
    setMainList(newList)
  }

  function displayList() {
    return list.map((item, index) =>
      <Restaurant
        key={item.name}
        className={!item.active ? "strike" : ""}
        name={item.name}
        onClick={() => handleRestaurantClick(item.name)}
      />)
  }

  function resetFilters() {
    let newList = mainList.slice()
    for (let i = 0; i < newList.length; i++) {
      newList[i].active = true
    }
    setCategory('Any')
    setType('Any')
    setMainList(newList)
  }

  function getChoice(list, category = 'Any', type = 'Any') {
    list = getFilteredList(list, category, type);
    list = list.filter(place => place.active === true)
    let item = list[genRandomInt(list.length)];
    if (item) {
      setChoice(item.name + '!!');
      return
    }
    setChoice('')
  }

  return (
    <>
      <h1>Let's pick some Food!</h1>
      <div style={{marginBottom:'1rem'}} id="filter" >
        <ul>
          {CATEGORIES.map((item) =>
            <FilterButton
              key={item}
              name={item}
              active={category === item}
              onSelect={() => {
                if (category === item) {
                  setCategory("Any")
                  return
                }
                setCategory(item)
              }}
            />
          )}
        </ul>
        <ul>
          {TYPES.map((item) =>
            <FilterButton
              key={item}
              name={item}
              active={type === item}
              onSelect={() => {
                if (type === item) {
                  setType("Any")
                  return
                }
                setType(item)
              }}
            />
          )}
        </ul>
      </div>
      <div id="place">
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div style={{marginTop:'2rem'}}>
        <ul id='place'>
          <button onClick={() => getChoice(mainList, category, type)}>Pick some food!</button>
        </ul>
        {choice && <Result choice={choice} />}
      </div>
      <div id='result-container'>
        <h2>Restaurants</h2>
        <ul id="place">
          {displayList()}
        </ul>
      </div>
    </>
  )
}

export default App
