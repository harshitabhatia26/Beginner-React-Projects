import star from './images/star.png'



function Card(props) {
    return(
        <div className="card mx-5 my-4">
            <img class="card-img-top" src={`./images/${props.img}`} alt="Card cap"></img>
            <div class="card-body p-1">
            <p class="d-flex flex-row align-items-baseline m-0">
                <img src={star} alt="star" width="15px"></img>
                <p class="card-title m-0 px-1">{props.rating}</p>
                <p class="card-title m-0"><div class="light">({props.reviewCount}) {props.location}</div></p>
            </p>
            <h5 class="card-title text-left m-0">{props.title}</h5>
            <p class="card-text font-weight-bold text-left">From ${props.price} / per person</p>
            </div>
        </div>
    )
}

export default Card;