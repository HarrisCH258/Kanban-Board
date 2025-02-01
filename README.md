# Description
This application is a kanban board with scure login. When the login page is loaded the user is prompted with inputs for username and password. When the username and password are entered the user is authenticated using JSON web tokens and redirected to the main kanban board page. When an invalid username or password is entered then an error message is given indicating the credentials are incorrect. If a succesful login is made a JWT is stored in the client's local storage. When the user logs out the JWT is removed from the client's local storage and and they are redirected to the login page. When the user tries to acess the kanban board page without being authenticated they are redirected to the login page. When the page is inactive for a defined period the session expires and teh JWT is invalidated. The user is redirected to the login page upon next action.

## Usage
![alt text](<Screenshot 2025-02-01 131241.png>)
https://kanban-board-jahw.onrender.com/


## Contact Me
Github: https://github.com/HarrisCH258/Kanban-Board
email: ch2953har@gmail.com

