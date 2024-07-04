"use strict"; var _Url_url, _Url_urlString, __classPrivateFieldSet = this && this.__classPrivateFieldSet || function (l, t, r, e, i) { if ("m" === e) throw TypeError("Private method is not writable"); if ("a" === e && !i) throw TypeError("Private accessor was defined without a setter"); if ("function" == typeof t ? l !== t || !i : !t.has(l)) throw TypeError("Cannot write private member to an object whose class did not declare it"); return "a" === e ? i.call(l, r) : i ? i.value = r : t.set(l, r), r }, __classPrivateFieldGet = this && this.__classPrivateFieldGet || function (l, t, r, e) { if ("a" === r && !e) throw TypeError("Private accessor was defined without a getter"); if ("function" == typeof t ? l !== t || !e : !t.has(l)) throw TypeError("Cannot read private member from an object whose class did not declare it"); return "m" === r ? e : "a" === r ? e.call(l) : e ? e.value : t.get(l) }; Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Url = void 0; class Url { constructor(l) { var t, r; _Url_url.set(this, void 0), _Url_urlString.set(this, void 0), __classPrivateFieldSet(this, _Url_url, l, "f"); let { protocol: e, hash: i, hostname: n, origin: a, password: s, path: u, port: o, query: d, username: v } = this.urlParse, c = null === (r = null === (t = null == Object ? void 0 : Object.entries(d)) || void 0 === t ? void 0 : t.map(l => `${null == l ? void 0 : l[0]}=${null == l ? void 0 : l[1]}`)) || void 0 === r ? void 0 : r.join("&"); __classPrivateFieldSet(this, _Url_urlString, `${e ? `${e}://` : ""}${v || ""}${s ? `:${s}@` : v ? "@" : ""}${n || ""}:${o || ""}${u || ""}${c ? `?${c}` : ""}${i ? `#${i}` : ""}`, "f") } get urlParse() { var l; let t = __classPrivateFieldGet(this, _Url_url, "f"); function r(l) { return l ? null == l ? void 0 : l.replace(/%([0-9A-Fa-f]{2})/g, (l, t) => { var r; return String.fromCharCode(parseInt(r = t, 16)) }) : null } let e = /\?([^#]*)/, i = t.match(/^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/), n = t.match(/#([^]*)/), a = n && n[1] || null, s = i && i[1] || null, u = i && i[2] || null, o = i && i[3] || null, d = i && i[4] || null, v = i && i[5] || null, c = (null === (l = null == t ? void 0 : t.match(/(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/)) || void 0 === l ? void 0 : l[1]) || null, h = i && (d ? s ? `${s}://${d}${v ? `:${v}` : ""}` : `${d}${v ? `:${v}` : ""}` : null) || null; return { path: r(c), hash: r(a), protocol: s, origin: h, username: u, password: o, hostname: d, href: r(t), port: v, query: function l() { let r = t.match(e); if (!r || !r[1]) return {}; { let i = decodeURIComponent(r[1]), n = i.split("&"), a = null == n ? void 0 : n.map(l => { let [t, r] = l.split("="); return { [t]: r } }); return a.reduce(function (l, t) { return Object.assign(Object.assign({}, l), t) }, {}) } }() } } get(l) { return this.urlParse[l] } toString() { return __classPrivateFieldGet(this, _Url_urlString, "f") } set(l, t) { var r, e; let i = Object.assign(Object.assign({}, this.urlParse), { [l]: t }), { protocol: n, hash: a, hostname: s, origin: u, password: o, path: d, port: v, query: c, username: h } = i, f = null === (e = null === (r = null == Object ? void 0 : Object.entries(c)) || void 0 === r ? void 0 : r.map(l => `${null == l ? void 0 : l[0]}=${null == l ? void 0 : l[1]}`)) || void 0 === e ? void 0 : e.join("&"); __classPrivateFieldSet(this, _Url_urlString, `${n ? `${n}://` : ""}${h || ""}${o ? `:${o}@` : h ? "@" : ""}${s || ""}:${v || ""}${d || ""}${f ? `?${f}` : ""}${a ? `#${a}` : ""}`, "f") } } exports.Url = Url, _Url_url = new WeakMap, _Url_urlString = new WeakMap;