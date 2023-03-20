import React, { Component } from 'react'
import { LanguageContext } from './LanguageContext'

export class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {language => <h1>{language}</h1>}
      </LanguageContext.Consumer>
    )
  }
}

export default DisplayLanguage