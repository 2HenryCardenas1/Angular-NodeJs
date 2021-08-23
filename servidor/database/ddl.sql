create table rol(
codrol int not null AUTO_INCREMENT,
nombrerol varchar(500) not null,
PRIMARY KEY(codrol)
 );

CREATE TABLE usuario (
codusuario INT NOT NULL AUTO_INCREMENT,
codrol INT NOT NULL,
correo varchar(200) NOT NULL,
clave varchar(150) NOT NULL,
PRIMARY KEY(codusuario)
);

CREATE UNIQUE INDEX ind_correo ON usuario(correo);

ALTER TABLE usuario ADD CONSTRAINT fk_usuario_rol
FOREIGN KEY (codrol) REFERENCES rol(codrol)
ON DELETE RESTRICT
ON UPDATE CASCADE;
