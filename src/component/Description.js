import styled from "styled-components/native";

const Description = styled.Text`
    font-family: Product Sans Regular;
    font-size: 20px;
    color: ${props => props.color ? props.color : props.theme.text};
    text-align: ${props => props.align ? props.align : "left"};
`;

export default Description;