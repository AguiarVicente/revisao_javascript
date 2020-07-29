-- consulta agregada por regiao e soma da populacao por grupo regiao e ordenacao decrescente
SELECT regiao AS 'Região', SUM(populacao) AS Total FROM estados GROUP BY regiao ORDER BY Total desc;

-- soma da populacao
SELECT SUM(populacao) AS Total FROM estados;

-- media da populacao
SELECT AVG(populacao) AS Total FROM estados;