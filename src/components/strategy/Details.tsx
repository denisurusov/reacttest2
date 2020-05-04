import React from 'react';

import {
    AppBar,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    DialogContent,
    GridList,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {blue} from "@material-ui/core/colors";
import {Capability} from "../../data/capability";

interface DialogState {
    status: boolean;
    capabilities?: Capability[];
}

interface DialogProps {
    code: string,
    name: string
}

export class DetailsDialog extends React.Component<DialogProps, DialogState> {

    constructor(props: DialogProps, state: DialogState) {
        super(props, state);
        this.state = {status: false};
        //
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
        //not sure if there's an advantage in making this a callback for setState()
        this.loadData();
    }

    public isOpen(): boolean {
        return this.state.status;
    };

    render() {
        return <Dialog fullScreen open={this.state.status}>
            <AppBar position={'relative'}>
                <Toolbar style={{fontSize: 24, background: blue [500]}}>
                    <IconButton color="inherit" onClick={this.closeDialog} aria-label="Close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Strategy: {this.props.name} ({this.props.code}) - capabilities list with workstreams
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden'
            }}>
                <GridList spacing={50} cols={2} style={{width: 'min-content'}}>
                    {this.state.capabilities?.map((item) => {
                        return <Card key={item._id.toString()} raised={true} style={{width: 'min-content'}}>
                            <CardHeader
                                title={item.name}
                                subheader={'Capability to ' + item.capability}
                            />
                            <CardContent>
                                <List>
                                    {item.tracks?.map((track) => {
                                        return <ListItem><ListItemText primary={track.name}/></ListItem>
                                    })}
                                </List>
                            </CardContent>
                        </Card>
                    })}
                </GridList>
            </DialogContent>
        </Dialog>
    }

    loadData() {
        fetch('/capabilities?strategyCode=' + this.props.code)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({capabilities: data.capabilities});
            }).catch((error) => {
            console.log("Error parsing response:" + error.toString());
            //TODO do something later);
        });
    }
}