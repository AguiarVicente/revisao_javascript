-- Criando a tabela estados!
create table estados(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sigla VARCHAR(2) NOT NULL,
  regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
  populacao DECIMAL(5, 2) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (nome),
  UNIQUE KEY (sigla)
);

-- descrição dos comando acima
-- id -> tipo inteiro sem sinal não nulo e auto incremental,
-- nome -> tipo string de 45 posições não nula,
-- sigla -> tipo string de 2 posições não nula,
-- regiao -> tipo enumerate com 5 dados não nula,
-- populacao -> tipo float no formato 5.02 não nula,
-- primary key (id) -> chave primária
-- unique key (nome) -> não permite duplicar o valor dos dados
-- unique key (sigla) -> não permite duplicar o valor dos dados
