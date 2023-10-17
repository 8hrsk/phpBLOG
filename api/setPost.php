<?php

session_start();

$postName = trim($_POST['name']);
$postContent = trim($_POST['content']);
$postAuthor = trim($_SESSION['username']);

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql -> query("SET NAMES utf8");

echo 'Post name: ' . $postName . '<br>';
echo 'Post content: ' . $postContent . '<br>';
echo 'Post author: ' . $postAuthor . '<br>';

if ($mysql -> connect_error) {
    echo("Connection failed: " . $mysql -> connect_errno. "<br>" . $mysql -> connect_error);
} else {
    echo 'adding';
    print_r($_SESSION);
    $newPost = $mysql -> query("INSERT INTO posts (postName, postAuthor, postValue) VALUES('$postName', '$postAuthor', '$postContent')");
    echo $mysql -> error;
}

$mysql -> close();