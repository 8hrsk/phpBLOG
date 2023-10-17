<?php

session_start();

$login = trim($_POST['userName']);
$password = md5(trim($_POST['password']));

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql->query("SET NAMES utf8");

if ($mysql->connect_error) {
    echo("Connection failed: " . $mysql->connect_errno. "<br>" . $mysql->connect_error);
} else {
    // check if the user exists

    $result = $mysql->query("SELECT * FROM users WHERE username = '$login'");

    if ($result->num_rows > 0) {
        echo "User already exists";
    } else {
        // check if the password is correct

        $result = $mysql->query("SELECT * FROM users WHERE username = '$login' AND password = '$password'");

        if ($result->num_rows > 0) {
            echo "Logged in!";
            $_SESSION['username'] = $login;
            $_SESSION['password'] = $password;
        } else {
            echo "Wrong password!";
        }
    }
}

$mysql->close();

header("Location: ../index.php");