import React, { Component } from 'react';
import axios from 'axios';

const hiddenRepositories = [
    'TME-Angular',
    'MIchaelPopeProtfolio',
    'React-Chat-Application',
    'Portfolio-CV',
    'WeatherBLOOM',
    'AutoRepairShop2',
    'autobodyshoptemplate1',
    'January18Portfolio',
    'Church',
    'TMEFinalCopy',
    'NewTme',
    'TME-Website',
    'Portfolio-Page'

]

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            repositories: [],
        }
        this.getGithubRepositories = this.getGithubRepositories.bind(this);
        this.createTable = this.createTable.bind(this);
    }

    componentWillMount() {
        this.getGithubRepositories();
    }

    getGithubRepositories = () => {
        axios.get('https://api.github.com/users/michaelpopedeveloper/repos?sort=created')
            .then(repos => {
                console.log(repos);
                this.setState({ repositories: repos.data });
            })
            .catch(error => console.log(error));
    }

    createTable = (repos) => {
        const myRepositories = repos.filter(repo => {
            if (!hiddenRepositories.includes(repo.name)) return repo;
        });
        return myRepositories.map((repo, i) => {
            if (i < 10) {
                console.log(i);
                return (
                    <tr>
                        <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
                        <td>{repo.description}</td>
                        <td>{repo.language}</td>
                    </tr>
                );
            }
        })
    }

    render() {
        const { repositories } = this.state;
        return (
            <div className="row">
                <div id="projects" className="col d-flex flex-column justify-content-center align-items-center text-left pt-5" style={{ minHeight: '110vh', }}>
                    <h1 style={{ textAlign: 'center' }}>Projects & Software</h1>
                    <table className="uk-table uk-table-middle uk-table-divider" style={{ width: '70%', overflowX: 'auto' }}>
                        <thead>
                            <tr>
                                <th className="uk-width-small">Project Title</th>
                                <th>Description</th>
                                <th>Language</th>
                                {/* <th>Table Heading</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.createTable(repositories)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


