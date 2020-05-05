import React from 'react';

import {
    AppBar,
    Box,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
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
            <Box component='div' style={{
                width: 'auto',
                height: 'auto',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateRows: 'auto',
                gridTemplateColumns: 'auto auto auto',
                padding: '10px',
                gridGap: '10px',
                overflow: 'auto'
            }}>
                {this.state.capabilities?.map((item) => {
                    return <Card key={item._id.toString()} raised={true}
                                 style={{width: 'max-content', height: '200', overflow: 'auto'}}>
                        <CardHeader
                            title={item.name}
                            subheader={'Capability to ' + item.capability}
                        />
                        <CardContent style={{height: 'min-content', padding: '5'}}>
                            <Typography variant="h6" color="inherit">Tracks
                                ({item.tracks?.length})</Typography>
                            <List style={{padding: '0'}}>
                                {item.tracks?.map((track) => {
                                    return <ListItem style={{padding: '0'}}>
                                        <ListItemIcon>
                                            <SendIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={track.name} style={{fontSize: '12', padding: '0'}}/>
                                    </ListItem>
                                })}
                            </List>
                        </CardContent>
                    </Card>
                })}
            </Box>
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