import {
  Wrapper,
  PlusSign
} from './styles';

interface props {
  onClick: () => void;
}

export default function AddCategoryButton(props: props) {

  return (
    <>
      <Wrapper {...props}>
        <PlusSign />
        Add Category
      </Wrapper>
    </>
  )
}