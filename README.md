# BurgerTown, USA
## Summary
BurgerTown, USA is a very simple fullstack application developed to gain further experience with Express, Node, Handlebars.js, and ORM with SQL functions. BurgerTown allows the user to type in the name of the burger they would like to eat and commit it to the SQL database. Once there, the new burger will be displayed at the top with a button to eat said burger. If the user eats it, it moves to a section of the page where previously eaten burgers are displayed.

### Module Dependencies
The following Node modules are used (and are included in the package.json file):
* mysql - used for providing SQL queries through Node.js on the database.
* express - used for server-side code and hosting.
* express-handlebars - used for handlebars.js to dynamically create HTML.
* sequelize - ORM to make SQL statement structuring easier.

### BurgerTown Demo
* In the GIF below, a sample user views existing burgers and burgers that have already been eaten.
* They then add a brand new burger to the database and eat said burger, moving it to the other section of the page.
  
![Screenshot](README_images/burger-demo.gif)

### Menu Section - Existing Burgers
* This section of the page shows all existing burgers that have not been eaten. 
* This is pull from a jQuery AJAX call.
![Screenshot](README_images/Menu.png)

### Add a Burger - Creating a new SQL Entry
* This section of the page allows the user to add a new burger.
* The burger will be coerced into the SQL schema via the ORM functions.
![Screenshot](README_images/New-burger.png)

### Burgers Already Enjoyed - Burgers that have been updated
* This section of the page shows burgers that were prevously created and "devoured".
* These burgers display here based on a boolean value in the database.
![Screenshot](README_images/eaten.png)
