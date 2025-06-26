import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ textColor = 'text-gray-900' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`text-2xl font-bold ${textColor}`}>
        <span className="text-primary-600">Logo</span>Jeez
      </span>
    </Link>
  )
}

export default Logo