DROP DATABASE IF EXISTS eTrack_db;

CREATE DATABASE eTrack_db;

USE eTrack_db;
-- -- Design the following database schema containing three tables (see schema.png):

-- * **department**:
CREATE TABLE department(
    --   * **id** - INT PRIMARY KEY
    department_id INT PRIMARY KEY,
    --   * **name** - VARCHAR(30) to hold department name
    department_name VARCHAR(30),
);

-- * **role**:
CREATE TABLE role (
    --   * **id** - INT PRIMARY KEY
    role_id INT PRIMARY KEY,
    --   * **title** -  VARCHAR(30) to hold role title
    role_title VARCHAR(30),
    --   * **salary** -  DECIMAL to hold role salary
    role_salary DECIMAL
    --   * **department_id** -  INT to hold reference to department role belongs to
    department_id INT
)

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager