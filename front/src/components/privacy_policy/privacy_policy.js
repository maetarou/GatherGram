import React from 'react'
import { connect } from 'react-redux'

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='p-privacy_policy'>
        <h2 className='p-privacy_policy__title'>GatherSpot's PrivacyPolicy</h2>
        <p>
          'GatherSpot' is a tool for facilitating community of region by displaying Instagram's users contents on map around user.
          We would like to use this tool as many people as possible.
          This page is used to inform web application visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
          If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at GatherSpot , unless otherwise defined in this Privacy Policy.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Information Collection and Use</h2>
        <p>
          For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, email address. The information that we collect will be used to contact or identify you.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Cookies</h2>
        <p>
          Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
          Our web application uses these "cookies" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Security</h2>
        <p>
          We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Links to Other Sites</h2>
        <p>
          Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites, visit. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Children's Privacy</h2>
        <p>
          Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
        </p>

        <div className='divider'></div>

        <h2 className='p-privacy_policy__title'>Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
        </p>

        <div className='divider'></div>

        <p>
          contact: GatherSpot2018@gmail.com
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.PrivacyPolicy}
}

export default connect(mapStateToProps)(PrivacyPolicy)
