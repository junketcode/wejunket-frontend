import React from 'react'
import Link from 'next/link'
import './ChooseAnother.scss'


const ChooseAnother = () => {
  return (
    <Link href="/junkets">
      <div className="choose-another pl-4 pr-4">
        <img src={require('../../../public/img/pages/junket/choose_another.png')} alt="choose another" />
        <span>CHOOSE ANOTHER ADVENTURE</span>
      </div>
    </Link>
  )
}

export default ChooseAnother 