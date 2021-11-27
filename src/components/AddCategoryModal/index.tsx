import { useState, useRef, useEffect } from "react";
import { Translucent, Wrapper, Modal, Category, CategoryList, CreateCategoryButton, NewCategoryInput } from "./styled";

export default function AddCategoryModal() {

  const [array, setArray] = useState([1, 2, 3, 5, 4, 5, 5, 5, 5, 5, 55]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const categoryListRef = useRef<HTMLDivElement>(null);
  const newCategoryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCreatingCategory) {
      if (categoryListRef.current) {
        categoryListRef.current.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      if (newCategoryInputRef.current) newCategoryInputRef.current.focus()
    }

  }, [isCreatingCategory])

  const handleCategoryCreation = async () => {
    if (!newCategory) {
      setIsCreatingCategory(!isCreatingCategory)
    }
  }

  const handleNewCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  return (
    <>
      <Wrapper >
        <Translucent />
        <Modal >
          <CategoryList ref={categoryListRef}>
            {array.map(item => <Category>
              Hello World
            </Category>)}
            {isCreatingCategory
              && <Category >
                <NewCategoryInput value={newCategory} onChange={handleNewCategoryInput} placeholder="Type your new category" ref={newCategoryInputRef} />
              </Category>}
          </CategoryList>
          {newCategory ? <CreateCategoryButton onClick={handleCategoryCreation} >&#10003;</CreateCategoryButton> : <CreateCategoryButton onClick={handleCategoryCreation} >+</CreateCategoryButton>}
        </Modal>
      </Wrapper>
    </>
  );
}