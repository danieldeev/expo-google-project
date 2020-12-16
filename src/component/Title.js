import styled from "styled-components/native";

const Title = styled.Text`
    margin: 10px;
    font-family: Product Sans Bold;
    font-size: ${props => props.size}px;
    color: ${props => props.theme.text};
`;

export default Title;