import './ExploreDrinks.css'
import { drinks_category } from '../../assets/data/data'

const ExploreDrinks=({category, setCategory})=> {
  return (
    <div className='explore-drinks' id='explore-drinks'>
        <h1>Explore Our Drinks</h1>
       <p className="exploredrinks-text">Explore our exceptional selection of both imported and local beverages. We offer a wide range of alcoholic drinks to suit every taste. Make every moment unforgettable and treat yourself to an experience worth savoring.</p>
       <div className="explore-category-list">
        {drinks_category.map((item,index)=> {
           return (
            <div onClick={()=> setCategory(prev=> prev === item.drinks_name?"All":item.drinks_name)} key={index} className="explore-drinks-list">
                <img className={category === item.drinks_name?"active":""} src={item.drinks_img} alt='image'/>
                <p>{item.drinks_name}</p>
            </div>
           )
        })}
       </div>
       <hr/>
    </div>
  )
}

export default ExploreDrinks