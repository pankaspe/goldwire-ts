import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import heroImg from "../public/hero.svg";
import logo from "../public/logo.jpg";

import { useState } from "react";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setMessage("")
    setClassName("")
  }

  const handleSubmit = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Email non valida!");
      setClassName("error");
      return;
    }
    const res = await fetch('/api/subscriber/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json()
    if (data.error) {
      setMessage("Email già presente nella lista di attesa!");
      setClassName("error");
    } else {
      setMessage("Email inserita nella lista di attesa!");
      setClassName("success");
    }
  }

  return (
    <>
      <Head>
        <title>Goldwire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="py-4">
        <header className="pb-3 mb-4 border-bottom">
          <Image
              src={logo}
              alt="Goldwire ts"
              quality={100}
              width={130}
              height={80}
            />
        </header>

        <div className="p-5 mb-4 bg-light rounded-3">
          <div
            style={{ position: "relative" }}
            className="container-fluid py-5"
          >
            <Image
              src={heroImg}
              alt="Goldwire ts"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <h1 className="display-6 fw-bold">
              Artigiani e creativi provenienti da tutto il mondo
            </h1>
            <p className="col-md-8 fs-4">
              Goldwire &egrave; una rete di artigiani e creativi provenienti da tutto il mondo.
              Una vetrina per i tuoi prodotti e le tue idee.<br/>
              Condividi con noi la tua storia!
            </p>
          </div>
        </div>

        <div className="p-5 mb-4">
          <h1 className="display-6 fw-bold text-center pb-4">
            Entra nella rete!
          </h1>
          <Form>
            <Row className="align-items-center">
              <p className={className == "error" ? "text-danger" : "text-success"}>{message}</p>
              <Col md={10}>
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                  Name
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroup"
                    placeholder="inserisci un indirizzo email"
                    onChange={handleEmailChange}
                    className={className}
                    type="email"
                  />
                </InputGroup>
              </Col>
              <Col md={2}>
                <Button type="button" variant="warning" className="mb-2" onClick={handleSubmit}>
                  Iscriviti
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <Row className="align-items-md-stretch">
          <Col md={6}>
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h3>Da quanto?</h3>
              <hr />
              <p>
                Il progetto Goldwire &egrave; nato nel 2019 da un’idea di alcuni
                artigiani italo-stranieri.
              </p>
              <p>
                La sede di Goldwire &egrave; il mondo intero: questa rete &egrave; nata per
                abbattere ogni confine.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="h-100 p-5 bg-warning border rounded-3">
              <h2>La nostra mission</h2>
              <hr />
              <p>
                Lo scopo di Goldwire &egrave; unire realtà e culture differenti
                attraverso la condivisione di idee.
              </p>
              <p>Goldwire &egrave; una vetrina per i tuoi prodotti e le tue idee.</p>
            </div>
          </Col>
        </Row>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021 <Link href="https://www.iubenda.com/privacy-policy/96671216">privacy policy</Link>
        </footer>
      </Container>
    </>
  );
};

export default Home;
