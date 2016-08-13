const { button } = require('keys/hh');

const views = require('sample/views');

exports.id = {
  view: {
    label: () => 'ID',

    data: (req, record = {}) => views.linkTo(
      `/keys/user/view/${record.id}`, record.id,
    ),
  },
};

exports.name = {
  view: {
    label: () => 'Nome',
    data: (req, record = {}) => record.name,
  },

  edit: {
    label: () => 'Nome',

    data: (req, record = {}) => views.recordInput({
      type: 'text',
      name: 'name',
      record,
    }),
  },
};

exports.adminAccess = {
  view: {
    label: () => 'Administrador?',
    data: (req, record = {}) => views.flag(record.adminAccess),
  },

  edit: {
    label: () => 'Administrador?',

    data: (req, record = {}) => views.recordInput({
      type: 'checkbox',
      name: 'adminAccess',
      record,
    }),
  },
};

exports.active = {
  view: {
    label: () => 'Ativo?',
    data: (req, record = {}) => views.flag(record.active),
  },

  edit: {
    label: () => 'Ativo?',

    data: (req, record = {}) => views.recordInput({
      type: 'checkbox',
      name: 'active',
      record,
    }),
  },

  create: {
    label: () => 'Ativo?',

    data: (req, record = {}) => views.recordInput({
      type: 'checkbox',
      name: 'active',
      default: true,
      record,
    }),
  },
};

exports.actions = {
  list: {
    data: (req, record = req.record) => 
      req.action.views.stdListActions(req, record, 'user'),
  },
};
