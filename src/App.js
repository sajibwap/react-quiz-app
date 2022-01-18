import './styles/App.css'
import Layout from "./components/Layout";
import Home from './components/Pages/Home';
import Signup from './components/Pages/Signup';
function App() {
  return (
      <Layout>
        <Home/>
        <Signup/>
      </Layout>
  );
}

export default App;
