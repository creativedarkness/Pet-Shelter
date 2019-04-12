import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {adoptPet} from '../../redux';
import './PetDetails.css';

class PetDetails extends Component {

    handleApoptClick = (event) => {
        event.preventDefault();
        this.props.adoptPet(this.props.seletectedPet.id);
        this.props.history.push('/pets');
    }

    render() {
        console.log("PetDetails props:", this.props);
        return (
            <div className="PetDetails">
            <h3>Detials for {this.props.seletectedPet.name}</h3>
            <Link to='/pets'>Home</Link>
            <br/>
            <table className="detailsTable">
                <tbody>
                    <tr>
                    <th scope="row">Pet Type:</th>
                    <td>{this.props.seletectedPet.type}</td>
                    </tr>
                    <tr>
                    <th scope="row">Description:</th>
                    <td>{this.props.seletectedPet.description}</td>
                    </tr>
                    <tr>
                    <th scope="row">Skills:</th>
                            <td >{this.props.seletectedPet.skill1},</td>
                            <td >{this.props.seletectedPet.skill2},</td>
                            <td >{this.props.seletectedPet.skill3}</td>
                    </tr>
                    <tr>
                    <th scope="row">Likes:</th>
                    <td className="likes">{this.props.seletectedPet.likes}</td>
                    </tr>
                    <tr>
                        <td>
                            <button className="likeButton">Like this pet</button>
                            <button className="adoptButton" onClick={this.handleApoptClick}>Adopt this pet!</button> {/* deletes pet from list */}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    seletectedPet: state.seletectedPet,
})

const mapDispatchToProps = (dispatch) => ({
    adoptPet: (id) => dispatch(adoptPet(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (PetDetails)