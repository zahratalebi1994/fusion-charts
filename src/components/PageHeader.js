import React from 'react';
import {Container, Grid, Card, Header} from "semantic-ui-react";

class PageHeader extends React.Component{
    render() {
        return (
            <div>
                <Container fluid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Card fluid>
                                    <Header textAlign="center" className="my-1"> Payam Pardaz Project</Header>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default PageHeader;