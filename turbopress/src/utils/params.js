"use strict"; Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getParams = void 0; const getParams = (l, e) => { var i; let n = null == e ? void 0 : e.split("/"), t = null == l ? void 0 : l.split("/"); if ((null == n ? void 0 : n.length) !== (null == t ? void 0 : t.length) || e === l) return {}; { let u = /\/:([^/]+)/g, r = RegExp(null == e ? void 0 : e.replace(/:[^/]+/g, "([^/]+)")), o = null == l ? void 0 : l.match(r); if (!o) return {}; { let a = null == o ? void 0 : o.slice(1), d = null === (i = null == e ? void 0 : e.match(u)) || void 0 === i ? void 0 : i.map((l, e) => ({ [null == l ? void 0 : l.slice(2)]: a[e] })); return (null == d ? void 0 : d.length) ? d.reduce(function (l, e) { return Object.assign(Object.assign({}, l), e) }, {}) : {} } } }; exports.getParams = getParams;