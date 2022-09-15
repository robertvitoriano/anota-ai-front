import Swal, { SweetAlertOptions } from 'sweetalert2'

interface IBasic extends SweetAlertOptions {
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  title: string;
  text: string;
  force?: boolean;
}

interface IClose extends IBasic {
  close: Function;
}

function closeSwal () {
  Swal.close()
}

const anySwalOpen = () => {
  const classes = document.body.classList
  return classes.contains('swal2-shown')
}

const onClose = ({ icon, title, text, close, force }: IClose) => {
  if (anySwalOpen() && !force) return

  Swal.fire({
    icon,
    title,
    text,
    willClose: () => {
      close()
    }
  })
}

const swal = {
  onClose,
  closeSwal
}

export default swal
