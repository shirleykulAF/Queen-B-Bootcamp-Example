-- SQL Script to create database schema for Queens Match Project
-- File: /src/database/setup.sql

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('mentor', 'mentee')) NOT NULL
);

-- Create Mentors Table
CREATE TABLE IF NOT EXISTS mentors (
    mentor_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    email_link TEXT,
    phone_number VARCHAR(50),
    whatsapp_link TEXT,
    linkedin_profile VARCHAR(255),
    technologies TEXT[]
);
