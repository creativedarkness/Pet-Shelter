import { createStore } from 'redux';

//actions
export const seletectedPet = (pets, id) => ({
    type: 'SELECTED_PET',
    pets,
    id,
})
export const addNewPet = (pet) => ({
    type: 'ADD_NEW_PET',
    pet
})
export const updatePetDetails = (pet, petId) => ({
    type: 'UPDATE_PET_DETAILS',
    pet,
    petId,
})
export const adoptPet = (petId) => ({
    type: 'ADOPT_PET',
    petId
})

//reducers
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_PET':
            // console.log("SELECTED_PET action.pets:", action.pets);
            // console.log("SELECTED_PET action.id:", action.id);
            let seletectedPetTemp = null;
            state.pets.map(pet => {
                if (pet.id === action.id) {
                    console.log("pet found", pet);
                    seletectedPetTemp = pet;
                }
                return pet
            })
            return {
                ...state,
                seletectedPet: seletectedPetTemp,
            }

        case 'ADD_NEW_PET':
            console.log('ADD_NEW_PET action.pet', action.pet);
            id++;
            return {
                ...state,
                pets: [
                    ...state.pets,
                    {
                        id,
                        name: action.pet.name,
                        type: action.pet.type,
                        description: action.pet.description,
                        skill1: action.pet.skill1,
                        skill2: action.pet.skill2,
                        skill3: action.pet.skill3,
                    }
                ]
            }

        case 'UPDATE_PET_DETAILS':
            console.log("UPDATE_PET_DETAILS action.pet", action.pet);
            console.log("UPDATE_PET_DETAILS action.petId", action.petId);
            // let updatedDetails;
            // state.pets.map(pet => {
            //     if (pet.id === action.petId) {
            //         // console.log("pet found", pet);
            //         updatedDetails = action.pet;
            //     }
            // })
            // return{
            //     ...state,
            //     pets: [
            //         {...state.pets, ...action.pet, }
            //     ],
            //     seletectedPet: updatedDetails,
            // }

            return {
                ...state,
                pets: [...state.pets.map(pet => {
                    if (pet.id === action.petId) {
                        console.log("pet found:", pet)
                        return { ...pet, ...action.pet }
                    } else {
                        return {...pet};
                    }
                })],
                seletectedPet: { ...action.pet }
            }

        case 'ADOPT_PET':
            console.log("ADOPT_PET action.petid", action.petId);
            let petTemp = [];
            state.pets.map(pet => {
                // console.log("mapped pets", pet);
                if (pet.id !== action.petId) {
                    console.log("Pet adopted", pet);
                    petTemp.push(pet);
                }
                return pet
            })
            return {
                ...state,
                pets: petTemp,
            }

        default:
            return state
    }
}


let id = 3;
const initialState = {
    pets: [
        { id: 1, name: 'Jenks', type: 'cat', description: 'tuxedo', likes: 0, skill1: 'cuddle-bug', skill2: 'excellent mouser', skill3: null, },
        { id: 2, name: 'Dexter', type: 'cat', description: 'ginger', likes: 0, skill1: 'excellent mouser', skill2: "loves to eat", skill3: null, },
        { id: 3, name: 'Archie', type: 'dog', description: 'greyhound', likes: 0, skill1: 'loves to play', skill2: 'loves to run', skill3: 'couch potato', },
    ],
    seletectedPet: null,
}

export function configureStore(initialState = initialState) {
    { }
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();