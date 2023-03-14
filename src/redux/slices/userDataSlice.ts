import { createSlice } from '@reduxjs/toolkit'
import { userDataInitialState } from '../../interfaces/reduxInterfaces'

const emptyUserData = {
    total_count: 0,
    incomplete_results: false,
    items: []
}

const initialState: userDataInitialState = {
    userData: emptyUserData
    
}

export const userDataSlice = createSlice({
    name: "userData slice",
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.userData = action.payload
        },

        clearSearchResults: (state) => {
            state.userData = emptyUserData
        }
    }
})

export const {setSearchResults, clearSearchResults} = userDataSlice.actions
export default userDataSlice.reducer