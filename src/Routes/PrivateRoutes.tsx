import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Usermanagement from '../Components/Usermanagement'
import Gstusermanagement from '../Components/Gstusermanagement'
import Billinginvoice from '../Components/Billinginvoice'
import Suspendaccounts from '../Components/Suspendaccounts'
import Emergencymanagement from '../Components/Emergencymanagement'
import Monitercompaign from '../Components/Monitercompaign'
import Verticalnavigation from '../Components/Verticalnavigation'
import Gstreportsmanagement from '../Components/Gstreportsmanagement'
import Userreports from '../Components/Userreports'
import Profileinformation from '../Components/Profileinformation'
import Header from '../Components/Header'
import Admanagement from '../Components/Admanagement'
import Userform from '../Components/Userform'
import './PrivateRoutes.css'
const PrivateRoutes = () => {
    return (
        <div className='grid-container'>
            <div className='sidebar'>
                <Verticalnavigation />
            </div>
            <div style={{position:'relative'}}>
                <Header/>
                <div style={{padding:'10px'}}>
                <Routes>
                    <Route path='user-management' element={<Usermanagement />} />
                    <Route path='user-reports' element={<Userreports />} />
                    <Route path='suspend-accounts' element={<Suspendaccounts />} />
                    <Route path='gst-users' element={<Gstusermanagement />} />
                    <Route path='gst-reports' element={<Gstreportsmanagement />} />
                    <Route path='billing' element={<Billinginvoice />} />
                    <Route path='emergency' element={<Emergencymanagement />} />
                    <Route path='moniter-compaign' element={<Monitercompaign />} />
                    <Route path='vertical' element={<Verticalnavigation />} />
                    <Route path='user-management/profile-info/:id' element={<Profileinformation />} /> 
                    <Route path='admgmt' element={<Admanagement />} />
                    <Route path='admgmt/userform' element={<Userform />} />         
                </Routes>
                </div>
            </div>
        </div>
    )

}
export default PrivateRoutes
