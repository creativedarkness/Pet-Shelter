import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { seletectedPet} from '../../redux';
import './PetDisplay.css'

class PetDisplay extends Component {

    handleViewDeails = (pets, id) => {
        this.props.seletectedPet(pets, id);
        this.props.history.push(`/pets/${id}`);
    }

    handleEdit = (pets, id) => {
        this.props.seletectedPet(pets, id);
        this.props.history.push(`/pets/edit/${id}`);
    }
    render() {
        console.log("PetDisplay props", this.props);
        return (
            <div className="PetDisplay">
                <h3>These pets are looking for a home!</h3>
                <Link to='/pets/new'>Add a pet to the shelter</Link>
                <table className="displayTable">
                    <tbody>
                        <tr>
                            <th className="displayData">Name</th>
                            <th className="displayData">Type</th>
                            <th className="displayData">Actions</th>
                        </tr>
                        {this.props.pets.map((pet, index) => {
                            return (
                                <tr className="displayData" key={index}>
                                    <td className="displayData">{pet.name}</td>
                                    <td className="displayData">{pet.type}</td>
                                    <td className="displayData">
                                        <button className='detailsButton' onClick={() => { this.handleViewDeails(this.props.pets, pet.id) }}>Details</button>
                                        <button className='editButton' onClick={() => {this.handleEdit(this.props.pets, pet.id)}}>Edit</button>
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pets: state.pets,
})

const mapDispatchToProps = (dispatch) => ({
    seletectedPet: (pets, id) => dispatch(seletectedPet(pets, id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PetDisplay)