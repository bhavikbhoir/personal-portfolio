import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  html {
    padding: 30px 10px;
    font-size: 20px;
    line-height: 1.4;
    color: #737373;
    background: #f0f0f0;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  html,
  input {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  body {
    max-width: 100%;
    // _width: 500px;
    padding: 30px 20px 50px;
    border: 1px solid #b3b3b3;
    border-radius: 4px;
    margin: 0 auto;
    box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
    background: #fcfcfc;
  }

  h1 {
    font-size: 50px;
    text-align: left;
  }

  h1 span {
    color: #bbb;
  }

  h3 {
    margin: 1.5em 0 0.5em;
  }

  p {
    margin: 1em 0;
  }

  ul {
    padding: 0 0 0 40px;
    margin: 1em 0;
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
  }
`;

export const NotFound = () => (
    <Styles>
    <div class="container">
      <h1>Page not found <span>☹️</span></h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>It looks like this was the result of either:</p>
      <ul>
        <li>a mistyped address</li>
        <li>an out-of-date link</li>
        <li>a network error</li>
      </ul>
      <p>Please try refreshing your page 🔄</p>
    </div>
    </Styles>
)