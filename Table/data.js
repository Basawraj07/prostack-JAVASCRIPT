


let employees = [{eid:100,ename:"Basawraj",esal:25000},
                 {eid:101,ename:"felison",esal:22000},
                 {eid:102,ename:"jay",esal:20000},
                    {eid:103,ename:"mihir",esal:100000}]
               

let display_data=()=>{
let rows = ""
for(employee of employees){

    rows = rows + ` <tr>
    <td>${employee.eid}   </td>
    <td>${employee.ename} </td>
    <td>${employee.esal}  </td>
      </tr>`
}    
document.getElementById('tbody_data').innerHTML = rows
}
