import './App.css'
import Card from './components/card/card'
import CounterContainer from './components/counter/CounterContainer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const data = {
    title: "Jeringas",
    description: "Varias Medidas (caja x 100 u)",
    precio: "Valor: $5000",
    pic: "./src/assets/jeringas.jpeg"
  }
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={<h1>Carrito de Compras</h1>} />
      <h2>Material Descartable</h2>
      <div className="row">
        <div className="col-6">
          <Card
            data={data}
          />
        </div>
      </div>
      <CounterContainer initial={0} />
    </div>
  )
}

export default App
