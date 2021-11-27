import { useState, useRef, useEffect } from "react";
import { Translucent, Wrapper, Modal, Category, CategoryList, CreateCategoryButton, NewCategoryInput } from "./styled";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "store/modules/auth/reducer";
import { useHistory, useLocation } from "react-router-dom";
import api from "services/api";
interface props {
  isCreatingNote: boolean;
  show: boolean;
}
export default function AddCategoryModal({ isCreatingNote, show }: props) {

  const [categories, setCategories] = useState([]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(show);
  const categoryListRef = useRef<HTMLDivElement>(null);
  const newCategoryInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state: any) => state.auth.token);

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

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async () => {
    const response = await api.get("/categories", {
      headers: {
        Authorization: token || ''
      }
    })
    setCategories(response.data);
  }

  const handleCategoryCreation = async () => {
    if (!newCategory) {
      setIsCreatingCategory(!isCreatingCategory)
    }
  }

  const handleNewCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  const handleNewCategoryCreation = async (e: React.FormEvent<HTMLFormElement>) => {
    Swal.fire({
      title: 'Do You Really Want To Delete This Note ? ',
      text: `You Won't be Able To Undo This !`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
    }).then(async (result) => {
      await api.delete('/notes/',
        {
          headers: {
            authorization: token || ''
          },
        });
      if (result.value) {
        Swal.fire({
          title: "Note Successufully Deleted!",
          text: `You Deleted a Note !`,
          icon: "success",
          confirmButtonText: 'Ok !'
        }).then(() => history.push('/notes'))
      }
    }).catch((error) => {

      console.error(error)

      return Swal.fire(
        'Um erro aconteceu',
        String(error.message),
        'error'
      ).then(() => {
        dispatch(setToken(''));
        history.push('/')
      })

    })

  }

  return (
    <>
      {showModal && <Wrapper onClick={() => setShowModal(false)}>
        <Translucent />
        <Modal >
          <CategoryList ref={categoryListRef}>
            {categories.map(item => <Category>
              Hello World
            </Category>)}
            {isCreatingCategory
              && <Category >
                <NewCategoryInput value={newCategory} onChange={handleNewCategoryInput} placeholder="Type your new category" ref={newCategoryInputRef} />
              </Category>}
          </CategoryList>
          {newCategory ? <CreateCategoryButton onClick={handleCategoryCreation} >&#10003;</CreateCategoryButton> : <CreateCategoryButton onClick={handleCategoryCreation} >+</CreateCategoryButton>}
        </Modal>
      </Wrapper>}
    </>
  );
}