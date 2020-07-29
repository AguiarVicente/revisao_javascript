-- consulta cidades e estados em comum
select *
from estados e,
  cidades c
where e.id = estado_id;

select *
from cidades;

-- consulta de duas tabelas
select e.nome as Estado,
  c.nome as Cidade,
  regiao as Regiao
from estados e,
  cidades c
where e.id = estado_id;

-- consulta de duas tabelas com inner join
select c.nome as Cidade,
  e.nome as Estado,
  regiao as Regiao
from estados e
  inner join cidades c on e.id = c.estado_id;