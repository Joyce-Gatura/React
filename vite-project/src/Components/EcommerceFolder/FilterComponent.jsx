/* eslint-disable react/prop-types */

const FilterComponent = ({ searchTerm, onSearchChange, selectedCategories, onCategoryChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="categories">
        {['Electronics', 'Clothing', 'Books'].map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
