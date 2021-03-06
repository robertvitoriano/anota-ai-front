import {
  Wrapper,
  PlusSign
} from './styles';

interface props {
  onClick: () => void;
  selectedCategoryName?: string;
}

export default function AddCategoryButton({  selectedCategoryName, ...rest }: props) {

  return (
    <>
      <Wrapper {...rest} selectedCategoryName={String(selectedCategoryName)}>
        {!selectedCategoryName?<PlusSign />:''}
        {!selectedCategoryName?'Add Category':''}
        {selectedCategoryName}
      </Wrapper>
    </>
  )
}