import "./home.css";
import Header from "@/components/header/header";
import Input from "@/components/input/input";
import Card from "@/components/card/card";
import { PrismaClient } from "@prisma/client";

export default async function Home() {

  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();

  return (
      <>
        <Header />
        <main>
            <Input placeholder={'🔍 Zoek voor klant, nummer, ...'} />
            {clients.length === 0 ? (
            <div className="no__card">
                <p>Geen klanten gevonden</p>
            </div>
            ) : (
            <div className="card__container">
                {clients.map((client) => (
                <Card 
                  url={`/clients/${client.id}`}
                  key={client.id}
                  src={client.logo}  
                  title={client.name}
                  address={client.address}
                  phone={client.phone}
                />
                ))}
            </div>
            )}
        </main>
      </>
  )

}

