import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import Home from './pages/Home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
      </Route>
    </Routes>
  )
}
