
import './App.css';
// import handler from './Button/Button';
import AlertButton from './ReadingProps/ReadingProps';
function App() {
  return (
    // <button onClick={handler}>
    //   Click me
    // </button>
    // <button onClick={() => {
    //   alert('You clicked me!');
    // }}></button>
    <div>
      <AlertButton message="Playing!">
        Playing
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>

  );
}

export default App;
