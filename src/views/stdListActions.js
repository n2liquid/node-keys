const { button } = require('keys/hh');

module.exports = (req, record, ctlName) => {
  const { actions } = req.ctls[ctlName];

  const stdBtns = {
    view: button('Ver', {
      'data-keys-href': `/keys/${ctlName}/view`,
    }),

    edit: button('Editar', {
      'data-keys-href': `/keys/${ctlName}/edit`,
    }),

    delete: button('Deletar', {
      'data-keys-href': `/keys/${ctlName}/delete`,
    }),
  };

  return Object.keys(stdBtns).map(actionName => {
    const action = actions[actionName];

    if (!action) {
      return;
    }

    const customBtn = action.views.listBtn || action.views.btn;

    if (customBtn) {
      return customBtn(req, record);
    }

    return stdBtns[actionName];
  }).filter(x => !!x);
};