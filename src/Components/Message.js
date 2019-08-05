import React from "react";
import ProtoTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({text, color}) => (
  <Container>
    <Text color={color}>
      {text}
    </Text>
  </Container>
);

Message.protoTypes = {
  text: ProtoTypes.string.isRequired,
  color: ProtoTypes.string.isRequired
};

export default Message;
