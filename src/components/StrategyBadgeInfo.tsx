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
        this.state = {count: 0};
    }

    render() {
        return <Badge badgeContent={this.state.count} showZero color="secondary" overlap="circle" anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}>
            <AddAlarm style={{color: blue[500], fontSize: 40}}/>
        </Badge>
    }

    componentDidMount() {
        fetch('/capabilities?strategyCode=' + this.props.code)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({count: data.capabilities.length})
            }).catch((error) => {
            this.setState({count: 0});
            console.log("Error parsing response:" + error.toString());
            //TODO do something later);
        });
    }
}