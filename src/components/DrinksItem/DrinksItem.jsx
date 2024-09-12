import { useContext} from 'react';
import './DrinksItem.css';
import { Add, Remove } from '@mui/icons-material';
import { StoreContext } from '../../context/storeContext';
import fivestar from '../../assets/fivestar.png';


function DrinksItem({ id, name, price, image, description }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='drinks-item'>
      <div className='drinks-item-img-container'>
        <img src={image} className='drinks-item-image' alt='img' />
        {!cartItems[id]? (
          <b className='buy-btn add' onClick={() => {
            addToCart(id);
          }} >Buy</b>
        ) : (
          <div className='item-count'>
            <Remove className='remove' onClick={() => {
              removeFromCart(id);
            }} />
            <p>{cartItems[id]}</p>
            <Add className='add2' onClick={() => {
              addToCart(id);
            }} />
          </div>
        )}
      </div>
      <div className='drinks-item-info'>
        <div className='drinks-item-name-rating'>
          <p>{name}</p>
          <img src={fivestar} alt='rating' className='rating-img' />
        </div>
        <p className='drink-description'>{description}</p>
        <p className='drink-price'>${price}</p>
      </div>
    </div>
  );
}

export default DrinksItem;

