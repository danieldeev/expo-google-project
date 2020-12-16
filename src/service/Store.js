import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage  from "@react-native-community/async-storage";

import rootReducer from "./Reducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let Store = createStore(persistedReducer);
let Persistor = persistStore(Store);

export {
    Store,
    Persistor
}