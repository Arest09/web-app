/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { combineReducers, type ReducersMapObject, type Reducer, type UnknownAction } from '@reduxjs/toolkit'
import { type StateSchemeKey, type StateScheme, type ReducerManager } from './StateScheme'

// createReducerManager нужен для динамической подгрузки слайсов(code-splitting)

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemeKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateScheme, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }

        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemeKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemeKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    },
  }
}

// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer,
// }

// // export function configureStore(initialState) {
// //   const reducerManager = createReducerManager(staticReducers)

// //   // Create a store with the root reducer function being the one exposed by the manager.
// //   const store = createStore(reducerManager.reduce, initialState)

// //   // Optional: Put the reducer manager on the store so it is easily accessible
// //   store.reducerManager = reducerManager
// // }
