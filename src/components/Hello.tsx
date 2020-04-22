import React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

interface Strategy {
    _id: object;
    strategyCode: string;
    comment: string;
    impact: string;
    name: string;
    problem: string;
    shortName: string;
    strategy: string;
}

interface StrategyDataState {
    strategies: Array<Strategy>;
}

export class Hello extends React.Component<HelloProps, StrategyDataState> {
    constructor(props: HelloProps, state: StrategyDataState) {
        super(props, state);
        this.state = {strategies: []};
    }

    render() {
        return <h1>
            {this.props.compiler} <br/>
            {this.props.framework} <br/>
            Strategies:
            <ul>
                {this.state.strategies.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </h1>;
    }

    componentDidMount() {
        fetch('/strategy')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let strategyObjects: Array<Strategy> = new Array<Strategy>();
                for (let strategy of data)
                    strategyObjects.push(strategy);
                this.setState({strategies: strategyObjects});
            }).catch((error) => {
            console.log(error);
            //TODO do something later);
        });
    }
}