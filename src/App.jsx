import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { CATEGORIES, RESTAURANTS } from './data'
import Restaurant from './Components/RestaurantList/Restaurant'
import CategoryButton from './Components/Category/CategoryButton'
import Result from './Components/Result/Result'
//import CategorySection from './Components/Category/CategorySection'

//export const [category, setCategory] = useState('All')

function App() {
  const [category, setCategory] = useState('All')
  const [activeList, setActiveList] = useState(RESTAURANTS);
  const [choice, setChoice] = useState(null)
  
  function updateCategory(newCategory) {
    setCategory(newCategory);
    if (newCategory === 'All') {
      setActiveList(RESTAURANTS)
      return
    }
    setActiveList(RESTAURANTS.filter((item) => item.category === newCategory))
  }

  function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }

  function displayList() {
    return activeList.map((item) => <Restaurant key={item.name} name={item.name} onClick={() => {item.status = !item.status}}/>)
  }

  function pickSomeFood() {
    let list = activeList.map((item) => item.name)
    setChoice(list[genRandomInt(list.length)] + '!!')
  }

  return (
    <>
      <Header />
      <h2>Select a Category</h2>
      <ul>
        <CategoryButton
          name={"All"}
          active={category === 'All'}
          onSelect={() => updateCategory("All")}
        />
        {CATEGORIES.map((item) =>
          <CategoryButton
            key={item}
            name={item}
            active={category === item}
            onSelect={() => updateCategory(item)}
          />
        )}
      </ul>
      <section>
        <h2>Restaurants</h2>
        <ul>
          {displayList()}
        </ul>
      </section>
      <section>
        <ul>
          <button onClick={() => pickSomeFood()}>Pick some food!</button>
          <button onClick={() => setChoice('')}>Clear</button>
        </ul>
      </section>
      <Result choice={choice} />
    </>
  )
}

export default App
