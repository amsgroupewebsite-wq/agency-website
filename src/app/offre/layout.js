// src/app/offre/layout.js
export default function OffreLayout({ children, modal }) {
  return (
    <>
      {/* La liste des offres */}
      {children}

      {/* Le slot modal — null par défaut grâce à default.js */}
      {modal}
    </>
  );
}