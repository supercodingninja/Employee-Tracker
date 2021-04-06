-- My thought-flow https://drive.google.com/file/d/1f-RDGCSj9yTMibKaGBSLW9K10wY8RxpY/view; https://drive.google.com/file/d/1AQVuYY_kPW5NQ9Z3i3nZZevw1S7xsrsz/view; and https://drive.google.com/file/d/1GXI_co-9gZFj4ZzhzjWNYzTMkV5VbXnv/view --
USE eTrack_db;

-- List of Departments --
INSERT INTO Department ( department_name) VALUES
    ('Accounting'),
    ('Business Strategy & Development'),
    ( 'Design'),
    ( 'Executive'),
    (' Facilities'),
    ( 'Finance'),
    ( 'Human Resources'),
    ( 'Internal Affairs'),
    ( 'International Business'),
    ( 'Legal'),
    ( 'Marketing & Communications'),
    ( 'Operations & Production'),
    ( 'Public Relations'),
    ( 'Purchase (Internal)'),
    ( 'Recruiting'),
    ( 'Research & Development'),
    ( 'Sales, Services & Support');


-- List of Roles --
INSERT INTO Role (title, salary, department_id) VALUES
    ('Fiduciary Accountant', 112000, 1),
    ('Financial Accountant', 91000, 2),
    ('Forensic Accountant', 86267, 8),
    ('Managerial Accountant', 75000, 13),
    ('Cost Accountant', 63000, 13);


-- List of Employees Names --
INSERT INTO Employee ( first_name, last_name, role_id, manager_id) VALUES
    ('Dwayne', 'Thomas', 1, 1),
    ('Anjelah', 'Johnson-Reyes', 1, 2),
    ('Jeri', 'Ryan', 1, Null),
    ('Bruno', 'Mars', 1, 3),
    ('ZZ', 'Top', 1, Null)