'use client'

import './header.css'
import Button__Icon from '../button__icon/button_icon'
import Button__Text from '../button__text/button_text'
import Image from 'next/image'
import { useState } from 'react'
import Create from '../create__user/create'

export default function Header () {

const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        console.log('modal')
        setShowModal(!showModal)
        console.log(showModal)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    
    return (
        <header>
            <Image src={'/logos/logo-castaar.svg'} alt={'test'} width={180} height={170}/>
            <Create showModal={showModal} handleCloseModal={handleCloseModal} />
            <div className='nav__icons'>
                <Button__Icon src={'/icons/plus.svg'} alt={'Add a new user'} width={30} height={30} color={`var(--primary)`}  />
                <Button__Text alt={'Add a new user'} width={120} height={30} color={`var(--primary)`} content={'+ Nieuwe klant'} onClick={handleModal} />
            </div>
        </header>
    )
}