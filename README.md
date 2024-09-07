# Dashboard

This project is a web application built using **Next.js** for the frontend and **Django** for the backend. It features a basic dashboard that displays multiple charts, with data retrieved from a Django API backend. The frontend is styled using **Tailwind CSS** and developed using **TypeScript**.

## Table of Contents

- [Dashboard](#dashboard)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

## Tech Stack

- **Frontend:**
  - Next.js
  - TypeScript
  - Tailwind CSS
- **Backend:**
  - Django
  - Django Rest Framework
  
## Installation

### Prerequisites

- Node.js and npm installed
- Python and pip installed
- Git installed

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/andrewp8/blockhouse_assignment_dashboard.git
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv .env
   ```

3. Activate the virtual environment:

   ```bash
   source env/bin/activate  # For Linux/macOS
   env\Scripts\activate     # For Windows
   ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Set up the environment variables for the frontend by creating a `.env.local` file in the `client` directory. Make sure to add the following content to point to your backend API:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```

   Replace `http://localhost:8000` with the actual base URL of your localhost if it's different.

2. Start both the frontend and backend servers:
   - Frontend (in the `client` directory):

     ```bash
     npm run dev
     ```

   - Backend (in the `backend` directory):

     ```bash
     python manage.py runserver
     ```

3. Access the application via `http://localhost:3000` (or the port specified by Next.js).
4. The dashboard will display data from the Django API, which uses the base URL configured in `.env.local`.

## API Endpoints
```py
    #server\server\urls.py
    urlpatterns = [
    path('api/candlestick-data/', views.candlestick_data),
    path('api/line-chart-data/', views.line_chart_data),
    path('api/bar-chart-data/', views.bar_chart_data),
    path('api/pie-chart-data/', views.pie_chart_data),
]
```
