USE AdventureWorks2016CTP3
GO

DROP TABLE IF EXISTS dbo.EmployeeTest
go

CREATE TABLE dbo.EmployeeTest(
	ID int NOT NULL PRIMARY KEY IDENTITY (1,1),
	Name varchar(50) NOT NULL,
	Position varchar(50) NOT NULL,
	Office varchar(30) NULL,
	Age int NULL,
	Salary int NULL
)
GO

insert into EmployeeTest (Name, Position, Office, Age, Salary) values ('Serge', 'Boss/Owner', 'Home Office', 45, 170000 );
insert into EmployeeTest (Name, Position, Office, Age, Salary) values ('Tristan', 'Director', 'Seattle Office', 25, 170000 );
insert into EmployeeTest (Name, Position, Office, Age, Salary) values ('McKayla', 'President', 'California Office', 23, 170000 );
insert into EmployeeTest (Name, Position, Office, Age, Salary) values ('John', 'Manager', 'New', 22, 110000 );
insert into EmployeeTest (Name, Position, Office, Age, Salary) values ('Amit', 'BA', 'Old office', 33, 90000 );

select * from EmployeeTest
