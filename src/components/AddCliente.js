import React, { useState } from 'react';
import axios from 'axios';

function AddCliente() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEnderecoChange = (event) => {
        setEndereco(event.target.value);
    };

    const handleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/clientes/', {
            nome,
            endereco,
            telefone,
        })
            .then((response) => {
                console.log(response.data);
                setNome('');
                setEndereco('');
                setTelefone('');
                alert("Cadastro realizado com sucesso!")

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="row">
            <div className="col-md-12">

                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Cadastro Cliente</h3>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="card-body bg-secondary">
                        <label htmlFor="nome">Nome:</label>
                        <input className="form-control bg-dark" type="text" id="nome" value={nome} onChange={handleNomeChange} />

                        <label htmlFor="endereco">Endereço:</label>
                        <input className="form-control bg-dark" type="text" id="endereco" value={endereco} onChange={handleEnderecoChange} />

                        <label htmlFor="telefone">Telefone:</label>
                        <input className="form-control bg-dark" type="text" id="telefone" value={telefone} onChange={handleTelefoneChange} />
                        
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">Cadastrar</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    );
}

export default AddCliente;