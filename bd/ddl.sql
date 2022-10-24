create  database shintech;

use shintech;

 create table tb_usuario (
 	id_usuario int primary key auto_increment,
    ds_email varchar(50),
    ds_senha varchar(50),
    nm_usuario varchar(25),
    dt_nascimento date
 );

create table tb_usuario_favorito (
	id_usuario_favorito int,
    id_produto  int
);
	
create table tb_produto_avaliacao(
   id_produto_avaliacao int primary key auto_increment,
   id_usuario int,
   id_produto int ,
   foreign key (id_usuario) references tb_usuario(id_usuario)
);

create table tb_produto_categoria(
	id_produto_categoria int primary key auto_increment,
    id_categoria int,
    id_produto int
);

create table tb_produto (
	id_produto int primary key auto_increment,
    id_departamento int,
    id_produto_categoria int,
    nm_produto varchar (300),
    vl_preco_de varchar (300),
    vl_preco_por varchar (300),
    foreign key (id_produto_categoria) references tb_produto_categoria(id_produto_categoria)
);

create table tb_produto_image (
      id_produto_image int primary key auto_increment,
      id_produto int,
      img_produto varchar(100)
);


create table tb_departamento (
	id_departamento int primary key auto_increment,
    nm_departamento varchar (300),
	img_capa varchar (100)
);

create   table td_categoria (
	id_categoria int primary key auto_increment,
    nm_categoria varchar(20)
);

create table tb_pedido_item (
	id_pedido_item int primary key auto_increment,
    id_pedido int,
    id_produto int ,
    vl_produto varchar (300)
);

create table tb_pedido (
	id_PEDIDO int primary key auto_increment,
	id_USUARIO int,
	id_CUPOM int,
	dt_PEDIDO date,
	COD_NOTA_FISCAL varchar (300),
	TP_FRETE varchar (300),
	VL_FRETE varchar (300),
	DS_STATUS int,
	TP_PAGAMENTO varchar (300)
       
);


create table tb_pagamento (
	id_pagamento int primary key auto_increment,
    id_pedido int,
    id_produto int,
    foreign key (id_produto) references tb_produto(id_produto)
);

create table tb_pagamento_pix (
	id_pagamento_pix int primary key auto_increment,
    id_pedido int,
    ds_chave_pix int

);

create table tb_pagamento_cartao (
TB_PAGAMENTO_CARTA0 int primary key auto_increment,  
 ID_PAGAMENTO_CARTAO int, 
 ID_PEDIDO int,
       NM_CARTAO varchar (300),
      NR_CARTAO varchar (300),
      DT_VENCIMENTO date,
      COD_SEGURANCA int, 
      NR_PARCELAS varchar (300),
      DS_FORMA_PAGAMENTO int 
);

create table tb_cupom (
	id_cupom  int primary key auto_increment,
    dt_criacao date,
    vl_desconto int 
);

create  table tb_admin (
	id_admin int primary key auto_increment,
    ds_email 	varchar(50),
    ds_senha 	varchar(50),
    nm_admin 	varchar(25),
    dt_nascimento date
);