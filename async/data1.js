let employees = [
    {eid:100,ename:'basu',esal:22000},
    {eid:101,ename:'feli',esal:21999}
]

let createEmployee=(emp)=>{
    setTimeout(()=>{ 
        employees.push(emp)
  
    },4000)
}

let getEmployee=()=>{
    setTimeout(()=>{ 
      let rows = ""
      for(emp of employees){

          rows = rows +`<tr>  
          <td>${emp.eid}</td>
          <td>${emp.ename}</td>
          <td>${emp.esal}</td>
          
          `
        }
        document.getElementById('tbody_Data').innerHTML = rows
    },2000)
}
createEmployee({eid:103,ename:"Priya", esal:65000})
getEmployee()