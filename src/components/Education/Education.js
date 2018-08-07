import React from "react"
import { Grid, Container, Segment, Header, Transition } from "semantic-ui-react"

import "./education.styl"

const Education = ({ company, spanTime, jobTitle, inCharge }) => (
  <React.Fragment>
    <Container>
      <Transition
        animation="fade left"
        transitionOnMount={true}
        duration={1000}
      >
        <Grid columns="equal" className="education-column" divided>
          <Grid.Row stretched centered>
            <Grid.Column>
              <Segment size="small" basic>
                <Header as="h3">{company}</Header>
                <br /> {spanTime}
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment basic>
                <Header as="h2">{jobTitle}</Header>
              </Segment>
              <Segment className="education-charge" basic>
                {inCharge}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Transition>
    </Container>
  </React.Fragment>
)

export default Education