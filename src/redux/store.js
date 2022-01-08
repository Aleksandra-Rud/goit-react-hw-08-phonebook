import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./contacts/contact-reducers";
import authReducer from "./auth/auth-slice";
// import { PureComponent } from "react";
// import contactReduser from "./contact-slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contactPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedContactReducer = persistReducer(
  contactPersistConfig,
  rootReducer
);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: persistedContactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

const persistor = persistStore(store);
const obj = { store, persistor };

export default obj;
