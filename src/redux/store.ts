import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from "./slices/userDataSlice"
import routeGuardReducer from './slices/routeGuard'

export const store = configureStore({
    reducer: {
        userData: userDataReducer,
        routeGuard: routeGuardReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch