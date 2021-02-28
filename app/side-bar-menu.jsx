import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { navBarLinksNames } from "./constants";
import {
  PersonalInfo,
  Homeless,
  FrenchNews,
  FrenchSpiderMan
} from "./tabs";

const NavItemLinks = () => (
  <Nav variant="tabs" className="flex-column">
    <Nav.Item></Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={navBarLinksNames.DANILA_PERLOV}>
        Интервью с Данилой Перловым
      </Nav.Link>
    </Nav.Item>
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
  </Nav>
);

const TabsInfo = () => (
  <Tab.Content>
    <Tab.Pane eventKey={navBarLinksNames.DANILA_PERLOV}>
      <PersonalInfo />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.FRENCH_SPIDER_MAN}>
      <FrenchSpiderMan />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.MURMANSK_NEWS}>
      <Homeless />
    </Tab.Pane>
    <Tab.Pane eventKey={navBarLinksNames.FOREIGN_OVERVIEW}>
      <FrenchNews />
    </Tab.Pane>
  </Tab.Content>
);

export const SideBarMenu = () => (
  <Tab.Container defaultActiveKey={navBarLinksNames.DANILA_PERLOV}>
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
