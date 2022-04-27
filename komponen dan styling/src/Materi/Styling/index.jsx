import React from 'react'
import ModuleCss from './Module/moduleCss'
import Plain from './Plain/plain'
import BelajarSass from './Sass/belajarSass'

export default class Styling extends React.Component {

  render() {
    return (
      <div>
          <Plain />
          <br/>
          <BelajarSass/>
          <br/>
          <ModuleCss />
      </div>
    )
  }
}