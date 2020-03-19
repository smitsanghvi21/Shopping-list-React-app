import React, { Component } from 'react'
import Result from './Result';
import Navbar from './Navbar';
import Jumbotron from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import SearchResult from './SearchResult';


export default class App extends Component {
    constructor(){
    super();
      this.state={
        addedItems:[],
        emailValue:'',
        searchValue:'',
        searchedItems:[],
        selected:false
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.onDelete=this.onDelete.bind(this);
      this.handleToggle=this.handleToggle.bind(this);
      this.handleSearch=this.handleSearch.bind(this);
      this.searchResult=this.searchResult.bind(this);
    }

    
     handleChange(e){
       this.setState({
         emailValue:e.target.value
       })
     }
     handleSubmit(e){
      e.preventDefault();
      let items_copy= this.state.addedItems;
      items_copy.push(this.state.emailValue)
      console.log("item copy"+items_copy)
      this.setState({
        addedItems:items_copy,
        emailValue:''
      })
      console.log(this.state.addedItems)
     }

     handleSearch(e){
       this.setState({
         searchValue:e.target.value
       },()=>{
         this.searchResult(this.state.searchValue)
       })  
     }

     searchResult(searchValue){
       let searchArray=[]
        this.state.addedItems.map(item=>{
         return( (item.includes(searchValue))? searchArray.push(item):'no')})
        this.setState({
          searchedItems:searchArray,
        })
     }
     handleToggle (i) {
      let tmp = this.state.selected;
      
      this.setState({ selected: !tmp });
    
    }

     
     onDelete(id){
      let items=this.state.addedItems
      console.log("On Delete")
      console.log(items[id])
      let newArray=items.filter((i,itemNumber)=>id!==itemNumber)
      this.setState({
        addedItems:newArray
      })
     }
  render() {
    console.log("Search result"+this.state.addedItems.length)
    return (
     <div>
          <Navbar/>
          <Jumbotron>
          <Alert variant="success">
        <Alert.Heading>Enter the things you would like to buy </Alert.Heading>
        </Alert>
        </Jumbotron>
       
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control value={this.state.emailValue} onChange={this.handleChange}type="email" placeholder="Enter item" />
          </Form.Group>
          {(this.state.addedItems.length>0)?
          <Form.Group controlId="formBasicEmail">
            <Form.Control value={this.state.searchValue} onChange={this.handleSearch}type="text" placeholder="Search for an item..." />
          </Form.Group>:''}
          <Button onClick={this.handleSubmit}variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
      {(this.state.searchedItems.length>0)?<SearchResult searched={this.state.searchedItems} item={this.state.addedItems} onDelete={this.onDelete} selected={this.state.selected}handleToggle={this.handleToggle}/>:
        (this.state.addedItems.length>0)?
        <Result item={this.state.addedItems} onDelete={this.onDelete} selected={this.state.selected}handleToggle={this.handleToggle}/>
        :<Alert variant="info">
          Your list is empty
        </Alert>
          }  
      </div>
    )
  }
}
