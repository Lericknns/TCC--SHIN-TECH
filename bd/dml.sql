use shintech;

insert into tb_usuario ( 
	ds_email,
    ds_senha,
    nm_usuario,
    dt_nascimento)
    value ("NICHOLAS@gmail.com", 'dener', 'leandro', "2005-11-11");
    
    insert into tb_login(	
    id_usuario ,
    ds_email ,
    ds_senha)
    value ('1', 'trindadesouzadenner@gmail.com' , "14233221" );
    
    insert into tb_produto_avaliacao (
    id_usuario,
    id_produto)
    value (1,1);
    
    insert into tb_produto (
    id_departamento,
    id_produto_categoria,
    nm_produto ,
    vl_preco_de ,
    vl_preco_por 
    )
    value(1,2,'dark souls',144.50,70.99);
    
    insert into tb_departamento(
    nm_departamento,
	img_capa)
    value('midway','cap midway');
    
    insert into tb_pedido_item( 
    id_pedido,
    id_produto,
    vl_produto
    )
    value(1,1,70.99);
    
   insert into tb_pagamento(
     id_pedido,
    id_produto )
    
    value(1,12);
    
    insert into tb_pagamento_cartao (
    ID_PAGAMENTO_CARTAO, 
	ID_PEDIDO ,
	NM_CARTAO,
	NR_CARTAO,
	DT_VENCIMENTO ,
	COD_SEGURANCA, 
	NR_PARCELAS,
	DS_FORMA_PAGAMENTO)
    
    value(1,5,'nubank',14233221,2023-04-01,4123,10,'credito');
    
    insert into tb_admin(
    ds_email,
    ds_senha,
    nm_admin,
    dt_nascimento)
    
    value('gerakleandro@gmail.com',14233221,'srguts',2005-08-07);
    
     insert into tb_usuario_favorito (
    id_usuario , 
    id_produto)
    
    value ('2',' MortalKombat ');
    
  insert into tb_categoria (
    nm_categoria)
  
   value ('terror');
   
   insert into tb_produto_image (
	id_produto ,
	img_produto )
    
    value (1 , 'cap');
    
    insert into tb_produto_categoria(
	id_categoria,
    id_produto )
    
    value 
   ( 1, 'sekiro');
   
   insert into  tb_pedido (

	id_USUARIO,
	id_CUPOM,
      dt_PEDIDO,
      COD_NOTA_FISCAL,
      TP_FRETE,
      VL_FRETE,
      DS_STATUS,
       TP_PAGAMENTO)
       
 value ( 1, 1, now(), 1212, 'teste','teste', 1, 'teste');
 
 select * from tb_pedido;
 
 
insert into tb_pagamento_pix (

id_pedido,
    ds_chave_pix )
    
value (1, 402289212 );
    
insert into tb_cupom(

    dt_criacao,
    vl_desconto )

value ( 2022-02-03, 15,00);


insert into tb_admin_login (

    id_admin,
    ds_email,
	ds_senha )
	
    value (1,'1leandro123@reidelasl.com', 40228934);
 
 
 

   