import React from "react";
import {
    Layout,
    Center,
    Title,
    Description,
    Logo,
    FixButton,
    Text
} from "../component";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";

const Welcome = ({ navigation, config, theme, next }) => {

    const handleNext = () => {
        next();
        navigation.navigate("Dashboard");
    }

    return(
        <Layout theme={theme} >
            <Center theme={theme} >
                <Logo source={require("../../assets/image/google.png")} />
                <Title theme={theme} size={22} >
                    Seja muito bem vindo(a)
                </Title>
                <Description theme={theme} color="gray" align="center" >
                    Você está usando o template Google para React Native
                </Description>
            </Center>
            <FixButton theme={theme} onPress={handleNext} >
                <Text color="#FFF" size={22} type="Regular" >
                    Avançar
                </Text>
                <MaterialIcons name="arrow-forward" color="white" size={32} />
            </FixButton>
            <StatusBar style={theme.statusBar} backgroundColor={theme.primary} />
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
        next: () => dispatch({
            type:"WELCOME_NEXT",
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);