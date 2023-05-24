import React from 'react';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';

function showAdditional(notes) {
    const alertInformation = Object.entries(notes)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
   alert(alertInformation)
}

function App() {
return (
 <div className="wrapper">
 <h1>Animals</h1>
 {data.map(animal => (
 <AnimalCard key={animal.name} name = {animal.name} sciname = {animal.scientificName} size = {animal.size} 
 diet = {animal.diet} notes = {animal.additional} showAdditional={showAdditional}/>
 ))}
 </div>
)
}
export default App;