



import React, { useState } from 'react';
import './App.css';
import List from './Components/List';
import LoginForm from './Components/LoginFolder/LoginForm';
import Header from './Components/ShoeProductFolder/Header';
import ProductInfo from './Components/ShoeProductFolder/ProductInfo';


const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

 export function App() {
  const [Stories] = useState(initialStories)
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = initialStories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Stories</h1>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      <List list={filteredStories} />
      <hr />
      <LoginForm/>
      <hr />
      <ProductInfo/>
    </div>
  );
}

