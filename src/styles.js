import styled from "styled-components";

export const Title = styled.h1`
    color: #f00;
`;

export const StyledButton = styled.button`
  min-width: 9.375rem;
  border: none;
  border-radius: .1875rem;
  font-size: 18px;
  margin-left: .625rem;
  padding: 7px 10px;
  background-color: #007DC5;
  color: white !important;
  text-decoration: none !important; 
  text-decoration-color: white;
`;

export const Nav = styled.div`
  background-color: #FFD400;
  padding: 0px;
  position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
    text-align: left;
    overflow: hidden; 
    display: inline-flex;

`;

export const NavHeader = styled.div`
  padding: 26px 20px;
  width: 100%;
  display: block;
  align-items: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  width:20%;
  border: solid 1px black;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  margin-left: 50px;
  color: #999;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  background: #fafafa;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

`;

export const Results = styled.div`
padding-left: 1.25rem;
`;

export const Post = styled.div`
padding-left: 1.25rem;
font-size: 28px;
font-weight: bold;
`;
