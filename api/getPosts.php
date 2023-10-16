<?php

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql -> query("SET NAMES utf8");

if ($mysql -> connect_error) {
    echo("Connection failed: " . $mysql -> connect_errno. "<br>" . $mysql -> connect_error);
} else {
    $postsArray = [];
    $result = $mysql -> query("SELECT * FROM posts");
    $row = $result -> fetch_all(MYSQLI_ASSOC);
    return $row;
}

$mysql -> close();