import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards';
import Nav from './components/Nav.jsx';
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

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   async function onSearch(id) {
      try {

         let { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         if(data){
            setCharacters((oldChars) => [...oldChars, data]);

         } else{
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         return console.log(error.message);
      }
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
