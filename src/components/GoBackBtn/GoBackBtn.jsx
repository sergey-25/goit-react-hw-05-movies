import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BtnWrap, Btn } from "./GoBackBtn.styled";

function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();
  const handleClickGoHome = () => history.push("/");
  const handleClickGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <BtnWrap>
      <Btn onClick={handleClickGoHome}>
        <GoHome />
      </Btn>
      <Btn onClick={handleClickGoBack}>
        <FaHandPointLeft />
      </Btn>
    </BtnWrap>
  );
}

export default GoBackBtn;