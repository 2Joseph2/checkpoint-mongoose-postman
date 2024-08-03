# Mongoose CRUD Operations Project

## Project Overview

This project demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations using Mongoose with MongoDB. It includes setting up a MongoDB connection, defining schemas, and performing various database operations.

## Setup Instructions

1. **Dependencies**
   - Install Mongoose as a dependency in your project to manage interactions with MongoDB.

2. **Configuration**
   - Store your MongoDB Atlas URI in a `.env` file to keep it secure. 
   - Connect to MongoDB using the URI stored in the environment file.

## Schema and Model Definition

- Define a schema for a `Person` model with fields including name, age, and favorite foods.
- Create a Mongoose model based on this schema to interact with the MongoDB collection.

## Operations

1. **Create and Save Records**
   - Create new instances of the `Person` model and save them to the MongoDB database.

2. **Create Multiple Records**
   - Add multiple records to the database in one operation for initial data seeding.

3. **Read Operations**
   - Perform queries to find records by name, favorite foods, or `_id`.

4. **Update Records**
   - Update existing records by finding them through `_id` or other criteria, and apply modifications.

5. **Delete Records**
   - Remove records based on specific criteria such as `_id` or name.

6. **Advanced Queries**
   - Execute complex queries involving sorting, limiting results, and field exclusion.
