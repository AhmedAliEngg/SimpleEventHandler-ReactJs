
import './App.css';
import ToolBar from './ToolBar/ToolBar';
function App() {
  return (
    <ToolBar
    onPlayMovie={() => alert('Playing!')}
    onUploadImage={() => alert('Uploading!')}
  />
  );
}

export default App;
