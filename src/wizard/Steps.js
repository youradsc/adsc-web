import { Button, Grid} from 'semantic-ui-react';
import { states } from './States.js';

export const Welcome = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Do you already sell products on Amazon?</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.AMZN)}>Yes</Button>
        <Button primary onClick={() => props.no(states.AUTO)}>No</Button>
      </Grid.Column>
    </Grid>
  );
}

export const Amzn = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Are you interested in your store being fully re-done and managed for you and selling products we choose?</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.AUTO)}>Yes</Button>
        <Button primary onClick={() => props.no(states.FULFIL)}>No</Button>
      </Grid.Column>
    </Grid>
  );
}

export const Auto = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Here is our main product.</p>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.WELCOME)}>Return Home</Button>
      </Grid.Column>
    </Grid>
  );
}

export const Fulfil = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Do you need help with fulfillment of orders?</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.CS)}>Yes</Button>
        <Button primary onClick={() => props.no(states.PR)}>No</Button>
      </Grid.Column>
    </Grid>
  );
}

export const PR = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Do you need help with product research?</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.CS)}>Yes</Button>
        <Button primary onClick={() => props.no(states.SOP)}>No</Button>
      </Grid.Column>
    </Grid>
  );
}

export const SOP = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Please answer a few questions so we can choose the right solution for you!</p>
      <p>Do you need help selling your own products?</p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.CS)}>Yes</Button>
        <Button primary onClick={() => props.no(states.M)}>No</Button>
      </Grid.Column>
    </Grid>
  );
}

export const CS = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Thank you for completeing our Wizard!</p>
      <p>The service you requested will be coming soon. </p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <Button primary onClick={() => props.yes(states.WELCOME)}>Return Home</Button>
        <Button primary onClick={() => props.no(states.FULFIL)}>Explore our Current Service</Button>
      </Grid.Column>
    </Grid>
  );
}

export const M = (props) => {
  return(
    <Grid>
      <p>Welcome to Your ADSC! Thank you for completeing our Wizard!</p>
      <p>Please let us know what service you would like us to bring to you! </p>
      <Grid.Column floated='left' width={5}>
      </Grid.Column>
      <Grid.Column floated='right' width={5}>
        <input type="text"/>
        <Button primary onClick={() => props.yes(states.WELCOME)}>Submit Request</Button>
        <Button primary onClick={() => props.no(states.AUTO)}>Explore our Current Service</Button>
      </Grid.Column>
    </Grid>
  );
}

