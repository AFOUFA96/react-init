
import logo from './logo.svg';
import './App.css';

import { Card } from './components/Card';
import { Test } from './components/Test';
function App() {
  return (
    <div className="App">
        <Card 
          image="https://picsum.photos/200/200"
          title="titre de la carte"
          subTitle = "Sous-titre de la carte"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
          button = "add to cart"
        />
        <Card 
          image="https://picsum.photos/200/200"
          description="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
        <Test />
        {/* hello */}
    </div>
  );
}

export default App;
