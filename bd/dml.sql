--- Login do Usuário

SELECT id_usuario       id,
       ds_email         email
FROM TB_USUARIO
WHERE ds_email          ='admin@admin.com.br'
AND   ds_senha          ='admin1234'

INSERT INTO (nm_usuario, ds_email, ds_senha)
     VALUES ('Arthur', 'admin@admin.com.br', 'batatatinhamane');