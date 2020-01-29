import React from "react"
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import CardTitle from "reactstrap/es/CardTitle";

const NotFound = ({ history }) => (
  <Card>
    <CardHeader>404 Page Not Found</CardHeader>
    <CardBody>
      <CardTitle>Do not worry we will take you back.</CardTitle>
      <Button size="small" color="primary" onClick={() => history.push("/")}>
        Go Home
      </Button>
    </CardBody>
  </Card>
);

export default NotFound
