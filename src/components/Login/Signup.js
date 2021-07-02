import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Container } from "react-bootstrap"
import {firebase} from "../../firebase"
import Logo from "../../images/NClogo.jpg"


import {  useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()
  const passwordConfirmRef = useRef()
  // const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function showLogin(){
    history.push("/login")
  }


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      // await signup(emailRef.current.value, passwordRef.current.value)

      await firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((userCredentials) => {
          if (userCredentials.user) {
            userCredentials.user.updateProfile({
              displayName: nameRef.current.value
            }).then((s) => {
              history.push("/")              
            })
          }
        })
        .catch(function (error) {
          alert(error.message);
        });
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
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
            <img className="center mb-4" src={Logo}></img>
              {/* <h2 className="text-center mb-4">Sign Up</h2> */}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 btn-secondary mt-2" type="submit">
                  Sign Up
            </Button>
              </Form>
            </Card.Body>
            <hr/>
          
            <div className="w-100 text-center mt-2">
            <h6>Already have an account? </h6> 
            {/* <Link to="/login"><h6>Log In</h6></Link> */}
            <Button disabled={loading} className="w-50 btn btn-dark mt-2" type="submit" onClick={showLogin}>
                  <text className="font">Log In</text>
              </Button>
          </div>
          <br/>
          </Card>
          
        </>
      </div>

    </Container>
  )
}
