import styled from "styled-components/native";

const FixButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    background-color: ${props => props.theme.primary};
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px;
`;

export default FixButton;