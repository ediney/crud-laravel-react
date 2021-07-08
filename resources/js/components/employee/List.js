import React, { Component } from 'react';

function List(){
  return (
    <section>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Endereço</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Fulano de Tal</td>
            <td>fulano@example.com</td>
            <td>Cuiaba MT</td>
            <td>3101111111</td>
            <td>
              <a href="#" class="btn btn-light"> Editar </a>
              <a href="#" class="btn btn-danger"> Excluir </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Sicrano de Tal</td>
            <td>sicrano@example.com</td>
            <td>Varzea Grande MT</td>
            <td>3101111111</td>
            <td>
              <a href="#" class="btn btn-light"> Editar </a>
              <a href="#" class="btn btn-danger"> Excluir </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Beltrano de Tal</td>
            <td>beltrano@example.com</td>
            <td>Chapada dos Guimarães MT</td>
            <td>3101111111</td>
            <td>
              <a href="#" class="btn btn-light"> Editar </a>
              <a href="#" class="btn btn-danger"> Excluir </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default List;
