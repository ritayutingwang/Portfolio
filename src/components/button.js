import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 8px 16px;
  cursor: pointer;

  background: ${props => props.props.background || "#FFFFFF"};
  color: ${props => props.props.color || "#4455BB"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "8px"};
  border-color: ${props => props.props.boderColor || "#4455BB"};
  border-width: ${props => props.props.boderWidth || "2px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    background-color: #4455BB;
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`

export default Button
