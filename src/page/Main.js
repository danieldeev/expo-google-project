import React, { useState } from "react";
import {
    Layout,
    Center,
    Title,
    Description,
    Switch
} from "../component";
import { connect } from "react-redux";
import { StatusBar } from "expo-status-bar";

const Main = ({ navigation, theme, switchToLight, switchToDark }) => {

    const [changeTheme, setChangeTheme] = useState(false);

    const switchTheme = () => {
        changeTheme ? setChangeTheme(false) : setChangeTheme(true);
        if(!changeTheme){
            switchToDark();
        }else{
            switchToLight();
        }
    }

    return(
        <Layout theme={theme}>
            <Center theme={theme}>
                <Title theme={theme} size={22}>
                    Dashboard
                </Title>
                <Description theme={theme} color="gray" align="center">
                    Pressione para alterar o tema
                </Description>
                <Switch 
                    theme={theme}   
                    value={changeTheme}
                    onChange={switchTheme}
                    thumbColor={switchTheme ? theme.primary : theme.primary }
                />
            </Center>
            <StatusBar style={theme.statusBar} backgroundColor={theme.background} />
        </Layout>
    );
};

const mapStateToProps = ({ config, theme, ...props }) => ({
    config: config,
    theme: theme,
    ...props
});

const mapDispatchToProps = dispatch => {
    return({
        switchToLight: () => dispatch({
            type:"SWITCH_LIGHT_THEME",
        }),
        switchToDark: () => dispatch({
            type:"SWITCH_DARK_THEME",
        }),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);