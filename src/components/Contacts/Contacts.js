import React, { Component } from 'react';
import './Contacts.css';
import { connect } from 'react-redux';
import { updateName, addPerson, getPeople} from '../../reducers/base';

class Contacts extends Component{
    render() {
        console.log(this.props)
        return(
            <div className='Contacts'>
                Contacts comp
            </div>
        )
    }
}



let outputActions={
    updateName: updateName,
    addPerson: addPerson,
    getPeople: getPeople
}

function mapStateToProps(state){
    if(!state) return {};

    let {people, name} = state;
    return { //This object gets mashed/merged into this.props
        people: people,
        name: name
      }
}
export default connect(mapStateToProps, outputActions)(Contacts)