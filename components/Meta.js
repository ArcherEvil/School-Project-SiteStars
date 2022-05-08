import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <meta name='application-name' content='FruitsFlavours' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='FruitsFlavours' />
<meta name='description' content='FruitsFlavours' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/icons/browserconfig.xml' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='theme-color' content='#000000' />

<link rel='apple-touch-icon' href='/icons/icon152.png' />
<link rel='apple-touch-icon' sizes='152x152' href='/icons/icon192.png' />
<link rel='apple-touch-icon' sizes='180x180' href='/icons/icon192.png' />
<link rel='apple-touch-icon' sizes='167x167' href='/icons/icon192.png' />
<link rel='manifest' href='/manifest.json' />
<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
<link rel='shortcut icon' href='/favicon.ico' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     
<meta name='twitter:card' content='summary' />
<meta name='twitter:url' content='https://yourdomain.com' />
<meta name='twitter:title' content='FruitsFlavours' />
<meta name='twitter:description' content='FruitsFlavours' />
<meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
<meta name='twitter:creator' content='@l_ramos14' />
<meta property='og:type' content='website' />
<meta property='og:title' content='FruitsFlavours' />
<meta property='og:description' content='FruitsFlavours' />
<meta property='og:site_name' content='FruitsFlavours' />
<meta property='og:url' content='https://fruitsflavourstp.pt' />
<meta property='og:image' content='https://fruitsflavourstp.pt/icons/icon192.png' />
      </Head>
    )
  }
  
  Meta.defaultProps = {
    title: 'FruitsFlavours',
    keywords: 'Fruits Flavours',
    description: 'O Melhor Sabor de São Tomé e Príncipe',
  }
  

export default Meta