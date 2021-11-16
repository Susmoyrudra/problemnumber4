function Datainsert(){
    var sub_cat_name=document.getElementById("sub_cat_name").value;
    var sub_cat_code=document.getElementById("sub_cat_code").value;
    alert(sub_cat_name);
    $.ajax({
        type:"POST",
        url:"index.php",
        data:{
            name:sub_cat_name,
            code:sub_cat_code
        },
        success: function(data){
            alert("successfuly");
        }
    })

    

}