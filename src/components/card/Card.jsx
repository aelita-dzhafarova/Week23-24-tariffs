import { useState } from 'react';
import './card.css';

function Card(props) {

    const {name, price, speed, color} = props;
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed);
    }
   
    return (
            <div className={(pressed ? 'selected' : 'tariff-container')}>
                <div className={`background ${color}`} onClick={handleChange}>
                    <h3>Безлимитный {name}</h3>
                    <p className='price'><span>{price}</span> руб/мес</p>
                </div>
                <p>до {speed} Мбит/сек</p>
                <p className='text'>Объем включенного трафика не ограничен</p>
            </div>        
            
    )
}
  
export default Card;