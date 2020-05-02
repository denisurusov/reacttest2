import React from "react";
import {StrategyCard} from "./strategy/Strategy";
import {Box, GridList} from "@material-ui/core";

export interface StrategyProps {
    compiler: string;
    framework: string;
}

interface StrategyDataState {
    strategies: StrategyCard[];
}

export class WPApp extends React.Component<StrategyProps, StrategyDataState> {
    constructor(props: StrategyProps, state: StrategyDataState) {
        super(props, state);
        this.state = {strategies: []};
    }

    render() {
        return <Box width={"95%"}>
            <GridList cellHeight={350} spacing={10} cols={3}>
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
                //TODO should there be a cast into Strategy interface?
                for (let strategy of data) {
                    strategyCards.push(new StrategyCard({key: strategy._id}, {strategy}));
                }
                this.setState({strategies: strategyCards});
            }).catch((error) => {
            console.log(error);
            //TODO do something later);
        });
    }
}

