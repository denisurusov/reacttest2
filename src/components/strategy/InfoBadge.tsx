import React from 'react';
import {DetailsDialog} from "./Details";
import {AddAlarm} from "@material-ui/icons";
import {blue} from "@material-ui/core/colors";
import {Badge, IconButton} from "@material-ui/core";

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
        this.showDialog = this.showDialog.bind(this);
    }

    dialogRef = React.createRef<DetailsDialog>();

    showDialog() {
        if (this.dialogRef.current)
            if (this.dialogRef.current.isOpen())
                this.dialogRef.current.closeDialog();
            else
                this.dialogRef.current.openDialog();
    }

    render() {
        return <IconButton title={"" + this.state.count} onClick={this.showDialog}>
            <Badge badgeContent={this.state.count} showZero color="secondary" overlap="circle"
                   anchorOrigin={{
                       vertical: 'bottom',
                       horizontal: 'right',
                   }}>
                <AddAlarm style={{color: blue[500], fontSize: 40}}/>
            </Badge>
            <DetailsDialog ref={this.dialogRef} key={'detailsDialog'} code={this.props.code}/>
        </IconButton>
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