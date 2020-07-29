-- atualiza o campo dcom a sigla 'MA'
UPDATE estados SET nome = 'Maranhão' WHERE sigla = 'MA';

SELECT nome FROM estados WHERE sigla = 'MA';

-- atualiza dois campos simultaneamente 
UPDATE estados set nome = 'Paraná', populacao = 11.32 WHERE sigla = 'PR';

SELECT nome, sigla, populacao FROM estados WHERE sigla = 'PR';