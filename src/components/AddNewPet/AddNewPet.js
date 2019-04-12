import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNewPet} from '../../redux';

class AddNewPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            description: '',
            skill1: '',
            skill2: '',
            skill3: '',
        }
    }


    handleCahgne = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewPet(this.state);
        console.log("data submitted");
        this.props.history.push('/pets');
    }

    render() {
        // console.log(this.state);
        
        return (
            <div className="AddNewPet">
                <h3>Know of a Pet needing a home?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Pet name:</label><br />
                    <input type="text" name='name' onChange={this.handleCahgne} value={this.state.name} /><br />

                    <label>Pet type:</label><br />
                    <input type="text" name='type' onChange={this.handleCahgne} value={this.state.type} /><br />

                    <label>Description:</label><br />
                    <input type="text" name='description' onChange={this.handleCahgne} value={this.state.description} /><br />

                    <label>Skills</label> <br/>
                    <label className="skillData" >Skill 1:</label>
                    <input type="text" name="skill1" onChange={this.handleCahgne} value={this.state.skill1} /><br/>

                    <label className="skillData" >Skill 2:</label>
                    <input type="text" name="skill2" onChange={this.handleCahgne} value={this.state.skill2} /><br/>

                    <label className="skillData" >Skill 3:</label>
                    <input type="text" name="skill3" onChange={this.handleCahgne} value={this.state.skill3} /><br/>
                    <br/>
                    <input type="submit" className="formButton" value="Add Pet" />
                    <input type="button" className="formButton" value="Cancel" onClick={() => {this.props.history.push('/pets')}} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewPet: (pet) => dispatch(addNewPet(pet),)
})

export default connect(
    null,
    mapDispatchToProps,
) (AddNewPet)