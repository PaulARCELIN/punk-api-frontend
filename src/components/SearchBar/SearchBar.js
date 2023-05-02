import './SearchBar.css'

export function SearchBar( {selection} ) {
    
    return (<div className='searchbar-container'>
        <input className='searchbar-input' onChange={(e) => selection(e.target.value)} placeholder='Search a beer'></input>
    </div>)
}