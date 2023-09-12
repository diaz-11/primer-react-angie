//
//hay dos maneras de exportar componentes
//export default, export comun

import "./header.css"; //vuelve a la carpeta
// para volver a una carpeta atras '../'

export const Header = () => {
  return (
    <>
      <div className="name">
        <h1>roma</h1>
        <nav>
          <a>link 1 </a>
          <a>link 2 </a>
        </nav>
      </div>
    </>
  );
};
