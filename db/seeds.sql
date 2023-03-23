USE company_db;

-- DEPARTMENT SEEDS

INSERT INTO department (id, name)
VALUES (1, "Devs"),
       (2, 'Sales'),
       (3, 'Reception'),
       (4, 'HR');

-- ROLE SEEDS

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Junior Developer', 60000, 1),
       (2, 'Senior Developer', 100000, 1),
       (3, 'Sales Associate', 50000, 2),
       (4, 'Sales Lead', 100000, 2),
       (5, 'Receptionist', 40000, 3),
       (6, 'HR Assistant', 40000, 4),
       (7, 'HR Coordinator', 100000, 4);

-- EMPLOYEE SEEDS

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Smitty', 'Smith', 1, 2),
       ('Sam', 'Williams', 2, null),
       ('Corey', 'Wilson', 3, 4),
       ('Colin', 'Starr', 4, null),
       ('Linda', 'Fox', 5, 7),
       ('Tracy', 'Vogel', 6, 7),
       ('Ashley', 'Cloer', 7, null); 