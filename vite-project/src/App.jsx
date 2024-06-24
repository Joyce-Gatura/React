/* eslint-disable no-undef */
import { useState } from 'react';
import './App.css';
import List from './Components/List';
import LoginForm from './Components/LoginFolder/LoginForm';
// import Header from './Components/ShoeProductFolder/Header';
import ProductInfo from './Components/ShoeProductFolder/ProductInfo';
import FilterComponent from './Components/EcommerceFolder/FilterComponent';
import ProductListComponent from './Components/EcommerceFolder/ProductListComponent';
import productsData from './Components/EcommerceFolder/Product';

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
  const [stories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = productsData.filter((product) => {
    const isInSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isInCategories = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return isInSearch && isInCategories;
  });

  return (
    <div className="App">
      <h1>My Stories</h1>
      <input type="text" onChange={handleSearch} value={searchTerm} />
      <List list={filteredStories} />
      <hr />
      <LoginForm />
      <hr />
      <ProductInfo />
      <hr />

      <h1>E-commerce Product Filter</h1>
      <FilterComponent
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </div>
  );
}
