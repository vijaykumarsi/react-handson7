import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Students from './Students';
import Error from './Error';
import Nav from './Nav';
import store from './Store';
import Update from './Update';
import Submit from './Submit';
import { useState } from 'react';

function App() {
  const [data,setData] = useState ([
    {Name: "John",Age: "24",Course: "MERN",Batch: "October"},
    {Name: "Doe",Age: "25",Course: "MERN",Batch: "November"},
    {Name: "Biden",Age: "26",Course: "MERN",Batch: "September"},
    {Name: "Barar",Age: "22",Course: "MERN",Batch: "September"},
    {Name: "Christ",Age: 23,Course: "MERN",Batch: "October"},
    {Name: "Elent",Age: 24,Course: "MERN",Batch: "November"},
  ])
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Students' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
          <Students/>
        </store.Provider>
        }/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Update' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
        <Update/>
      </store.Provider>}/>
        <Route path='/Submit' element={
        <store.Provider value={{entries:data, entriesFun:setData}}>
        <Submit/>
      </store.Provider>}/>
        <Route path='/*' element={<Error/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;