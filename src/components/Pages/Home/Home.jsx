import {useState} from 'react'
import './Home.css'
import Header from '../../../components/header/header'
import ExploreDrinks from '../../../components/ExploreDrinks/ExploreDrinks'
import DrinkDisplayer from '../../DrinkDisplay/DrinkDisplayer'
import AppDownload from '../../appDownload/appDownload'

function Home() {
  const [category, setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreDrinks category={category} setCategory={setCategory}/>
      <DrinkDisplayer category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home