import './styles/App.css'
import Layout from "./components/Layout";
import Home from './components/Pages/Home';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Quiz from './components/Pages/Quiz';
import Result from './components/Pages/Result';
function App() {
  return (
      <Layout>
        <Home/>
        <Signup/>
        <Login/>
        <Quiz/>
        <Result/>
      </Layout>
  );
}

export default App;
