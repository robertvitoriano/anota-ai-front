import React from "react";
import { Translucent, Circle, Wrapper, Modal } from "./styled";
import './animations.css'

interface IProps {
  show:boolean

}

const Loading = ({show, ...rest}:IProps) => {

  return (
    <Wrapper style={{display:show?'flex':'none'}}  {...rest}>
      <Translucent />
        <Modal className={`grow`}>
          <Circle className="rotate" />
        </Modal>
    </Wrapper>
  );
};

export default Loading;
