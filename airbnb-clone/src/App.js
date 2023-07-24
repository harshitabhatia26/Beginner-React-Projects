import './App.css';
import Card from './Card';
import data from './data';

function App() {
  const carddata = data.map((dataeach)=>
    <Card 
    img = {dataeach.coverImg}
    rating = {dataeach.stats.rating}
    reviewCount = {dataeach.stats.reviewCount}
    location = {dataeach.location}
    title = {dataeach.title}
    price = {dataeach.price}
    />
  )
  return (
    <div>
      {carddata}
    </div>
  );
}

export default App;
