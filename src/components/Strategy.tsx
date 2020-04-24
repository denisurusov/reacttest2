import React from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import {styled} from '@material-ui/core/styles';

const MyTypography = styled(Typography)({
    title: {
        fontSize: 14,
    },
});

interface StrategyCardProps {
    name: string,
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
        return <GridListTile>
            <Card raised={true}>
                <CardContent>
                    <Box height={350}>
                        <MyTypography color="textSecondary" gutterBottom>
                            {this.state.strategy.shortname.toUpperCase()}:{this.state.strategy.name}
                        </MyTypography>
                        <MyTypography variant="body2">
                            <h5>Problem</h5> {this.state.strategy.problem}
                        </MyTypography>
                        <Typography variant="body2" component="p">
                            <h5>Impact</h5> {this.state.strategy.impact}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <h5>Strategy</h5> {this.state.strategy.strategy}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </GridListTile>;
    }
}