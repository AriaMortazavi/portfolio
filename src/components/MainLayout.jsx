import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Articles from './Articles'
import VolApp from './VolApp'
import PhotoshopPoster from './PhotoshopPoster'
import CarApp from './CarApp'
import BookCover from './BookCover'
import ProductIllustration from './ProductIllustration'
import PoromtionalPosters from './PoromtionalPosters'
import NonProfitApp from './NonProfitApp'
import { connect } from 'react-redux'

class MainLayout extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <Header/>
          <ActiveComponent activeTab={this.props.activeTab} />
        </div>
      </Wrapper>
    )
  }
}

const ActiveComponent = tab => {
  return tab.activeTab === 'About' ? (
    <About />
  ) : tab.activeTab === 'Projects' ? (
    <Projects />
  ) : tab.activeTab === 'Contact' ? (
    <Contact />
  ) :tab.activeTab === 'VolApp' ? (
    <VolApp />
  ) :  tab.activeTab === 'NonProfitApp' ? (
    <NonProfitApp />
  ) : tab.activeTab === 'PhotoshopPoster' ? (
    <PhotoshopPoster />
    ) : tab.activeTab === 'PoromtionalPosters' ? (
      <PoromtionalPosters />
      ) : tab.activeTab === 'BookCover' ? (
        <BookCover />
    ) : tab.activeTab === 'ProductIllustration' ? (
      <ProductIllustration />
  ) : tab.activeTab === 'CarApp' ? (
    <CarApp />
  ) : (
    <Articles />
  )
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  }
}

export default connect(mapStateToProps)(MainLayout)

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }
`
