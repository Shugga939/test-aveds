import { Navigate, Route, Routes } from 'react-router-dom';
import {CONTACTS_ROUTE, PROFILE_ROUTE} from "../../utils/consts"
import ContactsPage from '../../Pages/ContactsPage';
import MainPage from '../../Pages/MainPage';
import ProfilePage from '../../Pages/ProfilePage';
import { useSelector } from 'react-redux';

function AppRoutes () {
  const auth = useSelector(state=>state.user)
 
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      {auth && <Route path={PROFILE_ROUTE} element={<ProfilePage/>} exact/>}
      <Route path={CONTACTS_ROUTE} element={<ContactsPage/>} exact/>
      <Route path='*' element={<Navigate replace to={'/'}/>}/>
    </Routes> 
  )
}

export default AppRoutes;
