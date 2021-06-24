import './App.css';
import Temperature from './components/Temperature';

const temp = 72;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Report</h1>
      </header>
      <main>
        <Temperature currentTemp = {temp}/>
      </main>
    </div>
  );
}

export default App;
