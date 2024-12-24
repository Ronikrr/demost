import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/aboutpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Servicepage from './pages/servicepage';
import PageTitle from './components/extra/pagetitle';
function App() {
  const Layout = ({ children }) => (
    <>
      <Header />
      <main>{children}</main>

    </>
  );
  return (
    <Router>

      <Routes>
        <Route path='/' element={
          <Layout>
            <PageTitle title="Home" />
            <Home />
          </Layout>
        } />
        <Route path='/aboutpage' element={
          <Layout>
            <PageTitle title="About Page" />
            <About />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;

