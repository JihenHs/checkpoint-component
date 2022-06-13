import logo from "./logo.svg";
import "./App.css";
import Photoprofile from "./profile/Photoprofile";
import Name from "./profile/Name";
import Adress from "./profile/Adress";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Photoprofile />
        <Name />
        <Adress />
      </header>
    </div>
  );
}

export default App;
