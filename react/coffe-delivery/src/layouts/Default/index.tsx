import { Outlet } from 'react-router-dom'
import { Header } from '../../containers/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
