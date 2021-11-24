import { useState } from "react";
import { Translucent, Wrapper, Modal, Category, CategoryList} from "./styled";

export default function AddCategoryModal() {

  const [isOpen, setIsOpen] = useState(false);
  const [array, setArray] = useState([1, 2, 3, 5, 4, 5, 5, 5, 5, 5, 55]);
  return (
    <>
      <Wrapper >
        <Translucent />
        <Modal >
          <CategoryList>
              {array.map(item => <Category>
                Hello World
              </Category>)}
          </CategoryList>
        </Modal>
      </Wrapper>
    </>
  );
}