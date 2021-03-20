-- My thought-flow https://drive.google.com/file/d/1f-RDGCSj9yTMibKaGBSLW9K10wY8RxpY/view; https://drive.google.com/file/d/1AQVuYY_kPW5NQ9Z3i3nZZevw1S7xsrsz/view; and https://drive.google.com/file/d/1GXI_co-9gZFj4ZzhzjWNYzTMkV5VbXnv/view --
USE eTrack_db;

-- List of Departments --
INSERT INTO Departments (id, department_name) VALUES
    (13,'Accounting')
    (3, 'Business Strategy & Development')
    (5, 'Design')
    (1, 'Executive'),
    (4,' Facilities')
    (2, 'Finance')
    (9, 'Human Resources')
    (8, 'Internal Affairs')
    (7, 'International Business')
    (6, 'Legal')
    (10, 'Marketing & Communications'),
    (11, 'Operations & Production'),
    (5, 'Public Relations')
    (12, 'Purchase (Internal)')
    (14, 'Recruiting')
    (15, 'Research & Development'),
    (16, 'Sales, Services & Support')


-- List of Roles --
INSERT INTO Roles (id, title, salary, departnment_id) VALUES
    (1,'Fiduciary Accountant', 112000, 1)
    (2,'Financial Accountant', 91000, 2)
    (3,'Forensic Accountant', 86267, 8)
    (4,'Managerial Accountant', 75000, 13)
    (5,'Cost Accountant', 63000, 13)


-- List of Employees Names --
INSERT INTO Employee (id, first_name, last_name, role_id, manager_id) VALUES
    (1,'Dwayne', 'Thomas', 1, 1)
    (2,'Anjelah', 'Johnson-Reyes', 1, 2)
    (3,'Jeri', 'Ryan', 1, Null)
    (4,'Bruno', 'Mars', 1, 3)
    (5,'ZZ', 'Top', 1, Null)