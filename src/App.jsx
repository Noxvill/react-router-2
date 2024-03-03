import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nvbar from './components/Nvbar'
import Home from './views/Home';

function App() {


return (
<div className='mainContainer'>
<div className='content'>

<BrowserRouter>
<Nvbar/>
<Home/>
</BrowserRouter>

</div>
</div>


  )
}

export default App
