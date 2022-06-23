import './index.css';
import Header from './components/Header'
import Destination from './components/Destination'
import Footer from './components/Footer'
import data from './data'

function App() {

  const locations = data.map(item =>{
    return (
      <Destination
          key={item.id}
          item={item}
      />
  )
  })

  return (
    <div className="container">
      <Header />
      {locations}
      <Footer />
    </div>
  );
}

export default App;
