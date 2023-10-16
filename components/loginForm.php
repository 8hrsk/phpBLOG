<div class="popup">
    <dialog id="loginBtnDialog">
        <form action="../api/userLogin.php" method="post" class="myForm">
            <input 
                type="text" 
                name="userName" 
                placeholder="type in your nickname" 
                class="myInput"
                id="usernameLogin">
            <br>
            <input 
                type="password" 
                name="password" 
                placeholder="Type in your password" 
                class="myInput"
                id="passwordLogin">
            <br>
            <center>
                <button type="submit" id="submitLogin">Login!</button>
            </center>
        </form>
    </dialog>
</div>