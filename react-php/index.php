<?php

    $conn = mysqli_connect('localhost','root','','react');
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    $sql = "INSERT INTO mydata (name,email) VALUES('$name','$email')";

    if(mysqli_query($conn,$sql)){
        echo "Successfully sent.";
    }else{
        echo "Error!, Message not sent.".mysqli_error($conn);
    }

?>