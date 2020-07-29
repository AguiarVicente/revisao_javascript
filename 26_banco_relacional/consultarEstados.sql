-- consulta todas as colunas da tabela estados
SELECT * FROM estados;

-- consulta nome com 'Nome do estado' e sigla da tabela estado
SELECT nome AS 'Nome do Estado', sigla FROM estados;

-- consulta nome e sigla onde a regiao é sul
SELECT nome AS 'Nome do Estado', sigla FROM estados WHERE regiao = 'sul';

-- consulta nome e sigla onde populacao é maior que 10
SELECT nome AS 'Nome do Estado', sigla FROM estados WHERE populacao >= 10;

-- consulta nome e sigla onde populacao é maior que 10 em ordem creacente
SELECT nome AS 'Nome do Estado', sigla FROM estados WHERE populacao >= 10 order by populacao;

-- consulta nome e sigla onde populacao é maior que 10 em ordem decreacente
SELECT nome AS 'Nome do Estado', sigla FROM estados WHERE populacao >= 10 order by populacao desc;