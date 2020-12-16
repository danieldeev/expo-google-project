import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import {
    Welcome
} from "../page";

const Container = createStackNavigator();

const GettingStarted = ({ config, theme }) => {
    return(
        <Container.Navigator>
            <Container.Screen 
                name="Main"
                component={Welcome}
                options={{
                    title: "Bem vindo(a)",
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: "Product Sans Medium"
                    },
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: theme.primary
                    }
                }}
            />
        </Container.Navigator>
    );
}

const mapStateToProps = ({ config, theme, ...props }) => ({
    config: config,
    theme: theme,
    ...props
});

export default connect(mapStateToProps, null)(GettingStarted);