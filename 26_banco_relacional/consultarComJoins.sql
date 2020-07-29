select * from prefeitos;
select * from cidades;

-- inner join
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- left join
select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- right join
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- full join
-- select * from cidades c full join prefeitos p on c.id = pcidade_id;

-- simulando full join em mysql
-- com union all ele tras replicações
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union all
select * from cidades c right join prefeitos p on c.id = p.cidade_id;