import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
  Button,
} from "reactstrap";
import PageTitle from "../../components/PageTitle";
import login from "../../actions/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  return (
    <Container>
      <PageTitle>Login</PageTitle>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormFeedback required>This field is required</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Input
            required
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FormFeedback required>This field is required</FormFeedback>
        </FormGroup>

        <Button
          // disabled={state.auth.loading}
          onClick={() => {
            dispatch(login({ email, password }));
          }}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
