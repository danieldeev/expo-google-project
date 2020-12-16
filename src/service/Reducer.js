import { combineReducers } from "redux";
import { Light, Dark } from "../theme";

let route = {
    route: {
        initial: "GettingStarted"
    }
}

let setTheme = Light;

function config(store = route, action){
    switch(action.type){
        case "WELCOME_NEXT": {
            let update = {
                route: {
                    initial: "Dashboard"
                }
            };
            return(store = update);
        }
        default: {
            return(store);
        }
    }
}

function theme(store = setTheme, action){
    switch(action.type){
        case "SWITCH_LIGHT_THEME": {
            return(store = Light);
        }
        case "SWITCH_DARK_THEME": {
            return(store = Dark);
        }
        default: {
            return(store);
        }
    }
}

export default combineReducers({
    config,
    theme
});