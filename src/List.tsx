import { useState, useEffect, useRef, ChangeEventHandler, ChangeEvent } from 'react'
import './List.css'

function List() {

  //fetching the Lists from SWAPI
  async function fetchAPI (page : number, categorySelectValue : string) {
    const fetchSWAPI = await fetch(`https://swapi.dev/api/${categorySelectValue}/?page=${page}&format=json`)
    console.log(fetchSWAPI);
  }

  function handleCatergorySelect(category : string) {
    setpage(1);
    setcategorySelect(category);
  }

  function handlePageChange(page: number) {
    setpage(page);
  }

  const [page, setpage] = useState(1);
  const [categorySelect, setcategorySelect] = useState(useRef("films").current)


  useEffect(() => {

    fetchAPI(page,categorySelect);
    

    return () => {}
  }, [page,categorySelect])
    
  

  return (
    <select id="category" onChange={e => {handleCatergorySelect(e.target.value)}}>
      <option value={"films"}>Film</option>
      <option value={"people"}>People</option>
      <option value={"planets"}>Planet</option>
      <option value={"species"}>Specie</option>
      <option value={"starships"}>Starship</option>
      <option value={"vehicle"}>Vehicle</option>
    </select>
  )
}

export default List




