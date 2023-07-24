

function Card(props) {
    let badgeText 
    if(props.dataeach.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.dataeach.location==="Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card mx-2 my-2">
            <img class="card-img-top" src={require(`./images/${props.dataeach.coverImg}`)} alt="Card cap" ></img>
            {badgeText!=null && <span class="badge badge-light">{badgeText}</span>}
            <div class="card-body p-1">
            <p class="d-flex flex-row align-items-baseline m-0 ">
                <img src={require('./images/star.png')} alt="star" width="15px"></img>
                <p class="card-title m-0 px-1">{props.dataeach.stats.rating}</p>
                <p class="card-title m-0"><div class="light">({props.dataeach.stats.reviewCount}) {props.dataeach.location}</div></p>
            </p>
            <h5 class="card-title text-left m-0">{props.dataeach.title}</h5>
            <p class="card-text font-weight-bold text-left">From ${props.dataeach.price} / per person</p>
            </div>
        </div>
    )
}

export default Card;