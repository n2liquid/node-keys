const Q = require('q');

const { html, body } = require('keys/hh');

exports = module.exports = async req => {
  const { views } = req.action;

  const [
    head,
    mainMenu,
    contextHeader,
    contentWrapper,
  ] = await Q.all([
    views.head(req),
    views.mainMenu(req),
    views.contextHeader(req),
    views.contentWrapper(req),
  ]);

  return html(
    head,
    mainMenu,

    body('.keysShell_body',
      contextHeader,
      contentWrapper,
    ),
  );
};

exports.styles = {
  keysShell_body: {
    flexDirection: 'column',

    minHeight: '100vh',
    margin: 0,

    fontFamily: ['Helvetica', 'sans-serif'],
    fontSize: '11px',
  },
};