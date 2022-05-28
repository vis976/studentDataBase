
function Students(n,c,u,i,b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web${b}`;
}


function studentData(e) {
   e.preventDefault();

   let form = document.getElementById("form");
   let name = form.name.value;
   let course = form.course.value;
   let unit = form.unit.value;
   let image = form.image.value;
   let batch = form.batch.value;

   let s1 = new Students(name, course, unit, image, batch);
console.log(s1);
   // console.log(name, course, unit, image, batch);

   data = JSON.parse(localStorage.getItem("students")) || []

   data.push(s1);

   localStorage.setItem("students", JSON.stringify(data))


   form.name.value="";
   form.course.value="";
   form.unit.value="";
   form.image.value="";
   form.batch.value="";
}