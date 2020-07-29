INSERT INTO prefeitos (nome, cidade_id) VALUES ('Rodrigo Neves', 5), ('Raquel Lyra', 7), ('Zenaldo Coutinho', NULL);

INSERT INTO prefeitos (nome, cidade_id) VALUES ('Rafael Greca', NULL);

-- inserção não válida - não pode duplicar em cidade
INSERT INTO prefeitos (nome, cidade_id) VALUES ('Rodrigo Pinheiro', 5);

select * from prefeitos;