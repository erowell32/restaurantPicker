import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { CATEGORIES, RESTAURANTS, TYPES } from './data'
import Restaurant from './Components/RestaurantList/Restaurant'
import FilterButton from './Components/Category/FilterButton'
import TypeButton from './Components/Category/TypeButton'
import Result from './Components/Result/Result'

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
      <Header />
      <div id="filter">
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
      <section>
        <h2>Restaurants</h2>
        <ul id="place">
          {displayList()}
        </ul>
      </section>
      <section>
        <ul id='place'>
          <button onClick={() => getChoice(mainList, category, type)}>Pick some food!</button>
        </ul>
      </section>
      <Result choice={choice} />
    </>
  )
}

export default App
