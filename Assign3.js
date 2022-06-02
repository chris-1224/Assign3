// fetch("Assign3.json")
// .then(function(res){
//     return res.json();
// })
// .then(function(det){
//     let data = document.querySelector("#content1");
//     let displaydata=" ";
//     for(let i of det){
//         displaydata+=`<div class= "card2">
//         <div><img class = "img-1" src ="${i.emp_dp}"></div>
//         <div>
//         <h4 class="name">${i.employee_name}</h4>
//         <div class = "desg">${i.employee_designation}</div>
//         <p class="details">${i.employee_details}</p></div>
//         </div>`;}
//         data.innerHTML = displaydata;
//     })



//_______________ ALTERNATE WAY OF FETCHING JSON DATA TO CARDS _______________________________________________


$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});


function loadProducts(data){

var data1 = document.createElement('div');
   data1.innerHTML =  '<div class="card2">' +
            '<div class="rect1">'+'<img src="'+ data.emp_dp +'" class="rect_img" />'+
            '</div>'+'<div class="subrect">'+'<p class="subrect_p1">'+ data.employee_name +'</p>'+
            '<span>'+ data.employee_designation +'</span>'+
            '<p class="subrect_p2">'+ data.employee_details +'</p>'+
            '</div>'+' </div>'+'<div class="hoverdis">'+data.htext+'<div class="bright">'+
           '<button class="btn btn2">'+data.view+'</button>'+'</div>'+'</div>'+'</div>' ;;
document.getElementById("content1").appendChild(data1);

}