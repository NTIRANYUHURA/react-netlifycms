import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TarifData } from '../components/TarifData';
import 'bootstrap/dist/css/bootstrap.min.css';


const Tarif = () => {

  return (
    <>
  
    <Container>
      <Row>
        <div className = "">

        {TarifData.map((item)=> {
          const {id, Title, Description, Price} = item;
          return(

            <div className = "tarif">

            <div className = " " key = {id}>
              <h3>{Title}</h3>
              <p>{Description}</p>
              <p>{Price}</p>
            </div>

            </div>

            )
        })

        }
        </div>
      </Row>
    </Container>
    </>
  )
}

export default Tarif