import { Checkbox } from '@chakra-ui/react'

import featureFilms from './data/featureFilms.json'

export default function FilmsList() {


  return featureFilms.map((film) => {
    const imgSrc = `images/box-covers/${film.title.replaceAll(' ', '-').toLowerCase()}.webp`;

    return (
      <>
        <Checkbox>
          <p>{film.title}</p>
          <img src={imgSrc} />
        </Checkbox>
      </>
    )}
  )
}