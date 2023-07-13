import './App.css'
import { Footer } from './components/Footer'
import { GridCards } from './components/GridCards'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { ItemsProvider } from './context/items'

function App() {

  return (
    <>
      <Header />
      <ItemsProvider>
        <GridCards />
        <Summary />
      </ItemsProvider>
      <Footer />
    </>
  )
}

export default App
