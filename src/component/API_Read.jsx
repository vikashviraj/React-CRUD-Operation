import React, { Component } from 'react';
import axios from "axios";
import '../App.css';

class API_Read extends Component {
    constructor() {
        super();
        this.state = {
            country: []
        }
    }
    //lifecycle
    componentDidMount() {
        let url = "https://restcountries.eu/rest/v2/all";

        axios.get(url).then(
            (res) => {
                this.setState({ country: res.data });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="read">
                <table width="100%" className="text-light text-center">
                    <thead>
                        <th>SNO.</th>
                        <th>Flag</th>
                        <th>Country Code</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                    </thead>
                    <tbody>
                        {
                        this.state.country.map((ele, i)=>(
                            <tr>
                                <td>{i+1}</td>
                                <td><img height="25" src={ele.flag} alt={ele.name} /></td>
                                <td>{ele.callingCodes}</td>
                                <td>{ele.name}</td>
                                <td>{ele.capital}</td>
                                <td>{ele.population}</td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default API_Read;