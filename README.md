
---

# 🏥 Health Tracking Dashboard

This project is a **Health Tracking Dashboard** built using **React**, **Node.js**, and **MongoDB**. Users can log their daily health metrics (like body temperature, blood pressure, and heart rate), view their history, and edit or delete previous records. The design is inspired by a dark-themed modern dashboard UI.

## 🚀 Features

- **Dashboard Overview**: Displays the user’s body health metrics like blood pressure, sugar level, and heart rate.
- **Add New Record**: A form for users to add their health metrics.
- **Edit/Delete Records**: Allows users to update or remove past records.
- **Search Functionality**: Search by date or filter by health metrics (e.g., heart rate above a certain value).
- **Responsive UI**: The dashboard is designed to be responsive and user-friendly.

## 🛠️ Tech Stack

- **Frontend**: React.js (with Tailwind CSS for styling)
- **Backend**: Node.js and Express.js
- **Database**: MongoDB (or MySQL, depending on the configuration)
- **UI/Icons**: React Icons
- **Charting**: Chart.js

---

## 🏃‍♂️ Quick Start

### 📦 Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- MongoDB (or MySQL if you choose that as your database)
- Git

### 🔧 Setup Instructions

#### 1. **Clone the Repository**

```bash
git clone https://github.com/priyankasharma1603/Health-Dashoard.git
cd Health-Dashoard
```

#### 2. **Install Dependencies**

Install the required dependencies for both **frontend** and **backend**:

```bash
# For Frontend
cd frontend
npm install

# For Backend
cd ../backend
npm install
```

#### 3. **Set Up Environment Variables**

Create a `.env` file in the **backend** directory and add the following variables:

```bash
PORT=5000
MONGO_URI=<Your MongoDB Connection String>
```

If you're using **MySQL**, update the database connection settings accordingly.

#### 4. **Start the Application**

```bash
# For Backend
cd backend
npm start

# For Frontend
cd ../frontend
npm start
```

The frontend will be running at `http://localhost:3000` and the backend at `http://localhost:5000`.

---

## 📁 Project Structure

```
.
├── backend                 # Express server
│   ├── models              # Mongoose models
│   ├── routes              # Express routes
│   ├── controllers         # Business logic for each route
│   └── server.js           # Entry point for the backend
├── frontend                # React application
│   ├── src                 # React components, pages, assets
│   ├── public              # Public files (index.html, icons)
│   └── package.json        # Frontend dependencies
└── README.md               # You're reading it right now!
```

---

## 📝 API Endpoints

- `POST /health-records`: Create a new health record
- `GET /health-records`: Retrieve all health records
- `GET /health-records/:id`: Retrieve a specific health record by ID
- `PUT /health-records/:id`: Update a health record
- `DELETE /health-records/:id`: Delete a health record

---

## 💻 Frontend Components

- **Dashboard**: Displays health metrics and user statistics.
- **Form**: For adding and updating health records.
- **Search**: Allows users to search by date or filter health records.
- **Sidebar**: Navigation panel with icons.

---

## ✨ Future Improvements

- Add authentication (user login/signup).
- Export health records to PDF or CSV.
- Integrate health APIs for automatic data tracking.
- Add graphs for better data visualization over time.

---

## 🛡️ License

This project is licensed under the MIT License.

---

### 👩‍💻 Author

- **Priyanka Sharma** - [GitHub Profile](https://github.com/priyankasharma1603)

---

## 🤝 Contributing

Feel free to fork this project and submit pull requests. Contributions are always welcome! 😊

---

### 👀 Preview

![Health Tracker Dashboard Preview](https://your-link-to-preview-image.png)

---

### 🐞 Troubleshooting

If you encounter any issues, feel free to open an issue in the repository, and I’ll try to help as soon as possible!

---

**Enjoy coding! 👨‍💻👩‍💻**

---

