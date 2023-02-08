import React from 'react';
import './brand.css';
import{ google,slack,dropbox,shopify,atlassian} from './imports'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Google" srcset="" />
      </div>
      <div>
        <img src={slack} alt="Slack" srcset="" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" srcset="" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" srcset="" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" srcset="" />
      </div>
    </div>
  )
}

export default Brand