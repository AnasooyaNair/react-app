import './DateDetails.css';

function DateDetails(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    return (
        <div className="details-date ">
        <div className='details-date__month'>{month}</div>
        <div className='details-date__year'>{year}</div>
        <div className='details-date__day'>{day}</div>
        </div>
    );
}
export default DateDetails;