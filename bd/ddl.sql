create database shintech;
use shintech;

create table tb_categoria (
	id_categoria int primary key auto_increment,
    nm_categoria 	varchar(200)
);

 create table tb_usuario (
 	id_usuario int primary key auto_increment,
    ds_email 		varchar(50),
    ds_senha 		varchar(50),
    nm_usuario 		varchar(25),
    dt_nascimento	date
 );
 
 create table tb_cupom (
	id_cupom  int primary key auto_increment,
    dt_criacao 		date,
    vl_desconto 	decimal(10,2)
);

 create  table tb_admin (
	id_admin	int primary key auto_increment,
    ds_email 			varchar(50),
    ds_senha 			varchar(50),
    nm_admin 			varchar(25),
    dt_nascimento 		date
);

create table tb_departamento (
	id_departamento 	int primary key auto_increment,
    nm_departamento 	varchar (300),
	img_capa 			varchar (500)
);

create table tb_produto (
	id_produto 				int primary key auto_increment,
    id_departamento 		int,
    id_categoria			int,
    nm_produto 				varchar(300),
    vl_preco_de 			decimal(10,2),
    vl_preco_por 			decimal(10,2),
    foreign key (id_categoria) references tb_categoria(id_categoria),
    foreign key (id_departamento) references tb_departamento(id_departamento)
);

create table tb_login (
    id_login 	int primary key auto_increment,
    id_usuario 	int,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);
    
create table tb_usuario_favorito (
	id_usuario_favorito 	int primary key auto_increment,
    id_produto  			int,
    foreign key (id_produto) references tb_produto(id_produto)
);
	
create table tb_produto_avaliacao(
   id_produto_avaliacao 	int primary key auto_increment,
   id_usuario 				int,
   id_produto 				int,
   foreign key (id_usuario) references tb_usuario(id_usuario),
   foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_produto_categoria(
	id_produto_categoria 	int primary key auto_increment,
    id_categoria 			int,
    id_produto 				int,
	foreign key (id_categoria) references tb_categoria(id_categoria),
	foreign key (id_produto) references tb_produto(id_produto)
);


create table tb_produto_image (
      id_produto_image 	int primary key auto_increment,
      id_produto 		int,
      img_produto 		varchar(500),
      foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_pedido (
	id_pedido 			int primary key auto_increment,
	id_USUARIO 			int,
	id_CUPOM 			int,
	dt_PEDIDO 			date,
	COD_NOTA_FISCAL 	varchar(300),
	TP_FRETE 			varchar(300),
	VL_FRETE 			varchar(300),
	DS_STATUS 			varchar(300),
	ds_PAGAMENTO 		varchar (300),
	foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_cupom) references tb_cupom(id_cupom)
);

create table tb_pedido_item (
	id_pedido_item 	int primary key auto_increment,
    id_pedido 		int,
    id_produto 		int ,
    vl_produto 		decimal(10,2),
    foreign key (id_produto) references tb_produto(id_produto),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamento (
	id_pagamento 	int primary key auto_increment,
    id_pedido 		int,
    id_produto 		int,
    foreign key (id_produto) references tb_produto(id_produto),
    foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamento_pix (
	id_pagamento_pix int primary key auto_increment,
    id_pedido 		int,
    ds_chave_pix 	int,
	foreign key (id_pedido) references tb_pedido(id_pedido)
);

create table tb_pagamento_cartao (
ID_PAGAMENTO_CARTAO int primary key auto_increment,  
ID_PEDIDO 				int,
NM_CARTAO 				varchar (300),
NR_CARTAO 				int,
DT_VENCIMENTO 			date,
NR_SEGURANCA 			int, 
NR_PARCELAS 			int,
DS_FORMA_PAGAMENTO 		varchar(100),
foreign key (id_pedido) references tb_pedido(id_pedido)
);

create  table tb_admin_login (
id_admin_login int primary key auto_increment,
id_admin int,
foreign key ( id_admin ) references tb_admin(id_admin)
);

