use shintech;

insert into tb_usuario ( 
	ds_email,
    ds_senha,
    nm_usuario,
    dt_nascimento)
    value ("NICHOLAS@gmail.com", 'dener', 'leandro', "2005-11-11");
    select * from tb_usuario;
    
    insert into tb_login (	
    id_usuario ,
    ds_email ,
    ds_senha)
    value ('1', 'trindadesouzadenner@gmail.com' , "14233221" );
    
    
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
 
 
 

   