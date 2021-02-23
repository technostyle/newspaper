import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { navBarLinksNames } from "./constants";
import {
  Homeless,
  FrenchNews,
  FrenchSpiderMan,
  Galery,
  VideoStore
} from "./tabs";

const NavItemLinks = () => (
  <Nav variant="tabs" className="flex-column">
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.FRENCH_SPIDER_MAN}>
        Французский человек-паук
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.MURMANSK_NEWS}>
        Мурманские события
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.FOREIGN_OVERVIEW}>
        Мировая хроника
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.GALERY}>Фотогалерея</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.VIDEO_STORE}>Видеотека</Nav.Link>
    </Nav.Item>
  </Nav>
);

const TabsInfo = () => (
  <Tab.Content>
    <Tab.Pane eventKey={navBarLinksNames.FRENCH_SPIDER_MAN}>
      <FrenchSpiderMan />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.MURMANSK_NEWS}>
      <Homeless />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.FOREIGN_OVERVIEW}>
      <FrenchNews />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.GALERY}>
      <Galery />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.VIDEO_STORE}>
      {/* <VideoStore /> */}
    </Tab.Pane>
  </Tab.Content>
);

export const SideBarMenu = () => (
  <Tab.Container defaultActiveKey={navBarLinksNames.GALERY}>
    <Row>
      <Col sm={3}>
        <NavItemLinks />
      </Col>
      <Col sm={9}>
        <TabsInfo />
      </Col>
    </Row>
  </Tab.Container>
);
