import Header from '@components/Header'
import Search from '@components/Search'
import '@css/ibearsmile.css';
import '@css/components/Header.css';
import '@css/components/Search.css';
import '@css/components/Categories.css';
import '@css/components/Carousel.css';
import '@css/components/CarouselItem.css';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Categories from './components/Categories';
import UseInitialState from './hooks/UseInitialState';
const API="http://localhost:3000/initalState"
const App = () => {
  const initialState=UseInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist?.length > 0 &&
        <Categories tittle="lista">
          <Carousel>
          {initialState.mylist?.map(item=>
            <CarouselItem key={item.id} {...item}/>
          )}
          </Carousel>
        </Categories>
      }

      <Categories tittle="Tendencias">
        <Carousel>
          {initialState.trends?.map(item=>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
      <Categories tittle="Originals">
        <Carousel>
        {initialState.originals?.map(item=>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>
    </div>
  )
}

export default App
