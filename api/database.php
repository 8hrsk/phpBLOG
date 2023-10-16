<?php

$mysql = new mysqli('localhost', 'root', '', 'blog');
$mysql->query("SEt NAMES utf8");

if ($mysql->connect_error) {
    echo("Connection failed: " . $mysql->connect_errno. "<br>" . $mysql->connect_error);
} else {
    
}

$mysql->close();