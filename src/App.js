import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ColorPickerComponent from './ColorPickerComponent'
function App() {
  return (
    <div className="App">
      <h2 className='text-center bg-dark text-white p-2'>How to create color picker in React Js</h2>
         <ColorPickerComponent /> 
    </div>
  );
}

export default App;
