import Book from "./components/Book"


const App = () => {
    return (
        <>
            <h1>Prvni komponenta</h1>
            <h2>{2+2}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Facere ducimus magni nesciunt non autem natus corporis beatae 
            architecto veniam similique, eos aliquid aperiam illum porro aut cum? Quam, aspernatur facere!
            </p>

            <Book />
        </>
    )
}

export default App