import './create.css';
import { useState } from 'react';

export default function Create ({ showModal, handleCloseModal }) {

    console.log(showModal);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('createUser');
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            firstname: formData.get('voornaam'),
            lastname: formData.get('achternaam'),
            email: formData.get('email'),
            address: formData.get('adres'),
            city: formData.get('stad'),
            zip: formData.get('postcode'),
            country: formData.get('land'),
            phone: formData.get('telefoonnummer'),
            mobile: formData.get('gsm'),
            tax: formData.get('btw'),
            logo: formData.get('logo')
        };
    
        try {
            const createdUser = await prisma.user.create({
                data: {
                    name: data.name,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    address: data.address,
                    city: data.city,
                    zip: data.zip,
                    country: data.country,
                    phone: data.phone,
                    mobile: data.mobile,
                    tax: data.tax,
                    logo: data.logo
                }
            });
            console.log('User created:', createdUser);
            alert('User created');
        } catch (error) {
            console.error('Error creating user:', error);
            alert('User not created');
        }
    }

    return(
        <div className={ showModal ? 'modal' : 'closed' }>
            <h1>Voeg een nieuwe klant toe</h1>
            <form id='createUser'>
                <div className='modal__div'>
                    <label >Naam bedrijf</label>
                    <input name='name' />
                </div>
                <div className='modal__div'>
                    <label >Adres</label>
                    <input name='adres' />
                </div>
                <div className='modal__div'>
                    <label >Stad</label>
                    <input name='stad' />
                </div>
                <div className='modal__div'>
                    <label >Postcode</label>
                    <input name='postcode' />
                </div>
                <div className='modal__div'>
                    <label >Land</label>
                    <input name='land' />
                </div>
                <div className='modal__div'>
                    <label >Telefoonnummer</label>
                    <input name='telefoonnummer' />
                </div>
                <div className='modal__div'>
                    <label >BTW-nummer</label>
                    <input name='btw' />
                </div>
                <div className='modal__div'>
                    <label >Logo</label>
                    <input name='logo' />
                </div>
                <div className='modal__div contact'>
                    <label >Voornaam contactpersoon</label>
                    <input name='voornaam' />
                </div>
                <div className='modal__div'>
                    <label >Achternaam contactpersoon</label>
                    <input name='achternaam' />
                </div>
                <div className='modal__div'>
                    <label >E-mailadres contactpersoon</label>
                    <input name='email' />
                </div>
                <div className='modal__div'>
                    <label >Gsm-nummer contactpersoon</label>
                    <input name='gsm' />
                </div>
            </form>
                <button className='submit'>Toevoegen</button>
                <button className='submit close' onClick={handleCloseModal}>Sluit venster</button>
        </div>
    )
}

