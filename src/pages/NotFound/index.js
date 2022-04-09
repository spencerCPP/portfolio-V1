import React from "react";
import {
  GlobalStyleBody,
  NotFoundContainer,
  NotFoundContent,
  NotFoundWrapper,
  ReturnLink,
  LinkWrapper
} from "./NotFound.elements";

const NotFound = () => {
  return (
    <React.Fragment>
      <GlobalStyleBody />
      <NotFoundWrapper>
        <NotFoundContainer>
          <NotFoundContent>
            <h1>404</h1>
          </NotFoundContent>
          <NotFoundContent>
            <p>
              Looks like this page has not been created yet...Check back later!
            </p>
          </NotFoundContent>
          <NotFoundContent>
            <LinkWrapper>
              <ReturnLink to="/">Click here to go back!</ReturnLink>
            </LinkWrapper>
          </NotFoundContent>
        </NotFoundContainer>
      </NotFoundWrapper>
    </React.Fragment>
  );
};

export default NotFound;
