import React from "react";
import GridList from '@material-ui/core/GridList';
import {StrategyCard} from "./Strategy";
import Box from "@material-ui/core/Box";

export interface HelloProps {
    compiler: string;
    framework: string;
}

interface StrategyDataState {
    strategies: StrategyCard[];
}

export class WPApp extends React.Component<HelloProps, StrategyDataState> {
    constructor(props: HelloProps, state: StrategyDataState) {
        super(props, state);
        this.state = {strategies: []};
    }

    render() {
        return <Box width={"95%"}>
            <GridList cellHeight={400} spacing={10} cols={3}>
                {this.state.strategies.map((item) => {
                    return (item.render());
                })
                }
            </GridList>
        </Box>;
    }

    componentDidMount() {
        fetch('/strategy')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let strategyCards: Array<StrategyCard> = new Array<StrategyCard>();
                for (let strategy of data) {
                    strategyCards.push(new StrategyCard({name: ""}, {strategy}));
                }
                this.setState({strategies: strategyCards});
            }).catch((error) => {
            console.log(error);
            //TODO do something later);
        });
    }
}
