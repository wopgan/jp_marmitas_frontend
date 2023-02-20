import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

function Home({data}) {

  const today = moment().format("YYYY-MM-DD");
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/pedidos/')
      .then(response => {
        setPedidos(response.data.filter(pedido => moment(pedido.data).format("YYYY-MM-DD") === today));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  return (

    <div className="row">
      <div className="col-md-12">

        <div className="card">

          <div className="card-header">

            <h3 className="card-title">Pedidos do dia ({moment().format("DD/MM/YYYY")})</h3>

          </div>

          <div className="card-body table-responsive p-0">

            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th> Cliente </th>
                  <th> Data </th>
                  <th> Qnt Marmitas </th>
                  <th> Valor Un Marmita </th>
                  <th> Descrição </th>
                  <th> Total </th>
                  <th> Pago: </th>
                </tr>
              </thead>

              <tbody>
                {pedidos.map(pedido => (
                  <tr>
                    <td>{pedido.cliente_nome}</td>
                    <td>{moment(pedido.data).format("DD-MM-YYYY HH:MM")}</td>
                    <td>{pedido.qnt_marmita}</td>
                    <td>R$ {pedido.valor_marmita}</td>
                    <td>{pedido.descricao}</td>
                    <td>R$ {pedido.total}</td>
                    <td>{pedido.is_pago}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>

  );
}

export default Home;

/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment";

function Home({data}) {

  const formatdate = moment(data).format("DD-MM-YYYY HH:MM")
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/pedidos/')
      .then(response => {
        setPedidos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  return (


    <div className="row">
      <div className="col-md-12">

        <div className="card">

          <div className="card-header">

            <h3 className="card-title">Pedidos do dia</h3>

          </div>

          <div className="card-body table-responsive p-0">

            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th> Cliente </th>
                  <th> Data </th>
                  <th> Qnt Marmitas </th>
                  <th> Valor Un Marmita </th>
                  <th> Descrição </th>
                  <th> Total </th>
                  <th> Pago: </th>
                </tr>
              </thead>

              <tbody>
                {pedidos.map(pedido => (
                  <tr>
                    <td>{pedido.cliente_nome}</td>
                    <td>{formatdate}</td>
                    <td>{pedido.qnt_marmita}</td>
                    <td>R$ {pedido.valor_marmita}</td>
                    <td>{pedido.descricao}</td>
                    <td>R$ {pedido.total}</td>
                    <td>{pedido.is_pago}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>

  );
}

export default Home; */