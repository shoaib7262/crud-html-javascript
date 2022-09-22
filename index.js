let row = 1;
let y = "";
let isUpdate = false;
let rowToUpdate = 0;

const myFunc = ()=>{
    if(isUpdate) {
        const table = document.getElementById("table");
        let title  = document.getElementById("title").value;
        let discription = document.getElementById("discription").value;

        table.rows[rowToUpdate].cells[0].innerHTML = title;
        table.rows[rowToUpdate].cells[1].innerHTML = discription;
        table.rows[rowToUpdate].cells[2].innerHTML = '<i class="fa-regular fa-xmark" id="icon" onclick="deletFunc(this)"></i>';
        table.rows[rowToUpdate].cells[3].innerHTML = `<button onclick="updFunc(this, ${rowToUpdate})">update</button>`
        
        isUpdate = false;
        rowToUpdate = 0;
        clearInputFields();
    } else {
        let title  = document.getElementById("title").value;
        let discription = document.getElementById("discription").value;
        const table = document.getElementById("table");
        const newRow = table.insertRow(row);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
    
        cell1.innerHTML = title;
        cell2.innerHTML = discription;
        cell3.innerHTML = '<i class="fa-regular fa-xmark" id="icon" onclick="deletFunc(this)"></i> ';
        cell4.innerHTML = `<button onclick="updFunc(this, ${row})">update</button>`;
        row++;
    
    
        clearInputFields();
    }
}

const deletFunc = (stud)=>{
    let s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
   
}

const updFunc = (td, row)=>{
    console.log({ td, row })
   y = td.parentNode.parentNode;
   document.getElementById("title").value = y.cells[0].innerHTML;     
   document.getElementById("discription").value = y.cells[1].innerHTML;
   isUpdate = true;
   rowToUpdate = row;
   
}

const clearInputFields = () => {
    document.getElementById("title").value = "";
    document.getElementById("discription").value = "";
}