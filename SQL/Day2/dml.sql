create database govermentoffice;
use govermentoffice;

create table goverment(

stafId int primary key auto_increment,
stafName varchar(20),
stafwork varchar(20)
);

insert into goverment(stafName,stafwork) value ("Bharathi", "Agent"),
("Vicky","BAckend"),
("tamil","fronend"),
("akash","it"),
("manoj","cashier"),
("prem","acounted"),
("ebi","finance"),
("iman","media"),
("isac","maintence"),
("Arun","driver");

delete from goverment where stafId=1;



