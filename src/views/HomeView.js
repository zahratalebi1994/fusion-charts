import React from 'react';
import {Container, Grid, Card} from "semantic-ui-react";
import PageHeader from '../components/PageHeader'

class HomeView extends React.Component{
    render() {
        return (
            <div>
                <PageHeader/>
                <Container className="top-gap">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Card fluid raised link href="/attack-frequency" className="py-3">
                                    <Card.Content textAlign="center">
                                        <h4 className="text-black">Attack Frequncy</h4>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card fluid raised link href="/attack-sources-map" className="py-3">
                                    <Card.Content textAlign="center">
                                        <h4 className="text-black">Attack Sources Map</h4>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card fluid raised link href="/top-victim-servers" className="py-3">
                                    <Card.Content textAlign="center">
                                        <h4 className="text-black">Top Victim Servers</h4>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card fluid raised link href="/#" className="py-3">
                                    <Card.Content textAlign="center">
                                        <p className="text-grey">Add New Chart ...</p>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default HomeView;