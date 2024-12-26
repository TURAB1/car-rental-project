import React, { useContext, useEffect, useState } from 'react'
import { carContext } from './UserContext'
import carData from '../assets/data/carData'
import { Container, Row} from 'reactstrap'
import CarItem from '../UI/CarItem'

const Search = () => {
  const { searchInput } = useContext(carContext)
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    const filteredItems = carData.filter((item) =>
      item.carName.toLowerCase().includes(searchInput.toLowerCase())
    )
    setFilteredUsers(filteredItems)
    //console.log("filteredUsers:" + JSON.stringify(filteredUsers))
  }, [searchInput])

  return (
    <Container className='page-margin'>
      <Row>
        <h1 className='sub-text-color'>Search Results</h1>
      </Row>
      <Row>
        {
          filteredUsers.length > 0 ?
            filteredUsers.map((item, index) => {
              return (
                <CarItem key={index} imgUrl={item.imgUrl} carName={item.carName} price={item.price} id={item.id} />
              )
            })
            :
            <h1>No matching results</h1>
        }
      </Row>
    </Container>
  )
}

export default Search
