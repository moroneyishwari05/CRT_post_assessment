# ✈️ Flight Management System (Frontend + Backend)

A full-stack **Flight Management System** built using **React (Frontend)** and **Spring Boot (Backend)** with **PostgreSQL** database integration. This application allows users to manage flight details through a responsive user interface and REST APIs.

---

## 📌 Project Overview

The Flight Management System is designed to handle flight-related operations efficiently. It provides a frontend interface for interaction and a backend API for managing flight data.

This project demonstrates:

- Full Stack Development
- REST API Integration
- Database Connectivity
- CRUD Operations
- Frontend & Backend Communication

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Vite**
- **React Router DOM**
- **Bootstrap**
- **Axios**

### Backend
- **Spring Boot**
- **Spring Data JPA**
- **REST API**
- **Maven**

### Database
- **PostgreSQL**

---

## ✨ Features

✔️ Add new flight details  
✔️ View available flights  
✔️ Update flight information  
✔️ Delete flight records  
✔️ REST API integration  
✔️ Responsive UI using Bootstrap  
✔️ Database persistence using PostgreSQL

---

## 📂 Project Structure

```bash
Flight_(Frontend+Backend)/
│
├── Flight/                     # Spring Boot Backend
│   ├── src/main/java/
│   │   ├── controller/
│   │   ├── entity/
│   │   ├── service/
│   │   ├── repo/
│   │   └── exception/
│   └── src/main/resources/
│
├── flight-frontend/           # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup (Spring Boot)

### 1. Clone the Repository

```bash
git clone https://github.com/moroneyishwari05/CRT_post_assessment.git
```

### 2. Open Backend Project

Open the backend project in:

- Eclipse IDE
- IntelliJ IDEA
- Spring Tool Suite (STS)

### 3. Configure PostgreSQL Database

Create a PostgreSQL database:

```sql
CREATE DATABASE flightdb;
```

Update database credentials in:

```properties
src/main/resources/application.properties
```

Example configuration:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/flightdb
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
server.port=8083 //if 8080 is busy
```

### 4. Run Backend

Run:

```bash
FlightApplication.java
```

Backend server will start at:

```bash
http://localhost:8083
```

---

## 💻 Frontend Setup (React + Vite)

### 1. Navigate to Frontend Folder

```bash
cd flight-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Frontend will run at:

```bash
http://localhost:5173
```

---

## 🔗 API Integration

The frontend communicates with the Spring Boot backend using **Axios** to perform CRUD operations on flight data.

---

## 📸 Screenshots

### 🏠 All Flights
![All Flights](screenshots/all-flights.png)

### ➕ Add Flight
![Add Flight](screenshots/add-flight.png)

---

## 🎯 Learning Outcomes

This project helped in understanding:

- React Component Structure
- Spring Boot REST APIs
- Database Integration using PostgreSQL
- Axios API Calls
- Full Stack Project Development
- Exception Handling
- CRUD Functionality

---

## 👩‍💻 Author

**Ishwari Moroney**

GitHub: https://github.com/moroneyishwari05

---

## ⭐ Support

If you found this project useful, consider giving it a **star ⭐** on GitHub.
