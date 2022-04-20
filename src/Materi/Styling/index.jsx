import React from 'react'
import ModuleCss from './Module/ModuleCss'
import Plain from './Plain/Plain'
import BelajarSass from './Sass/BelajarSass'

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