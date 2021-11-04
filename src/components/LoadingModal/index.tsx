import React from "react";
import { Translucent, Circle, Wrapper, Modal } from "./styled";
import './animations.css'
import { useSelector } from "react-redux";

const Loading = () => {
  //@ts-ignore
  const isLoading  = useSelector(state => state.loading.isLoading);

  return (
    <Wrapper style={{display:isLoading?'flex':'none'}}>
      <Translucent />
        <Modal className={`grow`}>
          <Circle className="rotate" />
        </Modal>
    </Wrapper>
  );
};

export default Loading;
