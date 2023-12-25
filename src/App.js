import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Acount from "./pages/Acount";
import Navbar from "./components/UI/navbar/Navbar";
import Autor from "./pages/Autor";
import Chat from "./pages/Chat";
import {fetchPost} from "./asyncActions/posts";
import {useDispatch} from "react-redux";
import Menu from "./components/UI/menu/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
    /*   const [posts, setPosts] = useState([
           {id: 1, title: 'First', body:'Is a good post'},
           {id: 2, title: 'Second', body:'Is a good post'},
           {id: 3, title: 'Third', body:'Is a good post'}
       ])
       const [searchQuery, setSearchQuery] = useState('');
       const searchResult = useMemo(() =>{
           return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
       },[posts,searchQuery])*/
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost());

    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar /*searchQuery={searchQuery} setSearchQuery={setSearchQuery}/*//>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Posts /*searchResult={searchResult} posts={posts}*//>}/>
                    <Route path="/acount" element={<Acount/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/autor" element={<Autor /*searchResult={searchResult} posts={posts}*//>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
