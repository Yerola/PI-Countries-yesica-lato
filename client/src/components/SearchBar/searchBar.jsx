import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry } from '../../redux/action';
import './searchBar.css';


export default function SearchBar() {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();
    const countriesAll = useSelector((state) => state.countries);

    function onSubmit(e) {
        e.preventDefault();
        if (search.trim() === '') {
            alert('You must enter something please.');
            return;
        }
        const toSearch = search.toLowerCase();
        const validate = countriesAll.filter((el) =>
            el.name
                .toLowerCase()
                .includes(toSearch)
        );
        if (validate.length < 1) {
            return alert('The country does not exist');
        } else {
            dispatch(searchCountry(search));
            setSearch('');
        };
    };

    function onInputChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return <div>
        <form
            onSubmit={onSubmit}
        >
            <input
                type='text'
                placeholder='Enter country name . . .  🌎'
                onChange={onInputChange}
                value={search} />
            <input
                type='submit'
                value='Search 🔍' />
            <ion-icon name="search-outline"></ion-icon>
        </form>
    </div>
};
