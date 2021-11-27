import { useState } from "react";
import { Translucent, Wrapper, Modal, Category, CategoryList, CreateCategoryButton, NewCategoryInput } from "./styled";

export default function AddCategoryModal() {

  const [isOpen, setIsOpen] = useState(false);
  const [array, setArray] = useState([1, 2, 3, 5, 4, 5, 5, 5, 5, 5, 55]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryCreation = () => {
    if(!newCategory) setIsCreatingCategory(!isCreatingCategory)
  }

  const handleNewCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)


  }

  return (
    <>
      <Wrapper >
        <Translucent />
        <Modal >
          <CategoryList>
            {array.map(item => <Category>
              Hello World
            </Category>)}
            {isCreatingCategory
              && <Category>
                <NewCategoryInput value ={newCategory} onChange = {handleNewCategoryInput} />
              </Category>}
          </CategoryList>
          {newCategory ? <CreateCategoryButton onClick = {handleCategoryCreation} >&#10003;</CreateCategoryButton>: <CreateCategoryButton onClick = {handleCategoryCreation} >+</CreateCategoryButton>}
        </Modal>
      </Wrapper>
    </>
  );
}