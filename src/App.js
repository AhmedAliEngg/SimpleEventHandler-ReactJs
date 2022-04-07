
import './App.css';
import handler from './Button/Button';
function App() {
  return (
    <button onClick={handler}>
      Click me
    </button>
    // <button onClick={() => {
    //   alert('You clicked me!');
    // }}></button>
  );
}

export default App;
