import {
  Wrapper,
  PlusSign
} from './styles';

interface props {
  onClick: () => void;
  text?: string;
}

export default function AddCategoryButton({  text, ...rest }: props) {

  return (
    <>
      <Wrapper {...rest}>
        {!text?<PlusSign />:''}
        {!text?'Add Category':''}
        {text}
      </Wrapper>
    </>
  )
}