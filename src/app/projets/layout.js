// src/app/projets/layout.js
export default function ProjetsLayout({ children, modal }) {
  return (
    <>
      {/* La liste des projets */}
      {children}

      {/* Le slot modal — null par défaut grâce à default.js */}
      {modal}
    </>
  );
}