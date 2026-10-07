create database emptable;

create table empdetails(

empid int primary key auto_increment,
empname varchar(20),
empdept varchar(20),
empsalary varchar(20),
empcity varchar(20)
);

insert into empdetails(empname,empdept,empsalary,empcity) value ("bharathi","it","20000","chennai"),
("vickyt","it","40000","chennai"),
("akash","it","30000","chennai"),
("tamil","it","50000","chennai"),
("bharathi","it","20000","chennai")