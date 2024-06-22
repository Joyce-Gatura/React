



import React from 'react';

const Item = ({item}) => (

  <div>
    <h3>
      <a href={item.url}>{item.title}</a>
    </h3>
    <p>Author :{item.author}</p>
    <p>Comments:{item.num_comments}</p>
    <p>Points:{item.points}</p>
  </div>
);


export default Item;


