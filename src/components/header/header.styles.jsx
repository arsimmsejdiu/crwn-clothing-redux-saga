import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 15px;
`;

export const OptionLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-bottom: 6px solid rgb(112, 55, 55);
    overflow: hidden;
  }
`;
