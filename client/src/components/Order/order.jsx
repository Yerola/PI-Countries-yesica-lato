import { useDispatch } from 'react-redux';
import {
  ASCENDING,
  DESCENDING,
  HIGHEST,
  LOWER
} from '../../redux/const/sort.js';
import {
  filterCountryByActivity,
  filterCountryByCountinent,
  filterCountryByPopulation,
  sort
} from '../../redux/action';
import './order.css';


export default function Order() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sort(e.target.value))
  };

  function handleFilterCountinent(e) {
    dispatch(filterCountryByCountinent(e.target.value))
  };

  function handleFilterActivity(e) {
    dispatch(filterCountryByActivity(e.target.value))
  };

  function handleFilterPopulation(e) {
    dispatch(filterCountryByPopulation(e.target.value))
  };

  return <div >
    <h1>Filter by order:</h1>
    <h2>ABC Order -- Population Order-- Continent Order-- Tourist activities</h2>
    <select name="select" onChange={onSelectChange}>
      <option value="ABC Order" > Select ABC Order </option>
      <option value={ASCENDING} > ASCENDING </option>
      <option value={DESCENDING} > DESCENDING </option>
    </select>
    <select name="select" onChange={handleFilterPopulation}>
      <option value="Select Population Amount Order" > Select Population Order </option>
      <option value={HIGHEST} > HIGHEST </option>
      <option value={LOWER} > LOWER </option>
    </select>
    <select name='select' onChange={handleFilterCountinent} >
      <option value="Select Continent Order">Select Continent Order</option>
      <option value="Asia">ASIA</option>
      <option value="North America">NORTH AMERICA</option>
      <option value="South America">SOUTH AMERICA</option>
      <option value="Africa">AFRICA</option>
      <option value="Antarctica">ANTARCTICA</option>
      <option value="Oceania">OCEANIA</option>
      <option value="Europe">EUROPE</option>
    </select>
    <select name='select' onChange={handleFilterActivity} >
      <option value="Select Activity Name">Select The Tourist Activity</option>
      <option value="Adventure Turism">Adventure Turism ⛺🪂</option>
      <option value="Art gallery tours">Art gallery tours 🎨🖼👨‍🎨</option>
      <option value="Bádminton">Bádminton 🏸</option>
      <option value="Basketball">Basketball 🏀</option>
      <option value="Boxing">Boxing 🥊</option>
      <option value="City walking tours">City walking tours 🌆🏙🚶‍♂️</option>
      <option value="Climbing">Climbing 🧗‍♀️</option>
      <option value="Cricket">Cricket 🏏</option>
      <option value="Cycling tours">Cycling tours 🚲</option>
      <option value="Farm visits ">Farm visits 🐄🐖🐓</option>
      <option value="Fencing">Fencing 🤺</option>
      <option value="Fishing">Fishing 🎣</option>
      <option value="Football">Football 🏈</option>
      <option value="Gastronomic Tour">Gastronomic Tour 🍽</option>
      <option value="Golf">Golfing 🏌️‍♂️</option>
      <option value="Hiking">Hiking 🥾</option>
      <option value="Historical tours">Historical tours 🕰🚶‍♀️</option>
      <option value="Hockey">Hockey 🏑🏒</option>
      <option value="Horse Riding">Horse Riding 🏇</option>
      <option value="Kayaking">Kayaking 🛶</option>
      <option value="Marathons">Marathons 🏃‍♂️🏃‍♀️</option>
      <option value="Martial Arts">Martial Arts 🥋</option>
      <option value="Music festivals">Music festivals 🎆🎶</option>
      <option value="Museum visits">Museum visits 👁‍🗨🖼</option>
      <option value="Ping Pong">Ping Pong 🏓</option>
      <option value="Racing">Racing 🏁🚘</option>
      <option value="Rugby">Rugby 🏉</option>
      <option value="Scuba and snorkel diving">Scuba diving 🤿</option>
      <option value="Skating">Skating ⛸</option>
      <option value="Skydiving">Skydiving 🎿</option>
      <option value="Snowboard">Snowboard 🏂</option>
      <option value="Soccer">Soccer ⚽</option>
      <option value="Sport Competition">Sport Competition 🤸‍♀️🤸‍♂️🏅</option>
      <option value="Swimming">Swimming 🏊‍♀️🏊‍♂️</option>
      <option value="Tennis">Tennis 🎾</option>
      <option value="Theme parks">Theme parks🎢</option>
      <option value="Triathlons">Triathlons 🏃‍♀️🏊‍♀️🚴‍♀️</option>
      <option value="Volley">Volley 🏐</option>
      <option value="Waterpolo">Waterpolo 🤽‍♀️🤽‍♂️</option>
      <option value="Wildlife watching">Wildlife watching 👀</option>
      <option value="Wine tasting ">Wine tasting 🍷</option>
      <option value="Yoga retreats">Yoga retreats 🧘‍♀️🧘‍♂️</option>depor
    </select>
  </div>
};