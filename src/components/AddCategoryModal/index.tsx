import { useState, useRef, useEffect } from "react";
import {
  Translucent,
  Wrapper,
  Modal,
  Category,
  CategoryList,
  CreateCategoryButton,
  NewCategoryInput,
  SelectCategoryButton,
  DeleteCategoryButton,
  CategoryButtonContainer
} from "./styled";
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
  onSelect: (selectedCategoryId: string, selectedCategoryName: string) => void;
  mobile?: boolean;
}
export default function AddCategoryModal({ isCreating, show, onHide, onSelect, mobile }: props) {

  const [categories, setCategories] = useState([]);
  const [isCreatingCategory, setIsCreatingCategory] = useState(isCreating);
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(show);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [hoveredCategoryId, setHoveredCategoryId] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
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
    if(!isCreatingCategory) setSelectedCategoryId("");
    if (!newCategory) {
      setIsCreatingCategory(!isCreatingCategory)
    } else {
     await createNewCategory();
    }
  }

  const handleNewCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  const createNewCategory = async () => {
    return new Promise<void>((resolve, reject) => {
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
            title: "Note Successufully Created!",
            text: `You Created a Category !`,
            icon: "success",
            confirmButtonText: 'Ok !'
          }).then(async () => {
            await fetchCategories()
            setNewCategory("");
            setIsCreatingCategory(false)
            resolve()
          })
        }
      }).catch((error) => {
          reject(error)
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
    }) 

  }

  const handleCategoryDeletion = () => {
    Swal.fire({
      title: 'Delete category ? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
    }).then(async (result) => {
      if (result.value) {
        await api.delete(`/categories/${hoveredCategoryId}/remove`, {
          headers: {
            authorization: token || ''
          }
        })
        if (result.value) {
          Swal.fire({
            title: "Category Successufully Deleted!",
            text: `You Deleted a Category !`,
            icon: "success",
            confirmButtonText: 'Ok !'
          }).then(async () => {
            await fetchCategories()
          })
        }
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
  const handleCategorySelection = (categoryId: string, name: string) => {
    if (categoryId !== selectedCategoryId) {
      setSelectedCategoryId(categoryId);
      setSelectedCategoryName(name);
      setIsCreatingCategory(false);
    }
    else {
      setSelectedCategoryId('');
      setSelectedCategoryName('');
    }
  }

  const handleCategorySelectionConfirmation = () => {
    onSelect(selectedCategoryId, selectedCategoryName);
    hide();
  }

  return (
    <>
      {showModal && <Wrapper >
        <Translucent onClick={hide} />
        <Modal mobile >
          <CategoryList ref={categoryListRef}>
            {categories.map(({ name, _id }) =>
              <Category isSelected={_id === selectedCategoryId}
                onClick={() => handleCategorySelection(_id, name)}
                onMouseEnter={() => setHoveredCategoryId(_id)}
                onMouseLeave={() => setHoveredCategoryId("")}
              >
                {name}
                {_id === hoveredCategoryId && <DeleteCategoryButton onClick={handleCategoryDeletion}/>}
              </Category>)}
            {isCreatingCategory
              && <Category >
                <NewCategoryInput value={newCategory} onChange={handleNewCategoryInput} placeholder="Type your new category" ref={newCategoryInputRef} />
              </Category>}
          </CategoryList>
          <CategoryButtonContainer>
          {selectedCategoryId? <SelectCategoryButton  onClick={handleCategorySelectionConfirmation} >Select Category</SelectCategoryButton> : ''}
          </CategoryButtonContainer>
          {newCategory ? <CreateCategoryButton onClick={handleCategoryCreation} >&#10003;</CreateCategoryButton> : <CreateCategoryButton onClick={handleCategoryCreation} >+</CreateCategoryButton>}
        </Modal>
      </Wrapper>}
    </>
  );
}