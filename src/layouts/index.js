import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'

import 'font-awesome/css/font-awesome.min.css';
import './index.scss'
import 'react-material-layout/dist/react-material-layout.min.css'

const TemplateWrapper = ({ children }) => (
  <div data-flex data-layout="column"
    style={{
      height: '100%'
    }}
  >
    <Helmet
      title="Josh Weinstein | Software Engineer"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: 'software development, angular, python, web development, user interface' },
      ]}
    />
    <Header />
    <div data-flex data-layout="column">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
