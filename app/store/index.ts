// app/store/index.ts
import { configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"

export const store = configureStore({
  reducer: {
    // Your reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
