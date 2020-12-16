import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Store, Persistor } from "./service";

import Router from "./router";

const App = () => {
    const [ isLoaded ] = useFonts({
        "Product Sans Black": require("../assets/ProductSans-Black.ttf"),
        "Product Sans Black Italic": require("../assets/ProductSans-BlackItalic.ttf"),
        "Product Sans Bold": require("../assets/ProductSans-Bold.ttf"),
        "Product Sans Bold Italic": require("../assets/ProductSans-BoldItalic.ttf"),
        "Product Sans Italic": require("../assets/ProductSans-Italic.ttf"),
        "Product Sans Light": require("../assets/ProductSans-Light.ttf"),
        "Product Sans Light Italic": require("../assets/ProductSans-LightItalic.ttf"),
        "Product Sans Medium": require("../assets/ProductSans-Medium.ttf"),
        "Product Sans Medium Italic": require("../assets/ProductSans-MediumItalic.ttf"),
        "Product Sans Regular": require("../assets/ProductSans-Regular.ttf"),
        "Product Sans Thin": require("../assets/ProductSans-Thin.ttf"),
        "Product Sans Thin Italic": require("../assets/ProductSans-ThinItalic.ttf"),
    });
    if(!isLoaded){
        return(<AppLoading />);
    }else{
        return(
            <Provider store={Store} >
                <PersistGate loading={null} persistor={Persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }
}

registerRootComponent(App);