import React from 'react';
import { Component } from 'react';

import ChildComponent from './ChildComponent';
class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent.parentName = this.greetParent.parentName.bind(this);
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }

    render(){
    return(
        <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    )
    }
    
}
export default ParentComponent;