

const styles = {
    jumbot: {
        background: "navy",
        color: "white",
        display: "block",
        marginBottom: "0px"
    },
    h1: {
        textAlign: "center"
    },
    p:{
        textAlign: "center"
    },
    hr: {
        margin: 0,
        background: "red",
        height: "5px"
    }
}

const Header = () => {
    return (
        <section className="App-header">
            <section className="jumbotron" style={styles.jumbot} >
                <h1 style={styles.h1}> Employee Search Engine </h1> 
                <p style={styles.p}>Click on carrots to filter by heading or use the search box to narrow your results.</p> 
            </section>
            <hr style={styles.hr} />
        </section>
        
    )
}

export default Header
