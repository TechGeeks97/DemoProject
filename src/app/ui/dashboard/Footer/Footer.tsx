import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer border-top px-sm-2 py-2">
      <Container
        fluid
        className="text-center align-items-center flex-column flex-md-row d-flex justify-content-between"
      >
        <div>
          <a className="text-decoration-none" href="">
            Widget{" "}
          </a>
          <a className="text-decoration-none" href="">
            Sample Project
          </a>{" "}
          © 2024 widget
        </div>
        <div className="ms-md-auto">
          Powered by&nbsp;
          <a className="text-decoration-none" href="/">
            Widget
          </a>
        </div>
      </Container>
    </footer>
  );
}
