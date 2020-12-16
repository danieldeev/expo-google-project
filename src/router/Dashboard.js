import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import {
    Main
} from "../page";

const Container = createStackNavigator();

const Dashboard = ({ config, theme }) => {
    return(
        <Container.Navigator>
            <Container.Screen 
                name="Home"
                component={Main}
                options={{
                    headerShown: false
                }}
            />
        </Container.Navigator>
    );
};

const mapStateToProps = ({ config, theme, ...props }) => ({
    config: config,
    theme: theme,
    ...props
});

export default connect(mapStateToProps, null)(Dashboard);