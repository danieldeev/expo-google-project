import styled from "styled-components/native";

const Text = styled.Text`
    font-family: Product Sans ${props => props.type};
    font-size: ${props => props.size}px;
    color: ${props => props.color ? props.color : props.theme.text};
    margin-left: 10px;
    margin-right: 10px;
`;

export default Text;