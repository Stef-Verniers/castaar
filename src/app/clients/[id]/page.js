import './clients.css'
import Header from "@/components/header/header";
import Image from "next/image";
import Button__Text from '@/components/button__text/button_text';
import Form from '@/components/form/form';
import Input from '@/components/input/input';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function ClientPage({ params }) {

    const prisma = new PrismaClient();

    // Make sure to get the id from the params
    const { id } = params;

    // We query our database to get the client with the id from the url
    const client = await prisma.clients.findUnique({
        where: {
            id: id
        }
    });

    // If the client does not exist, we redirect the user to the home page
    if (!client) {
        redirect('/');
    }

    // Destructure the contact from the client object
    const { contact } = client;

    // Make the form editable
    const handleEditClick = () => {
        console.log('edit')
    };

    return (
        <>
        <Header />
        <main>
            <a href='/'>Ga terug naar het overzicht</a>
            <section id="client">
                <div className='Client__logo' style={{width: '100px', height: '100px'}}>
                    <Image src={client.logo} alt={'test'} sizes='100vw' objectFit='cover' fill />
                </div>
                <div className="Client__content">
                    <span className="Client__title">{client.name}</span>
                    <span className="Client__id">{client.id}</span>
                </div>   
            </section>
            <section id="actions">
                {client.active ? (
                    <>
                        <Button__Text color={'var(--edit)'} width={'230px'} height={'40px'} content={'Wijzigen'} />
                        <Button__Text color={'var(--suspend)'} width={'230px'} height={'40px'} content={'Opschorten'}  />
                    </>
                    ) : (
                    <>
                        <span>Deze klant is niet meer actief bij ons</span>
                    </>
                )}
            </section>
            <section id="panels">
                <Form >
                    <Input value={client.firstname} label={'Voornaam contactpersoon'} disabled />
                    <Input value={client.lastname} label={'Achternaam contactpersoon'} disabled  />
                    <Input value={client.email} label={'E-mailadres contactpersoon'} disabled />
                    <Input value={client.address} label={'Adres'} disabled />
                    <Input value={client.city} label={'Stad'} disabled />
                    <Input value={client.zip} label={'Postcode'} disabled />
                    <Input value={client.country} label={'Land'} disabled />
                    <Input value={client.phone} label={'Telefoonnummer'} disabled />
                    <Input value={client.phone} label={'Gsm-nummer contactpersoon'} disabled />
                    <Input value={client.tax} label={'BTW-nummer'} disabled />
                </Form>
            </section>
        </main>
        </>
    )
}

