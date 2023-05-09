INSERT INTO department (name)
values ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales manager", 100000, 1),
       ("Salesperson", 50000, 1),
       ("Software Engineering Manager", 100000, 2),
       ("Software Engineer", 50000, 2),
       ("Lawyer", 100000, 3);
       ("Account Manager", 100000, 4),
       ("Accountant", 50000, 4),
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Zach", "Turner", 1, NULL),
       ("Eli", "Bolding", 1, NULL),
       ("Antonio", "Cea", 1, 1),
       ("Patrick", "Hu", 2, NULL),
       ("Ben", "Jonge", 2, 2),
       ("Taylor", "Dingman", 3, NULL),
       ("Adam", "Powell", 4, NULL)
       ("Ethan", "Rose", 4, 4)