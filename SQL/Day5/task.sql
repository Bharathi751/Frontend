create database Normalization;

USE Normalization;

-- Courses Table
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    trainer_name VARCHAR(50)
);

-- Students Table
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Insert Courses
INSERT INTO Courses (course_id, course_name, trainer_name)
VALUES
(101, 'Java', 'Ravi'),
(102, 'Python', 'Karthik');

-- Insert Students
INSERT INTO Students (student_id, student_name, course_id)
VALUES
(1, 'Arun', 101),
(2, 'Bala', 101),
(3, 'Kumar', 102),
(4, 'Priya', 101),
(5, 'Divya', 102);


-- Employees Table
CREATE TABLE EMPLOYEES (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT,
    department_id INT
);

-- Departments Table
CREATE TABLE DEPARTMENTS (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

-- Insert Employees
INSERT INTO EMPLOYEES
(employee_id, employee_name, salary, department_id)
VALUES
(1, 'Arun', 45000, 10),
(2, 'Bala', 35000, 20),
(3, 'Kumar', 55000, 10),
(4, 'Priya', 40000, 30);

-- Insert Departments
INSERT INTO DEPARTMENTS
(department_id, department_name)
VALUES
(10, 'IT'),
(20, 'HR'),
(30, 'Finance'),
(40, 'Marketing');


-- INNER JOIN
SELECT
    e.employee_id,
    e.employee_name,
    e.salary,
    d.department_name
FROM EMPLOYEES e
INNER JOIN DEPARTMENTS d
ON e.department_id = d.department_id;