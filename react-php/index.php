<?php

    $conn = mysqli_connect('localhost','root','','react');
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        
        $sql = "UPDATE mydata  SET name = '$name', email = '$email' WHERE id = '$id'";
        
        if(mysqli_query($conn,$sql)){
            echo "Successfully Updated.";
        }else{
            echo "Error!, Message not Updated.".mysqli_error($conn);
        }
    }else{
        
        $sql = "INSERT INTO mydata (name,email) VALUES('$name','$email')";
        
        if(mysqli_query($conn,$sql)){
            echo "Successfully sent.";
        }else{
            echo "Error!, Message not sent.".mysqli_error($conn);
        }
    }

?>