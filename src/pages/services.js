import React from "react"
import Layout from "../components/layout"
import servicesStyles from "../styles/pages/services.module.less";

import splashImage from "../assets/test.jpg";

const reverseBladeClass = servicesStyles.bladeContainerReverse;

const Blade = props => (
    <div className={servicesStyles.bladeContainer + (props.isReversed ? ` ${reverseBladeClass}` : '')}>
        <div className={servicesStyles.bladeImage}>
            <img src={props.imagePath} role="presentation" alt="" />
        </div>
        <div className={servicesStyles.bladeText}>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    </div>
)
  
export default () => (
    <Layout>
        <h2>Services</h2>

        <Blade imagePath={splashImage} heading="Session Drumming" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. At urna condimentum mattis pellentesque id nibh tortor. Id interdum velit laoreet id. Quis eleifend quam adipiscing vitae proin. Libero enim sed faucibus turpis in eu mi bibendum neque. Tellus in metus vulputate eu scelerisque. Tristique risus nec feugiat in. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Aliquet nibh praesent tristique magna sit amet purus gravida quis." />

        <Blade isReversed={true} imagePath={splashImage} heading="Live Drumming" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. At urna condimentum mattis pellentesque id nibh tortor. Id interdum velit laoreet id. Quis eleifend quam adipiscing vitae proin. Libero enim sed faucibus turpis in eu mi bibendum neque. Tellus in metus vulputate eu scelerisque. Tristique risus nec feugiat in. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Aliquet nibh praesent tristique magna sit amet purus gravida quis." />

        <Blade imagePath={splashImage} heading="Lessons" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. At urna condimentum mattis pellentesque id nibh tortor. Id interdum velit laoreet id. Quis eleifend quam adipiscing vitae proin. Libero enim sed faucibus turpis in eu mi bibendum neque. Tellus in metus vulputate eu scelerisque. Tristique risus nec feugiat in. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Aliquet nibh praesent tristique magna sit amet purus gravida quis." />
    </Layout>
)
