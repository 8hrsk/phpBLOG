<?php
    session_start();
    $title = "Blog";
    require './components/header.php';
?>

<?php

    $posts = require './api/getPosts.php';

    //echo $_SESSION['username'];

    //print_r($posts);

    // $posts1 = [
    //     [   
    //         'postAuthor' => 'John',
    //         'id' => 1,
    //         'postName' => 'Post 1',
    //         'postValue' => 'This is the content of post 1'
    //     ],
    //     [
    //         'postAuthor' => 'John',
    //         'id' => 2,
    //         'postName' => 'Post 2',
    //         'postValue' => 'This is the content of post 2'
    //     ]
    // ];

    echo '<br>';
    echo '<br>';
    echo '<br>';
    print_r($posts1);

?>

<div class="container">
    <!-- Test Subjects -->
    <h1>Posts available</h1>

    <?php
        foreach ($posts as $post) {
            require './components/browsePosts.php';
        }

    ?>
</div>

<?php
    require './components/loginForm.php';
?>

<?php
    require './components/registerForm.php';
?>

<?php
    require './components/createPost.php';
?>

<?php
    require './components/footer.php';
?>