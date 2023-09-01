
import Script from "next/script"

export default function Head() {
    return (
      <>
        <title>Software Engineer in Athens, GA | Will Pursell</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="My name is Will Pursell, and I am a skilled software engineer based in Athens, GA. Here, you'll find a curated collection of my latest projects that showcase my expertise in various programming languages and technologies. As you explore my website, you'll discover innovative solutions, elegant designs, and efficient code that reflect my commitment to excellence. Whether you're seeking web development, mobile app development, or software engineering services, I am confident that my portfolio demonstrates my ability to deliver top-notch solutions tailored to meet your specific needs. Take a look around to learn more about my work and how I can help bring your ideas to life." />
        <meta property="og:image" content="public\iamwillpursell-logo.png" />
        <meta property="og:title" content="Software Engineer in Athens, GA | Will Pursell" />
        <meta property="og:description" content="My name is Will Pursell, and I am a skilled software engineer based in Athens, GA. Here, you'll find a curated collection of my latest projects that showcase my expertise in various programming languages and technologies. As you explore my website, you'll discover innovative solutions, elegant designs, and efficient code that reflect my commitment to excellence. Whether you're seeking web development, mobile app development, or software engineering services, I am confident that my portfolio demonstrates my ability to deliver top-notch solutions tailored to meet your specific needs. Take a look around to learn more about my work and how I can help bring your ideas to life." />
        <meta property="og:url" content="https://www.iamwillpursell.com/" />
        <meta property="twitter:description" content="My name is Will Pursell, and I am a skilled software engineer based in Athens, GA. Here, you'll find a curated collection of my latest projects that showcase my expertise in various programming languages and technologies. As you explore my website, you'll discover innovative solutions, elegant designs, and efficient code that reflect my commitment to excellence. Whether you're seeking web development, mobile app development, or software engineering services, I am confident that my portfolio demonstrates my ability to deliver top-notch solutions tailored to meet your specific needs. Take a look around to learn more about my work and how I can help bring your ideas to life." />
        <meta property="twitter:title" content="Software Engineer in Athens, GA | Will Pursell" />
        <meta property="twitter:image" content="public\iamwillpursell-logo.png" />
        <meta property="twitter:card" content="public\iamwillpursell-logo.png" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2Y4H7YEW6P"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-2Y4H7YEW6P');
          `}
        </Script>
      </>
    )
  }