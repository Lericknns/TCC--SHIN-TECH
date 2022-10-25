use shintech;

insert into tb_usuario ( 
	ds_email,
    ds_senha,
    nm_usuario,
    dt_nascimento)
    value ("NICHOLAS@gmail.com", 'dener', 'leandro', "2005-11-11");
    
    insert into tb_login (	
    id_usuario ,
    ds_email ,
    ds_senha)
    value ('1', 'trindadesouzadenner@gmail.com' , "14233221" );
    
    
    insert into tb_favorito (
    id_usuario_favorito,
    id_produto,
    
    value ('');