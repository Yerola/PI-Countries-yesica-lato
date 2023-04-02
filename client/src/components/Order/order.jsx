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
      <option value="Antarctica">ANTARTICA</option>
      <option value="Oceania">OCEANIA</option>
      <option value="Europe">EUROPE</option>
    </select>
    <select name='select' onChange={handleFilterActivity} >
      <option value="Select Activity Name">Select Activities</option>
      <option value="Eco Sightseeing">Eco Sightseeing</option>
      <option value="Historical tours">Historical tours</option>
      <option value="Golf">Golfing</option>
      <option value="Wildlife watching">Wildlife watching</option>
      <option value="Cycling tours">Cycling tours</option>
      <option value="Museum visits">Museum visits</option>
      <option value="Kayaking">Kayaking</option>
      <option value="Skydiving">Skydiving</option>
      <option value="Music festivals">Music festivals</option>
      <option value="Fishing">Fishing</option>
      <option value="Yoga retreats">Yoga retreats</option>
      <option value="City walking tours">City walking tours</option>
      <option value="Scuba and snorkel diving">Snuba diving</option>
      <option value="Marathons">Marathons</option>
      <option value="Triathlons">Triathlons</option>
      <option value="Gastronomic Tour">Gastronomic Tour</option>
      <option value="Hiking">Hiking</option>
      <option value="Wine tasting ">Wine tasting</option>
      <option value="Adventure Turism">Adventure Turism</option>
      <option value="Art gallery tours">Art gallery tours</option>
      <option value="Farm visits ">Farm visits</option>
      <option value="Theme parks">Theme parks</option>
    </select>
  </div>
};