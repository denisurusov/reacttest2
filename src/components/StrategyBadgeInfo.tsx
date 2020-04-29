import React from 'react';
import AddAlarm from "@material-ui/icons/AddAlarm";
import {blue} from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";

interface BadgeDataState {
    count: number;
}

interface BadgeProps {
    code: string,
}

export class BadgeInfoCard extends React.Component<BadgeProps, BadgeDataState> {

    constructor(props: BadgeProps, state: BadgeDataState) {
        super(props, state);
        this.state = state;
    }

    render() {
        return <Badge badgeContent={this.props.code} color="secondary" overlap="circle" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}>
            <AddAlarm style={{color: blue[500], fontSize: 40}}/>
        </Badge>
    }

    // componentDidMount() {
    //     fetch('/capabilities?strategyCode'+ this.state.strategy.code)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             this.setSt
    //             console.log (data);
    //         }).catch((error) => {
    //         console.log(error);
    //         //TODO do something later);
    //     });
    // }
}