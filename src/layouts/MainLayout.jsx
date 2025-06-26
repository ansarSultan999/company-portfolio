import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import CookieConsent from '../components/utils/CookieConsent'

const MainLayout = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent')
    if (!consentGiven) {
      // Show cookie consent after 2 seconds
      const timer = setTimeout(() => {
        setShowCookieConsent(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowCookieConsent(false)
  }

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowCookieConsent(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent 
          onAccept={handleAcceptCookies} 
          onDecline={handleDeclineCookies}
        />
      )}
    </div>
  )
}

export default MainLayout