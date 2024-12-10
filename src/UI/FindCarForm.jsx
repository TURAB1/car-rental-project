import React,{useState} from "react";
import "../styles/find-car-form.css";

import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const[departureAddress,setDepartureAdress]=useState()
  const [destinationAddress,setDestinationAddress]=useState()
  const [date,setDate] =useState()
  const [time,setTime] =useState()
  const [carType,setcarType]=useState()
  
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" 
          placeholder="From address" 
          required
          value={departureAddress}
          onChange={(e) => setDepartureAdress(e.target.value)
           } />
        </FormGroup>

        <FormGroup className="form__group">
          <input 
          type="text" 
          placeholder="To address" 
          required 
          value={destinationAddress}
          onChange={(e)=>setDestinationAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" 
          placeholder="Journey date"
           required
            value={date}
            onChange={(e)=>setDate(e.target.value)}         
         />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
            value={time}
            onChange={(e)=>{
              setTime(e.target.value)
              console.log(e.target.value)
            }
              
            }
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select 
          value={carType}
          onChange={(e)=>{setcarType(e.targetValue)
            console.log(e.target.value)
          }}>
            <option value="ac">Automatic car</option>
            <option value="non-ac">Manual car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
