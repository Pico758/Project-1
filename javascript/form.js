function validateform() {
    var name = document.myform.name.value;
    var  price = document.myform.prize.value;
    var description = document.myform.description.value;
    var image = document.myform.image.value;
    var date = document.myform.date.value;
    if(name==null || name=="")
    {
        alert("name cant be empty");
        return false
    } 
    if(price==null || price=="")
    {
        alert("price cant be empty");
        return false;
    }
    if(description==null || description==""){
        alert(" description cant be empty");
        return false;
    }
    if(image==null || image==""){
        alert("image cant be empty");
        return false;
    }
    if(date==null || date==""){
        alert(" date cant be empty");
        return false;
    }
}

