import './App.css';
import Card from './Card';
import data from './data';

function App() {
  const carddata = data.map((dataeach)=>
    <Card 
      key = {dataeach.id}
      dataeach = {dataeach}
    />
  )
  return (
    <div className='cards-list'>
      {carddata}
    </div>
  );
}

export default App;
