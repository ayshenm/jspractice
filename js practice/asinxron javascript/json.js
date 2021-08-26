document.querySelector("#ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = function(){
        let list = document.querySelector("#employees");

        if(this.status == 200){
            const employees = JSON.parse(this.responseText);//elemanlari almaq ucun 
            //console.log(this.responseText);
            //console.log(typeof this.responseText);
            //console.log(JSON.parse(this.responseText));//Json arreyi donecek

            employees.forEach(function(employee){
                list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>

                `;


            });

        }
    }




    xhr.send();

}