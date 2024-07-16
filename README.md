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

To install this application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/zethkenneth/Geolocation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Geolocation
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Database Setup

This application uses [Sequelize](https://sequelize.org/) as the ORM to interact with the database. Follow these steps to set up the database:

1. Create a `.env` file in the root of your project and add your database configuration:

   ```env
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_DATABASE=your_db_name
   DB_HOST=your_db_host
   ```

2. Migrate the database:

   ```bash
    npm run db_migration
   ```

3. Seed the database:

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
       "lat":  37.8136,
       "lon": 144.9631 ,
       "dist": 10
   }'
   ```
