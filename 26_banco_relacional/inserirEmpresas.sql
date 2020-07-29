-- altera a tabela
ALTER TABLE empresas
MODIFY cnpj VARCHAR(14);
INSERT INTO empresas (nome, cnpj)
VALUES ('Bradesco', 95694186000132),
  ('Vale', 27887148000146),
  ('Cielo', 01598317000134);
-- descreve a tabela
DESC empresas;
select *
from empresas;
select *
from cidades;
INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES (1, 4, 1),
  (1, 2, 0),
  (2, 4, 0),
  (2, 5, 1);