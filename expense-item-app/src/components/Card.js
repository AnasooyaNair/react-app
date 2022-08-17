import './Card.css';

function Card(props){
   const layout = 'card'+ props.className
    return (
    <div className={layout}>{props.children}</div> 
    );
}
export default Card;