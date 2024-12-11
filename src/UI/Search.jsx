import React, { useContext, useEffect,useState } from 'react'
import { carContext } from './UserContext'
import carData from '../assets/data/carData'
import { Container, Row ,Button} from 'reactstrap'
import CarItem from '../UI/CarItem'

const Search = () => {
  const {searchInput}=useContext(carContext)
  const [filteredUsers, setFilteredUsers] = useState()
  const filteredItems = carData.filter((item) =>
    item.carName.toLowerCase().includes(searchInput.toLowerCase())
    );


  
  useEffect(()=>{
    console.log("global value:;"+searchInput)
    setFilteredUsers(filteredItems);
  },[searchInput])


  return (
    <Container className='page-margin'>
      <Row >
        <h1 className='sub-text-color'>Search Results</h1>
        <h1 className='sub-text-color'>{searchInput}</h1>
        
      </Row>
      <Row>

        {
          filteredItems.map((item, index) => {
            return (
              <CarItem imgUrl={item.imgUrl} carName={item.carName} price={item.price} />

            )
          })
        }


      </Row>

    </Container>
  )
}

export default Search

