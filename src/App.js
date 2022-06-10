
import './App.css';
import {useState}from "react";
import Axios from 'axios'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function App() {
  const[name,setName]=useState("");
  const[age,setAge]=useState(0);
  const[country,setCountry]=useState("");
  const[Position,setPosition]=useState("");
  const[AnnualIncome,setAnnualIncome]=useState(0);
  const[employeelist,setEmployeelist]=useState([]);
   const addemployee=()=>{
   
     Axios.post("http://localhost:4000/create",{name:name,age:age,country:country,Position:Position,AnnualIncome:AnnualIncome}).then(()=>{
      console.log("sucesss")
     })
   }
 const getEmployees=()=>{
   Axios.get("http://localhost:4000/employees").then((response)=>{
    
     setEmployeelist(response.data)
     console.log("response",employeelist)
   })
 }
  return (
    <div style={{display:""}} className="App">
      <div className='information'>
      <label>Name:</label>
   <input type="text" placeholder="enter your name" onChange={(event)=>{setName(event.target.value) }} /><br/>
   <label>Age:</label>
   <input type="text" placeholder="enter your Age" onChange={(event)=>{ setAge(event.target.value)}} /><br/>
   <label>Country:</label>
   <input type="text" placeholder="enter your Country" onChange={(event)=>{setCountry(event.target.value)}}/><br/>
   <label>Position:</label>
   <input type="text" placeholder="enter your Position" onChange={(event)=>{setPosition(event.target.value)}}/><br/>
   <label>Annual income</label>
   <input type="text" placeholder="enter your Annual income" onChange={(event)=>{setAnnualIncome(event.target.value)}} /><br/>
   <Button variant='contained' onClick={addemployee}>Add</Button>
   
   <Button variant='contained' onClick={getEmployees}>show Employees</Button><br/>
   <div className=''>

 
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {employeelist.map((x, index) => (
          <Grid item xs={2} sm={4} md={6} key={index}>
            <Item   sx={{background:"lightblue"}}> <h3> Name:  {x.name} </h3>
            <h2>Age:{x.age}</h2>
            <h2>Country:{x.Country}</h2>
            <h2>Position:{x.Position}</h2>
            <h2>AnnualIncome:{x.AnnualIncome}</h2>
              </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
     
       
    
     </div>
    </div>
    </div>
  );
}

export default App;
