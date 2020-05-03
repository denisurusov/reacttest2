import React from 'react';

import {AppBar, Dialog, DialogContent, Toolbar, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {blue} from "@material-ui/core/colors";

interface DialogState {
    status: boolean;
}

interface DialogProps {
    code: string,
    name: string
}

export class DetailsDialog extends React.Component<DialogProps, DialogState> {

    constructor(props: DialogProps, state: DialogState) {
        super(props, state);
        this.state = {status: false};
        this.closeDialog = this.closeDialog.bind(this);
    }

    public closeDialog() {
        this.setState(() => ({
            status: false
        }));
    }

    public openDialog() {
        this.setState(() => ({
            status: true
        }));
    }

    public isOpen(): boolean {
        return this.state.status;
    };

    render() {
        return <Dialog aria-labelledby="customized-dialog-title" fullScreen open={this.state.status}>
            <AppBar>
                <Toolbar style={{fontSize: 24, background: blue [500]}}>
                    <IconButton color="inherit" onClick={this.closeDialog} aria-label="Close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Strategy: {this.props.name} ({this.props.code}) - detailed view
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
            </DialogContent>
        </Dialog>
    }

    componentDidMount() {
        // fetch('/capabilities?strategyCode=' + this.props.code)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         this.setState({count: data.capabilities.length})
        //     }).catch((error) => {
        //     this.setState({count: 0});
        //     console.log("Error parsing response:" + error.toString());
        //     //TODO do something later);
        // });
    }
}