import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import ListCustomers from './components/ListCustomer';
import ListCustomer from './components/ListCustomer';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import GadgetStore from './components/GadgetStore';
// import ViewCart from './components/ViewCart';
// import Search from './components/Search';


function App() {
  
  return (
    <Router>
      <div className='container-fluid'>

    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#' >React</a>
        <ul className='nav'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/counter">Counter</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/products">Products</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/search'>Search</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/gadgets'>gadgets</Link>
          </li>
           <li className='nav-item'>
            <Link className='nav-link' to='/cart'>cart</Link>
          </li>
        </ul>

      </div>
    </nav>
    <main style={{border:'2px solid blue',height:'1000px'}}>
      <Routes>
        <Route path='/' element={<Message text='Hello React' textcolour='blue'/>}/>
        <Route path='/counter' element={<Counter value={10}/>}/>
        <Route path='/products' element={<ListProducts/>}/>
        <Route path='/products/:id' element={<EditProduct/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/gadgets' element={<GadgetStore/>}/>
        {/* <Route path='/cart' element={<ViewCart/>}/> */}
        {/* <Route path='/search' element={<Search/>}/> */}
        
      </Routes>
    </main>
  </div>
  
  </Router>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     {/* <section><Message text="Hello React"/>
  //     <Message text="Hyderbad" textcolour="red"/>
  //     <Counter value={5} title="new counter"/></section> */}
  //     <section>
  //     {/* <FnCounter value={5}/>
  //     <FnCounter value={20}/> */}
  //     <ListProducts/>
  //     <ListCustomer/></section>
  //   </div>
  );
}

export default App;
