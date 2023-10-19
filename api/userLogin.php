<?php

$login = trim($_POST['userName']);
$password = md5(trim($_POST['password']));

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql->query("SET NAMES utf8");

$realLogin = $login;
$realLogin = $mysql->real_escape_string($realLogin);


if ($mysql->connect_error) {
    echo("Connection failed: " . $mysql->connect_errno. "<br>" . $mysql->connect_error);
} else {
    // check if the user exists

    $result = $mysql->query("SELECT * FROM users WHERE username = '$realLogin'");

    if ($result->num_rows > 0) {
        echo "User already exists";
    } else {
        // check if the password is correct

        $result = $mysql->query("SELECT * FROM users WHERE (name = '$realLogin' AND password = '$password')");
        $row = $result->fetch_all(MYSQLI_ASSOC);

        if ($result->num_rows > 0) {
            session_start();
            $_SESSION['username'] = $login;
            setcookie('username', $login, time() + 3600, '/');
            $_SESSION['password'] = $password;
        } else {
            echo "Wrong password or usernme";
        }
    }
}

$mysql->close();

header("Location: ../index.php");