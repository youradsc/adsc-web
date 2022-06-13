import React from 'react';
import axios from 'axios';

export class Dashboard extends React.Component {
  state = {
    temps: []
  }

  componentDidMount() {
    axios.get("https://ilujm74uca.execute-api.us-east-1.amazonaws.com/default/Get_Price_Range_Product?start=0&end=20")
      .then(res => {
        const temps = res.data;
        console.log(res)
        this.setState({ temps });
        console.log(this.state)
      })
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>PC</th>
              <th>PM</th>
              <th>SAT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.temps.map(item=>(
              <tr key={item.id}>
                <td key={1}>{item.id}</td>
                <td key={2}>{item.pc}</td>
                <td key={3}>{item.pm}</td>
                <td key={3}>{item.sat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  }
}