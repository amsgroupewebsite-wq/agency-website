import { notFound } from "next/navigation";

import InphaMedis from "../../components/clients/Inpha-Medis";
import Capilos from "../../components/clients/Capilos";
import Cosider from "../../components/clients/Cosider";
import AmsGroupe from "../../components/clients/AmsGroupe";

export default async function ClientPage({ params }) {
  // ✅ await params si c'est une promise
  const { client } = await params;

  const clientComponents = {
    "inpha-medis": InphaMedis,
    "capilos": Capilos,
    "cosider": Cosider,
    "ams-groupe": AmsGroupe,
  };

  const ClientComponent = clientComponents[client];

  if (!ClientComponent) {
    notFound();
  }

  return <ClientComponent />;
}
