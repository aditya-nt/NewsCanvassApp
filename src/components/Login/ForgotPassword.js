import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Container } from "react-bootstrap"
import Logo from "../../images/NClogo.jpg"


import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      fluid style={{ minHeight: "100vh" }}
    >

      <div className="w-100" style={{ maxWidth: "400px", marginTop : "-100px"  }}>

        <>
          <Card>
            <Card.Body>
            <img className="center mb-4" src={Logo}></img>
              {/* <h2 className="text-center mb-4">Password Reset</h2> */}
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required placeholder="Enter your email ID" />
                </Form.Group>
                <Button disabled={loading} className="w-100 btn btn-secondary mt-2" type="submit">
                  Reset Password
            </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">
                  <h6>Back to login page</h6>
                  </Link>
              </div>
            </Card.Body>
          </Card>
          
        </>
      </div>

    </Container>
  )
}
