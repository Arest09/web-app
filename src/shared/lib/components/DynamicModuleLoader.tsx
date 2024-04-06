import { type ReduxStoreWithManager } from '@/app/provider/StoreProvider'
import { type StateSchemeKey } from '@/app/provider/StoreProvider/config/StateScheme'
import { LoginReducer } from '@/features/AuthByUserName/model/slice/LoginSlice'
import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemeKey]?: Reducer
}

type ReducerListEntry = [StateSchemeKey, Reducer]

interface DynamicModuleLoaderProps {
  children?: React.ReactNode
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export function DynamicModuleLoader(props: DynamicModuleLoaderProps) {
  const { children, reducers, removeAfterUnmount } = props

  const store = useStore() as ReduxStoreWithManager

  const dispatch = useDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@ init ${name} user` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@ destroy ${name} user` })
        })
      }
    }
  }, [])

  return <>{children}</>
}
