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
    isLoaded: boolean;
    rawJson: string
}

export class Hello extends React.Component<HelloProps, StrategyDataState> {
    constructor(props: HelloProps, state: StrategyDataState) {
        super(props, state);
        this.state = state;
    }

    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework} and {this.state.rawJson} !</h1>;
    }

    componentDidMount() {
        fetch('/strategy')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let strategies: Array<Strategy> = data;
                for (let strategy of strategies)
                    console.log(strategy.name);
                this.setState({isLoaded: true, rawJson: "yay"});
            }).catch((error) => {
            this.setState({isLoaded: true, rawJson: error.toString()});
        });
    }
}