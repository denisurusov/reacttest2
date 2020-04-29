import React from "react";
import Box from '@material-ui/core/Box';
import {Avatar, Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import {blue, lime} from '@material-ui/core/colors';
import {BadgeInfoCard} from './StrategyBadgeInfo';

interface StrategyCardProps {
    key: string,
}

export interface Strategy {
    _id: object;
    code: string;
    comment: string;
    impact: string;
    name: string;
    problem: string;
    shortname: string;
    strategy: string;
}

interface StrategyDataState {
    strategy: Strategy;
}

export class StrategyCard extends React.Component<StrategyCardProps, StrategyDataState> {

    constructor(props: StrategyCardProps, state: StrategyDataState) {
        super(props, state);
        this.state = state;
    }

    render() {
        return <GridListTile key={this.props.key}>
            <Card raised={true}>
                <Box height={30}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" variant="rounded"
                                    style={{color: lime[500], fontSize: 24, background: blue [500]}}>
                                {this.state.strategy.code.toUpperCase()}
                            </Avatar>
                        }
                        action={<BadgeInfoCard code={this.state.strategy.code}/>}
                        title={this.state.strategy.shortname.toUpperCase()}
                        subheader={this.state.strategy.name}
                    />
                </Box>
                <Box height={300}>
                    <CardContent>
                        <h5>Problem<br/>
                            <Typography variant="caption"
                                        color="textSecondary">{this.state.strategy.problem}</Typography>
                        </h5>
                        <h5>Impact<br/>
                            <Typography variant="caption"
                                        color="textSecondary">{this.state.strategy.impact}</Typography>
                        </h5>
                        <h5>Strategy<br/>
                            <Typography variant="caption"
                                        color="textSecondary">{this.state.strategy.strategy}</Typography>
                        </h5>
                    </CardContent>
                </Box>
            </Card>
        </GridListTile>;
    }
}