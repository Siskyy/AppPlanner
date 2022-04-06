import React from "react";

import Tile from '../tile/Tile';

const TileList = ({arr}) => {
  return (
    <div>
      { arr.map( (item, index) =>  <Tile value={value} key={index} />) }
    </div>
  );
};

export default TileList;