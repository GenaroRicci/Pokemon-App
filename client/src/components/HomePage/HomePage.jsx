import './HomePage.css'
const HomePage = () =>{
    return(
        <div>
            {/* Searchbar */}
            <input type="text"/>
            <button>Search</button>
            <hr />
            <div className='main-space'>
                <p>Todos los copemones de a 12</p>
            </div>
        </div>
    )
}
export default HomePage;