import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updatePetDetails} from '../../redux';

class UpdatePetDetails extends Component {
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

    componentDidMount() {
        this.setState({
            name: this.props.seletectedPet.name,
            type: this.props.seletectedPet.type,
            description: this.props.seletectedPet.description,
            skill1: this.props.seletectedPet.skill1,
            skill2: this.props.seletectedPet.skill2,
            skill3: this.props.seletectedPet.skill3,
        })

    }

    handleCahgne = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatePetDetails(this.state, this.props.seletectedPet.id);
        console.log("data submited");
        this.props.history.push(`/pets/${this.props.seletectedPet.id}`)

    }


    render() {
        // console.log(this.state);
        // console.log("UpdatePetDetails props:", this.props);
        
        return(
            <div className="UpdatePetDetails">
            <h3>Edit this pet</h3>
            <Link to='/pets'>Home</Link>
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
                    <input type="submit" className="formButton" value="Edit Pet Details"/>
                    <input type="button" className="formButton" value="Cancel" onClick={() => {this.props.history.push('/pets')}} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    seletectedPet: state.seletectedPet,
})

const mapDispatchToProps = (dispatch) => ({
    updatePetDetails: (pet, id) => dispatch(updatePetDetails(pet, id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (UpdatePetDetails)