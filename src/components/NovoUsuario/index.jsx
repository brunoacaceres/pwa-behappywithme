import React from 'react'
import Label from '../Label'
import Input from '../Input'

class NovoUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeInvalido: true
    };
  }
  render() {
    return(
      <div className="center">
        <form className="pure-form pure-form-stacked">
            <Label
              htmlFor="Nome"
              texto="Quem é você?"
              valorInvalido={this.state.nomeInvalido}
            />
            <Input
              id="nome"
              placeholder="Digite seu nome"
              //maxLenght="40"
              readOnly={false}
              valorInvalido={this.state.nomeInvalido}
              defaultValue="Bruno"
            />
        </form>
      </div>
    );
  }
}

export default NovoUsuario;
