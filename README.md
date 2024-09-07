# Dashboard

This project is a web application built using **Next.js** for the frontend and **Django** for the backend. It features a basic dashboard that displays multiple charts, with data retrieved from a Django API backend. The frontend is styled using **Tailwind CSS** and developed using **TypeScript**.

<p align="center" width="100%">
     <img alt="Dashboard Wireframe" width="700px" src="https://github.com/user-attachments/assets/86a1a6f0-dcc8-484f-a159-e55d6d5a1276" />
</p>

## Table of Contents

- [Dashboard](#dashboard)
  - [Table of Contents](#table-of-contents)
  - [Libraries and Tools Used](#libraries-and-tools-used)
  - [Approach and Thought Process](#approach-and-thought-process)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

## Libraries and Tools Used

This project uses the following libraries and tools:

- **Next.js**: A React framework used for server-side rendering and static site generation.
- **Django**: Backend framework used for handling API requests and managing the data.
- **TypeScript**: Type safety for the frontend codebase.
- **Tailwind CSS**: Utility-first CSS framework used to style the frontend.
- **Django Rest Framework (DRF)**: For building APIs in Django.
- **Axios** (or `fetch`): For making HTTP requests from the frontend to the backend.
- **dotenv**: To manage environment variables and secrets in the project.

## Approach and Thought Process

1. **Planning**: The project structure was split between a Next.js frontend and a Django API backend to maintain clear separation of concerns—frontend for UI, backend for data and logic.

2. **Backend Development**: Django and DRF were chosen for building REST APIs to handle CRUD operations and serve data to the frontend.

3. **Frontend Development**: Next.js was selected for server-side rendering, with Tailwind CSS for styling and TypeScript for improved type safety.

4. **API Integration**: The frontend communicates with the backend via `Axios` (or `fetch`), using environment variables from `.env.local` to set the API base URL.

5. **Testing**: Tests were conducted to ensure proper frontend-backend communication and accurate data display.

The approach focused on scalability, maintainability, and performance.

## Installation

### Prerequisites

- Node.js and npm installed
- Python and pip installed
- Git installed

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/andrewp8/techcorp_dashboard.git
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
