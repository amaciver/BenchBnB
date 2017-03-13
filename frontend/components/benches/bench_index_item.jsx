import React from 'react';

export const BenchIndexItem = ({bench}) => (
  <li className="bench">
    <img src={bench.image_url} height="100" width="100"/><br/>
    description: {bench.description}<br/>
    seating: {bench.seating}<br/>
    <br/><br/> 

  </li>
);
