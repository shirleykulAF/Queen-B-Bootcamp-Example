-- Drop the tables if they already exist
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS languages;
DROP TABLE IF EXISTS mentors;

-- Create the mentors table
CREATE TABLE IF NOT EXISTS mentors (
    email VARCHAR(255) PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    linkedin VARCHAR(255)
);

-- Create the languages table (connected to mentors by email, representing programming languages)
CREATE TABLE IF NOT EXISTS languages (
    email VARCHAR(255),
    programming_language VARCHAR(100),
    PRIMARY KEY (email, programming_language),
    FOREIGN KEY (email) REFERENCES mentors(email) ON DELETE CASCADE
);

-- Create the user table
CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    userType VARCHAR(50) NOT NULL
);

-- Insert data into the user table for the 20 female mentors - Passwords are identical 'password123' hashed using bcrypt
INSERT INTO users (email, password, userType) VALUES
('sara.smith@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),  
('emma.johnson@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'), 
('olivia.brown@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('ava.jones@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('isabella.garcia@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('mia.martinez@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('amelia.rodriguez@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('harper.hernandez@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('evelyn.lopez@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('abigail.moore@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('sofia.gonzalez@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('avery.hill@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('ella.scott@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('lily.green@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('chloe.adams@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('nora.baker@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('scarlett.nelson@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('aria.carter@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('hannah.mitchell@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('zoe.perry@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentor'),
('lucy.wilson@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentee'),
('grace.thomas@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentee'),
('ella.clark@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentee'),
('sophie.turner@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentee'),
('ruby.evans@example.com', '$2b$10$1uikHH/2gB66adnCHtbLge2OYyO8ot8KhDgx6qwQogg2RxLMgaFf2', 'mentee');

-- Insert 20 female mentors
INSERT INTO mentors (email, first_name, last_name, phone_number, linkedin) VALUES
('sara.smith@example.com', 'Sara', 'Smith', '555-1234', 'https://linkedin.com/in/sara-smith'),
('emma.johnson@example.com', 'Emma', 'Johnson', '555-5678', 'https://linkedin.com/in/emma-johnson'),
('olivia.brown@example.com', 'Olivia', 'Brown', '555-9101', 'https://linkedin.com/in/olivia-brown'),
('ava.jones@example.com', 'Ava', 'Jones', '555-2345', 'https://linkedin.com/in/ava-jones'),
('isabella.garcia@example.com', 'Isabella', 'Garcia', '555-6789', 'https://linkedin.com/in/isabella-garcia'),
('mia.martinez@example.com', 'Mia', 'Martinez', '555-1122', 'https://linkedin.com/in/mia-martinez'),
('amelia.rodriguez@example.com', 'Amelia', 'Rodriguez', '555-3344', 'https://linkedin.com/in/amelia-rodriguez'),
('harper.hernandez@example.com', 'Harper', 'Hernandez', '555-5566', 'https://linkedin.com/in/harper-hernandez'),
('evelyn.lopez@example.com', 'Evelyn', 'Lopez', '555-7788', 'https://linkedin.com/in/evelyn-lopez'),
('abigail.moore@example.com', 'Abigail', 'Moore', '555-9911', 'https://linkedin.com/in/abigail-moore'),
('sofia.gonzalez@example.com', 'Sofia', 'Gonzalez', '555-2233', 'https://linkedin.com/in/sofia-gonzalez'),
('avery.hill@example.com', 'Avery', 'Hill', '555-4455', 'https://linkedin.com/in/avery-hill'),
('ella.scott@example.com', 'Ella', 'Scott', '555-6677', 'https://linkedin.com/in/ella-scott'),
('lily.green@example.com', 'Lily', 'Green', '555-8899', 'https://linkedin.com/in/lily-green'),
('chloe.adams@example.com', 'Chloe', 'Adams', '555-1010', 'https://linkedin.com/in/chloe-adams'),
('nora.baker@example.com', 'Nora', 'Baker', '555-1212', 'https://linkedin.com/in/nora-baker'),
('scarlett.nelson@example.com', 'Scarlett', 'Nelson', '555-1313', 'https://linkedin.com/in/scarlett-nelson'),
('aria.carter@example.com', 'Aria', 'Carter', '555-1414', 'https://linkedin.com/in/aria-carter'),
('hannah.mitchell@example.com', 'Hannah', 'Mitchell', '555-1515', 'https://linkedin.com/in/hannah-mitchell'),
('zoe.perry@example.com', 'Zoe', 'Perry', '555-1616', 'https://linkedin.com/in/zoe-perry');

-- Insert associated programming languages for each mentor
INSERT INTO languages (email, programming_language) VALUES
('sara.smith@example.com', 'Python'),
('sara.smith@example.com', 'Java'),
('emma.johnson@example.com', 'Java'),
('olivia.brown@example.com', 'JavaScript'),
('ava.jones@example.com', 'Ruby'),
('isabella.garcia@example.com', 'Python'),
('mia.martinez@example.com', 'C++'),
('amelia.rodriguez@example.com', 'JavaScript'),
('harper.hernandez@example.com', 'C#'),
('evelyn.lopez@example.com', 'PHP'),
('abigail.moore@example.com', 'Python'),
('sofia.gonzalez@example.com', 'Kotlin'),
('avery.hill@example.com', 'Java'),
('ella.scott@example.com', 'Go'),
('lily.green@example.com', 'Rust'),
('chloe.adams@example.com', 'JavaScript'),
('nora.baker@example.com', 'Python'),
('scarlett.nelson@example.com', 'Swift'),
('aria.carter@example.com', 'TypeScript'),
('hannah.mitchell@example.com', 'C++'),
('zoe.perry@example.com', 'Scala');


