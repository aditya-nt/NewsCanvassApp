import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Row, Col , Image } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import Logo from "../../images/NClogo.jpg"
import {firebase} from "../../firebase"
import GoogleLogin from "./GoogleLogin"



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const [modalVisible, setModalVisible] = useState(false)


  async function handleSubmit(e) {



    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  const handleSignUp = () => {
    history.push("/signup")

  }


  function handleHome() {
    history.goBack()
}
  

  return (

    <Container
      className="d-flex align-items-center justify-content-center"
      fluid style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>

        <>
          <Card>
            <Card.Body>
              <img className="center mb-4" src={Logo} onClick={handleHome}></img>
              {/* <h2 className="text-center mb-4">Log In</h2> */}<hr />
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required placeholder="Enter email ID" />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required placeholder="Enter password" />
                </Form.Group>
                <Button disabled={loading} className="w-100 btn btn-secondary mt-2" type="submit">
                  <text className="font">Log In</text>
              </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password"><h6>Forgot Password?</h6></Link>
              </div>

             
            </Card.Body>
            {/* <Row><Col xs={12} md={12}>
              <h6 className="text-center mb-4">Or sign in using</h6>

            </Col>

            </Row>
            <Row>

            <GoogleLogin/>
            </Row> */}

            <hr />


            <div className="w-100 text-center mt-2">


              <h6>Don't have an account?</h6>
              <Button disabled={loading} className="w-50 btn btn-dark mt-2" type="submit" onClick={handleSignUp}>
                  <text className="font">Sign Up</text>
              </Button>
            </div>
            <br />
          </Card>
        </>
      </div>

      {/* <h6 className="text-center mb-4">Or sign in with:</h6><br/><br/> */}

    </Container>
  )
}
