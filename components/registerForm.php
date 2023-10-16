<dialog id="registerBtnDialog">
    <form action="../api/userRegister.php" method="post" class="myForm">
        <input 
            type="text" 
            name="username" 
            placeholder="type in your nickname" 
            class="myInput" 
            id="usernameRegistration">
        <br>
        <input 
            type="text" 
            name="email" 
            placeholder="Type in your email" 
            class="myInput" 
            id="emailRegistration">
        <br>
        <input 
            type="password" 
            name="password" 
            placeholder="Type in your password" 
            class="myInput" 
            id="passwordRegistration">
        <br>
        <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Type in your password again" 
            class="myInput" 
            id="confirmPasswordRegistration">
        <br>
        <center>
            <button type="submit" id="submitRegistration">Register!</button>
        </center>
    </form>
</dialog>