import React, { Component } from 'react';

function Form(){
  return(
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nome do funcionário</label>
          <input type="text" class="form-control" placeholder="Nome" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">E-mail</label>
          <input type="email" class="form-control" placeholder="nome@example.com" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Endereço</label>
          <input type="text" class="form-control" placeholder="Rua..." />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone">Telefone </label>
          <input type="text" class="form-control" placeholder="123467890" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
					<label for="phone">Rol </label>
					<select id="inputState" class="form-control" onChange={(event)=> this.setState({selectJob:event.target.value})}>
             <option selected>Selecione...</option>
             <option>Admin</option>
             <option>Dev</option>
             <option>Tester</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit">Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
