import './App.css';
import ContactForm from './AddContact';
import { Route, Routes } from "react-router-dom";
import COntactList from './ContactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/list" element={<COntactList />} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
