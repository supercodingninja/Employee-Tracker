-- See my thought-flow in how I created this schema at https://drive.google.com/file/d/1mPa_gXlxk7pZr4Ks3kBNk9Atakoykmsp/view; and https://drive.google.com/file/d/145_rDjGIJZWTxObi5AFE6oSGq3sNgbEH/view --
DROP DATABASE IF EXISTS eTrack_db;

CREATE DATABASE eTrack_db;

USE eTrack_db;
-- -- Design the following database schema containing three tables (see schema.png):

-- * **department**:
CREATE TABLE department(
    --   * **id** - INT PRIMARY KEY
    department_id INT PRIMARY KEY,
    --   * **name** - VARCHAR(30) to hold department name
    department_name VARCHAR(30)
);

-- * **role**:
CREATE TABLE role (
    --   * **id** - INT PRIMARY KEY
    role_id INT PRIMARY KEY,
    --   * **title** -  VARCHAR(30) to hold role title
    title VARCHAR(30),
    --   * **salary** -  DECIMAL to hold role salary
    salary DECIMAL,
    --   * **department_id** -  INT to hold reference to department role belongs to
    department_id INT
)

-- * **employee**:
CREATE TABLE employee (
    --   * **id** - INT PRIMARY KEY
    employee_id INT PRIMARY KEY,
    --   * **first_name** - VARCHAR(30) to hold employee first name
   first_name VARCHAR(30),
    --   * **last_name** - VARCHAR(30) to hold employee last name
    last_name VARCHAR(30),
    --   * **role_id** - INT to hold reference to role employee has
    role_id INT,
    --   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
    manager_id INT
)