# Flight Booking CLI - Setup Instructions

This is a simple flight booking command-line application that allows you to manage flights and bookings through an interactive interface.

## Prerequisites

Before running this application, make sure you have the following installed on your computer:

- **Docker**
- **Docker Compose**

## Quick Start

### 1. Download the Application

Clone or download this repository to your local machine:
```bash
git clone <repository-url>
cd flight-booking-cli
```

### 2. Run the Application

For interactive CLI applications, use this command in the project directory:

```bash
docker compose run --rm flight-booking-cli
```

This command will:
- Build the Docker image automatically
- Start the flight booking CLI application
- Allow you to interact with the CLI menu

### 3. Using the Application

Once the application starts, you'll see:

```
==== SIMPLE FLIGHT BOOKING & RUNNING SYSTEM ====
Login as:
1. Admin
2. Passenger

> 
```

**Choose your role:**
- **Option 1 (Admin)**: Manage flights, view bookings, and perform administrative tasks
- **Option 2 (Passenger)**: Search flights, make bookings, and manage your reservations

### 4. Stopping the Application

To stop the application:
- Press `Ctrl + C` in the terminal

## Features

This flight booking system includes:
- 👨‍💼 **Admin Interface**: Manage flights and view all bookings
- 👥 **Passenger Interface**: Search flights and make bookings
- 🔄 **Interactive CLI**: Easy-to-use command-line interface
- 🐳 **Dockerized**: No need to install Node.js or manage dependencies

Enjoy using the Flight Booking CLI! ✈️
