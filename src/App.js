import './App.css';
import { GroceryList } from './GroceryLIst';
import Image from './one.jpg';
import ImageTwo from './two.jpg';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src={Image} alt='shopping' width='200px'/>
      </div>
      <div className="container"><h1>Grocery List</h1></div>
      <GroceryList />
      <div className="container">
      <img src={ImageTwo} alt='shopping' width='200px'/>
      </div>
    </div>
  );
}

export default App;
