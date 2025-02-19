"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function SocialFeed() {
  useEffect(() => {
    // This effect will run after the component mounts
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }, [])

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
      <div>
        <h3 className="text-xl font-semibold mb-2">Facebook Feed</h3>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61558662527742"
          data-tabs="timeline"
          data-width=""
          data-height="400"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/profile.php?id=61558662527742" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/profile.php?id=61558662527742">Tuhifadhi Mchanga Initiative</a>
          </blockquote>
        </div>
      </div>
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"
        nonce="YOUR_NONCE_VALUE"
        strategy="lazyOnload"
      />
    </div>
  )
}

