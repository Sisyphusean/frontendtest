import { createSlice } from '@reduxjs/toolkit'

export const routeGuardSlice = createSlice({
    name: "Route Guard Slice",
    initialState: {
        searched: false
    },
    reducers: {
        setSearchedGuardToTrue: (state) => {
            state.searched= true
        },

        resetSearchGuard: (state) => {
            state.searched = false
        }
    }
})

export const {setSearchedGuardToTrue, resetSearchGuard} = routeGuardSlice.actions
export default routeGuardSlice.reducer