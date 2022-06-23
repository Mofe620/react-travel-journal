
export default function Destination(props){
    return (
        <div className='destinations'>
            <div className="location">
                <img src={props.item.imageUrl} alt="frame" className='location-thumbnail'/>
                <div>
                    <div className='location-data'>
                        <div className='location-country-name'>
                            <img src={require('../images/location-icon.png')} className="location-icon" alt="icon"/>
                            <p>{props.item.location}</p>
                        </div>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h3>{props.item.title}</h3>
                    <p className='date-info'>{props.item.startDate} - {props.item.endDate}</p>
                    <p className='location-brief'>{props.item.description}</p>
                </div>
            </div>
        </div>
    );
}