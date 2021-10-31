import {Wrapper, LogoutIcon}  from './styles'
import Swal from 'sweetalert2'
import logoutIcon from 'assets/logout.png'
const LogoutButton = () =>{

  const onLogout = () => {
    Swal.fire({
      title: 'Do you really want to logout ? ', 
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',  // blue     
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('token')
        window.location.href = '/'
      }
    })

  }
  return <Wrapper onClick = {onLogout}>
    <LogoutIcon src = {logoutIcon} />
  </Wrapper>

}

export default LogoutButton