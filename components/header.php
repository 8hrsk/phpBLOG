<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="../src/style.css">
    <script src="../src/script.js"></script>
</head>
<body>
    <header>
        <div class="logo">
            MYBLOG
        </div>
        <nav>
            <ul class="navigation">
                <li><a href="javascript:void(0);" id="createPost">Create Post</a></li>
                <!--<li><a href="*">Browse Posts</a></li>-->
            </ul>
        </nav>

        <ul class="userAction" id="action">
            <li><button id="loginBtn">Login</button></li>
            <li><button id="registerBtn">Register</button></li>
        </div>
    </header>