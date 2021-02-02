import Searchbar from './SearchBar.js'

const Header = () => {
    return (
        <section className="App-header">
            <section className="jumbotron" >
                <h1> Employee Search Engine </h1> 
                <p>This is a simple hero unit, a simple jumbotron - style component
                for calling extra attention to featured content or information. </p>
                <p>
                <button variant = "primary"> Learn more </button> 
                    </p> 
            </section>
        <Searchbar />
        </section>
        
    )
}

export default Header
