
import '@css/ibearsmile.css';
import '@css/components/Header.css';
import '@css/components/Search.css';
import '@css/components/Categories.css';
import '@css/components/Carousel.css';
import '@css/components/CarouselItem.css';
import Header from '@components/Header'
import Routes from './routes/Routes';



const App = () => {
  
  return (
    <div className="App">
      <Header />
      <Routes/>
    </div>
    
  )
}

export default App
