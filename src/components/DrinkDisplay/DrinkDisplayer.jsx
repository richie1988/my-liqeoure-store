import { useContext } from 'react'
import './DrinkDisplayer.css'
import { StoreContext } from '../../context/storeContext'
import DrinksItem from '../DrinksItem/DrinksItem'

const DrinkDisplayer=({category})=> {
  const {drinks_list} =useContext(StoreContext)


  return (
    <div className='drink-display' id='drink-display'>
      <h2>Best Top Drinks For You!</h2>
      <div className="drinks-display-list">
        {drinks_list.map((item, index)=> {
          if(category==='All' || category===item.category){
          return <DrinksItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
        }
        })}
      </div>
    </div>
  )
}

export default DrinkDisplayer