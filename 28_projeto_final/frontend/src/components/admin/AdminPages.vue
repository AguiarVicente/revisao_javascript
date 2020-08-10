<template>
  <div class="admin-page">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastro & Cia" />
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Artigos" active>
            <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias">
            <CategoryAdmin />
          </b-tab>
          <b-tab title="Usuários">
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ArticleAdmin from './ArticleAdmin'
import UserAdmin from './UserAdmin'
import CategoryAdmin from './CategoryAdmin'
import PageTitle from '../template/PageTitle'
export default {
  name: 'AdminPages',
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>