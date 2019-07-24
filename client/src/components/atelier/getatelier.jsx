import React, { Component } from 'react';
import axios from 'axios';


export default class Tableau extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };
        
    }
    componentDidMount() {
       
        axios.get('http://localhost:8080/atelier')
            .then(response => {
                console.log('produit tableau :', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
           
    }

    liste() {
        return <div>
            <div>
                    <h4 id="h4tableau">Votre(s)  atelier(s)  recent(s)</h4>
                <table className="table table-striped table-bordered" id="table">
                    <thead>
                        <tr>
                            <th className="thtab">Images</th>
                            <th className="thtab">Nom</th>
                            <th className="thtab">Description</th>
                            <th className="thtab">Date</th>
                            <th className="thtab">horaire de debut</th>
                            <th className="thtab">Durée</th>
                            <th className="thtab">place disponible</th>
                            <th className="thtab">place reservé</th>
                            <th className="thtab">Prix</th>
                            <th className="thtab">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    <td><img id="imagetab" width="100px" height="90px" src={'http://localhost:8080/atelier/'+obj.photo_produit} alt={obj.photo_produit}/></td>
                                    <td>{obj.titre}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.date}</td>
                                    <td>{obj.horaire}</td>
                                    <td>{obj.duree}</td>
                                    <td>{obj.place_dispo}</td>
                                    <td>{obj.place_reserve}</td>
                                    <td>{obj.prix}  €</td>
                                    <td>
                                    <button type="submit" className="btn btn-success" id="inscrire-btn">Modifier</button></td>
                                    
                                </tr>
                            })) : ('Aucun atelier a ajouter')
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}