import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // now add Footer

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        Homepage
      </main>
      <Footer />
    </div>
  );
}

export default App;