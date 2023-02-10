import styled from "@emotion/styled";

const Informacion = styled.div` 
color: #FFF;
font-family: 'Lato' ,sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`
const Imagen = styled.img ` 
display: block;
width: 120px;

` 
const Texto = styled.p` 
font-size: 18px;
 span{
    font-weight: 700;
 }
`
const Precio = styled.p` 
font-size: 24px;
 span{
    font-weight: 700;
 }
`
const Resultado = ({ resultado }) => {
  //console.log(resultado)
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Informacion>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}` } alt="Imagen Cripto" />
      <div>
      <Precio>El precio es de : <span>{PRICE}</span></Precio>
      <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
      <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
      <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Ultima Acualizacion:<span>{LASTUPDATE}</span></Texto>
      </div>
      
    </Informacion>
  );
};

export default Resultado;
