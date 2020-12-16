import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import GettingStarted from "./GettingStarted";
import Dashboard from "./Dashboard";

const Container = createStackNavigator();

const Router = ({ config, theme }) => {
    return(
        <NavigationContainer>
            <Container.Navigator
                initialRouteName={"GettingStarted"}
            >
                <Container.Screen 
                    name="GettingStarted"
                    component={GettingStarted}
                    options={{
                        headerShown: false
                    }}
                />
                <Container.Screen 
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false
                    }}
                />
            </Container.Navigator>
        </NavigationContainer>
    );
};

const mapStateToProps = ({ config, theme, ...props }) => ({
    config: config,
    theme: theme,
    ...props
});

export default connect(mapStateToProps, null)(Router);