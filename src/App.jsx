
import './styles/App.css';
import tariffs from './data/tariffs.json';
import Card from './components/card/Card';

function App() {
  return (
    <div className="container">
     {
        tariffs.map((el, i) => (
          <Card key={i}
          name={el.name}
          price={el.price}
          speed={el.speed}
          color={el.color}
          isSelected={el.isSelected}
          />
  ))
}
    </div>
  );
}

export default App;




