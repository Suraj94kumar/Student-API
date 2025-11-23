# Student Record API

A simple REST API to manage student data.

## Installation

```bash
npm install
```

## Setup

1. Create `config.env` file with your MongoDB connection:
```
ATLAS_URI="your_mongodb_connection_string"
```

## Usage

Start the server:
```bash
npm start
```

Server runs on: `http://localhost:5000/`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| POST | `/students` | Add new student |
| PUT | `/students/:id` | Update student |
| DELETE | `/students/:id` | Delete student |