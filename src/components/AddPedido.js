import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from "react-select";

function AddPedido() {
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [qntMarmita, setQntMarmita] = useState(0);
    const [valorMarmita, setValorMarmita] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [isPago, setIsPago] = useState("");

    useEffect(() => {
    axios.get("http://127.0.0.1:8000/clientes/").then((response) => {
        const options = response.data.map((cliente) => ({
        value: cliente.id,
        label: cliente.nome,
        }));
        setClientes(options);
    });
    }, []);

    const limparCampos = () => {
        setClienteSelecionado(null);
        setQntMarmita(0);
        setValorMarmita(0);
        setDescricao("");
        setIsPago("");
      };

    const handleSubmit = (event) => {
    event.preventDefault();
    const pedido = {
        cliente: `http://127.0.0.1:8000/clientes/${clienteSelecionado.value}/`,
        qnt_marmita: qntMarmita,
        valor_marmita: valorMarmita,
        descricao: descricao,
        is_pago: isPago,
    };
    axios.post("http://127.0.0.1:8000/pedidos/", pedido).then((response) => {
        console.log(response.data);
        alert("Pedido feito com sucesso!")
        limparCampos();
    });
    };

    return (

        <div className="row">
            <div className="col-md-12">

                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Cadastro Pedido</h3>
                    </div>
                </div>

            <form onSubmit={handleSubmit}>

                <div className="card-body bg-secondary">

                <label>
                    Cliente:
                </label>
                    <Select
                    options={clientes}
                    value={clienteSelecionado}
                    onChange={setClienteSelecionado}
                    />
                <br />

                <label>
                    Quantidade de marmitas:
                </label>

                <input
                    className="form-control bg-dark"
                    type="number"
                    value={qntMarmita}
                    onChange={(event) => setQntMarmita(event.target.value)}
                />
                <br />

                <label>
                    Valor unitário da marmita:
                </label>
                <input
                    className="form-control bg-dark"
                    type="number"
                    value={valorMarmita}
                    onChange={(event) => setValorMarmita(event.target.value)}
                />
                <br />

                <label>
                    Descrição:
                </label>

                <input
                    className="form-control bg-dark"
                    type="text"
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />
                <br />
                <label>
                    Pago?
                </label>
                    <select value={isPago} onChange={(event) => setIsPago(event.target.value)}>
                    <option value="s">Sim</option>
                    <option value="n">Não</option>
                    </select>
                <br />

                <div className="card-footer">
                    <button type="submit" className="btn btn-success">Fazer Pedido</button>
                </div>

                </div>

            </form>
            </div>

        </div>
    );
    }

export default AddPedido;