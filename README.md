# 📝 Simple EJS Blog Platform

A basic blog web application developed using **Node.js**, **Express.js**, and **EJS**. This app allows users to compose blog posts, view them on the home page, and access individual posts via dynamic URLs.

---

## 🚀 Features

- Create and publish blog posts
- View all posts on the home page
- Dynamic routing for individual post pages
- Clean and minimal EJS templated UI
- In-memory post storage (no database needed)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Body-Parser
- HTML5 + CSS3

---

## 📂 Project Structure

```
project-folder/
│
├── views/
│   ├── home.ejs        # Renders homepage with list of posts
│   ├── compose.ejs     # Page to compose a new post
│   └── post.ejs        # Dynamic single post page
│
├── public/
│   └── css/
│       └── styles.css  # CSS styles
│
├── app.js              # Main server-side logic
├── package.json
└── package-lock.json
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aravind-59/Simple-EJS-Blog-Platform-using-Node.js-and-Express.git
cd ejs-blog-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node app.js
```

The app will be running on [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots

- `/compose` page – Add a new blog post  
- `/posts/my-blog-title` – View individual posts

---

## 💡 Future Improvements

- Add database (MongoDB or SQLite) for persistent storage  
- Add authentication for admin posting  
- Rich text editor for post content  
- Tags and categories for posts  

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

Created by **Aravind** – feel free to reach out!

---
