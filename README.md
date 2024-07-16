# Geolocation

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)

## Introduction

This is a simple Node.js application that does find location of the treasure and its distance

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (v14.x.x or later).
- You have installed [npm](https://www.npmjs.com/) (v6.x.x or later).
- You have installed [Mysql](https://www.postgresql.org/) (or another supported database).

## Installation

#### Install MySQL

Follow the instructions below based on your operating system:

**For Windows:**

1. Download and install the MySQL Community Server from the [MySQL website](https://dev.mysql.com/downloads/mysql/).
2. During the installation, note down the root password you set up.
3. After installation, open the MySQL Command Line Client and log in with the root password.

**For macOS:**

1. Install MySQL using Homebrew:

   ```bash
   brew install mysql
   ```

2. Start the MySQL service:

   ```bash
   brew services start mysql
   ```

3. Secure your MySQL installation and set up the root password:

   ```bash
   mysql_secure_installation
   ```

**For Ubuntu/Linux:**

1. Update your package index and install MySQL:

   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```

2. Secure your MySQL installation and set up the root password:

   ```bash
   sudo mysql_secure_installation
   ```

#### Configure the Database

1. Log in to MySQL as the root user:

   ```bash
   mysql -u root -p
   ```

2. Create a new database:

   ```sql
   CREATE DATABASE geo_db;
   ```

3. Create a `.env` file in the root of your project and add your database configuration:

   ```env
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_DATABASE=your_db_name
   DB_HOST=your_db_host
   ```

4. Migrate the database:

   ```bash
    npm run db_migration
   ```

5. Seed the database:

   ```bash
   npm run db_seed
   ```

## Usage

To use this application, follow these steps:

1. Start the application:

   ```bash
   npm run dev
   ```

2. Open your postman use this curl

   ```bash
      curl --location 'http://localhost:3000/geolocation/geo/find_treasure' \
      --header 'Content-Type: application/json' \
      --data '{
         "latitude":  14.552036595352455,
         "longitude": 121.01696118771324,
         "distance": 1,
         "prizeValue": 17
      }'
   ```
