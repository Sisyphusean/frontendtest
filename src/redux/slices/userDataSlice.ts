import { createSlice } from '@reduxjs/toolkit'
import { userDataInitialState } from '../../interfaces/reduxInterfaces'

const initialState: userDataInitialState = {
    userData: []
}

export const userDataSlice = createSlice({
    name: "userData slice",
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.userData = action.payload
        },

        clearSearchResults: (state) => {
            state.userData = []
        }
    }
})

export const {setSearchResults, clearSearchResults} = userDataSlice.actions
export default userDataSlice.reducer