import React from 'react'
import MainLayout from '../../layout/MainLayout.jsx'
import HomeProfile from './HomeProfile.jsx'
import MainHomePage from './MainHomePage.jsx'
import ShortTimeData from '../../../../../../backend/shortTimeData.js'

function HomePage() {

    const homeProfileData = {
        image: ShortTimeData.privacyData.profilePhoto,
        userName: ShortTimeData.privacyData.name,
        email: ShortTimeData.privacyData.email,
    }
    const mainHomePageData = {
        firstName: homeProfileData.userName.split(' ')[0],
        balance: ShortTimeData.financeData.mainFinance.balance,
    }

    return (
        <MainLayout>
            <HomeProfile pageData={homeProfileData}/>
            <MainHomePage mainHome={mainHomePageData}/>
        </MainLayout>
    )
}

export default HomePage
