
import './App.css';
import Button from './Componets/Button';
import Person from './Componets/Person';
import Header from './Componets/Header';
import List from './Componets/List';

function App() {
  function ChangeColor() {
    let btn = document.getElementsByClassName('btn');
    btn[0].style.backgroundColor = 'red'; // Change the background color to red when the button is clicked
  }
  return (
    <div className="App">
      <Header title="The Future"/>
      I am the best reactjs developer to ever grace on this planet earth
      <Person name="Pratik" age="20"/>
      <Button text="Dont Touch" onClick={ChangeColor} />
      <List item1="chai" item2="coffee" item3="water"/>
    </div>
  );
}

export default App;
