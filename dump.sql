CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL DEFAULT 'John Doe',
    phone_num VARCHAR(30) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Contacts (name, phone_num) VALUES
('John Doe', '1234567890'),
('Jane Smith', '0987654321'),
('Alice Johnson', '5551234567'),
('Bob Brown', '5559876543'),
('Charlie Davis', '5555555555'),
('Diana Prince', '5554444444'),
('Ethan Hunt', '5553333333'),
('Felicity Smoak', '5552222222'),
('George Clooney', '5551111111'),
('Hannah Montana', '5550000000');