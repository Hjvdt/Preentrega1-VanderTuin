import './Card.css';
import Button from "../Button/Button";

const Card = ({ data }) => {
    return (
            <div className="card">
                <img src={data.pic} alt={data.title} />
                <div className="card-body ">
                    <p className='card-title '>{data.title}</p>
                    <p className='card-text'>{data.description}</p>
                    <p className='card-price'>{data.precio}</p>
                </div>
                <Button text={"Agregar al carrito"} cb={() => console.log("cb")} color={"#73b8d7a4"}/>
            </div>
    )
};

export default Card
