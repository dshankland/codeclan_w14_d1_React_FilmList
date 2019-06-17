import React from 'react';
import Film from './Film';

const FilmList = (props) => {

  const filmNodes = props.data.map((film) => {
    return (
      <li key={film.id}><Film name={film.name} url={film.url} key={film.id}/></li>
    )
  })

  return (
    <div>
      {/*<h2>FilmList</h2>*/}
      <ul>
        {filmNodes}
      </ul>
    </div>
  );

}

export default FilmList;