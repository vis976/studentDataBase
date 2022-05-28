
// function append(){
    let data = JSON.parse(localStorage.getItem("students"));

     let container = document.getElementById("container");
    // container.innerHTML = null;

    data.map(function (el,index){
        let div = document.createElement("div");
        div.setAttribute("class","div")
        let img = document.createElement("img");
        img.src = el.image;
        img.setAttribute("class","image")
        let p = document.createElement("p");
        p.innerText = "Name : " + el.name;
        let course = document.createElement("p");
        course.innerText = "Course : " + el.course;
        let unit = document.createElement("p");
        unit.innerText = "Unit : " + el.unit;
        unit.setAttribute("class","unit")
        let batch = document.createElement("p");
        batch.innerText = "Batch : " + el.batch;
        let btn = document.createElement("button")
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
            remove(el,index);
        });

        div.append(img, p, course, unit, batch, btn);
        container.append(div);
    });  
// }
// append()


function remove(el,index){
    data.splice(index, 1)
    localStorage.setItem("students", JSON.stringify(data))
    window.location.reload();


    // let data = JSON.parse(localStorage.getItem("students")) || [];

    // let newData = data.filter(function (el, i){
        if(index === index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return index !== index;
        }
        localStorage.setItem('students',JSON.stringify(data));
    }
    // });

        
    //    append();
    
// }
//     console.log(newData);
// }