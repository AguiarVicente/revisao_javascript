-- cria uma tabela se ela não existir
CREATE TABLE IF NOT EXISTS cidades (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  estado_id INT UNSIGNED NOT NULL,
  area DECIMAL(10, 2),
  PRIMARY KEY (id),
  FOREIGN KEY(estado_id) REFERENCES estados (id)
);

-- cria uma tabela se ela não existir
-- CREATE TABLE IF NOT EXISTS teste (
--   id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

-- delete uma tabela se ela existir
-- DROP TABLE IF EXISTS teste;