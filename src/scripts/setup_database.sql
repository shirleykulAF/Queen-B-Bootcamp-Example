-- SQL Script to populate initial data for Queens Match Project
-- File: /scripts/setup_database.sql

-- Insert data into Users Table
INSERT INTO users (username, password, role) VALUES
('user1', '123', 'mentee'),
('user2', '123', 'mentee');

-- Insert data into Mentors Table
INSERT INTO mentors (full_name, email, phone_number, whatsapp_link, linkedin_profile, technologies) VALUES
('Jane Doe', 'jane.doe@example.com', 'mailto:jane.doe@example.com', '123-456-7890', ' https://wa.me/1234567890', 'https://www.linkedin.com/in/janedoe', ARRAY['JavaScript', 'Python']),
('Alice Johnson', 'alice.johnson@example.com', 'mailto:alice.johnson@example.com', '234-567-8901', 'https://wa.me/2345678901', 'https://www.linkedin.com/in/alicejohnson', ARRAY['Python', 'Django']),
('Bethany Cole', 'bethany.cole@example.com', 'mailto:bethany.cole@example.com', '345-678-9012', 'https://wa.me/3456789012', 'https://www.linkedin.com/in/bethanycole', ARRAY['JavaScript', 'React']),
('Clara Brown', 'clara.brown@example.com', 'mailto:clara.brown@example.com', '456-789-0123', 'https://wa.me/4567890123', 'https://www.linkedin.com/in/clarabrown', ARRAY['Java', 'Spring Boot']),
('Diana Cruz', 'diana.cruz@example.com', 'mailto:diana.cruz@example.com', '567-890-1234', 'https://wa.me/5678901234', 'https://www.linkedin.com/in/dianacruz', ARRAY['C#', 'ASP.NET']),
('Eva Black', 'eva.black@example.com', 'mailto:eva.black@example.com', '678-901-2345', 'https://wa.me/6789012345', 'https://www.linkedin.com/in/evablack', ARRAY['Ruby', 'Rails']),
('Fiona Davis', 'fiona.davis@example.com', 'mailto:fiona.davis@example.com', '789-012-3456', 'https://wa.me/7890123456', 'https://www.linkedin.com/in/fionadavis', ARRAY['Swift', 'iOS']),
('Grace Hill', 'grace.hill@example.com', 'mailto:grace.hill@example.com', '890-123-4567', 'https://wa.me/8901234567', 'https://www.linkedin.com/in/gracehill', ARRAY['PHP', 'Laravel']),
('Helen Lopez', 'helen.lopez@example.com', 'mailto:helen.lopez@example.com', '901-234-5678', 'https://wa.me/9012345678', 'https://www.linkedin.com/in/helenlopez', ARRAY['JavaScript', 'Node.js']),
('Iris Taylor', 'iris.taylor@example.com', 'mailto:iris.taylor@example.com', '012-345-6789', 'https://wa.me/0123456789', 'https://www.linkedin.com/in/iristaylor', ARRAY['Go', 'Kubernetes']);מםגק