import React from 'react'
import Label from '../Label'

class NovoUsuario extends React.Component {
  render() {
    return(
      <div className="center">
        <form>
            <Label htmlFor="Nome" texto="Quem é você?" />
        </form>
      </div>
    );
  }
}

export default NovoUsuario;