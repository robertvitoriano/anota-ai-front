import { useState, useRef, useEffect } from "react";
import { Translucent, Wrapper, Modal, Category, CategoryList, CreateCategoryButton, NewCategoryInput, SelectCategoryButton } from "./styled";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "store/modules/loading/reducer";
import { setToken } from "store/modules/auth/reducer";
import { useHistory, useLocation } from "react-router-dom";
import api from "services/api";
interface props {
  isCreating: boolean;
  show: boolean;
  onHide: () => void;
}
export default function AddCategoryModal({ isCreating, show, onHide }: props) {

  const [categories, setCategories] = useState([]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(isCreating);
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(show);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
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
    dispatch(setIsLoading(true));
    const response = await api.get("/categories", {
      headers: {
        Authorization: token || ''
      }
    })
    setCategories(response.data);
    dispatch(setIsLoading(false));
  }

  const handleCategoryCreation = async () => {
    if (!newCategory) {
      setIsCreatingCategory(!isCreatingCategory)
    } else {
      createNewCategory();
    }
  }

  const handleNewCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  const createNewCategory = async () => {
    Swal.fire({
      title: 'Create category ? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
    }).then(async (result) => {
      await api.post('/categories/',
        {
          name: newCategory
        },
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
        }).then(async() => {
           await fetchCategories()
            setNewCategory("");
            setIsCreatingCategory(false)
          })
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

  const hide = () => {
    setShowModal(false);
    onHide();
  }
  const handleCategorySelection = (categoryId: string) => {
    if (categoryId !== selectedCategoryId) {
      setSelectedCategoryId(categoryId);
    }
    else {
      setSelectedCategoryId('');

    }

  }

  return (
    <>
      {showModal && <Wrapper >
        <Translucent onClick={hide} />
        <Modal >
          <CategoryList ref={categoryListRef}>
            {categories.map(({ name, _id }) =>
              <Category isSelected={_id === selectedCategoryId} onClick={() => handleCategorySelection(_id)}>
                {name}
              </Category>)}
            {isCreatingCategory
              && <Category >
                <NewCategoryInput value={newCategory} onChange={handleNewCategoryInput} placeholder="Type your new category" ref={newCategoryInputRef} />
              </Category>}
          </CategoryList>
          {selectedCategoryId?<SelectCategoryButton >Select Category</SelectCategoryButton>:''}
          {newCategory ? <CreateCategoryButton onClick={handleCategoryCreation} >&#10003;</CreateCategoryButton> : <CreateCategoryButton onClick={handleCategoryCreation} >+</CreateCategoryButton>}
        </Modal>
      </Wrapper>}
    </>
  );
}