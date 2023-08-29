import NAvBar from "./Components/NavBar/NAvBar"
import Search from "./Components/SearchDiv/Search"
import Jobs from "./Components/JobDiv/Jobs"
import Value from "./Components/ValueDiv/Value"
import Footer from "./Components/FooterDiv/Footer"


const App = () => {
  return (
    <div className="m-auto bg-white">
      <NAvBar />
      <Search />
      <Jobs/>
      <Value />
      <Footer />
    </div>
  )
}

export default App
