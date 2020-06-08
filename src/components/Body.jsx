import React from "react"
import {Container, Row, Col, Card, Button, CardGroup, DropdownButton, Dropdown, InputGroup, FormControl} from "react-bootstrap"


let bookCategory = ["fantacy", "history", "horror", "romance", "scifi"]

let library = {
  fantacy: require("../data/fantasy.json"),
  history: require("../data/history.json"),
  horror: require("../data/horror.json"),
  romance: require("../data/romance.json"),
  scifi: require("../data/scifi.json")
}
class Body extends React.Component {
  state = {
    libraryBooks: library.fantacy,
    categorySelected: "fantacy"
  }

  handleDropdownChange = (category) => {
    return (
      this.setState({libraryBooks: library[category], categorySelected: category})
      )
  }

  handleSearchQuery = (searchQuery) => {
    
      if (searchQuery) {
        let filteredBooks = library[this.state.categorySelected].filter((book) => {
          return (
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        })
        this.setState({libraryBooks: filteredBooks});
      } else {
        this.setState({libraryBooks: library[this.state.categorySelected] })
      }

    
  }

  render() {
    return (
      <Container>  

          <InputGroup className="mb-3">
            <DropdownButton as={InputGroup.Prepend} id="dropdown-basic-button" title={this.state.categorySelected}>
            {bookCategory.map((category) => {
              return (
                <Dropdown.Item href="#/action-1" onClick={() => this.handleDropdownChange(category)}>{category}</Dropdown.Item>
              )
            })}

            </DropdownButton>
            <FormControl
              placeholder="Search books by title"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={e => this.handleSearchQuery(e.target.value)}
            />



          </InputGroup>
        
        <Row>
        {this.state.libraryBooks.map((books) => {
              return ( 
                <Col xs={3} className="my-4">
                    <CardGroup>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={books.img} />
                        <Card.Body>
                          <Card.Title>{books.title}</Card.Title>
                          <Card.Text>
                            ${books.price}
                          </Card.Text>
                          <Button variant="primary">Read Now</Button>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Col>
                    )
                  })}
            
        </Row>
      </Container>
    )
  }
}

export default Body