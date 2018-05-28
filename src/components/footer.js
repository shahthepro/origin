import React from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

const Footer = (props) => {
  return (
    <footer className="dark-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="logo-container">
              <img src="images/origin-logo.svg" className="origin-logo" alt="Origin Protocol"/>
            </div>
            <p className="company-mission">
              <FormattedMessage
                id={ 'footer.mission' }
                defaultMessage={ 'Origin is building the sharing economy of tomorrow. Buyers and sellers will be able to transact without rent-seeking middlemen. We believe in lowering transaction fees, reducing censorship and regulation, and giving early participants in the community a stake in the network.' }
              />
            </p>
            <p>
              &copy; 2018 Origin, Inc.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  <FormattedMessage
                    id={ 'footer.documentationHeading' }
                    defaultMessage={ 'Documentation' }
                  />
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://www.originprotocol.com/product-brief">
                      <FormattedMessage
                        id={ 'footer.productBriefLink' }
                        defaultMessage={ 'Product Brief' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.originprotocol.com/whitepaper">
                      <FormattedMessage
                        id={ 'footer.whitepaperLink' }
                        defaultMessage={ 'Whitepaper' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/OriginProtocol" target="_blank">
                      <FormattedMessage
                        id={ 'footer.githubLink' }
                        defaultMessage={ 'Github' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://docs.originprotocol.com/" target="_blank">
                      <FormattedMessage
                        id={ 'footer.docsLink' }
                        defaultMessage={ 'Docs' }
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  <FormattedMessage
                    id={ 'footer.communityHeading' }
                    defaultMessage={ 'Community' }
                  />
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="https://t.me/originprotocol" target="_blank">
                      <FormattedMessage
                        id={ 'footer.telegramLink' }
                        defaultMessage={ 'Telegram' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/jyxpUSe" target="_blank">
                      <FormattedMessage
                        id={ 'footer.discordLink' }
                        defaultMessage={ 'Discord' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/originprotocol" target="_blank">
                      <FormattedMessage
                        id={ 'footer.mediumLink' }
                        defaultMessage={ 'Medium' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/originprotocol" target="_blank">
                      <FormattedMessage
                        id={ 'footer.twitterLink' }
                        defaultMessage={ 'Twitter' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/originprotocol" target="_blank">
                      <FormattedMessage
                        id={ 'footer.facebookLink' }
                        defaultMessage={ 'Facebook' }
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <div className="footer-header">
                  <FormattedMessage
                    id={ 'footer.organizationHeading' }
                    defaultMessage={ 'Organization' }
                  />
                </div>
                <ul className="footer-links">
                  <li>
                    <a href="http://www.originprotocol.com/team">
                      <FormattedMessage
                        id={ 'footer.teamLink' }
                        defaultMessage={ 'Team' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.originprotocol.com/presale">
                      <FormattedMessage
                        id={ 'footer.presaleLink' }
                        defaultMessage={ 'Presale' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.originprotocol.com/partners">
                      <FormattedMessage
                        id={ 'footer.partnersLink' }
                        defaultMessage={ 'Partners' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/originprotocol/jobs">
                      <FormattedMessage
                        id={ 'footer.hiringLink' }
                        defaultMessage={ 'Jobs (We&rsquo;re hiring!)' }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/845+Market+St+%23450a,+San+Francisco,+CA+94103">
                      845 Market St, #450A, San Francisco, CA 94103
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@originprotocol.com">
                      info@originprotocol.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
