# Course Management API – Team 9

This project is a Node.js backend service that manages course data using **Sequelize** and **MySQL**.  

---

## 🚀 Getting Started

To run this project locally, you’ll need to configure a `.env` file with your own database credentials.  

### 1. Install Dependencies
```bash
npm install
```

### 2. Create a `.env` File
Each team member must have a `.env` file on their local machine.  
Here’s an example template you can copy into your `.env` file (modify values for your local MySQL setup):

```env
DB_HOST="localhost"
DB_PW="password"
DB_USER="root"
DB_NAME="course-t9"
PORT="3306"
```

> ⚠️ **Note**:  
> - `DB_USER` and `DB_PW` should match your **local MySQL username and password**.  
> - Keep this file private — **do not commit `.env`** to GitHub.  

---

## 🗄️ Database Structure

We are using Sequelize ORM to manage the database schema.

**Table: Courses**
- **Primary Key:** `id`  
- **Type:** `String`  
- **Auto-increment**  

Defined in:  
```
/models/course.model.js
```

---

## 🎮 Controllers

The backend logic to query and manipulate the database lives inside the controller files.

Main controller:  
```
/controllers/course.controller.js
```

This is where we use Sequelize methods and queries to perform CRUD operations on the `Courses` table.

---

## 🛠️ Development Notes
- Sequelize is being used to handle database models and queries.  
- Each developer should ensure their MySQL instance is running locally.  
- Future updates may include additional models, routes, and controllers.  

---

## 📂 Project Structure (important parts)
```
/models
   course.model.js      # Defines Courses table
/controllers
   course.controller.js # Logic for interacting with Courses
```

---

## ✅ Next Steps
- Add additional tables as needed for project requirements  
- Expand controller logic for advanced queries  
- Connect to frontend once ready  
