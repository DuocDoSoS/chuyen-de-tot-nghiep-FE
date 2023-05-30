import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/Home';
import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
function App() {

  return (
    <Router>
      <div>
        <Routes>
            <Route path='/:productId' element={<DefaultLayout><HomePage/></DefaultLayout>}/>
            <Route path='/' element={<DefaultLayout><HomePage/></DefaultLayout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
