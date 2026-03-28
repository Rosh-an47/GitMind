# GITMIND

A clean, minimal link manager for developers. Save links, organize them into collections, and share collections publicly with anyone via a unique URL.

## Features

- JWT Authentication — signup, signin, signout
- Save links with a title, description, and tags
- Organize links into collections
- Toggle links as read / unread
- Make any collection public and share it via a unique link
- Filter links by collection, tag, or read status

## Tech Stack

**Frontend** — React, Axios, React Router  
**Backend** — Node.js, Express  
**Database** — MongoDB, Mongoose  
**Auth** — JWT, bcrypt

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Setup
```bash
# Clone the repo
git clone https://github.com/your-username/link-vault.git

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

Create a `.env` file in `/server`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run
```bash
# Run backend
cd server && npm run dev

# Run frontend
cd client && npm start
```