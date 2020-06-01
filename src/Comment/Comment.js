import React, { Component } from 'react';

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
    
        }
      }
    
      componentDidMount(){
    
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items:json,
          })
        });
      }
    
      render(){
    
        var {isLoaded, items } = this.state;
    
        if (!isLoaded) {
            return <div>Ładowanie</div>;
        }
        else{
    
    
          return ( 
    
            
            
            <div className="Comment">
              
              
                <ul>
                  {items.map(item =>(
                      <li key={item.id}>
                        PostID: {item.postId} <br />  Id: {item.id} <br />   Tytuł: {item.name} <br /> Email: {item.email} <br />  Treść: {item.body}
                      </li>
                      
    
                  ))};
                      ;
    
                </ul>
                
          </div>
                );
          }
      }
}

export default Comment;