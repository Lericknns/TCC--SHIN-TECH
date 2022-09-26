CREATE DATABASE shintechDB;
USE shintechDB;

CREATE TABLE TB_USUARIO (
id_usuario      int primary key auto_increment,
nm_usuario      varchar(50),
dt_nascimento   datetime,
ds_email        varchar(99),
ds_senha        varchar(20),
nr_cpf          int(11)
);

CREATE TABLE TB_LOGIN (
id_login        int primary key auto_increment,
id_usuario      int,
ds_email        varchar(200),
ds_senha        varchar(20)
FOREIGN KEY (id_usuario) references TB_USUARIO(id_usuario)
);

// 113.55