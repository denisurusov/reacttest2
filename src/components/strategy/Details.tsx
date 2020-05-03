import React from 'react';

import {Dialog, DialogContent, DialogTitle, Typography} from '@material-ui/core';

interface DialogState {
    status: boolean;
}

interface DialogProps {
    code: string,
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
        return <Dialog aria-labelledby="customized-dialog-title" open={this.state.status}>
            <DialogTitle disableTypography={true}
                         style={{display: 'flow', justifyContent: 'right', alignItems: 'top'}}>
                Strategy {this.props.code}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
            </DialogContent>
        </Dialog>
    }

    //
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