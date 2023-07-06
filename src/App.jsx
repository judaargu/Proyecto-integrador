import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   let email = 'ejemplo@mail.com';
   let password = '1234';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      if (userData.password === password&& userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((pj) => {
         return pj.id !== id;
      }))
   }
   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/favorites' element={<Favorites />}></Route>
         </Routes>
      </div>
   );
}

export default App;
