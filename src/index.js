export default {
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'border-box'
    },
    'html, body, div, h1, h2, h3, h4, h5, h6, p, span, a, blockquote, pre, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: '0',
      padding: '0',
      border: '0',
      outline: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline'
    },
    body: {
      minHeight: '100vh',
      scrollBehavior: 'smooth',
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      lineHeight: '1.5'
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block'
    },
    'ol, ul': {
      listStyle: 'none'
    },
    'blockquote, q': {
      quotes: 'none'
    },
    'blockquote:before, blockquote:after, q:before, q:after': {
      content: 'none'
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: '0'
    },
    img: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto'
    },
    'picture img': {
      width: '100%'
    },
    'strong, b': {
      fontWeight: 'bold'
    },
    'em, i': {
      fontStyle: 'italic'
    },
    input: {
      border: 'none',
      outline: '0',
      borderRadius: '0'
    },
    button: {
      outline: 'none',
      borderRadius: '0'
    },
    'input, textarea, button': {
      appearance: 'none'
    },
    'input, select, textarea, button': {
      margin: '0',
      fontFamily: 'inherit'
    }
  }
};
