<?php

session_start();

$username = trim($_POST['username']);
$userEmail = trim($_POST['email']);
$userPassword = md5(trim($_POST['password']));

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql -> query("SET NAMES utf8");

echo 'Username: ' . $username . '<br>';
echo 'Email: ' . $userEmail . '<br>';
echo 'Password: ' . $userPassword . '<br>';

echo $mysql -> error;

if ($mysql -> connect_error) {
    echo("Connection failed: " . $mysql -> connect_errno. "<br>" . $mysql -> connect_error);
} else {
    // check if there is another user with the same email or login

    $result = $mysql -> query("SELECT * FROM 'users' WHERE email = '$userEmail' OR username = '$username'");

    if ($result -> num_rows > 0) {
        echo "User already exists";
    } else {
        //$mysql -> query("INSERT INTO users (username, email, password) VALUES('$username', '$userEmail', '$userPassword')");
        $add_user = $mysql -> query("INSERT INTO users (name, email, password) VALUES('$username', '$userEmail', '$userPassword')");
        if ($add_user) {
            echo "User added successfully";
            $_SESSION['username'] = $username;
            $_SESSION['email'] = $userEmail;
             
        } else {
            echo $mysql -> error;
        }
        //header('Location: ../index.php');     
    }
}

header("Location: ../index.php");

$mysql -> close();