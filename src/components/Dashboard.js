import React, { useState } from "react"
import { Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { Container } from "reactstrap"
export default function Dashboard() {
    const[error, setError] = useState("")
    const history = useHistory()


    return (
        <>
                <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Momentwala Photo Gellary</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h3><strong>Your Email Address: </strong> Now you can visite all page of Momentwala</h3>
                    <Link to="/menu" className="btn btn-primary w-100 mt-3">
                        View Random Photo
                    </Link>
                </Card.Body>
            </Card>
          
            </div>
            </Container>
        </>
    )
}
