import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
  state = {
    data: [
      {
        nama: 'Apel',
        warna: 'merah',
        desc: 'Rasanya manis dan Maknyus'
      },
      {
        nama: 'Mangga',
        warna: 'Hijau',
        desc: 'Rasanya Kecut enak untuk rujak'
      },
      {
        nama: 'Bengkoang',
        warna: 'putih',
        desc: 'Rasanya manis dan lezat'
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Nama - Nama Buah</h1>
        <ul>
          {this.state.data.map((datum, key) => {
            return (
              <Link
                to={{
                  pathname: `/detail/${datum.nama}`,
                  query: {
                    nama: datum.nama,
                    warna: datum.warna,
                    desc: datum.desc
                  }
                }}>
                <li>{datum.nama}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
