import {useHistory} from  'react-router-dom';
import {Wrapper, BackButtonIcon} from './styles'
import backIcon from 'assets/left-arrow.png'

export default function BackButton() {

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return(
    <Wrapper onClick = {goBack}>
      <BackButtonIcon src = {backIcon} />
    </Wrapper>
  )
}