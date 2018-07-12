function onPlaceChanged() {
    var t = getAddressComponents(this.getPlace()),
        e = document.getElementById("user_address");
    e.blur(), e.value = t.address, document.getElementById("user_zipcode").value = t.zip_code, document.getElementById("user_city").value = t.city
}

function getAddressComponents(t) {
    window.console && "function" == typeof console.log && console.log(t);
    var e = null,
        n = null,
        i = null,
        r = null;
    for (var o in t.address_components) {
        var a = t.address_components[o];
        for (var s in a.types) {
            var l = a.types[s];
            "street_number" === l ? e = a.long_name : "route" === l ? n = a.long_name : "postal_code" === l ? i = a.long_name : "locality" === l ? r = a.long_name : "postal_town" === l && null === r && (r = a.long_name)
        }
    }
    return {
        address: null === e ? n : e + " " + n,
        zip_code: i,
        city: r
    }
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(S, t) {
    function s(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function e(t, n, i) {
        if (ft.isFunction(n)) return ft.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== i
        });
        if (n.nodeType) return ft.grep(t, function(t) {
            return t === n !== i
        });
        if ("string" == typeof n) {
            if (St.test(n)) return ft.filter(n, t, i);
            n = ft.filter(n, t)
        }
        return ft.grep(t, function(t) {
            return -1 < ft.inArray(t, n) !== i
        })
    }

    function n(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function c(t) {
        var n = {};
        return ft.each(t.match(Et) || [], function(t, e) {
            n[e] = !0
        }), n
    }

    function r() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", o), S.removeEventListener("load", o)) : (it.detachEvent("onreadystatechange", o), S.detachEvent("onload", o))
    }

    function o() {
        (it.addEventListener || "load" === S.event.type || "complete" === it.readyState) && (r(), ft.ready())
    }

    function l(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var i = "data-" + e.replace(Lt, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : It.test(n) ? ft.parseJSON(n) : n)
                } catch (r) {}
                ft.data(t, e, n)
            } else n = undefined
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function i(t, e, n, i) {
        if (Ot(t)) {
            var r, o, a = ft.expando,
                s = t.nodeType,
                l = s ? ft.cache : t,
                u = s ? t[a] : t[a] && a;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e) return u || (u = s ? t[a] = nt.pop() || ft.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: ft.noop
            }), "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[ft.camelCase(e)] = n), "string" == typeof e ? null == (r = o[e]) && (r = o[ft.camelCase(e)]) : r = o, r
        }
    }

    function a(t, e, n) {
        if (Ot(t)) {
            var i, r, o = t.nodeType,
                a = o ? ft.cache : t,
                s = o ? t[ft.expando] : ft.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    r = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in i ? [e] : (e = ft.camelCase(e)) in i ? [e] : e.split(" ")).length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !u(i) : !ft.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? ft.cleanData([t], !0) : dt.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function d(t, e, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return ft.css(t, e, "")
            },
            l = s(),
            u = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== u && +l) && jt.exec(ft.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", ft.style(t, e, c + u), o !== (o = s() / l) && 1 !== o && --a;);
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function m(t) {
        var e = Vt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function v(t, e) {
        var n, i, r = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || ft.nodeName(i, e) ? o.push(i) : ft.merge(o, v(i, e));
        return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], o) : o
    }

    function y(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
    }

    function b(t) {
        Bt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function g(t, e, n, i, r) {
        for (var o, a, s, l, u, c, d, h = t.length, f = m(e), p = [], g = 0; g < h; g++)
            if ((a = t[g]) || 0 === a)
                if ("object" === ft.type(a)) ft.merge(p, a.nodeType ? [a] : a);
                else if (Xt.test(a)) {
            for (l = l || f.appendChild(e.createElement("div")), u = (qt.exec(a) || ["", ""])[1].toLowerCase(), d = Gt[u] || Gt._default, l.innerHTML = d[1] + ft.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
            if (!dt.leadingWhitespace && Ut.test(a) && p.push(e.createTextNode(Ut.exec(a)[0])), !dt.tbody)
                for (o = (a = "table" !== u || Qt.test(a) ? "<table>" !== d[1] || Qt.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;) ft.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (ft.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = f.lastChild
        } else p.push(e.createTextNode(a));
        for (l && f.removeChild(l), dt.appendChecked || ft.grep(v(p, "input"), b), g = 0; a = p[g++];)
            if (i && -1 < ft.inArray(a, i)) r && r.push(a);
            else if (s = ft.contains(a.ownerDocument, a), l = v(f.appendChild(a), "script"), s && y(l), n)
            for (o = 0; a = l[o++];) Yt.test(a.type || "") && n.push(a);
        return l = null, f
    }

    function h() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function x(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
            for (s in "string" != typeof n && (i = i || n, n = undefined), e) x(t, s, n, i, e[s], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = f;
        else if (!r) return t;
        return 1 === o && (a = r, (r = function(t) {
            return ft().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, r, i, n)
        })
    }

    function w(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function _(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function k(t) {
        var e = se.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function C(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, i, r, o = ft._data(t),
                a = ft._data(e, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, r = s[n].length; i < r; i++) ft.event.add(e, n, s[n][i]);
            a.data && (a.data = ft.extend({}, a.data))
        }
    }

    function M(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ft.expando]) {
                for (i in (r = ft._data(e)).events) ft.removeEvent(e, i, r.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (_(e).text = t.text, k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Bt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function T(n, i, r, o) {
        i = ot.apply([], i);
        var t, e, a, s, l, u, c = 0,
            d = n.length,
            h = d - 1,
            f = i[0],
            p = ft.isFunction(f);
        if (p || 1 < d && "string" == typeof f && !dt.checkClone && ae.test(f)) return n.each(function(t) {
            var e = n.eq(t);
            p && (i[0] = f.call(this, t, e.html())), T(e, i, r, o)
        });
        if (d && (t = (u = g(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === u.childNodes.length && (u = t), t || o)) {
            for (a = (s = ft.map(v(u, "script"), _)).length; c < d; c++) e = u, c !== h && (e = ft.clone(e, !0, !0), a && ft.merge(s, v(e, "script"))), r.call(n[c], e, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, ft.map(s, k), c = 0; c < a; c++) e = s[c], Yt.test(e.type || "") && !ft._data(e, "globalEval") && ft.contains(l, e) && (e.src ? ft._evalUrl && ft._evalUrl(e.src) : ft.globalEval((e.text || e.textContent || e.innerHTML || "").replace(le, "")));
            u = t = null
        }
        return n
    }

    function D(t, e, n) {
        for (var i, r = e ? ft.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ft.cleanData(v(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function A(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            i = ft.css(n[0], "display");
        return n.detach(), i
    }

    function E(t) {
        var e = it,
            n = de[t];
        return n || ("none" !== (n = A(t, e)) && n || ((e = ((ce = (ce || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(), e.close(), n = A(t, e), ce.detach()), de[t] = n), n
    }

    function P(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function O(t) {
        if (t in Me) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
            if ((t = Ce[n] + e) in Me) return t
    }

    function I(t, e) {
        for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++)(i = t[a]).style && (o[a] = ft._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Wt(i) && (o[a] = ft._data(i, "olddisplay", E(i.nodeName)))) : (r = Wt(i), (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
        for (a = 0; a < s; a++)(i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function L(t, e, n) {
        var i = _e.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function z(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ft.css(t, n + $t[o], !0, r)), i ? ("content" === n && (a -= ft.css(t, "padding" + $t[o], !0, r)), "margin" !== n && (a -= ft.css(t, "border" + $t[o] + "Width", !0, r))) : (a += ft.css(t, "padding" + $t[o], !0, r), "padding" !== n && (a += ft.css(t, "border" + $t[o] + "Width", !0, r)));
        return a
    }

    function N(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = me(t),
            a = dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ve(t, e, o)) < 0 || null == r) && (r = t.style[e]), fe.test(r)) return r;
            i = a && (dt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + z(t, e, n || (a ? "border" : "content"), i, o) + "px"
    }

    function F(t, e, n, i, r) {
        return new F.prototype.init(t, e, n, i, r)
    }

    function R() {
        return S.setTimeout(function() {
            Te = undefined
        }), Te = ft.now()
    }

    function j(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = $t[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function $(t, e, n) {
        for (var i, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function W(e, t, n) {
        var i, r, o, a, s, l, u, c = this,
            d = {},
            h = e.style,
            f = e.nodeType && Wt(e),
            p = ft._data(e, "fxshow");
        for (i in n.queue || (null == (s = ft._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ft.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (u = ft.css(e, "display")) ? ft._data(e, "olddisplay") || E(e.nodeName) : u) && "none" === ft.css(e, "float") && (dt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", dt.shrinkWrapBlocks() || c.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), t)
            if (r = t[i], Le.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !p || p[i] === undefined) continue;
                    f = !0
                }
                d[i] = p && p[i] || ft.style(e, i)
            } else u = undefined;
        if (ft.isEmptyObject(d)) "inline" === ("none" === u ? E(e.nodeName) : u) && (h.display = u);
        else
            for (i in p ? "hidden" in p && (f = p.hidden) : p = ft._data(e, "fxshow", {}), o && (p.hidden = !f), f ? ft(e).show() : c.done(function() {
                    ft(e).hide()
                }), c.done(function() {
                    var t;
                    for (t in ft._removeData(e, "fxshow"), d) ft.style(e, t, d[t])
                }), d) a = $(f ? p[i] : 0, i, c), i in p || (p[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }

    function H(t, e) {
        var n, i, r, o, a;
        for (n in t)
            if (r = e[i = ft.camelCase(n)], o = t[n], ft.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = ft.cssHooks[i]) && "expand" in a)
                for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
            else e[i] = r
    }

    function B(o, t, e) {
        var n, a, i = 0,
            r = B.prefilters.length,
            s = ft.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var t = Te || R(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return s.notifyWith(o, [u, n, e]), n < 1 && r ? e : (s.resolveWith(o, [u]), !1)
            },
            u = s.promise({
                elem: o,
                props: ft.extend({}, t),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Te || R(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var n = ft.Tween(o, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var e = 0,
                        n = t ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; e < n; e++) u.tweens[e].run(1);
                    return t ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, t])) : s.rejectWith(o, [u, t]), this
                }
            }),
            c = u.props;
        for (H(c, u.opts.specialEasing); i < r; i++)
            if (n = B.prefilters[i].call(u, o, c, u.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(n.stop, n)), n;
        return ft.map(c, $, u), ft.isFunction(u.opts.start) && u.opts.start.call(o, u), ft.fx.timer(ft.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function q(t) {
        return ft.attr(t, "class") || ""
    }

    function Y(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                r = t.toLowerCase().match(Et) || [];
            if (ft.isFunction(e))
                for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function U(e, r, o, a) {
        function s(t) {
            var i;
            return l[t] = !0, ft.each(e[t] || [], function(t, e) {
                var n = e(r, o, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), s(n), !1)
            }), i
        }
        var l = {},
            u = e === an;
        return s(r.dataTypes[0]) || !l["*"] && s("*")
    }

    function V(t, e) {
        var n, i, r = ft.ajaxSettings.flatOptions || {};
        for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    function G(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                i || (i = a)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function X(t, e, n, i) {
        var r, o, a, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o]))
                for (r in u)
                    if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function Q(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function Z(t) {
        if (!ft.contains(t.ownerDocument || it, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Q(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function J(n, t, i, r) {
        var e;
        if (ft.isArray(t)) ft.each(t, function(t, e) {
            i || dn.test(n) ? r(n, e) : J(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
        });
        else if (i || "object" !== ft.type(t)) r(n, t);
        else
            for (e in t) J(n + "[" + e + "]", t[e], i, r)
    }

    function K() {
        try {
            return new S.XMLHttpRequest
        } catch (t) {}
    }

    function tt() {
        try {
            return new S.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        it = S.document,
        rt = nt.slice,
        ot = nt.concat,
        at = nt.push,
        st = nt.indexOf,
        lt = {},
        ut = lt.toString,
        ct = lt.hasOwnProperty,
        dt = {},
        ht = "1.12.4",
        ft = function(t, e) {
            return new ft.fn.init(t, e)
        },
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        mt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: ht,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function() {
            return rt.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return ft.each(this, t)
        },
        map: function(n) {
            return this.pushStack(ft.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function(t) {
        var e, n, i, r, o, a, s = t || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" == typeof s || ft.isFunction(s) || (s = {}), l === u && (s = this, l--); l < u; l++)
            if (null != (o = arguments[l]))
                for (r in o) e = s[r], s !== (i = o[r]) && (c && i && (ft.isPlainObject(i) || (n = ft.isArray(i))) ? (n ? (n = !1, a = e && ft.isArray(e) ? e : []) : a = e && ft.isPlainObject(e) ? e : {}, s[r] = ft.extend(c, a, i)) : i !== undefined && (s[r] = i));
        return s
    }, ft.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ft.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ft.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return e === undefined || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            t && ft.trim(t) && (S.execScript || function(t) {
                S.eval.call(S, t)
            })(t)
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(mt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, i = 0;
            if (s(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (s(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (st) return st.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
            if (n != n)
                for (; e[i] !== undefined;) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, o = 0,
                a = [];
            if (s(t))
                for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r);
            else
                for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), ft.isFunction(t) ? (n = rt.call(arguments, 2), (i = function() {
                return t.apply(e || this, n.concat(rt.call(arguments)))
            }).guid = t.guid = t.guid || ft.guid++, i) : undefined
        },
        now: function() {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(n) {
        function x(t, e, n, i) {
            var r, o, a, s, l, u, c, d, h = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((e ? e.ownerDocument || e : $) !== O && P(e), e = e || O, L)) {
                if (11 !== f && (u = vt.exec(t)))
                    if (r = u[1]) {
                        if (9 === f) {
                            if (!(a = e.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && R(e, a) && a.id === r) return n.push(a), n
                    } else {
                        if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && v.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (v.qsa && !Y[t + " "] && (!z || !z.test(t))) {
                    if (1 !== f) h = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(bt, "\\$&") : e.setAttribute("id", s = j), o = (c = C(t)).length, l = ht.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = l + " " + m(c[o]);
                        d = c.join(","), h = yt.test(t) && g(e.parentNode) || e
                    }
                    if (d) try {
                        return J.apply(n, h.querySelectorAll(d)), n
                    } catch (p) {} finally {
                        s === j && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(st, "$1"), e, n, i)
        }

        function t() {
            function n(t, e) {
                return i.push(t + " ") > _.cacheLength && delete n[i.shift()], n[t + " "] = e
            }
            var i = [];
            return n
        }

        function l(t) {
            return t[j] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function e(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
        }

        function u(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function i(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function o(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function a(a) {
            return l(function(o) {
                return o = +o, l(function(t, e) {
                    for (var n, i = a([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function g(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function s() {}

        function m(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function d(s, t, e) {
            var l = t.dir,
                u = e && "parentNode" === l,
                c = H++;
            return t.first ? function(t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || u) return s(t, e, n)
            } : function(t, e, n) {
                var i, r, o, a = [W, c];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || u) && s(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || u) {
                            if ((i = (r = (o = t[j] || (t[j] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[l]) && i[0] === W && i[1] === c) return a[2] = i[2];
                            if ((r[l] = a)[2] = s(t, e, n)) return !0
                        }
            }
        }

        function h(r) {
            return 1 < r.length ? function(t, e, n) {
                for (var i = r.length; i--;)
                    if (!r[i](t, e, n)) return !1;
                return !0
            } : r[0]
        }

        function y(t, e, n) {
            for (var i = 0, r = e.length; i < r; i++) x(t, e[i], n);
            return n
        }

        function w(t, e, n, i, r) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), u && e.push(s)));
            return a
        }

        function b(f, p, g, m, v, t) {
            return m && !m[j] && (m = b(m)), v && !v[j] && (v = b(v, t)), l(function(t, e, n, i) {
                var r, o, a, s = [],
                    l = [],
                    u = e.length,
                    c = t || y(p || "*", n.nodeType ? [n] : n, []),
                    d = !f || !t && p ? c : w(c, s, f, n, i),
                    h = g ? v || (t ? f : u || m) ? [] : e : d;
                if (g && g(d, h, n, i), m)
                    for (r = w(h, l), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (h[l[o]] = !(d[l[o]] = a));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (r = [], o = h.length; o--;)(a = h[o]) && r.push(d[o] = a);
                            v(null, h = [], r, i)
                        }
                        for (o = h.length; o--;)(a = h[o]) && -1 < (r = v ? tt(t, a) : s[o]) && (t[r] = !(e[r] = a))
                    }
                } else h = w(h === e ? h.splice(u, h.length) : h), v ? v(null, e, h, i) : J.apply(e, h)
            })
        }

        function f(t) {
            for (var r, e, n, i = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = d(function(t) {
                    return t === r
                }, a, !0), u = d(function(t) {
                    return -1 < tt(r, t)
                }, a, !0), c = [function(t, e, n) {
                    var i = !o && (n || e !== D) || ((r = e).nodeType ? l(t, e, n) : u(t, e, n));
                    return r = null, i
                }]; s < i; s++)
                if (e = _.relative[t[s].type]) c = [d(h(c), e)];
                else {
                    if ((e = _.filter[t[s].type].apply(null, t[s].matches))[j]) {
                        for (n = ++s; n < i && !_.relative[t[n].type]; n++);
                        return b(1 < s && h(c), 1 < s && m(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), e, s < n && f(t.slice(s, n)), n < i && f(t = t.slice(n)), n < i && m(t))
                    }
                    c.push(e)
                }
            return h(c)
        }

        function c(m, v) {
            var y = 0 < v.length,
                b = 0 < m.length,
                t = function(t, e, n, i, r) {
                    var o, a, s, l = 0,
                        u = "0",
                        c = t && [],
                        d = [],
                        h = D,
                        f = t || b && _.find.TAG("*", r),
                        p = W += null == h ? 1 : Math.random() || .1,
                        g = f.length;
                    for (r && (D = e === O || e || r); u !== g && null != (o = f[u]); u++) {
                        if (b && o) {
                            for (a = 0, e || o.ownerDocument === O || (P(o), n = !L); s = m[a++];)
                                if (s(o, e || O, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (W = p)
                        }
                        y && ((o = !s && o) && l--, t && c.push(o))
                    }
                    if (l += u, y && u !== l) {
                        for (a = 0; s = v[a++];) s(c, d, e, n);
                        if (t) {
                            if (0 < l)
                                for (; u--;) c[u] || d[u] || (d[u] = Q.call(i));
                            d = w(d)
                        }
                        J.apply(i, d), r && !t && 0 < d.length && 1 < l + v.length && x.uniqueSort(i)
                    }
                    return r && (W = p, D = h), c
                };
            return y ? l(t) : t
        }
        var p, v, _, S, k, C, M, T, D, A, E, P, O, I, L, z, N, F, R, j = "sizzle" + 1 * new Date,
            $ = n.document,
            W = 0,
            H = 0,
            B = t(),
            q = t(),
            Y = t(),
            U = function(t, e) {
                return t === e && (E = !0), 0
            },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            X = [],
            Q = X.pop,
            Z = X.push,
            J = X.push,
            K = X.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(ot),
            ht = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            _t = function() {
                P()
            };
        try {
            J.apply(X = K.call($.childNodes), $.childNodes), X[$.childNodes.length].nodeType
        } catch (St) {
            J = {
                apply: X.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        for (p in v = x.support = {}, k = x.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, P = x.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : $;
                return i !== O && 9 === i.nodeType && i.documentElement && (I = (O = i).documentElement, L = !k(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), v.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), v.getElementsByTagName = r(function(t) {
                    return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
                }), v.getElementsByClassName = mt.test(O.getElementsByClassName), v.getById = r(function(t) {
                    return I.appendChild(t).id = j, !O.getElementsByName || !O.getElementsByName(j).length
                }), v.getById ? (_.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, _.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function(t) {
                    var n = t.replace(xt, wt);
                    return function(t) {
                        var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }), _.find.TAG = v.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, _.find.CLASS = v.getElementsByClassName && function(t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && L) return e.getElementsByClassName(t)
                }, N = [], z = [], (v.qsa = mt.test(O.querySelectorAll)) && (r(function(t) {
                    I.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || z.push(".#.+[+~]")
                }), r(function(t) {
                    var e = O.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
                })), (v.matchesSelector = mt.test(F = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(t) {
                    v.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), N.push("!=", ot)
                }), z = z.length && new RegExp(z.join("|")), N = N.length && new RegExp(N.join("|")), e = mt.test(I.compareDocumentPosition), R = e || mt.test(I.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return E = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === $ && R($, t) ? -1 : e === O || e.ownerDocument === $ && R($, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return E = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        s = [e];
                    if (!r || !o) return t === O ? -1 : e === O ? 1 : r ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === o) return u(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? u(a[i], s[i]) : a[i] === $ ? -1 : s[i] === $ ? 1 : 0
                }), O
            }, x.matches = function(t, e) {
                return x(t, null, null, e)
            }, x.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== O && P(t), e = e.replace(ct, "='$1']"), v.matchesSelector && L && !Y[e + " "] && (!N || !N.test(e)) && (!z || !z.test(e))) try {
                    var n = F.call(t, e);
                    if (n || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (St) {}
                return 0 < x(e, O, null, [t]).length
            }, x.contains = function(t, e) {
                return (t.ownerDocument || t) !== O && P(t), R(t, e)
            }, x.attr = function(t, e) {
                (t.ownerDocument || t) !== O && P(t);
                var n = _.attrHandle[e.toLowerCase()],
                    i = n && G.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !L) : undefined;
                return i !== undefined ? i : v.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, x.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, x.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (E = !v.detectDuplicates, A = !v.sortStable && t.slice(0), t.sort(U), E) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, S = x.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += S(e);
                return n
            }, (_ = x.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || x.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && x.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(t) {
                            var e = x.attr(t, n);
                            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(at, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, t, e, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === t;
                        return 1 === g && 0 === m ? function(t) {
                            return !!t.parentNode
                        } : function(t, e, n) {
                            var i, r, o, a, s, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                d = b && t.nodeName.toLowerCase(),
                                h = !n && !b,
                                f = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (a = t; a = a[u];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && h) {
                                    for (f = (s = (i = (r = (o = (a = c)[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === W && i[1]) && i[2],
                                        a = s && c.childNodes[s]; a = ++s && a && a[u] || (f = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++f && a === t) {
                                            r[p] = [W, s, f];
                                            break
                                        }
                                } else if (h && (f = s = (i = (r = (o = (a = t)[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === W && i[1]), !1 === f)
                                    for (;
                                        (a = ++s && a && a[u] || (f = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (h && ((r = (o = a[j] || (a[j] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [W, f]), a !== t)););
                                return (f -= m) === g || f % g == 0 && 0 <= f / g
                            }
                        }
                    },
                    PSEUDO: function(t, o) {
                        var e, a = _.pseudos[t] || _.setFilters[t.toLowerCase()] || x.error("unsupported pseudo: " + t);
                        return a[j] ? a(o) : 1 < a.length ? (e = [t, t, "", o], _.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function(t, e) {
                            for (var n, i = a(t, o), r = i.length; r--;) t[n = tt(t, i[r])] = !(e[n] = i[r])
                        }) : function(t) {
                            return a(t, 0, e)
                        }) : a
                    }
                },
                pseudos: {
                    not: l(function(t) {
                        var i = [],
                            r = [],
                            s = M(t.replace(st, "$1"));
                        return s[j] ? l(function(t, e, n, i) {
                            for (var r, o = s(t, null, i, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, e, n) {
                            return i[0] = t, s(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(e) {
                        return function(t) {
                            return 0 < x(e, t).length
                        }
                    }),
                    contains: l(function(e) {
                        return e = e.replace(xt, wt),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || S(t)).indexOf(e)
                            }
                    }),
                    lang: l(function(n) {
                        return ht.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(xt, wt).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !_.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(t, e) {
                        return [e - 1]
                    }),
                    eq: a(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: a(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: a(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: a(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: a(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = _.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[p] = i(p);
        for (p in {
                submit: !0,
                reset: !0
            }) _.pseudos[p] = o(p);
        return s.prototype = _.filters = _.pseudos, _.setFilters = new s, C = x.tokenize = function(t, e) {
            var n, i, r, o, a, s, l, u = q[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, s = [], l = _.preFilter; a;) {
                for (o in n && !(i = lt.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = ut.exec(a)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(st, " ")
                    }), a = a.slice(n.length)), _.filter) !(i = ft[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? x.error(t) : q(t, s).slice(0)
        }, M = x.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = Y[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;)(o = f(e[n]))[j] ? i.push(o) : r.push(o);
                (o = Y(t, c(r, i))).selector = t
            }
            return o
        }, T = x.select = function(t, e, n, i) {
            var r, o, a, s, l, u = "function" == typeof t && t,
                c = !i && C(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && v.getById && 9 === e.nodeType && L && _.relative[o[1].type]) {
                    if (!(e = (_.find.ID(a.matches[0].replace(xt, wt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                    if ((l = _.find[s]) && (i = l(a.matches[0].replace(xt, wt), yt.test(o[0].type) && g(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = i.length && m(o))) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || M(t, c))(i, e, !L, n, !e || yt.test(t) && g(e.parentNode) || e), n
        }, v.sortStable = j.split("").sort(U).join("") === j, v.detectDuplicates = !!E, P(), v.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), v.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || e("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || e(et, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), x
    }(S);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains;
    var bt = function(t, e, n) {
            for (var i = [], r = n !== undefined;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && ft(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        xt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = ft.expr.match.needsContext,
        _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        St = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < r; e++)
                    if (ft.contains(i[e], this)) return !0
            }));
            for (e = 0; e < r; e++) ft.find(t, i[e], n);
            return (n = this.pushStack(1 < r ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function(t) {
            return !!e(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var kt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ft.fn.init = function(t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || kt, "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), _t.test(i[1]) && ft.isPlainObject(e))
                    for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((r = it.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return kt.find(t);
                this.length = 1, this[0] = r
            }
            return this.context = it, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this))
    }).prototype = ft.fn, kt = ft(it);
    var Mt = /^(?:parents|prev(?:Until|All))/,
        Tt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function(t) {
            var e, n = ft(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (ft.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], a = wt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? ft.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function(t) {
            return n(t, "nextSibling")
        },
        prev: function(t) {
            return n(t, "previousSibling")
        },
        nextAll: function(t) {
            return bt(t, "nextSibling")
        },
        prevAll: function(t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function(i, r) {
        ft.fn[i] = function(t, e) {
            var n = ft.map(this, r, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = ft.filter(e, n)), 1 < this.length && (Tt[i] || (n = ft.uniqueSort(n)), Mt.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var Dt, At, Et = /\S+/g;
    for (At in ft.Callbacks = function(i) {
            i = "string" == typeof i ? c(i) : ft.extend({}, i);
            var r, t, e, n, o = [],
                a = [],
                s = -1,
                l = function() {
                    for (n = i.once, e = r = !0; a.length; s = -1)
                        for (t = a.shift(); ++s < o.length;) !1 === o[s].apply(t[0], t[1]) && i.stopOnFalse && (s = o.length, t = !1);
                    i.memory || (t = !1), r = !1, n && (o = t ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (t && !r && (s = o.length - 1, a.push(t)), function n(t) {
                            ft.each(t, function(t, e) {
                                ft.isFunction(e) ? i.unique && u.has(e) || o.push(e) : e && e.length && "string" !== ft.type(e) && n(e)
                            })
                        }(arguments), t && !r && l()), this
                    },
                    remove: function() {
                        return ft.each(arguments, function(t, e) {
                            for (var n; - 1 < (n = ft.inArray(e, o, n));) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(t) {
                        return t ? -1 < ft.inArray(t, o) : 0 < o.length
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return n = a = [], o = t = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return n = !0, t || u.disable(), this
                    },
                    locked: function() {
                        return !!n
                    },
                    fireWith: function(t, e) {
                        return n || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), r || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!e
                    }
                };
            return u
        }, ft.extend({
            Deferred: function(t) {
                var o = [
                        ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ft.Callbacks("memory")]
                    ],
                    r = "pending",
                    a = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var r = arguments;
                            return ft.Deferred(function(i) {
                                ft.each(o, function(t, e) {
                                    var n = ft.isFunction(r[t]) && r[t];
                                    s[e[1]](function() {
                                        var t = n && n.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === a ? i.promise() : this, n ? [t] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ft.extend(t, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, ft.each(o, function(t, e) {
                    var n = e[2],
                        i = e[3];
                    a[e[1]] = n.add, i && n.add(function() {
                        r = i
                    }, o[1 ^ t][2].disable, o[2][2].lock), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? a : this, arguments), this
                    }, s[e[0] + "With"] = n.fireWith
                }), a.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var r, e, n, i = 0,
                    o = rt.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && ft.isFunction(t.promise) ? a : 0,
                    l = 1 === s ? t : ft.Deferred(),
                    u = function(e, n, i) {
                        return function(t) {
                            n[e] = this, i[e] = 1 < arguments.length ? rt.call(arguments) : t, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (1 < a)
                    for (r = new Array(a), e = new Array(a), n = new Array(a); i < a; i++) o[i] && ft.isFunction(o[i].promise) ? o[i].promise().progress(u(i, e, r)).done(u(i, n, o)).fail(l.reject) : --s;
                return s || l.resolveWith(n, o), l.promise()
            }
        }), ft.fn.ready = function(t) {
            return ft.ready.promise().done(t), this
        }, ft.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ft.readyWait++ : ft.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0) !== t && 0 < --ft.readyWait || (Dt.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready")))
            }
        }), ft.ready.promise = function(e) {
            if (!Dt)
                if (Dt = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) S.setTimeout(ft.ready);
                else if (it.addEventListener) it.addEventListener("DOMContentLoaded", o), S.addEventListener("load", o);
            else {
                it.attachEvent("onreadystatechange", o), S.attachEvent("onload", o);
                var n = !1;
                try {
                    n = null == S.frameElement && it.documentElement
                } catch (i) {}
                n && n.doScroll && function t() {
                    if (!ft.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (i) {
                            return S.setTimeout(t, 50)
                        }
                        r(), ft.ready()
                    }
                }()
            }
            return Dt.promise(e)
        }, ft.ready.promise(), ft(dt)) break;
    dt.ownFirst = "0" === At, dt.inlineBlockNeedsLayout = !1, ft(function() {
            var t, e, n, i;
            (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"), (i = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = it.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                dt.deleteExpando = !1
            }
            t = null
        }();
    var Pt, Ot = function(t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
        },
        It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Lt = /([A-Z])/g;
    ft.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !u(t)
        },
        data: function(t, e, n) {
            return i(t, e, n)
        },
        removeData: function(t, e) {
            return a(t, e)
        },
        _data: function(t, e, n) {
            return i(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return a(t, e, !0)
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (t === undefined) {
                if (this.length && (r = ft.data(o), 1 === o.nodeType && !ft._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(o, i = ft.camelCase(i.slice(5)), r[i]);
                    ft._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ft.data(this, t)
            }) : 1 < arguments.length ? this.each(function() {
                ft.data(this, t, e)
            }) : o ? l(o, t, ft.data(o, t)) : undefined
        },
        removeData: function(t) {
            return this.each(function() {
                ft.removeData(this, t)
            })
        }
    }), ft.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = ft._queueHooks(t, e),
                a = function() {
                    ft.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ft._data(t, n) || ft._data(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    ft._removeData(t, e + "queue"), ft._removeData(t, n)
                })
            })
        }
    }), ft.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ft.queue(this[0], e) : n === undefined ? this : this.each(function() {
                var t = ft.queue(this, e, n);
                ft._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = ft.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; a--;)(n = ft._data(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e)
        }
    }), dt.shrinkWrapBlocks = function() {
        return null != Pt ? Pt : (Pt = !1, (e = it.getElementsByTagName("body")[0]) && e.style ? (t = it.createElement("div"), (n = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(it.createElement("div")).style.width = "5px", Pt = 3 !== t.offsetWidth), e.removeChild(n), Pt) : void 0);
        var t, e, n
    };
    var zt, Nt, Ft, Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        jt = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
        $t = ["Top", "Right", "Bottom", "Left"],
        Wt = function(t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Ht = function(t, e, n, i, r, o, a) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === ft.type(n))
                for (s in r = !0, n) Ht(t, e, s, n[s], !0, o, a);
            else if (i !== undefined && (r = !0, ft.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(ft(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        Bt = /^(?:checkbox|radio)$/i,
        qt = /<([\w:-]+)/,
        Yt = /^$|\/(?:java|ecma)script/i,
        Ut = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    zt = it.createElement("div"), Nt = it.createDocumentFragment(), Ft = it.createElement("input"), zt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === zt.firstChild.nodeType, dt.tbody = !zt.getElementsByTagName("tbody").length, dt.htmlSerialize = !!zt.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, Ft.type = "checkbox", Ft.checked = !0, Nt.appendChild(Ft), dt.appendChecked = Ft.checked, zt.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!zt.cloneNode(!0).lastChild.defaultValue, Nt.appendChild(zt), (Ft = it.createElement("input")).setAttribute("type", "radio"), Ft.setAttribute("checked", "checked"), Ft.setAttribute("name", "t"), zt.appendChild(Ft), dt.checkClone = zt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!zt.addEventListener, zt[ft.expando] = 1, dt.attributes = !zt.getAttribute(ft.expando);
    var Gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
    var Xt = /<|&#?\w+;/,
        Qt = /<tbody/i;
    ! function() {
        var t, e, n = it.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) e = "on" + t, (dt[t] = e in S) || (n.setAttribute(e, "t"), dt[t] = !1 === n.attributes[e].expando);
        n = null
    }();
    var Zt = /^(?:input|select|textarea)$/i,
        Jt = /^key/,
        Kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ee = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = ft._data(t);
            if (m) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = ft.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function(t) {
                        return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(c.elem, arguments)
                    }).elem = t), s = (e = (e || "").match(Et) || [""]).length; s--;) f = g = (o = ee.exec(e[s]) || [])[1], p = (o[2] || "").split(".").sort(), f && (u = ft.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ft.event.special[f] || {}, d = ft.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ft.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (h = a[f]) || ((h = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, c) || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = ft.hasData(t) && ft._data(t);
            if (m && (c = m.events)) {
                for (u = (e = (e || "").match(Et) || [""]).length; u--;)
                    if (f = g = (s = ee.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = ft.event.special[f] || {}, h = c[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || ft.removeEvent(t, f, m.handle), delete c[f])
                    } else
                        for (f in c) ft.event.remove(t, f + e[u], n, i, !0);
                ft.isEmptyObject(c) && (delete m.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function(t, e, n, i) {
            var r, o, a, s, l, u, c, d = [n || it],
                h = ct.call(t, "type") ? t.type : t,
                f = ct.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = n = n || it, 3 !== n.nodeType && 8 !== n.nodeType && !te.test(h + ft.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), o = h.indexOf(":") < 0 && "on" + h, (t = t[ft.expando] ? t : new ft.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), e = null == e ? [t] : ft.makeArray(e, [t]), l = ft.event.special[h] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                if (!i && !l.noBubble && !ft.isWindow(n)) {
                    for (s = l.delegateType || h, te.test(s + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || it) && d.push(u.defaultView || u.parentWindow || S)
                }
                for (c = 0;
                    (a = d[c++]) && !t.isPropagationStopped();) t.type = 1 < c ? s : l.bindType || h, (r = (ft._data(a, "events") || {})[t.type] && ft._data(a, "handle")) && r.apply(a, e), (r = o && a[o]) && r.apply && Ot(a) && (t.result = r.apply(a, e), !1 === t.result && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), e)) && Ot(n) && o && n[h] && !ft.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), ft.event.triggered = h;
                    try {
                        n[h]()
                    } catch (p) {}
                    ft.event.triggered = undefined, u && (n[o] = u)
                }
                return t.result
            }
        },
        dispatch: function(t) {
            t = ft.event.fix(t);
            var e, n, i, r, o, a = [],
                s = rt.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                u = ft.event.special[t.type] || {};
            if ((s[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (a = ft.event.handlers.call(this, t, l), e = 0;
                    (r = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, (i = ((ft.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < s; n++) i[r = (o = e[n]).selector + " "] === undefined && (i[r] = o.needsContext ? -1 < ft(r, this).index(l) : ft.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        fix: function(t) {
            if (t[ft.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Kt.test(r) ? this.mouseHooks : Jt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ft.Event(o), e = i.length; e--;) t[n = i[e]] = o[n];
            return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || it).documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === p() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, ft.Event = function(t, e) {
        if (!(this instanceof ft.Event)) return new ft.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? h : f) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, o) {
        ft.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function(t) {
                var e, n = this,
                    i = t.relatedTarget,
                    r = t.handleObj;
                return i && (i === n || ft.contains(n, i)) || (t.type = r.origType, e = r.handler.apply(this, arguments), t.type = o), e
            }
        }
    }), dt.submit || (ft.event.special.submit = {
        setup: function() {
            if (ft.nodeName(this, "form")) return !1;
            ft.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            if (ft.nodeName(this, "form")) return !1;
            ft.event.remove(this, "._submit")
        }
    }), dt.change || (ft.event.special.change = {
        setup: function() {
            if (Zt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1;
            ft.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Zt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ft.event.remove(this, "._change"), !Zt.test(this.nodeName)
        }
    }), dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(t) {
            ft.event.simulate(i, t.target, ft.event.fix(t))
        };
        ft.event.special[i] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = ft._data(t, i);
                e || t.addEventListener(n, r, !0), ft._data(t, i, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = ft._data(t, i) - 1;
                e ? ft._data(t, i, e) : (t.removeEventListener(n, r, !0), ft._removeData(t, i))
            }
        }
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return x(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return x(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = f), this.each(function() {
                ft.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ue = m(it).appendChild(it.createElement("div"));
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(re, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, a, s, l = ft.contains(t.ownerDocument, t);
            if (dt.html5Clone || ft.isXMLDoc(t) || !ie.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(o = ue.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (i = v(o), s = v(t), a = 0; null != (r = s[a]); ++a) i[a] && M(r, i[a]);
            if (e)
                if (n)
                    for (s = s || v(t), i = i || v(o), a = 0; null != (r = s[a]); a++) C(r, i[a]);
                else C(t, o);
            return 0 < (i = v(o, "script")).length && y(i, !l && v(t, "script")), i = s = r = null, o
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, a = 0, s = ft.expando, l = ft.cache, u = dt.attributes, c = ft.event.special; null != (n = t[a]); a++)
                if ((e || Ot(n)) && (o = (r = n[s]) && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), nt.push(r))
                }
        }
    }), ft.fn.extend({
        domManip: T,
        detach: function(t) {
            return D(this, t, !0)
        },
        remove: function(t) {
            return D(this, t)
        },
        text: function(t) {
            return Ht(this, function(t) {
                return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return T(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = w(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return T(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ht(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !oe.test(t) && (dt.htmlSerialize || !ie.test(t)) && (dt.leadingWhitespace || !Ut.test(t)) && !Gt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return T(this, arguments, function(t) {
                var e = this.parentNode;
                ft.inArray(this, n) < 0 && (ft.cleanData(v(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, a) {
        ft.fn[t] = function(t) {
            for (var e, n = 0, i = [], r = ft(t), o = r.length - 1; n <= o; n++) e = n === o ? this : this.clone(!0), ft(r[n])[a](e), at.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var ce, de = {
            HTML: "block",
            BODY: "block"
        },
        he = /^margin/,
        fe = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
        pe = function(t, e, n, i) {
            var r, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            for (o in r = n.apply(t, i || []), e) t.style[o] = a[o];
            return r
        },
        ge = it.documentElement;
    ! function() {
        function t() {
            var t, e, n = it.documentElement;
            n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                i = o = l = !1, r = s = !0, S.getComputedStyle && (e = S.getComputedStyle(c), i = "1%" !== (e || {}).top, l = "2px" === (e || {}).marginLeft, o = "4px" === (e || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", r = "4px" === (e || {
                    marginRight: "4px"
                }).marginRight, (t = c.appendChild(it.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", s = !parseFloat((S.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)), n.removeChild(u)
        }
        var i, r, o, a, s, l, u = it.createElement("div"),
            c = it.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === c.style.opacity, dt.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = it.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), dt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ft.extend(dt, {
            reliableHiddenOffsets: function() {
                return null == i && t(), a
            },
            boxSizingReliable: function() {
                return null == i && t(), o
            },
            pixelMarginRight: function() {
                return null == i && t(), r
            },
            pixelPosition: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                return null == i && t(), s
            },
            reliableMarginLeft: function() {
                return null == i && t(), l
            }
        }))
    }();
    var me, ve, ye = /^(top|right|bottom|left)$/;
    S.getComputedStyle ? (me = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = S), e.getComputedStyle(t)
    }, ve = function(t, e, n) {
        var i, r, o, a, s = t.style;
        return "" !== (a = (n = n || me(t)) ? n.getPropertyValue(e) || n[e] : undefined) && a !== undefined || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), n && !dt.pixelMarginRight() && fe.test(a) && he.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), a === undefined ? a : a + ""
    }) : ge.currentStyle && (me = function(t) {
        return t.currentStyle
    }, ve = function(t, e, n) {
        var i, r, o, a, s = t.style;
        return null == (a = (n = n || me(t)) ? n[e] : undefined) && s && s[e] && (a = s[e]), fe.test(a) && !ye.test(e) && (i = s.left, (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), a === undefined ? a : a + "" || "auto"
    });
    var be = /alpha\([^)]*\)/i,
        xe = /opacity\s*=\s*([^)]*)/i,
        we = /^(none|table(?!-c[ea]).+)/,
        _e = new RegExp("^(" + Rt + ")(.*)$", "i"),
        Se = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ce = ["Webkit", "O", "Moz", "ms"],
        Me = it.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ve(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, s = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[s] || (ft.cssProps[s] = O(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], n === undefined) return a && "get" in a && (r = a.get(t, !1, i)) !== undefined ? r : l[e];
                if ("string" === (o = typeof n) && (r = jt.exec(n)) && r[1] && (n = d(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (ft.cssNumber[s] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && (n = a.set(t, n, i)) === undefined))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, a, s = ft.camelCase(e);
            return e = ft.cssProps[s] || (ft.cssProps[s] = O(s) || s), (a = ft.cssHooks[e] || ft.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), o === undefined && (o = ve(t, e, i)), "normal" === o && e in ke && (o = ke[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ft.each(["height", "width"], function(t, r) {
        ft.cssHooks[r] = {
            get: function(t, e, n) {
                if (e) return we.test(ft.css(t, "display")) && 0 === t.offsetWidth ? pe(t, Se, function() {
                    return N(t, r, n)
                }) : N(t, r, n)
            },
            set: function(t, e, n) {
                var i = n && me(t);
                return L(t, e, n ? z(t, r, n, dt.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), dt.opacity || (ft.cssHooks.opacity = {
        get: function(t, e) {
            return xe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= e || "" === e) && "" === ft.trim(o.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = be.test(o) ? o.replace(be, r) : o + " " + r)
        }
    }), ft.cssHooks.marginRight = P(dt.reliableMarginRight, function(t, e) {
        if (e) return pe(t, {
            display: "inline-block"
        }, ve, [t, "marginRight"])
    }), ft.cssHooks.marginLeft = P(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(ve(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        ft.cssHooks[r + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + $t[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, he.test(r) || (ft.cssHooks[r + o].set = L)
    }), ft.fn.extend({
        css: function(t, e) {
            return Ht(this, function(t, e, n) {
                var i, r, o = {},
                    a = 0;
                if (ft.isArray(e)) {
                    for (i = me(t), r = e.length; a < r; a++) o[e[a]] = ft.css(t, e[a], !1, i);
                    return o
                }
                return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Wt(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), (ft.Tween = F).prototype = {
        constructor: F,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = F.prototype.init, ft.fx.step = {};
    var Te, De, Ae, Ee, Pe, Oe, Ie, Le = /^(?:toggle|show|hide)$/,
        ze = /queueHooks$/;
    ft.Animation = ft.extend(B, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return d(n.elem, t, jt.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Et);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
        },
        prefilters: [W],
        prefilter: function(t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), ft.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
        }, i
    }, ft.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Wt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(e, t, n, i) {
            var r = ft.isEmptyObject(e),
                o = ft.speed(t, n, i),
                a = function() {
                    var t = B(this, ft.extend({}, e), o);
                    (r || ft._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(r, t, o) {
            var a = function(t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof r && (o = t, t = r, r = undefined), t && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    n = ft.timers,
                    i = ft._data(this);
                if (e) i[e] && i[e].stop && a(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && ze.test(e) && a(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                !t && o || ft.dequeue(this, r)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var t, e = ft._data(this),
                    n = e[a + "queue"],
                    i = e[a + "queueHooks"],
                    r = ft.timers,
                    o = n ? n.length : 0;
                for (e.finish = !0, ft.queue(this, a, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === a && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function(t, i) {
        var r = ft.fn[i];
        ft.fn[i] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(j(i, !0), t, e, n)
        }
    }), ft.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, i) {
        ft.fn[t] = function(t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), ft.timers = [], ft.fx.tick = function() {
        var t, e = ft.timers,
            n = 0;
        for (Te = ft.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ft.fx.stop(), Te = undefined
    }, ft.fx.timer = function(t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
    }, ft.fx.interval = 13, ft.fx.start = function() {
        De || (De = S.setInterval(ft.fx.tick, ft.fx.interval))
    }, ft.fx.stop = function() {
        S.clearInterval(De), De = null
    }, ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ft.fn.delay = function(i, t) {
        return i = ft.fx && ft.fx.speeds[i] || i, t = t || "fx", this.queue(t, function(t, e) {
            var n = S.setTimeout(t, i);
            e.stop = function() {
                S.clearTimeout(n)
            }
        })
    }, Ee = it.createElement("input"), Pe = it.createElement("div"), Oe = it.createElement("select"), Ie = Oe.appendChild(it.createElement("option")), (Pe = it.createElement("div")).setAttribute("className", "t"), Pe.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Ae = Pe.getElementsByTagName("a")[0], Ee.setAttribute("type", "checkbox"), Pe.appendChild(Ee), (Ae = Pe.getElementsByTagName("a")[0]).style.cssText = "top:1px", dt.getSetAttribute = "t" !== Pe.className, dt.style = /top/.test(Ae.getAttribute("style")), dt.hrefNormalized = "/a" === Ae.getAttribute("href"), dt.checkOn = !!Ee.value, dt.optSelected = Ie.selected, dt.enctype = !!it.createElement("form").enctype, Oe.disabled = !0, dt.optDisabled = !Ie.disabled, (Ee = it.createElement("input")).setAttribute("value", ""), dt.input = "" === Ee.getAttribute("value"), Ee.value = "t", Ee.setAttribute("type", "radio"), dt.radioValue = "t" === Ee.value;
    var Ne = /\r/g,
        Fe = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function(n) {
            var i, t, r, e = this[0];
            return arguments.length ? (r = ft.isFunction(n), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = r ? n.call(this, t, ft(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : ft.isArray(e) && (e = ft.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (i = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, e, "value") !== undefined || (this.value = e))
            })) : e ? (i = ft.valHooks[e.type] || ft.valHooks[e.nodeName.toLowerCase()]) && "get" in i && (t = i.get(e, "value")) !== undefined ? t : "string" == typeof(t = e.value) ? t.replace(Ne, "") : null == t ? "" : t : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Fe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (((n = i[l]).selected || l === r) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = ft.makeArray(e), a = r.length; a--;)
                        if (i = r[a], -1 < ft.inArray(ft.valHooks.option.get(i), o)) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e)
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Re, je, $e = ft.expr.attrHandle,
        We = /^(?:checked|selected)$/i,
        He = dt.getSetAttribute,
        Be = dt.input;
    ft.fn.extend({
        attr: function(t, e) {
            return Ht(this, ft.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === o && ft.isXMLDoc(t) || (e = e.toLowerCase(), r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? je : Re)), n !== undefined ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = ft.find.attr(t, e)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(Et);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Be && He || !We.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(He ? n : i)
        }
    }), je = {
        set: function(t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : Be && He || !We.test(n) ? t.setAttribute(!He && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var o = $e[e] || ft.find.attr;
        Be && He || !We.test(e) ? $e[e] = function(t, e, n) {
            var i, r;
            return n || (r = $e[e], $e[e] = i, i = null != o(t, e, n) ? e.toLowerCase() : null, $e[e] = r), i
        } : $e[e] = function(t, e, n) {
            if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Be && He || (ft.attrHooks.value = {
        set: function(t, e, n) {
            if (!ft.nodeName(t, "input")) return Re && Re.set(t, e, n);
            t.defaultValue = e
        }
    }), He || (Re = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, $e.id = $e.name = $e.coords = function(t, e, n) {
        var i;
        if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ft.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: Re.set
    }, ft.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Re.set(t, "" !== e && e, n)
        }
    }, ft.each(["width", "height"], function(t, n) {
        ft.attrHooks[n] = {
            set: function(t, e) {
                if ("" === e) return t.setAttribute(n, "auto"), e
            }
        }
    })), dt.style || (ft.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || undefined
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var qe = /^(?:input|select|textarea|button|object)$/i,
        Ye = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Ht(this, ft.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = ft.propFix[e] || e, this.each(function() {
                try {
                    this[e] = undefined, delete this[e]
                } catch (t) {}
            })
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), n !== undefined ? r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : qe.test(t.nodeName) || Ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || ft.each(["href", "src"], function(t, e) {
        ft.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ft.propFix[this.toLowerCase()] = this
    }), dt.enctype || (ft.propFix.enctype = "encoding");
    var Ue = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (ft.isFunction(e)) return this.each(function(t) {
                ft(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[l++];)
                    if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = ft.trim(i)) && ft.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (ft.isFunction(e)) return this.each(function(t) {
                ft(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[l++];)
                    if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = ft.trim(i)) && ft.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(r, e) {
            var o = typeof r;
            return "boolean" == typeof e && "string" === o ? e ? this.addClass(r) : this.removeClass(r) : ft.isFunction(r) ? this.each(function(t) {
                ft(this).toggleClass(r.call(this, t, q(this), e), e)
            }) : this.each(function() {
                var t, e, n, i;
                if ("string" === o)
                    for (e = 0, n = ft(this), i = r.match(Et) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else r !== undefined && "boolean" !== o || ((t = q(this)) && ft._data(this, "__className__", t), ft.attr(this, "class", t || !1 === r ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + q(n) + " ").replace(Ue, " ").indexOf(e)) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
        ft.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Ve = S.location,
        Ge = ft.now(),
        Xe = /\?/,
        Qe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function(t) {
        if (S.JSON && S.JSON.parse) return S.JSON.parse(t + "");
        var r, o = null,
            e = ft.trim(t + "");
        return e && !ft.trim(e.replace(Qe, function(t, e, n, i) {
            return r && e && (o = 0), 0 === o ? t : (r = n || e, o += !i - !n, "")
        })) ? Function("return " + e)() : ft.error("Invalid JSON: " + t)
    }, ft.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            S.DOMParser ? e = (new S.DOMParser).parseFromString(t, "text/xml") : ((e = new S.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
        } catch (n) {
            e = undefined
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + t), e
    };
    var Ze = /#.*$/,
        Je = /([?&])_=[^&]*/,
        Ke = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        en = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        on = {},
        an = {},
        sn = "*/".concat("*"),
        ln = Ve.href,
        un = rn.exec(ln.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: tn.test(un[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
        },
        ajaxPrefilter: Y(on),
        ajaxTransport: Y(an),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, o, a, s, l, u = e;
                2 !== w && (w = 2, h && S.clearTimeout(h), p = undefined, d = i || "", _.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (s = G(g, _, n)), s = X(g, s, _, r), r ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (ft.lastModified[c] = l), (l = _.getResponseHeader("etag")) && (ft.etag[c] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !t && u || (u = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || u) + "", r ? y.resolveWith(m, [o, u, _]) : y.rejectWith(m, [_, u, a]), _.statusCode(x), x = undefined, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [_, g, r ? o : a]), b.fireWith(m, [_, u]), f && (v.trigger("ajaxComplete", [_, g]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = undefined), e = e || {};
            var i, r, c, d, h, f, p, o, g = ft.ajaxSetup({}, e),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? ft(m) : ft.event,
                y = ft.Deferred(),
                b = ft.Callbacks("once memory"),
                x = g.statusCode || {},
                a = {},
                s = {},
                w = 0,
                l = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!o)
                                for (o = {}; e = Ke.exec(d);) o[e[1].toLowerCase()] = e[2];
                            e = o[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = s[n] = s[n] || t, a[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (g.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (w < 2)
                                for (e in t) x[e] = [x[e], t[e]];
                            else _.always(t[_.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || l;
                        return p && p.abort(e), n(0, e), this
                    }
                };
            if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, g.url = ((t || g.url || ln) + "").replace(Ze, "").replace(nn, un[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = ft.trim(g.dataType || "*").toLowerCase().match(Et) || [""], null == g.crossDomain && (i = rn.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = ft.param(g.data, g.traditional)), U(on, g, e, _), 2 === w) return _;
            for (r in (f = ft.event && g.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !en.test(g.type), c = g.url, g.hasContent || (g.data && (c = g.url += (Xe.test(c) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Je.test(c) ? c.replace(Je, "$1_=" + Ge++) : c + (Xe.test(c) ? "&" : "?") + "_=" + Ge++)), g.ifModified && (ft.lastModified[c] && _.setRequestHeader("If-Modified-Since", ft.lastModified[c]), ft.etag[c] && _.setRequestHeader("If-None-Match", ft.etag[c])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, _, g) || 2 === w)) return _.abort();
            for (r in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[r](g[r]);
            if (p = U(an, g, e, _)) {
                if (_.readyState = 1, f && v.trigger("ajaxSend", [_, g]), 2 === w) return _;
                g.async && 0 < g.timeout && (h = S.setTimeout(function() {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, p.send(a, n)
                } catch (u) {
                    if (!(w < 2)) throw u;
                    n(-1, u)
                }
            } else n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ft.get(t, undefined, e, "script")
        }
    }), ft.each(["get", "post"], function(t, r) {
        ft[r] = function(t, e, n, i) {
            return ft.isFunction(e) && (i = i || n, n = e, e = undefined), ft.ajax(ft.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function(e) {
            if (ft.isFunction(e)) return this.each(function(t) {
                ft(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ft(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return ft.isFunction(n) ? this.each(function(t) {
                ft(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = ft(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = ft.isFunction(e);
            return this.each(function(t) {
                ft(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function(t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Z(t)
    }, ft.expr.filters.visible = function(t) {
        return !ft.expr.filters.hidden(t)
    };
    var cn = /%20/g,
        dn = /\[\]$/,
        hn = /\r?\n/g,
        fn = /^(?:submit|button|image|reset|file)$/i,
        pn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) J(n, t[n], e, r);
        return i.join("&").replace(cn, "+")
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && pn.test(this.nodeName) && !fn.test(t) && (this.checked || !Bt.test(t))
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(hn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = S.ActiveXObject !== undefined ? function() {
        return this.isLocal ? tt() : 8 < it.documentMode ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || tt()
    } : K;
    var gn = 0,
        mn = {},
        vn = ft.ajaxSettings.xhr();
    S.attachEvent && S.attachEvent("onunload", function() {
        for (var t in mn) mn[t](undefined, !0)
    }), dt.cors = !!vn && "withCredentials" in vn, (vn = dt.ajax = !!vn) && ft.ajaxTransport(function(u) {
        var c;
        if (!u.crossDomain || dt.cors) return {
            send: function(t, a) {
                var e, s = u.xhr(),
                    l = ++gn;
                if (s.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                    for (e in u.xhrFields) s[e] = u.xhrFields[e];
                for (e in u.mimeType && s.overrideMimeType && s.overrideMimeType(u.mimeType), u.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) t[e] !== undefined && s.setRequestHeader(e, t[e] + "");
                s.send(u.hasContent && u.data || null), c = function(t, e) {
                    var n, i, r;
                    if (c && (e || 4 === s.readyState))
                        if (delete mn[l], c = undefined, s.onreadystatechange = ft.noop, e) 4 !== s.readyState && s.abort();
                        else {
                            r = {}, n = s.status, "string" == typeof s.responseText && (r.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (o) {
                                i = ""
                            }
                            n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                        }
                    r && a(n, i, r, s.getAllResponseHeaders())
                }, u.async ? 4 === s.readyState ? S.setTimeout(c) : s.onreadystatechange = mn[l] = c : c()
            },
            abort: function() {
                c && c(undefined, !0)
            }
        }
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var i, r = it.head || ft("head")[0] || it.documentElement;
            return {
                send: function(t, n) {
                    (i = it.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function(t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                },
                abort: function() {
                    i && i.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = yn.pop() || ft.expando + "_" + Ge++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function(t, e, n) {
        var i, r, o, a = !1 !== t.jsonp && (bn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ft.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(bn, "$1" + i) : !1 !== t.jsonp && (t.url += (Xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || ft.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = S[i], S[i] = function() {
            o = arguments
        }, n.always(function() {
            r === undefined ? ft(S).removeProp(i) : S[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, yn.push(i)), o && ft.isFunction(r) && r(o[0]), o = r = undefined
        }), "script"
    }), ft.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || it;
        var i = _t.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = g([t], e, r), r && r.length && ft(r).remove(), ft.merge([], i.childNodes))
    };
    var xn = ft.fn.load;
    ft.fn.load = function(t, e, n) {
            if ("string" != typeof t && xn) return xn.apply(this, arguments);
            var i, r, o, a = this,
                s = t.indexOf(" ");
            return -1 < s && (i = ft.trim(t.slice(s, t.length)), t = t.slice(0, s)), ft.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (r = "POST"), 0 < a.length && ft.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ft.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ft.expr.filters.animated = function(e) {
            return ft.grep(ft.timers, function(t) {
                return e === t.elem
            }).length
        }, ft.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, a, s, l, u = ft.css(t, "position"),
                    c = ft(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), s = c.offset(), o = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < ft.inArray("auto", [o, l]) ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
            }
        }, ft.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) {
                    ft.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (t = o.documentElement, ft.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ft.css(i, "marginTop", !0),
                        left: e.left - n.left - ft.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                    return t || ge
                })
            }
        }), ft.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, r) {
            var o = /Y/.test(r);
            ft.fn[e] = function(t) {
                return Ht(this, function(t, e, n) {
                    var i = et(t);
                    if (n === undefined) return i ? r in i ? i[r] : i.document.documentElement[e] : t[e];
                    i ? i.scrollTo(o ? ft(i).scrollLeft() : n, o ? n : ft(i).scrollTop()) : t[e] = n
                }, e, t, arguments.length, null)
            }
        }), ft.each(["top", "left"], function(t, n) {
            ft.cssHooks[n] = P(dt.pixelPosition, function(t, e) {
                if (e) return e = ve(t, n), fe.test(e) ? ft(t).position()[n] + "px" : e
            })
        }), ft.each({
            Height: "height",
            Width: "width"
        }, function(o, a) {
            ft.each({
                padding: "inner" + o,
                content: a,
                "": "outer" + o
            }, function(i, t) {
                ft.fn[t] = function(t, e) {
                    var n = arguments.length && (i || "boolean" != typeof t),
                        r = i || (!0 === t || !0 === e ? "margin" : "border");
                    return Ht(this, function(t, e, n) {
                        var i;
                        return ft.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + o], i["scroll" + o], t.body["offset" + o], i["offset" + o], i["client" + o])) : n === undefined ? ft.css(t, e, r) : ft.style(t, e, n, r)
                    }, a, n ? t : undefined, n, null)
                }
            })
        }), ft.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }),
        ft.fn.size = function() {
            return this.length
        }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ft
        });
    var wn = S.jQuery,
        _n = S.$;
    return ft.noConflict = function(t) {
        return S.$ === ft && (S.$ = _n), t && S.jQuery === ft && (S.jQuery = wn), ft
    }, t || (S.jQuery = S.$ = ft), ft
}),
function(c, l) {
    "use strict";
    var u;
    c.rails !== l && c.error("jquery-ujs has already been loaded!");
    var t = c(document);
    c.rails = u = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return c("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return c("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = u.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
        },
        fire: function(t, e, n) {
            var i = c.Event(e);
            return t.trigger(i, n), !1 !== i.result
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(t) {
            return c.ajax(t)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== l && !1 !== t.data("remote")
        },
        handleRemote: function(i) {
            var t, e, n, r, o, a;
            if (u.fire(i, "ajax:before")) {
                if (r = i.data("with-credentials") || null, o = i.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, i.is("form")) {
                    t = i.data("ujs:submit-button-formmethod") || i.attr("method"), e = i.data("ujs:submit-button-formaction") || i.attr("action"), n = c(i[0]).serializeArray();
                    var s = i.data("ujs:submit-button");
                    s && (n.push(s), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(u.inputChangeSelector) ? (t = i.data("method"), e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(u.buttonClickSelector) ? (t = i.data("method") || "get", e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (t = i.data("method"), e = u.href(i), n = i.data("params") || null);
                return a = {
                    type: t || "GET",
                    data: n,
                    dataType: o,
                    beforeSend: function(t, e) {
                        if (e.dataType === l && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !u.fire(i, "ajax:beforeSend", [t, e])) return !1;
                        i.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: u.isCrossDomain(e)
                }, r && (a.xhrFields = {
                    withCredentials: r
                }), e && (a.url = e), u.ajax(a)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(t) {
            var e = u.href(t),
                n = t.data("method"),
                i = t.attr("target"),
                r = u.csrfToken(),
                o = u.csrfParam(),
                a = c('<form method="post" action="' + e + '"></form>'),
                s = '<input name="_method" value="' + n + '" type="hidden" />';
            o === l || r === l || u.isCrossDomain(e) || (s += '<input name="' + o + '" value="' + r + '" type="hidden" />'), i && a.attr("target", i), a.hide().append(s).appendTo("body"), a.submit()
        },
        formElements: function(t, e) {
            return t.is("form") ? c(t[0].elements).filter(e) : t.find(e)
        },
        disableFormElements: function(t) {
            u.formElements(t, u.disableSelector).each(function() {
                u.disableFormElement(c(this))
            })
        },
        disableFormElement: function(t) {
            var e, n;
            e = t.is("button") ? "html" : "val", (n = t.data("disable-with")) !== l && (t.data("ujs:enable-with", t[e]()), t[e](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            u.formElements(t, u.enableSelector).each(function() {
                u.enableFormElement(c(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== l && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
                i = !1;
            if (!n) return !0;
            if (u.fire(t, "confirm")) {
                try {
                    i = u.confirm(n)
                } catch (r) {
                    (console.error || console.log).call(console, r.stack || r)
                }
                e = u.fire(t, "confirm:complete", [i])
            }
            return i && e
        },
        blankInputs: function(t, e, n) {
            var i, r, o, a = c(),
                s = e || "input,textarea",
                l = t.find(s),
                u = {};
            return l.each(function() {
                (i = c(this)).is("input[type=radio]") ? (o = i.attr("name"), u[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (r = t.find('input[type=radio][name="' + o + '"]'), a = a.add(r)), u[o] = o)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (a = a.add(i))
            }), !!a.length && a
        },
        nonBlankInputs: function(t, e) {
            return u.blankInputs(t, e, !0)
        },
        stopEverything: function(t) {
            return c(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var e = t.data("disable-with");
            e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)), t.bind("click.railsDisable", function(t) {
                return u.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== l && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, u.fire(t, "rails:attachBindings") && (c.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || u.CSRFProtection(n)
    }), c(window).on("pageshow.rails", function() {
        c(c.rails.enableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableFormElement(t)
        }), c(c.rails.linkDisableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableElement(t)
        })
    }), t.on("ajax:complete", u.linkDisableSelector, function() {
        u.enableElement(c(this))
    }), t.on("ajax:complete", u.buttonDisableSelector, function() {
        u.enableFormElement(c(this))
    }), t.on("click.rails", u.linkClickSelector, function(t) {
        var e = c(this),
            n = e.data("method"),
            i = e.data("params"),
            r = t.metaKey || t.ctrlKey;
        if (!u.allowAction(e)) return u.stopEverything(t);
        if (!r && e.is(u.linkDisableSelector) && u.disableElement(e), u.isRemote(e)) {
            if (r && (!n || "GET" === n) && !i) return !0;
            var o = u.handleRemote(e);
            return !1 === o ? u.enableElement(e) : o.fail(function() {
                u.enableElement(e)
            }), !1
        }
        return n ? (u.handleMethod(e), !1) : void 0
    }), t.on("click.rails", u.buttonClickSelector, function(t) {
        var e = c(this);
        if (!u.allowAction(e) || !u.isRemote(e)) return u.stopEverything(t);
        e.is(u.buttonDisableSelector) && u.disableFormElement(e);
        var n = u.handleRemote(e);
        return !1 === n ? u.enableFormElement(e) : n.fail(function() {
            u.enableFormElement(e)
        }), !1
    }), t.on("change.rails", u.inputChangeSelector, function(t) {
        var e = c(this);
        return u.allowAction(e) && u.isRemote(e) ? (u.handleRemote(e), !1) : u.stopEverything(t)
    }), t.on("submit.rails", u.formSubmitSelector, function(t) {
        var e, n, i = c(this),
            r = u.isRemote(i);
        if (!u.allowAction(i)) return u.stopEverything(t);
        if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
                if ((e = u.blankInputs(i, u.requiredInputSelector, !1)) && u.fire(i, "ajax:aborted:required", [e])) return u.stopEverything(t)
            } else i.data("ujs:formnovalidate-button", l);
        if (r) {
            if (n = u.nonBlankInputs(i, u.fileInputSelector)) {
                setTimeout(function() {
                    u.disableFormElements(i)
                }, 13);
                var o = u.fire(i, "ajax:aborted:file", [n]);
                return o || setTimeout(function() {
                    u.enableFormElements(i)
                }, 13), o
            }
            return u.handleRemote(i), !1
        }
        setTimeout(function() {
            u.disableFormElements(i)
        }, 13)
    }), t.on("click.rails", u.formInputClickSelector, function(t) {
        var e = c(this);
        if (!u.allowAction(e)) return u.stopEverything(t);
        var n = e.attr("name"),
            i = n ? {
                name: n,
                value: e.val()
            } : null,
            r = e.closest("form");
        0 === r.length && (r = c("#" + e.attr("form"))), r.data("ujs:submit-button", i), r.data("ujs:formnovalidate-button", e.attr("formnovalidate")), r.data("ujs:submit-button-formaction", e.attr("formaction")), r.data("ujs:submit-button-formmethod", e.attr("formmethod"))
    }), t.on("ajax:send.rails", u.formSubmitSelector, function(t) {
        this === t.target && u.disableFormElements(c(this))
    }), t.on("ajax:complete.rails", u.formSubmitSelector, function(t) {
        this === t.target && u.enableFormElements(c(this))
    }), c(function() {
        u.refreshCSRFTokens()
    }))
}(jQuery),
function(i) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (t.style[n] !== undefined) return {
                end: e[n]
            };
        return !1
    }
    i.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            n = this;
        return i(this).one("bsTransitionEnd", function() {
            e = !0
        }), setTimeout(function() {
            e || i(n).trigger(i.support.transition.end)
        }, t), this
    }, i(function() {
        i.support.transition = t(), i.support.transition && (i.event.special.bsTransitionEnd = {
            bindType: i.support.transition.end,
            delegateType: i.support.transition.end,
            handle: function(t) {
                if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(o) {
    "use strict";

    function t(n) {
        return this.each(function() {
            var t = o(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof n && e[n].call(t)
        })
    }
    var e = '[data-dismiss="alert"]',
        a = function(t) {
            o(t).on("click", e, this.close)
        };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var n = o(this),
            i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = o("#" === i ? [] : i);
        t && t.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(t = o.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), o.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
    };
    var n = o.fn.alert;
    o.fn.alert = t, o.fn.alert.Constructor = a, o.fn.alert.noConflict = function() {
        return o.fn.alert = n, this
    }, o(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(o) {
    "use strict";

    function n(i) {
        return this.each(function() {
            var t = o(this),
                e = t.data("bs.button"),
                n = "object" == typeof i && i;
            e || t.data("bs.button", e = new r(this, n)), "toggle" == i ? e.toggle() : i && e.setState(i)
        })
    }
    var r = function(t, e) {
        this.$element = o(t), this.options = o.extend({}, r.DEFAULTS, e), this.isLoading = !1
    };
    r.VERSION = "3.3.7", r.DEFAULTS = {
        loadingText: "loading..."
    }, r.prototype.setState = function(t) {
        var e = "disabled",
            n = this.$element,
            i = n.is("input") ? "val" : "html",
            r = n.data();
        t += "Text", null == r.resetText && n.data("resetText", n[i]()), setTimeout(o.proxy(function() {
            n[i](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e).prop(e, !1))
        }, this), 0)
    }, r.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var t = o.fn.button;
    o.fn.button = n, o.fn.button.Constructor = r, o.fn.button.noConflict = function() {
        return o.fn.button = t, this
    }, o(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = o(t.target).closest(".btn");
        n.call(e, "toggle"), o(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        o(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(d) {
    "use strict";

    function a(r) {
        return this.each(function() {
            var t = d(this),
                e = t.data("bs.carousel"),
                n = d.extend({}, h.DEFAULTS, t.data(), "object" == typeof r && r),
                i = "string" == typeof r ? r : n.slide;
            e || t.data("bs.carousel", e = new h(this, n)), "number" == typeof r ? e.to(r) : i ? e[i]() : n.interval && e.pause().cycle()
        })
    }
    var h = function(t, e) {
        this.$element = d(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
    };
    h.VERSION = "3.3.7", h.TRANSITION_DURATION = 600, h.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, h.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, h.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval)), this
    }, h.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, h.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, h.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
    }, h.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, h.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, h.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, h.prototype.slide = function(t, e) {
        var n = this.$element.find(".item.active"),
            i = e || this.getItemForDirection(t, n),
            r = this.interval,
            o = "next" == t ? "left" : "right",
            a = this;
        if (i.hasClass("active")) return this.sliding = !1;
        var s = i[0],
            l = d.Event("slide.bs.carousel", {
                relatedTarget: s,
                direction: o
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = d(this.$indicators.children()[this.getItemIndex(i)]);
                u && u.addClass("active")
            }
            var c = d.Event("slid.bs.carousel", {
                relatedTarget: s,
                direction: o
            });
            return d.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, n.addClass(o), i.addClass(o), n.one("bsTransitionEnd", function() {
                i.removeClass([t, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function() {
                    a.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(h.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(c)), r && this.cycle(), this
        }
    };
    var t = d.fn.carousel;
    d.fn.carousel = a, d.fn.carousel.Constructor = h, d.fn.carousel.noConflict = function() {
        return d.fn.carousel = t, this
    };
    var e = function(t) {
        var e, n = d(this),
            i = d(n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var r = d.extend({}, i.data(), n.data()),
                o = n.attr("data-slide-to");
            o && (r.interval = !1), a.call(i, r), o && i.data("bs.carousel").to(o), t.preventDefault()
        }
    };
    d(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), d(window).on("load", function() {
        d('[data-ride="carousel"]').each(function() {
            var t = d(this);
            a.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";

    function r(t) {
        var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return a(n)
    }

    function s(i) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.collapse"),
                n = a.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
            !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || t.data("bs.collapse", e = new l(this, n)), "string" == typeof i && e[i]()
        })
    }
    var l = function(t, e) {
        this.$element = a(t), this.options = a.extend({}, l.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                var n = a.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    e && e.length && (s.call(e, "hide"), t || e.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return r.call(this);
                    var o = a.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(r, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][o])
                }
            }
        }
    }, l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!a.support.transition) return n.call(this);
                this.$element[e](0).one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION)
            }
        }
    }, l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, l.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(t, e) {
            var n = a(e);
            this.addAriaAndCollapsedClass(r(n), n)
        }, this)).end()
    }, l.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var t = a.fn.collapse;
    a.fn.collapse = s, a.fn.collapse.Constructor = l, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = t, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = a(this);
        e.attr("data-target") || t.preventDefault();
        var n = r(e),
            i = n.data("bs.collapse") ? "toggle" : e.data();
        s.call(n, i)
    })
}(jQuery),
function(s) {
    "use strict";

    function l(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var n = e && s(e);
        return n && n.length ? n : t.parent()
    }

    function o(i) {
        i && 3 === i.which || (s(e).remove(), s(u).each(function() {
            var t = s(this),
                e = l(t),
                n = {
                    relatedTarget: this
                };
            e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(e[0], i.target) || (e.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))))
        }))
    }

    function t(n) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
        })
    }
    var e = ".dropdown-backdrop",
        u = '[data-toggle="dropdown"]',
        i = function(t) {
            s(t).on("click.bs.dropdown", this.toggle)
        };
    i.VERSION = "3.3.7", i.prototype.toggle = function(t) {
        var e = s(this);
        if (!e.is(".disabled, :disabled")) {
            var n = l(e),
                i = n.hasClass("open");
            if (o(), !i) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", o);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(t = s.Event("show.bs.dropdown", r)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, i.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = s(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var n = l(e),
                    i = n.hasClass("open");
                if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(u).trigger("focus"), e.trigger("click");
                var r = " li:not(.disabled):visible a",
                    o = n.find(".dropdown-menu" + r);
                if (o.length) {
                    var a = o.index(t.target);
                    38 == t.which && 0 < a && a--, 40 == t.which && a < o.length - 1 && a++, ~a || (a = 0), o.eq(a).trigger("focus")
                }
            }
        }
    };
    var n = s.fn.dropdown;
    s.fn.dropdown = t, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function() {
        return s.fn.dropdown = n, this
    }, s(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", u, i.prototype.toggle).on("keydown.bs.dropdown.data-api", u, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(o) {
    "use strict";

    function a(i, r) {
        return this.each(function() {
            var t = o(this),
                e = t.data("bs.modal"),
                n = o.extend({}, s.DEFAULTS, t.data(), "object" == typeof i && i);
            e || t.data("bs.modal", e = new s(this, n)), "string" == typeof i ? e[i](r) : n.show && e.show(r)
        })
    }
    var s = function(t, e) {
        this.options = e, this.$body = o(document.body), this.$element = o(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    s.VERSION = "3.3.7", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, s.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, s.prototype.show = function(n) {
        var i = this,
            t = o.Event("show.bs.modal", {
                relatedTarget: n
            });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                o(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var t = o.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var e = o.Event("shown.bs.modal", {
                relatedTarget: n
            });
            t ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
        }))
    }, s.prototype.hide = function(t) {
        t && t.preventDefault(), t = o.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), o(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
    }, s.prototype.enforceFocus = function() {
        o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, s.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, s.prototype.resize = function() {
        this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal")
    }, s.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, s.prototype.backdrop = function(t) {
        var e = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = o.support.transition && n;
            if (this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", o.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                e.removeBackdrop(), t && t()
            };
            o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : r()
        } else t && t()
    }, s.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, s.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, s.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, s.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, s.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = o.fn.modal;
    o.fn.modal = a, o.fn.modal.Constructor = s, o.fn.modal.noConflict = function() {
        return o.fn.modal = t, this
    }, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = o(this),
            n = e.attr("href"),
            i = o(e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = i.data("bs.modal") ? "toggle" : o.extend({
                remote: !/#/.test(n) && n
            }, i.data(), e.data());
        e.is("a") && t.preventDefault(), i.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        }), a.call(i, r, this)
    })
}(jQuery),
function(s) {
    "use strict";

    function e(n) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new a(this)), "string" == typeof n && e[n]()
        })
    }
    var a = function(t) {
        this.element = s(t)
    };
    a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            n = t.data("target");
        if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = e.find(".active:last a"),
                r = s.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = s.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(r), t.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = s(n);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, a.prototype.activate = function(t, e, n) {
        function i() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var r = e.find("> .active"),
            o = n && s.support.transition && (r.length && r.hasClass("fade") || !!e.find("> .fade").length);
        r.length && o ? r.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(), r.removeClass("in")
    };
    var t = s.fn.tab;
    s.fn.tab = e, s.fn.tab.Constructor = a, s.fn.tab.noConflict = function() {
        return s.fn.tab = t, this
    };
    var n = function(t) {
        t.preventDefault(), e.call(s(this), "show")
    };
    s(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(l) {
    "use strict";

    function n(i) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.affix"),
                n = "object" == typeof i && i;
            e || t.data("bs.affix", e = new u(this, n)), "string" == typeof i && e[i]()
        })
    }
    var u = function(t, e) {
        this.options = l.extend({}, u.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    u.VERSION = "3.3.7", u.RESET = "affix affix-top affix-bottom", u.DEFAULTS = {
        offset: 0,
        target: window
    }, u.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + a <= t - i) && "bottom";
        var s = null == this.affixed,
            l = s ? r : o.top;
        return null != n && r <= n ? "top" : null != i && t - i <= l + (s ? a : e) && "bottom"
    }, u.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(u.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, u.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, u.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                n = e.top,
                i = e.bottom,
                r = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof e && (i = n = e), "function" == typeof n && (n = e.top(this.$element)), "function" == typeof i && (i = e.bottom(this.$element));
            var o = this.getState(r, t, n, i);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (o ? "-" + o : ""),
                    s = l.Event(a + ".bs.affix");
                if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(u.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: r - t - i
            })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = n, l.fn.affix.Constructor = u, l.fn.affix.noConflict = function() {
        return l.fn.affix = t, this
    }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), n.call(t, e)
        })
    })
}(jQuery),
function(o) {
    "use strict";

    function r(t, e) {
        this.$body = o(document.body), this.$scrollElement = o(t).is(document.body) ? o(window) : o(t), this.options = o.extend({}, r.DEFAULTS, e),
            this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o.proxy(this.process, this)), this.refresh(), this.process()
    }

    function e(i) {
        return this.each(function() {
            var t = o(this),
                e = t.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            e || t.data("bs.scrollspy", e = new r(this, n)), "string" == typeof i && e[i]()
        })
    }
    r.VERSION = "3.3.7", r.DEFAULTS = {
        offset: 10
    }, r.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, r.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), o.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = o(this),
                e = t.data("target") || t.attr("href"),
                n = /^#./.test(e) && o(e);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + r, e]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, r.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), i <= e) return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) a != o[t] && e >= r[t] && (r[t + 1] === undefined || e < r[t + 1]) && this.activate(o[t])
    }, r.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            n = o(e).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, r.prototype.clear = function() {
        o(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var t = o.fn.scrollspy;
    o.fn.scrollspy = e, o.fn.scrollspy.Constructor = r, o.fn.scrollspy.noConflict = function() {
        return o.fn.scrollspy = t, this
    }, o(window).on("load.bs.scrollspy.data-api", function() {
        o('[data-spy="scroll"]').each(function() {
            var t = o(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(g) {
    "use strict";

    function t(i) {
        return this.each(function() {
            var t = g(this),
                e = t.data("bs.tooltip"),
                n = "object" == typeof i && i;
            !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new m(this, n)), "string" == typeof i && e[i]())
        })
    }
    var m = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    m.VERSION = "3.3.7", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, m.prototype.init = function(t, e, n) {
        if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && g(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
            var o = i[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    s = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, g.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = g.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, m.prototype.getDefaults = function() {
        return m.DEFAULTS
    }, m.prototype.getOptions = function(t) {
        return (t = g.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, m.prototype.getDelegateOptions = function() {
        var n = {},
            i = this.getDefaults();
        return this._options && g.each(this._options, function(t, e) {
            i[t] != e && (n[t] = e)
        }), n
    }, m.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
        else {
            if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, e.options.delay.show)
        }
    }, m.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, m.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, e.options.delay.hide)
        }
    }, m.prototype.show = function() {
        var t = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var n = this,
                i = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), i.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                s = a.test(o);
            s && (o = o.replace(a, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                u = i[0].offsetWidth,
                c = i[0].offsetHeight;
            if (s) {
                var d = o,
                    h = this.getPosition(this.$viewport);
                o = "bottom" == o && l.bottom + c > h.bottom ? "top" : "top" == o && l.top - c < h.top ? "bottom" : "right" == o && l.right + u > h.width ? "left" : "left" == o && l.left - u < h.left ? "right" : o, i.removeClass(d).addClass(o)
            }
            var f = this.getCalculatedOffset(o, l, u, c);
            this.applyPlacement(f, o);
            var p = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            g.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", p).emulateTransitionEnd(m.TRANSITION_DURATION) : p()
        }
    }, m.prototype.applyPlacement = function(t, e) {
        var n = this.tip(),
            i = n[0].offsetWidth,
            r = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), t.top += o, t.left += a, g.offset.setOffset(n[0], g.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, t), 0), n.addClass("in");
        var s = n[0].offsetWidth,
            l = n[0].offsetHeight;
        "top" == e && l != r && (t.top = t.top + r - l);
        var u = this.getViewportAdjustedDelta(e, t, s, l);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(e),
            d = c ? 2 * u.left - i + s : 2 * u.top - r + l,
            h = c ? "offsetWidth" : "offsetHeight";
        n.offset(t), this.replaceArrow(d, n[0][h], c)
    }, m.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, m.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function(t) {
        function e() {
            "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
        }
        var n = this,
            i = g(this.$tip),
            r = g.Event("hide.bs." + this.type);
        if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(m.TRANSITION_DURATION) : e(), this.hoverState = null, this
    }, m.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function() {
        return this.getTitle()
    }, m.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            n = "BODY" == e.tagName,
            i = e.getBoundingClientRect();
        null == i.width && (i = g.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = window.SVGElement && e instanceof window.SVGElement,
            o = n ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            a = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = n ? {
                width: g(window).width(),
                height: g(window).height()
            } : null;
        return g.extend({}, i, a, s, o)
    }, m.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, m.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
                l = e.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < a.left ? r.left = a.left - u : c > a.right && (r.left = a.left + a.width - c)
        }
        return r
    }, m.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, m.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
        return t
    }, m.prototype.tip = function() {
        if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, m.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, m.prototype.enable = function() {
        this.enabled = !0
    }, m.prototype.disable = function() {
        this.enabled = !1
    }, m.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, m.prototype.toggle = function(t) {
        var e = this;
        t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, m.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var e = g.fn.tooltip;
    g.fn.tooltip = t, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function() {
        return g.fn.tooltip = e, this
    }
}(jQuery),
function(r) {
    "use strict";

    function t(i) {
        return this.each(function() {
            var t = r(this),
                e = t.data("bs.popover"),
                n = "object" == typeof i && i;
            !e && /destroy|hide/.test(i) || (e || t.data("bs.popover", e = new o(this, n)), "string" == typeof i && e[i]())
        })
    }
    var o = function(t, e) {
        this.init("popover", t, e)
    };
    if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
    o.VERSION = "3.3.7", o.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), o.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype), (o.prototype.constructor = o).prototype.getDefaults = function() {
        return o.DEFAULTS
    }, o.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, o.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var e = r.fn.popover;
    r.fn.popover = t, r.fn.popover.Constructor = o, r.fn.popover.noConflict = function() {
        return r.fn.popover = e, this
    }
}(jQuery),
function() {
    var m, u, c, v, h, e, y = {}.hasOwnProperty,
        n = [].slice;
    e = "undefined" != typeof exports && null !== exports ? exports : this, (c = function(t) {
        this.message = t
    }).prototype = new Error, u = {
        GROUP: 1,
        CAT: 2,
        SYMBOL: 3,
        OR: 4,
        STAR: 5,
        LITERAL: 6,
        SLASH: 7,
        DOT: 8
    }, m = !"_options", v = ["anchor", "trailing_slash", "subdomain", "host", "port", "protocol"], h = {
        configuration: {
            prefix: "",
            default_url_options: {},
            special_options_key: "_options",
            serializer: null
        },
        default_serializer: function(t, e) {
            var n, i, r, o, a, s, l;
            if (null == e && (e = null), null == t) return "";
            if (!e && "object" !== this.get_object_type(t)) throw new Error("Url parameters should be a javascript hash");
            switch (l = [], this.get_object_type(t)) {
                case "array":
                    for (i = r = 0, a = t.length; r < a; i = ++r) n = t[i], l.push(this.default_serializer(n, e + "[]"));
                    break;
                case "object":
                    for (o in t) y.call(t, o) && (null == (s = t[o]) && null != e && (s = ""), null != s && (null != e && (o = e + "[" + o + "]"), l.push(this.default_serializer(s, o))));
                    break;
                default:
                    null != t && l.push(encodeURIComponent(e.toString()) + "=" + encodeURIComponent(t.toString()))
            }
            return l.length ? l.join("&") : ""
        },
        serialize: function(t) {
            var e;
            return null != (e = this.configuration.serializer) && "function" === this.get_object_type(e) ? e(t) : this.default_serializer(t)
        },
        clean_path: function(t) {
            var e;
            return (t = t.split("://"))[e = t.length - 1] = t[e].replace(/\/+/g, "/"), t.join("://")
        },
        extract_options: function(t, e) {
            var n, i;
            return n = e[e.length - 1], e.length > t && void 0 === n || null != n && "object" === this.get_object_type(n) && !this.looks_like_serialized_model(n) ? (delete(i = e.pop() || {})[this.configuration.special_options_key], i) : {}
        },
        looks_like_serialized_model: function(t) {
            return !t[this.configuration.special_options_key] && ("id" in t || "to_param" in t)
        },
        path_identifier: function(t) {
            var e;
            if (0 === t) return "0";
            if (!t) return "";
            if (e = t, "object" === this.get_object_type(t)) {
                if ("to_param" in t) {
                    if (null == t.to_param) throw new c("Route parameter missing: to_param");
                    e = t.to_param
                } else if ("id" in t) {
                    if (null == t.id) throw new c("Route parameter missing: id");
                    e = t.id
                } else e = t;
                "function" === this.get_object_type(e) && (e = e.call(t))
            }
            return e.toString()
        },
        clone: function(t) {
            var e, n, i;
            if (null == t || "object" !== this.get_object_type(t)) return t;
            for (i in n = t.constructor(), t) y.call(t, i) && (e = t[i], n[i] = e);
            return n
        },
        merge: function() {
            var t, s;
            if (t = function(t, e) {
                    return e(t), t
                }, 0 < (null != (s = 1 <= arguments.length ? n.call(arguments, 0) : []) ? s.length : void 0)) return t({}, function(e) {
                var t, n, i, r, o, a;
                for (r = [], t = 0, i = s.length; t < i; t++) a = s[t], r.push(function() {
                    var t;
                    for (n in t = [], a) o = a[n], t.push(e[n] = o);
                    return t
                }());
                return r
            })
        },
        normalize_options: function(t, e, n, i) {
            var r, o, a, s, l, u, c, d, h, f, p, g;
            if (l = this.extract_options(t.length, i), i.length > t.length) throw new Error("Too many parameters provided for path");
            for (a in p = m || i.length > e.length, c = {}, l) y.call(l, a) && (p = !0, 0 <= this.indexOf(t, a) && (c[a] = g));
            for (a in l = this.merge(this.configuration.default_url_options, n, l), f = {}, (d = {}).url_parameters = f, l) y.call(l, a) && (g = l[a], 0 <= this.indexOf(v, a) ? d[a] = g : f[a] = g);
            for (o = r = 0, s = (h = p ? t : e).length; o < s; o++) u = h[o], r < i.length && (c.hasOwnProperty(u) || (f[u] = i[r], ++r));
            return d
        },
        build_route: function(t, e, n, i, r, o) {
            var a, s, l, u, c;
            return o = Array.prototype.slice.call(o), s = (a = this.normalize_options(t, e, n, o)).url_parameters, l = "" + this.get_prefix() + this.visit(i, s), u = h.clean_path(l), !0 === a.trailing_slash && (u = u.replace(/(.*?)[\/]?$/, "$1/")), (c = this.serialize(s)).length && (u += "?" + c), u += a.anchor ? "#" + a.anchor : "", r && (u = this.route_url(a) + u), u
        },
        visit: function(t, e, n) {
            var i, r, o, a, s, l;
            switch (null == n && (n = !1), s = t[0], i = t[1], o = t[2], s) {
                case u.GROUP:
                    return this.visit(i, e, !0);
                case u.STAR:
                    return this.visit_globbing(i, e, !0);
                case u.LITERAL:
                case u.SLASH:
                case u.DOT:
                    return i;
                case u.CAT:
                    return r = this.visit(i, e, n), a = this.visit(o, e, n), n && (this.is_optional_node(i[0]) && !r || this.is_optional_node(o[0]) && !a) ? "" : "" + r + a;
                case u.SYMBOL:
                    if (null != (l = e[i])) return delete e[i], this.path_identifier(l);
                    if (n) return "";
                    throw new c("Route parameter missing: " + i);
                default:
                    throw new Error("Unknown Rails node type")
            }
        },
        is_optional_node: function(t) {
            return 0 <= this.indexOf([u.STAR, u.SYMBOL, u.CAT], t)
        },
        build_path_spec: function(t, e) {
            var n, i, r;
            switch (null == e && (e = !1), r = t[0], n = t[1], i = t[2], r) {
                case u.GROUP:
                    return "(" + this.build_path_spec(n) + ")";
                case u.CAT:
                    return "" + this.build_path_spec(n) + this.build_path_spec(i);
                case u.STAR:
                    return this.build_path_spec(n, !0);
                case u.SYMBOL:
                    return !0 === e ? ("*" === n[0] ? "" : "*") + n : ":" + n;
                case u.SLASH:
                case u.DOT:
                case u.LITERAL:
                    return n;
                default:
                    throw new Error("Unknown Rails node type")
            }
        },
        visit_globbing: function(t, e, n) {
            var i, r;
            return t[0], i = t[1], t[2], i.replace(/^\*/i, "") !== i && (t[1] = i = i.replace(/^\*/i, "")), null == (r = e[i]) || (e[i] = function() {
                switch (this.get_object_type(r)) {
                    case "array":
                        return r.join("/");
                    default:
                        return r
                }
            }.call(this)), this.visit(t, e, n)
        },
        get_prefix: function() {
            var t;
            return "" !== (t = this.configuration.prefix) && (t = t.match("/$") ? t : t + "/"), t
        },
        route: function(t, e, n, i) {
            var r, o, a, s, l, u, c, d;
            for (d = [], s = [], r = 0, o = t.length; r < o; r++) a = (u = t[r])[0], c = u[1], s.push(a), c && d.push(a);
            return (l = function() {
                return h.build_route(s, d, e, n, i, arguments)
            }).required_params = d, l.toString = function() {
                return h.build_path_spec(n)
            }, l
        },
        route_url: function(t) {
            var e, n, i;
            return "string" == typeof t ? t : (e = t.host || h.current_host()) ? (i = t.subdomain ? t.subdomain + "." : "", (t.protocol || h.current_protocol()) + "://" + i + e + (n = (n = t.port || (t.host ? void 0 : h.current_port())) ? ":" + n : "")) : ""
        },
        has_location: function() {
            return null != ("undefined" != typeof window && null !== window ? window.location : void 0)
        },
        current_host: function() {
            return this.has_location() ? window.location.hostname : null
        },
        current_protocol: function() {
            return this.has_location() && "" !== window.location.protocol ? window.location.protocol.replace(/:$/, "") : "http"
        },
        current_port: function() {
            return this.has_location() && "" !== window.location.port ? window.location.port : ""
        },
        _classToTypeCache: null,
        _classToType: function() {
            var t, e, n, i;
            if (null != this._classToTypeCache) return this._classToTypeCache;
            for (this._classToTypeCache = {}, t = 0, e = (i = "Boolean Number String Function Array Date RegExp Object Error".split(" ")).length; t < e; t++) n = i[t], this._classToTypeCache["[object " + n + "]"] = n.toLowerCase();
            return this._classToTypeCache
        },
        get_object_type: function(t) {
            return e.jQuery && null != e.jQuery.type ? e.jQuery.type(t) : null == t ? "" + t : "object" == typeof t || "function" == typeof t ? this._classToType()[Object.prototype.toString.call(t)] || "object" : typeof t
        },
        indexOf: function(t, e) {
            return Array.prototype.indexOf ? t.indexOf(e) : this.indexOfImplementation(t, e)
        },
        indexOfImplementation: function(t, e) {
            var n, i, r, o;
            for (o = -1, n = i = 0, r = t.length; i < r; n = ++i) t[n] === e && (o = n);
            return o
        },
        namespace: function(t, e, n) {
            var i, r, o, a, s;
            if (0 === (s = e.split(".")).length) return n;
            for (i = r = 0, o = s.length; r < o; i = ++r) {
                if (a = s[i], !(i < s.length - 1)) return t[a] = n;
                t = t[a] || (t[a] = {})
            }
        },
        configure: function(t) {
            return this.configuration = this.merge(this.configuration, t)
        },
        config: function() {
            return this.clone(this.configuration)
        },
        make: function() {
            var t;
            return (t = {
                accounts_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "accounts", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                admin2_user_path: h.route([
                    ["id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "admin2", !1],
                        [2, [7, "/", !1],
                            [2, [6, "users", !1],
                                [2, [7, "/", !1],
                                    [2, [3, "id", !1],
                                        [1, [2, [8, ".", !1],
                                            [3, "format", !1]
                                        ], !1]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                admin2_users_path: h.route([
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "admin2", !1],
                        [2, [7, "/", !1],
                            [2, [6, "users", !1],
                                [1, [2, [8, ".", !1],
                                    [3, "format", !1]
                                ], !1]
                            ]
                        ]
                    ]
                ]),
                api_v1_user_bank_wires_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "api", !1],
                        [2, [7, "/", !1],
                            [2, [6, "v1", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "users", !1],
                                        [2, [7, "/", !1],
                                            [2, [3, "user_id", !1],
                                                [2, [7, "/", !1],
                                                    [2, [6, "bank_wires", !1],
                                                        [1, [2, [8, ".", !1],
                                                            [3, "format", !1]
                                                        ], !1]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                api_v1_user_direct_debits_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "api", !1],
                        [2, [7, "/", !1],
                            [2, [6, "v1", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "users", !1],
                                        [2, [7, "/", !1],
                                            [2, [3, "user_id", !1],
                                                [2, [7, "/", !1],
                                                    [2, [6, "direct_debits", !1],
                                                        [1, [2, [8, ".", !1],
                                                            [3, "format", !1]
                                                        ], !1]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                callback_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "callback", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                cancel_api_v1_user_direct_debit_path: h.route([
                    ["user_id", !0],
                    ["id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "api", !1],
                        [2, [7, "/", !1],
                            [2, [6, "v1", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "users", !1],
                                        [2, [7, "/", !1],
                                            [2, [3, "user_id", !1],
                                                [2, [7, "/", !1],
                                                    [2, [6, "direct_debits", !1],
                                                        [2, [7, "/", !1],
                                                            [2, [3, "id", !1],
                                                                [2, [7, "/", !1],
                                                                    [2, [6, "cancel", !1],
                                                                        [1, [2, [8, ".", !1],
                                                                            [3, "format", !1]
                                                                        ], !1]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                confirm_messenger_user_connections_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "messenger", !1],
                        [2, [7, "/", !1],
                            [2, [6, "users", !1],
                                [2, [7, "/", !1],
                                    [2, [3, "user_id", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "connections", !1],
                                                [2, [7, "/", !1],
                                                    [2, [6, "confirm", !1],
                                                        [1, [2, [8, ".", !1],
                                                            [3, "format", !1]
                                                        ], !1]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                confirm_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "confirm", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                connection_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["bank_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "connection", !1],
                                                [2, [7, "/", !1],
                                                    [2, [3, "bank_id", !1],
                                                        [1, [2, [8, ".", !1],
                                                            [3, "format", !1]
                                                        ], !1]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                error_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "error", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]),
                success_user_onboarding_index_path: h.route([
                    ["user_id", !0],
                    ["format", !1]
                ], {}, [2, [7, "/", !1],
                    [2, [6, "users", !1],
                        [2, [7, "/", !1],
                            [2, [3, "user_id", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "onboarding", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "success", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
            }).configure = function(t) {
                return h.configure(t)
            }, t.config = function() {
                return h.config()
            }, Object.defineProperty(t, "defaults", {
                get: function() {
                    throw new Error("Routes.defaults is removed. Use Routes.configure() instead.")
                },
                set: function() {}
            }), t.default_serializer = function(t, e) {
                return h.default_serializer(t, e)
            }, h.namespace(e, "Routes", t)
        }
    }, "function" == typeof define && define.amd ? define([], function() {
        return h.make()
    }) : h.make()
}.call(this),
    function() {
        "use strict";

        function o() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                if (n) {
                    var i = typeof n;
                    if ("string" === i || "number" === i) t.push(n);
                    else if (Array.isArray(n)) t.push(o.apply(null, n));
                    else if ("object" === i)
                        for (var r in n) a.call(n, r) && n[r] && t.push(r)
                }
            }
            return t.join(" ")
        }
        var a = {}.hasOwnProperty;
        "undefined" != typeof module && module.exports ? module.exports = o : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return o
        }) : window.classNames = o
    }(),
    function() {
        "use strict";

        function o() {
            for (var t = [], e = 0; e < arguments.length; e++) {
                var n = arguments[e];
                if (n) {
                    var i = typeof n;
                    if ("string" === i || "number" === i) t.push(this && this[n] || n);
                    else if (Array.isArray(n)) t.push(o.apply(this, n));
                    else if ("object" === i)
                        for (var r in n) a.call(n, r) && n[r] && t.push(this && this[r] || r)
                }
            }
            return t.join(" ")
        }
        var a = {}.hasOwnProperty;
        "undefined" != typeof module && module.exports ? module.exports = o : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return o
        }) : window.classNames = o
    }(),
    function() {
        "use strict";
        var t = function() {
            function a() {}

            function s(t, e) {
                for (var n = e.length, i = 0; i < n; ++i) l(t, e[i])
            }

            function i(t, e) {
                t[e] = !0
            }

            function r(t, e) {
                for (var n in e) u.call(e, n) && (t[n] = !!e[n])
            }

            function o(t, e) {
                for (var n = e.split(c), i = n.length, r = 0; r < i; ++r) t[n[r]] = !0
            }

            function l(t, e) {
                if (e) {
                    var n = typeof e;
                    "string" === n ? o(t, e) : Array.isArray(e) ? s(t, e) : "object" === n ? r(t, e) : "number" === n && i(t, e)
                }
            }

            function t() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = new a;
                s(i, e);
                var r = [];
                for (var o in i) i[o] && r.push(o);
                return r.join(" ")
            }
            a.prototype = Object.create(null);
            var u = {}.hasOwnProperty,
                c = /\s+/;
            return t
        }();
        "undefined" != typeof module && module.exports ? module.exports = t : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return t
        }) : window.classNames = t
    }();
var dab = function(e, t, n, i) {
    "use-strict";
    var r = $("#dab-amount"),
        o = $("#dab-confirm"),
        a = $("#dab-cursor"),
        s = $(".dab-container .key"),
        l = $("#confirm-message"),
        u = $("#error-message"),
        c = $("#loading-message"),
        d = !1,
        h = !1,
        f = !1,
        p = (e = e, t = t, n = n, i = i, ""),
        g = "",
        m = function() {
            h = !1, k(), S(), _()
        },
        v = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        y = function() {
            p = i.match("direct_debit") ? "d\xe9p\xf4t" : "retrait"
        },
        b = function(t) {
            return i.match("direct_debit") ? !isNaN(parseFloat(t)) && isFinite(t) && 1 <= t : !isNaN(parseFloat(t)) && isFinite(t) && 0 != t
        },
        x = function(t) {
            return (100 * t).toFixed(2) <= e
        },
        w = function(t) {
            o.removeClass("btn-messenger-2steps-activate"), o.removeClass("btn-messenger-2steps-disabled"), o.removeClass("btn-messenger-2steps-validate"), o.addClass(t)
        },
        _ = function() {
            return b(g) ? x(g) ? (d = !0, o.html("Valide le montant"), void w("btn-messenger-2steps-activate")) : (d = !1, o.html("C'est trop !"), void w("btn-messenger-2steps-disabled")) : (d = !1, o.html("Montant invalide"), void w("btn-messenger-2steps-disabled"))
        },
        S = function() {
            "" === g ? a.removeClass("hidden") : a.addClass("hidden")
        },
        k = function() {
            r.html(g)
        },
        C = function() {
            h && (o.prop("disabled", !0), o.html(v(p) + " de " + g + " \u20ac en cours <span class='loading-dot'></span><span class='loading-dot'></span><span class='loading-dot'></span>"), w("btn-messenger-2steps-loading"), f = !0, create_withdraw()), d && (o.html("Confirme le " + p + " de " + g + " \u20ac"), w("btn-messenger-2steps-validate"), d = !(h = !0))
        },
        M = function() {
            g = "0." === g ? "" : g.substr(0, g.length - 1), m()
        },
        T = function(t) {
            0 !== g.length || "." !== t && "0" !== t ? 4 == g.length && 1 == (g + t).split(".").length ? g = g + "." + t : (g.length < 7 && /^\d+(.\d{0,2})?$/.test(g + t) || "" == g) && (g += t) : g = "0.", m()
        };
    this.init = function(t) {
        s.on("click", function(t) {
            var e = t.currentTarget.dataset.value;
            1 != f && ("del" === e ? M() : T(e))
        }), o.on("click", function() {
            C()
        }), y(), 0 != t && (g = t / 100 + "", m())
    }, create_withdraw = function() {
        $.ajax({
            url: i,
            type: "POST",
            data: JSON.stringify(D()),
            headers: {
                "X-User-Email": t,
                "X-User-Token": n
            },
            contentType: "application/json",
            success: function() {
                l.fadeIn(150).toggleClass("hidden"), c.toggleClass("hidden")
            },
            error: function() {
                u.fadeIn(150).toggleClass("hidden"), c.toggleClass("hidden")
            }
        })
    };
    var D = function() {
        return {
            amount_cents: 100 * Number(r.html()),
            origin: "DAB-Messenger"
        }
    }
};
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var r, c, d;
            return t && t.requirejs || (t ? c = t : t = {}, function(h) {
                function f(t, e) {
                    return n.call(t, e)
                }

                function o(t, e) {
                    var n, i, r, o, a, s, l, u, c, d, h, f = e && e.split("/"),
                        p = w.map,
                        g = p && p["*"] || {};
                    if (t && "." === t.charAt(0))
                        if (e) {
                            for (a = (t = t.split("/")).length - 1, w.nodeIdCompat && S.test(t[a]) && (t[a] = t[a].replace(S, "")), t = f.slice(0, f.length - 1).concat(t), c = 0; c < t.length; c += 1)
                                if ("." === (h = t[c])) t.splice(c, 1), c -= 1;
                                else if (".." === h) {
                                if (1 === c && (".." === t[2] || ".." === t[0])) break;
                                0 < c && (t.splice(c - 1, 2), c -= 2)
                            }
                            t = t.join("/")
                        } else 0 === t.indexOf("./") && (t = t.substring(2));
                    if ((f || g) && p) {
                        for (c = (n = t.split("/")).length; 0 < c; c -= 1) {
                            if (i = n.slice(0, c).join("/"), f)
                                for (d = f.length; 0 < d; d -= 1)
                                    if ((r = p[f.slice(0, d).join("/")]) && (r = r[i])) {
                                        o = r, s = c;
                                        break
                                    }
                            if (o) break;
                            !l && g && g[i] && (l = g[i], u = c)
                        }!o && l && (o = l, s = u), o && (n.splice(0, s, o), t = n.join("/"))
                    }
                    return t
                }

                function p(e, n) {
                    return function() {
                        var t = i.call(arguments, 0);
                        return "string" != typeof t[0] && 1 === t.length && t.push(null), u.apply(h, t.concat([e, n]))
                    }
                }

                function a(e) {
                    return function(t) {
                        return o(t, e)
                    }
                }

                function g(e) {
                    return function(t) {
                        b[e] = t
                    }
                }

                function m(t) {
                    if (f(x, t)) {
                        var e = x[t];
                        delete x[t], _[t] = !0, l.apply(h, e)
                    }
                    if (!f(b, t) && !f(_, t)) throw new Error("No " + t);
                    return b[t]
                }

                function s(t) {
                    var e, n = t ? t.indexOf("!") : -1;
                    return -1 < n && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                }

                function e(t) {
                    return function() {
                        return w && w.config && w.config[t] || {}
                    }
                }
                var l, u, v, y, b = {},
                    x = {},
                    w = {},
                    _ = {},
                    n = Object.prototype.hasOwnProperty,
                    i = [].slice,
                    S = /\.js$/;
                v = function(t, e) {
                    var n, i = s(t),
                        r = i[0];
                    return t = i[1], r && (n = m(r = o(r, e))), r ? t = n && n.normalize ? n.normalize(t, a(e)) : o(t, e) : (r = (i = s(t = o(t, e)))[0], t = i[1], r && (n = m(r))), {
                        f: r ? r + "!" + t : t,
                        n: t,
                        pr: r,
                        p: n
                    }
                }, y = {
                    require: function(t) {
                        return p(t)
                    },
                    exports: function(t) {
                        var e = b[t];
                        return void 0 !== e ? e : b[t] = {}
                    },
                    module: function(t) {
                        return {
                            id: t,
                            uri: "",
                            exports: b[t],
                            config: e(t)
                        }
                    }
                }, l = function(t, e, n, i) {
                    var r, o, a, s, l, u, c = [],
                        d = typeof n;
                    if (i = i || t, "undefined" === d || "function" === d) {
                        for (e = !e.length && n.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1)
                            if ("require" === (o = (s = v(e[l], i)).f)) c[l] = y.require(t);
                            else if ("exports" === o) c[l] = y.exports(t), u = !0;
                        else if ("module" === o) r = c[l] = y.module(t);
                        else if (f(b, o) || f(x, o) || f(_, o)) c[l] = m(o);
                        else {
                            if (!s.p) throw new Error(t + " missing " + o);
                            s.p.load(s.n, p(i, !0), g(o), {}), c[l] = b[o]
                        }
                        a = n ? n.apply(b[t], c) : undefined, t && (r && r.exports !== h && r.exports !== b[t] ? b[t] = r.exports : a === h && u || (b[t] = a))
                    } else t && (b[t] = n)
                }, r = c = u = function(t, e, n, i, r) {
                    if ("string" == typeof t) return y[t] ? y[t](e) : m(v(t, e).f);
                    if (!t.splice) {
                        if ((w = t).deps && u(w.deps, w.callback), !e) return;
                        e.splice ? (t = e, e = n, n = null) : t = h
                    }
                    return e = e || function() {}, "function" == typeof n && (n = i, i = r), i ? l(h, t, e, n) : setTimeout(function() {
                        l(h, t, e, n)
                    }, 4), u
                }, u.config = function(t) {
                    return u(t)
                }, r._defined = b, (d = function(t, e, n) {
                    if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                    e.splice || (n = e, e = []), f(b, t) || f(x, t) || (x[t] = [t, e, n])
                }).amd = {
                    jQuery: !0
                }
            }(), t.requirejs = r, t.require = c, t.define = d), t.define("almond", function() {}), t.define("jquery", [], function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            }), t.define("select2/utils", ["jquery"], function(o) {
                function d(t) {
                    var e = t.prototype,
                        n = [];
                    for (var i in e) {
                        "function" == typeof e[i] && ("constructor" !== i && n.push(i))
                    }
                    return n
                }
                var t = {
                        Extend: function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            var i = {}.hasOwnProperty;
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        Decorate: function(i, r) {
                            function o() {
                                var t = Array.prototype.unshift,
                                    e = r.prototype.constructor.length,
                                    n = i.prototype.constructor;
                                0 < e && (t.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments)
                            }

                            function t() {
                                this.constructor = o
                            }
                            var e = d(r),
                                n = d(i);
                            r.displayName = i.displayName, o.prototype = new t;
                            for (var a = 0; a < n.length; a++) {
                                var s = n[a];
                                o.prototype[s] = i.prototype[s]
                            }
                            for (var l = function(t) {
                                    var e = function() {};
                                    t in o.prototype && (e = o.prototype[t]);
                                    var n = r.prototype[t];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, e), n.apply(this, arguments)
                                    }
                                }, u = 0; u < e.length; u++) {
                                var c = e[u];
                                o.prototype[c] = l(c)
                            }
                            return o
                        }
                    },
                    e = function() {
                        this.listeners = {}
                    };
                return e.prototype.on = function(t, e) {
                    this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                }, e.prototype.trigger = function(t) {
                    var e = Array.prototype.slice,
                        n = e.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, e.prototype.invoke = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e)
                }, t.Observable = e, t.generateChars = function(t) {
                    for (var e = "", n = 0; n < t; n++) {
                        e += Math.floor(36 * Math.random()).toString(36)
                    }
                    return e
                }, t.bind = function(t, e) {
                    return function() {
                        t.apply(e, arguments)
                    }
                }, t._convertData = function(t) {
                    for (var e in t) {
                        var n = e.split("-"),
                            i = t;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o]
                            }
                            delete t[e]
                        }
                    }
                    return t
                }, t.hasScroll = function(t, e) {
                    var n = o(e),
                        i = e.style.overflowX,
                        r = e.style.overflowY;
                    return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || (n.innerHeight() < e.scrollHeight || n.innerWidth() < e.scrollWidth))
                }, t.escapeMarkup = function(t) {
                    var e = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                        return e[t]
                    })
                }, t.appendMany = function(t, e) {
                    if ("1.7" === o.fn.jquery.substr(0, 3)) {
                        var n = o();
                        o.map(e, function(t) {
                            n = n.add(t)
                        }), e = n
                    }
                    t.append(e)
                }, t
            }), t.define("select2/results", ["jquery", "./utils"], function(h, t) {
                function i(t, e, n) {
                    this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var t = h('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
                }, i.prototype.clear = function() {
                    this.$results.empty()
                }, i.prototype.displayMessage = function(t) {
                    var e = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var n = h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        i = this.options.get("translations").get(t.message);
                    n.append(e(i(t.args))), n[0].className += " select2-results__message", this.$results.append(n)
                }, i.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, i.prototype.append = function(t) {
                    this.hideLoading();
                    var e = [];
                    if (null != t.results && 0 !== t.results.length) {
                        t.results = this.sort(t.results);
                        for (var n = 0; n < t.results.length; n++) {
                            var i = t.results[n],
                                r = this.option(i);
                            e.push(r)
                        }
                        this.$results.append(e)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, i.prototype.position = function(t, e) {
                    e.find(".select2-results").append(t)
                }, i.prototype.sort = function(t) {
                    return this.options.get("sorter")(t)
                }, i.prototype.highlightFirstItem = function() {
                    var t = this.$results.find(".select2-results__option[aria-selected]"),
                        e = t.filter("[aria-selected=true]");
                    0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, i.prototype.setClasses = function() {
                    var e = this;
                    this.data.current(function(t) {
                        var i = h.map(t, function(t) {
                            return t.id.toString()
                        });
                        e.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var t = h(this),
                                e = h.data(this, "data"),
                                n = "" + e.id;
                            null != e.element && e.element.selected || null == e.element && -1 < h.inArray(n, i) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                        })
                    })
                }, i.prototype.showLoading = function(t) {
                    this.hideLoading();
                    var e = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(t)
                        },
                        n = this.option(e);
                    n.className += " loading-results", this.$results.prepend(n)
                }, i.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, i.prototype.option = function(t) {
                    var e = document.createElement("li");
                    e.className = "select2-results__option";
                    var n = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    for (var i in t.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == t.id && delete n["aria-selected"], null != t._resultId && (e.id = t._resultId), t.title && (e.title = t.title), t.children && (n.role = "group", n["aria-label"] = t.text, delete n["aria-selected"]), n) {
                        var r = n[i];
                        e.setAttribute(i, r)
                    }
                    if (t.children) {
                        var o = h(e),
                            a = document.createElement("strong");
                        a.className = "select2-results__group";
                        h(a);
                        this.template(t, a);
                        for (var s = [], l = 0; l < t.children.length; l++) {
                            var u = t.children[l],
                                c = this.option(u);
                            s.push(c)
                        }
                        var d = h("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        d.append(s), o.append(a), o.append(d)
                    } else this.template(t, e);
                    return h.data(e, "data", t), e
                }, i.prototype.bind = function(e) {
                    var l = this,
                        t = e.id + "-results";
                    this.$results.attr("id", t), e.on("results:all", function(t) {
                        l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), e.on("results:append", function(t) {
                        l.append(t.data), e.isOpen() && l.setClasses()
                    }), e.on("query", function(t) {
                        l.hideMessages(), l.showLoading(t)
                    }), e.on("select", function() {
                        e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), e.on("unselect", function() {
                        e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                    }), e.on("open", function() {
                        l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                    }), e.on("close", function() {
                        l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                    }), e.on("results:toggle", function() {
                        var t = l.getHighlightedResults();
                        0 !== t.length && t.trigger("mouseup")
                    }), e.on("results:select", function() {
                        var t = l.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = t.data("data");
                            "true" == t.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                data: e
                            })
                        }
                    }), e.on("results:previous", function() {
                        var t = l.getHighlightedResults(),
                            e = l.$results.find("[aria-selected]"),
                            n = e.index(t);
                        if (0 !== n) {
                            var i = n - 1;
                            0 === t.length && (i = 0);
                            var r = e.eq(i);
                            r.trigger("mouseenter");
                            var o = l.$results.offset().top,
                                a = r.offset().top,
                                s = l.$results.scrollTop() + (a - o);
                            0 === i ? l.$results.scrollTop(0) : a - o < 0 && l.$results.scrollTop(s)
                        }
                    }), e.on("results:next", function() {
                        var t = l.getHighlightedResults(),
                            e = l.$results.find("[aria-selected]"),
                            n = e.index(t) + 1;
                        if (!(n >= e.length)) {
                            var i = e.eq(n);
                            i.trigger("mouseenter");
                            var r = l.$results.offset().top + l.$results.outerHeight(!1),
                                o = i.offset().top + i.outerHeight(!1),
                                a = l.$results.scrollTop() + o - r;
                            0 === n ? l.$results.scrollTop(0) : r < o && l.$results.scrollTop(a)
                        }
                    }), e.on("results:focus", function(t) {
                        t.element.addClass("select2-results__option--highlighted")
                    }), e.on("results:message", function(t) {
                        l.displayMessage(t)
                    }), h.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                        var e = l.$results.scrollTop(),
                            n = l.$results.get(0).scrollHeight - e + t.deltaY,
                            i = 0 < t.deltaY && e - t.deltaY <= 0,
                            r = t.deltaY < 0 && n <= l.$results.height();
                        i ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                        var e = h(this),
                            n = e.data("data");
                        "true" !== e.attr("aria-selected") ? l.trigger("select", {
                            originalEvent: t,
                            data: n
                        }) : l.options.get("multiple") ? l.trigger("unselect", {
                            originalEvent: t,
                            data: n
                        }) : l.trigger("close", {})
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                        var t = h(this).data("data");
                        l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                            data: t,
                            element: h(this)
                        })
                    })
                }, i.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, i.prototype.destroy = function() {
                    this.$results.remove()
                }, i.prototype.ensureHighlightVisible = function() {
                    var t = this.getHighlightedResults();
                    if (0 !== t.length) {
                        var e = this.$results.find("[aria-selected]").index(t),
                            n = this.$results.offset().top,
                            i = t.offset().top,
                            r = this.$results.scrollTop() + (i - n),
                            o = i - n;
                        r -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                    }
                }, i.prototype.template = function(t, e) {
                    var n = this.options.get("templateResult"),
                        i = this.options.get("escapeMarkup"),
                        r = n(t, e);
                    null == r ? e.style.display = "none" : "string" == typeof r ? e.innerHTML = i(r) : h(e).append(r)
                }, i
            }), t.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, t, i) {
                function r(t, e) {
                    this.$element = t, this.options = e, r.__super__.constructor.call(this)
                }
                return t.Extend(r, t.Observable), r.prototype.render = function() {
                    var t = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t
                }, r.prototype.bind = function(t) {
                    var e = this,
                        n = (t.id, t.id + "-results");
                    this.container = t, this.$selection.on("focus", function(t) {
                        e.trigger("focus", t)
                    }), this.$selection.on("blur", function(t) {
                        e._handleBlur(t)
                    }), this.$selection.on("keydown", function(t) {
                        e.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                    }), t.on("results:focus", function(t) {
                        e.$selection.attr("aria-activedescendant", t.data._resultId)
                    }), t.on("selection:update", function(t) {
                        e.update(t.data)
                    }), t.on("open", function() {
                        e.$selection.attr("aria-expanded", "true"), e.$selection.attr("aria-owns", n), e._attachCloseHandler(t)
                    }), t.on("close", function() {
                        e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.removeAttr("aria-owns"), e.$selection.focus(), e._detachCloseHandler(t)
                    }), t.on("enable", function() {
                        e.$selection.attr("tabindex", e._tabindex)
                    }), t.on("disable", function() {
                        e.$selection.attr("tabindex", "-1")
                    })
                }, r.prototype._handleBlur = function(t) {
                    var e = this;
                    window.setTimeout(function() {
                        document.activeElement == e.$selection[0] || n.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t)
                    }, 1)
                }, r.prototype._attachCloseHandler = function(t) {
                    n(document.body).on("mousedown.select2." + t.id, function(t) {
                        var e = n(t.target).closest(".select2");
                        n(".select2.select2-container--open").each(function() {
                            var t = n(this);
                            this != e[0] && t.data("element").select2("close")
                        })
                    })
                }, r.prototype._detachCloseHandler = function(t) {
                    n(document.body).off("mousedown.select2." + t.id)
                }, r.prototype.position = function(t, e) {
                    e.find(".selection").append(t)
                }, r.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, r.prototype.update = function() {
                    throw new Error("The `update` method must be defined in child classes.")
                }, r
            }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, n) {
                function i() {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, e), i.prototype.render = function() {
                    var t = i.__super__.render.call(this);
                    return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                }, i.prototype.bind = function(t) {
                    var e = this;
                    i.__super__.bind.apply(this, arguments);
                    var n = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(t) {
                        1 === t.which && e.trigger("toggle", {
                            originalEvent: t
                        })
                    }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), t.on("focus", function() {
                        t.isOpen() || e.$selection.focus()
                    }), t.on("selection:update", function(t) {
                        e.update(t.data)
                    })
                }, i.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, i.prototype.display = function(t, e) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(t, e))
                }, i.prototype.selectionContainer = function() {
                    return t("<span></span>")
                }, i.prototype.update = function(t) {
                    if (0 !== t.length) {
                        var e = t[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(e, n);
                        n.empty().append(i), n.prop("title", e.title || e.text)
                    } else this.clear()
                }, i
            }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, t, s) {
                function e() {
                    e.__super__.constructor.apply(this, arguments)
                }
                return s.Extend(e, t), e.prototype.render = function() {
                    var t = e.__super__.render.call(this);
                    return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                }, e.prototype.bind = function() {
                    var n = this;
                    e.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                        n.trigger("toggle", {
                            originalEvent: t
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                        if (!n.options.get("disabled")) {
                            var e = i(this).parent().data("data");
                            n.trigger("unselect", {
                                originalEvent: t,
                                data: e
                            })
                        }
                    })
                }, e.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, e.prototype.display = function(t, e) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(t, e))
                }, e.prototype.selectionContainer = function() {
                    return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, e.prototype.update = function(t) {
                    if (this.clear(), 0 !== t.length) {
                        for (var e = [], n = 0; n < t.length; n++) {
                            var i = t[n],
                                r = this.selectionContainer(),
                                o = this.display(i, r);
                            r.append(o), r.prop("title", i.title || i.text), r.data("data", i), e.push(r)
                        }
                        var a = this.$selection.find(".select2-selection__rendered");
                        s.appendMany(a, e)
                    }
                }, e
            }), t.define("select2/selection/placeholder", ["../utils"], function() {
                function t(t, e, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
                }
                return t.prototype.normalizePlaceholder = function(t, e) {
                    return "string" == typeof e && (e = {
                        id: "",
                        text: e
                    }), e
                }, t.prototype.createPlaceholder = function(t, e) {
                    var n = this.selectionContainer();
                    return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(t, e) {
                    var n = 1 == e.length && e[0].id != this.placeholder.id;
                    if (1 < e.length || n) return t.call(this, e);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, t
            }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(i, r) {
                function t() {}
                return t.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                        i._handleClear(t)
                    }), e.on("keypress", function(t) {
                        i._handleKeyboardClear(t, e)
                    })
                }, t.prototype._handleClear = function(t, e) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            e.stopPropagation();
                            for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                var o = {
                                    data: i[r]
                                };
                                if (this.trigger("unselect", o), o.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, t.prototype._handleKeyboardClear = function(t, e, n) {
                    n.isOpen() || e.which != r.DELETE && e.which != r.BACKSPACE || this._handleClear(e)
                }, t.prototype.update = function(t, e) {
                    if (t.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) {
                        var n = i('<span class="select2-selection__clear">&times;</span>');
                        n.data("data", e), this.$selection.find(".select2-selection__rendered").prepend(n)
                    }
                }, t
            }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i, t, a) {
                function e(t, e, n) {
                    t.call(this, e, n)
                }
                return e.prototype.render = function(t) {
                    var e = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = e, this.$search = e.find("input");
                    var n = t.call(this);
                    return this._transferTabIndex(), n
                }, e.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("open", function() {
                        i.$search.trigger("focus")
                    }), e.on("close", function() {
                        i.$search.val(""), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                    }), e.on("enable", function() {
                        i.$search.prop("disabled", !1), i._transferTabIndex()
                    }), e.on("disable", function() {
                        i.$search.prop("disabled", !0)
                    }), e.on("focus", function() {
                        i.$search.trigger("focus")
                    }), e.on("results:focus", function(t) {
                        i.$search.attr("aria-activedescendant", t.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                        i.trigger("focus", t)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                        i._handleBlur(t)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                        if (t.stopPropagation(), i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented(), t.which === a.BACKSPACE && "" === i.$search.val()) {
                            var e = i.$searchContainer.prev(".select2-selection__choice");
                            if (0 < e.length) {
                                var n = e.data("data");
                                i.searchRemoveChoice(n), t.preventDefault()
                            }
                        }
                    });
                    var r = document.documentMode,
                        o = r && r <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                        o ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                        if (o && "input" === t.type) i.$selection.off("input.search input.searchcheck");
                        else {
                            var e = t.which;
                            e != a.SHIFT && e != a.CTRL && e != a.ALT && e != a.TAB && i.handleSearch(t)
                        }
                    })
                }, e.prototype._transferTabIndex = function() {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, e.prototype.createPlaceholder = function(t, e) {
                    this.$search.attr("placeholder", e.text)
                }, e.prototype.update = function(t, e) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, e.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, e.prototype.searchRemoveChoice = function(t, e) {
                    this.trigger("unselect", {
                        data: e
                    }), this.$search.val(e.text), this.handleSearch()
                }, e.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var t = "";
                    "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").innerWidth() : t = .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", t)
                }, e
            }), t.define("select2/selection/eventRelay", ["jquery"], function(a) {
                function t() {}
                return t.prototype.bind = function(t, e, n) {
                    var i = this,
                        r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        o = ["opening", "closing", "selecting", "unselecting"];
                    t.call(this, e, n), e.on("*", function(t, e) {
                        if (-1 !== a.inArray(t, r)) {
                            e = e || {};
                            var n = a.Event("select2:" + t, {
                                params: e
                            });
                            i.$element.trigger(n), -1 !== a.inArray(t, o) && (e.prevented = n.isDefaultPrevented())
                        }
                    })
                }, t
            }), t.define("select2/translation", ["jquery", "require"], function(e, n) {
                function i(t) {
                    this.dict = t || {}
                }
                return i.prototype.all = function() {
                    return this.dict
                }, i.prototype.get = function(t) {
                    return this.dict[t]
                }, i.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, i._cache = {}, i.loadPath = function(t) {
                    if (!(t in i._cache)) {
                        var e = n(t);
                        i._cache[t] = e
                    }
                    return new i(i._cache[t])
                }, i
            }), t.define("select2/diacritics", [], function() {
                return {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\xc3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\xc4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\xc5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\xc6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\xc7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\xcb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\xcf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\xd1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\xd5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\xd6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\xd8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\xdc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\xdd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\xe3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\xe4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\xe5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\xe6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\xe7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\xeb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\xef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\xf1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\xf5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\xf6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\xf8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\xdf": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\xfc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\xfd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\xff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                }
            }), t.define("select2/data/base", ["../utils"], function(i) {
                function t() {
                    t.__super__.constructor.call(this)
                }
                return i.Extend(t, i.Observable), t.prototype.current = function() {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function() {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, e) {
                    var n = t.id + "-result-";
                    return n += i.generateChars(4), null != e.id ? n += "-" + e.id.toString() : n += "-" + i.generateChars(4), n
                }, t
            }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, s) {
                function n(t, e) {
                    this.$element = t, this.options = e, n.__super__.constructor.call(this)
                }
                return e.Extend(n, t), n.prototype.current = function(t) {
                    var n = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var t = s(this),
                            e = i.item(t);
                        n.push(e)
                    }), t(n)
                }, n.prototype.select = function(r) {
                    var o = this;
                    if (r.selected = !0, s(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(t) {
                        var e = [];
                        (r = [r]).push.apply(r, t);
                        for (var n = 0; n < r.length; n++) {
                            var i = r[n].id; - 1 === s.inArray(i, e) && e.push(i)
                        }
                        o.$element.val(e), o.$element.trigger("change")
                    });
                    else {
                        var t = r.id;
                        this.$element.val(t), this.$element.trigger("change")
                    }
                }, n.prototype.unselect = function(r) {
                    var o = this;
                    if (this.$element.prop("multiple")) {
                        if (r.selected = !1, s(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("change");
                        this.current(function(t) {
                            for (var e = [], n = 0; n < t.length; n++) {
                                var i = t[n].id;
                                i !== r.id && -1 === s.inArray(i, e) && e.push(i)
                            }
                            o.$element.val(e), o.$element.trigger("change")
                        })
                    }
                }, n.prototype.bind = function(t) {
                    var e = this;
                    (this.container = t).on("select", function(t) {
                        e.select(t.data)
                    }), t.on("unselect", function(t) {
                        e.unselect(t.data)
                    })
                }, n.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        s.removeData(this, "data")
                    })
                }, n.prototype.query = function(i, t) {
                    var r = [],
                        o = this;
                    this.$element.children().each(function() {
                        var t = s(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var e = o.item(t),
                                n = o.matches(i, e);
                            null !== n && r.push(n)
                        }
                    }), t({
                        results: r
                    })
                }, n.prototype.addOptions = function(t) {
                    e.appendMany(this.$element, t)
                }, n.prototype.option = function(t) {
                    var e;
                    t.children ? (e = document.createElement("optgroup")).label = t.text : (e = document.createElement("option")).textContent !== undefined ? e.textContent = t.text : e.innerText = t.text, t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                    var n = s(e),
                        i = this._normalizeItem(t);
                    return i.element = e, s.data(e, "data", i), n
                }, n.prototype.item = function(t) {
                    var e = {};
                    if (null != (e = s.data(t[0], "data"))) return e;
                    if (t.is("option")) e = {
                        id: t.val(),
                        text: t.text(),
                        disabled: t.prop("disabled"),
                        selected: t.prop("selected"),
                        title: t.prop("title")
                    };
                    else if (t.is("optgroup")) {
                        e = {
                            text: t.prop("label"),
                            children: [],
                            title: t.prop("title")
                        };
                        for (var n = t.children("option"), i = [], r = 0; r < n.length; r++) {
                            var o = s(n[r]),
                                a = this.item(o);
                            i.push(a)
                        }
                        e.children = i
                    }
                    return (e = this._normalizeItem(e)).element = t[0], s.data(t[0], "data", e), e
                }, n.prototype._normalizeItem = function(t) {
                    s.isPlainObject(t) || (t = {
                        id: t,
                        text: t
                    });
                    var e = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != (t = s.extend({}, {
                            text: ""
                        }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)),
                        s.extend({}, e, t)
                }, n.prototype.matches = function(t, e) {
                    return this.options.get("matcher")(t, e)
                }, n
            }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, p, g) {
                function i(t, e) {
                    var n = e.get("data") || [];
                    i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
                }
                return p.Extend(i, t), i.prototype.select = function(n) {
                    var t = this.$element.find("option").filter(function(t, e) {
                        return e.value == n.id.toString()
                    });
                    0 === t.length && (t = this.option(n), this.addOptions(t)), i.__super__.select.call(this, n)
                }, i.prototype.convertToOptions = function(t) {
                    function e(t) {
                        return function() {
                            return g(this).val() == t.id
                        }
                    }
                    for (var n = this, i = this.$element.find("option"), r = i.map(function() {
                            return n.item(g(this)).id
                        }).get(), o = [], a = 0; a < t.length; a++) {
                        var s = this._normalizeItem(t[a]);
                        if (0 <= g.inArray(s.id, r)) {
                            var l = i.filter(e(s)),
                                u = this.item(l),
                                c = g.extend(!0, {}, s, u),
                                d = this.option(c);
                            l.replaceWith(d)
                        } else {
                            var h = this.option(s);
                            if (s.children) {
                                var f = this.convertToOptions(s.children);
                                p.appendMany(h, f)
                            }
                            o.push(h)
                        }
                    }
                    return o
                }, i
            }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, o) {
                function n(t, e) {
                    this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, t, e)
                }
                return e.Extend(n, t), n.prototype._applyDefaults = function(t) {
                    var e = {
                        data: function(t) {
                            return o.extend({}, t, {
                                q: t.term
                            })
                        },
                        transport: function(t, e, n) {
                            var i = o.ajax(t);
                            return i.then(e), i.fail(n), i
                        }
                    };
                    return o.extend({}, e, t, !0)
                }, n.prototype.processResults = function(t) {
                    return t
                }, n.prototype.query = function(n, i) {
                    function t() {
                        var t = e.transport(e, function(t) {
                            var e = r.processResults(t, n);
                            r.options.get("debug") && window.console && console.error && (e && e.results && o.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(e)
                        }, function() {
                            t.status && "0" === t.status || r.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        r._request = t
                    }
                    var r = this;
                    null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var e = o.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof e.url && (e.url = e.url.call(this.$element, n)), "function" == typeof e.data && (e.data = e.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay)) : t()
                }, n
            }), t.define("select2/data/tags", ["jquery"], function(c) {
                function t(t, e, n) {
                    var i = n.get("tags"),
                        r = n.get("createTag");
                    r !== undefined && (this.createTag = r);
                    var o = n.get("insertTag");
                    if (o !== undefined && (this.insertTag = o), t.call(this, e, n), c.isArray(i))
                        for (var a = 0; a < i.length; a++) {
                            var s = i[a],
                                l = this._normalizeItem(s),
                                u = this.option(l);
                            this.$element.append(u)
                        }
                }
                return t.prototype.query = function(t, l, u) {
                    function c(t, e) {
                        for (var n = t.results, i = 0; i < n.length; i++) {
                            var r = n[i],
                                o = null != r.children && !c({
                                    results: r.children
                                }, !0);
                            if (r.text === l.term || o) return !e && (t.data = n, void u(t))
                        }
                        if (e) return !0;
                        var a = d.createTag(l);
                        if (null != a) {
                            var s = d.option(a);
                            s.attr("data-select2-tag", !0), d.addOptions([s]), d.insertTag(n, a)
                        }
                        t.results = n, u(t)
                    }
                    var d = this;
                    this._removeOldTags(), null != l.term && null == l.page ? t.call(this, l, c) : t.call(this, l, u)
                }, t.prototype.createTag = function(t, e) {
                    var n = c.trim(e.term);
                    return "" === n ? null : {
                        id: n,
                        text: n
                    }
                }, t.prototype.insertTag = function(t, e, n) {
                    e.unshift(n)
                }, t.prototype._removeOldTags = function() {
                    this._lastTag;
                    this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || c(this).remove()
                    })
                }, t
            }), t.define("select2/data/tokenizer", ["jquery"], function(d) {
                function t(t, e, n) {
                    var i = n.get("tokenizer");
                    i !== undefined && (this.tokenizer = i), t.call(this, e, n)
                }
                return t.prototype.bind = function(t, e, n) {
                    t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                }, t.prototype.query = function(t, e, n) {
                    function i(t) {
                        var e = o._normalizeItem(t);
                        if (!o.$element.find("option").filter(function() {
                                return d(this).val() === e.id
                            }).length) {
                            var n = o.option(e);
                            n.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([n])
                        }
                        r(e)
                    }

                    function r(t) {
                        o.trigger("select", {
                            data: t
                        })
                    }
                    var o = this;
                    e.term = e.term || "";
                    var a = this.tokenizer(e, this.options, i);
                    a.term !== e.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), e.term = a.term), t.call(this, e, n)
                }, t.prototype.tokenizer = function(t, e, n, i) {
                    for (var r = n.get("tokenSeparators") || [], o = e.term, a = 0, s = this.createTag || function(t) {
                            return {
                                id: t.term,
                                text: t.term
                            }
                        }; a < o.length;) {
                        var l = o[a];
                        if (-1 !== d.inArray(l, r)) {
                            var u = o.substr(0, a),
                                c = s(d.extend({}, e, {
                                    term: u
                                }));
                            null != c ? (i(c), o = o.substr(a + 1) || "", a = 0) : a++
                        } else a++
                    }
                    return {
                        term: o
                    }
                }, t
            }), t.define("select2/data/minimumInputLength", [], function() {
                function t(t, e, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
                }
                return t.prototype.query = function(t, e, n) {
                    e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: e.term,
                            params: e
                        }
                    }) : t.call(this, e, n)
                }, t
            }), t.define("select2/data/maximumInputLength", [], function() {
                function t(t, e, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
                }
                return t.prototype.query = function(t, e, n) {
                    e.term = e.term || "", 0 < this.maximumInputLength && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: e.term,
                            params: e
                        }
                    }) : t.call(this, e, n)
                }, t
            }), t.define("select2/data/maximumSelectionLength", [], function() {
                function t(t, e, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
                }
                return t.prototype.query = function(n, i, r) {
                    var o = this;
                    this.current(function(t) {
                        var e = null != t ? t.length : 0;
                        0 < o.maximumSelectionLength && e >= o.maximumSelectionLength ? o.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: o.maximumSelectionLength
                            }
                        }) : n.call(o, i, r)
                    })
                }, t
            }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                function n(t, e) {
                    this.$element = t, this.options = e, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t
                }, n.prototype.bind = function() {}, n.prototype.position = function() {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(r) {
                function t() {}
                return t.prototype.render = function(t) {
                    var e = t.call(this),
                        n = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = n, this.$search = n.find("input"), e.prepend(n), e
                }, t.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), this.$search.on("keydown", function(t) {
                        i.trigger("keypress", t), i._keyUpPrevented = t.isDefaultPrevented()
                    }), this.$search.on("input", function() {
                        r(this).off("keyup")
                    }), this.$search.on("keyup input", function(t) {
                        i.handleSearch(t)
                    }), e.on("open", function() {
                        i.$search.attr("tabindex", 0), i.$search.focus(), window.setTimeout(function() {
                            i.$search.focus()
                        }, 0)
                    }), e.on("close", function() {
                        i.$search.attr("tabindex", -1), i.$search.val("")
                    }), e.on("focus", function() {
                        e.isOpen() && i.$search.focus()
                    }), e.on("results:all", function(t) {
                        null != t.query.term && "" !== t.query.term || (i.showSearch(t) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide"))
                    })
                }, t.prototype.handleSearch = function() {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.showSearch = function() {
                    return !0
                }, t
            }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                function t(t, e, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
                }
                return t.prototype.append = function(t, e) {
                    e.results = this.removePlaceholder(e.results), t.call(this, e)
                }, t.prototype.normalizePlaceholder = function(t, e) {
                    return "string" == typeof e && (e = {
                        id: "",
                        text: e
                    }), e
                }, t.prototype.removePlaceholder = function(t, e) {
                    for (var n = e.slice(0), i = e.length - 1; 0 <= i; i--) {
                        var r = e[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }, t
            }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(r) {
                function t(t, e, n, i) {
                    this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(t, e) {
                    this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                }, t.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("query", function(t) {
                        i.lastParams = t, i.loading = !0
                    }), e.on("query:append", function(t) {
                        i.lastParams = t, i.loading = !0
                    }), this.$results.on("scroll", function() {
                        var t = r.contains(document.documentElement, i.$loadingMore[0]);
                        if (!i.loading && t) {
                            var e = i.$results.offset().top + i.$results.outerHeight(!1);
                            i.$loadingMore.offset().top + i.$loadingMore.outerHeight(!1) <= e + 50 && i.loadMore()
                        }
                    })
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = r.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(t, e) {
                    return e.pagination && e.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = r('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        e = this.options.get("translations").get("loadingMore");
                    return t.html(e(this.lastParams)), t
                }, t
            }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, s) {
                function t(t, e, n) {
                    this.$dropdownParent = n.get("dropdownParent") || f(document.body), t.call(this, e, n)
                }
                return t.prototype.bind = function(t, e, n) {
                    var i = this,
                        r = !1;
                    t.call(this, e, n), e.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), e.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), e.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(e)
                    }), this.$dropdownContainer.on("mousedown", function(t) {
                        t.stopPropagation()
                    })
                }, t.prototype.destroy = function(t) {
                    t.call(this), this.$dropdownContainer.remove()
                }, t.prototype.position = function(t, e, n) {
                    e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, t.prototype.render = function(t) {
                    var e = f("<span></span>"),
                        n = t.call(this);
                    return e.append(n), this.$dropdownContainer = e
                }, t.prototype._hideDropdown = function() {
                    this.$dropdownContainer.detach()
                }, t.prototype._attachPositioningHandler = function(t, e) {
                    var n = this,
                        i = "scroll.select2." + e.id,
                        r = "resize.select2." + e.id,
                        o = "orientationchange.select2." + e.id,
                        a = this.$container.parents().filter(s.hasScroll);
                    a.each(function() {
                        f(this).data("select2-scroll-position", {
                            x: f(this).scrollLeft(),
                            y: f(this).scrollTop()
                        })
                    }), a.on(i, function() {
                        var t = f(this).data("select2-scroll-position");
                        f(this).scrollTop(t.y)
                    }), f(window).on(i + " " + r + " " + o, function() {
                        n._positionDropdown(), n._resizeDropdown()
                    })
                }, t.prototype._detachPositioningHandler = function(t, e) {
                    var n = "scroll.select2." + e.id,
                        i = "resize.select2." + e.id,
                        r = "orientationchange.select2." + e.id;
                    this.$container.parents().filter(s.hasScroll).off(n), f(window).off(n + " " + i + " " + r)
                }, t.prototype._positionDropdown = function() {
                    var t = f(window),
                        e = this.$dropdown.hasClass("select2-dropdown--above"),
                        n = this.$dropdown.hasClass("select2-dropdown--below"),
                        i = null,
                        r = this.$container.offset();
                    r.bottom = r.top + this.$container.outerHeight(!1);
                    var o = {
                        height: this.$container.outerHeight(!1)
                    };
                    o.top = r.top, o.bottom = r.top + o.height;
                    var a = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        s = {
                            top: t.scrollTop(),
                            bottom: t.scrollTop() + t.height()
                        },
                        l = s.top < r.top - a.height,
                        u = s.bottom > r.bottom + a.height,
                        c = {
                            left: r.left,
                            top: o.bottom
                        },
                        d = this.$dropdownParent;
                    "static" === d.css("position") && (d = d.offsetParent());
                    var h = d.offset();
                    c.top -= h.top, c.left -= h.left, e || n || (i = "below"), u || !l || e ? !l && u && e && (i = "below") : i = "above", ("above" == i || e && "below" !== i) && (c.top = o.top - h.top - a.height), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(c)
                }, t.prototype._resizeDropdown = function() {
                    var t = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                }, t.prototype._showDropdown = function() {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, t
            }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function r(t) {
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.children ? e += r(i.children) : e++
                    }
                    return e
                }

                function t(t, e, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), t.call(this, e, n, i)
                }
                return t.prototype.showSearch = function(t, e) {
                    return !(r(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
                }, t
            }), t.define("select2/dropdown/selectOnClose", [], function() {
                function t() {}
                return t.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("close", function(t) {
                        i._handleSelectOnClose(t)
                    })
                }, t.prototype._handleSelectOnClose = function(t, e) {
                    if (e && null != e.originalSelect2Event) {
                        var n = e.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var r = i.data("data");
                        null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                            data: r
                        })
                    }
                }, t
            }), t.define("select2/dropdown/closeOnSelect", [], function() {
                function t() {}
                return t.prototype.bind = function(t, e, n) {
                    var i = this;
                    t.call(this, e, n), e.on("select", function(t) {
                        i._selectTriggered(t)
                    }), e.on("unselect", function(t) {
                        i._selectTriggered(t)
                    })
                }, t.prototype._selectTriggered = function(t, e) {
                    var n = e.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: e
                    })
                }, t
            }), t.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(t) {
                        var e = t.input.length - t.maximum,
                            n = "Please delete " + e + " character";
                        return 1 != e && (n += "s"), n
                    },
                    inputTooShort: function(t) {
                        return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results\u2026"
                    },
                    maximumSelected: function(t) {
                        var e = "You can only select " + t.maximum + " item";
                        return 1 != t.maximum && (e += "s"), e
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching\u2026"
                    }
                }
            }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(m, v, y, b, x, w, _, S, k, C, M, n, T, D, A, E, P, O, I, L, z, N, F, R, j, $, W, H, t) {
                function e() {
                    this.reset()
                }
                return e.prototype.apply = function(t) {
                    if (null == (t = m.extend(!0, {}, this.defaults, t)).dataAdapter) {
                        if (null != t.ajax ? t.dataAdapter = A : null != t.data ? t.dataAdapter = D : t.dataAdapter = T, 0 < t.minimumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, O)), 0 < t.maximumInputLength && (t.dataAdapter = C.Decorate(t.dataAdapter, I)), 0 < t.maximumSelectionLength && (t.dataAdapter = C.Decorate(t.dataAdapter, L)), t.tags && (t.dataAdapter = C.Decorate(t.dataAdapter, E)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = C.Decorate(t.dataAdapter, P)), null != t.query) {
                            var e = v(t.amdBase + "compat/query");
                            t.dataAdapter = C.Decorate(t.dataAdapter, e)
                        }
                        if (null != t.initSelection) {
                            var n = v(t.amdBase + "compat/initSelection");
                            t.dataAdapter = C.Decorate(t.dataAdapter, n)
                        }
                    }
                    if (null == t.resultsAdapter && (t.resultsAdapter = y, null != t.ajax && (t.resultsAdapter = C.Decorate(t.resultsAdapter, R)), null != t.placeholder && (t.resultsAdapter = C.Decorate(t.resultsAdapter, F)), t.selectOnClose && (t.resultsAdapter = C.Decorate(t.resultsAdapter, W))), null == t.dropdownAdapter) {
                        if (t.multiple) t.dropdownAdapter = z;
                        else {
                            var i = C.Decorate(z, N);
                            t.dropdownAdapter = i
                        }
                        if (0 !== t.minimumResultsForSearch && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, $)), t.closeOnSelect && (t.dropdownAdapter = C.Decorate(t.dropdownAdapter, H)), null != t.dropdownCssClass || null != t.dropdownCss || null != t.adaptDropdownCssClass) {
                            var r = v(t.amdBase + "compat/dropdownCss");
                            t.dropdownAdapter = C.Decorate(t.dropdownAdapter, r)
                        }
                        t.dropdownAdapter = C.Decorate(t.dropdownAdapter, j)
                    }
                    if (null == t.selectionAdapter) {
                        if (t.multiple ? t.selectionAdapter = x : t.selectionAdapter = b, null != t.placeholder && (t.selectionAdapter = C.Decorate(t.selectionAdapter, w)), t.allowClear && (t.selectionAdapter = C.Decorate(t.selectionAdapter, _)), t.multiple && (t.selectionAdapter = C.Decorate(t.selectionAdapter, S)), null != t.containerCssClass || null != t.containerCss || null != t.adaptContainerCssClass) {
                            var o = v(t.amdBase + "compat/containerCss");
                            t.selectionAdapter = C.Decorate(t.selectionAdapter, o)
                        }
                        t.selectionAdapter = C.Decorate(t.selectionAdapter, k)
                    }
                    if ("string" == typeof t.language)
                        if (0 < t.language.indexOf("-")) {
                            var a = t.language.split("-")[0];
                            t.language = [t.language, a]
                        } else t.language = [t.language];
                    if (m.isArray(t.language)) {
                        var s = new M;
                        t.language.push("en");
                        for (var l = t.language, u = 0; u < l.length; u++) {
                            var c = l[u],
                                d = {};
                            try {
                                d = M.loadPath(c)
                            } catch (p) {
                                try {
                                    c = this.defaults.amdLanguageBase + c, d = M.loadPath(c)
                                } catch (g) {
                                    t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + c + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            s.extend(d)
                        }
                        t.translations = s
                    } else {
                        var h = M.loadPath(this.defaults.amdLanguageBase + "en"),
                            f = new M(t.language);
                        f.extend(h), t.translations = f
                    }
                    return t
                }, e.prototype.reset = function() {
                    function a(t) {
                        function e(t) {
                            return n[t] || t
                        }
                        return t.replace(/[^\u0000-\u007E]/g, e)
                    }

                    function s(t, e) {
                        if ("" === m.trim(t.term)) return e;
                        if (e.children && 0 < e.children.length) {
                            for (var n = m.extend(!0, {}, e), i = e.children.length - 1; 0 <= i; i--) {
                                null == s(t, e.children[i]) && n.children.splice(i, 1)
                            }
                            return 0 < n.children.length ? n : s(t, n)
                        }
                        var r = a(e.text).toUpperCase(),
                            o = a(t.term).toUpperCase();
                        return -1 < r.indexOf(o) ? e : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: C.escapeMarkup,
                        language: t,
                        matcher: s,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(t) {
                            return t
                        },
                        templateResult: function(t) {
                            return t.text
                        },
                        templateSelection: function(t) {
                            return t.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, e.prototype.set = function(t, e) {
                    var n = {};
                    n[m.camelCase(t)] = e;
                    var i = C._convertData(n);
                    m.extend(this.defaults, i)
                }, new e
            }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(i, o, r, a) {
                function t(t, e) {
                    if (this.options = t, null != e && this.fromElement(e), this.options = r.apply(this.options), e && e.is("input")) {
                        var n = i(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = a.Decorate(this.options.dataAdapter, n)
                    }
                }
                return t.prototype.fromElement = function(t) {
                    var e = ["select2"];
                    null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                    var n = {};
                    n = o.fn.jquery && "1." == o.fn.jquery.substr(0, 2) && t[0].dataset ? o.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                    var i = o.extend(!0, {}, n);
                    for (var r in i = a._convertData(i)) - 1 < o.inArray(r, e) || (o.isPlainObject(this.options[r]) ? o.extend(this.options[r], i[r]) : this.options[r] = i[r]);
                    return this
                }, t.prototype.get = function(t) {
                    return this.options[t]
                }, t.prototype.set = function(t, e) {
                    this.options[t] = e
                }, t
            }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(r, u, n, i) {
                var c = function(t, e) {
                    null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), e = e || {}, this.options = new u(e, t), c.__super__.constructor.call(this);
                    var n = t.attr("tabindex") || 0;
                    t.data("old-tabindex", n), t.attr("tabindex", "-1");
                    var i = this.options.get("dataAdapter");
                    this.dataAdapter = new i(t, this.options);
                    var r = this.render();
                    this._placeContainer(r);
                    var o = this.options.get("selectionAdapter");
                    this.selection = new o(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                    var a = this.options.get("dropdownAdapter");
                    this.dropdown = new a(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                    var s = this.options.get("resultsAdapter");
                    this.results = new s(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var l = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                        l.trigger("selection:update", {
                            data: t
                        })
                    }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                };
                return n.Extend(c, n.Observable), c.prototype._generateId = function(t) {
                    return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, c.prototype._placeContainer = function(t) {
                    t.insertAfter(this.$element);
                    var e = this._resolveWidth(this.$element, this.options.get("width"));
                    null != e && t.css("width", e)
                }, c.prototype._resolveWidth = function(t, e) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == e) {
                        var i = this._resolveWidth(t, "style");
                        return null != i ? i : this._resolveWidth(t, "element")
                    }
                    if ("element" == e) {
                        var r = t.outerWidth(!1);
                        return r <= 0 ? "auto" : r + "px"
                    }
                    if ("style" == e) {
                        var o = t.attr("style");
                        if ("string" != typeof o) return null;
                        for (var a = o.split(";"), s = 0, l = a.length; s < l; s += 1) {
                            var u = a[s].replace(/\s/g, "").match(n);
                            if (null !== u && 1 <= u.length) return u[1]
                        }
                        return null
                    }
                    return e
                }, c.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, c.prototype._registerDomEvents = function() {
                    var e = this;
                    this.$element.on("change.select2", function() {
                        e.dataAdapter.current(function(t) {
                            e.trigger("selection:update", {
                                data: t
                            })
                        })
                    }), this.$element.on("focus.select2", function(t) {
                        e.trigger("focus", t)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != t ? (this._observer = new t(function(t) {
                        r.each(t, e._syncA), r.each(t, e._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                }, c.prototype._registerDataEvents = function() {
                    var n = this;
                    this.dataAdapter.on("*", function(t, e) {
                        n.trigger(t, e)
                    })
                }, c.prototype._registerSelectionEvents = function() {
                    var n = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        n.toggleDropdown()
                    }), this.selection.on("focus", function(t) {
                        n.focus(t)
                    }), this.selection.on("*", function(t, e) {
                        -1 === r.inArray(t, i) && n.trigger(t, e)
                    })
                }, c.prototype._registerDropdownEvents = function() {
                    var n = this;
                    this.dropdown.on("*", function(t, e) {
                        n.trigger(t, e)
                    })
                }, c.prototype._registerResultsEvents = function() {
                    var n = this;
                    this.results.on("*", function(t, e) {
                        n.trigger(t, e)
                    })
                }, c.prototype._registerEvents = function() {
                    var n = this;
                    this.on("open", function() {
                        n.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        n.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        n.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        n.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        n.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(e) {
                        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(e, function(t) {
                            n.trigger("results:all", {
                                data: t,
                                query: e
                            })
                        })
                    }), this.on("query:append", function(e) {
                        this.dataAdapter.query(e, function(t) {
                            n.trigger("results:append", {
                                data: t,
                                query: e
                            })
                        })
                    }), this.on("keypress", function(t) {
                        var e = t.which;
                        n.isOpen() ? e === i.ESC || e === i.TAB || e === i.UP && t.altKey ? (n.close(), t.preventDefault()) : e === i.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : e === i.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : e === i.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : e === i.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (e === i.ENTER || e === i.SPACE || e === i.DOWN && t.altKey) && (n.open(), t.preventDefault())
                    })
                }, c.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, c.prototype._syncSubtree = function(t, e) {
                    var n = !1,
                        i = this;
                    if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                        if (e)
                            if (e.addedNodes && 0 < e.addedNodes.length)
                                for (var r = 0; r < e.addedNodes.length; r++) {
                                    e.addedNodes[r].selected && (n = !0)
                                } else e.removedNodes && 0 < e.removedNodes.length && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function(t) {
                            i.trigger("selection:update", {
                                data: t
                            })
                        })
                    }
                }, c.prototype.trigger = function(t, e) {
                    var n = c.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (e === undefined && (e = {}), t in i) {
                        var r = i[t],
                            o = {
                                prevented: !1,
                                name: t,
                                args: e
                            };
                        if (n.call(this, r, o), o.prevented) return void(e.prevented = !0)
                    }
                    n.call(this, t, e)
                }, c.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, c.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, c.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, c.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, c.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, c.prototype.focus = function() {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, c.prototype.enable = function(t) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
                    var e = !t[0];
                    this.$element.prop("disabled", e)
                }, c.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current(function(t) {
                        e = t
                    }), e
                }, c.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var e = t[0];
                    r.isArray(e) && (e = r.map(e, function(t) {
                        return t.toString()
                    })), this.$element.val(e).trigger("change")
                }, c.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, c.prototype.render = function() {
                    var t = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                }, c
            }), t.define("jquery-mousewheel", ["jquery"], function(t) {
                return t
            }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(r, t, o, e) {
                if (null == r.fn.select2) {
                    var a = ["open", "close", "destroy"];
                    r.fn.select2 = function(e) {
                        if ("object" == typeof(e = e || {})) return this.each(function() {
                            var t = r.extend(!0, {}, e);
                            new o(r(this), t)
                        }), this;
                        if ("string" == typeof e) {
                            var n, i = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var t = r(this).data("select2");
                                null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), n = t[e].apply(t, i)
                            }), -1 < r.inArray(e, a) ? this : n
                        }
                        throw new Error("Invalid arguments for Select2: " + e)
                    }
                }
                return null == r.fn.select2.defaults && (r.fn.select2.defaults = e), o
            }), {
                define: t.define,
                require: t.require
            }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
    }
}(function() {
    var i;
    return function() {
        function c(o, a, s) {
            function l(n, t) {
                if (!a[n]) {
                    if (!o[n]) {
                        var e = "function" == typeof require && require;
                        if (!t && e) return e(n, !0);
                        if (u) return u(n, !0);
                        var i = new Error("Cannot find module '" + n + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var r = a[n] = {
                        exports: {}
                    };
                    o[n][0].call(r.exports, function(t) {
                        var e = o[n][1][t];
                        return l(e || t)
                    }, r, r.exports, c, o, a, s)
                }
                return a[n].exports
            }
            for (var u = "function" == typeof require && require, t = 0; t < s.length; t++) l(s[t]);
            return l
        }
        return c
    }()({
        1: [function(t, e) {
            function n(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/i,
                        n = /^#([a-fA-F0-9]{6})$/i,
                        i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                        r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                        o = /(\w+)/,
                        a = [0, 0, 0],
                        s = 1,
                        l = t.match(e);
                    if (l) {
                        l = l[1];
                        for (var u = 0; u < a.length; u++) a[u] = parseInt(l[u] + l[u], 16)
                    } else if (l = t.match(n)) {
                        l = l[1];
                        for (u = 0; u < a.length; u++) a[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
                    } else if (l = t.match(i)) {
                        for (u = 0; u < a.length; u++) a[u] = parseInt(l[u + 1]);
                        s = parseFloat(l[4])
                    } else if (l = t.match(r)) {
                        for (u = 0; u < a.length; u++) a[u] = Math.round(2.55 * parseFloat(l[u + 1]));
                        s = parseFloat(l[4])
                    } else if (l = t.match(o)) {
                        if ("transparent" == l[1]) return [0, 0, 0, 0];
                        if (!(a = b[l[1]])) return
                    }
                    for (u = 0; u < a.length; u++) a[u] = v(a[u], 0, 255);
                    return s = s || 0 == s ? v(s, 0, 1) : 1, a[3] = s, a
                }
            }

            function i(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]);
                        return [v(parseInt(n[1]), 0, 360), v(parseFloat(n[2]), 0, 100), v(parseFloat(n[3]), 0, 100), v(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        n = t.match(e);
                    if (n) {
                        var i = parseFloat(n[4]);
                        return [v(parseInt(n[1]), 0, 360), v(parseFloat(n[2]), 0, 100), v(parseFloat(n[3]), 0, 100), v(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function o(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }

            function a(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }

            function s(t) {
                var e = n(t);
                return e ? e[3] : (e = i(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
            }

            function l(t) {
                return "#" + y(t[0]) + y(t[1]) + y(t[2])
            }

            function u(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }

            function c(t, e) {
                return e === undefined && (e = t[3] !== undefined ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function d(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? h(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
            }

            function h(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function f(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }

            function p(t, e) {
                return e === undefined && (e = t[3] !== undefined ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function g(t, e) {
                return e === undefined && (e = t[3] !== undefined ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (e !== undefined && 1 !== e ? ", " + e : "") + ")"
            }

            function m(t) {
                return x[t.slice(0, 3)]
            }

            function v(t, e, n) {
                return Math.min(Math.max(e, t), n)
            }

            function y(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var b = t(5);
            e.exports = {
                getRgba: n,
                getHsla: i,
                getRgb: o,
                getHsl: a,
                getHwb: r,
                getAlpha: s,
                hexString: l,
                rgbString: u,
                rgbaString: c,
                percentString: d,
                percentaString: h,
                hslString: f,
                hslaString: p,
                hwbString: g,
                keyword: m
            };
            var x = {};
            for (var w in b) x[b[w]] = w
        }, {
            5: 5
        }],
        2: [function(t, e) {
            var c = t(4),
                n = t(1),
                a = function(t) {
                    return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && ((e = t).r !== undefined || e.red !== undefined ? this.setValues("rgb", e) : e.l !== undefined || e.lightness !== undefined ? this.setValues("hsl", e) : e.v !== undefined || e.value !== undefined ? this.setValues("hsv", e) : e.w !== undefined || e.whiteness !== undefined ? this.setValues("hwb", e) : e.c === undefined && e.cyan === undefined || this.setValues("cmyk", e)))) : new a(t);
                    var e
                };
            a.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return t === undefined ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                        var i = t[n] / 255;
                        e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        n = t.luminosity();
                    return n < e ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        n = (e[0] + t) % 360;
                    return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var n = this,
                        i = t,
                        r = e === undefined ? .5 : e,
                        o = 2 * r - 1,
                        a = n.alpha() - i.alpha(),
                        s = ((o * a == -1 ? o : (o + a) / (1 + o * a)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * r + i.alpha() * (1 - r))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, n = new a,
                        i = this.values,
                        r = n.values;
                    for (var o in i) i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
                    return n
                }
            }, a.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, a.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, a.prototype.getValues = function(t) {
                for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (n.a = e.alpha), n
            }, a.prototype.setValues = function(t, e) {
                var n, i, r = this.values,
                    o = this.spaces,
                    a = this.maxes,
                    s = 1;
                if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) r[t] = e.slice(0, t.length), s = e[t.length];
                else if (e[t.charAt(0)] !== undefined) {
                    for (n = 0; n < t.length; n++) r[t][n] = e[t.charAt(n)];
                    s = e.a
                } else if (e[o[t][0]] !== undefined) {
                    var l = o[t];
                    for (n = 0; n < t.length; n++) r[t][n] = e[l[n]];
                    s = e.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, s === undefined ? r.alpha : s)), "alpha" === t) return !1;
                for (n = 0; n < t.length; n++) i = Math.max(0, Math.min(a[t][n], r[t][n])), r[t][n] = Math.round(i);
                for (var u in o) u !== t && (r[u] = c[t][u](r[t]));
                return !0
            }, a.prototype.setSpace = function(t, e) {
                var n = e[0];
                return n === undefined ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
            }, a.prototype.setChannel = function(t, e, n) {
                var i = this.values[t];
                return n === undefined ? i[e] : (n === i[e] || (i[e] = n, this.setValues(t, i)), this)
            }, "undefined" != typeof window && (window.Color = a), e.exports = a
        }, {
            1: 1,
            4: 4
        }],
        3: [function(t, e) {
            function o(t) {
                var e, n, i = t[0] / 255,
                    r = t[1] / 255,
                    o = t[2] / 255,
                    a = Math.min(i, r, o),
                    s = Math.max(i, r, o),
                    l = s - a;
                return s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }

            function n(t) {
                var e, n, i = t[0],
                    r = t[1],
                    o = t[2],
                    a = Math.min(i, r, o),
                    s = Math.max(i, r, o),
                    l = s - a;
                return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10]
            }

            function i(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return [o(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))]
            }

            function a(t) {
                var e, n = t[0] / 255,
                    i = t[1] / 255,
                    r = t[2] / 255;
                return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
            }

            function s(t) {
                return Q[JSON.stringify(t)]
            }

            function l(t) {
                var e = t[0] / 255,
                    n = t[1] / 255,
                    i = t[2] / 255;
                return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
            }

            function u(t) {
                var e = l(t),
                    n = e[0],
                    i = e[1],
                    r = e[2];
                return i /= 100, r /= 108.883, n = .008856 < (n /= 95.047) ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = .008856 < r ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
            }

            function c(t) {
                return F(u(t))
            }

            function d(t) {
                var e, n, i, r, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var u = 0; u < 3; u++)(i = a + 1 / 3 * -(u - 1)) < 0 && i++, 1 < i && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[u] = 255 * o;
                return r
            }

            function h(t) {
                var e = t[0],
                    n = t[1] / 100,
                    i = t[2] / 100;
                return 0 === i ? [0, 0, 0] : [e, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
            }

            function f(t) {
                return i(d(t))
            }

            function p(t) {
                return a(d(t))
            }

            function m(t) {
                return s(d(t))
            }

            function v(t) {
                var e = t[0] / 60,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    a = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * o),
                    l = 255 * i * (1 - n * (1 - o));
                i *= 255;
                switch (r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }

            function y(t) {
                var e, n, i = t[0],
                    r = t[1] / 100,
                    o = t[2] / 100;
                return e = r * o, [i, 100 * (e = (e /= (n = (2 - r) * o) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
            }

            function x(t) {
                return i(v(t))
            }

            function w(t) {
                return a(v(t))
            }

            function _(t) {
                return s(v(t))
            }

            function S(t) {
                var e, n, i, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (1 < u && (s /= u, l /= u), i = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = n,
                    g = o,
                    b = s;
                    break;
                    case 1:
                            r = o,
                        g = n,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = n,
                        b = o;
                        break;
                    case 3:
                            r = s,
                        g = o,
                        b = n;
                        break;
                    case 4:
                            r = o,
                        g = s,
                        b = n;
                        break;
                    case 5:
                            r = n,
                        g = s,
                        b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function k(t) {
                return o(S(t))
            }

            function C(t) {
                return n(S(t))
            }

            function M(t) {
                return a(S(t))
            }

            function T(t) {
                return s(S(t))
            }

            function D(t) {
                var e = t[0] / 100,
                    n = t[1] / 100,
                    i = t[2] / 100,
                    r = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
            }

            function A(t) {
                return o(D(t))
            }

            function E(t) {
                return n(D(t))
            }

            function P(t) {
                return i(D(t))
            }

            function O(t) {
                return s(D(t))
            }

            function I(t) {
                var e, n, i, r = t[0] / 100,
                    o = t[1] / 100,
                    a = t[2] / 100;
                return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, e = .0031308 < (e = 3.2406 * r + -1.5372 * o + -.4986 * a) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }

            function L(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2];
                return n /= 100, i /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function z(t) {
                return F(L(t))
            }

            function N(t) {
                var e, n, i, r, o = t[0],
                    a = t[1],
                    s = t[2];
                return o <= 8 ? r = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
            }

            function F(t) {
                var e, n = t[0],
                    i = t[1],
                    r = t[2];
                return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
            }

            function R(t) {
                return I(N(t))
            }

            function j(t) {
                var e, n = t[0],
                    i = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
            }

            function $(t) {
                return N(j(t))
            }

            function W(t) {
                return R(j(t))
            }

            function H(t) {
                return X[t]
            }

            function B(t) {
                return o(H(t))
            }

            function q(t) {
                return n(H(t))
            }

            function Y(t) {
                return i(H(t))
            }

            function U(t) {
                return a(H(t))
            }

            function V(t) {
                return u(H(t))
            }

            function G(t) {
                return l(H(t))
            }
            e.exports = {
                rgb2hsl: o,
                rgb2hsv: n,
                rgb2hwb: i,
                rgb2cmyk: a,
                rgb2keyword: s,
                rgb2xyz: l,
                rgb2lab: u,
                rgb2lch: c,
                hsl2rgb: d,
                hsl2hsv: h,
                hsl2hwb: f,
                hsl2cmyk: p,
                hsl2keyword: m,
                hsv2rgb: v,
                hsv2hsl: y,
                hsv2hwb: x,
                hsv2cmyk: w,
                hsv2keyword: _,
                hwb2rgb: S,
                hwb2hsl: k,
                hwb2hsv: C,
                hwb2cmyk: M,
                hwb2keyword: T,
                cmyk2rgb: D,
                cmyk2hsl: A,
                cmyk2hsv: E,
                cmyk2hwb: P,
                cmyk2keyword: O,
                keyword2rgb: H,
                keyword2hsl: B,
                keyword2hsv: q,
                keyword2hwb: Y,
                keyword2cmyk: U,
                keyword2lab: V,
                keyword2xyz: G,
                xyz2rgb: I,
                xyz2lab: L,
                xyz2lch: z,
                lab2xyz: N,
                lab2rgb: R,
                lab2lch: F,
                lch2lab: j,
                lch2xyz: $,
                lch2rgb: W
            };
            var X = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                Q = {};
            for (var Z in X) Q[JSON.stringify(X[Z])] = Z
        }, {}],
        4: [function(t, e) {
            var r = t(3),
                o = function() {
                    return new l
                };
            for (var n in r) {
                o[n + "Raw"] = function(e) {
                    return function(t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), r[e](t)
                    }
                }(n);
                var i = /(\w+)2(\w+)/.exec(n),
                    a = i[1],
                    s = i[2];
                o[a] = o[a] || {}, o[a][s] = o[n] = function(i) {
                    return function(t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var e = r[i](t);
                        if ("string" == typeof e || e === undefined) return e;
                        for (var n = 0; n < e.length; n++) e[n] = Math.round(e[n]);
                        return e
                    }
                }(n)
            }
            var l = function() {
                this.convs = {}
            };
            l.prototype.routeSpace = function(t, e) {
                var n = e[0];
                return n === undefined ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
            }, l.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, l.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var n = this.space,
                        i = this.convs[n];
                    e = o[n][t](i), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                l.prototype[t] = function() {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = o
        }, {
            3: 3
        }],
        5: [function(t, e) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        6: [function(Po, Oo, t) {
            var e, n;
            e = this, n = function() {
                "use strict";

                function u() {
                    return Ti.apply(null, arguments)
                }

                function t(t) {
                    Ti = t
                }

                function a(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function s(t) {
                    return null != t && "[object Object]" === Object.prototype.toString.call(t)
                }

                function l(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }

                function o(t) {
                    return void 0 === t
                }

                function c(t) {
                    return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
                }

                function r(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function n(t, e) {
                    var n, i = [];
                    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                    return i
                }

                function d(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function h(t, e) {
                    for (var n in e) d(e, n) && (t[n] = e[n]);
                    return d(e, "toString") && (t.toString = e.toString), d(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function f(t, e, n, i) {
                    return ke(t, e, n, i, !0).utc()
                }

                function e() {
                    return {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }
                }

                function p(t) {
                    return null == t._pf && (t._pf = e()), t._pf
                }

                function g(t) {
                    if (null == t._isValid) {
                        var e = p(t),
                            n = Di.call(e.parsedDateParts, function(t) {
                                return null != t
                            }),
                            i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && e.bigHour === undefined), null != Object.isFrozen && Object.isFrozen(t)) return i;
                        t._isValid = i
                    }
                    return t._isValid
                }

                function i(t) {
                    var e = f(NaN);
                    return null != t ? h(p(e), t) : p(e).userInvalidated = !0, e
                }

                function m(t, e) {
                    var n, i, r;
                    if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = p(e)), o(e._locale) || (t._locale = e._locale), 0 < Ei.length)
                        for (n = 0; n < Ei.length; n++) o(r = e[i = Ei[n]]) || (t[i] = r);
                    return t
                }

                function v(t) {
                    m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Pi && (Pi = !0, u.updateOffset(this), Pi = !1)
                }

                function y(t) {
                    return t instanceof v || null != t && null != t._isAMomentObject
                }

                function b(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }

                function x(t) {
                    var e = +t,
                        n = 0;
                    return 0 !== e && isFinite(e) && (n = b(e)), n
                }

                function w(t, e, n) {
                    var i, r = Math.min(t.length, e.length),
                        o = Math.abs(t.length - e.length),
                        a = 0;
                    for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && x(t[i]) !== x(e[i])) && a++;
                    return a + o
                }

                function _(t) {
                    !1 === u.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                }

                function S(o, a) {
                    var s = !0;
                    return h(function(t) {
                        if (null != u.deprecationHandler && u.deprecationHandler(null, o), s) {
                            for (var e, n = [], i = 0; i < arguments.length; i++) {
                                if (e = "", "object" == typeof arguments[i]) {
                                    for (var r in e += "\n[" + i + "] ", t) e += r + ": " + t[r] + ", ";
                                    e = e.slice(0, -2)
                                } else e = arguments[i];
                                n.push(e)
                            }
                            _(o + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + (new Error).stack), s = !1
                        }
                        return a.apply(this, arguments)
                    }, a)
                }

                function k(t, e) {
                    null != u.deprecationHandler && u.deprecationHandler(t, e), Oi[t] || (_(e), Oi[t] = !0)
                }

                function C(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function M(t) {
                    var e, n;
                    for (n in t) C(e = t[n]) ? this[n] = e : this["_" + n] = e;
                    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function T(t, e) {
                    var n, i = h({}, t);
                    for (n in e) d(e, n) && (s(t[n]) && s(e[n]) ? (i[n] = {}, h(i[n], t[n]), h(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                    for (n in t) d(t, n) && !d(e, n) && s(t[n]) && (i[n] = h({}, i[n]));
                    return i
                }

                function D(t) {
                    null != t && this.set(t)
                }

                function A(t, e, n) {
                    var i = this._calendar[t] || this._calendar.sameElse;
                    return C(i) ? i.call(e, n) : i
                }

                function E(t) {
                    var e = this._longDateFormat[t],
                        n = this._longDateFormat[t.toUpperCase()];
                    return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }

                function P() {
                    return this._invalidDate
                }

                function O(t) {
                    return this._ordinal.replace("%d", t)
                }

                function I(t, e, n, i) {
                    var r = this._relativeTime[n];
                    return C(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
                }

                function L(t, e) {
                    var n = this._relativeTime[0 < t ? "future" : "past"];
                    return C(n) ? n(e) : n.replace(/%s/i, e)
                }

                function z(t, e) {
                    var n = t.toLowerCase();
                    ji[n] = ji[n + "s"] = ji[e] = t
                }

                function N(t) {
                    return "string" == typeof t ? ji[t] || ji[t.toLowerCase()] : undefined
                }

                function F(t) {
                    var e, n, i = {};
                    for (n in t) d(t, n) && (e = N(n)) && (i[e] = t[n]);
                    return i
                }

                function R(t, e) {
                    $i[t] = e
                }

                function j(t) {
                    var e = [];
                    for (var n in t) e.push({
                        unit: n,
                        priority: $i[n]
                    });
                    return e.sort(function(t, e) {
                        return t.priority - e.priority
                    }), e
                }

                function $(t, e, n) {
                    var i = "" + Math.abs(t),
                        r = e - i.length;
                    return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
                }

                function W(t, e, n, i) {
                    var r = i;
                    "string" == typeof i && (r = function() {
                        return this[i]()
                    }), t && (qi[t] = r), e && (qi[e[0]] = function() {
                        return $(r.apply(this, arguments), e[1], e[2])
                    }), n && (qi[n] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), t)
                    })
                }

                function H(t) {
                    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
                }

                function B(i) {
                    var t, r, o = i.match(Wi);
                    for (t = 0, r = o.length; t < r; t++) qi[o[t]] ? o[t] = qi[o[t]] : o[t] = H(o[t]);
                    return function(t) {
                        var e, n = "";
                        for (e = 0; e < r; e++) n += C(o[e]) ? o[e].call(t, i) : o[e];
                        return n
                    }
                }

                function q(t, e) {
                    return t.isValid() ? (e = Y(e, t.localeData()), Bi[e] = Bi[e] || B(e), Bi[e](t)) : t.localeData().invalidDate()
                }

                function Y(t, e) {
                    function n(t) {
                        return e.longDateFormat(t) || t
                    }
                    var i = 5;
                    for (Hi.lastIndex = 0; 0 <= i && Hi.test(t);) t = t.replace(Hi, n), Hi.lastIndex = 0, i -= 1;
                    return t
                }

                function U(t, e, n) {
                    lr[t] = C(e) ? e : function(t) {
                        return t && n ? n : e
                    }
                }

                function V(t, e) {
                    return d(lr, t) ? lr[t](e._strict, e._locale) : new RegExp(G(t))
                }

                function G(t) {
                    return X(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                        return e || n || i || r
                    }))
                }

                function X(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }

                function Q(t, n) {
                    var e, i = n;
                    for ("string" == typeof t && (t = [t]), c(n) && (i = function(t, e) {
                            e[n] = x(t)
                        }), e = 0; e < t.length; e++) ur[t[e]] = i
                }

                function Z(t, r) {
                    Q(t, function(t, e, n, i) {
                        n._w = n._w || {}, r(t, n._w, n, i)
                    })
                }

                function J(t, e, n) {
                    null != e && d(ur, t) && ur[t](e, n._a, n, t)
                }

                function K(t) {
                    return tt(t) ? 366 : 365
                }

                function tt(t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }

                function et() {
                    return tt(this.year())
                }

                function nt(e, n) {
                    return function(t) {
                        return null != t ? (rt(this, e, t), u.updateOffset(this, n), this) : it(this, e)
                    }
                }

                function it(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function rt(t, e, n) {
                    t.isValid() && !isNaN(n) && ("FullYear" === e && tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), lt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
                }

                function ot(t) {
                    return C(this[t = N(t)]) ? this[t]() : this
                }

                function at(t, e) {
                    if ("object" == typeof t)
                        for (var n = j(t = F(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
                    else if (C(this[t = N(t)])) return this[t](e);
                    return this
                }

                function st(t, e) {
                    return (t % e + e) % e
                }

                function lt(t, e) {
                    if (isNaN(t) || isNaN(e)) return NaN;
                    var n = st(e, 12);
                    return t += (e - n) / 12, 1 === n ? tt(t) ? 29 : 28 : 31 - n % 7 % 2
                }

                function ut(t, e) {
                    return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || wr).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
                }

                function ct(t, e) {
                    return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[wr.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }

                function dt(t, e, n) {
                    var i, r, o, a = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = f([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? -1 !== (r = br.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = br.call(this._longMonthsParse, a)) ? r : null : "MMM" === e ? -1 !== (r = br.call(this._shortMonthsParse, a)) ? r : -1 !== (r = br.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = br.call(this._longMonthsParse, a)) ? r : -1 !== (r = br.call(this._shortMonthsParse, a)) ? r : null
                }

                function ht(t, e, n) {
                    var i, r, o;
                    if (this._monthsParseExact) return dt.call(this, t, e, n);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                        if (r = f([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                        if (!n && this._monthsParse[i].test(t)) return i
                    }
                }

                function ft(t, e) {
                    var n;
                    if (!t.isValid()) return t;
                    if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = x(e);
                        else if (!c(e = t.localeData().monthsParse(e))) return t;
                    return n = Math.min(t.date(), lt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
                }

                function pt(t) {
                    return null != t ? (ft(this, t), u.updateOffset(this, !0), this) : it(this, "Month")
                }

                function gt() {
                    return lt(this.year(), this.month())
                }

                function mt(t) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = kr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }

                function vt(t) {
                    return this._monthsParseExact ? (d(this, "_monthsRegex") || yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Cr), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }

                function yt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i = [],
                        r = [],
                        o = [];
                    for (e = 0; e < 12; e++) n = f([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
                    for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) i[e] = X(i[e]), r[e] = X(r[e]);
                    for (e = 0; e < 24; e++) o[e] = X(o[e]);
                    this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
                }

                function bt(t, e, n, i, r, o, a) {
                    var s = new Date(t, e, n, i, r, o, a);
                    return t < 100 && 0 <= t && isFinite(s.getFullYear()) && s.setFullYear(t), s
                }

                function xt(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function wt(t, e, n) {
                    var i = 7 + e - n;
                    return -((7 + xt(t, 0, i).getUTCDay() - e) % 7) + i - 1
                }

                function _t(t, e, n, i, r) {
                    var o, a, s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + wt(t, i, r);
                    return s <= 0 ? a = K(o = t - 1) + s : s > K(t) ? (o = t + 1, a = s - K(t)) : (o = t, a = s), {
                        year: o,
                        dayOfYear: a
                    }
                }

                function St(t, e, n) {
                    var i, r, o = wt(t.year(), e, n),
                        a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                    return a < 1 ? i = a + kt(r = t.year() - 1, e, n) : a > kt(t.year(), e, n) ? (i = a - kt(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = a), {
                        week: i,
                        year: r
                    }
                }

                function kt(t, e, n) {
                    var i = wt(t, e, n),
                        r = wt(t + 1, e, n);
                    return (K(t) - i + r) / 7
                }

                function Ct(t) {
                    return St(t, this._week.dow, this._week.doy).week
                }

                function Mt() {
                    return this._week.dow
                }

                function Tt() {
                    return this._week.doy
                }

                function Dt(t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function At(t) {
                    var e = St(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }

                function Et(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
                }

                function Pt(t, e) {
                    return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                }

                function Ot(t, e) {
                    return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }

                function It(t) {
                    return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                }

                function Lt(t) {
                    return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                }

                function zt(t, e, n) {
                    var i, r, o, a = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = f([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? -1 !== (r = br.call(this._weekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = br.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = br.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === e ? -1 !== (r = br.call(this._weekdaysParse, a)) ? r : -1 !== (r = br.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = br.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = br.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = br.call(this._weekdaysParse, a)) ? r : -1 !== (r = br.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = br.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = br.call(this._weekdaysParse, a)) ? r : -1 !== (r = br.call(this._shortWeekdaysParse, a)) ? r : null
                }

                function Nt(t, e, n) {
                    var i, r, o;
                    if (this._weekdaysParseExact) return zt.call(this, t, e, n);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                        if (r = f([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                        if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                        if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                        if (!n && this._weekdaysParse[i].test(t)) return i
                    }
                }

                function Ft(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (t = Et(t, this.localeData()), this.add(t - e, "d")) : e
                }

                function Rt(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }

                function jt(t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    if (null != t) {
                        var e = Pt(t, this.localeData());
                        return this.day(this.day() % 7 ? e : e - 7)
                    }
                    return this.day() || 7
                }

                function $t(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Er), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }

                function Wt(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Pr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }

                function Ht(t) {
                    return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || Bt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Or), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }

                function Bt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, n, i, r, o, a = [],
                        s = [],
                        l = [],
                        u = [];
                    for (e = 0; e < 7; e++) n = f([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(i), s.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
                    for (a.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) s[e] = X(s[e]), l[e] = X(l[e]), u[e] = X(u[e]);
                    this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
                }

                function qt() {
                    return this.hours() % 12 || 12
                }

                function Yt() {
                    return this.hours() || 24
                }

                function Ut(t, e) {
                    W(t, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function Vt(t, e) {
                    return e._meridiemParse
                }

                function Gt(t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }

                function Xt(t, e, n) {
                    return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM"
                }

                function Qt(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function Zt(t) {
                    for (var e, n, i, r, o = 0; o < t.length;) {
                        for (e = (r = Qt(t[o]).split("-")).length, n = (n = Qt(t[o + 1])) ? n.split("-") : null; 0 < e;) {
                            if (i = Jt(r.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && w(r, n, !0) >= e - 1) break;
                            e--
                        }
                        o++
                    }
                    return null
                }

                function Jt(t) {
                    var e = null;
                    if (!Fr[t] && void 0 !== Oo && Oo && Oo.exports) try {
                        e = Ir._abbr, Po("./locale/" + t), Kt(e)
                    } catch (n) {}
                    return Fr[t]
                }

                function Kt(t, e) {
                    var n;
                    return t && (n = o(e) ? ne(t) : te(t, e)) && (Ir = n), Ir._abbr
                }

                function te(t, e) {
                    if (null !== e) {
                        var n = Nr;
                        if (e.abbr = t, null != Fr[t]) k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Fr[t]._config;
                        else if (null != e.parentLocale) {
                            if (null == Fr[e.parentLocale]) return Rr[e.parentLocale] || (Rr[e.parentLocale] = []), Rr[e.parentLocale].push({
                                name: t,
                                config: e
                            }), null;
                            n = Fr[e.parentLocale]._config
                        }
                        return Fr[t] = new D(T(n, e)), Rr[t] && Rr[t].forEach(function(t) {
                            te(t.name, t.config)
                        }), Kt(t), Fr[t]
                    }
                    return delete Fr[t], null
                }

                function ee(t, e) {
                    if (null != e) {
                        var n, i, r = Nr;
                        null != (i = Jt(t)) && (r = i._config), (n = new D(e = T(r, e))).parentLocale = Fr[t], Fr[t] = n, Kt(t)
                    } else null != Fr[t] && (null != Fr[t].parentLocale ? Fr[t] = Fr[t].parentLocale : null != Fr[t] && delete Fr[t]);
                    return Fr[t]
                }

                function ne(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ir;
                    if (!a(t)) {
                        if (e = Jt(t)) return e;
                        t = [t]
                    }
                    return Zt(t)
                }

                function ie() {
                    return Ai(Fr)
                }

                function re(t) {
                    var e, n = t._a;
                    return n && -2 === p(t).overflow && (e = n[dr] < 0 || 11 < n[dr] ? dr : n[hr] < 1 || n[hr] > lt(n[cr], n[dr]) ? hr : n[fr] < 0 || 24 < n[fr] || 24 === n[fr] && (0 !== n[pr] || 0 !== n[gr] || 0 !== n[mr]) ? fr : n[pr] < 0 || 59 < n[pr] ? pr : n[gr] < 0 || 59 < n[gr] ? gr : n[mr] < 0 || 999 < n[mr] ? mr : -1, p(t)._overflowDayOfYear && (e < cr || hr < e) && (e = hr), p(t)._overflowWeeks && -1 === e && (e = vr), p(t)._overflowWeekday && -1 === e && (e = yr), p(t).overflow = e), t
                }

                function oe(t, e, n) {
                    return null != t ? t : null != e ? e : n
                }

                function ae(t) {
                    var e = new Date(u.now());
                    return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
                }

                function se(t) {
                    var e, n, i, r, o, a = [];
                    if (!t._d) {
                        for (i = ae(t), t._w && null == t._a[hr] && null == t._a[dr] && le(t), null != t._dayOfYear && (o = oe(t._a[cr], i[cr]), (t._dayOfYear > K(o) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), n = xt(o, 0, t._dayOfYear), t._a[dr] = n.getUTCMonth(), t._a[hr] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = i[e];
                        for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[fr] && 0 === t._a[pr] && 0 === t._a[gr] && 0 === t._a[mr] && (t._nextDay = !0, t._a[fr] = 0), t._d = (t._useUTC ? xt : bt).apply(null, a), r = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[fr] = 24), t._w && "undefined" != typeof t._w.d && t._w.d !== r && (p(t).weekdayMismatch = !0)
                    }
                }

                function le(t) {
                    var e, n, i, r, o, a, s, l;
                    if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, a = 4, n = oe(e.GG, t._a[cr], St(Ce(), 1, 4).year), i = oe(e.W, 1), ((r = oe(e.E, 1)) < 1 || 7 < r) && (l = !0);
                    else {
                        o = t._locale._week.dow, a = t._locale._week.doy;
                        var u = St(Ce(), o, a);
                        n = oe(e.gg, t._a[cr], u.year), i = oe(e.w, u.week), null != e.d ? ((r = e.d) < 0 || 6 < r) && (l = !0) : null != e.e ? (r = e.e + o, (e.e < 0 || 6 < e.e) && (l = !0)) : r = o
                    }
                    i < 1 || i > kt(n, o, a) ? p(t)._overflowWeeks = !0 : null != l ? p(t)._overflowWeekday = !0 : (s = _t(n, i, r, o, a), t._a[cr] = s.year, t._dayOfYear = s.dayOfYear)
                }

                function ue(t) {
                    var e, n, i, r, o, a, s = t._i,
                        l = jr.exec(s) || $r.exec(s);
                    if (l) {
                        for (p(t).iso = !0, e = 0, n = Hr.length; e < n; e++)
                            if (Hr[e][1].exec(l[1])) {
                                r = Hr[e][0], i = !1 !== Hr[e][2];
                                break
                            }
                        if (null == r) return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, n = Br.length; e < n; e++)
                                if (Br[e][1].exec(l[3])) {
                                    o = (l[2] || " ") + Br[e][0];
                                    break
                                }
                            if (null == o) return void(t._isValid = !1)
                        }
                        if (!i && null != o) return void(t._isValid = !1);
                        if (l[4]) {
                            if (!Wr.exec(l[4])) return void(t._isValid = !1);
                            a = "Z"
                        }
                        t._f = r + (o || "") + (a || ""), ve(t)
                    } else t._isValid = !1
                }

                function ce(t, e, n, i, r, o) {
                    var a = [de(t), Sr.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
                    return o && a.push(parseInt(o, 10)), a
                }

                function de(t) {
                    var e = parseInt(t, 10);
                    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                }

                function he(t) {
                    return t.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
                }

                function fe(t, e, n) {
                    if (t && Dr.indexOf(t) !== new Date(e[0], e[1], e[2]).getDay()) return p(n).weekdayMismatch = !0, n._isValid = !1;
                    return !0
                }

                function pe(t, e, n) {
                    if (t) return Ur[t];
                    if (e) return 0;
                    var i = parseInt(n, 10),
                        r = i % 100;
                    return 60 * ((i - r) / 100) + r
                }

                function ge(t) {
                    var e = Yr.exec(he(t._i));
                    if (e) {
                        var n = ce(e[4], e[3], e[2], e[5], e[6], e[7]);
                        if (!fe(e[1], n, t)) return;
                        t._a = n, t._tzm = pe(e[8], e[9], e[10]), t._d = xt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), p(t).rfc2822 = !0
                    } else t._isValid = !1
                }

                function me(t) {
                    var e = qr.exec(t._i);
                    null === e ? (ue(t), !1 === t._isValid && (delete t._isValid, ge(t), !1 === t._isValid && (delete t._isValid, u.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }

                function ve(t) {
                    if (t._f !== u.ISO_8601)
                        if (t._f !== u.RFC_2822) {
                            t._a = [], p(t).empty = !0;
                            var e, n, i, r, o, a = "" + t._i,
                                s = a.length,
                                l = 0;
                            for (i = Y(t._f, t._locale).match(Wi) || [], e = 0; e < i.length; e++) r = i[e], (n = (a.match(V(r, t)) || [])[0]) && (0 < (o = a.substr(0, a.indexOf(n))).length && p(t).unusedInput.push(o), a = a.slice(a.indexOf(n) + n.length), l += n.length), qi[r] ? (n ? p(t).empty = !1 : p(t).unusedTokens.push(r), J(r, n, t)) : t._strict && !n && p(t).unusedTokens.push(r);
                            p(t).charsLeftOver = s - l, 0 < a.length && p(t).unusedInput.push(a), t._a[fr] <= 12 && !0 === p(t).bigHour && 0 < t._a[fr] && (p(t).bigHour = undefined), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[fr] = ye(t._locale, t._a[fr], t._meridiem), se(t), re(t)
                        } else ge(t);
                    else ue(t)
                }

                function ye(t, e, n) {
                    var i;
                    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0)), e)
                }

                function be(t) {
                    var e, n, i, r, o;
                    if (0 === t._f.length) return p(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (r = 0; r < t._f.length; r++) o = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], ve(e), g(e) && (o += p(e).charsLeftOver, o += 10 * p(e).unusedTokens.length, p(e).score = o, (null == i || o < i) && (i = o, n = e));
                    h(t, n || e)
                }

                function xe(t) {
                    if (!t._d) {
                        var e = F(t._i);
                        t._a = n([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                            return t && parseInt(t, 10)
                        }), se(t)
                    }
                }

                function we(t) {
                    var e = new v(re(_e(t)));
                    return e._nextDay && (e.add(1, "d"), e._nextDay = undefined), e
                }

                function _e(t) {
                    var e = t._i,
                        n = t._f;
                    return t._locale = t._locale || ne(t._l), null === e || n === undefined && "" === e ? i({
                        nullInput: !0
                    }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new v(re(e)) : (r(e) ? t._d = e : a(n) ? be(t) : n ? ve(t) : Se(t), g(t) || (t._d = null), t))
                }

                function Se(t) {
                    var e = t._i;
                    o(e) ? t._d = new Date(u.now()) : r(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? me(t) : a(e) ? (t._a = n(e.slice(0), function(t) {
                        return parseInt(t, 10)
                    }), se(t)) : s(e) ? xe(t) : c(e) ? t._d = new Date(e) : u.createFromInputFallback(t)
                }

                function ke(t, e, n, i, r) {
                    var o = {};
                    return !0 !== n && !1 !== n || (i = n, n = undefined), (s(t) && l(t) || a(t) && 0 === t.length) && (t = undefined), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = n, o._i = t, o._f = e, o._strict = i, we(o)
                }

                function Ce(t, e, n, i) {
                    return ke(t, e, n, i, !1)
                }

                function Me(t, e) {
                    var n, i;
                    if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Ce();
                    for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                    return n
                }

                function Te() {
                    return Me("isBefore", [].slice.call(arguments, 0))
                }

                function De() {
                    return Me("isAfter", [].slice.call(arguments, 0))
                }

                function Ae(t) {
                    for (var e in t)
                        if (-1 === br.call(Qr, e) || null != t[e] && isNaN(t[e])) return !1;
                    for (var n = !1, i = 0; i < Qr.length; ++i)
                        if (t[Qr[i]]) {
                            if (n) return !1;
                            parseFloat(t[Qr[i]]) !== x(t[Qr[i]]) && (n = !0)
                        }
                    return !0
                }

                function Ee() {
                    return this._isValid
                }

                function Pe() {
                    return Qe(NaN)
                }

                function Oe(t) {
                    var e = F(t),
                        n = e.year || 0,
                        i = e.quarter || 0,
                        r = e.month || 0,
                        o = e.week || 0,
                        a = e.day || 0,
                        s = e.hour || 0,
                        l = e.minute || 0,
                        u = e.second || 0,
                        c = e.millisecond || 0;
                    this._isValid = Ae(e), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
                }

                function Ie(t) {
                    return t instanceof Oe
                }

                function Le(t) {
                    return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
                }

                function ze(t, n) {
                    W(t, 0, 0, function() {
                        var t = this.utcOffset(),
                            e = "+";
                        return t < 0 && (t = -t, e = "-"), e + $(~~(t / 60), 2) + n + $(~~t % 60, 2)
                    })
                }

                function Ne(t, e) {
                    var n = (e || "").match(t);
                    if (null === n) return null;
                    var i = ((n[n.length - 1] || []) + "").match(Zr) || ["-", 0, 0],
                        r = 60 * i[1] + x(i[2]);
                    return 0 === r ? 0 : "+" === i[0] ? r : -r
                }

                function Fe(t, e) {
                    var n, i;
                    return e._isUTC ? (n = e.clone(), i = (y(t) || r(t) ? t.valueOf() : Ce(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), u.updateOffset(n, !1), n) : Ce(t).local()
                }

                function Re(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function je(t, e, n) {
                    var i, r = this._offset || 0;
                    if (!this.isValid()) return null != t ? this : NaN;
                    if (null != t) {
                        if ("string" == typeof t) {
                            if (null === (t = Ne(or, t))) return this
                        } else Math.abs(t) < 16 && !n && (t *= 60);
                        return !this._isUTC && e && (i = Re(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? en(this, Qe(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this
                    }
                    return this._isUTC ? r : Re(this)
                }

                function $e(t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }

                function We(t) {
                    return this.utcOffset(0, t)
                }

                function He(t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Re(this), "m")), this
                }

                function Be() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var t = Ne(rr, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function qe(t) {
                    return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
                }

                function Ye() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }

                function Ue() {
                    if (!o(this._isDSTShifted)) return this._isDSTShifted;
                    var t = {};
                    if (m(t, this), (t = _e(t))._a) {
                        var e = t._isUTC ? f(t._a) : Ce(t._a);
                        this._isDSTShifted = this.isValid() && 0 < w(t._a, e.toArray())
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                }

                function Ve() {
                    return !!this.isValid() && !this._isUTC
                }

                function Ge() {
                    return !!this.isValid() && this._isUTC
                }

                function Xe() {
                    return !!this.isValid() && (this._isUTC && 0 === this._offset)
                }

                function Qe(t, e) {
                    var n, i, r, o = t,
                        a = null;
                    return Ie(t) ? o = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : c(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = Jr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                        y: 0,
                        d: x(a[hr]) * n,
                        h: x(a[fr]) * n,
                        m: x(a[pr]) * n,
                        s: x(a[gr]) * n,
                        ms: x(Le(1e3 * a[mr])) * n
                    }) : (a = Kr.exec(t)) ? (n = "-" === a[1] ? -1 : (a[1], 1), o = {
                        y: Ze(a[2], n),
                        M: Ze(a[3], n),
                        w: Ze(a[4], n),
                        d: Ze(a[5], n),
                        h: Ze(a[6], n),
                        m: Ze(a[7], n),
                        s: Ze(a[8], n)
                    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Ke(Ce(o.from), Ce(o.to)), (o = {}).ms = r.milliseconds, o.M = r.months), i = new Oe(o), Ie(t) && d(t, "_locale") && (i._locale = t._locale), i
                }

                function Ze(t, e) {
                    var n = t && parseFloat(t.replace(",", "."));
                    return (isNaN(n) ? 0 : n) * e
                }

                function Je(t, e) {
                    var n = {
                        milliseconds: 0,
                        months: 0
                    };
                    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
                }

                function Ke(t, e) {
                    var n;
                    return t.isValid() && e.isValid() ? (e = Fe(e, t), t.isBefore(e) ? n = Je(t, e) : ((n = Je(e, t)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                        milliseconds: 0,
                        months: 0
                    }
                }

                function tn(i, r) {
                    return function(t, e) {
                        var n;
                        return null === e || isNaN(+e) || (k(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = t, t = e, e = n), en(this, Qe(t = "string" == typeof t ? +t : t, e), i), this
                    }
                }

                function en(t, e, n, i) {
                    var r = e._milliseconds,
                        o = Le(e._days),
                        a = Le(e._months);
                    t.isValid() && (i = null == i || i, a && ft(t, it(t, "Month") + a * n), o && rt(t, "Date", it(t, "Date") + o * n), r && t._d.setTime(t._d.valueOf() + r * n), i && u.updateOffset(t, o || a))
                }

                function nn(t, e) {
                    var n = t.diff(e, "days", !0);
                    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                }

                function rn(t, e) {
                    var n = t || Ce(),
                        i = Fe(n, this).startOf("day"),
                        r = u.calendarFormat(this, i) || "sameElse",
                        o = e && (C(e[r]) ? e[r].call(this, n) : e[r]);
                    return this.format(o || this.localeData().calendar(r, this, Ce(n)))
                }

                function on() {
                    return new v(this)
                }

                function an(t, e) {
                    var n = y(t) ? t : Ce(t);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(o(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
                }

                function sn(t, e) {
                    var n = y(t) ? t : Ce(t);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = N(o(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
                }

                function ln(t, e, n, i) {
                    return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
                }

                function un(t, e) {
                    var n, i = y(t) ? t : Ce(t);
                    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = N(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
                }

                function cn(t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }

                function dn(t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }

                function hn(t, e, n) {
                    var i, r, o;
                    if (!this.isValid()) return NaN;
                    if (!(i = Fe(t, this)).isValid()) return NaN;
                    switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = N(e)) {
                        case "year":
                            o = fn(this, i) / 12;
                            break;
                        case "month":
                            o = fn(this, i);
                            break;
                        case "quarter":
                            o = fn(this, i) / 3;
                            break;
                        case "second":
                            o = (this - i) / 1e3;
                            break;
                        case "minute":
                            o = (this - i) / 6e4;
                            break;
                        case "hour":
                            o = (this - i) / 36e5;
                            break;
                        case "day":
                            o = (this - i - r) / 864e5;
                            break;
                        case "week":
                            o = (this - i - r) / 6048e5;
                            break;
                        default:
                            o = this - i
                    }
                    return n ? o : b(o)
                }

                function fn(t, e) {
                    var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        i = t.clone().add(n, "months");
                    return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0
                }

                function pn() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }

                function gn(t) {
                    if (!this.isValid()) return null;
                    var e = !0 !== t,
                        n = e ? this.clone().utc() : this;
                    return n.year() < 0 || 9999 < n.year() ? q(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", q(n, "Z")) : q(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }

                function mn() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var t = "moment",
                        e = "";
                    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                    var n = "[" + t + '("]',
                        i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        r = "-MM-DD[T]HH:mm:ss.SSS",
                        o = e + '[")]';
                    return this.format(n + i + r + o)
                }

                function vn(t) {
                    t || (t = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
                    var e = q(this, t);
                    return this.localeData().postformat(e)
                }

                function yn(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || Ce(t).isValid()) ? Qe({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function bn(t) {
                    return this.from(Ce(), t)
                }

                function xn(t, e) {
                    return this.isValid() && (y(t) && t.isValid() || Ce(t).isValid()) ? Qe({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }

                function wn(t) {
                    return this.to(Ce(), t)
                }

                function _n(t) {
                    var e;
                    return t === undefined ? this._locale._abbr : (null != (e = ne(t)) && (this._locale = e), this)
                }

                function Sn() {
                    return this._locale
                }

                function kn(t) {
                    switch (t = N(t)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }

                function Cn(t) {
                    return (t = N(t)) === undefined || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }

                function Mn() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }

                function Tn() {
                    return Math.floor(this.valueOf() / 1e3)
                }

                function Dn() {
                    return new Date(this.valueOf())
                }

                function An() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }

                function En() {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }

                function Pn() {
                    return this.isValid() ? this.toISOString() : null
                }

                function On() {
                    return g(this)
                }

                function In() {
                    return h({}, p(this))
                }

                function Ln() {
                    return p(this).overflow
                }

                function zn() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }

                function Nn(t, e) {
                    W(0, [t, t.length], 0, e)
                }

                function Fn(t) {
                    return Wn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }

                function Rn(t) {
                    return Wn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }

                function jn() {
                    return kt(this.year(), 1, 4)
                }

                function $n() {
                    var t = this.localeData()._week;
                    return kt(this.year(), t.dow, t.doy)
                }

                function Wn(t, e, n, i, r) {
                    var o;
                    return null == t ? St(this, i, r).year : ((o = kt(t, i, r)) < e && (e = o), Hn.call(this, t, e, n, i, r))
                }

                function Hn(t, e, n, i, r) {
                    var o = _t(t, e, n, i, r),
                        a = xt(o.year, 0, o.dayOfYear);
                    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
                }

                function Bn(t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }

                function qn(t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }

                function Yn(t, e) {
                    e[mr] = x(1e3 * ("0." + t))
                }

                function Un() {
                    return this._isUTC ? "UTC" : ""
                }

                function Vn() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }

                function Gn(t) {
                    return Ce(1e3 * t)
                }

                function Xn() {
                    return Ce.apply(null, arguments).parseZone()
                }

                function Qn(t) {
                    return t
                }

                function Zn(t, e, n, i) {
                    var r = ne(),
                        o = f().set(i, e);
                    return r[n](o, t)
                }

                function Jn(t, e, n) {
                    if (c(t) && (e = t, t = undefined), t = t || "", null != e) return Zn(t, e, n, "month");
                    var i, r = [];
                    for (i = 0; i < 12; i++) r[i] = Zn(t, i, n, "month");
                    return r
                }

                function Kn(t, e, n, i) {
                    "boolean" == typeof t ? c(e) && (n = e, e = undefined) : (e = t, t = !1, c(n = e) && (n = e, e = undefined)), e = e || "";
                    var r, o = ne(),
                        a = t ? o._week.dow : 0;
                    if (null != n) return Zn(e, (n + a) % 7, i, "day");
                    var s = [];
                    for (r = 0; r < 7; r++) s[r] = Zn(e, (r + a) % 7, i, "day");
                    return s
                }

                function ti(t, e) {
                    return Jn(t, e, "months")
                }

                function ei(t, e) {
                    return Jn(t, e, "monthsShort")
                }

                function ni(t, e, n) {
                    return Kn(t, e, n, "weekdays")
                }

                function ii(t, e, n) {
                    return Kn(t, e, n, "weekdaysShort")
                }

                function ri(t, e, n) {
                    return Kn(t, e, n, "weekdaysMin")
                }

                function oi() {
                    var t = this._data;
                    return this._milliseconds = co(this._milliseconds), this._days = co(this._days), this._months = co(this._months), t.milliseconds = co(t.milliseconds), t.seconds = co(t.seconds), t.minutes = co(t.minutes), t.hours = co(t.hours), t.months = co(t.months), t.years = co(t.years), this
                }

                function ai(t, e, n, i) {
                    var r = Qe(e, n);
                    return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
                }

                function si(t, e) {
                    return ai(this, t, e, 1)
                }

                function li(t, e) {
                    return ai(this, t, e, -1)
                }

                function ui(t) {
                    return t < 0 ? Math.floor(t) : Math.ceil(t)
                }

                function ci() {
                    var t, e, n, i, r, o = this._milliseconds,
                        a = this._days,
                        s = this._months,
                        l = this._data;
                    return 0 <= o && 0 <= a && 0 <= s || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * ui(hi(s) + a), s = a = 0), l.milliseconds = o % 1e3, t = b(o / 1e3), l.seconds = t % 60, e = b(t / 60), l.minutes = e % 60, n = b(e / 60), l.hours = n % 24, s += r = b(di(a += b(n / 24))), a -= ui(hi(r)), i = b(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this
                }

                function di(t) {
                    return 4800 * t / 146097
                }

                function hi(t) {
                    return 146097 * t / 4800
                }

                function fi(t) {
                    if (!this.isValid()) return NaN;
                    var e, n, i = this._milliseconds;
                    if ("month" === (t = N(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + di(e), "month" === t ? n : n / 12;
                    switch (e = this._days + Math.round(hi(this._months)), t) {
                        case "week":
                            return e / 7 + i / 6048e5;
                        case "day":
                            return e + i / 864e5;
                        case "hour":
                            return 24 * e + i / 36e5;
                        case "minute":
                            return 1440 * e + i / 6e4;
                        case "second":
                            return 86400 * e + i / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + i;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function pi() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) : NaN
                }

                function gi(t) {
                    return function() {
                        return this.as(t)
                    }
                }

                function mi() {
                    return Qe(this)
                }

                function vi(t) {
                    return t = N(t), this.isValid() ? this[t + "s"]() : NaN
                }

                function yi(t) {
                    return function() {
                        return this.isValid() ? this._data[t] : NaN
                    }
                }

                function bi() {
                    return b(this.days() / 7)
                }

                function xi(t, e, n, i, r) {
                    return r.relativeTime(e || 1, !!n, t, i)
                }

                function wi(t, e, n) {
                    var i = Qe(t).abs(),
                        r = To(i.as("s")),
                        o = To(i.as("m")),
                        a = To(i.as("h")),
                        s = To(i.as("d")),
                        l = To(i.as("M")),
                        u = To(i.as("y")),
                        c = r <= Do.ss && ["s", r] || r < Do.s && ["ss", r] || o <= 1 && ["m"] || o < Do.m && ["mm", o] || a <= 1 && ["h"] || a < Do.h && ["hh", a] || s <= 1 && ["d"] || s < Do.d && ["dd", s] || l <= 1 && ["M"] || l < Do.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
                    return c[2] = e, c[3] = 0 < +t, c[4] = n, xi.apply(null, c)
                }

                function _i(t) {
                    return t === undefined ? To : "function" == typeof t && (To = t, !0)
                }

                function Si(t, e) {
                    return Do[t] !== undefined && (e === undefined ? Do[t] : (Do[t] = e, "s" === t && (Do.ss = e - 1), !0))
                }

                function ki(t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e = this.localeData(),
                        n = wi(this, !t, e);
                    return t && (n = e.pastFuture(+this, n)), e.postformat(n)
                }

                function Ci(t) {
                    return (0 < t) - (t < 0) || +t
                }

                function Mi() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t, e, n = Ao(this._milliseconds) / 1e3,
                        i = Ao(this._days),
                        r = Ao(this._months);
                    e = b((t = b(n / 60)) / 60), n %= 60, t %= 60;
                    var o = b(r / 12),
                        a = r %= 12,
                        s = i,
                        l = e,
                        u = t,
                        c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                        d = this.asSeconds();
                    if (!d) return "P0D";
                    var h = d < 0 ? "-" : "",
                        f = Ci(this._months) !== Ci(d) ? "-" : "",
                        p = Ci(this._days) !== Ci(d) ? "-" : "",
                        g = Ci(this._milliseconds) !== Ci(d) ? "-" : "";
                    return h + "P" + (o ? f + o + "Y" : "") + (a ? f + a + "M" : "") + (s ? p + s + "D" : "") + (l || u || c ? "T" : "") + (l ? g + l + "H" : "") + (u ? g + u + "M" : "") + (c ? g + c + "S" : "")
                }
                var Ti, Di;
                Di = Array.prototype.some ? Array.prototype.some : function(t) {
                    for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                        if (i in e && t.call(this, e[i], i, e)) return !0;
                    return !1
                };
                var Ai, Ei = u.momentProperties = [],
                    Pi = !1,
                    Oi = {};
                u.suppressDeprecationWarnings = !1, u.deprecationHandler = null, Ai = Object.keys ? Object.keys : function(t) {
                    var e, n = [];
                    for (e in t) d(t, e) && n.push(e);
                    return n
                };
                var Ii = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    Li = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    zi = "Invalid date",
                    Ni = "%d",
                    Fi = /\d{1,2}/,
                    Ri = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ji = {},
                    $i = {},
                    Wi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    Hi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Bi = {},
                    qi = {},
                    Yi = /\d/,
                    Ui = /\d\d/,
                    Vi = /\d{3}/,
                    Gi = /\d{4}/,
                    Xi = /[+-]?\d{6}/,
                    Qi = /\d\d?/,
                    Zi = /\d\d\d\d?/,
                    Ji = /\d\d\d\d\d\d?/,
                    Ki = /\d{1,3}/,
                    tr = /\d{1,4}/,
                    er = /[+-]?\d{1,6}/,
                    nr = /\d+/,
                    ir = /[+-]?\d+/,
                    rr = /Z|[+-]\d\d:?\d\d/gi,
                    or = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    ar = /[+-]?\d+(\.\d{1,3})?/,
                    sr = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    lr = {},
                    ur = {},
                    cr = 0,
                    dr = 1,
                    hr = 2,
                    fr = 3,
                    pr = 4,
                    gr = 5,
                    mr = 6,
                    vr = 7,
                    yr = 8;
                W("Y", 0, 0, function() {
                    var t = this.year();
                    return t <= 9999 ? "" + t : "+" + t
                }), W(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), R("year", 1), U("Y", ir), U("YY", Qi, Ui), U("YYYY", tr, Gi), U("YYYYY", er, Xi), U("YYYYYY", er, Xi), Q(["YYYYY", "YYYYYY"], cr), Q("YYYY", function(t, e) {
                    e[cr] = 2 === t.length ? u.parseTwoDigitYear(t) : x(t)
                }), Q("YY", function(t, e) {
                    e[cr] = u.parseTwoDigitYear(t)
                }), Q("Y", function(t, e) {
                    e[cr] = parseInt(t, 10)
                }), u.parseTwoDigitYear = function(t) {
                    return x(t) + (68 < x(t) ? 1900 : 2e3)
                };
                var br, xr = nt("FullYear", !0);
                br = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1
                }, W("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), W("MMM", 0, 0, function(t) {
                    return this.localeData().monthsShort(this, t)
                }), W("MMMM", 0, 0, function(t) {
                    return this.localeData().months(this, t)
                }), z("month", "M"), R("month", 8), U("M", Qi), U("MM", Qi, Ui), U("MMM", function(t, e) {
                    return e.monthsShortRegex(t)
                }), U("MMMM", function(t, e) {
                    return e.monthsRegex(t)
                }), Q(["M", "MM"], function(t, e) {
                    e[dr] = x(t) - 1
                }), Q(["MMM", "MMMM"], function(t, e, n, i) {
                    var r = n._locale.monthsParse(t, i, n._strict);
                    null != r ? e[dr] = r : p(n).invalidMonth = t
                });
                var wr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    _r = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Sr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    kr = sr,
                    Cr = sr;
                W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), R("week", 5), R("isoWeek", 5), U("w", Qi), U("ww", Qi, Ui), U("W", Qi), U("WW", Qi, Ui), Z(["w", "ww", "W", "WW"], function(t, e, n, i) {
                    e[i.substr(0, 1)] = x(t)
                });
                var Mr = {
                    dow: 0,
                    doy: 6
                };
                W("d", 0, "do", "day"), W("dd", 0, 0, function(t) {
                    return this.localeData().weekdaysMin(this, t)
                }), W("ddd", 0, 0, function(t) {
                    return this.localeData().weekdaysShort(this, t)
                }), W("dddd", 0, 0, function(t) {
                    return this.localeData().weekdays(this, t)
                }), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), U("d", Qi), U("e", Qi), U("E", Qi), U("dd", function(t, e) {
                    return e.weekdaysMinRegex(t)
                }), U("ddd", function(t, e) {
                    return e.weekdaysShortRegex(t)
                }), U("dddd", function(t, e) {
                    return e.weekdaysRegex(t)
                }), Z(["dd", "ddd", "dddd"], function(t, e, n, i) {
                    var r = n._locale.weekdaysParse(t, i, n._strict);
                    null != r ? e.d = r : p(n).invalidWeekday = t
                }), Z(["d", "e", "E"], function(t, e, n, i) {
                    e[i] = x(t)
                });
                var Tr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Dr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Ar = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Er = sr,
                    Pr = sr,
                    Or = sr;
                W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, qt), W("k", ["kk", 2], 0, Yt), W("hmm", 0, 0, function() {
                    return "" + qt.apply(this) + $(this.minutes(), 2)
                }), W("hmmss", 0, 0, function() {
                    return "" + qt.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2)
                }), W("Hmm", 0, 0, function() {
                    return "" + this.hours() + $(this.minutes(), 2)
                }), W("Hmmss", 0, 0, function() {
                    return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2)
                }), Ut("a", !0), Ut("A", !1), z("hour", "h"), R("hour", 13), U("a", Vt), U("A", Vt), U("H", Qi), U("h", Qi), U("k", Qi), U("HH", Qi, Ui), U("hh", Qi, Ui), U("kk", Qi, Ui), U("hmm", Zi), U("hmmss", Ji), U("Hmm", Zi), U("Hmmss", Ji), Q(["H", "HH"], fr), Q(["k", "kk"], function(t, e) {
                    var n = x(t);
                    e[fr] = 24 === n ? 0 : n
                }), Q(["a", "A"], function(t, e, n) {
                    n._isPm = n._locale.isPM(t), n._meridiem = t
                }), Q(["h", "hh"], function(t, e, n) {
                    e[fr] = x(t), p(n).bigHour = !0
                }), Q("hmm", function(t, e, n) {
                    var i = t.length - 2;
                    e[fr] = x(t.substr(0, i)), e[pr] = x(t.substr(i)), p(n).bigHour = !0
                }), Q("hmmss", function(t, e, n) {
                    var i = t.length - 4,
                        r = t.length - 2;
                    e[fr] = x(t.substr(0, i)), e[pr] = x(t.substr(i, 2)), e[gr] = x(t.substr(r)), p(n).bigHour = !0
                }), Q("Hmm", function(t, e) {
                    var n = t.length - 2;
                    e[fr] = x(t.substr(0, n)), e[pr] = x(t.substr(n))
                }), Q("Hmmss", function(t, e) {
                    var n = t.length - 4,
                        i = t.length - 2;
                    e[fr] = x(t.substr(0, n)), e[pr] = x(t.substr(n, 2)), e[gr] = x(t.substr(i))
                });
                var Ir, Lr = /[ap]\.?m?\.?/i,
                    zr = nt("Hours", !0),
                    Nr = {
                        calendar: Ii,
                        longDateFormat: Li,
                        invalidDate: zi,
                        ordinal: Ni,
                        dayOfMonthOrdinalParse: Fi,
                        relativeTime: Ri,
                        months: _r,
                        monthsShort: Sr,
                        week: Mr,
                        weekdays: Tr,
                        weekdaysMin: Ar,
                        weekdaysShort: Dr,
                        meridiemParse: Lr
                    },
                    Fr = {},
                    Rr = {},
                    jr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    $r = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    Wr = /Z|[+-]\d\d(?::?\d\d)?/,
                    Hr = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    Br = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    qr = /^\/?Date\((\-?\d+)/i,
                    Yr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    Ur = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };
                u.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), u.ISO_8601 = function() {}, u.RFC_2822 = function() {};
                var Vr = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var t = Ce.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t < this ? this : t : i()
                    }),
                    Gr = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var t = Ce.apply(null, arguments);
                        return this.isValid() && t.isValid() ? this < t ? this : t : i()
                    }),
                    Xr = function() {
                        return Date.now ? Date.now() : +new Date
                    },
                    Qr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                ze("Z", ":"), ze("ZZ", ""), U("Z", or), U("ZZ", or), Q(["Z", "ZZ"], function(t, e, n) {
                    n._useUTC = !0, n._tzm = Ne(or, t)
                });
                var Zr = /([\+\-]|\d\d)/gi;
                u.updateOffset = function() {};
                var Jr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Kr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
                Qe.fn = Oe.prototype, Qe.invalid = Pe;
                var to = tn(1, "add"),
                    eo = tn(-1, "subtract");
                u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var no = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return t === undefined ? this.localeData() : this.locale(t)
                });
                W(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), W(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), Nn("gggg", "weekYear"), Nn("ggggg", "weekYear"), Nn("GGGG", "isoWeekYear"), Nn("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), U("G", ir), U("g", ir), U("GG", Qi, Ui), U("gg", Qi, Ui), U("GGGG", tr, Gi), U("gggg", tr, Gi), U("GGGGG", er, Xi), U("ggggg", er, Xi), Z(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                    e[i.substr(0, 2)] = x(t)
                }), Z(["gg", "GG"], function(t, e, n, i) {
                    e[i] = u.parseTwoDigitYear(t)
                }), W("Q", 0, "Qo", "quarter"), z("quarter", "Q"), R("quarter", 7), U("Q", Yi), Q("Q", function(t, e) {
                    e[dr] = 3 * (x(t) - 1)
                }), W("D", ["DD", 2], "Do", "date"), z("date", "D"), R("date", 9), U("D", Qi), U("DD", Qi, Ui), U("Do", function(t, e) {
                    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
                }), Q(["D", "DD"], hr), Q("Do", function(t, e) {
                    e[hr] = x(t.match(Qi)[0])
                });
                var io = nt("Date", !0);
                W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), R("dayOfYear", 4), U("DDD", Ki), U("DDDD", Vi), Q(["DDD", "DDDD"], function(t, e, n) {
                    n._dayOfYear = x(t)
                }), W("m", ["mm", 2], 0, "minute"), z("minute", "m"), R("minute", 14), U("m", Qi), U("mm", Qi, Ui), Q(["m", "mm"], pr);
                var ro = nt("Minutes", !1);
                W("s", ["ss", 2], 0, "second"), z("second", "s"), R("second", 15), U("s", Qi), U("ss", Qi, Ui), Q(["s", "ss"], gr);
                var oo, ao = nt("Seconds", !1);
                for (W("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }), W(0, ["SS", 2], 0, function() {
                        return ~~(this.millisecond() / 10)
                    }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function() {
                        return 10 * this.millisecond()
                    }), W(0, ["SSSSS", 5], 0, function() {
                        return 100 * this.millisecond()
                    }), W(0, ["SSSSSS", 6], 0, function() {
                        return 1e3 * this.millisecond()
                    }), W(0, ["SSSSSSS", 7], 0, function() {
                        return 1e4 * this.millisecond()
                    }), W(0, ["SSSSSSSS", 8], 0, function() {
                        return 1e5 * this.millisecond()
                    }), W(0, ["SSSSSSSSS", 9], 0, function() {
                        return 1e6 * this.millisecond()
                    }), z("millisecond", "ms"), R("millisecond", 16), U("S", Ki, Yi), U("SS", Ki, Ui), U("SSS", Ki, Vi), oo = "SSSS"; oo.length <= 9; oo += "S") U(oo, nr);
                for (oo = "S"; oo.length <= 9; oo += "S") Q(oo, Yn);
                var so = nt("Milliseconds", !1);
                W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
                var lo = v.prototype;
                lo.add = to, lo.calendar = rn, lo.clone = on, lo.diff = hn, lo.endOf = Cn, lo.format = vn, lo.from = yn, lo.fromNow = bn, lo.to = xn, lo.toNow = wn, lo.get = ot, lo.invalidAt = Ln, lo.isAfter = an, lo.isBefore = sn, lo.isBetween = ln, lo.isSame = un, lo.isSameOrAfter = cn, lo.isSameOrBefore = dn, lo.isValid = On, lo.lang = no, lo.locale = _n, lo.localeData = Sn, lo.max = Gr, lo.min = Vr, lo.parsingFlags = In, lo.set = at, lo.startOf = kn, lo.subtract = eo, lo.toArray = An, lo.toObject = En, lo.toDate = Dn, lo.toISOString = gn, lo.inspect = mn, lo.toJSON = Pn, lo.toString = pn, lo.unix = Tn, lo.valueOf = Mn, lo.creationData = zn, lo.year = xr, lo.isLeapYear = et, lo.weekYear = Fn, lo.isoWeekYear = Rn, lo.quarter = lo.quarters = Bn, lo.month = pt, lo.daysInMonth = gt, lo.week = lo.weeks = Dt, lo.isoWeek = lo.isoWeeks = At, lo.weeksInYear = $n, lo.isoWeeksInYear = jn, lo.date = io, lo.day = lo.days = Ft, lo.weekday = Rt, lo.isoWeekday = jt, lo.dayOfYear = qn, lo.hour = lo.hours = zr, lo.minute = lo.minutes = ro, lo.second = lo.seconds = ao, lo.millisecond = lo.milliseconds = so, lo.utcOffset = je, lo.utc = We, lo.local = He, lo.parseZone = Be, lo.hasAlignedHourOffset = qe, lo.isDST = Ye, lo.isLocal = Ve, lo.isUtcOffset = Ge, lo.isUtc = Xe, lo.isUTC = Xe, lo.zoneAbbr = Un, lo.zoneName = Vn, lo.dates = S("dates accessor is deprecated. Use date instead.", io), lo.months = S("months accessor is deprecated. Use month instead", pt), lo.years = S("years accessor is deprecated. Use year instead", xr), lo.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", $e), lo.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ue);
                var uo = D.prototype;
                uo.calendar = A, uo.longDateFormat = E, uo.invalidDate = P, uo.ordinal = O, uo.preparse = Qn, uo.postformat = Qn, uo.relativeTime = I, uo.pastFuture = L, uo.set = M, uo.months = ut, uo.monthsShort = ct, uo.monthsParse = ht, uo.monthsRegex = vt, uo.monthsShortRegex = mt, uo.week = Ct, uo.firstDayOfYear = Tt, uo.firstDayOfWeek = Mt, uo.weekdays = Ot, uo.weekdaysMin = Lt, uo.weekdaysShort = It, uo.weekdaysParse = Nt, uo.weekdaysRegex = $t, uo.weekdaysShortRegex = Wt, uo.weekdaysMinRegex = Ht, uo.isPM = Gt, uo.meridiem = Xt, Kt("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(t) {
                        var e = t % 10;
                        return t + (1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                    }
                }), u.lang = S("moment.lang is deprecated. Use moment.locale instead.", Kt), u.langData = S("moment.langData is deprecated. Use moment.localeData instead.", ne);
                var co = Math.abs,
                    ho = gi("ms"),
                    fo = gi("s"),
                    po = gi("m"),
                    go = gi("h"),
                    mo = gi("d"),
                    vo = gi("w"),
                    yo = gi("M"),
                    bo = gi("y"),
                    xo = yi("milliseconds"),
                    wo = yi("seconds"),
                    _o = yi("minutes"),
                    So = yi("hours"),
                    ko = yi("days"),
                    Co = yi("months"),
                    Mo = yi("years"),
                    To = Math.round,
                    Do = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    Ao = Math.abs,
                    Eo = Oe.prototype;
                return Eo.isValid = Ee, Eo.abs = oi, Eo.add = si, Eo.subtract = li, Eo.as = fi, Eo.asMilliseconds = ho, Eo.asSeconds = fo, Eo.asMinutes = po, Eo.asHours = go, Eo.asDays = mo, Eo.asWeeks = vo, Eo.asMonths = yo, Eo.asYears = bo, Eo.valueOf = pi, Eo._bubble = ci, Eo.clone = mi, Eo.get = vi, Eo.milliseconds = xo, Eo.seconds = wo, Eo.minutes = _o, Eo.hours = So, Eo.days = ko, Eo.weeks = bi, Eo.months = Co, Eo.years = Mo, Eo.humanize = ki, Eo.toISOString = Mi, Eo.toString = Mi, Eo.toJSON = Mi, Eo.locale = _n, Eo.localeData = Sn, Eo.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Mi), Eo.lang = no, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), U("x", ir), U("X", ar), Q("X", function(t, e, n) {
                    n._d = new Date(1e3 * parseFloat(t, 10))
                }), Q("x", function(t, e, n) {
                    n._d = new Date(x(t))
                }), u.version = "2.20.1", t(Ce), u.fn = lo, u.min = Te, u.max = De, u.now = Xr, u.utc = f, u.unix = Gn, u.months = ti, u.isDate = r, u.locale = Kt, u.invalid = i, u.duration = Qe, u.isMoment = y, u.weekdays = ni, u.parseZone = Xn, u.localeData = ne, u.isDuration = Ie, u.monthsShort = ei, u.weekdaysMin = ri, u.defineLocale = te, u.updateLocale = ee, u.locales = ie, u.weekdaysShort = ii, u.normalizeUnits = N, u.relativeTimeRounding = _i, u.relativeTimeThreshold = Si, u.calendarFormat = nn, u.prototype = lo, u.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "YYYY-[W]WW",
                    MONTH: "YYYY-MM"
                }, u
            }, "object" == typeof t && void 0 !== Oo ? Oo.exports = n() : "function" == typeof i && i.amd ? i(n) : e.moment = n()
        }, {}],
        7: [function(t, e) {
            var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var i = t(49);
            for (var r in i) i.hasOwnProperty(r) && n.plugins.register(i[r]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = i.legend._element, n.Title = i.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }],
        8: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Bar = function(t, e) {
                    return e.type = "bar", new n(t, e)
                }
            }
        }, {}],
        9: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Bubble = function(t, e) {
                    return e.type = "bubble", new n(t, e)
                }
            }
        }, {}],
        10: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Doughnut = function(t, e) {
                    return e.type = "doughnut", new n(t, e)
                }
            }
        }, {}],
        11: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Line = function(t, e) {
                    return e.type = "line", new n(t, e)
                }
            }
        }, {}],
        12: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.PolarArea = function(t, e) {
                    return e.type = "polarArea", new n(t, e)
                }
            }
        }, {}],
        13: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Radar = function(t, e) {
                    return e.type = "radar", new n(t, e)
                }
            }
        }, {}],
        14: [function(t, e) {
            "use strict";
            e.exports = function(n) {
                n.Scatter = function(t, e) {
                    return e.type = "scatter", new n(t, e)
                }
            }
        }, {}],
        15: [function(t, e) {
            "use strict";

            function c(t, e) {
                var n, i, r, o, a = t.isHorizontal() ? t.width : t.height,
                    s = t.getTicks();
                for (r = 1, o = e.length; r < o; ++r) a = Math.min(a, e[r] - e[r - 1]);
                for (r = 0, o = s.length; r < o; ++r) i = t.getPixelForTick(r), a = 0 < r ? Math.min(a, i - n) : a, n = i;
                return a
            }

            function u(t, e, n) {
                var i, r, o = n.barThickness,
                    a = e.stackCount,
                    s = e.pixels[t];
                return h.isNullOrUndef(o) ? (i = e.min * n.categoryPercentage, r = n.barPercentage) : (i = o * a, r = 1), {
                    chunk: i / a,
                    ratio: r,
                    start: s - i / 2
                }
            }

            function d(t, e, n) {
                var i, r = e.pixels,
                    o = r[t],
                    a = 0 < t ? r[t - 1] : null,
                    s = t < r.length - 1 ? r[t + 1] : null,
                    l = n.categoryPercentage;
                return null === a && (a = o - (null === s ? e.end - o : s - o)), null === s && (s = o + o - a), i = o - (o - a) / 2 * l, {
                    chunk: (s - a) / 2 * l / e.stackCount,
                    ratio: n.barPercentage,
                    start: i
                }
            }
            var n = t(25),
                i = t(40),
                h = t(45);
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var n = "";
                            return 0 < t.length && (t[0].yLabel ? n = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                        },
                        label: function(t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function(n) {
                n.controllers.bar = n.DatasetController.extend({
                    dataElementType: i.Rectangle,
                    initialize: function() {
                        var t, e = this;
                        n.DatasetController.prototype.initialize.apply(e, arguments), (t = e.getMeta()).stack = e.getDataset().stack, t.bar = !0
                    },
                    update: function(t) {
                        var e, n, i = this,
                            r = i.getMeta().data;
                        for (i._ruler = i.getRuler(), e = 0, n = r.length; e < n; ++e) i.updateElement(r[e], e, t)
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.chart,
                            o = i.getMeta(),
                            a = i.getDataset(),
                            s = t.custom || {},
                            l = r.options.elements.rectangle;
                        t._xScale = i.getScaleForId(o.xAxisID), t._yScale = i.getScaleForId(o.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                            datasetLabel: a.label,
                            label: r.data.labels[e],
                            borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                            backgroundColor: s.backgroundColor ? s.backgroundColor : h.valueAtIndexOrDefault(a.backgroundColor, e, l.backgroundColor),
                            borderColor: s.borderColor ? s.borderColor : h.valueAtIndexOrDefault(a.borderColor, e, l.borderColor),
                            borderWidth: s.borderWidth ? s.borderWidth : h.valueAtIndexOrDefault(a.borderWidth, e, l.borderWidth)
                        }, i.updateElementGeometry(t, e, n), t.pivot()
                    },
                    updateElementGeometry: function(t, e, n) {
                        var i = this,
                            r = t._model,
                            o = i.getValueScale(),
                            a = o.getBasePixel(),
                            s = o.isHorizontal(),
                            l = i._ruler || i.getRuler(),
                            u = i.calculateBarValuePixels(i.index, e),
                            c = i.calculateBarIndexPixels(i.index, e, l);
                        r.horizontal = s, r.base = n ? a : u.base, r.x = s ? n ? a : u.head : c.center, r.y = s ? c.center : n ? a : u.head, r.height = s ? c.size : undefined, r.width = s ? undefined : c.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function(t) {
                        var e, n, i = this,
                            r = i.chart,
                            o = i.getIndexScale().options.stacked,
                            a = t === undefined ? r.data.datasets.length : t + 1,
                            s = [];
                        for (e = 0; e < a; ++e)(n = r.getDatasetMeta(e)).bar && r.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === s.indexOf(n.stack) || o === undefined && (n.stack === undefined || -1 === s.indexOf(n.stack))) && s.push(n.stack);
                        return s
                    },
                    getStackCount: function() {
                        return this._getStacks().length
                    },
                    getStackIndex: function(t, e) {
                        var n = this._getStacks(t),
                            i = e !== undefined ? n.indexOf(e) : -1;
                        return -1 === i ? n.length - 1 : i
                    },
                    getRuler: function() {
                        var t, e, n = this,
                            i = n.getIndexScale(),
                            r = n.getStackCount(),
                            o = n.index,
                            a = i.isHorizontal(),
                            s = a ? i.left : i.top,
                            l = s + (a ? i.width : i.height),
                            u = [];
                        for (t = 0, e = n.getMeta().data.length; t < e; ++t) u.push(i.getPixelForValue(null, t, o));
                        return {
                            min: h.isNullOrUndef(i.options.barThickness) ? c(i, u) : -1,
                            pixels: u,
                            start: s,
                            end: l,
                            stackCount: r,
                            scale: i
                        }
                    },
                    calculateBarValuePixels: function(t, e) {
                        var n, i, r, o, a, s, l = this,
                            u = l.chart,
                            c = l.getMeta(),
                            d = l.getValueScale(),
                            h = u.data.datasets,
                            f = d.getRightValue(h[t].data[e]),
                            p = d.options.stacked,
                            g = c.stack,
                            m = 0;
                        if (p || p === undefined && g !== undefined)
                            for (n = 0; n < t; ++n)(i = u.getDatasetMeta(n)).bar && i.stack === g && i.controller.getValueScaleId() === d.id && u.isDatasetVisible(n) && (r = d.getRightValue(h[n].data[e]), (f < 0 && r < 0 || 0 <= f && 0 < r) && (m += r));
                        return o = d.getPixelForValue(m), {
                            size: s = ((a = d.getPixelForValue(m + f)) - o) / 2,
                            base: o,
                            head: a,
                            center: a + s / 2
                        }
                    },
                    calculateBarIndexPixels: function(t, e, n) {
                        var i = this,
                            r = n.scale.options,
                            o = "flex" === r.barThickness ? d(e, n, r) : u(e, n, r),
                            a = i.getStackIndex(t, i.getMeta().stack),
                            s = o.start + o.chunk * a + o.chunk / 2,
                            l = Math.min(h.valueOrDefault(r.maxBarThickness, Infinity), o.chunk * o.ratio);
                        return {
                            base: s - l / 2,
                            head: s + l / 2,
                            center: s,
                            size: l
                        }
                    },
                    draw: function() {
                        var t = this,
                            e = t.chart,
                            n = t.getValueScale(),
                            i = t.getMeta().data,
                            r = t.getDataset(),
                            o = i.length,
                            a = 0;
                        for (h.canvas.clipArea(e.ctx, e.chartArea); a < o; ++a) isNaN(n.getRightValue(r.data[a])) || i[a].draw();
                        h.canvas.unclipArea(e.ctx)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model;
                        r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : h.valueAtIndexOrDefault(e.hoverBackgroundColor, n, h.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : h.valueAtIndexOrDefault(e.hoverBorderColor, n, h.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : h.valueAtIndexOrDefault(e.hoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model,
                            o = this.chart.options.elements.rectangle;
                        r.backgroundColor = i.backgroundColor ? i.backgroundColor : h.valueAtIndexOrDefault(e.backgroundColor, n, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : h.valueAtIndexOrDefault(e.borderColor, n, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : h.valueAtIndexOrDefault(e.borderWidth, n, o.borderWidth)
                    }
                }), n.controllers.horizontalBar = n.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        16: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                g = t(45);
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "",
                                i = e.datasets[t.datasetIndex].data[t.index];
                            return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: i.Point,
                    update: function(n) {
                        var i = this,
                            t = i.getMeta().data;
                        g.each(t, function(t, e) {
                            i.updateElement(t, e, n)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.getMeta(),
                            o = t.custom || {},
                            a = i.getScaleForId(r.xAxisID),
                            s = i.getScaleForId(r.yAxisID),
                            l = i._resolveElementOptions(t, e),
                            u = i.getDataset().data[e],
                            c = i.index,
                            d = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == typeof u ? u : NaN, e, c),
                            h = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
                        t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: n ? 0 : l.radius,
                            skip: o.skip || isNaN(d) || isNaN(h),
                            x: d,
                            y: h
                        }, t.pivot()
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = g.valueOrDefault(n.hoverBackgroundColor, g.getHoverColor(n.backgroundColor)), e.borderColor = g.valueOrDefault(n.hoverBorderColor, g.getHoverColor(n.borderColor)), e.borderWidth = g.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
                    },
                    removeHoverStyle: function(t) {
                        var e = t._model,
                            n = t._options;
                        e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius
                    },
                    _resolveElementOptions: function(t, e) {
                        var n, i, r, o = this,
                            a = o.chart,
                            s = a.data.datasets[o.index],
                            l = t.custom || {},
                            u = a.options.elements.point,
                            c = g.options.resolve,
                            d = s.data[e],
                            h = {},
                            f = {
                                chart: a,
                                dataIndex: e,
                                dataset: s,
                                datasetIndex: o.index
                            },
                            p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (n = 0, i = p.length; n < i; ++n) h[r = p[n]] = c([l[r], s[r], u[r]], f, e);
                        return h.radius = c([l.radius, d ? d.r : undefined, s.radius, u.radius], f, e), h
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        17: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                C = t(45);
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        r = n.labels;
                    if (i.length)
                        for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(l) {
                            var u = l.data;
                            return u.labels.length && u.datasets.length ? u.labels.map(function(t, e) {
                                var n = l.getDatasetMeta(0),
                                    i = u.datasets[0],
                                    r = n.data[e],
                                    o = r && r.custom || {},
                                    a = C.valueAtIndexOrDefault,
                                    s = l.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: o.backgroundColor ? o.backgroundColor : a(i.backgroundColor, e, s.backgroundColor),
                                    strokeStyle: o.borderColor ? o.borderColor : a(i.borderColor, e, s.borderColor),
                                    lineWidth: o.borderWidth ? o.borderWidth : a(i.borderWidth, e, s.borderWidth),
                                    hidden: isNaN(i.data[e]) || n.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, r, o = e.index,
                            a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
                        a.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var n = e.labels[t.index],
                                i = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return C.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                        }
                    }
                }
            }), n._set("pie", C.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function(e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: C.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                        return e
                    },
                    update: function(n) {
                        var i = this,
                            t = i.chart,
                            e = t.chartArea,
                            r = t.options,
                            o = r.elements.arc,
                            a = e.right - e.left - o.borderWidth,
                            s = e.bottom - e.top - o.borderWidth,
                            l = Math.min(a, s),
                            u = {
                                x: 0,
                                y: 0
                            },
                            c = i.getMeta(),
                            d = r.cutoutPercentage,
                            h = r.circumference;
                        if (h < 2 * Math.PI) {
                            var f = r.rotation % (2 * Math.PI),
                                p = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + h,
                                g = {
                                    x: Math.cos(f),
                                    y: Math.sin(f)
                                },
                                m = {
                                    x: Math.cos(p),
                                    y: Math.sin(p)
                                },
                                v = f <= 0 && 0 <= p || f <= 2 * Math.PI && 2 * Math.PI <= p,
                                y = f <= .5 * Math.PI && .5 * Math.PI <= p || f <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                b = f <= -Math.PI && -Math.PI <= p || f <= Math.PI && Math.PI <= p,
                                x = f <= .5 * -Math.PI && .5 * -Math.PI <= p || f <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                w = d / 100,
                                _ = {
                                    x: b ? -1 : Math.min(g.x * (g.x < 0 ? 1 : w), m.x * (m.x < 0 ? 1 : w)),
                                    y: x ? -1 : Math.min(g.y * (g.y < 0 ? 1 : w), m.y * (m.y < 0 ? 1 : w))
                                },
                                S = {
                                    x: v ? 1 : Math.max(g.x * (0 < g.x ? 1 : w), m.x * (0 < m.x ? 1 : w)),
                                    y: y ? 1 : Math.max(g.y * (0 < g.y ? 1 : w), m.y * (0 < m.y ? 1 : w))
                                },
                                k = {
                                    width: .5 * (S.x - _.x),
                                    height: .5 * (S.y - _.y)
                                };
                            l = Math.min(a / k.width, s / k.height), u = {
                                x: -.5 * (S.x + _.x),
                                y: -.5 * (S.y + _.y)
                            }
                        }
                        t.borderWidth = i.getMaxBorderWidth(c.data), t.outerRadius = Math.max((l - t.borderWidth) / 2, 0), t.innerRadius = Math.max(d ? t.outerRadius / 100 * d : 0, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), t.offsetX = u.x * t.outerRadius, t.offsetY = u.y * t.outerRadius, c.total = i.calculateTotal(), i.outerRadius = t.outerRadius - t.radiusLength * i.getRingIndex(i.index), i.innerRadius = Math.max(i.outerRadius - t.radiusLength, 0), C.each(c.data, function(t, e) {
                            i.updateElement(t, e, n)
                        })
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = i.chart,
                            o = r.chartArea,
                            a = r.options,
                            s = a.animation,
                            l = (o.left + o.right) / 2,
                            u = (o.top + o.bottom) / 2,
                            c = a.rotation,
                            d = a.rotation,
                            h = i.getDataset(),
                            f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (a.circumference / (2 * Math.PI)),
                            p = n && s.animateScale ? 0 : i.innerRadius,
                            g = n && s.animateScale ? 0 : i.outerRadius,
                            m = C.valueAtIndexOrDefault;
                        C.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _model: {
                                x: l + r.offsetX,
                                y: u + r.offsetY,
                                startAngle: c,
                                endAngle: d,
                                circumference: f,
                                outerRadius: g,
                                innerRadius: p,
                                label: m(h.label, e, r.data.labels[e])
                            }
                        });
                        var v = t._model;
                        this.removeHoverStyle(t), n && s.animateRotate || (v.startAngle = 0 === e ? a.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var n, i = this.getDataset(),
                            t = this.getMeta(),
                            r = 0;
                        return C.each(t.data, function(t, e) {
                            n = i.data[e], isNaN(n) || t.hidden || (r += Math.abs(n))
                        }), r
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, n, i = 0, r = this.index, o = t.length, a = 0; a < o; a++) i = (i = i < (e = t[a]._model ? t[a]._model.borderWidth : 0) ? e : i) < (n = t[a]._chart ? t[a]._chart.config.data.datasets[r].hoverBorderWidth : 0) ? n : i;
                        return i
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        18: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                p = t(45);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function(t) {
                function f(t, e) {
                    return p.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    update: function(t) {
                        var e, n, i, r = this,
                            o = r.getMeta(),
                            a = o.dataset,
                            s = o.data || [],
                            l = r.chart.options,
                            u = l.elements.line,
                            c = r.getScaleForId(o.yAxisID),
                            d = r.getDataset(),
                            h = f(d, l);
                        for (h && (i = a.custom || {}, d.tension !== undefined && d.lineTension === undefined && (d.lineTension = d.tension), a._scale = c, a._datasetIndex = r.index, a._children = s, a._model = {
                                spanGaps: d.spanGaps ? d.spanGaps : l.spanGaps,
                                tension: i.tension ? i.tension : p.valueOrDefault(d.lineTension, u.tension),
                                backgroundColor: i.backgroundColor ? i.backgroundColor : d.backgroundColor || u.backgroundColor,
                                borderWidth: i.borderWidth ? i.borderWidth : d.borderWidth || u.borderWidth,
                                borderColor: i.borderColor ? i.borderColor : d.borderColor || u.borderColor,
                                borderCapStyle: i.borderCapStyle ? i.borderCapStyle : d.borderCapStyle || u.borderCapStyle,
                                borderDash: i.borderDash ? i.borderDash : d.borderDash || u.borderDash,
                                borderDashOffset: i.borderDashOffset ? i.borderDashOffset : d.borderDashOffset || u.borderDashOffset,
                                borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : d.borderJoinStyle || u.borderJoinStyle,
                                fill: i.fill ? i.fill : d.fill !== undefined ? d.fill : u.fill,
                                steppedLine: i.steppedLine ? i.steppedLine : p.valueOrDefault(d.steppedLine, u.stepped),
                                cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : p.valueOrDefault(d.cubicInterpolationMode, u.cubicInterpolationMode)
                            }, a.pivot()), e = 0, n = s.length; e < n; ++e) r.updateElement(s[e], e, t);
                        for (h && 0 !== a._model.tension && r.updateBezierControlPoints(), e = 0, n = s.length; e < n; ++e) s[e].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var n = this.chart.options.elements.point.backgroundColor,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return r.backgroundColor ? n = r.backgroundColor : i.pointBackgroundColor ? n = p.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
                    },
                    getPointBorderColor: function(t, e) {
                        var n = this.chart.options.elements.point.borderColor,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return r.borderColor ? n = r.borderColor : i.pointBorderColor ? n = p.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
                    },
                    getPointBorderWidth: function(t, e) {
                        var n = this.chart.options.elements.point.borderWidth,
                            i = this.getDataset(),
                            r = t.custom || {};
                        return isNaN(r.borderWidth) ? !isNaN(i.pointBorderWidth) || p.isArray(i.pointBorderWidth) ? n = p.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = r.borderWidth, n
                    },
                    updateElement: function(t, e, n) {
                        var i, r, o = this,
                            a = o.getMeta(),
                            s = t.custom || {},
                            l = o.getDataset(),
                            u = o.index,
                            c = l.data[e],
                            d = o.getScaleForId(a.yAxisID),
                            h = o.getScaleForId(a.xAxisID),
                            f = o.chart.options.elements.point;
                        l.radius !== undefined && l.pointRadius === undefined && (l.pointRadius = l.radius), l.hitRadius !== undefined && l.pointHitRadius === undefined && (l.pointHitRadius = l.hitRadius), i = h.getPixelForValue("object" == typeof c ? c : NaN, e, u), r = n ? d.getBasePixel() : o.calculatePointY(c, e, u), t._xScale = h, t._yScale = d, t._datasetIndex = u, t._index = e, t._model = {
                            x: i,
                            y: r,
                            skip: s.skip || isNaN(i) || isNaN(r),
                            radius: s.radius || p.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
                            pointStyle: s.pointStyle || p.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
                            backgroundColor: o.getPointBackgroundColor(t, e),
                            borderColor: o.getPointBorderColor(t, e),
                            borderWidth: o.getPointBorderWidth(t, e),
                            tension: a.dataset._model ? a.dataset._model.tension : 0,
                            steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
                            hitRadius: s.hitRadius || p.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, n) {
                        var i, r, o, a = this,
                            s = a.chart,
                            l = a.getMeta(),
                            u = a.getScaleForId(l.yAxisID),
                            c = 0,
                            d = 0;
                        if (u.options.stacked) {
                            for (i = 0; i < n; i++)
                                if (r = s.data.datasets[i], "line" === (o = s.getDatasetMeta(i)).type && o.yAxisID === u.id && s.isDatasetVisible(i)) {
                                    var h = Number(u.getRightValue(r.data[e]));
                                    h < 0 ? d += h || 0 : c += h || 0
                                }
                            var f = Number(u.getRightValue(t));
                            return f < 0 ? u.getPixelForValue(d + f) : u.getPixelForValue(c + f)
                        }
                        return u.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        function t(t, e, n) {
                            return Math.max(Math.min(t, n), e)
                        }
                        var e, n, i, r, o = this,
                            a = o.getMeta(),
                            s = o.chart.chartArea,
                            l = a.data || [];
                        if (a.dataset._model.spanGaps && (l = l.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === a.dataset._model.cubicInterpolationMode) p.splineCurveMonotone(l);
                        else
                            for (e = 0, n = l.length; e < n; ++e) i = l[e]._model, r = p.splineCurve(p.previousItem(l, e)._model, i, p.nextItem(l, e)._model, a.dataset._model.tension), i.controlPointPreviousX = r.previous.x, i.controlPointPreviousY = r.previous.y, i.controlPointNextX = r.next.x, i.controlPointNextY = r.next.y;
                        if (o.chart.options.elements.line.capBezierPoints)
                            for (e = 0, n = l.length; e < n; ++e)(i = l[e]._model).controlPointPreviousX = t(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = t(i.controlPointPreviousY, s.top, s.bottom), i.controlPointNextX = t(i.controlPointNextX, s.left, s.right), i.controlPointNextY = t(i.controlPointNextY, s.top, s.bottom)
                    },
                    draw: function() {
                        var t = this,
                            e = t.chart,
                            n = t.getMeta(),
                            i = n.data || [],
                            r = e.chartArea,
                            o = i.length,
                            a = 0;
                        for (p.canvas.clipArea(e.ctx, r), f(t.getDataset(), e.options) && n.dataset.draw(), p.canvas.unclipArea(e.ctx); a < o; ++a) i[a].draw(r)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = t._model;
                        r.radius = i.hoverRadius || p.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor || p.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, p.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || p.valueAtIndexOrDefault(e.pointHoverBorderColor, n, p.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || p.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            n = e.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = t._model;
                        n.radius !== undefined && n.pointRadius === undefined && (n.pointRadius = n.radius), o.radius = r.radius || p.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, i), o.borderColor = e.getPointBorderColor(t, i), o.borderWidth = e.getPointBorderWidth(t, i)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        19: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                w = t(45);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var n = t.data,
                        i = n.datasets,
                        r = n.labels;
                    if (i.length)
                        for (var o = 0; o < i[0].data.length; ++o) e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function(t, e) {
                                var n = s.getDatasetMeta(0),
                                    i = l.datasets[0],
                                    r = n.data[e].custom || {},
                                    o = w.valueAtIndexOrDefault,
                                    a = s.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: r.backgroundColor ? r.backgroundColor : o(i.backgroundColor, e, a.backgroundColor),
                                    strokeStyle: r.borderColor ? r.borderColor : o(i.borderColor, e, a.borderColor),
                                    lineWidth: r.borderWidth ? r.borderWidth : o(i.borderWidth, e, a.borderWidth),
                                    hidden: isNaN(i.data[e]) || n.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var n, i, r, o = e.index,
                            a = this.chart;
                        for (n = 0, i = (a.data.datasets || []).length; n < i; ++n)(r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
                        a.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function(e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: w.noop,
                    update: function(n) {
                        var i = this,
                            t = i.chart,
                            e = t.chartArea,
                            r = i.getMeta(),
                            o = t.options,
                            a = o.elements.arc,
                            s = Math.min(e.right - e.left, e.bottom - e.top);
                        t.outerRadius = Math.max((s - a.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(o.cutoutPercentage ? t.outerRadius / 100 * o.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), i.outerRadius = t.outerRadius - t.radiusLength * i.index, i.innerRadius = i.outerRadius - t.radiusLength, r.count = i.countVisibleElements(), w.each(r.data, function(t, e) {
                            i.updateElement(t, e, n)
                        })
                    },
                    updateElement: function(t, e, n) {
                        for (var i = this, r = i.chart, o = i.getDataset(), a = r.options, s = a.animation, l = r.scale, u = r.data.labels, c = i.calculateCircumference(o.data[e]), d = l.xCenter, h = l.yCenter, f = 0, p = i.getMeta(), g = 0; g < e; ++g) isNaN(o.data[g]) || p.data[g].hidden || ++f;
                        var m = a.startAngle,
                            v = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                            y = m + c * f,
                            b = y + (t.hidden ? 0 : c),
                            x = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]);
                        w.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                x: d,
                                y: h,
                                innerRadius: 0,
                                outerRadius: n ? x : v,
                                startAngle: n && s.animateRotate ? m : y,
                                endAngle: n && s.animateRotate ? m : b,
                                label: w.valueAtIndexOrDefault(u, e, u[e])
                            }
                        }), i.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var n = this.getDataset(),
                            t = this.getMeta(),
                            i = 0;
                        return w.each(t.data, function(t, e) {
                            isNaN(n.data[e]) || t.hidden || i++
                        }), i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        20: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(40),
                u = t(45);
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    linkScales: u.noop,
                    update: function(n) {
                        var i = this,
                            t = i.getMeta(),
                            e = t.dataset,
                            r = t.data,
                            o = e.custom || {},
                            a = i.getDataset(),
                            s = i.chart.options.elements.line,
                            l = i.chart.scale;
                        a.tension !== undefined && a.lineTension === undefined && (a.lineTension = a.tension), u.extend(t.dataset, {
                            _datasetIndex: i.index,
                            _scale: l,
                            _children: r,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : u.valueOrDefault(a.lineTension, s.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : a.backgroundColor || s.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : a.borderWidth || s.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : a.borderColor || s.borderColor,
                                fill: o.fill ? o.fill : a.fill !== undefined ? a.fill : s.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : a.borderCapStyle || s.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : a.borderDash || s.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : a.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : a.borderJoinStyle || s.borderJoinStyle
                            }
                        }), t.dataset.pivot(), u.each(r, function(t, e) {
                            i.updateElement(t, e, n)
                        }, i), i.updateBezierControlPoints()
                    },
                    updateElement: function(t, e, n) {
                        var i = this,
                            r = t.custom || {},
                            o = i.getDataset(),
                            a = i.chart.scale,
                            s = i.chart.options.elements.point,
                            l = a.getPointPositionForValue(e, o.data[e]);
                        o.radius !== undefined && o.pointRadius === undefined && (o.pointRadius = o.radius), o.hitRadius !== undefined && o.pointHitRadius === undefined && (o.pointHitRadius = o.hitRadius), u.extend(t, {
                            _datasetIndex: i.index,
                            _index: e,
                            _scale: a,
                            _model: {
                                x: n ? a.xCenter : l.x,
                                y: n ? a.yCenter : l.y,
                                tension: r.tension ? r.tension : u.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                                radius: r.radius ? r.radius : u.valueAtIndexOrDefault(o.pointRadius, e, s.radius),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : u.valueAtIndexOrDefault(o.pointBackgroundColor, e, s.backgroundColor),
                                borderColor: r.borderColor ? r.borderColor : u.valueAtIndexOrDefault(o.pointBorderColor, e, s.borderColor),
                                borderWidth: r.borderWidth ? r.borderWidth : u.valueAtIndexOrDefault(o.pointBorderWidth, e, s.borderWidth),
                                pointStyle: r.pointStyle ? r.pointStyle : u.valueAtIndexOrDefault(o.pointStyle, e, s.pointStyle),
                                hitRadius: r.hitRadius ? r.hitRadius : u.valueAtIndexOrDefault(o.pointHitRadius, e, s.hitRadius)
                            }
                        }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var r = this.chart.chartArea,
                            o = this.getMeta();
                        u.each(o.data, function(t, e) {
                            var n = t._model,
                                i = u.splineCurve(u.previousItem(o.data, e, !0)._model, n, u.nextItem(o.data, e, !0)._model, n.tension);
                            n.controlPointPreviousX = Math.max(Math.min(i.previous.x, r.right), r.left), n.controlPointPreviousY = Math.max(Math.min(i.previous.y, r.bottom), r.top), n.controlPointNextX = Math.max(Math.min(i.next.x, r.right), r.left), n.controlPointNextY = Math.max(Math.min(i.next.y, r.bottom), r.top), t.pivot()
                        })
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            r = t._model;
                        r.radius = n.hoverRadius ? n.hoverRadius : u.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, u.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : u.valueAtIndexOrDefault(e.pointHoverBorderColor, i, u.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : u.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t.custom || {},
                            i = t._index,
                            r = t._model,
                            o = this.chart.options.elements.point;
                        r.radius = n.radius ? n.radius : u.valueAtIndexOrDefault(e.pointRadius, i, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : u.valueAtIndexOrDefault(e.pointBackgroundColor, i, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : u.valueAtIndexOrDefault(e.pointBorderColor, i, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : u.valueAtIndexOrDefault(e.pointBorderWidth, i, o.borderWidth)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        21: [function(t, e) {
            "use strict";
            t(25)._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            25: 25
        }],
        22: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                o = t(45);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), e.exports = function(t) {
                t.Animation = i.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, n, i) {
                        var r, o, a = this.animations;
                        for (e.chart = t, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r)
                            if (a[r].chart === t) return void(a[r] = e);
                        a.push(e), 1 === a.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(e) {
                        var t = o.findIndex(this.animations, function(t) {
                            return t.chart === e
                        }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            n = 0;
                        1 < t.dropFrames && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                        var i = Date.now();
                        t.dropFrames += (i - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                    },
                    advance: function(t) {
                        for (var e, n, i = this.animations, r = 0; r < i.length;) n = (e = i[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(r, 1)) : ++r
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        23: [function(t, e) {
            "use strict";
            var n = t(25),
                d = t(45),
                o = t(28),
                i = t(30),
                l = t(48),
                h = t(31);
            e.exports = function(u) {
                function s(t) {
                    var e = (t = t || {}).data = t.data || {};
                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = d.configMerge(n.global, n[t.type], t.options || {}), t
                }

                function r(e) {
                    var t = e.options;
                    d.each(e.scales, function(t) {
                        i.removeBox(e, t)
                    }), t = d.configMerge(u.defaults.global, u.defaults[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
                }

                function c(t) {
                    return "top" === t || "bottom" === t
                }
                u.types = {}, u.instances = {}, u.controllers = {}, d.extend(u.prototype, {
                    construct: function(t, e) {
                        var n = this;
                        e = s(e);
                        var i = l.acquireContext(t, e),
                            r = i && i.canvas,
                            o = r && r.height,
                            a = r && r.width;
                        n.id = d.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = a, n.height = o, n.aspectRatio = o ? a / o : null, n.options = e.options, n._bufferedRender = !1, (n.chart = n).controller = n, u.instances[n.id] = n, Object.defineProperty(n, "data", {
                            get: function() {
                                return n.config.data
                            },
                            set: function(t) {
                                n.config.data = t
                            }
                        }), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return h.notify(t, "beforeInit"), d.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), h.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return d.canvas.clear(this), this
                    },
                    stop: function() {
                        return u.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            n = e.options,
                            i = e.canvas,
                            r = n.maintainAspectRatio && e.aspectRatio || null,
                            o = Math.max(0, Math.floor(d.getMaximumWidth(i))),
                            a = Math.max(0, Math.floor(r ? o / r : d.getMaximumHeight(i)));
                        if ((e.width !== o || e.height !== a) && (i.width = e.width = o, i.height = e.height = a, i.style.width = o + "px", i.style.height = a + "px", d.retinaScale(e, n.devicePixelRatio), !t)) {
                            var s = {
                                width: o,
                                height: a
                            };
                            h.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update(e.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            n = t.scale;
                        d.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), d.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), n && (n.id = n.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var a = this,
                            t = a.options,
                            s = a.scales || {},
                            e = [],
                            l = Object.keys(s).reduce(function(t, e) {
                                return t[e] = !1, t
                            }, {});
                        t.scales && (e = e.concat((t.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (t.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), t.scale && e.push({
                            options: t.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), d.each(e, function(t) {
                            var e = t.options,
                                n = e.id,
                                i = d.valueOrDefault(e.type, t.dtype);
                            c(e.position) !== c(t.dposition) && (e.position = t.dposition), l[n] = !0;
                            var r = null;
                            if (n in s && s[n].type === i)(r = s[n]).options = e, r.ctx = a.ctx, r.chart = a;
                            else {
                                var o = u.scaleService.getScaleConstructor(i);
                                if (!o) return;
                                r = new o({
                                    id: n,
                                    type: i,
                                    options: e,
                                    ctx: a.ctx,
                                    chart: a
                                }), s[r.id] = r
                            }
                            r.mergeTicksOptions(), t.isDefault && (a.scale = r)
                        }), d.each(l, function(t, e) {
                            t || delete s[e]
                        }), a.scales = s, u.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var o = this,
                            a = [],
                            s = [];
                        return d.each(o.data.datasets, function(t, e) {
                            var n = o.getDatasetMeta(e),
                                i = t.type || o.config.type;
                            if (n.type && n.type !== i && (o.destroyDatasetMeta(e), n = o.getDatasetMeta(e)), n.type = i, a.push(n.type), n.controller) n.controller.updateIndex(e), n.controller.linkScales();
                            else {
                                var r = u.controllers[n.type];
                                if (r === undefined) throw new Error('"' + n.type + '" is not a chart type.');
                                n.controller = new r(o, e), s.push(n.controller)
                            }
                        }, o), s
                    },
                    resetElements: function() {
                        var n = this;
                        d.each(n.data.datasets, function(t, e) {
                            n.getDatasetMeta(e).controller.reset()
                        }, n)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t, e) {
                        var n = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: e
                            }), r(n), h._invalidate(n), !1 !== h.notify(n, "beforeUpdate")) {
                            n.tooltip._data = n.data;
                            var i = n.buildOrUpdateControllers();
                            d.each(n.data.datasets, function(t, e) {
                                n.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && d.each(i, function(t) {
                                t.reset()
                            }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], h.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : n.render(t)
                        }
                    },
                    updateLayout: function() {
                        var t = this;
                        !1 !== h.notify(t, "beforeLayout") && (i.update(this, this.width, this.height), h.notify(t, "afterScaleUpdate"), h.notify(t, "afterLayout"))
                    },
                    updateDatasets: function() {
                        var t = this;
                        if (!1 !== h.notify(t, "beforeDatasetsUpdate")) {
                            for (var e = 0, n = t.data.datasets.length; e < n; ++e) t.updateDataset(e);
                            h.notify(t, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this,
                            n = e.getDatasetMeta(t),
                            i = {
                                meta: n,
                                index: t
                            };
                        !1 !== h.notify(e, "beforeDatasetUpdate", [i]) && (n.controller.update(), h.notify(e, "afterDatasetUpdate", [i]))
                    },
                    render: function(t, e) {
                        var n = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: e
                        });
                        var i = t.duration,
                            r = t.lazy;
                        if (!1 !== h.notify(n, "beforeRender")) {
                            var o = n.options.animation,
                                a = function(t) {
                                    h.notify(n, "afterRender"), d.callback(o && o.onComplete, [t], n)
                                };
                            if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                                var s = new u.Animation({
                                    numSteps: (i || o.duration) / 16.66,
                                    easing: t.easing || o.easing,
                                    render: function(t, e) {
                                        var n = d.easing.effects[e.easing],
                                            i = e.currentStep,
                                            r = i / e.numSteps;
                                        t.draw(n(r), r, i)
                                    },
                                    onAnimationProgress: o.onProgress,
                                    onAnimationComplete: a
                                });
                                u.animationService.addAnimation(n, s, i, r)
                            } else n.draw(), a(new u.Animation({
                                numSteps: 0,
                                chart: n
                            }));
                            return n
                        }
                    },
                    draw: function(t) {
                        var e = this;
                        e.clear(), d.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== h.notify(e, "beforeDraw", [t]) && (d.each(e.boxes, function(t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), h.notify(e, "afterDraw", [t]))
                    },
                    transition: function(t) {
                        for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n) e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
                        e.tooltip.transition(t)
                    },
                    drawDatasets: function(t) {
                        var e = this;
                        if (!1 !== h.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var n = (e.data.datasets || []).length - 1; 0 <= n; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                            h.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var n = this,
                            i = n.getDatasetMeta(t),
                            r = {
                                meta: i,
                                index: t,
                                easingValue: e
                            };
                        !1 !== h.notify(n, "beforeDatasetDraw", [r]) && (i.controller.draw(e), h.notify(n, "afterDatasetDraw", [r]))
                    },
                    _drawTooltip: function(t) {
                        var e = this,
                            n = e.tooltip,
                            i = {
                                tooltip: n,
                                easingValue: t
                            };
                        !1 !== h.notify(e, "beforeTooltipDraw", [i]) && (n.draw(), h.notify(e, "afterTooltipDraw", [i]))
                    },
                    getElementAtEvent: function(t) {
                        return o.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return o.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return o.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, n) {
                        var i = o.modes[e];
                        return "function" == typeof i ? i(this, t, n) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return o.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this,
                            n = e.data.datasets[t];
                        n._meta || (n._meta = {});
                        var i = n._meta[e.id];
                        return i || (i = n._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            n = this.data.datasets[t],
                            i = n._meta && n._meta[e];
                        i && (i.controller.destroy(), delete n._meta[e])
                    },
                    destroy: function() {
                        var t, e, n = this,
                            i = n.canvas;
                        for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) n.destroyDatasetMeta(t);
                        i && (n.unbindEvents(), d.canvas.clear(n), l.releaseContext(n.ctx), n.canvas = null, n.ctx = null), h.notify(n, "destroy"), delete u.instances[n.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this;
                        t.tooltip = new u.Tooltip({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function() {
                        var e = this,
                            n = e._listeners = {},
                            i = function() {
                                e.eventHandler.apply(e, arguments)
                            };
                        d.each(e.options.events, function(t) {
                            l.addEventListener(e, t, i), n[t] = i
                        }), e.options.responsive && (i = function() {
                            e.resize()
                        }, l.addEventListener(e, "resize", i), n.resize = i)
                    },
                    unbindEvents: function() {
                        var n = this,
                            t = n._listeners;
                        t && (delete n._listeners, d.each(t, function(t, e) {
                            l.removeEventListener(n, e, t)
                        }))
                    },
                    updateHoverStyle: function(t, e, n) {
                        var i, r, o, a = n ? "setHoverStyle" : "removeHoverStyle";
                        for (r = 0, o = t.length; r < o; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            n = e.tooltip;
                        if (!1 !== h.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var i = e.handleEvent(t);
                            n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), h.notify(e, "afterEvent", [t]);
                            var r = e._bufferedRequest;
                            return r ? e.render(r) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            n = e.options || {},
                            i = n.hover,
                            r = !1;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), d.callback(n.onHover || n.hover.onHover, [t["native"], e.active], e), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t["native"], e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), r = !d.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, r
                    }
                }), u.Controller = u
            }
        }, {
            25: 25,
            28: 28,
            30: 30,
            31: 31,
            45: 45,
            48: 48
        }],
        24: [function(t, e) {
            "use strict";
            var s = t(45);
            e.exports = function(t) {
                function i(r, t) {
                    r._chartjs ? r._chartjs.listeners.push(t) : (Object.defineProperty(r, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [t]
                        }
                    }), o.forEach(function(t) {
                        var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                            i = r[t];
                        Object.defineProperty(r, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                    t = i.apply(this, e);
                                return s.each(r._chartjs.listeners, function(t) {
                                    "function" == typeof t[n] && t[n].apply(t, e)
                                }), t
                            }
                        })
                    }))
                }

                function r(e, t) {
                    var n = e._chartjs;
                    if (n) {
                        var i = n.listeners,
                            r = i.indexOf(t); - 1 !== r && i.splice(r, 1), 0 < i.length || (o.forEach(function(t) {
                            delete e[t]
                        }), delete e._chartjs)
                    }
                }
                var o = ["push", "pop", "shift", "splice", "unshift"];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, s.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        var n = this;
                        n.chart = t, n.index = e, n.linkScales(), n.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            n = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && r(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            n = e.dataElementType;
                        return n && new n({
                            _chart: e.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, n = this,
                            i = n.getMeta(),
                            r = n.getDataset().data || [],
                            o = i.data;
                        for (t = 0, e = r.length; t < e; ++t) o[t] = o[t] || n.createMetaData(t);
                        i.dataset = i.dataset || n.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            e = t.getDataset(),
                            n = e.data || (e.data = []);
                        t._data !== n && (t._data && r(t._data, t), i(n, t), t._data = n), t.resyncElements()
                    },
                    update: s.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            n = e.length,
                            i = 0;
                        for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var n = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            r = t.custom || {},
                            o = s.valueAtIndexOrDefault,
                            a = t._model;
                        a.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, i, e.backgroundColor), a.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, i, e.borderColor), a.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, i, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            i = t.custom || {},
                            r = s.valueAtIndexOrDefault,
                            o = s.getHoverColor,
                            a = t._model;
                        a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(e.hoverBackgroundColor, n, o(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(e.hoverBorderColor, n, o(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(e.hoverBorderWidth, n, a.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this,
                            e = t.getMeta(),
                            n = t.getDataset().data,
                            i = e.data.length,
                            r = n.length;
                        r < i ? e.data.splice(r, i - r) : i < r && t.insertElements(i, r - i)
                    },
                    insertElements: function(t, e) {
                        for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = s.inherits
            }
        }, {
            45: 45
        }],
        25: [function(t, e) {
            "use strict";
            var n = t(45);
            e.exports = {
                _set: function(t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            45: 45
        }],
        26: [function(t, e) {
            "use strict";

            function o(t, e, n, i) {
                var r, o, a, s, l, u, c, d, h, f = Object.keys(n);
                for (r = 0, o = f.length; r < o; ++r)
                    if (u = n[a = f[r]], e.hasOwnProperty(a) || (e[a] = u), (s = e[a]) !== u && "_" !== a[0]) {
                        if (t.hasOwnProperty(a) || (t[a] = s), (c = typeof u) === typeof(l = t[a]))
                            if ("string" === c) {
                                if ((d = p(l)).valid && (h = p(u)).valid) {
                                    e[a] = h.mix(d, i).rgbString();
                                    continue
                                }
                            } else if ("number" === c && isFinite(l) && isFinite(u)) {
                            e[a] = l + (u - l) * i;
                            continue
                        }
                        e[a] = u
                    }
            }
            var p = t(2),
                n = t(45),
                i = function(t) {
                    n.extend(this, t), this.initialize.apply(this, arguments)
                };
            n.extend(i.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                },
                transition: function(t) {
                    var e = this,
                        n = e._model,
                        i = e._start,
                        r = e._view;
                    return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), o(i, r, n, t)) : (e._view = n, e._start = null), e
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                }
            }), i.extend = n.inherits, e.exports = i
        }, {
            2: 2,
            45: 45
        }],
        27: [function(t, e) {
            "use strict";
            var n = t(2),
                i = t(25),
                p = t(45);
            e.exports = function(l) {
                function c(t, e, n) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
                }

                function d(t) {
                    return t !== undefined && null !== t && "none" !== t
                }

                function e(t, e, n) {
                    var i = document.defaultView,
                        r = t.parentNode,
                        o = i.getComputedStyle(t)[e],
                        a = i.getComputedStyle(r)[e],
                        s = d(o),
                        l = d(a),
                        u = Number.POSITIVE_INFINITY;
                    return s || l ? Math.min(s ? c(o, t, n) : u, l ? c(a, r, n) : u) : "none"
                }
                p.configMerge = function(t) {
                    return p.merge(p.clone(t), [].slice.call(arguments, 1), {
                        merger: function(t, e, n, i) {
                            var r = e[t] || {},
                                o = n[t];
                            "scales" === t ? e[t] = p.scaleMerge(r, o) : "scale" === t ? e[t] = p.merge(r, [l.scaleService.getScaleDefaults(o.type), o]) : p._merger(t, e, n, i)
                        }
                    })
                }, p.scaleMerge = function(t) {
                    return p.merge(p.clone(t), [].slice.call(arguments, 1), {
                        merger: function(t, e, n, i) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var r, o, a, s = n[t].length;
                                for (e[t] || (e[t] = []), r = 0; r < s; ++r) a = n[t][r], o = p.valueOrDefault(a.type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), !e[t][r].type || a.type && a.type !== e[t][r].type ? p.merge(e[t][r], [l.scaleService.getScaleDefaults(o), a]) : p.merge(e[t][r], a)
                            } else p._merger(t, e, n, i)
                        }
                    })
                }, p.where = function(t, e) {
                    if (p.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return p.each(t, function(t) {
                        e(t) && n.push(t)
                    }), n
                }, p.findIndex = Array.prototype.findIndex ? function(t, e, n) {
                    return t.findIndex(e, n)
                } : function(t, e, n) {
                    n = n === undefined ? t : n;
                    for (var i = 0, r = t.length; i < r; ++i)
                        if (e.call(n, t[i], i, t)) return i;
                    return -1
                }, p.findNextWhere = function(t, e, n) {
                    p.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, p.findPreviousWhere = function(t, e, n) {
                    p.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; 0 <= i; i--) {
                        var r = t[i];
                        if (e(r)) return r
                    }
                }, p.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, p.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n
                }, p.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e < t && t < n + e
                }, p.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, p.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, p.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, p.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                        n = Math.round(e);
                    return t === Math.pow(10, n) ? n : e
                }, p.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, p.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, p.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        r = Math.sqrt(n * n + i * i),
                        o = Math.atan2(i, n);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: r
                    }
                }, p.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, p.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, p.splineCurve = function(t, e, n, i) {
                    var r = t.skip ? e : t,
                        o = e,
                        a = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        u = s / (s + l),
                        c = l / (s + l),
                        d = i * (u = isNaN(u) ? 0 : u),
                        h = i * (c = isNaN(c) ? 0 : c);
                    return {
                        previous: {
                            x: o.x - d * (a.x - r.x),
                            y: o.y - d * (a.y - r.y)
                        },
                        next: {
                            x: o.x + h * (a.x - r.x),
                            y: o.y + h * (a.y - r.y)
                        }
                    }
                }, p.EPSILON = Number.EPSILON || 1e-14, p.splineCurveMonotone = function(t) {
                    var e, n, i, r, o, a, s, l, u, c = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        d = c.length;
                    for (e = 0; e < d; ++e)
                        if (!(i = c[e]).model.skip) {
                            if (n = 0 < e ? c[e - 1] : null, (r = e < d - 1 ? c[e + 1] : null) && !r.model.skip) {
                                var h = r.model.x - i.model.x;
                                i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0
                            }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                        }
                    for (e = 0; e < d - 1; ++e) i = c[e], r = c[e + 1], i.model.skip || r.model.skip || (p.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, a = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = a * s * i.deltaK)));
                    for (e = 0; e < d; ++e)(i = c[e]).model.skip || (n = 0 < e ? c[e - 1] : null, r = e < d - 1 ? c[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), r && !r.model.skip && (u = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK))
                }, p.nextItem = function(t, e, n) {
                    return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, p.previousItem = function(t, e, n) {
                    return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, p.niceNum = function(t, e) {
                    var n = Math.floor(p.log10(t)),
                        i = t / Math.pow(10, n);
                    return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
                }, p.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, p.getRelativePosition = function(t, e) {
                    var n, i, r = t.originalEvent || t,
                        o = t.currentTarget || t.srcElement,
                        a = o.getBoundingClientRect(),
                        s = r.touches;
                    s && 0 < s.length ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
                    var l = parseFloat(p.getStyle(o, "padding-left")),
                        u = parseFloat(p.getStyle(o, "padding-top")),
                        c = parseFloat(p.getStyle(o, "padding-right")),
                        d = parseFloat(p.getStyle(o, "padding-bottom")),
                        h = a.right - a.left - l - c,
                        f = a.bottom - a.top - u - d;
                    return {
                        x: n = Math.round((n - a.left - l) / h * o.width / e.currentDevicePixelRatio),
                        y: i = Math.round((i - a.top - u) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, p.getConstraintWidth = function(t) {
                    return e(t, "max-width", "clientWidth")
                }, p.getConstraintHeight = function(t) {
                    return e(t, "max-height", "clientHeight")
                }, p.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var n = parseInt(p.getStyle(e, "padding-left"), 10),
                        i = parseInt(p.getStyle(e, "padding-right"), 10),
                        r = e.clientWidth - n - i,
                        o = p.getConstraintWidth(t);
                    return isNaN(o) ? r : Math.min(r, o)
                }, p.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var n = parseInt(p.getStyle(e, "padding-top"), 10),
                        i = parseInt(p.getStyle(e, "padding-bottom"), 10),
                        r = e.clientHeight - n - i,
                        o = p.getConstraintHeight(t);
                    return isNaN(o) ? r : Math.min(r, o)
                }, p.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, p.retinaScale = function(t, e) {
                    var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== n) {
                        var i = t.canvas,
                            r = t.height,
                            o = t.width;
                        i.height = r * n, i.width = o * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px")
                    }
                }, p.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n
                }, p.longestText = function(e, t, n, i) {
                    var r = (i = i || {}).data = i.data || {},
                        o = i.garbageCollect = i.garbageCollect || [];
                    i.font !== t && (r = i.data = {}, o = i.garbageCollect = [], i.font = t), e.font = t;
                    var a = 0;
                    p.each(n, function(t) {
                        t !== undefined && null !== t && !0 !== p.isArray(t) ? a = p.measureText(e, r, o, a, t) : p.isArray(t) && p.each(t, function(t) {
                            t === undefined || null === t || p.isArray(t) || (a = p.measureText(e, r, o, a, t))
                        })
                    });
                    var s = o.length / 2;
                    if (s > n.length) {
                        for (var l = 0; l < s; l++) delete r[o[l]];
                        o.splice(0, s)
                    }
                    return a
                }, p.measureText = function(t, e, n, i, r) {
                    var o = e[r];
                    return o || (o = e[r] = t.measureText(r).width, n.push(r)), i < o && (i = o), i
                }, p.numberOfLabelLines = function(t) {
                    var e = 1;
                    return p.each(t, function(t) {
                        p.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, p.color = n ? function(t) {
                    return t instanceof CanvasGradient && (t = i.global.defaultColor), n(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, p.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : p.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            2: 2,
            25: 25,
            45: 45
        }],
        28: [function(t, e) {
            "use strict";

            function s(t, e) {
                return t["native"] ? {
                    x: t.x,
                    y: t.y
                } : i.getRelativePosition(t, e)
            }

            function l(t, e) {
                var n, i, r, o, a;
                for (i = 0, o = t.data.datasets.length; i < o; ++i)
                    if (t.isDatasetVisible(i))
                        for (r = 0, a = (n = t.getDatasetMeta(i)).data.length; r < a; ++r) {
                            var s = n.data[r];
                            s._view.skip || e(s)
                        }
            }

            function u(t, e) {
                var n = [];
                return l(t, function(t) {
                    t.inRange(e.x, e.y) && n.push(t)
                }), n
            }

            function c(t, i, r, o) {
                var a = Number.POSITIVE_INFINITY,
                    s = [];
                return l(t, function(t) {
                    if (!r || t.inRange(i.x, i.y)) {
                        var e = t.getCenterPoint(),
                            n = o(i, e);
                        n < a ? (s = [t], a = n) : n === a && s.push(t)
                    }
                }), s
            }

            function d(t) {
                var r = -1 !== t.indexOf("x"),
                    o = -1 !== t.indexOf("y");
                return function(t, e) {
                    var n = r ? Math.abs(t.x - e.x) : 0,
                        i = o ? Math.abs(t.y - e.y) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2))
                }
            }

            function n(i, t, e) {
                var n = s(t, i);
                e.axis = e.axis || "x";
                var r = d(e.axis),
                    o = e.intersect ? u(i, n) : c(i, n, !1, r),
                    a = [];
                return o.length ? (i.data.datasets.forEach(function(t, e) {
                    if (i.isDatasetVisible(e)) {
                        var n = i.getDatasetMeta(e).data[o[0]._index];
                        n && !n._view.skip && a.push(n)
                    }
                }), a) : []
            }
            var i = t(45);
            e.exports = {
                modes: {
                    single: function(t, e) {
                        var n = s(e, t),
                            i = [];
                        return l(t, function(t) {
                            if (t.inRange(n.x, n.y)) return i.push(t), i
                        }), i.slice(0, 1)
                    },
                    label: n,
                    index: n,
                    dataset: function(t, e, n) {
                        var i = s(e, t);
                        n.axis = n.axis || "xy";
                        var r = d(n.axis),
                            o = n.intersect ? u(t, i) : c(t, i, !1, r);
                        return 0 < o.length && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                    },
                    "x-axis": function(t, e) {
                        return n(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        return u(t, s(e, t))
                    },
                    nearest: function(t, e, n) {
                        var i = s(e, t);
                        n.axis = n.axis || "xy";
                        var r = d(n.axis),
                            o = c(t, i, n.intersect, r);
                        return 1 < o.length && o.sort(function(t, e) {
                            var n = t.getArea() - e.getArea();
                            return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                        }), o.slice(0, 1)
                    },
                    x: function(t, e, n) {
                        var i = s(e, t),
                            r = [],
                            o = !1;
                        return l(t, function(t) {
                            t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                        }), n.intersect && !o && (r = []), r
                    },
                    y: function(t, e, n) {
                        var i = s(e, t),
                            r = [],
                            o = !1;
                        return l(t, function(t) {
                            t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (o = !0)
                        }), n.intersect && !o && (r = []), r
                    }
                }
            }
        }, {
            45: 45
        }],
        29: [function(t, e) {
            "use strict";
            t(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t
            }
        }, {
            25: 25
        }],
        30: [function(t, e) {
            "use strict";

            function $(t, e) {
                return H.where(t, function(t) {
                    return t.position === e
                })
            }

            function W(t, r) {
                t.forEach(function(t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function(t, e) {
                    var n = r ? e : t,
                        i = r ? t : e;
                    return n.weight === i.weight ? n._tmpIndex_ - i._tmpIndex_ : n.weight - i.weight
                }), t.forEach(function(t) {
                    delete t._tmpIndex_
                })
            }
            var H = t(45);
            e.exports = {
                defaults: {},
                addBox: function(t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                },
                removeBox: function(t, e) {
                    var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
                },
                configure: function(t, e, n) {
                    for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) i = r[a], n.hasOwnProperty(i) && (e[i] = n[i])
                },
                update: function(e, n, t) {
                    function i(t) {
                        var e, n = t.isHorizontal();
                        n ? (e = t.update(t.fullWidth ? y : S, _), k -= e.height) : (e = t.update(w, k), S -= e.width), C.push({
                            horizontal: n,
                            minSize: e,
                            box: t
                        })
                    }

                    function r(e) {
                        var t = H.findNextWhere(C, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var n = {
                                    left: Math.max(E, M),
                                    right: Math.max(P, T),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? y : S, b / 2, n)
                            } else e.update(t.minSize.width, k)
                    }

                    function o(e) {
                        var t = H.findNextWhere(C, function(t) {
                                return t.box === e
                            }),
                            n = {
                                left: 0,
                                right: 0,
                                top: O,
                                bottom: I
                            };
                        t && e.update(t.minSize.width, k, n)
                    }

                    function a(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? u : E, t.right = t.fullWidth ? n - c : E + S, t.top = j, t.bottom = j + t.height, j = t.bottom) : (t.left = R, t.right = R + t.width, t.top = O, t.bottom = O + k, R = t.right)
                    }
                    if (e) {
                        var s = e.options.layout || {},
                            l = H.options.toPadding(s.padding),
                            u = l.left,
                            c = l.right,
                            d = l.top,
                            h = l.bottom,
                            f = $(e.boxes, "left"),
                            p = $(e.boxes, "right"),
                            g = $(e.boxes, "top"),
                            m = $(e.boxes, "bottom"),
                            v = $(e.boxes, "chartArea");
                        W(f, !0), W(p, !1), W(g, !0), W(m, !1);
                        var y = n - u - c,
                            b = t - d - h,
                            x = b / 2,
                            w = (n - y / 2) / (f.length + p.length),
                            _ = (t - x) / (g.length + m.length),
                            S = y,
                            k = b,
                            C = [];
                        H.each(f.concat(p, g, m), i);
                        var M = 0,
                            T = 0,
                            D = 0,
                            A = 0;
                        H.each(g.concat(m), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                M = Math.max(M, e.left), T = Math.max(T, e.right)
                            }
                        }), H.each(f.concat(p), function(t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                D = Math.max(D, e.top), A = Math.max(A, e.bottom)
                            }
                        });
                        var E = u,
                            P = c,
                            O = d,
                            I = h;
                        H.each(f.concat(p), r), H.each(f, function(t) {
                                E += t.width
                            }), H.each(p, function(t) {
                                P += t.width
                            }),
                            H.each(g.concat(m), r), H.each(g, function(t) {
                                O += t.height
                            }), H.each(m, function(t) {
                                I += t.height
                            }), H.each(f.concat(p), o), E = u, P = c, O = d, I = h, H.each(f, function(t) {
                                E += t.width
                            }), H.each(p, function(t) {
                                P += t.width
                            }), H.each(g, function(t) {
                                O += t.height
                            }), H.each(m, function(t) {
                                I += t.height
                            });
                        var L = Math.max(M - E, 0);
                        E += L, P += Math.max(T - P, 0);
                        var z = Math.max(D - O, 0);
                        O += z, I += Math.max(A - I, 0);
                        var N = t - O - I,
                            F = n - E - P;
                        F === S && N === k || (H.each(f, function(t) {
                            t.height = N
                        }), H.each(p, function(t) {
                            t.height = N
                        }), H.each(g, function(t) {
                            t.fullWidth || (t.width = F)
                        }), H.each(m, function(t) {
                            t.fullWidth || (t.width = F)
                        }), k = N, S = F);
                        var R = u + L,
                            j = d + z;
                        H.each(f.concat(g), a), R += S, j += k, H.each(p, a), H.each(m, a), e.chartArea = {
                            left: E,
                            top: O,
                            right: E + S,
                            bottom: O + k
                        }, H.each(v, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(S, k)
                        })
                    }
                }
            }
        }, {
            45: 45
        }],
        31: [function(t, e) {
            "use strict";
            var a = t(25),
                s = t(45);
            a._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function(t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function(t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }), this._cacheId++
                },
                unregister: function(t) {
                    var n = this._plugins;
                    [].concat(t).forEach(function(t) {
                        var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                    }), this._cacheId++
                },
                clear: function() {
                    this._plugins = [], this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(t, e, n) {
                    var i, r, o, a, s, l = this.descriptors(t),
                        u = l.length;
                    for (i = 0; i < u; ++i)
                        if ("function" == typeof(s = (o = (r = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
                    return !0
                },
                descriptors: function(t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var i = [],
                        r = [],
                        n = t && t.config || {},
                        o = n.options && n.options.plugins || {};
                    return this._plugins.concat(n.plugins || []).forEach(function(t) {
                        if (-1 === i.indexOf(t)) {
                            var e = t.id,
                                n = o[e];
                            !1 !== n && (!0 === n && (n = s.clone(a.global.plugins[e])), i.push(t), r.push({
                                plugin: t,
                                options: n || {}
                            }))
                        }
                    }), e.descriptors = r, e.id = this._cacheId, r
                },
                _invalidate: function(t) {
                    delete t.$plugins
                }
            }
        }, {
            25: 25,
            45: 45
        }],
        32: [function(t, e) {
            "use strict";

            function k(t) {
                var e, n, i = [];
                for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
                return i
            }

            function H(t, e, n) {
                var i = t.getPixelForTick(e);
                return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
            }
            var x = t(25),
                n = t(26),
                B = t(45),
                i = t(34);
            x._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: i.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function(t) {
                function w(t, e, n) {
                    return B.isArray(e) ? B.longestText(t, n, e) : t.measureText(e).width
                }

                function _(t) {
                    var e = B.valueOrDefault,
                        n = x.global,
                        i = e(t.fontSize, n.defaultFontSize),
                        r = e(t.fontStyle, n.defaultFontStyle),
                        o = e(t.fontFamily, n.defaultFontFamily);
                    return {
                        size: i,
                        style: r,
                        family: o,
                        font: B.fontString(i, r, o)
                    }
                }

                function S(t) {
                    return B.options.toLineHeight(B.valueOrDefault(t.lineHeight, 1.2), B.valueOrDefault(t.fontSize, x.global.defaultFontSize))
                }
                t.Scale = n.extend({
                    getPadding: function() {
                        var t = this;
                        return {
                            left: t.paddingLeft || 0,
                            top: t.paddingTop || 0,
                            right: t.paddingRight || 0,
                            bottom: t.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {
                                display: !1
                            }), !1 === t.major && (t.major = {
                                display: !1
                            }), t) "major" !== e && "minor" !== e && ("undefined" == typeof t.minor[e] && (t.minor[e] = t[e]), "undefined" == typeof t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function() {
                        B.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, n) {
                        var i, r, o, a, s, l, u = this;
                        for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = B.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, n), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), o = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), i = 0, r = (u.ticks = o).length; i < r; ++i) a = o[i], (l = s[i]) ? l.label = a : s.push(l = {
                            label: a,
                            major: !1
                        });
                        return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                    },
                    afterUpdate: function() {
                        B.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        B.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        B.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        B.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: B.noop,
                    afterDataLimits: function() {
                        B.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        B.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: B.noop,
                    afterBuildTicks: function() {
                        B.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        B.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        B.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        B.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options.ticks,
                            i = k(t._ticks),
                            r = _(n);
                        e.font = r.font;
                        var o = n.minRotation || 0;
                        if (i.length && t.options.display && t.isHorizontal())
                            for (var a, s = B.longestText(e, r.font, i, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u < l && o < n.maxRotation;) {
                                var c = B.toRadians(o);
                                if (a = Math.cos(c), Math.sin(c) * s > t.maxHeight) {
                                    o--;
                                    break
                                }
                                o++, l = a * s
                            }
                        t.labelRotation = o
                    },
                    afterCalculateTickRotation: function() {
                        B.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        B.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            e = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            n = k(t._ticks),
                            i = t.options,
                            r = i.ticks,
                            o = i.scaleLabel,
                            a = i.gridLines,
                            s = i.display,
                            l = t.isHorizontal(),
                            u = _(r),
                            c = i.gridLines.tickMarkLength;
                        if (e.width = l ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && a.drawTicks ? c : 0, e.height = l ? s && a.drawTicks ? c : 0 : t.maxHeight, o.display && s) {
                            var d = S(o) + B.options.toPadding(o.padding).height;
                            l ? e.height += d : e.width += d
                        }
                        if (r.display && s) {
                            var h = B.longestText(t.ctx, u.font, n, t.longestTextCache),
                                f = B.numberOfLabelLines(n),
                                p = .5 * u.size,
                                g = t.options.ticks.padding;
                            if (l) {
                                t.longestLabelWidth = h;
                                var m = B.toRadians(t.labelRotation),
                                    v = Math.cos(m),
                                    y = Math.sin(m) * h + u.size * f + p * (f - 1) + p;
                                e.height = Math.min(t.maxHeight, e.height + y + g), t.ctx.font = u.font;
                                var b = w(t.ctx, n[0], u.font),
                                    x = w(t.ctx, n[n.length - 1], u.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === i.position ? v * b + 3 : v * p + 3, t.paddingRight = "bottom" === i.position ? v * p + 3 : v * x + 3) : (t.paddingLeft = b / 2 + 3, t.paddingRight = x / 2 + 3)
                            } else r.mirror ? h = 0 : h += g + p, e.width = Math.min(t.maxWidth, e.width + h), t.paddingTop = u.size / 2, t.paddingBottom = u.size / 2
                        }
                        t.handleMargins(), t.width = e.width, t.height = e.height
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function() {
                        B.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (B.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (t.x !== undefined) return this.getRightValue(t.x)
                            } else if (t.y !== undefined) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: B.noop,
                    getPixelForValue: B.noop,
                    getValueForPixel: B.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            n = e.options.offset;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                r = i * t + e.paddingLeft;
                            n && (r += i / 2);
                            var o = e.left + Math.round(r);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        var a = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (a / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                i = e.left + Math.round(n);
                            return i += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this,
                            e = t.min,
                            n = t.max;
                        return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : 0 < e && 0 < n ? e : 0
                    },
                    _autoSkip: function(t) {
                        var e, n, i, r, o = this,
                            a = o.isHorizontal(),
                            s = o.options.ticks.minor,
                            l = t.length,
                            u = B.toRadians(o.labelRotation),
                            c = Math.cos(u),
                            d = o.longestLabelWidth * c,
                            h = [];
                        for (s.maxTicksLimit && (r = s.maxTicksLimit), a && (e = !1, (d + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((d + s.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), r && r < l && (e = Math.max(e, Math.floor(l / r)))), n = 0; n < l; n++) i = t[n], (1 < e && 0 < n % e || n % e == 0 && l <= n + e) && n !== l - 1 && delete i.label, h.push(i);
                        return h
                    },
                    draw: function(C) {
                        var M = this,
                            T = M.options;
                        if (T.display) {
                            var a = M.ctx,
                                D = x.global,
                                A = T.ticks.minor,
                                t = T.ticks.major || A,
                                E = T.gridLines,
                                e = T.scaleLabel,
                                P = 0 !== M.labelRotation,
                                O = M.isHorizontal(),
                                I = A.autoSkip ? M._autoSkip(M.getTicks()) : M.getTicks(),
                                s = B.valueOrDefault(A.fontColor, D.defaultFontColor),
                                l = _(A),
                                u = B.valueOrDefault(t.fontColor, D.defaultFontColor),
                                c = _(t),
                                L = E.drawTicks ? E.tickMarkLength : 0,
                                n = B.valueOrDefault(e.fontColor, D.defaultFontColor),
                                i = _(e),
                                r = B.options.toPadding(e.padding),
                                z = B.toRadians(M.labelRotation),
                                N = [],
                                F = M.options.gridLines.lineWidth,
                                R = "right" === T.position ? M.right : M.right - F - L,
                                j = "right" === T.position ? M.right + L : M.right,
                                $ = "bottom" === T.position ? M.top + F : M.bottom - L - F,
                                W = "bottom" === T.position ? M.top + F + L : M.bottom + F;
                            if (B.each(I, function(t, e) {
                                    if (!B.isNullOrUndef(t.label)) {
                                        var n, i, r, o, a, s, l, u, c, d, h, f, p, g, m = t.label;
                                        e === M.zeroLineIndex && T.offset === E.offsetGridLines ? (n = E.zeroLineWidth, i = E.zeroLineColor, r = E.zeroLineBorderDash, o = E.zeroLineBorderDashOffset) : (n = B.valueAtIndexOrDefault(E.lineWidth, e), i = B.valueAtIndexOrDefault(E.color, e), r = B.valueOrDefault(E.borderDash, D.borderDash), o = B.valueOrDefault(E.borderDashOffset, D.borderDashOffset));
                                        var v = "middle",
                                            y = "middle",
                                            b = A.padding;
                                        if (O) {
                                            var x = L + b;
                                            "bottom" === T.position ? (y = P ? "middle" : "top", v = P ? "right" : "center", g = M.top + x) : (y = P ? "middle" : "bottom", v = P ? "left" : "center", g = M.bottom - x);
                                            var w = H(M, e, E.offsetGridLines && 1 < I.length);
                                            w < M.left && (i = "rgba(0,0,0,0)"), w += B.aliasPixel(n), p = M.getPixelForTick(e) + A.labelOffset, a = l = c = h = w, s = $, u = W, d = C.top, f = C.bottom + F
                                        } else {
                                            var _, S = "left" === T.position;
                                            A.mirror ? (v = S ? "left" : "right", _ = b) : (v = S ? "right" : "left", _ = L + b), p = S ? M.right - _ : M.left + _;
                                            var k = H(M, e, E.offsetGridLines && 1 < I.length);
                                            k < M.top && (i = "rgba(0,0,0,0)"), k += B.aliasPixel(n), g = M.getPixelForTick(e) + A.labelOffset, a = R, l = j, c = C.left, h = C.right + F, s = u = d = f = k
                                        }
                                        N.push({
                                            tx1: a,
                                            ty1: s,
                                            tx2: l,
                                            ty2: u,
                                            x1: c,
                                            y1: d,
                                            x2: h,
                                            y2: f,
                                            labelX: p,
                                            labelY: g,
                                            glWidth: n,
                                            glColor: i,
                                            glBorderDash: r,
                                            glBorderDashOffset: o,
                                            rotation: -1 * z,
                                            label: m,
                                            major: t.major,
                                            textBaseline: y,
                                            textAlign: v
                                        })
                                    }
                                }), B.each(N, function(t) {
                                    if (E.display && (a.save(), a.lineWidth = t.glWidth, a.strokeStyle = t.glColor, a.setLineDash && (a.setLineDash(t.glBorderDash), a.lineDashOffset = t.glBorderDashOffset), a.beginPath(), E.drawTicks && (a.moveTo(t.tx1, t.ty1), a.lineTo(t.tx2, t.ty2)), E.drawOnChartArea && (a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2)), a.stroke(), a.restore()), A.display) {
                                        a.save(), a.translate(t.labelX, t.labelY), a.rotate(t.rotation), a.font = t.major ? c.font : l.font, a.fillStyle = t.major ? u : s, a.textBaseline = t.textBaseline, a.textAlign = t.textAlign;
                                        var e = t.label;
                                        if (B.isArray(e))
                                            for (var n = e.length, i = 1.5 * l.size, r = M.isHorizontal() ? 0 : -i * (n - 1) / 2, o = 0; o < n; ++o) a.fillText("" + e[o], 0, r), r += i;
                                        else a.fillText(e, 0, 0);
                                        a.restore()
                                    }
                                }), e.display) {
                                var o, d, h = 0,
                                    f = S(e) / 2;
                                if (O) o = M.left + (M.right - M.left) / 2, d = "bottom" === T.position ? M.bottom - f - r.bottom : M.top + f + r.top;
                                else {
                                    var p = "left" === T.position;
                                    o = p ? M.left + f + r.top : M.right - f - r.top, d = M.top + (M.bottom - M.top) / 2, h = p ? -.5 * Math.PI : .5 * Math.PI
                                }
                                a.save(), a.translate(o, d), a.rotate(h), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = n, a.font = i.font, a.fillText(e.labelString, 0, 0), a.restore()
                            }
                            if (E.drawBorder) {
                                a.lineWidth = B.valueAtIndexOrDefault(E.lineWidth, 0), a.strokeStyle = B.valueAtIndexOrDefault(E.color, 0);
                                var g = M.left,
                                    m = M.right + F,
                                    v = M.top,
                                    y = M.bottom + F,
                                    b = B.aliasPixel(a.lineWidth);
                                O ? (v = y = "top" === T.position ? M.bottom : M.top, v += b, y += b) : (g = m = "left" === T.position ? M.right : M.left, g += b, m += b), a.beginPath(), a.moveTo(g, v), a.lineTo(m, y), a.stroke()
                            }
                        }
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            34: 34,
            45: 45
        }],
        33: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(45),
                r = t(30);
            e.exports = function(t) {
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, e, n) {
                        this.constructors[t] = e, this.defaults[t] = i.clone(n)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : undefined
                    },
                    getScaleDefaults: function(t) {
                        return this.defaults.hasOwnProperty(t) ? i.merge({}, [n.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function(t, e) {
                        var n = this;
                        n.defaults.hasOwnProperty(t) && (n.defaults[t] = i.extend(n.defaults[t], e))
                    },
                    addScalesToLayout: function(e) {
                        i.each(e.scales, function(t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, r.addBox(e, t)
                        })
                    }
                }
            }
        }, {
            25: 25,
            30: 30,
            45: 45
        }],
        34: [function(t, e) {
            "use strict";
            var s = t(45);
            e.exports = {
                formatters: {
                    values: function(t) {
                        return s.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, n) {
                        var i = 3 < n.length ? n[2] - n[1] : n[1] - n[0];
                        1 < Math.abs(i) && t !== Math.floor(t) && (i = t - Math.floor(t));
                        var r = s.log10(Math.abs(i)),
                            o = "";
                        if (0 !== t) {
                            var a = -1 * Math.floor(r);
                            a = Math.max(Math.min(a, 20), 0), o = t.toFixed(a)
                        } else o = "0";
                        return o
                    },
                    logarithmic: function(t, e, n) {
                        var i = t / Math.pow(10, Math.floor(s.log10(t)));
                        return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            45: 45
        }],
        35: [function(t, e) {
            "use strict";
            var i = t(25),
                n = t(26),
                _ = t(45);
            i._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: _.noop,
                        title: function(t, e) {
                            var n = "",
                                i = e.labels,
                                r = i ? i.length : 0;
                            if (0 < t.length) {
                                var o = t[0];
                                o.xLabel ? n = o.xLabel : 0 < r && o.index < r && (n = i[o.index])
                            }
                            return n
                        },
                        afterTitle: _.noop,
                        beforeBody: _.noop,
                        beforeLabel: _.noop,
                        label: function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "), n += t.yLabel
                        },
                        labelColor: function(t, e) {
                            var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: _.noop,
                        afterBody: _.noop,
                        beforeFooter: _.noop,
                        footer: _.noop,
                        afterFooter: _.noop
                    }
                }
            }), e.exports = function(m) {
                function h(t, e) {
                    var n = _.color(t);
                    return n.alpha(e * n.alpha()).rgbaString()
                }

                function a(t, e) {
                    return e && (_.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function v(t) {
                    var e = t._xScale,
                        n = t._yScale || t._scale,
                        i = t._index,
                        r = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(i, r) : "",
                        yLabel: n ? n.getLabelForIndex(i, r) : "",
                        index: i,
                        datasetIndex: r,
                        x: t._model.x,
                        y: t._model.y
                    }
                }

                function y(t) {
                    var e = i.global,
                        n = _.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                function b(t, e) {
                    var n = t._chart.ctx,
                        i = 2 * e.yPadding,
                        r = 0,
                        o = e.body,
                        a = o.reduce(function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                    a += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length,
                        l = e.footer.length,
                        u = e.titleFontSize,
                        c = e.bodyFontSize,
                        d = e.footerFontSize;
                    i += s * u, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += a * c, i += a ? (a - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * d, i += l ? (l - 1) * e.footerSpacing : 0;
                    var h = 0,
                        f = function(t) {
                            r = Math.max(r, n.measureText(t).width + h)
                        };
                    return n.font = _.fontString(u, e._titleFontStyle, e._titleFontFamily), _.each(e.title, f), n.font = _.fontString(c, e._bodyFontStyle, e._bodyFontFamily), _.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? c + 2 : 0, _.each(o, function(t) {
                        _.each(t.before, f), _.each(t.lines, f), _.each(t.after, f)
                    }), h = 0, n.font = _.fontString(d, e._footerFontStyle, e._footerFontFamily), _.each(e.footer, f), {
                        width: r += 2 * e.xPadding,
                        height: i
                    }
                }

                function x(t, e) {
                    var n, i, r, o, a, s = t._model,
                        l = t._chart,
                        u = t._chart.chartArea,
                        c = "center",
                        d = "center";
                    s.y < e.height ? d = "top" : s.y > l.height - e.height && (d = "bottom");
                    var h = (u.left + u.right) / 2,
                        f = (u.top + u.bottom) / 2;
                    "center" === d ? (n = function(t) {
                        return t <= h
                    }, i = function(t) {
                        return h < t
                    }) : (n = function(t) {
                        return t <= e.width / 2
                    }, i = function(t) {
                        return t >= l.width - e.width / 2
                    }), r = function(t) {
                        return t + e.width + s.caretSize + s.caretPadding > l.width
                    }, o = function(t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0
                    }, a = function(t) {
                        return t <= f ? "top" : "bottom"
                    }, n(s.x) ? (c = "left", r(s.x) && (c = "center", d = a(s.y))) : i(s.x) && (c = "right", o(s.x) && (c = "center", d = a(s.y)));
                    var p = t._options;
                    return {
                        xAlign: p.xAlign ? p.xAlign : c,
                        yAlign: p.yAlign ? p.yAlign : d
                    }
                }

                function w(t, e, n, i) {
                    var r = t.x,
                        o = t.y,
                        a = t.caretSize,
                        s = t.caretPadding,
                        l = t.cornerRadius,
                        u = n.xAlign,
                        c = n.yAlign,
                        d = a + s,
                        h = l + s;
                    return "right" === u ? r -= e.width : "center" === u && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === c ? o += d : o -= "bottom" === c ? e.height + d : e.height / 2, "center" === c ? "left" === u ? r += d : "right" === u && (r -= d) : "left" === u ? r -= h : "right" === u && (r += h), {
                        x: r,
                        y: o
                    }
                }
                m.Tooltip = n.extend({
                    initialize: function() {
                        this._model = y(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this,
                            e = t._options.callbacks,
                            n = e.beforeTitle.apply(t, arguments),
                            i = e.title.apply(t, arguments),
                            r = e.afterTitle.apply(t, arguments),
                            o = [];
                        return o = a(o = a(o = a(o, n), i), r)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return _.isArray(t) ? t : t !== undefined ? [t] : []
                    },
                    getBody: function(t, n) {
                        var i = this,
                            r = i._options.callbacks,
                            o = [];
                        return _.each(t, function(t) {
                            var e = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            a(e.before, r.beforeLabel.call(i, t, n)), a(e.lines, r.label.call(i, t, n)), a(e.after, r.afterLabel.call(i, t, n)), o.push(e)
                        }), o
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return _.isArray(t) ? t : t !== undefined ? [t] : []
                    },
                    getFooter: function() {
                        var t = this,
                            e = t._options.callbacks,
                            n = e.beforeFooter.apply(t, arguments),
                            i = e.footer.apply(t, arguments),
                            r = e.afterFooter.apply(t, arguments),
                            o = [];
                        return o = a(o = a(o = a(o, n), i), r)
                    },
                    update: function(t) {
                        var e, n, i = this,
                            r = i._options,
                            o = i._model,
                            a = i._model = y(r),
                            s = i._active,
                            l = i._data,
                            u = {
                                xAlign: o.xAlign,
                                yAlign: o.yAlign
                            },
                            c = {
                                x: o.x,
                                y: o.y
                            },
                            d = {
                                width: o.width,
                                height: o.height
                            },
                            h = {
                                x: o.caretX,
                                y: o.caretY
                            };
                        if (s.length) {
                            a.opacity = 1;
                            var f = [],
                                p = [];
                            h = m.Tooltip.positioners[r.position].call(i, s, i._eventPosition);
                            var g = [];
                            for (e = 0, n = s.length; e < n; ++e) g.push(v(s[e]));
                            r.filter && (g = g.filter(function(t) {
                                return r.filter(t, l)
                            })), r.itemSort && (g = g.sort(function(t, e) {
                                return r.itemSort(t, e, l)
                            })), _.each(g, function(t) {
                                f.push(r.callbacks.labelColor.call(i, t, i._chart)), p.push(r.callbacks.labelTextColor.call(i, t, i._chart))
                            }), a.title = i.getTitle(g, l), a.beforeBody = i.getBeforeBody(g, l), a.body = i.getBody(g, l), a.afterBody = i.getAfterBody(g, l), a.footer = i.getFooter(g, l), a.x = Math.round(h.x), a.y = Math.round(h.y), a.caretPadding = r.caretPadding, a.labelColors = f, a.labelTextColors = p, a.dataPoints = g, c = w(a, d = b(this, a), u = x(this, d), i._chart)
                        } else a.opacity = 0;
                        return a.xAlign = u.xAlign, a.yAlign = u.yAlign, a.x = c.x, a.y = c.y, a.width = d.width, a.height = d.height, a.caretX = h.x, a.caretY = h.y, i._model = a, t && r.custom && r.custom.call(i, a), i
                    },
                    drawCaret: function(t, e) {
                        var n = this._chart.ctx,
                            i = this._view,
                            r = this.getCaretPosition(t, e, i);
                        n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
                    },
                    getCaretPosition: function(t, e, n) {
                        var i, r, o, a, s, l, u = n.caretSize,
                            c = n.cornerRadius,
                            d = n.xAlign,
                            h = n.yAlign,
                            f = t.x,
                            p = t.y,
                            g = e.width,
                            m = e.height;
                        if ("center" === h) s = p + m / 2, "left" === d ? (r = (i = f) - u, o = i, a = s + u, l = s - u) : (r = (i = f + g) + u, o = i, a = s - u, l = s + u);
                        else if (i = "left" === d ? (r = f + c + u) - u : "right" === d ? (r = f + g - c - u) - u : (r = n.caretX) - u, o = r + u, "top" === h) s = (a = p) - u, l = a;
                        else {
                            s = (a = p + m) + u, l = a;
                            var v = o;
                            o = i, i = v
                        }
                        return {
                            x1: i,
                            x2: r,
                            x3: o,
                            y1: a,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, e, n, i) {
                        var r = e.title;
                        if (r.length) {
                            n.textAlign = e._titleAlign, n.textBaseline = "top";
                            var o, a, s = e.titleFontSize,
                                l = e.titleSpacing;
                            for (n.fillStyle = h(e.titleFontColor, i), n.font = _.fontString(s, e._titleFontStyle, e._titleFontFamily), o = 0, a = r.length; o < a; ++o) n.fillText(r[o], t.x, t.y), t.y += s + l, o + 1 === r.length && (t.y += e.titleMarginBottom - l)
                        }
                    },
                    drawBody: function(i, r, o, a) {
                        var s = r.bodyFontSize,
                            e = r.bodySpacing,
                            t = r.body;
                        o.textAlign = r._bodyAlign, o.textBaseline = "top", o.font = _.fontString(s, r._bodyFontStyle, r._bodyFontFamily);
                        var n = 0,
                            l = function(t) {
                                o.fillText(t, i.x + n, i.y), i.y += s + e
                            };
                        o.fillStyle = h(r.bodyFontColor, a), _.each(r.beforeBody, l);
                        var u = r.displayColors;
                        n = u ? s + 2 : 0, _.each(t, function(t, e) {
                            var n = h(r.labelTextColors[e], a);
                            o.fillStyle = n, _.each(t.before, l), _.each(t.lines, function(t) {
                                u && (o.fillStyle = h(r.legendColorBackground, a), o.fillRect(i.x, i.y, s, s), o.lineWidth = 1, o.strokeStyle = h(r.labelColors[e].borderColor, a), o.strokeRect(i.x, i.y, s, s), o.fillStyle = h(r.labelColors[e].backgroundColor, a), o.fillRect(i.x + 1, i.y + 1, s - 2, s - 2), o.fillStyle = n), l(t)
                            }), _.each(t.after, l)
                        }), n = 0, _.each(r.afterBody, l), i.y -= e
                    },
                    drawFooter: function(e, n, i, t) {
                        var r = n.footer;
                        r.length && (e.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = h(n.footerFontColor, t), i.font = _.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), _.each(r, function(t) {
                            i.fillText(t, e.x, e.y), e.y += n.footerFontSize + n.footerSpacing
                        }))
                    },
                    drawBackground: function(t, e, n, i, r) {
                        n.fillStyle = h(e.backgroundColor, r), n.strokeStyle = h(e.borderColor, r), n.lineWidth = e.borderWidth;
                        var o = e.xAlign,
                            a = e.yAlign,
                            s = t.x,
                            l = t.y,
                            u = i.width,
                            c = i.height,
                            d = e.cornerRadius;
                        n.beginPath(), n.moveTo(s + d, l), "top" === a && this.drawCaret(t, i), n.lineTo(s + u - d, l), n.quadraticCurveTo(s + u, l, s + u, l + d), "center" === a && "right" === o && this.drawCaret(t, i), n.lineTo(s + u, l + c - d), n.quadraticCurveTo(s + u, l + c, s + u - d, l + c), "bottom" === a && this.drawCaret(t, i), n.lineTo(s + d, l + c), n.quadraticCurveTo(s, l + c, s, l + c - d), "center" === a && "left" === o && this.drawCaret(t, i), n.lineTo(s, l + d), n.quadraticCurveTo(s, l, s + d, l), n.closePath(), n.fill(), 0 < e.borderWidth && n.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var n = {
                                    width: e.width,
                                    height: e.height
                                },
                                i = {
                                    x: e.x,
                                    y: e.y
                                },
                                r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && o && (this.drawBackground(i, e, t, n, r), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, r), this.drawBody(i, e, t, r), this.drawFooter(i, e, t, r))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            n = e._options,
                            i = !1;
                        return e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), (i = !_.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active, (n.enabled || n.custom) && (e._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, e.update(!0), e.pivot())), i
                    }
                }), m.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, n, i = 0,
                            r = 0,
                            o = 0;
                        for (e = 0, n = t.length; e < n; ++e) {
                            var a = t[e];
                            if (a && a.hasValue()) {
                                var s = a.tooltipPosition();
                                i += s.x, r += s.y, ++o
                            }
                        }
                        return {
                            x: Math.round(i / o),
                            y: Math.round(r / o)
                        }
                    },
                    nearest: function(t, e) {
                        var n, i, r, o = e.x,
                            a = e.y,
                            s = Number.POSITIVE_INFINITY;
                        for (n = 0, i = t.length; n < i; ++n) {
                            var l = t[n];
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(),
                                    c = _.distanceBetweenPoints(e, u);
                                c < s && (s = c, r = l)
                            }
                        }
                        if (r) {
                            var d = r.tooltipPosition();
                            o = d.x, a = d.y
                        }
                        return {
                            x: o,
                            y: a
                        }
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        36: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                c = t(45);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = i.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var n = this._view;
                    if (n) {
                        for (var i = c.getAngleFromPoint(n, {
                                x: t,
                                y: e
                            }), r = i.angle, o = i.distance, a = n.startAngle, s = n.endAngle; s < a;) s += 2 * Math.PI;
                        for (; s < r;) r -= 2 * Math.PI;
                        for (; r < a;) r += 2 * Math.PI;
                        var l = a <= r && r <= s,
                            u = o >= n.innerRadius && o <= n.outerRadius;
                        return l && u
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        n = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * n,
                        y: t.y + Math.sin(e) * n
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        n = e.startAngle,
                        i = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        37: [function(t, e) {
            "use strict";
            var n = t(25),
                i = t(26),
                d = t(45),
                h = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: h.defaultColor,
                        borderWidth: 3,
                        borderColor: h.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = i.extend({
                draw: function() {
                    var t, e, n, i, r = this,
                        o = r._view,
                        a = r._chart.ctx,
                        s = o.spanGaps,
                        l = r._children.slice(),
                        u = h.elements.line,
                        c = -1;
                    for (r._loop && l.length && l.push(l[0]), a.save(), a.lineCap = o.borderCapStyle || u.borderCapStyle, a.setLineDash && a.setLineDash(o.borderDash || u.borderDash), a.lineDashOffset = o.borderDashOffset || u.borderDashOffset, a.lineJoin = o.borderJoinStyle || u.borderJoinStyle, a.lineWidth = o.borderWidth || u.borderWidth, a.strokeStyle = o.borderColor || h.defaultColor, a.beginPath(), c = -1, t = 0; t < l.length; ++t) e = l[t], n = d.previousItem(l, t), i = e._view, 0 === t ? i.skip || (a.moveTo(i.x, i.y), c = t) : (n = -1 === c ? n : l[c], i.skip || (c !== t - 1 && !s || -1 === c ? a.moveTo(i.x, i.y) : d.canvas.lineTo(a, n._view, e._view), c = t));
                    a.stroke(), a.restore()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        38: [function(t, e) {
            "use strict";

            function n(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }

            function i(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
            }
            var d = t(25),
                r = t(26),
                h = t(45),
                f = d.global.defaultColor;
            d._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: f,
                        borderColor: f,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = r.extend({
                inRange: function(t, e) {
                    var n = this._view;
                    return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
                },
                inLabelRange: n,
                inXRange: n,
                inYRange: i,
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view,
                        n = this._model,
                        i = this._chart.ctx,
                        r = e.pointStyle,
                        o = e.radius,
                        a = e.x,
                        s = e.y,
                        l = h.color,
                        u = 1.01,
                        c = 0;
                    e.skip || (i.strokeStyle = e.borderColor || f, i.lineWidth = h.valueOrDefault(e.borderWidth, d.global.elements.point.borderWidth), i.fillStyle = e.backgroundColor || f, t !== undefined && (n.x < t.left || t.right * u < n.x || n.y < t.top || t.bottom * u < n.y) && (n.x < t.left ? c = (a - n.x) / (t.left - n.x) : t.right * u < n.x ? c = (n.x - a) / (n.x - t.right) : n.y < t.top ? c = (s - n.y) / (t.top - n.y) : t.bottom * u < n.y && (c = (n.y - s) / (n.y - t.bottom)), c = Math.round(100 * c) / 100, i.strokeStyle = l(i.strokeStyle).alpha(c).rgbString(), i.fillStyle = l(i.fillStyle).alpha(c).rgbString()), h.canvas.drawPoint(i, r, o, a, s))
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        39: [function(t, e) {
            "use strict";

            function l(t) {
                return t._view.width !== undefined
            }

            function r(t) {
                var e, n, i, r, o = t._view;
                if (l(t)) {
                    var a = o.width / 2;
                    e = o.x - a, n = o.x + a, i = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
                } else {
                    var s = o.height / 2;
                    e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - s, r = o.y + s
                }
                return {
                    left: e,
                    top: i,
                    right: n,
                    bottom: r
                }
            }
            var n = t(25),
                i = t(26);
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = i.extend({
                draw: function() {
                    function t(t) {
                        return v[(y + t) % 4]
                    }
                    var e, n, i, r, o, a, s, l = this._chart.ctx,
                        u = this._view,
                        c = u.borderWidth;
                    if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, r = u.y + u.height / 2, o = e < n ? 1 : -1, a = 1, s = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, o = 1, a = (i = u.y) < (r = u.base) ? 1 : -1, s = u.borderSkipped || "bottom"), c) {
                        var d = Math.min(Math.abs(e - n), Math.abs(i - r)),
                            h = (c = d < c ? d : c) / 2,
                            f = e + ("left" !== s ? h * o : 0),
                            p = n + ("right" !== s ? -h * o : 0),
                            g = i + ("top" !== s ? h * a : 0),
                            m = r + ("bottom" !== s ? -h * a : 0);
                        f !== p && (i = g, r = m), g !== m && (e = f, n = p)
                    }
                    l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = c;
                    var v = [
                            [e, r],
                            [e, i],
                            [n, i],
                            [n, r]
                        ],
                        y = ["bottom", "left", "top", "right"].indexOf(s, 0); - 1 === y && (y = 0);
                    var b = t(0);
                    l.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = t(x), l.lineTo(b[0], b[1]);
                    l.fill(), c && l.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var n = !1;
                    if (this._view) {
                        var i = r(this);
                        n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom
                    }
                    return n
                },
                inLabelRange: function(t, e) {
                    var n = this;
                    if (!n._view) return !1;
                    var i = r(n);
                    return l(n) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                },
                inXRange: function(t) {
                    var e = r(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function(t) {
                    var e = r(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function() {
                    var t, e, n = this._view;
                    return l(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            25: 25,
            26: 26
        }],
        40: [function(t, e) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {
            36: 36,
            37: 37,
            38: 38,
            39: 39
        }],
        41: [function(t, e, n) {
            "use strict";
            var i = t(42);
            n = e.exports = {
                clear: function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function(t, e, n, i, r, o) {
                    if (o) {
                        var a = Math.min(o, i / 2),
                            s = Math.min(o, r / 2);
                        t.moveTo(e + a, n), t.lineTo(e + i - a, n), t.quadraticCurveTo(e + i, n, e + i, n + s), t.lineTo(e + i, n + r - s), t.quadraticCurveTo(e + i, n + r, e + i - a, n + r), t.lineTo(e + a, n + r), t.quadraticCurveTo(e, n + r, e, n + r - s), t.lineTo(e, n + s), t.quadraticCurveTo(e, n, e + a, n)
                    } else t.rect(e, n, i, r)
                },
                drawPoint: function(t, e, n, i, r) {
                    var o, a, s, l, u, c;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (e) {
                                default: t.beginPath(),
                                t.arc(i, r, n, 0, 2 * Math.PI),
                                t.closePath(),
                                t.fill();
                                break;
                                case "triangle":
                                        t.beginPath(),
                                    u = (a = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                    t.moveTo(i - a / 2, r + u / 3),
                                    t.lineTo(i + a / 2, r + u / 3),
                                    t.lineTo(i, r - 2 * u / 3),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rect":
                                        c = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.fillRect(i - c, r - c, 2 * c, 2 * c),
                                    t.strokeRect(i - c, r - c, 2 * c, 2 * c);
                                    break;
                                case "rectRounded":
                                        var d = n / Math.SQRT2,
                                        h = i - d,
                                        f = r - d,
                                        p = Math.SQRT2 * n;t.beginPath(),
                                    this.roundedRect(t, h, f, p, p, n / 2),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rectRot":
                                        c = 1 / Math.SQRT2 * n,
                                    t.beginPath(),
                                    t.moveTo(i - c, r),
                                    t.lineTo(i, r + c),
                                    t.lineTo(i + c, r),
                                    t.lineTo(i, r - c),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "cross":
                                        t.beginPath(),
                                    t.moveTo(i, r + n),
                                    t.lineTo(i, r - n),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    t.closePath();
                                    break;
                                case "crossRot":
                                        t.beginPath(),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, r - l),
                                    t.lineTo(i + s, r + l),
                                    t.moveTo(i - s, r + l),
                                    t.lineTo(i + s, r - l),
                                    t.closePath();
                                    break;
                                case "star":
                                        t.beginPath(),
                                    t.moveTo(i, r + n),
                                    t.lineTo(i, r - n),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    s = Math.cos(Math.PI / 4) * n,
                                    l = Math.sin(Math.PI / 4) * n,
                                    t.moveTo(i - s, r - l),
                                    t.lineTo(i + s, r + l),
                                    t.moveTo(i - s, r + l),
                                    t.lineTo(i + s, r - l),
                                    t.closePath();
                                    break;
                                case "line":
                                        t.beginPath(),
                                    t.moveTo(i - n, r),
                                    t.lineTo(i + n, r),
                                    t.closePath();
                                    break;
                                case "dash":
                                        t.beginPath(),
                                    t.moveTo(i, r),
                                    t.lineTo(i + n, r),
                                    t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height)
                },
                clipArea: function(t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function(t) {
                    t.restore()
                },
                lineTo: function(t, e, n, i) {
                    if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
                    n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
                }
            };
            i.clear = n.clear, i.drawRoundedRectangle = function(t) {
                t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath()
            }
        }, {
            42: 42
        }],
        42: [function(t, e) {
            "use strict";
            var n, c = {
                noop: function() {},
                uid: (n = 0, function() {
                    return n++
                }),
                isNullOrUndef: function(t) {
                    return null == t
                },
                isArray: Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function(t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, n) {
                    return c.valueOrDefault(c.isArray(t) ? t[e] : t, n)
                },
                callback: function(t, e, n) {
                    if (t && "function" == typeof t.call) return t.apply(n, e)
                },
                each: function(t, e, n, i) {
                    var r, o, a;
                    if (c.isArray(t))
                        if (o = t.length, i)
                            for (r = o - 1; 0 <= r; r--) e.call(n, t[r], r);
                        else
                            for (r = 0; r < o; r++) e.call(n, t[r], r);
                    else if (c.isObject(t))
                        for (o = (a = Object.keys(t)).length, r = 0; r < o; r++) e.call(n, t[a[r]], a[r])
                },
                arrayEquals: function(t, e) {
                    var n, i, r, o;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (n = 0, i = t.length; n < i; ++n)
                        if (r = t[n], o = e[n], r instanceof Array && o instanceof Array) {
                            if (!c.arrayEquals(r, o)) return !1
                        } else if (r !== o) return !1;
                    return !0
                },
                clone: function(t) {
                    if (c.isArray(t)) return t.map(c.clone);
                    if (c.isObject(t)) {
                        for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) e[n[r]] = c.clone(t[n[r]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, n, i) {
                    var r = e[t],
                        o = n[t];
                    c.isObject(r) && c.isObject(o) ? c.merge(r, o, i) : e[t] = c.clone(o)
                },
                _mergerIf: function(t, e, n) {
                    var i = e[t],
                        r = n[t];
                    c.isObject(i) && c.isObject(r) ? c.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = c.clone(r))
                },
                merge: function(t, e, n) {
                    var i, r, o, a, s, l = c.isArray(e) ? e : [e],
                        u = l.length;
                    if (!c.isObject(t)) return t;
                    for (i = (n = n || {}).merger || c._merger, r = 0; r < u; ++r)
                        if (e = l[r], c.isObject(e))
                            for (s = 0, a = (o = Object.keys(e)).length; s < a; ++s) i(o[s], t, e, n);
                    return t
                },
                mergeIf: function(t, e) {
                    return c.merge(t, e, {
                        merger: c._mergerIf
                    })
                },
                extend: function(n) {
                    for (var t = function(t, e) {
                            n[e] = t
                        }, e = 1, i = arguments.length; e < i; ++e) c.each(arguments[e], t);
                    return n
                },
                inherits: function(t) {
                    var e = this,
                        n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        i = function() {
                            this.constructor = n
                        };
                    return i.prototype = e.prototype, n.prototype = new i, n.extend = c.inherits, t && c.extend(n.prototype, t), n.__super__ = e.prototype, n
                }
            };
            (e.exports = c).callCallback = c.callback, c.indexOf = function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            }, c.getValueOrDefault = c.valueOrDefault, c.getValueAtIndexOrDefault = c.valueAtIndexOrDefault
        }, {}],
        43: [function(t, e) {
            "use strict";
            var n = t(42),
                i = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            n = 0,
                            i = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - i.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * i.easeInBounce(2 * t) : .5 * i.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: i
            }, n.easingEffects = i
        }, {
            42: 42
        }],
        44: [function(t, e) {
            "use strict";
            var a = t(42);
            e.exports = {
                toLineHeight: function(t, e) {
                    var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * e;
                    switch (t = +n[2], n[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, n, i, r;
                    return a.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, {
                        top: e,
                        right: n,
                        bottom: i,
                        left: r,
                        height: e + i,
                        width: r + n
                    }
                },
                resolve: function(t, e, n) {
                    var i, r, o;
                    for (i = 0, r = t.length; i < r; ++i)
                        if ((o = t[i]) !== undefined && (e !== undefined && "function" == typeof o && (o = o(e)), n !== undefined && a.isArray(o) && (o = o[n]), o !== undefined)) return o
                }
            }
        }, {
            42: 42
        }],
        45: [function(t, e) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {
            41: 41,
            42: 42,
            43: 43,
            44: 44
        }],
        46: [function(t, e) {
            e.exports = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        47: [function(t, e) {
            "use strict";

            function s(t, e) {
                var n = g.getStyle(t, e),
                    i = n && n.match(/^(\d+)(\.\d+)?px$/);
                return i ? Number(i[1]) : undefined
            }

            function i(t, e) {
                var n = t.style,
                    i = t.getAttribute("height"),
                    r = t.getAttribute("width");
                if (t[m] = {
                        initial: {
                            height: i,
                            width: r,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", null === r || "" === r) {
                    var o = s(t, "width");
                    o !== undefined && (t.width = o)
                }
                if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var a = s(t, "height");
                        o !== undefined && (t.height = a)
                    }
                return t
            }

            function l(t, e, n) {
                t.addEventListener(e, n, _)
            }

            function o(t, e, n) {
                t.removeEventListener(e, n, _)
            }

            function a(t, e, n, i, r) {
                return {
                    type: t,
                    chart: e,
                    "native": r || null,
                    x: n !== undefined ? n : null,
                    y: i !== undefined ? i : null
                }
            }

            function u(t, e) {
                var n = w[t.type] || t.type,
                    i = g.getRelativePosition(t, e);
                return a(n, e, i.x, i.y, t)
            }

            function c(t, e) {
                var n = !1,
                    i = [];
                return function() {
                    i = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, g.requestAnimFrame.call(window, function() {
                        n = !1, t.apply(e, i)
                    }))
                }
            }

            function d(t) {
                var e = document.createElement("div"),
                    n = v + "size-monitor",
                    i = 1e6,
                    r = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                e.style.cssText = r, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + r + '"><div style="position:absolute;width:' + i + "px;height:" + i + 'px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + r + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                var o = e.childNodes[0],
                    a = e.childNodes[1];
                e._reset = function() {
                    o.scrollLeft = i, o.scrollTop = i, a.scrollLeft = i, a.scrollTop = i
                };
                var s = function() {
                    e._reset(), t()
                };
                return l(o, "scroll", s.bind(o, "expand")), l(a, "scroll", s.bind(a, "shrink")), e
            }

            function h(e, n) {
                var t = e[m] || (e[m] = {}),
                    i = t.renderProxy = function(t) {
                        t.animationName === b && n()
                    };
                g.each(x, function(t) {
                    l(e, t, i)
                }), t.reflow = !!e.offsetParent, e.classList.add(y)
            }

            function r(e) {
                var t = e[m] || {},
                    n = t.renderProxy;
                n && (g.each(x, function(t) {
                    o(e, t, n)
                }), delete t.renderProxy), e.classList.remove(y)
            }

            function f(e, t, n) {
                var i = e[m] || (e[m] = {}),
                    r = i.resizer = d(c(function() {
                        if (i.resizer) return t(a("resize", n))
                    }));
                h(e, function() {
                    if (i.resizer) {
                        var t = e.parentNode;
                        t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset()
                    }
                })
            }

            function p(t) {
                var e = t[m] || {},
                    n = e.resizer;
                delete e.resizer, r(t), n && n.parentNode && n.parentNode.removeChild(n)
            }

            function n(t, e) {
                var n = t._style || document.createElement("style");
                t._style || (e = "/* Chart.js */\n" + e, (t._style = n).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
            }
            var g = t(45),
                m = "$chartjs",
                v = "chartjs-",
                y = v + "render-monitor",
                b = v + "render-animation",
                x = ["animationstart", "webkitAnimationStart"],
                w = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                },
                _ = !! function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("e", null, e)
                    } catch (n) {}
                    return t
                }() && {
                    passive: !0
                };
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var t = "from{opacity:0.99}to{opacity:1}";
                    n(this, "@-webkit-keyframes " + b + "{" + t + "}@keyframes " + b + "{" + t + "}." + y + "{-webkit-animation:" + b + " 0.001s;animation:" + b + " 0.001s;}")
                },
                acquireContext: function(t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var n = t && t.getContext && t.getContext("2d");
                    return n && n.canvas === t ? (i(t, e), n) : null
                },
                releaseContext: function(t) {
                    var n = t.canvas;
                    if (n[m]) {
                        var i = n[m].initial;
                        ["height", "width"].forEach(function(t) {
                            var e = i[t];
                            g.isNullOrUndef(e) ? n.removeAttribute(t) : n.setAttribute(t, e)
                        }), g.each(i.style || {}, function(t, e) {
                            n.style[e] = t
                        }), n.width = n.width, delete n[m]
                    }
                },
                addEventListener: function(e, t, n) {
                    var i = e.canvas;
                    if ("resize" !== t) {
                        var r = n[m] || (n[m] = {});
                        l(i, t, (r.proxies || (r.proxies = {}))[e.id + "_" + t] = function(t) {
                            n(u(t, e))
                        })
                    } else f(i, n, e)
                },
                removeEventListener: function(t, e, n) {
                    var i = t.canvas;
                    if ("resize" !== e) {
                        var r = ((n[m] || {}).proxies || {})[t.id + "_" + e];
                        r && o(i, e, r)
                    } else p(i, n)
                }
            }, g.addEvent = l, g.removeEvent = o
        }, {
            45: 45
        }],
        48: [function(t, e) {
            "use strict";
            var n = t(45),
                i = t(46),
                r = t(47),
                o = r._enabled ? r : i;
            e.exports = n.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, o)
        }, {
            45: 45,
            46: 46,
            47: 47
        }],
        49: [function(t, e) {
            "use strict";
            e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52)
        }, {
            50: 50,
            51: 51,
            52: 52
        }],
        50: [function(t, e) {
            "use strict";

            function u(t, e, n) {
                var i, r = t._model || {},
                    o = r.fill;
                if (o === undefined && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
                if (!0 === o) return "origin";
                if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || n <= i) && i;
                switch (o) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return o;
                    default:
                        return !1
                }
            }

            function c(t) {
                var e, n = t.el._model || {},
                    i = t.el._scale || {},
                    r = t.fill,
                    o = null;
                if (isFinite(r)) return null;
                if ("start" === r ? o = n.scaleBottom === undefined ? i.bottom : n.scaleBottom : "end" === r ? o = n.scaleTop === undefined ? i.top : n.scaleTop : n.scaleZero !== undefined ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), o !== undefined && null !== o) {
                    if (o.x !== undefined && o.y !== undefined) return o;
                    if ("number" == typeof o && isFinite(o)) return {
                        x: (e = i.isHorizontal()) ? o : null,
                        y: e ? null : o
                    }
                }
                return null
            }

            function d(t, e, n) {
                var i, r = t[e].fill,
                    o = [e];
                if (!n) return r;
                for (; !1 !== r && -1 === o.indexOf(r);) {
                    if (!isFinite(r)) return r;
                    if (!(i = t[r])) return !1;
                    if (i.visible) return r;
                    o.push(r), r = i.fill
                }
                return !1
            }

            function h(t) {
                var e = t.fill,
                    n = "dataset";
                return !1 === e ? null : (isFinite(e) || (n = "boundary"), i[n](t))
            }

            function b(t) {
                return t && !t.skip
            }

            function x(t, e, n, i, r) {
                var o;
                if (i && r) {
                    for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) m.canvas.lineTo(t, e[o - 1], e[o]);
                    for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; 0 < o; --o) m.canvas.lineTo(t, n[o], n[o - 1], !0)
                }
            }

            function f(t, e, n, i, r, o) {
                var a, s, l, u, c, d, h, f = e.length,
                    p = i.spanGaps,
                    g = [],
                    m = [],
                    v = 0,
                    y = 0;
                for (t.beginPath(), a = 0, s = f + !!o; a < s; ++a) c = n(u = e[l = a % f]._view, l, i), d = b(u), h = b(c), d && h ? (v = g.push(u), y = m.push(c)) : v && y && (p ? (d && g.push(u), h && m.push(c)) : (x(t, g, m, v, y), v = y = 0, g = [], m = []));
                x(t, g, m, v, y), t.closePath(), t.fillStyle = r, t.fill()
            }
            var p = t(25),
                g = t(40),
                m = t(45);
            p._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var i = {
                dataset: function(t) {
                    var e = t.fill,
                        n = t.chart,
                        i = n.getDatasetMeta(e),
                        r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                        o = r.length || 0;
                    return o ? function(t, e) {
                        return e < o && r[e]._view || null
                    } : null
                },
                boundary: function(t) {
                    var e = t.boundary,
                        n = e ? e.x : null,
                        i = e ? e.y : null;
                    return function(t) {
                        return {
                            x: null === n ? t.x : n,
                            y: null === i ? t.y : i
                        }
                    }
                }
            };
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function(t, e) {
                    var n, i, r, o, a = (t.data.datasets || []).length,
                        s = e.propagate,
                        l = [];
                    for (i = 0; i < a; ++i) o = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof g.Line && (o = {
                        visible: t.isDatasetVisible(i),
                        fill: u(r, i, a),
                        chart: t,
                        el: r
                    }), n.$filler = o, l.push(o);
                    for (i = 0; i < a; ++i)(o = l[i]) && (o.fill = d(l, i, s), o.boundary = c(o), o.mapper = h(o))
                },
                beforeDatasetDraw: function(t, e) {
                    var n = e.meta.$filler;
                    if (n) {
                        var i = t.ctx,
                            r = n.el,
                            o = r._view,
                            a = r._children || [],
                            s = n.mapper,
                            l = o.backgroundColor || p.global.defaultColor;
                        s && l && a.length && (m.canvas.clipArea(i, t.chartArea), f(i, a, s, o, l, r._loop), m.canvas.unclipArea(i))
                    }
                }
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        51: [function(t, e) {
            "use strict";

            function S(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }

            function i(t, e) {
                var n = new a({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                r.configure(t, n, e), r.addBox(t, n), t.legend = n
            }
            var k = t(25),
                n = t(26),
                C = t(45),
                r = t(30),
                o = C.noop;
            k._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var n = e.datasetIndex,
                            i = this.chart,
                            r = i.getDatasetMeta(n);
                        r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(n) {
                            var t = n.data;
                            return C.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                                return {
                                    text: t.label,
                                    fillStyle: C.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !n.isDatasetVisible(e),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: e
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var a = n.extend({
                initialize: function(t) {
                    C.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: o,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: function() {
                    var e = this,
                        n = e.options.labels || {},
                        t = C.callback(n.generateLabels, [e.chart], e) || [];
                    n.filter && (t = t.filter(function(t) {
                        return n.filter(t, e.chart.data)
                    })), e.options.reverse && t.reverse(), e.legendItems = t
                },
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var i = this,
                        t = i.options,
                        r = t.labels,
                        e = t.display,
                        o = i.ctx,
                        n = k.global,
                        a = C.valueOrDefault,
                        s = a(r.fontSize, n.defaultFontSize),
                        l = a(r.fontStyle, n.defaultFontStyle),
                        u = a(r.fontFamily, n.defaultFontFamily),
                        c = C.fontString(s, l, u),
                        d = i.legendHitBoxes = [],
                        h = i.minSize,
                        f = i.isHorizontal();
                    if (f ? (h.width = i.maxWidth, h.height = e ? 10 : 0) : (h.width = e ? 10 : 0, h.height = i.maxHeight), e)
                        if (o.font = c, f) {
                            var p = i.lineWidths = [0],
                                g = i.legendItems.length ? s + r.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", C.each(i.legendItems, function(t, e) {
                                var n = S(r, s) + s / 2 + o.measureText(t.text).width;
                                p[p.length - 1] + n + r.padding >= i.width && (g += s + r.padding, p[p.length] = i.left), d[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: s
                                }, p[p.length - 1] += n + r.padding
                            }), h.height += g
                        } else {
                            var m = r.padding,
                                v = i.columnWidths = [],
                                y = r.padding,
                                b = 0,
                                x = 0,
                                w = s + m;
                            C.each(i.legendItems, function(t, e) {
                                var n = S(r, s) + s / 2 + o.measureText(t.text).width;
                                x + w > h.height && (y += b + r.padding, v.push(b), x = b = 0), b = Math.max(b, n), x += w, d[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: s
                                }
                            }), y += b, v.push(b), h.width += y
                        }
                    i.width = h.width, i.height = h.height
                },
                afterFit: o,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var a = this,
                        l = a.options,
                        s = l.labels,
                        u = k.global,
                        c = u.elements.line,
                        d = a.width,
                        h = a.lineWidths;
                    if (l.display) {
                        var f, p = a.ctx,
                            g = C.valueOrDefault,
                            t = g(s.fontColor, u.defaultFontColor),
                            m = g(s.fontSize, u.defaultFontSize),
                            e = g(s.fontStyle, u.defaultFontStyle),
                            n = g(s.fontFamily, u.defaultFontFamily),
                            i = C.fontString(m, e, n);
                        p.textAlign = "left", p.textBaseline = "middle", p.lineWidth = .5, p.strokeStyle = t, p.fillStyle = t, p.font = i;
                        var v = S(s, m),
                            y = a.legendHitBoxes,
                            b = function(t, e, n) {
                                if (!(isNaN(v) || v <= 0)) {
                                    p.save(), p.fillStyle = g(n.fillStyle, u.defaultColor), p.lineCap = g(n.lineCap, c.borderCapStyle), p.lineDashOffset = g(n.lineDashOffset, c.borderDashOffset), p.lineJoin = g(n.lineJoin, c.borderJoinStyle), p.lineWidth = g(n.lineWidth, c.borderWidth), p.strokeStyle = g(n.strokeStyle, u.defaultColor);
                                    var i = 0 === g(n.lineWidth, c.borderWidth);
                                    if (p.setLineDash && p.setLineDash(g(n.lineDash, c.borderDash)), l.labels && l.labels.usePointStyle) {
                                        var r = m * Math.SQRT2 / 2,
                                            o = r / Math.SQRT2,
                                            a = t + o,
                                            s = e + o;
                                        C.canvas.drawPoint(p, n.pointStyle, r, a, s)
                                    } else i || p.strokeRect(t, e, v, m), p.fillRect(t, e, v, m);
                                    p.restore()
                                }
                            },
                            x = function(t, e, n, i) {
                                var r = m / 2,
                                    o = v + r + t,
                                    a = e + r;
                                p.fillText(n.text, o, a), n.hidden && (p.beginPath(), p.lineWidth = 2, p.moveTo(o, a), p.lineTo(o + i, a), p.stroke())
                            },
                            w = a.isHorizontal();
                        f = w ? {
                            x: a.left + (d - h[0]) / 2,
                            y: a.top + s.padding,
                            line: 0
                        } : {
                            x: a.left + s.padding,
                            y: a.top + s.padding,
                            line: 0
                        };
                        var _ = m + s.padding;
                        C.each(a.legendItems, function(t, e) {
                            var n = p.measureText(t.text).width,
                                i = v + m / 2 + n,
                                r = f.x,
                                o = f.y;
                            w ? d <= r + i && (o = f.y += _, f.line++, r = f.x = a.left + (d - h[f.line]) / 2) : o + _ > a.bottom && (r = f.x = r + a.columnWidths[f.line] + s.padding, o = f.y = a.top + s.padding, f.line++), b(r, o, t), y[e].left = r, y[e].top = o, x(r, o, t, n), w ? f.x += i + s.padding : f.y += _
                        })
                    }
                },
                handleEvent: function(t) {
                    var e = this,
                        n = e.options,
                        i = "mouseup" === t.type ? "click" : t.type,
                        r = !1;
                    if ("mousemove" === i) {
                        if (!n.onHover) return
                    } else {
                        if ("click" !== i) return;
                        if (!n.onClick) return
                    }
                    var o = t.x,
                        a = t.y;
                    if (o >= e.left && o <= e.right && a >= e.top && a <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (o >= u.left && o <= u.left + u.width && a >= u.top && a <= u.top + u.height) {
                                if ("click" === i) {
                                    n.onClick.call(e, t["native"], e.legendItems[l]), r = !0;
                                    break
                                }
                                if ("mousemove" === i) {
                                    n.onHover.call(e, t["native"], e.legendItems[l]), r = !0;
                                    break
                                }
                            }
                        }
                    return r
                }
            });
            e.exports = {
                id: "legend",
                _element: a,
                beforeInit: function(t) {
                    var e = t.options.legend;
                    e && i(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.legend,
                        n = t.legend;
                    e ? (C.mergeIf(e, k.global.legend), n ? (r.configure(t, n, e), n.options = e) : i(t, e)) : n && (r.removeBox(t, n), delete t.legend)
                },
                afterEvent: function(t, e) {
                    var n = t.legend;
                    n && n.handleEvent(e)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        52: [function(t, e) {
            "use strict";

            function i(t, e) {
                var n = new a({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                r.configure(t, n, e), r.addBox(t, n), t.titleBlock = n
            }
            var _ = t(25),
                n = t(26),
                S = t(45),
                r = t(30),
                o = S.noop;
            _._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var a = n.extend({
                initialize: function(t) {
                    var e = this;
                    S.extend(e, t), e.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function(t, e, n) {
                    var i = this;
                    return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: o,
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var t = this,
                        e = S.valueOrDefault,
                        n = t.options,
                        i = n.display,
                        r = e(n.fontSize, _.global.defaultFontSize),
                        o = t.minSize,
                        a = S.isArray(n.text) ? n.text.length : 1,
                        s = S.options.toLineHeight(n.lineHeight, r),
                        l = i ? a * s + 2 * n.padding : 0;
                    t.isHorizontal() ? (o.width = t.maxWidth, o.height = l) : (o.width = l, o.height = t.maxHeight), t.width = o.width, t.height = o.height
                },
                afterFit: o,
                isHorizontal: function() {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function() {
                    var t = this,
                        e = t.ctx,
                        n = S.valueOrDefault,
                        i = t.options,
                        r = _.global;
                    if (i.display) {
                        var o, a, s, l = n(i.fontSize, r.defaultFontSize),
                            u = n(i.fontStyle, r.defaultFontStyle),
                            c = n(i.fontFamily, r.defaultFontFamily),
                            d = S.fontString(l, u, c),
                            h = S.options.toLineHeight(i.lineHeight, l),
                            f = h / 2 + i.padding,
                            p = 0,
                            g = t.top,
                            m = t.left,
                            v = t.bottom,
                            y = t.right;
                        e.fillStyle = n(i.fontColor, r.defaultFontColor), e.font = d, t.isHorizontal() ? (a = m + (y - m) / 2, s = g + f, o = y - m) : (a = "left" === i.position ? m + f : y - f, s = g + (v - g) / 2, o = v - g, p = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, s), e.rotate(p), e.textAlign = "center", e.textBaseline = "middle";
                        var b = i.text;
                        if (S.isArray(b))
                            for (var x = 0, w = 0; w < b.length; ++w) e.fillText(b[w], 0, x, o), x += h;
                        else e.fillText(b, 0, 0, o);
                        e.restore()
                    }
                }
            });
            e.exports = {
                id: "title",
                _element: a,
                beforeInit: function(t) {
                    var e = t.options.title;
                    e && i(t, e)
                },
                beforeUpdate: function(t) {
                    var e = t.options.title,
                        n = t.titleBlock;
                    e ? (S.mergeIf(e, _.global.title), n ? (r.configure(t, n, e), n.options = e) : i(t, e)) : n && (r.removeBox(t, n), delete t.titleBlock)
                }
            }
        }, {
            25: 25,
            26: 26,
            30: 30,
            45: 45
        }],
        53: [function(t, e) {
            "use strict";
            e.exports = function(t) {
                var e = {
                        position: "bottom"
                    },
                    n = t.Scale.extend({
                        getLabels: function() {
                            var t = this.chart.data;
                            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        },
                        determineDataLimits: function() {
                            var t, e = this,
                                n = e.getLabels();
                            e.minIndex = 0, e.maxIndex = n.length - 1, e.options.ticks.min !== undefined && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), e.options.ticks.max !== undefined && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this,
                                i = n.chart.data,
                                r = n.isHorizontal();
                            return i.yLabels && !r ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
                        },
                        getPixelForValue: function(t, e) {
                            var n, i = this,
                                r = i.options.offset,
                                o = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                            if (t !== undefined && null !== t && (n = i.isHorizontal() ? t.x : t.y), n !== undefined || t !== undefined && isNaN(e)) {
                                t = n || t;
                                var a = i.getLabels().indexOf(t);
                                e = -1 !== a ? a : e
                            }
                            if (i.isHorizontal()) {
                                var s = i.width / o,
                                    l = s * (e - i.minIndex);
                                return r && (l += s / 2), i.left + Math.round(l)
                            }
                            var u = i.height / o,
                                c = u * (e - i.minIndex);
                            return r && (c += u / 2), i.top + Math.round(c)
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.options.offset,
                                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                                r = e.isHorizontal(),
                                o = (r ? e.width : e.height) / i;
                            return t -= r ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    });
                t.scaleService.registerScaleType("category", n, e)
            }
        }, {}],
        54: [function(t, e) {
            "use strict";
            var r = t(25),
                d = t(45),
                i = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: i.formatters.linear
                        }
                    },
                    n = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            function a(t) {
                                return e ? t.xAxisID === s.id : t.yAxisID === s.id
                            }
                            var s = this,
                                l = s.options,
                                u = s.chart,
                                t = u.data.datasets,
                                e = s.isHorizontal(),
                                n = 0,
                                i = 1;
                            s.min = null, s.max = null;
                            var r = l.stacked;
                            if (r === undefined && d.each(t, function(t, e) {
                                    if (!r) {
                                        var n = u.getDatasetMeta(e);
                                        u.isDatasetVisible(e) && a(n) && n.stack !== undefined && (r = !0)
                                    }
                                }), l.stacked || r) {
                                var c = {};
                                d.each(t, function(t, e) {
                                    var i = u.getDatasetMeta(e),
                                        n = [i.type, l.stacked === undefined && i.stack === undefined ? e : "", i.stack].join(".");
                                    c[n] === undefined && (c[n] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var r = c[n].positiveValues,
                                        o = c[n].negativeValues;
                                    u.isDatasetVisible(e) && a(i) && d.each(t.data, function(t, e) {
                                        var n = +s.getRightValue(t);
                                        isNaN(n) || i.data[e].hidden || (r[e] = r[e] || 0, o[e] = o[e] || 0, l.relativePoints ? r[e] = 100 : n < 0 ? o[e] += n : r[e] += n)
                                    })
                                }), d.each(c, function(t) {
                                    var e = t.positiveValues.concat(t.negativeValues),
                                        n = d.min(e),
                                        i = d.max(e);
                                    s.min = null === s.min ? n : Math.min(s.min, n), s.max = null === s.max ? i : Math.max(s.max, i)
                                })
                            } else d.each(t, function(t, e) {
                                var i = u.getDatasetMeta(e);
                                u.isDatasetVisible(e) && a(i) && d.each(t.data, function(t, e) {
                                    var n = +s.getRightValue(t);
                                    isNaN(n) || i.data[e].hidden || (null === s.min ? s.min = n : n < s.min && (s.min = n), null === s.max ? s.max = n : n > s.max && (s.max = n))
                                })
                            });
                            s.min = isFinite(s.min) && !isNaN(s.min) ? s.min : n, s.max = isFinite(s.max) && !isNaN(s.max) ? s.max : i, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t, e = this,
                                n = e.options.ticks;
                            if (e.isHorizontal()) t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.width / 50));
                            else {
                                var i = d.valueOrDefault(n.fontSize, r.global.defaultFontSize);
                                t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.height / (2 * i)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e = this,
                                n = e.start,
                                i = +e.getRightValue(t),
                                r = e.end - n;
                            return e.isHorizontal() ? e.left + e.width / r * (i - n) : e.bottom - e.height / r * (i - n)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e.isHorizontal(),
                                i = n ? e.width : e.height,
                                r = (n ? t - e.left : e.bottom - t) / i;
                            return e.start + (e.end - e.start) * r
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", n, e)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        55: [function(t, e) {
            "use strict";

            function o(t, e) {
                var n, i = [];
                if (t.stepSize && 0 < t.stepSize) n = t.stepSize;
                else {
                    var r = c.niceNum(e.max - e.min, !1);
                    n = c.niceNum(r / (t.maxTicks - 1), !0)
                }
                var o = Math.floor(e.min / n) * n,
                    a = Math.ceil(e.max / n) * n;
                t.min && t.max && t.stepSize && c.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (o = t.min, a = t.max);
                var s = (a - o) / n;
                s = c.almostEquals(s, Math.round(s), n / 1e3) ? Math.round(s) : Math.ceil(s);
                var l = 1;
                n < 1 && (l = Math.pow(10, n.toString().length - 2), o = Math.round(o * l) / l, a = Math.round(a * l) / l), i.push(t.min !== undefined ? t.min : o);
                for (var u = 1; u < s; ++u) i.push(Math.round((o + u * n) * l) / l);
                return i.push(t.max !== undefined ? t.max : a), i
            }
            var c = t(45);
            e.exports = function(e) {
                var t = c.noop;
                e.LinearScaleBase = e.Scale.extend({
                    getRightValue: function(t) {
                        return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var n = c.sign(t.min),
                                i = c.sign(t.max);
                            n < 0 && i < 0 ? t.max = 0 : 0 < n && 0 < i && (t.min = 0)
                        }
                        var r = e.min !== undefined || e.suggestedMin !== undefined,
                            o = e.max !== undefined || e.suggestedMax !== undefined;
                        e.min !== undefined ? t.min = e.min : e.suggestedMin !== undefined && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), e.max !== undefined ? t.max = e.max : e.suggestedMax !== undefined && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: t,
                    handleDirectionalChanges: t,
                    buildTicks: function() {
                        var t = this,
                            e = t.options.ticks,
                            n = t.getTickLimit(),
                            i = {
                                maxTicks: n = Math.max(2, n),
                                min: e.min,
                                max: e.max,
                                stepSize: c.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            r = t.ticks = o(i, t);
                        t.handleDirectionalChanges(), t.max = c.max(r), t.min = c.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        }, {
            45: 45
        }],
        56: [function(t, e) {
            "use strict";

            function o(t, e) {
                var n, i, r = [],
                    o = h.valueOrDefault,
                    a = o(t.min, Math.pow(10, Math.floor(h.log10(e.min)))),
                    s = Math.floor(h.log10(e.max)),
                    l = Math.ceil(e.max / Math.pow(10, s));
                0 === a ? (n = Math.floor(h.log10(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(a), a = i * Math.pow(10, n)) : (n = Math.floor(h.log10(a)), i = Math.floor(a / Math.pow(10, n)));
                for (var u = n < 0 ? Math.pow(10, Math.abs(n)) : 1; r.push(a), 10 === ++i && (i = 1, u = 0 <= ++n ? 1 : u), a = Math.round(i * Math.pow(10, n) * u) / u, n < s || n === s && i < l;);
                var c = o(t.max, a);
                return r.push(c), r
            }
            var h = t(45),
                n = t(34);
            e.exports = function(d) {
                var t = {
                        position: "left",
                        ticks: {
                            callback: n.formatters.logarithmic
                        }
                    },
                    e = d.Scale.extend({
                        determineDataLimits: function() {
                            function a(t) {
                                return e ? t.xAxisID === s.id : t.yAxisID === s.id
                            }
                            var s = this,
                                n = s.options,
                                l = s.chart,
                                t = l.data.datasets,
                                e = s.isHorizontal();
                            s.min = null, s.max = null, s.minNotZero = null;
                            var i = n.stacked;
                            if (i === undefined && h.each(t, function(t, e) {
                                    if (!i) {
                                        var n = l.getDatasetMeta(e);
                                        l.isDatasetVisible(e) && a(n) && n.stack !== undefined && (i = !0)
                                    }
                                }), n.stacked || i) {
                                var u = {};
                                h.each(t, function(t, e) {
                                    var r = l.getDatasetMeta(e),
                                        o = [r.type, n.stacked === undefined && r.stack === undefined ? e : "", r.stack].join(".");
                                    l.isDatasetVisible(e) && a(r) && (u[o] === undefined && (u[o] = []), h.each(t.data, function(t, e) {
                                        var n = u[o],
                                            i = +s.getRightValue(t);
                                        isNaN(i) || r.data[e].hidden || i < 0 || (n[e] = n[e] || 0, n[e] += i)
                                    }))
                                }), h.each(u, function(t) {
                                    if (0 < t.length) {
                                        var e = h.min(t),
                                            n = h.max(t);
                                        s.min = null === s.min ? e : Math.min(s.min, e), s.max = null === s.max ? n : Math.max(s.max, n)
                                    }
                                })
                            } else h.each(t, function(t, e) {
                                var i = l.getDatasetMeta(e);
                                l.isDatasetVisible(e) && a(i) && h.each(t.data, function(t, e) {
                                    var n = +s.getRightValue(t);
                                    isNaN(n) || i.data[e].hidden || n < 0 || (null === s.min ? s.min = n : n < s.min && (s.min = n), null === s.max ? s.max = n : n > s.max && (s.max = n), 0 !== n && (null === s.minNotZero || n < s.minNotZero) && (s.minNotZero = n))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = h.valueOrDefault,
                                i = 1,
                                r = 10;
                            t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(h.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(h.log10(t.max)) + 1)) : (t.min = i, t.max = r)), null === t.min && (t.min = Math.pow(10, Math.floor(h.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(h.log10(t.min)) + 1) : r), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(h.log10(t.max))) : t.minNotZero = i)
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                n = !t.isHorizontal(),
                                i = {
                                    min: e.min,
                                    max: e.max
                                },
                                r = t.ticks = o(i, t);
                            t.max = h.max(r), t.min = h.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse()
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), d.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        _getFirstTickValue: function(t) {
                            var e = Math.floor(h.log10(t));
                            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                        },
                        getPixelForValue: function(t) {
                            var e, n, i, r, o, a = this,
                                s = a.options.ticks.reverse,
                                l = h.log10,
                                u = a._getFirstTickValue(a.minNotZero),
                                c = 0;
                            return t = +a.getRightValue(t), s ? (i = a.end, r = a.start, o = -1) : (i = a.start, r = a.end, o = 1), a.isHorizontal() ? (e = a.width, n = s ? a.right : a.left) : (e = a.height, o *= -1, n = s ? a.top : a.bottom), t !== i && (0 === i && (e -= c = h.getValueOrDefault(a.options.ticks.fontSize, d.defaults.global.defaultFontSize), i = u), 0 !== t && (c += e / (l(r) - l(i)) * (l(t) - l(i))), n += o * c), n
                        },
                        getValueForPixel: function(t) {
                            var e, n, i, r, o = this,
                                a = o.options.ticks.reverse,
                                s = h.log10,
                                l = o._getFirstTickValue(o.minNotZero);
                            if (a ? (n = o.end, i = o.start) : (n = o.start, i = o.end), o.isHorizontal() ? (e = o.width, r = a ? o.right - t : t - o.left) : (e = o.height, r = a ? t - o.top : o.bottom - t), r !== n) {
                                if (0 === n) {
                                    var u = h.getValueOrDefault(o.options.ticks.fontSize, d.defaults.global.defaultFontSize);
                                    r -= u, e -= u, n = l
                                }
                                r *= s(i) - s(n), r /= e, r = Math.pow(10, s(n) + r)
                            }
                            return r
                        }
                    });
                d.scaleService.registerScaleType("logarithmic", e, t)
            }
        }, {
            34: 34,
            45: 45
        }],
        57: [function(t, e) {
            "use strict";
            var a = t(25),
                _ = t(45),
                s = t(34);
            e.exports = function(e) {
                function f(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function p(t) {
                    var e = t.options.pointLabels,
                        n = _.valueOrDefault(e.fontSize, w.defaultFontSize),
                        i = _.valueOrDefault(e.fontStyle, w.defaultFontStyle),
                        r = _.valueOrDefault(e.fontFamily, w.defaultFontFamily);
                    return {
                        size: n,
                        style: i,
                        family: r,
                        font: _.fontString(n, i, r)
                    }
                }

                function g(t, e, n) {
                    return _.isArray(n) ? {
                        w: _.longestText(t, t.font, n),
                        h: n.length * e + 1.5 * (n.length - 1) * e
                    } : {
                        w: t.measureText(n).width,
                        h: e
                    }
                }

                function m(t, e, n, i, r) {
                    return t === i || t === r ? {
                        start: e - n / 2,
                        end: e + n / 2
                    } : t < i || r < t ? {
                        start: e - n - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + n + 5
                    }
                }

                function t(t) {
                    var e, n, i, r = p(t),
                        o = Math.min(t.height / 2, t.width / 2),
                        a = {
                            r: t.width,
                            l: 0,
                            t: t.height,
                            b: 0
                        },
                        s = {};
                    t.ctx.font = r.font, t._pointLabelSizes = [];
                    var l = f(t);
                    for (e = 0; e < l; e++) {
                        i = t.getPointPosition(e, o), n = g(t.ctx, r.size, t.pointLabels[e] || ""), t._pointLabelSizes[e] = n;
                        var u = t.getIndexAngle(e),
                            c = _.toDegrees(u) % 360,
                            d = m(c, i.x, n.w, 0, 180),
                            h = m(c, i.y, n.h, 90, 270);
                        d.start < a.l && (a.l = d.start, s.l = u), d.end > a.r && (a.r = d.end, s.r = u), h.start < a.t && (a.t = h.start, s.t = u), h.end > a.b && (a.b = h.end, s.b = u)
                    }
                    t.setReductions(o, a, s)
                }

                function n(t) {
                    var e = Math.min(t.height / 2, t.width / 2);
                    t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
                }

                function v(t) {
                    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                }

                function y(t, e, n, i) {
                    if (_.isArray(e))
                        for (var r = n.y, o = 1.5 * i, a = 0; a < e.length; ++a) t.fillText(e[a], n.x, r), r += o;
                    else t.fillText(e, n.x, n.y)
                }

                function b(t, e, n) {
                    90 === t || 270 === t ? n.y -= e.h / 2 : (270 < t || t < 90) && (n.y -= e.h)
                }

                function i(t) {
                    var e = t.ctx,
                        n = t.options,
                        i = n.angleLines,
                        r = n.pointLabels;
                    e.lineWidth = i.lineWidth, e.strokeStyle = i.color;
                    var o = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                        a = p(t);
                    e.textBaseline = "top";
                    for (var s = f(t) - 1; 0 <= s; s--) {
                        if (i.display) {
                            var l = t.getPointPosition(s, o);
                            e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(l.x, l.y), e.stroke(), e.closePath()
                        }
                        if (r.display) {
                            var u = t.getPointPosition(s, o + 5),
                                c = _.valueAtIndexOrDefault(r.fontColor, s, w.defaultFontColor);
                            e.font = a.font, e.fillStyle = c;
                            var d = t.getIndexAngle(s),
                                h = _.toDegrees(d);
                            e.textAlign = v(h), b(h, t._pointLabelSizes[s], u), y(e, t.pointLabels[s] || "", u, a.size)
                        }
                    }
                }

                function x(t, e, n, i) {
                    var r = t.ctx;
                    if (r.strokeStyle = _.valueAtIndexOrDefault(e.color, i - 1), r.lineWidth = _.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), r.closePath(), r.stroke();
                    else {
                        var o = f(t);
                        if (0 === o) return;
                        r.beginPath();
                        var a = t.getPointPosition(0, n);
                        r.moveTo(a.x, a.y);
                        for (var s = 1; s < o; s++) a = t.getPointPosition(s, n), r.lineTo(a.x, a.y);
                        r.closePath(), r.stroke()
                    }
                }

                function l(t) {
                    return _.isNumber(t) ? t : 0
                }
                var w = a.global,
                    r = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: s.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    },
                    o = e.LinearScaleBase.extend({
                        setDimensions: function() {
                            var t = this,
                                e = t.options,
                                n = e.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var i = _.min([t.height, t.width]),
                                r = _.valueOrDefault(n.fontSize, w.defaultFontSize);
                            t.drawingArea = e.display ? i / 2 - (r / 2 + n.backdropPaddingY) : i / 2
                        },
                        determineDataLimits: function() {
                            var r = this,
                                n = r.chart,
                                o = Number.POSITIVE_INFINITY,
                                a = Number.NEGATIVE_INFINITY;
                            _.each(n.data.datasets, function(t, e) {
                                if (n.isDatasetVisible(e)) {
                                    var i = n.getDatasetMeta(e);
                                    _.each(t.data, function(t, e) {
                                        var n = +r.getRightValue(t);
                                        isNaN(n) || i.data[e].hidden || (o = Math.min(n, o), a = Math.max(n, a))
                                    })
                                }
                            }), r.min = o === Number.POSITIVE_INFINITY ? 0 : o, r.max = a === Number.NEGATIVE_INFINITY ? 0 : a, r.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t = this.options.ticks,
                                e = _.valueOrDefault(t.fontSize, w.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            this.options.pointLabels.display ? t(this) : n(this)
                        },
                        setReductions: function(t, e, n) {
                            var i = this,
                                r = e.l / Math.sin(n.l),
                                o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                                a = -e.t / Math.cos(n.t),
                                s = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
                            r = l(r), o = l(o), a = l(a), s = l(s), i.drawingArea = Math.min(Math.round(t - (r + o) / 2), Math.round(t - (a + s) / 2)), i.setCenterPoint(r, o, a, s)
                        },
                        setCenterPoint: function(t, e, n, i) {
                            var r = this,
                                o = r.width - e - r.drawingArea,
                                a = t + r.drawingArea,
                                s = n + r.drawingArea,
                                l = r.height - i - r.drawingArea;
                            r.xCenter = Math.round((a + o) / 2 + r.left), r.yCenter = Math.round((s + l) / 2 + r.top)
                        },
                        getIndexAngle: function(t) {
                            return t * (2 * Math.PI / f(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (null === t) return 0;
                            var n = e.drawingArea / (e.max - e.min);
                            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
                        },
                        getPointPosition: function(t, e) {
                            var n = this,
                                i = n.getIndexAngle(t) - Math.PI / 2;
                            return {
                                x: Math.round(Math.cos(i) * e) + n.xCenter,
                                y: Math.round(Math.sin(i) * e) + n.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this,
                                e = t.min,
                                n = t.max;
                            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : 0 < e && 0 < n ? e : 0)
                        },
                        draw: function() {
                            var o = this,
                                t = o.options,
                                a = t.gridLines,
                                s = t.ticks,
                                l = _.valueOrDefault;
                            if (t.display) {
                                var u = o.ctx,
                                    c = this.getIndexAngle(0),
                                    d = l(s.fontSize, w.defaultFontSize),
                                    e = l(s.fontStyle, w.defaultFontStyle),
                                    n = l(s.fontFamily, w.defaultFontFamily),
                                    h = _.fontString(d, e, n);
                                _.each(o.ticks, function(t, e) {
                                    if (0 < e || s.reverse) {
                                        var n = o.getDistanceFromCenterForValue(o.ticksAsNumbers[e]);
                                        if (a.display && 0 !== e && x(o, a, n, e), s.display) {
                                            var i = l(s.fontColor, w.defaultFontColor);
                                            if (u.font = h, u.save(), u.translate(o.xCenter, o.yCenter), u.rotate(c), s.showLabelBackdrop) {
                                                var r = u.measureText(t).width;
                                                u.fillStyle = s.backdropColor, u.fillRect(-r / 2 - s.backdropPaddingX, -n - d / 2 - s.backdropPaddingY, r + 2 * s.backdropPaddingX, d + 2 * s.backdropPaddingY)
                                            }
                                            u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = i, u.fillText(t, 0, -n), u.restore()
                                        }
                                    }
                                }), (t.angleLines.display || t.pointLabels.display) && i(o)
                            }
                        }
                    });
                e.scaleService.registerScaleType("radialLinear", o, r)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        58: [function(t, e) {
            "use strict";

            function g(t, e) {
                return t - e
            }

            function m(t) {
                var e, n, i, r = {},
                    o = [];
                for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, o.push(i));
                return o
            }

            function c(t, e, n, i) {
                if ("linear" === i || !t.length) return [{
                    time: e,
                    pos: 0
                }, {
                    time: n,
                    pos: 1
                }];
                var r, o, a, s, l, u = [],
                    c = [e];
                for (r = 0, o = t.length; r < o; ++r) e < (s = t[r]) && s < n && c.push(s);
                for (c.push(n), r = 0, o = c.length; r < o; ++r) l = c[r + 1], a = c[r - 1], s = c[r], a !== undefined && l !== undefined && Math.round((l + a) / 2) === s || u.push({
                    time: s,
                    pos: r / (o - 1)
                });
                return u
            }

            function d(t, e, n) {
                for (var i, r, o, a = 0, s = t.length - 1; 0 <= a && a <= s;) {
                    if (r = t[(i = a + s >> 1) - 1] || null, o = t[i], !r) return {
                        lo: null,
                        hi: o
                    };
                    if (o[e] < n) a = i + 1;
                    else {
                        if (!(r[e] > n)) return {
                            lo: r,
                            hi: o
                        };
                        s = i - 1
                    }
                }
                return {
                    lo: o,
                    hi: null
                }
            }

            function u(t, e, n, i) {
                var r = d(t, e, n),
                    o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
                    a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
                    s = a[e] - o[e],
                    l = s ? (n - o[e]) / s : 0,
                    u = (a[i] - o[i]) * l;
                return o[i] + u
            }

            function s(t, e) {
                var n = e.parser,
                    i = e.parser || e.format;
                return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof i ? S(t, i) : (t instanceof S || (t = S(t)), t.isValid() ? t : "function" == typeof i ? i(t) : t)
            }

            function v(t, e) {
                if (k.isNullOrUndef(t)) return null;
                var n = e.options.time,
                    i = s(e.getRightValue(t), n);
                return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
            }

            function y(t, e, n, i) {
                var r, o, a, s = e - t,
                    l = T[n],
                    u = l.size,
                    c = l.steps;
                if (!c) return Math.ceil(s / (i * u));
                for (r = 0, o = c.length; r < o && (a = c[r], !(Math.ceil(s / (u * a)) <= i)); ++r);
                return a
            }

            function b(t, e, n, i) {
                var r, o, a, s = D.length;
                for (r = D.indexOf(t); r < s - 1; ++r)
                    if (a = (o = T[D[r]]).steps ? o.steps[o.steps.length - 1] : M, o.common && Math.ceil((n - e) / (a * o.size)) <= i) return D[r];
                return D[s - 1]
            }

            function h(t, e, n, i) {
                var r, o, a = S.duration(S(i).diff(S(n)));
                for (r = D.length - 1; r >= D.indexOf(e); r--)
                    if (o = D[r], T[o].common && a.as(o) >= t.length) return o;
                return D[e ? D.indexOf(e) : 0]
            }

            function x(t) {
                for (var e = D.indexOf(t) + 1, n = D.length; e < n; ++e)
                    if (T[D[e]].common) return D[e]
            }

            function f(t, e, n, i) {
                var r, o = i.time,
                    a = o.unit || b(o.minUnit, t, e, n),
                    s = x(a),
                    l = k.valueOrDefault(o.stepSize, o.unitStepSize),
                    u = "week" === a && o.isoWeekday,
                    c = i.ticks.major.enabled,
                    d = T[a],
                    h = S(t),
                    f = S(e),
                    p = [];
                for (l || (l = y(t, e, a, n)), u && (h = h.isoWeekday(u), f = f.isoWeekday(u)), h = h.startOf(u ? "day" : a), (f = f.startOf(u ? "day" : a)) < e && f.add(1, a), r = S(h), c && s && !u && !o.round && (r.startOf(s), r.add(~~((h - r) / (d.size * l)) * l, a)); r < f; r.add(l, a)) p.push(+r);
                return p.push(+r), p
            }

            function p(t, e, n, i, r) {
                var o, a, s = 0,
                    l = 0;
                return r.offset && e.length && (r.time.min || (o = 1 < e.length ? e[1] : i, a = e[0], s = (u(t, "time", o, "pos") - u(t, "time", a, "pos")) / 2), r.time.max || (o = e[e.length - 1], a = 1 < e.length ? e[e.length - 2] : n, l = (u(t, "time", o, "pos") - u(t, "time", a, "pos")) / 2)), {
                    left: s,
                    right: l
                }
            }

            function w(t, e) {
                var n, i, r, o, a = [];
                for (n = 0, i = t.length; n < i; ++n) r = t[n], o = !!e && r === +S(r).startOf(e), a.push({
                    value: r,
                    major: o
                });
                return a
            }

            function _(t, e) {
                var n, i, r, o = t.length;
                for (n = 0; n < o; n++) {
                    if (0 !== (i = s(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                    0 === i.second() && 0 === i.minute() && 0 === i.hour() || (r = !0)
                }
                return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
            }
            var S = t(6);
            S = "function" == typeof S ? S : window.moment;
            var l = t(25),
                k = t(45),
                C = Number.MIN_SAFE_INTEGER || -9007199254740991,
                M = Number.MAX_SAFE_INTEGER || 9007199254740991,
                T = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                D = Object.keys(T);
            e.exports = function(n) {
                var t = {
                        position: "bottom",
                        distribution: "linear",
                        bounds: "data",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm a",
                                hour: "hA",
                                day: "MMM D",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1,
                            source: "auto",
                            major: {
                                enabled: !1
                            }
                        }
                    },
                    e = n.Scale.extend({
                        initialize: function() {
                            if (!S) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            this.mergeTicksOptions(), n.Scale.prototype.initialize.call(this)
                        },
                        update: function() {
                            var t = this,
                                e = t.options;
                            return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), n.Scale.prototype.update.apply(t, arguments)
                        },
                        getRightValue: function(t) {
                            return t && t.t !== undefined && (t = t.t), n.Scale.prototype.getRightValue.call(this, t)
                        },
                        determineDataLimits: function() {
                            var t, e, n, i, r, o, a = this,
                                s = a.chart,
                                l = a.options.time,
                                u = l.unit || "day",
                                c = M,
                                d = C,
                                h = [],
                                f = [],
                                p = [];
                            for (t = 0, n = s.data.labels.length; t < n; ++t) p.push(v(s.data.labels[t], a));
                            for (t = 0, n = (s.data.datasets || []).length; t < n; ++t)
                                if (s.isDatasetVisible(t))
                                    if (r = s.data.datasets[t].data, k.isObject(r[0]))
                                        for (f[t] = [], e = 0, i = r.length; e < i; ++e) o = v(r[e], a), h.push(o), f[t][e] = o;
                                    else h.push.apply(h, p), f[t] = p.slice(0);
                            else f[t] = [];
                            p.length && (p = m(p).sort(g), c = Math.min(c, p[0]), d = Math.max(d, p[p.length - 1])), h.length && (h = m(h).sort(g), c = Math.min(c, h[0]), d = Math.max(d, h[h.length - 1])), c = v(l.min, a) || c, d = v(l.max, a) || d, c = c === M ? +S().startOf(u) : c, d = d === C ? +S().endOf(u) + 1 : d, a.min = Math.min(c, d), a.max = Math.max(c + 1, d), a._horizontal = a.isHorizontal(), a._table = [], a._timestamps = {
                                data: h,
                                datasets: f,
                                labels: p
                            }
                        },
                        buildTicks: function() {
                            var t, e, n, i = this,
                                r = i.min,
                                o = i.max,
                                a = i.options,
                                s = a.time,
                                l = [],
                                u = [];
                            switch (a.ticks.source) {
                                case "data":
                                    l = i._timestamps.data;
                                    break;
                                case "labels":
                                    l = i._timestamps.labels;
                                    break;
                                case "auto":
                                default:
                                    l = f(r, o, i.getLabelCapacity(r), a)
                            }
                            for ("ticks" === a.bounds && l.length && (r = l[0], o = l[l.length - 1]), r = v(s.min, i) || r, o = v(s.max, i) || o, t = 0, e = l.length; t < e; ++t) r <= (n = l[t]) && n <= o && u.push(n);
                            return i.min = r, i.max = o, i._unit = s.unit || h(u, s.minUnit, i.min, i.max), i._majorUnit = x(i._unit), i._table = c(i._timestamps.data, r, o, a.distribution), i._offsets = p(i._table, u, r, o, a), i._labelFormat = _(i._timestamps.data, s), w(u, i._majorUnit)
                        },
                        getLabelForIndex: function(t, e) {
                            var n = this,
                                i = n.chart.data,
                                r = n.options.time,
                                o = i.labels && t < i.labels.length ? i.labels[t] : "",
                                a = i.datasets[e].data[t];
                            return k.isObject(a) && (o = n.getRightValue(a)), r.tooltipFormat ? s(o, r).format(r.tooltipFormat) : "string" == typeof o ? o : s(o, r).format(n._labelFormat)
                        },
                        tickFormatFunction: function(t, e, n, i) {
                            var r = this,
                                o = r.options,
                                a = t.valueOf(),
                                s = o.time.displayFormats,
                                l = s[r._unit],
                                u = r._majorUnit,
                                c = s[u],
                                d = t.clone().startOf(u).valueOf(),
                                h = o.ticks.major,
                                f = h.enabled && u && c && a === d,
                                p = t.format(i || (f ? c : l)),
                                g = f ? h : o.ticks.minor,
                                m = k.valueOrDefault(g.callback, g.userCallback);
                            return m ? m(p, e, n) : p
                        },
                        convertTicksToLabels: function(t) {
                            var e, n, i = [];
                            for (e = 0, n = t.length; e < n; ++e) i.push(this.tickFormatFunction(S(t[e].value), e, t));
                            return i
                        },
                        getPixelForOffset: function(t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                i = e._horizontal ? e.left : e.top,
                                r = u(e._table, "time", t, "pos");
                            return i + n * (e._offsets.left + r) / (e._offsets.left + 1 + e._offsets.right)
                        },
                        getPixelForValue: function(t, e, n) {
                            var i = this,
                                r = null;
                            if (e !== undefined && n !== undefined && (r = i._timestamps.datasets[n][e]), null === r && (r = v(t, i)), null !== r) return i.getPixelForOffset(r)
                        },
                        getPixelForTick: function(t) {
                            var e = this.getTicks();
                            return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                n = e._horizontal ? e.width : e.height,
                                i = e._horizontal ? e.left : e.top,
                                r = (n ? (t - i) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                o = u(e._table, "pos", r, "time");
                            return S(o)
                        },
                        getLabelWidth: function(t) {
                            var e = this,
                                n = e.options.ticks,
                                i = e.ctx.measureText(t).width,
                                r = k.toRadians(n.maxRotation),
                                o = Math.cos(r),
                                a = Math.sin(r);
                            return i * o + k.valueOrDefault(n.fontSize, l.global.defaultFontSize) * a
                        },
                        getLabelCapacity: function(t) {
                            var e = this,
                                n = e.options.time.displayFormats.millisecond,
                                i = e.tickFormatFunction(S(t), 0, [], n),
                                r = e.getLabelWidth(i),
                                o = e.isHorizontal() ? e.width : e.height,
                                a = Math.floor(o / r);
                            return 0 < a ? a : 1
                        }
                    });
                n.scaleService.registerScaleType("time", e, t)
            }
        }, {
            25: 25,
            45: 45,
            6: 6
        }]
    }, {}, [7])(7)
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Chartkick = e()
}(this, function() {
    "use strict";

    function a(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        return t instanceof Function
    }

    function i(t) {
        return !s(t) && t instanceof Object
    }

    function r(t, e) {
        var n;
        for (n in e) i(e[n]) || a(e[n]) ? (i(e[n]) && !i(t[n]) && (t[n] = {}), a(e[n]) && !a(t[n]) && (t[n] = []), r(t[n], e[n])) : e[n] !== undefined && (t[n] = e[n])
    }

    function I(t, e) {
        var n = {};
        return r(n, t), r(n, e), n
    }

    function o(t) {
        var e, n, i, r, o, a, s, l, u, c, d;
        return "[object Date]" === (c = Object.prototype.toString.call(t)) ? t : "[object String]" === c && (i = t.match(V)) ? (d = parseInt(i[1], 10), a = parseInt(i[3], 10) - 1, e = parseInt(i[5], 10), n = parseInt(i[7], 10), o = i[9] ? parseInt(i[9], 10) : 0, u = i[11] ? parseInt(i[11], 10) : 0, r = i[12] ? 1e3 * parseFloat(G + i[12].slice(1)) : 0, l = Date.UTC(d, a, e, n, o, u, r), i[13] && i[14] && (s = 60 * i[15], i[17] && (s += parseInt(i[17], 10)), l -= 60 * (s *= "-" === i[14] ? -1 : 1) * 1e3), new Date(l)) : void 0
    }

    function f(t) {
        var e, n, i;
        for (e = 0; e < t.length; e++)
            for (i = t[e].data, n = 0; n < i.length; n++)
                if (i[n][1] < 0) return !0;
        return !1
    }

    function p(t) {
        return "" + t
    }

    function L(t) {
        return parseFloat(t)
    }

    function n(t) {
        var e, n, i, r;
        if ("object" != typeof t)
            if ("number" == typeof t) t = new Date(1e3 * t);
            else {
                if (e = (t = p(t)).match(U)) return n = parseInt(e[1], 10), i = parseInt(e[3], 10) - 1, r = parseInt(e[5], 10), new Date(n, i, r);
                t = o(t.replace(/ /, "T").replace(" ", "").replace("UTC", "Z")) || new Date(t)
            }
        return t
    }

    function l(t) {
        if (!a(t)) {
            var e, n = [];
            for (e in t) t.hasOwnProperty(e) && n.push([e, t[e]]);
            t = n
        }
        return t
    }

    function u(o, a, s, l, u, c, d, h) {
        return function(t, e, n) {
            var i = t.data,
                r = I({}, o);
            return r = I(r, n || {}), (t.hideLegend || "legend" in e) && a(r, e.legend, t.hideLegend), e.title && s(r, e.title), "min" in e ? l(r, e.min) : f(i) || l(r, 0), e.max && u(r, e.max), "stacked" in e && c(r, e.stacked), e.colors && (r.colors = e.colors), e.xtitle && d(r, e.xtitle), e.ytitle && h(r, e.ytitle), r = I(r, e.library || {})
        }
    }

    function g(t, e) {
        return t[0].getTime() - e[0].getTime()
    }

    function m(t, e) {
        return t[0] - e[0]
    }

    function z(t, e) {
        return t - e
    }

    function N(t) {
        return 0 === t.getMilliseconds() && 0 === t.getSeconds()
    }

    function F(t) {
        return N(t) && 0 === t.getMinutes()
    }

    function R(t) {
        return F(t) && 0 === t.getHours()
    }

    function j(t, e) {
        return R(t) && t.getDay() === e
    }

    function $(t) {
        return R(t) && 1 === t.getDate()
    }

    function W(t) {
        return $(t) && 0 === t.getMonth()
    }

    function c(t) {
        return !isNaN(n(t)) && 6 <= p(t).length
    }

    function d(t, e, n) {
        if (t = t || "", n.prefix && (e < 0 && (e *= -1, t += "-"), t += n.prefix), n.thousands || n.decimal) {
            var i = (e = p(e)).split(".");
            e = i[0], n.thousands && (e = e.replace(/\B(?=(\d{3})+(?!\d))/g, n.thousands)), 1 < i.length && (e += (n.decimal || ".") + i[1])
        }
        return t + e + (n.suffix || "")
    }

    function h(t) {
        var e, n, i;
        for (e = 0; e < t.length; e++)
            for (i = t[e].data, n = 0; n < i.length; n++)
                if (0 != i[n][1]) return !1;
        return !0
    }

    function v(t, e, n) {
        Ot.push([t, e, n]), y()
    }

    function y() {
        if (It < Lt) {
            var t = Ot.shift();
            t && (It++, e(t[0], t[1], t[2]), y())
        }
    }

    function b() {
        It--, y()
    }

    function e(t, e, r) {
        x(t, e, function(t, e, n) {
            var i = "string" == typeof n ? n : n.message;
            r(i)
        })
    }

    function x(t, e, n) {
        var i = window.jQuery || window.Zepto || window.$;
        if (i) i.ajax({
            dataType: "json",
            url: t,
            success: e,
            error: n,
            complete: b
        });
        else {
            var r = new XMLHttpRequest;
            r.open("GET", t, !0), r.setRequestHeader("Content-Type", "application/json"), r.onload = function() {
                b(), 200 === r.status ? e(JSON.parse(r.responseText), r.statusText, r) : n(r, "error", r.statusText)
            }, r.send()
        }
    }

    function w(t, e) {
        document.body.innerText ? t.innerText = e : t.textContent = e
    }

    function _(t, e) {
        w(t, "Error Loading Chart: " + e), t.style.color = "#ff0000"
    }

    function S(t) {
        try {
            t.__render()
        } catch (e) {
            throw _(t.element, e.message), e
        }
    }

    function k(e, t) {
        "string" == typeof t ? v(t, function(t) {
            e.rawData = t, S(e)
        }, function(t) {
            _(e.element, t)
        }) : (e.rawData = t, S(e))
    }

    function C(n) {
        var i = n.element,
            r = document.createElement("a");
        r.download = !0 === n.options.download ? "chart.png" : n.options.download, r.style.position = "absolute", r.style.top = "20px", r.style.right = "20px", r.style.zIndex = 1e3, r.style.lineHeight = "20px", r.target = "_blank";
        var t = document.createElement("img");
        t.alt = "Download", t.style.border = "none", t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==", r.appendChild(t), i.style.position = "relative", n.downloadAttached = !0, M(i, "mouseover", function(t) {
            var e = t.relatedTarget;
            (!e || e !== this && !T(this, e) && n.options.download) && (r.href = n.toImage(), i.appendChild(r))
        }), M(i, "mouseout", function(t) {
            var e = t.relatedTarget;
            e && (e === this || T(this, e)) || r.parentNode && r.parentNode.removeChild(r)
        })
    }

    function M(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, function() {
            return n.call(t, window.event)
        })
    }

    function T(t, e) {
        if (t === e) return !1;
        for (; e && e !== t;) e = e.parentNode;
        return e === t
    }

    function D(t) {
        if (t) {
            if ("Highcharts" === t.product) return yt;
            if (t.setOnLoadCallback || t.charts) return Pt;
            if (s(t)) return ht
        }
        throw new Error("Unknown adapter")
    }

    function t(t) {
        var e = new(D(t))(t); - 1 === Nt.indexOf(e) && Nt.push(e)
    }

    function A() {
        "Chart" in window && t(window.Chart), "Highcharts" in window && t(window.Highcharts), window.google && (window.google.setOnLoadCallback || window.google.charts) && t(window.google)
    }

    function E(t, e) {
        if ("PieChart" === e || "GeoChart" === e || "Timeline" === e) return 0 === t.length;
        for (var n = 0; n < t.length; n++)
            if (0 < t[n].data.length) return !1;
        return !0
    }

    function P(t, e) {
        e.options.messages && e.options.messages.empty && E(e.data, t) ? w(e.element, e.options.messages.empty) : (O(t, e), e.options.download && !e.downloadAttached && "chartjs" === e.adapter && C(e))
    }

    function O(t, e) {
        var n, i, r, o;
        for (r = "render" + t, o = e.options.adapter, A(), n = 0; n < Nt.length; n++)
            if (i = Nt[n], (!o || o === i.name) && s(i[r])) return e.adapter = i.name, i[r](e);
        throw 0 < Nt.length ? new Error("No charting library found for " + t) : new Error("No charting libraries found - be sure to include one before your charts")
    }

    function H(t) {
        var e, n, i;
        for (e = 0; e < t.length; e++)
            for (i = l(t[e].data), n = 0; n < i.length; n++)
                if (!c(i[n][0])) return !0;
        return !1
    }

    function B(t) {
        var e, n, i = [];
        for (e = 0; e < t.length; e++) {
            var r = {};
            for (n in t[e]) t[e].hasOwnProperty(n) && (r[n] = t[e][n]);
            i.push(r)
        }
        return i
    }

    function q(t, e) {
        var n, i = t.options,
            r = t.rawData;
        for (!a(r) || "object" != typeof r[0] || a(r[0]) ? (r = [{
                name: i.label || "Value",
                data: r
            }], t.hideLegend = !0) : t.hideLegend = !1, null !== i.discrete && i.discrete !== undefined || "bubble" === e || "number" === e ? t.discrete = i.discrete : t.discrete = H(r), t.discrete && (e = "string"), t.options.xtype && (e = t.options.xtype), r = B(r), n = 0; n < r.length; n++) r[n].data = Rt(l(r[n].data), e);
        return r
    }

    function Y(t) {
        var e, n = l(t.rawData);
        for (e = 0; e < n.length; e++) n[e] = [p(n[e][0]), L(n[e][1])];
        return n
    }
    var U = /^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i,
        V = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([.,]\d+)?($|Z|([+-])(\d\d)(:)?(\d\d)?)/i,
        G = String(1.5).charAt(1),
        X = {
            maintainAspectRatio: !1,
            animation: !1,
            tooltips: {
                displayColors: !1,
                callbacks: {}
            },
            legend: {},
            title: {
                fontSize: 20,
                fontColor: "#333"
            }
        },
        Q = {
            scales: {
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 4
                    },
                    scaleLabel: {
                        fontSize: 16,
                        fontColor: "#333"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: !1
                    },
                    scaleLabel: {
                        fontSize: 16,
                        fontColor: "#333"
                    },
                    time: {},
                    ticks: {}
                }]
            }
        },
        Z = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#651067"],
        J = function(t, e, n) {
            e !== undefined ? (t.legend.display = !!e, e && !0 !== e && (t.legend.position = e)) : n && (t.legend.display = !1)
        },
        K = function(t, e) {
            t.title.display = !0, t.title.text = e
        },
        tt = function(t, e) {
            null !== e && (t.scales.yAxes[0].ticks.min = L(e))
        },
        et = function(t, e) {
            t.scales.yAxes[0].ticks.max = L(e)
        },
        nt = function(t, e) {
            null !== e && (t.scales.xAxes[0].ticks.min = L(e))
        },
        it = function(t, e) {
            t.scales.xAxes[0].ticks.max = L(e)
        },
        rt = function(t, e) {
            t.scales.xAxes[0].stacked = !!e, t.scales.yAxes[0].stacked = !!e
        },
        ot = function(t, e) {
            t.scales.xAxes[0].scaleLabel.display = !0, t.scales.xAxes[0].scaleLabel.labelString = e
        },
        at = function(t, e) {
            t.scales.yAxes[0].scaleLabel.display = !0, t.scales.yAxes[0].scaleLabel.labelString = e
        },
        st = function(t, e) {
            var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return n ? "rgba(" + parseInt(n[1], 16) + ", " + parseInt(n[2], 16) + ", " + parseInt(n[3], 16) + ", " + e + ")" : t
        },
        lt = function(t, e, n) {
            var i = Math.ceil(t.element.offsetWidth / 4 / e.labels.length);
            25 < i && (i = 25), n.scales.xAxes[0].ticks.callback = function(t) {
                return (t = p(t)).length > i ? t.substring(0, i - 2) + "..." : t
            }
        },
        ut = function(t, e, n) {
            var r = {
                prefix: t.options.prefix,
                suffix: t.options.suffix,
                thousands: t.options.thousands,
                decimal: t.options.decimal
            };
            if (r.prefix || r.suffix || r.thousands || r.decimal) {
                if ("pie" !== n) {
                    var i = e.scales.yAxes;
                    "bar" === n && (i = e.scales.xAxes), i[0].ticks.callback || (i[0].ticks.callback = function(t) {
                        return d("", t, r)
                    })
                }
                if (!e.tooltips.callbacks.label)
                    if ("pie" !== n) {
                        var o = "bar" === n ? "xLabel" : "yLabel";
                        e.tooltips.callbacks.label = function(t, e) {
                            var n = e.datasets[t.datasetIndex].label || "";
                            return n && (n += ": "), d(n, t[o], r)
                        }
                    } else e.tooltips.callbacks.label = function(t, e) {
                        var n = e.labels[t.index],
                            i = ": ";
                        return a(n) ? (n = n.slice())[0] += i : n += i, d(n, e.datasets[t.datasetIndex].data[t.index], r)
                    }
            }
        },
        ct = u(I(X, Q), J, K, tt, et, rt, ot, at),
        dt = function(t, e, n) {
            var i, r, o, a, s, l, u = [],
                c = [],
                d = t.options.colors || Z,
                h = !0,
                f = !0,
                p = !0,
                g = !0,
                m = !0,
                v = !0,
                y = ("line" === n || "area" === n) && !t.discrete,
                b = t.data,
                x = [],
                w = [];
            for (r = 0; r < b.length; r++)
                for (a = b[r], o = 0; o < a.data.length; o++) s = a.data[o], w[l = y ? s[0].getTime() : s[0]] || (w[l] = new Array(b.length)), w[l][r] = L(s[1]), -1 === x.indexOf(l) && x.push(l);
            (y || "number" === t.options.xtype) && x.sort(z);
            var _, S, k = [];
            for (o = 0; o < b.length; o++) k.push([]);
            for (S = 0; S < x.length; S++)
                for (r = x[S], y ? (_ = new Date(L(r)), h = h && R(_), i || (i = _.getDay()), f = f && j(_, i), p = p && $(_), g = g && W(_), m = m && F(_), v = v && N(_)) : _ = r, c.push(_), o = 0; o < b.length; o++) k[o].push(w[r][o] === undefined ? null : w[r][o]);
            for (r = 0; r < b.length; r++) {
                var C = (a = b[r]).color || d[r],
                    M = "line" !== n ? st(C, .5) : C,
                    T = {
                        label: a.name,
                        data: k[r],
                        fill: "area" === n,
                        borderColor: C,
                        backgroundColor: M,
                        pointBackgroundColor: C,
                        borderWidth: 2
                    };
                a.stack && (T.stack = a.stack), !1 === t.options.curve && (T.lineTension = 0), !1 === t.options.points && (T.pointRadius = 0, T.pointHitRadius = 5), u.push(I(T, a.library || {}))
            }
            if (y && 0 < c.length) {
                var D = c[0].getTime(),
                    A = c[0].getTime();
                for (r = 1; r < c.length; r++)(_ = c[r].getTime()) < D && (D = _), A < _ && (A = _);
                var E, P = (A - D) / 864e5;
                if (!e.scales.xAxes[0].time.unit)
                    if (g || 3650 < P ? (e.scales.xAxes[0].time.unit = "year", E = 365) : p || 300 < P ? (e.scales.xAxes[0].time.unit = "month", E = 30) : h || 10 < P ? (e.scales.xAxes[0].time.unit = "day", E = 1) : m || .5 < P ? (e.scales.xAxes[0].time.displayFormats = {
                            hour: "MMM D, h a"
                        }, e.scales.xAxes[0].time.unit = "hour", E = 1 / 24) : v && (e.scales.xAxes[0].time.displayFormats = {
                            minute: "h:mm a"
                        }, e.scales.xAxes[0].time.unit = "minute", E = 1 / 24 / 60), E && 0 < P) {
                        var O = Math.ceil(P / E / (t.element.offsetWidth / 100));
                        f && 1 === E && (O = 7 * Math.ceil(O / 7)), e.scales.xAxes[0].time.unitStepSize = O
                    }
                e.scales.xAxes[0].time.tooltipFormat || (h ? e.scales.xAxes[0].time.tooltipFormat = "ll" : m ? e.scales.xAxes[0].time.tooltipFormat = "MMM D, h a" : v && (e.scales.xAxes[0].time.tooltipFormat = "h:mm a"))
            }
            return {
                labels: c,
                datasets: u
            }
        },
        ht = function(t) {
            this.name = "chartjs", this.library = t
        };
    ht.prototype.renderLineChart = function(t, e) {
        if ("number" === t.options.xtype) return this.renderScatterChart(t, e, !0);
        var n = {};
        !t.options.max && h(t.data) && (n.max = 1);
        var i = ct(t, I(n, t.options));
        ut(t, i, e);
        var r = dt(t, i, e || "line");
        i.scales.xAxes[0].type = t.discrete ? "category" : "time", this.drawChart(t, "line", r, i)
    }, ht.prototype.renderPieChart = function(t) {
        var e = I({}, X);
        t.options.donut && (e.cutoutPercentage = 50), "legend" in t.options && J(e, t.options.legend), t.options.title && K(e, t.options.title), e = I(e, t.options.library || {}), ut(t, e, "pie");
        for (var n = [], i = [], r = 0; r < t.data.length; r++) {
            var o = t.data[r];
            n.push(o[0]), i.push(o[1])
        }
        var a = {
            labels: n,
            datasets: [{
                data: i,
                backgroundColor: t.options.colors || Z
            }]
        };
        this.drawChart(t, "pie", a, e)
    }, ht.prototype.renderColumnChart = function(t, e) {
        var n;
        n = "bar" === e ? u(I(X, Q), J, K, nt, it, rt, ot, at)(t, t.options) : ct(t, t.options), ut(t, n, e);
        var i = dt(t, n, "column");
        "bar" !== e && lt(t, i, n), this.drawChart(t, "bar" === e ? "horizontalBar" : "bar", i, n)
    }, ht.prototype.renderAreaChart = function(t) {
        this.renderLineChart(t, "area")
    }, ht.prototype.renderBarChart = function(t) {
        this.renderColumnChart(t, "bar")
    }, ht.prototype.renderScatterChart = function(t, e, n) {
        e = e || "line";
        var i = ct(t, t.options);
        n || ut(t, i, e);
        for (var r = t.options.colors || Z, o = [], a = t.data, s = 0; s < a.length; s++) {
            for (var l = a[s], u = [], c = 0; c < l.data.length; c++) {
                var d = {
                    x: L(l.data[c][0]),
                    y: L(l.data[c][1])
                };
                "bubble" === e && (d.r = L(l.data[c][2])), u.push(d)
            }
            var h = l.color || r[s],
                f = "area" === e ? st(h, .5) : h;
            o.push({
                label: l.name,
                showLine: n || !1,
                data: u,
                borderColor: h,
                backgroundColor: f,
                pointBackgroundColor: h,
                fill: "area" === e
            })
        }
        "area" === e && (e = "line");
        var p = {
            datasets: o
        };
        i.scales.xAxes[0].type = "linear", i.scales.xAxes[0].position = "bottom", this.drawChart(t, e, p, i)
    }, ht.prototype.renderBubbleChart = function(t) {
        this.renderScatterChart(t, "bubble")
    };
    var ft = {
            chart: {},
            xAxis: {
                title: {
                    text: null
                },
                labels: {
                    style: {
                        fontSize: "12px"
                    }
                }
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    style: {
                        fontSize: "12px"
                    }
                }
            },
            title: {
                text: null
            },
            credits: {
                enabled: !(ht.prototype.drawChart = function(t, e, n, i) {
                    t.chart && t.chart.destroy(), t.element.innerHTML = "<canvas></canvas>";
                    var r = t.element.getElementsByTagName("CANVAS")[0];
                    t.chart = new this.library(r, {
                        type: e,
                        data: n,
                        options: i
                    })
                })
            },
            legend: {
                borderWidth: 0
            },
            tooltip: {
                style: {
                    fontSize: "12px"
                }
            },
            plotOptions: {
                areaspline: {},
                series: {
                    marker: {}
                }
            }
        },
        pt = function(t, e, n) {
            e !== undefined ? (t.legend.enabled = !!e, e && !0 !== e && ("top" === e || "bottom" === e ? t.legend.verticalAlign = e : (t.legend.layout = "vertical", t.legend.verticalAlign = "middle", t.legend.align = e))) : n && (t.legend.enabled = !1)
        },
        gt = function(t, e) {
            t.title.text = e
        },
        mt = u(ft, pt, gt, function(t, e) {
            t.yAxis.min = e
        }, function(t, e) {
            t.yAxis.max = e
        }, function(t, e) {
            t.plotOptions.series.stacking = e ? !0 === e ? "normal" : e : null
        }, function(t, e) {
            t.xAxis.title.text = e
        }, function(t, e) {
            t.yAxis.title.text = e
        }),
        vt = function(t, e, n) {
            var i = {
                prefix: t.options.prefix,
                suffix: t.options.suffix,
                thousands: t.options.thousands,
                decimal: t.options.decimal
            };
            (i.prefix || i.suffix || i.thousands || i.decimal) && ("pie" === n || e.yAxis.labels.formatter || (e.yAxis.labels.formatter = function() {
                return d("", this.value, i)
            }), e.tooltip.pointFormatter || (e.tooltip.pointFormatter = function() {
                return '<span style="color:' + this.color + ">\u25cf</span> " + d(this.series.name + ": <b>", this.y, i) + "</b><br/>"
            }))
        },
        yt = function(t) {
            this.name = "highcharts", this.library = t
        };
    yt.prototype.renderLineChart = function(t, e) {
        var n = {};
        "areaspline" === (e = e || "spline") && (n = {
            plotOptions: {
                areaspline: {
                    stacking: "normal"
                },
                area: {
                    stacking: "normal"
                },
                series: {
                    marker: {
                        enabled: !1
                    }
                }
            }
        }), !1 === t.options.curve && ("areaspline" === e ? e = "area" : "spline" === e && (e = "line"));
        var i, r, o, a = mt(t, t.options, n);
        a.xAxis.type = t.discrete ? "category" : "datetime", a.chart.type || (a.chart.type = e), vt(t, a, e);
        var s = t.data;
        for (r = 0; r < s.length; r++) {
            if (i = s[r].data, !t.discrete)
                for (o = 0; o < i.length; o++) i[o][0] = i[o][0].getTime();
            !(s[r].marker = {
                symbol: "circle"
            }) === t.options.points && (s[r].marker.enabled = !1)
        }
        this.drawChart(t, s, a)
    }, yt.prototype.renderScatterChart = function(t) {
        var e = mt(t, t.options, {});
        e.chart.type = "scatter", this.drawChart(t, t.data, e)
    }, yt.prototype.renderPieChart = function(t) {
        var e = I(ft, {});
        t.options.colors && (e.colors = t.options.colors), t.options.donut && (e.plotOptions = {
            pie: {
                innerSize: "50%"
            }
        }), "legend" in t.options && pt(e, t.options.legend), t.options.title && gt(e, t.options.title);
        var n = I(e, t.options.library || {});
        vt(t, n, "pie");
        var i = [{
            type: "pie",
            name: t.options.label || "Value",
            data: t.data
        }];
        this.drawChart(t, i, n)
    }, yt.prototype.renderColumnChart = function(t, e) {
        e = e || "column";
        var n, i, r, o, a = t.data,
            s = mt(t, t.options),
            l = [],
            u = [];
        for (s.chart.type = e, vt(t, s, e), n = 0; n < a.length; n++)
            for (r = a[n], i = 0; i < r.data.length; i++) l[(o = r.data[i])[0]] || (l[o[0]] = new Array(a.length), u.push(o[0])), l[o[0]][n] = o[1];
        "number" === t.options.xtype && u.sort(z), s.xAxis.categories = u;
        var c, d = [];
        for (n = 0; n < a.length; n++) {
            for (o = [], i = 0; i < u.length; i++) o.push(l[u[i]][n] || 0);
            c = {
                name: a[n].name,
                data: o
            }, a[n].stack && (c.stack = a[n].stack), d.push(c)
        }
        this.drawChart(t, d, s)
    }, yt.prototype.renderBarChart = function(t) {
        this.renderColumnChart(t, "bar")
    }, yt.prototype.renderAreaChart = function(t) {
        this.renderLineChart(t, "areaspline")
    }, yt.prototype.drawChart = function(t, e, n) {
        t.chart && t.chart.destroy(), n.chart.renderTo = t.element.id, n.series = e, t.chart = new this.library.Chart(n)
    };
    var bt = {},
        xt = [],
        wt = {
            chartArea: {},
            fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
            pointSize: 6,
            legend: {
                textStyle: {
                    fontSize: 12,
                    color: "#444"
                },
                alignment: "center",
                position: "right"
            },
            curveType: "function",
            hAxis: {
                textStyle: {
                    color: "#666",
                    fontSize: 12
                },
                titleTextStyle: {},
                gridlines: {
                    color: "transparent"
                },
                baselineColor: "#ccc",
                viewWindow: {}
            },
            vAxis: {
                textStyle: {
                    color: "#666",
                    fontSize: 12
                },
                titleTextStyle: {},
                baselineColor: "#ccc",
                viewWindow: {}
            },
            tooltip: {
                textStyle: {
                    color: "#666",
                    fontSize: 12
                }
            }
        },
        _t = function(t, e, n) {
            var i;
            e !== undefined ? (i = e ? !0 === e ? "right" : e : "none", t.legend.position = i) : n && (t.legend.position = "none")
        },
        St = function(t, e) {
            t.title = e, t.titleTextStyle = {
                color: "#333",
                fontSize: "20px"
            }
        },
        kt = function(t, e) {
            t.hAxis.viewWindow.min = e
        },
        Ct = function(t, e) {
            t.hAxis.viewWindow.max = e
        },
        Mt = function(t, e) {
            t.isStacked = e || !1
        },
        Tt = function(t, e) {
            t.hAxis.title = e, t.hAxis.titleTextStyle.italic = !1
        },
        Dt = function(t, e) {
            t.vAxis.title = e, t.vAxis.titleTextStyle.italic = !1
        },
        At = u(wt, _t, St, function(t, e) {
            t.vAxis.viewWindow.min = e
        }, function(t, e) {
            t.vAxis.viewWindow.max = e
        }, Mt, Tt, Dt),
        Et = function(t) {
            window.attachEvent ? window.attachEvent("onresize", t) : window.addEventListener && window.addEventListener("resize", t, !0), t()
        },
        Pt = function(t) {
            this.name = "google", this.library = t
        };
    Pt.prototype.renderLineChart = function(r) {
        var o = this;
        this.waitForLoaded(r, function() {
            var t = {};
            !1 === r.options.curve && (t.curveType = "none"), !1 === r.options.points && (t.pointSize = 0);
            var e = At(r, r.options, t),
                n = r.discrete ? "string" : "datetime";
            "number" === r.options.xtype && (n = "number");
            var i = o.createDataTable(r.data, n);
            o.drawChart(r, o.library.visualization.LineChart, i, e)
        })
    }, Pt.prototype.renderPieChart = function(i) {
        var r = this;
        this.waitForLoaded(i, function() {
            var t = {
                chartArea: {
                    top: "10%",
                    height: "80%"
                },
                legend: {}
            };
            i.options.colors && (t.colors = i.options.colors), i.options.donut && (t.pieHole = .5), "legend" in i.options && _t(t, i.options.legend), i.options.title && St(t, i.options.title);
            var e = I(I(wt, t), i.options.library || {}),
                n = new r.library.visualization.DataTable;
            n.addColumn("string", ""), n.addColumn("number", "Value"), n.addRows(i.data),
                r.drawChart(i, r.library.visualization.PieChart, n, e)
        })
    }, Pt.prototype.renderColumnChart = function(n) {
        var i = this;
        this.waitForLoaded(n, function() {
            var t = At(n, n.options),
                e = i.createDataTable(n.data, "string", n.options.xtype);
            i.drawChart(n, i.library.visualization.ColumnChart, e, t)
        })
    }, Pt.prototype.renderBarChart = function(i) {
        var r = this;
        this.waitForLoaded(i, function() {
            var t = {
                    hAxis: {
                        gridlines: {
                            color: "#ccc"
                        }
                    }
                },
                e = u(wt, _t, St, kt, Ct, Mt, Tt, Dt)(i, i.options, t),
                n = r.createDataTable(i.data, "string", i.options.xtype);
            r.drawChart(i, r.library.visualization.BarChart, n, e)
        })
    }, Pt.prototype.renderAreaChart = function(r) {
        var o = this;
        this.waitForLoaded(r, function() {
            var t = {
                    isStacked: !0,
                    pointSize: 0,
                    areaOpacity: .5
                },
                e = At(r, r.options, t),
                n = r.discrete ? "string" : "datetime";
            "number" === r.options.xtype && (n = "number");
            var i = o.createDataTable(r.data, n);
            o.drawChart(r, o.library.visualization.AreaChart, i, e)
        })
    }, Pt.prototype.renderGeoChart = function(i) {
        var r = this;
        this.waitForLoaded(i, function() {
            var t = {
                    legend: "none",
                    colorAxis: {
                        colors: i.options.colors || ["#f6c7b6", "#ce502d"]
                    }
                },
                e = I(I(wt, t), i.options.library || {}),
                n = new r.library.visualization.DataTable;
            n.addColumn("string", ""), n.addColumn("number", i.options.label || "Value"), n.addRows(i.data), r.drawChart(i, r.library.visualization.GeoChart, n, e)
        })
    }, Pt.prototype.renderScatterChart = function(u) {
        var c = this;
        this.waitForLoaded(u, function() {
            var t, e, n, i, r = {},
                o = At(u, u.options, r),
                a = u.data,
                s = [];
            for (t = 0; t < a.length; t++)
                for (i = a[t].data, e = 0; e < i.length; e++) {
                    var l = new Array(a.length + 1);
                    l[0] = i[e][0], l[t + 1] = i[e][1], s.push(l)
                }
            for ((n = new c.library.visualization.DataTable).addColumn("number", ""), t = 0; t < a.length; t++) n.addColumn("number", a[t].name);
            n.addRows(s), c.drawChart(u, c.library.visualization.ScatterChart, n, o)
        })
    }, Pt.prototype.renderTimeline = function(i) {
        var r = this;
        this.waitForLoaded(i, "timeline", function() {
            var t = {
                legend: "none"
            };
            i.options.colors && (t.colors = i.options.colors);
            var e = I(I(wt, t), i.options.library || {}),
                n = new r.library.visualization.DataTable;
            n.addColumn({
                type: "string",
                id: "Name"
            }), n.addColumn({
                type: "date",
                id: "Start"
            }), n.addColumn({
                type: "date",
                id: "End"
            }), n.addRows(i.data), i.element.style.lineHeight = "normal", r.drawChart(i, r.library.visualization.Timeline, n, e)
        })
    }, Pt.prototype.drawChart = function(t, e, n, i) {
        t.chart && t.chart.clearChart(), t.chart = new e(t.element), Et(function() {
            t.chart.draw(n, i)
        })
    }, Pt.prototype.waitForLoaded = function(t, e, n) {
        var i = this;
        if (n || (n = e, e = "corechart"), xt.push({
                pack: e,
                callback: n
            }), bt[e]) this.runCallbacks();
        else {
            bt[e] = !0;
            var r = {
                    packages: [e],
                    callback: function() {
                        i.runCallbacks()
                    }
                },
                o = t.__config();
            o.language && (r.language = o.language), "corechart" === e && o.mapsApiKey && (r.mapsApiKey = o.mapsApiKey), this.library.setOnLoadCallback ? this.library.load("visualization", "1", r) : this.library.charts.load("current", r)
        }
    }, Pt.prototype.runCallbacks = function() {
        for (var t, e = this, n = 0; n < xt.length; n++) t = xt[n], e.library.visualization && ("corechart" === t.pack && e.library.visualization.LineChart || "timeline" === t.pack && e.library.visualization.Timeline) && (t.callback(), xt.splice(n, 1), n--)
    }, Pt.prototype.createDataTable = function(t, e, n) {
        var i, r, o, a, s, l = [],
            u = [];
        for (i = 0; i < t.length; i++)
            for (o = t[i], r = 0; r < o.data.length; r++) a = o.data[r], l[s = "datetime" === e ? a[0].getTime() : a[0]] || (l[s] = new Array(t.length), u.push(s)), l[s][i] = L(a[1]);
        var c, d = [],
            h = !0;
        for (r = 0; r < u.length; r++) i = u[r], "datetime" === e ? (c = new Date(L(i)), h = h && R(c)) : c = "number" === e ? L(i) : i, d.push([c].concat(l[i]));
        if ("datetime" === e ? d.sort(g) : "number" === e && d.sort(m), "number" === n)
            for (d.sort(m), i = 0; i < d.length; i++) d[i][0] = p(d[i][0]);
        var f = new this.library.visualization.DataTable;
        for (e = "datetime" === e && h ? "date" : e, f.addColumn(e, ""), i = 0; i < t.length; i++) f.addColumn("number", t[i].name);
        return f.addRows(d), f
    };
    var Ot = [],
        It = 0,
        Lt = 4,
        zt = "undefined" != typeof window && window.Chartkick || {},
        Nt = [],
        Ft = function(t, e) {
            return t = "number" === e ? L(t) : "datetime" === e ? n(t) : p(t)
        },
        Rt = function(t, e) {
            var n, i, r = [];
            for (i = 0; i < t.length; i++) "bubble" === e ? r.push([L(t[i][0]), L(t[i][1]), L(t[i][2])]) : (n = Ft(t[i][0], e), r.push([n, L(t[i][1])]));
            return "datetime" === e ? r.sort(g) : "number" === e && r.sort(m), r
        },
        jt = function(t, e, n) {
            var i;
            if ("string" == typeof t && (i = t, !(t = document.getElementById(t)))) throw new Error("No element with id " + i);
            this.element = t, this.options = I($t.options, n || {}), this.dataSource = e, k($t.charts[t.id] = this, e), this.options.refresh && this.startRefresh()
        };
    jt.prototype.getElement = function() {
        return this.element
    }, jt.prototype.getDataSource = function() {
        return this.dataSource
    }, jt.prototype.getData = function() {
        return this.data
    }, jt.prototype.getOptions = function() {
        return this.options
    }, jt.prototype.getChartObject = function() {
        return this.chart
    }, jt.prototype.getAdapter = function() {
        return this.adapter
    }, jt.prototype.updateData = function(t, e) {
        this.dataSource = t, e && this.__updateOptions(e), k(this, t)
    }, jt.prototype.setOptions = function(t) {
        this.__updateOptions(t), this.redraw()
    }, jt.prototype.redraw = function() {
        k(this, this.rawData)
    }, jt.prototype.refreshData = function() {
        if ("string" == typeof this.dataSource) {
            var t = -1 === this.dataSource.indexOf("?") ? "?" : "&";
            k(this, this.dataSource + t + "_=" + (new Date).getTime())
        }
    }, jt.prototype.startRefresh = function() {
        var t = this,
            e = this.options.refresh;
        if (!this.intervalId) {
            if (!e) throw new Error("No refresh interval");
            this.intervalId = setInterval(function() {
                t.refreshData()
            }, 1e3 * e)
        }
    }, jt.prototype.stopRefresh = function() {
        this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
    }, jt.prototype.toImage = function() {
        return "chartjs" === this.adapter ? this.chart.toBase64Image() : null
    }, jt.prototype.__updateOptions = function(t) {
        var e = t.refresh && t.refresh !== this.options.refresh;
        this.options = I($t.options, t), e && (this.stopRefresh(), this.startRefresh())
    }, jt.prototype.__render = function() {
        this.data = this.__processData(), P(this.__chartName(), this)
    }, jt.prototype.__config = function() {
        return zt
    };
    var $t = {
        LineChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "datetime")
            }, e.prototype.__chartName = function() {
                return "LineChart"
            }, e
        }(jt),
        PieChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return Y(this)
            }, e.prototype.__chartName = function() {
                return "PieChart"
            }, e
        }(jt),
        ColumnChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "string")
            }, e.prototype.__chartName = function() {
                return "ColumnChart"
            }, e
        }(jt),
        BarChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "string")
            }, e.prototype.__chartName = function() {
                return "BarChart"
            }, e
        }(jt),
        AreaChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "datetime")
            }, e.prototype.__chartName = function() {
                return "AreaChart"
            }, e
        }(jt),
        GeoChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return Y(this)
            }, e.prototype.__chartName = function() {
                return "GeoChart"
            }, e
        }(jt),
        ScatterChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "number")
            }, e.prototype.__chartName = function() {
                return "ScatterChart"
            }, e
        }(jt),
        BubbleChart: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                return q(this, "bubble")
            }, e.prototype.__chartName = function() {
                return "BubbleChart"
            }, e
        }(jt),
        Timeline: function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), (e.prototype.constructor = e).prototype.__processData = function() {
                var t, e = this.rawData;
                for (t = 0; t < e.length; t++) e[t][1] = n(e[t][1]), e[t][2] = n(e[t][2]);
                return e
            }, e.prototype.__chartName = function() {
                return "Timeline"
            }, e
        }(jt),
        charts: {},
        configure: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (zt[e] = t[e])
        },
        eachChart: function(t) {
            for (var e in $t.charts) $t.charts.hasOwnProperty(e) && t($t.charts[e])
        },
        config: zt,
        options: {},
        adapters: Nt,
        addAdapter: t
    };
    return $t
}),
function() {}.call(this), $(".alert-dismissible").fadeTo(2e3, 500).slideUp(500, function() {
        $(".alert-dismissable").slideUp(500)
    }), document.addEventListener("DOMContentLoaded", function() {
        var t = document.getElementById("user_address");
        if (t) {
            var e = new google.maps.places.Autocomplete(t, {
                types: ["geocode"]
            });
            google.maps.event.addListener(e, "place_changed", onPlaceChanged), google.maps.event.addDomListener(t, "keydown", function(t) {
                "Enter" === t.key && t.preventDefault()
            })
        }
    }),
    function() {
        var t = this;
        (function() {
            (function() {
                var n = [].slice;
                this.ActionCable = {
                    INTERNAL: {
                        message_types: {
                            welcome: "welcome",
                            ping: "ping",
                            confirmation: "confirm_subscription",
                            rejection: "reject_subscription"
                        },
                        default_mount_path: "/cable",
                        protocols: ["actioncable-v1-json", "actioncable-unsupported"]
                    },
                    WebSocket: window.WebSocket,
                    logger: window.console,
                    createConsumer: function(t) {
                        var e;
                        return null == t && (t = null != (e = this.getConfig("url")) ? e : this.INTERNAL.default_mount_path), new l.Consumer(this.createWebSocketURL(t))
                    },
                    getConfig: function(t) {
                        var e;
                        return null != (e = document.head.querySelector("meta[name='action-cable-" + t + "']")) ? e.getAttribute("content") : void 0
                    },
                    createWebSocketURL: function(t) {
                        var e;
                        return t && !/^wss?:/i.test(t) ? ((e = document.createElement("a")).href = t, e.href = e.href, e.protocol = e.protocol.replace("http", "ws"), e.href) : t
                    },
                    startDebugging: function() {
                        return this.debugging = !0
                    },
                    stopDebugging: function() {
                        return this.debugging = null
                    },
                    log: function() {
                        var t, e;
                        if (t = 1 <= arguments.length ? n.call(arguments, 0) : [], this.debugging) return t.push(Date.now()), (e = this.logger).log.apply(e, ["[ActionCable]"].concat(n.call(t)))
                    }
                }
            }).call(this)
        }).call(t);
        var l = t.ActionCable;
        (function() {
            (function() {
                var i = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                };
                l.ConnectionMonitor = function() {
                    function t(t) {
                        this.connection = t, this.visibilityDidChange = i(this.visibilityDidChange, this), this.reconnectAttempts = 0
                    }
                    var r, e, n;
                    return t.pollInterval = {
                        min: 3,
                        max: 30
                    }, t.staleThreshold = 6, t.prototype.start = function() {
                        if (!this.isRunning()) return this.startedAt = e(), delete this.stoppedAt, this.startPolling(), document.addEventListener("visibilitychange", this.visibilityDidChange), l.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
                    }, t.prototype.stop = function() {
                        if (this.isRunning()) return this.stoppedAt = e(), this.stopPolling(), document.removeEventListener("visibilitychange", this.visibilityDidChange), l.log("ConnectionMonitor stopped")
                    }, t.prototype.isRunning = function() {
                        return null != this.startedAt && null == this.stoppedAt
                    }, t.prototype.recordPing = function() {
                        return this.pingedAt = e()
                    }, t.prototype.recordConnect = function() {
                        return this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, l.log("ConnectionMonitor recorded connect")
                    }, t.prototype.recordDisconnect = function() {
                        return this.disconnectedAt = e(), l.log("ConnectionMonitor recorded disconnect")
                    }, t.prototype.startPolling = function() {
                        return this.stopPolling(), this.poll()
                    }, t.prototype.stopPolling = function() {
                        return clearTimeout(this.pollTimeout)
                    }, t.prototype.poll = function() {
                        return this.pollTimeout = setTimeout((t = this, function() {
                            return t.reconnectIfStale(), t.poll()
                        }), this.getPollInterval());
                        var t
                    }, t.prototype.getPollInterval = function() {
                        var t, e, n, i;
                        return n = (i = this.constructor.pollInterval).min, e = i.max, t = 5 * Math.log(this.reconnectAttempts + 1), Math.round(1e3 * r(t, n, e))
                    }, t.prototype.reconnectIfStale = function() {
                        if (this.connectionIsStale()) return l.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + n(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? l.log("ConnectionMonitor skipping reopening recent disconnect") : (l.log("ConnectionMonitor reopening"), this.connection.reopen())
                    }, t.prototype.connectionIsStale = function() {
                        var t;
                        return n(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
                    }, t.prototype.disconnectedRecently = function() {
                        return this.disconnectedAt && n(this.disconnectedAt) < this.constructor.staleThreshold
                    }, t.prototype.visibilityDidChange = function() {
                        if ("visible" === document.visibilityState) return setTimeout((t = this, function() {
                            if (t.connectionIsStale() || !t.connection.isOpen()) return l.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState), t.connection.reopen()
                        }), 200);
                        var t
                    }, e = function() {
                        return (new Date).getTime()
                    }, n = function(t) {
                        return (e() - t) / 1e3
                    }, r = function(t, e, n) {
                        return Math.max(e, Math.min(n, t))
                    }, t
                }()
            }).call(this),
                function() {
                    var t, r, e, n, i, o = [].slice,
                        a = function(t, e) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        },
                        s = [].indexOf || function(t) {
                            for (var e = 0, n = this.length; e < n; e++)
                                if (e in this && this[e] === t) return e;
                            return -1
                        };
                    n = l.INTERNAL, r = n.message_types, e = n.protocols, i = 2 <= e.length ? o.call(e, 0, t = e.length - 1) : (t = 0, []), e[t++], l.Connection = function() {
                        function t(t) {
                            this.consumer = t, this.open = a(this.open, this), this.subscriptions = this.consumer.subscriptions, this.monitor = new l.ConnectionMonitor(this), this.disconnected = !0
                        }
                        return t.reopenDelay = 500, t.prototype.send = function(t) {
                            return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)), !0)
                        }, t.prototype.open = function() {
                            return this.isActive() ? (l.log("Attempted to open WebSocket, but existing socket is " + this.getState()), !1) : (l.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + e), null != this.webSocket && this.uninstallEventHandlers(), this.webSocket = new l.WebSocket(this.consumer.url, e), this.installEventHandlers(), this.monitor.start(), !0)
                        }, t.prototype.close = function(t) {
                            var e;
                            if ((null != t ? t : {
                                    allowReconnect: !0
                                }).allowReconnect || this.monitor.stop(), this.isActive()) return null != (e = this.webSocket) ? e.close() : void 0
                        }, t.prototype.reopen = function() {
                            var t;
                            if (l.log("Reopening WebSocket, current state is " + this.getState()), !this.isActive()) return this.open();
                            try {
                                return this.close()
                            } catch (e) {
                                return t = e, l.log("Failed to reopen WebSocket", t)
                            } finally {
                                l.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
                            }
                        }, t.prototype.getProtocol = function() {
                            var t;
                            return null != (t = this.webSocket) ? t.protocol : void 0
                        }, t.prototype.isOpen = function() {
                            return this.isState("open")
                        }, t.prototype.isActive = function() {
                            return this.isState("open", "connecting")
                        }, t.prototype.isProtocolSupported = function() {
                            var t;
                            return t = this.getProtocol(), 0 <= s.call(i, t)
                        }, t.prototype.isState = function() {
                            var t, e;
                            return e = 1 <= arguments.length ? o.call(arguments, 0) : [], t = this.getState(), 0 <= s.call(e, t)
                        }, t.prototype.getState = function() {
                            var t, e;
                            for (e in WebSocket)
                                if (WebSocket[e] === (null != (t = this.webSocket) ? t.readyState : void 0)) return e.toLowerCase();
                            return null
                        }, t.prototype.installEventHandlers = function() {
                            var t, e;
                            for (t in this.events) e = this.events[t].bind(this), this.webSocket["on" + t] = e
                        }, t.prototype.uninstallEventHandlers = function() {
                            var t;
                            for (t in this.events) this.webSocket["on" + t] = function() {}
                        }, t.prototype.events = {
                            message: function(t) {
                                var e, n, i;
                                if (this.isProtocolSupported()) switch (e = (i = JSON.parse(t.data)).identifier, n = i.message, i.type) {
                                    case r.welcome:
                                        return this.monitor.recordConnect(), this.subscriptions.reload();
                                    case r.ping:
                                        return this.monitor.recordPing();
                                    case r.confirmation:
                                        return this.subscriptions.notify(e, "connected");
                                    case r.rejection:
                                        return this.subscriptions.reject(e);
                                    default:
                                        return this.subscriptions.notify(e, "received", n)
                                }
                            },
                            open: function() {
                                if (l.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return l.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({
                                    allowReconnect: !1
                                })
                            },
                            close: function() {
                                if (l.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", {
                                    willAttemptReconnect: this.monitor.isRunning()
                                })
                            },
                            error: function() {
                                return l.log("WebSocket onerror event")
                            }
                        }, t
                    }()
                }.call(this),
                function() {
                    var u = [].slice;
                    l.Subscriptions = function() {
                        function t(t) {
                            this.consumer = t, this.subscriptions = []
                        }
                        return t.prototype.create = function(t, e) {
                            var n, i, r;
                            return i = "object" == typeof(n = t) ? n : {
                                channel: n
                            }, r = new l.Subscription(this.consumer, i, e), this.add(r)
                        }, t.prototype.add = function(t) {
                            return this.subscriptions.push(t), this.consumer.ensureActiveConnection(), this.notify(t, "initialized"), this.sendCommand(t, "subscribe"), t
                        }, t.prototype.remove = function(t) {
                            return this.forget(t), this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"), t
                        }, t.prototype.reject = function(t) {
                            var e, n, i, r, o;
                            for (r = [], e = 0, n = (i = this.findAll(t)).length; e < n; e++) o = i[e], this.forget(o), this.notify(o, "rejected"), r.push(o);
                            return r
                        }, t.prototype.forget = function(r) {
                            var o;
                            return this.subscriptions = function() {
                                var t, e, n, i;
                                for (i = [], t = 0, e = (n = this.subscriptions).length; t < e; t++)(o = n[t]) !== r && i.push(o);
                                return i
                            }.call(this), r
                        }, t.prototype.findAll = function(t) {
                            var e, n, i, r, o;
                            for (r = [], e = 0, n = (i = this.subscriptions).length; e < n; e++)(o = i[e]).identifier === t && r.push(o);
                            return r
                        }, t.prototype.reload = function() {
                            var t, e, n, i, r;
                            for (i = [], t = 0, e = (n = this.subscriptions).length; t < e; t++) r = n[t], i.push(this.sendCommand(r, "subscribe"));
                            return i
                        }, t.prototype.notifyAll = function(t) {
                            var e, n, i, r, o, a, s;
                            for (n = t, e = 2 <= arguments.length ? u.call(arguments, 1) : [], a = [], i = 0, r = (o = this.subscriptions).length; i < r; i++) s = o[i], a.push(this.notify.apply(this, [s, n].concat(u.call(e))));
                            return a
                        }, t.prototype.notify = function(t, e) {
                            var n, i, r, o, a, s, l;
                            for (s = t, i = e, n = 3 <= arguments.length ? u.call(arguments, 2) : [], a = [], r = 0, o = (l = "string" == typeof s ? this.findAll(s) : [s]).length; r < o; r++) s = l[r], a.push("function" == typeof s[i] ? s[i].apply(s, n) : void 0);
                            return a
                        }, t.prototype.sendCommand = function(t, e) {
                            var n;
                            return n = t.identifier, this.consumer.send({
                                command: e,
                                identifier: n
                            })
                        }, t
                    }()
                }.call(this),
                function() {
                    l.Subscription = function() {
                        function t(t, e, n) {
                            this.consumer = t, null == e && (e = {}), this.identifier = JSON.stringify(e), i(this, n)
                        }
                        var i;
                        return t.prototype.perform = function(t, e) {
                            return null == e && (e = {}), e.action = t, this.send(e)
                        }, t.prototype.send = function(t) {
                            return this.consumer.send({
                                command: "message",
                                identifier: this.identifier,
                                data: JSON.stringify(t)
                            })
                        }, t.prototype.unsubscribe = function() {
                            return this.consumer.subscriptions.remove(this)
                        }, i = function(t, e) {
                            var n, i;
                            if (null != e)
                                for (n in e) i = e[n], t[n] = i;
                            return t
                        }, t
                    }()
                }.call(this),
                function() {
                    l.Consumer = function() {
                        function t(t) {
                            this.url = t, this.subscriptions = new l.Subscriptions(this), this.connection = new l.Connection(this)
                        }
                        return t.prototype.send = function(t) {
                            return this.connection.send(t)
                        }, t.prototype.connect = function() {
                            return this.connection.open()
                        }, t.prototype.disconnect = function() {
                            return this.connection.close({
                                allowReconnect: !1
                            })
                        }, t.prototype.ensureActiveConnection = function() {
                            if (!this.connection.isActive()) return this.connection.open()
                        }, t
                    }()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = l : "function" == typeof define && define.amd && define(l)
    }.call(this),
    function() {
        this.App || (this.App = {}), App.cable = ActionCable.createConsumer()
    }.call(this),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
    }(this, function() {
        return function(n) {
            function i(t) {
                if (r[t]) return r[t].exports;
                var e = r[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports
            }
            var r = {};
            return i.m = n, i.c = r, i.i = function(t) {
                return t
            }, i.d = function(t, e, n) {
                i.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, i.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t["default"]
                } : function() {
                    return t
                };
                return i.d(e, "a", e), e
            }, i.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, i.p = "", i(i.s = 3)
        }([function(t, e, n) {
            var i, r, o, a;
            a = function(t, n) {
                "use strict";

                function i(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                var e, r = (e = n) && e.__esModule ? e : {
                        "default": e
                    },
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = function() {
                        function i(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        }
                    }(),
                    s = function() {
                        function e(t) {
                            i(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return a(e, [{
                            key: "resolveOptions",
                            value: function(t) {
                                var e = 0 < arguments.length && void 0 !== t ? t : {};
                                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var t = this,
                                    e = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r["default"])(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, r["default"])(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (n) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function(t) {
                                var e = 0 < arguments.length && void 0 !== t ? t : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (void 0 !== t) {
                                    if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                t.exports = s
            }, r = [t, n(7)], void 0 !== (o = "function" == typeof(i = a) ? i.apply(e, r) : i) && (t.exports = o)
        }, function(t, e, n) {
            function i(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!s.string(e)) throw new TypeError("Second argument must be a String");
                if (!s.fn(n)) throw new TypeError("Third argument must be a Function");
                if (s.node(t)) return r(t, e, n);
                if (s.nodeList(t)) return o(t, e, n);
                if (s.string(t)) return a(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function r(t, e, n) {
                return t.addEventListener(e, n), {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }

            function o(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }

            function a(t, e, n) {
                return l(document.body, t, e, n)
            }
            var s = n(6),
                l = n(5);
            t.exports = i
        }, function(t) {
            function e() {}
            e.prototype = {
                on: function(t, e, n) {
                    var i = this.e || (this.e = {});
                    return (i[t] || (i[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    function i() {
                        r.off(t, i), e.apply(n, arguments)
                    }
                    var r = this;
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        r = [];
                    if (i && e)
                        for (var o = 0, a = i.length; o < a; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            }, t.exports = e
        }, function(t, e, n) {
            var i, r, o, a;
            a = function(t, e, n, i) {
                "use strict";

                function r(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function a(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function s(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function l(t, e) {
                    var n = "data-clipboard-" + t;
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                }
                var u = r(e),
                    c = r(n),
                    d = r(i),
                    h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    f = function() {
                        function i(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(t, e, n) {
                            return e && i(t.prototype, e), n && i(t, n), t
                        }
                    }(),
                    p = function() {
                        function i(t, e) {
                            o(this, i);
                            var n = a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                            return n.resolveOptions(e), n.listenClick(t), n
                        }
                        return s(i, c["default"]), f(i, [{
                            key: "resolveOptions",
                            value: function(t) {
                                var e = 0 < arguments.length && void 0 !== t ? t : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(t) {
                                var e = this;
                                this.listener = (0, d["default"])(t, "click", function(t) {
                                    return e.onClick(t)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(t) {
                                var e = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u["default"]({
                                    action: this.action(e),
                                    target: this.target(e),
                                    text: this.text(e),
                                    container: this.container,
                                    trigger: e,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(t) {
                                return l("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(t) {
                                var e = l("target", t);
                                if (e) return document.querySelector(e)
                            }
                        }, {
                            key: "defaultText",
                            value: function(t) {
                                return l("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function(t) {
                                var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],
                                    n = "string" == typeof e ? [e] : e,
                                    i = !!document.queryCommandSupported;
                                return n.forEach(function(t) {
                                    i = i && !!document.queryCommandSupported(t)
                                }), i
                            }
                        }]), i
                    }();
                t.exports = p
            }, r = [t, n(0), n(2), n(1)], void 0 !== (o = "function" == typeof(i = a) ? i.apply(e, r) : i) && (t.exports = o)
        }, function(t) {
            function e(t, e) {
                for (; t && t.nodeType !== n;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
            var n = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = e
        }, function(t, e, n) {
            function o(t, e, n, i, r) {
                var o = a.apply(this, arguments);
                return t.addEventListener(n, o, r), {
                    destroy: function() {
                        t.removeEventListener(n, o, r)
                    }
                }
            }

            function i(t, e, n, i, r) {
                return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                    return o(t, e, n, i, r)
                }))
            }

            function a(e, n, t, i) {
                return function(t) {
                    t.delegateTarget = r(t.target, n), t.delegateTarget && i.call(e, t)
                }
            }
            var r = n(4);
            t.exports = i
        }, function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, function(t) {
            function e(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var i = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(t), i.removeAllRanges(), i.addRange(r), e = i.toString()
                }
                return e
            }
            t.exports = e
        }])
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
    }(window, function(t, i) {
        "use strict";

        function e(u, r, c) {
            function e(t, o, a) {
                var s, l = "$()." + u + '("' + o + '")';
                return t.each(function(t, e) {
                    var n = c.data(e, u);
                    if (n) {
                        var i = n[o];
                        if (i && "_" != o.charAt(0)) {
                            var r = i.apply(n, a);
                            s = void 0 === s ? r : s
                        } else d(l + " is not a valid method")
                    } else d(u + " not initialized. Cannot call methods, i.e. " + l)
                }), void 0 !== s ? s : t
            }

            function n(t, i) {
                t.each(function(t, e) {
                    var n = c.data(e, u);
                    n ? (n.option(i), n._init()) : (n = new r(e, i), c.data(e, u, n))
                })
            }(c = c || i || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
                c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
            }), c.fn[u] = function(t) {
                return "string" == typeof t ? e(this, t, a.call(arguments, 1)) : (n(this, t), this)
            }, o(c))
        }

        function o(t) {
            !t || t && t.bridget || (t.bridget = e)
        }
        var a = Array.prototype.slice,
            n = t.console,
            d = void 0 === n ? function() {} : function(t) {
                n.error(t)
            };
        return o(i || t.jQuery), e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r];
                    i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function v(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function t() {}

        function y() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < S; e++) {
                t[_[e]] = 0
            }
            return t
        }

        function b(t) {
            var e = getComputedStyle(t);
            return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function x() {
            if (!r) {
                r = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var e = document.body || document.documentElement;
                e.appendChild(t);
                var n = b(t);
                i.isBoxSizeOuter = w = 200 == v(n.width),
                    e.removeChild(t)
            }
        }

        function i(t) {
            if (x(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = b(t);
                if ("none" == e.display) return y();
                var n = {};
                n.width = t.offsetWidth, n.height = t.offsetHeight;
                for (var i = n.isBorderBox = "border-box" == e.boxSizing, r = 0; r < S; r++) {
                    var o = _[r],
                        a = e[o],
                        s = parseFloat(a);
                    n[o] = isNaN(s) ? 0 : s
                }
                var l = n.paddingLeft + n.paddingRight,
                    u = n.paddingTop + n.paddingBottom,
                    c = n.marginLeft + n.marginRight,
                    d = n.marginTop + n.marginBottom,
                    h = n.borderLeftWidth + n.borderRightWidth,
                    f = n.borderTopWidth + n.borderBottomWidth,
                    p = i && w,
                    g = v(e.width);
                !1 !== g && (n.width = g + (p ? 0 : l + h));
                var m = v(e.height);
                return !1 !== m && (n.height = m + (p ? 0 : u + f)), n.innerWidth = n.width - (l + h), n.innerHeight = n.height - (u + f), n.outerWidth = n.width + c, n.outerHeight = n.height + d, n
            }
        }
        var w, n = "undefined" == typeof console ? t : function(t) {
                console.error(t)
            },
            _ = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            S = _.length,
            r = !1;
        return i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var n = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n] + "MatchesSelector";
                if (t[i]) return i
            }
        }();
        return function(t, e) {
            return t[n](e)
        }
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
    }(window, function(i, o) {
        var c = {
                extend: function(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            e = Array.prototype.slice;
        c.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
        }, c.removeFrom = function(t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, c.getParent = function(t, e) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, o(t, e)) return t
        }, c.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.filterFindElements = function(t, i) {
            t = c.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    o(t, i) && r.push(t);
                    for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) r.push(e[n])
                }
            }), r
        }, c.debounceMethod = function(t, e, i) {
            i = i || 100;
            var r = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    n = this;
                this[o] = setTimeout(function() {
                    r.apply(n, e), delete n[o]
                }, i)
            }
        }, c.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, c.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var d = i.console;
        return c.htmlInit = function(l, u) {
            c.docReady(function() {
                var t = c.toDashed(u),
                    r = "data-" + t,
                    o = document.querySelectorAll("[" + r + "]"),
                    e = document.querySelectorAll(".js-" + t),
                    n = c.makeArray(o).concat(c.makeArray(e)),
                    a = r + "-options",
                    s = i.jQuery;
                n.forEach(function(t) {
                    var e, n = t.getAttribute(r) || t.getAttribute(a);
                    try {
                        e = n && JSON.parse(n)
                    } catch (o) {
                        return void(d && d.error("Error parsing " + r + " on " + t.className + ": " + o))
                    }
                    var i = new l(t, e);
                    s && s.data(t, u, i)
                })
            })
        }, c
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = n(e, e.getSize))
    }(window, function(t, e) {
        function n(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var i = n.prototype;
        return i.create = function() {
            this.element.style.position = "absolute", this.element.setAttribute("aria-selected", "false"), this.x = 0, this.shift = 0
        }, i.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.removeAttribute("aria-selected"), this.element.style[t] = ""
        }, i.getSize = function() {
            this.size = e(this.element)
        }, i.setPosition = function(t) {
            this.x = t, this.updateTarget(), this.renderPosition(t)
        }, i.updateTarget = i.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, i.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, i.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, i.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
    }(window, function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                n = e ? e.size[t] : 0,
                i = this.outerWidth - (this.firstMargin + n);
            this.target = this.x + this.firstMargin + i * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.changeSelected(!0)
        }, e.unselect = function() {
            this.changeSelected(!1)
        }, e.changeSelected = function(e) {
            var n = e ? "add" : "remove";
            this.cells.forEach(function(t) {
                t.element.classList[n]("is-selected"), t.element.setAttribute("aria-selected", e.toString())
            })
        }, e.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, t
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = n(e, e.fizzyUIUtils))
    }(window, function(t, o) {
        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
            r = 0;
        n || (n = function(t) {
            var e = (new Date).getTime(),
                n = Math.max(0, 16 - (e - r)),
                i = setTimeout(t, n);
            return r = e + n, i
        });
        var e = {
                startAnimation: function() {
                    this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                },
                animate: function() {
                    this.applyDragForce(), this.applySelectedAttraction();
                    var t = this.x;
                    if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                        var e = this;
                        n(function() {
                            e.animate()
                        })
                    }
                }
            },
            a = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
        return e.positionSlider = function() {
            var t = this.x;
            this.options.wrapAround && 1 < this.cells.length && (t = o.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && a ? -t : t;
            var e = this.getPositionValue(t);
            this.slider.style[a] = this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")";
            var n = this.slides[0];
            if (n) {
                var i = -this.x - n.target,
                    r = i / this.slidesWidth;
                this.dispatchEvent("scroll", null, [r, i])
            }
        }, e.positionSliderAtSelected = function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        }, e.getPositionValue = function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, e.settle = function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        }, e.shiftWrapCells = function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var n = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, n, 1)
        }, e._shiftCells = function(t, e, n) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i],
                    o = 0 < e ? n : 0;
                r.wrapShift(o), e -= r.size.outerWidth
            }
        }, e._unshiftCells = function(t) {
            if (t && t.length)
                for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
        }, e.integratePhysics = function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        }, e.applyForce = function(t) {
            this.velocity += t
        }, e.getFrictionFactor = function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, e.getRestingPosition = function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, e.applyDragForce = function() {
            if (this.isDraggable && this.isPointerDown) {
                var t = this.dragX - this.x - this.velocity;
                this.applyForce(t)
            }
        }, e.applySelectedAttraction = function() {
            if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(t)
            }
        }, e
    }),
    function(a, s) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, n, i, r, o) {
            return s(a, t, e, n, i, r, o)
        });
        else if ("object" == typeof module && module.exports) module.exports = s(a, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
        else {
            var t = a.Flickity;
            a.Flickity = s(a, a.EvEmitter, a.getSize, a.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
        }
    }(window, function(i, t, e, s, n, a, r) {
        function o(t, e) {
            for (t = s.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function l(t, e) {
            var n = s.getQueryElement(t);
            if (n) {
                if (this.element = n, this.element.flickityGUID) {
                    var i = f[this.element.flickityGUID];
                    return i.option(e), i
                }
                u && (this.$element = u(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e), this._create()
            } else d && d.error("Bad element for Flickity: " + (n || t))
        }
        var u = i.jQuery,
            c = i.getComputedStyle,
            d = i.console,
            h = 0,
            f = {};
        l.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, l.createMethods = [];
        var p = l.prototype;
        s.extend(p, t.prototype), p._create = function() {
            var t = this.guid = ++h;
            for (var e in this.element.flickityGUID = t, (f[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && i.addEventListener("resize", this), this.options.on) {
                var n = this.options.on[e];
                this.on(e, n)
            }
            l.createMethods.forEach(function(t) {
                this[t]()
            }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
        }, p.option = function(t) {
            s.extend(this.options, t)
        }, p.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), o(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
                var t, e = this.options.initialIndex;
                t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0, this.select(t, !1, !0), this.isInitActivated = !0, this.dispatchEvent("ready")
            }
        }, p._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, p._filterFindCellElements = function(t) {
            return s.filterFindElements(t, this.options.cellSelector)
        }, p.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, p._makeCells = function(t) {
            return this._filterFindCellElements(t).map(function(t) {
                return new n(t, this)
            }, this)
        }, p.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, p.getLastSlide = function() {
            return this.slides[this.slides.length - 1]
        }, p.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, p._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
            var e = 0;
            if (0 < t) {
                var n = this.cells[t - 1];
                e = n.x + n.size.outerWidth
            }
            for (var i = this.cells.length, r = t; r < i; r++) {
                var o = this.cells[r];
                o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
            }
            this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0
        }, p._sizeCells = function(t) {
            t.forEach(function(t) {
                t.getSize()
            })
        }, p.updateSlides = function() {
            if (this.slides = [], this.cells.length) {
                var i = new a(this);
                this.slides.push(i);
                var r = "left" == this.originSide ? "marginRight" : "marginLeft",
                    o = this._getCanCellFit();
                this.cells.forEach(function(t, e) {
                    if (i.cells.length) {
                        var n = i.outerWidth - i.firstMargin + (t.size.outerWidth - t.size[r]);
                        o.call(this, e, n) || (i.updateTarget(), i = new a(this), this.slides.push(i)), i.addCell(t)
                    } else i.addCell(t)
                }, this), i.updateTarget(), this.updateSelectedSlide()
            }
        }, p._getCanCellFit = function() {
            var t = this.options.groupCells;
            if (!t) return function() {
                return !1
            };
            if ("number" == typeof t) {
                var e = parseInt(t, 10);
                return function(t) {
                    return t % e != 0
                }
            }
            var n = "string" == typeof t && t.match(/^(\d+)%$/),
                i = n ? parseInt(n[1], 10) / 100 : 1;
            return function(t, e) {
                return e <= (this.size.innerWidth + 1) * i
            }
        }, p._init = p.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, p.getSize = function() {
            this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var g = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        return p.setCellAlign = function() {
            var t = g[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, p.setGallerySize = function() {
            if (this.options.setGallerySize) {
                var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                this.viewport.style.height = t + "px"
            }
        }, p._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, p._getGapCells = function(t, e, n) {
            for (var i = []; 0 < t;) {
                var r = this.cells[e];
                if (!r) break;
                i.push(r), e += n, t -= r.size.outerWidth
            }
            return i
        }, p._containSlides = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                var t = this.options.rightToLeft,
                    e = t ? "marginRight" : "marginLeft",
                    n = t ? "marginLeft" : "marginRight",
                    i = this.slideableWidth - this.getLastCell().size[n],
                    r = i < this.size.innerWidth,
                    o = this.cursorPosition + this.cells[0].size[e],
                    a = i - this.size.innerWidth * (1 - this.cellAlign);
                this.slides.forEach(function(t) {
                    r ? t.target = i * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, a))
                }, this)
            }
        }, p.dispatchEvent = function(t, e, n) {
            var i = e ? [e].concat(n) : n;
            if (this.emitEvent(t, i), u && this.$element) {
                var r = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                if (e) {
                    var o = u.Event(e);
                    o.type = t, r = o
                }
                this.$element.trigger(r, n)
            }
        }, p.select = function(t, e, n) {
            if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = s.modulo(t, this.slides.length)), this.slides[t])) {
                var i = this.selectedIndex;
                this.selectedIndex = t, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != i && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
            }
        }, p._wrapSelect = function(t) {
            var e = this.slides.length;
            if (!(this.options.wrapAround && 1 < e)) return t;
            var n = s.modulo(t, e),
                i = Math.abs(n - this.selectedIndex),
                r = Math.abs(n + e - this.selectedIndex),
                o = Math.abs(n - e - this.selectedIndex);
            !this.isDragSelect && r < i ? t += e : !this.isDragSelect && o < i && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
        }, p.previous = function(t, e) {
            this.select(this.selectedIndex - 1, t, e)
        }, p.next = function(t, e) {
            this.select(this.selectedIndex + 1, t, e)
        }, p.updateSelectedSlide = function() {
            var t = this.slides[this.selectedIndex];
            t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
        }, p.unselectSelectedSlide = function() {
            this.selectedSlide && this.selectedSlide.unselect()
        }, p.selectCell = function(t, e, n) {
            var i = this.queryCell(t);
            if (i) {
                var r = this.getCellSlideIndex(i);
                this.select(r, e, n)
            }
        }, p.getCellSlideIndex = function(t) {
            for (var e = 0; e < this.slides.length; e++) {
                if (-1 != this.slides[e].cells.indexOf(t)) return e
            }
        }, p.getCell = function(t) {
            for (var e = 0; e < this.cells.length; e++) {
                var n = this.cells[e];
                if (n.element == t) return n
            }
        }, p.getCells = function(t) {
            t = s.makeArray(t);
            var n = [];
            return t.forEach(function(t) {
                var e = this.getCell(t);
                e && n.push(e)
            }, this), n
        }, p.getCellElements = function() {
            return this.cells.map(function(t) {
                return t.element
            })
        }, p.getParentCell = function(t) {
            var e = this.getCell(t);
            return e || (t = s.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, p.getAdjacentCellElements = function(t, e) {
            if (!t) return this.selectedSlide.getCellElements();
            e = void 0 === e ? this.selectedIndex : e;
            var n = this.slides.length;
            if (n <= 1 + 2 * t) return this.getCellElements();
            for (var i = [], r = e - t; r <= e + t; r++) {
                var o = this.options.wrapAround ? s.modulo(r, n) : r,
                    a = this.slides[o];
                a && (i = i.concat(a.getCellElements()))
            }
            return i
        }, p.queryCell = function(t) {
            return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), this.getCell(t))
        }, p.uiChange = function() {
            this.emitEvent("uiChange")
        }, p.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }, p.onresize = function() {
            this.watchCSS(), this.resize()
        }, s.debounceMethod(l, "onresize", 150), p.resize = function() {
            if (this.isActive) {
                this.getSize(), this.options.wrapAround && (this.x = s.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                var t = this.selectedElements && this.selectedElements[0];
                this.selectCell(t, !1, !0)
            }
        }, p.watchCSS = function() {
            this.options.watchCSS && (-1 != c(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
        }, p.onkeydown = function(t) {
            var e = document.activeElement && document.activeElement != this.element;
            if (this.options.accessibility && !e) {
                var n = l.keyboardHandlers[t.keyCode];
                n && n.call(this)
            }
        }, l.keyboardHandlers = {
            37: function() {
                var t = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[t]()
            },
            39: function() {
                var t = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[t]()
            }
        }, p.focus = function() {
            var t = i.pageYOffset;
            this.element.focus(), i.pageYOffset != t && i.scrollTo(i.pageXOffset, t)
        }, p.deactivate = function() {
            this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
                t.destroy()
            }), this.element.removeChild(this.viewport), o(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
        }, p.destroy = function() {
            this.deactivate(), i.removeEventListener("resize", this), this.emitEvent("destroy"), u && this.$element && u.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
        }, s.extend(p, r), l.data = function(t) {
            var e = (t = s.getQueryElement(t)) && t.flickityGUID;
            return e && f[e]
        }, s.htmlInit(l, "flickity"), u && u.bridget && u.bridget("flickity", l), l.setJQuery = function(t) {
            u = t
        }, l.Cell = n, l
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.Unipointer = n(e, e.EvEmitter)
    }(window, function(i, t) {
        function e() {}

        function n() {}
        var r = n.prototype = Object.create(t.prototype);
        r.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, r.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, r._bindStartEvent = function(t, e) {
            var n = (e = void 0 === e || !!e) ? "addEventListener" : "removeEventListener";
            i.PointerEvent ? t[n]("pointerdown", this) : (t[n]("mousedown", this), t[n]("touchstart", this))
        }, r.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.getTouch = function(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, r.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, r.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, r.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, r._pointerDown = function(t, e) {
            t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, r.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"]
        };
        return r._bindPostStartEvents = function(t) {
            if (t) {
                var e = o[t.type];
                e.forEach(function(t) {
                    i.addEventListener(t, this)
                }, this), this._boundPointerEvents = e
            }
        }, r._unbindPostStartEvents = function() {
            this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
                i.removeEventListener(t, this)
            }, this), delete this._boundPointerEvents)
        }, r.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, r.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, r.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, r._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, r.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, r.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, r.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, r.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, r._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, r.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, r._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, r.pointerDone = e, r.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, r.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, r._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, r.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, n.getPointerPoint = function(t) {
            return {
                x: t.pageX,
                y: t.pageY
            }
        }, n
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("unipointer")) : e.Unidragger = n(e, e.Unipointer)
    }(window, function(r, o) {
        function t() {}
        var e = t.prototype = Object.create(o.prototype);
        return e.bindHandles = function() {
            this._bindHandles(!0)
        }, e.unbindHandles = function() {
            this._bindHandles(!1)
        }, e._bindHandles = function(t) {
            for (var e = (t = void 0 === t || !!t) ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
                var i = this.handles[n];
                this._bindStartEvent(i, t), i[e]("click", this), r.PointerEvent && (i.style.touchAction = t ? this._touchActionValue : "")
            }
        }, e._touchActionValue = "none", e.pointerDown = function(t, e) {
            if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(t, e);
            var n = document.activeElement;
            n && n.blur && n.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        }, e._dragPointerDown = function(t, e) {
            this.pointerDownPoint = o.getPointerPoint(e), this.canPreventDefaultOnPointerDown(t, e) && t.preventDefault()
        }, e.canPreventDefaultOnPointerDown = function(t) {
            return "SELECT" != t.target.nodeName
        }, e.pointerMove = function(t, e) {
            var n = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n)
        }, e._dragPointerMove = function(t, e) {
            var n = o.getPointerPoint(e),
                i = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        }, e.hasDragStarted = function(t) {
            return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
        }, e.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, e._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, e._dragStart = function(t, e) {
            this.isDragging = !0, this.dragStartPoint = o.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
        }, e.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, e._dragMove = function(t, e, n) {
            this.isDragging && this.dragMove(t, e, n)
        }, e.dragMove = function(t, e, n) {
            t.preventDefault(), this.emitEvent("dragMove", [t, e, n])
        }, e._dragEnd = function(t, e) {
            this.isDragging = !1, setTimeout(function() {
                delete this.isPreventingClicks
            }.bind(this)), this.dragEnd(t, e)
        }, e.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, e.onclick = function(t) {
            this.isPreventingClicks && t.preventDefault()
        }, e._staticClick = function(t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var n = t.target.nodeName;
                "INPUT" != n && "TEXTAREA" != n || t.target.focus(), this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                    delete this.isIgnoringMouseUp
                }.bind(this), 400))
            }
        }, e.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, t.getPointerPoint = o.getPointerPoint, t
    }),
    function(i, r) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, n) {
            return r(i, t, e, n)
        }) : "object" == typeof module && module.exports ? module.exports = r(i, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : i.Flickity = r(i, i.Flickity, i.Unidragger, i.fizzyUIUtils)
    }(window, function(i, t, e, s) {
        function n(t) {
            var e = "touchstart" == t.type,
                n = "touch" == t.pointerType,
                i = d[t.target.nodeName];
            return e || n || i
        }

        function r() {
            return {
                x: i.pageXOffset,
                y: i.pageYOffset
            }
        }
        s.extend(t.defaults, {
            draggable: ">1",
            dragThreshold: 3
        }), t.createMethods.push("_createDrag");
        var o = t.prototype;
        s.extend(o, e.prototype), o._touchActionValue = "pan-y";
        var a = "createTouch" in document,
            l = !1;
        o._createDrag = function() {
            this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag), this.on("cellChange", this.updateDraggable), a && !l && (i.addEventListener("touchmove", function() {}), l = !0)
        }, o.onActivateDrag = function() {
            this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
        }, o.onDeactivateDrag = function() {
            this.unbindHandles(), this.element.classList.remove("is-draggable")
        }, o.updateDraggable = function() {
            ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
        }, o.bindDrag = function() {
            this.options.draggable = !0, this.updateDraggable()
        }, o.unbindDrag = function() {
            this.options.draggable = !1, this.updateDraggable()
        }, o._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, o._childUIPointerDownDrag = function(t) {
            this.isDraggable && (t.preventDefault(), this.pointerDownFocus(t))
        };
        var u = {
                TEXTAREA: !0,
                INPUT: !0,
                OPTION: !0
            },
            c = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0
            };
        o.pointerDown = function(t, e) {
            if (this.isDraggable) {
                if (u[t.target.nodeName] && !c[t.target.type]) return this.isPointerDown = !1, void delete this.pointerIdentifier;
                var n = document.activeElement;
                n && n.blur && n != this.element && n != document.body && n.blur(), this.pointerDownFocus(t), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = r(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)
            } else this._pointerDownDefault(t, e)
        }, o._pointerDownDefault = function(t, e) {
            this._dragPointerDown(t, e), this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
        }, o.pointerDownFocus = function(t) {
            n(t) || this.focus()
        };
        var d = {
            INPUT: !0,
            SELECT: !0
        };
        return o.canPreventDefaultOnPointerDown = function(t) {
            var e = n(t);
            return this.isDraggable && !e
        }, o.hasDragStarted = function(t) {
            return Math.abs(t.x) > this.options.dragThreshold
        }, o.pointerUp = function(t, e) {
            delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
        }, o.pointerDone = function() {
            i.removeEventListener("scroll", this), delete this.pointerDownScroll
        }, o.dragStart = function(t, e) {
            this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
        }, o.pointerMove = function(t, e) {
            var n = this._dragPointerMove(t, e);
            this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n)
        }, o.dragMove = function(t, e, n) {
            if (this.isDraggable) {
                t.preventDefault(), this.previousDragX = this.dragX;
                var i = this.options.rightToLeft ? -1 : 1;
                this.options.wrapAround && (n.x = n.x % this.slideableWidth);
                var r = this.dragStartPosition + n.x * i;
                if (!this.options.wrapAround && this.slides.length) {
                    var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                    r = o < r ? .5 * (r + o) : r;
                    var a = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                    r = r < a ? .5 * (r + a) : r
                }
                this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, n])
            }
        }, o.dragEnd = function(t, e) {
            if (this.isDraggable) {
                this.options.freeScroll && (this.isFreeScrolling = !0);
                var n = this.dragEndRestingSelect();
                if (this.options.freeScroll && !this.options.wrapAround) {
                    var i = this.getRestingPosition();
                    this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target
                } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());
                delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
            }
        }, o.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                n = this._getClosestResting(t, e, 1),
                i = this._getClosestResting(t, e, -1);
            return n.distance < i.distance ? n.index : i.index
        }, o._getClosestResting = function(t, e, n) {
            for (var i = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return t <= e
                } : function(t, e) {
                    return t < e
                }; o(e, r) && (i += n, r = e, null !== (e = this.getSlideDistance(-t, i)));) e = Math.abs(e);
            return {
                distance: r,
                index: i - n
            }
        }, o.getSlideDistance = function(t, e) {
            var n = this.slides.length,
                i = this.options.wrapAround && 1 < n,
                r = i ? s.modulo(e, n) : e,
                o = this.slides[r];
            if (!o) return null;
            var a = i ? this.slideableWidth * Math.floor(e / n) : 0;
            return t - (o.target + a)
        }, o.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
            var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
        }, o.staticClick = function(t, e) {
            var n = this.getParentCell(t.target),
                i = n && n.element,
                r = n && this.cells.indexOf(n);
            this.dispatchEvent("staticClick", t, [e, i, r])
        }, o.onscroll = function() {
            var t = r(),
                e = this.pointerDownScroll.x - t.x,
                n = this.pointerDownScroll.y - t.y;
            (3 < Math.abs(e) || 3 < Math.abs(n)) && this._pointerDone()
        }, t
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("unipointer")) : e.TapListener = n(e, e.Unipointer)
    }(window, function(s, l) {
        function t(t) {
            this.bindTap(t)
        }
        var e = t.prototype = Object.create(l.prototype);
        return e.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, e.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        }, e.pointerUp = function(t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var n = l.getPointerPoint(e),
                    i = this.tapElement.getBoundingClientRect(),
                    r = s.pageXOffset,
                    o = s.pageYOffset;
                if (n.x >= i.left + r && n.x <= i.right + r && n.y >= i.top + o && n.y <= i.bottom + o && this.emitEvent("tap", [t, e]), "mouseup" != t.type) {
                    this.isIgnoringMouseUp = !0;
                    var a = this;
                    setTimeout(function() {
                        delete a.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, e.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, t
    }),
    function(i, r) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, n) {
            return r(i, t, e, n)
        }) : "object" == typeof module && module.exports ? module.exports = r(i, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : r(i, i.Flickity, i.TapListener, i.fizzyUIUtils)
    }(window, function(t, e, n, i) {
        "use strict";

        function r(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function o(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }
        var a = "http://www.w3.org/2000/svg";
        r.prototype = Object.create(n.prototype), r.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
            var n = this.createSVG();
            e.appendChild(n), this.on("tap", this.onTap), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function() {
            this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
        }, r.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), this.element.removeEventListener("click", this)
        }, r.prototype.createSVG = function() {
            var t = document.createElementNS(a, "svg");
            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(a, "path"),
                n = o(this.parent.options.arrowShape);
            return e.setAttribute("d", n), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, r.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function() {
            var t = document.activeElement;
            t && t == this.element && this.onTap()
        }, r.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, r.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, r.prototype.update = function() {
            var t = this.parent.slides;
            if (this.parent.options.wrapAround && 1 < t.length) this.enable();
            else {
                var e = t.length ? t.length - 1 : 0,
                    n = this.isPrevious ? 0 : e;
                this[this.parent.selectedIndex == n ? "disable" : "enable"]()
            }
        }, r.prototype.destroy = function() {
            this.deactivate()
        }, i.extend(e.defaults, {
            prevNextButtons: !0,
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), e.createMethods.push("_createPrevNextButtons");
        var s = e.prototype;
        return s._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
        }, s.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, s.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, e.PrevNextButton = r, e
    }),
    function(i, r) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, n) {
            return r(i, t, e, n)
        }) : "object" == typeof module && module.exports ? module.exports = r(i, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : r(i, i.Flickity, i.TapListener, i.fizzyUIUtils)
    }(window, function(t, e, n, i) {
        function r(t) {
            this.parent = t, this._create()
        }
        r.prototype = new n, r.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
        }, r.prototype.activate = function() {
            this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, r.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
        }, r.prototype.setDots = function() {
            var t = this.parent.slides.length - this.dots.length;
            0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
        }, r.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), n = [], i = this.dots.length, r = i + t, o = i; o < r; o++) {
                var a = document.createElement("li");
                a.className = "dot", a.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(a), n.push(a)
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(n)
        }, r.prototype.removeDots = function(t) {
            this.dots.splice(this.dots.length - t, t).forEach(function(t) {
                this.holder.removeChild(t)
            }, this)
        }, r.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
        }, r.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var n = this.dots.indexOf(e);
                this.parent.select(n)
            }
        }, r.prototype.destroy = function() {
            this.deactivate()
        }, e.PageDots = r, i.extend(e.defaults, {
            pageDots: !0
        }), e.createMethods.push("_createPageDots");
        var o = e.prototype;
        return o._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
        }, o.activatePageDots = function() {
            this.pageDots.activate()
        }, o.updateSelectedPageDots = function() {
            this.pageDots.updateSelected()
        }, o.updatePageDots = function() {
            this.pageDots.setDots()
        }, o.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, e.PageDots = r, e
    }),
    function(t, i) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, e, n) {
            return i(t, e, n)
        }) : "object" == typeof module && module.exports ? module.exports = i(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : i(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
    }(window, function(t, e, n) {
        function i(t) {
            this.parent = t, this.state = "stopped", o && (this.onVisibilityChange = function() {
                this.visibilityChange()
            }.bind(this), this.onVisibilityPlay = function() {
                this.visibilityPlay()
            }.bind(this))
        }
        var r, o;
        "hidden" in document ? (r = "hidden", o = "visibilitychange") : "webkitHidden" in document && (r = "webkitHidden", o = "webkitvisibilitychange"), i.prototype = Object.create(t.prototype), i.prototype.play = function() {
            if ("playing" != this.state) {
                var t = document[r];
                if (o && t) return void document.addEventListener(o, this.onVisibilityPlay);
                this.state = "playing", o && document.addEventListener(o, this.onVisibilityChange), this.tick()
            }
        }, i.prototype.tick = function() {
            if ("playing" == this.state) {
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.clear(), this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, i.prototype.stop = function() {
            this.state = "stopped", this.clear(), o && document.removeEventListener(o, this.onVisibilityChange)
        }, i.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, i.prototype.pause = function() {
            "playing" == this.state && (this.state = "paused", this.clear())
        }, i.prototype.unpause = function() {
            "paused" == this.state && this.play()
        }, i.prototype.visibilityChange = function() {
            this[document[r] ? "pause" : "unpause"]()
        }, i.prototype.visibilityPlay = function() {
            this.play(), document.removeEventListener(o, this.onVisibilityPlay)
        }, e.extend(n.defaults, {
            pauseAutoPlayOnHover: !0
        }), n.createMethods.push("_createPlayer");
        var a = n.prototype;
        return a._createPlayer = function() {
            this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, a.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
        }, a.playPlayer = function() {
            this.player.play()
        }, a.stopPlayer = function() {
            this.player.stop()
        }, a.pausePlayer = function() {
            this.player.pause()
        }, a.unpausePlayer = function() {
            this.player.unpause()
        }, a.deactivatePlayer = function() {
            this.player.stop(), this.element.removeEventListener("mouseenter", this)
        }, a.onmouseenter = function() {
            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
        }, a.onmouseleave = function() {
            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
        }, n.Player = i, n
    }),
    function(n, i) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
            return i(n, t, e)
        }) : "object" == typeof module && module.exports ? module.exports = i(n, require("./flickity"), require("fizzy-ui-utils")) : i(n, n.Flickity, n.fizzyUIUtils)
    }(window, function(t, e, i) {
        function l(t) {
            var e = document.createDocumentFragment();
            return t.forEach(function(t) {
                e.appendChild(t.element)
            }), e
        }
        var n = e.prototype;
        return n.insert = function(t, e) {
            var n = this._makeCells(t);
            if (n && n.length) {
                var i = this.cells.length;
                e = void 0 === e ? i : e;
                var r = l(n),
                    o = e == i;
                if (o) this.slider.appendChild(r);
                else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(r, a)
                }
                if (0 === e) this.cells = n.concat(this.cells);
                else if (o) this.cells = this.cells.concat(n);
                else {
                    var s = this.cells.splice(e, i - e);
                    this.cells = this.cells.concat(n).concat(s)
                }
                this._sizeCells(n), this.cellChange(e, !0)
            }
        }, n.append = function(t) {
            this.insert(t, this.cells.length)
        }, n.prepend = function(t) {
            this.insert(t, 0)
        }, n.remove = function(t) {
            var e = this.getCells(t);
            if (e && e.length) {
                var n = this.cells.length - 1;
                e.forEach(function(t) {
                    t.remove();
                    var e = this.cells.indexOf(t);
                    n = Math.min(e, n), i.removeFrom(this.cells, t)
                }, this), this.cellChange(n, !0)
            }
        }, n.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = this.cells.indexOf(e);
                this.cellChange(n)
            }
        }, n.cellChange = function(t, e) {
            var n = this.selectedElement;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
            var i = this.getCell(n);
            i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
        }, e
    }),
    function(n, i) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
            return i(n, t, e)
        }) : "object" == typeof module && module.exports ? module.exports = i(n, require("./flickity"), require("fizzy-ui-utils")) : i(n, n.Flickity, n.fizzyUIUtils)
    }(window, function(t, e, a) {
        "use strict";

        function r(t) {
            if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                    n = t.getAttribute("data-flickity-lazyload-src"),
                    i = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || n || i) return [t]
            }
            var r = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",
                o = t.querySelectorAll(r);
            return a.makeArray(o)
        }

        function o(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        e.createMethods.push("_createLazyload");
        var n = e.prototype;
        return n._createLazyload = function() {
            this.on("select", this.lazyLoad)
        }, n.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                var e = "number" == typeof t ? t : 0,
                    n = this.getAdjacentCellElements(e),
                    i = [];
                n.forEach(function(t) {
                    var e = r(t);
                    i = i.concat(e)
                }), i.forEach(function(t) {
                    new o(t, this)
                }, this)
            }
        }, o.prototype.handleEvent = a.handleEvent, o.prototype.load = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                e = this.img.getAttribute("data-flickity-lazyload-srcset");
            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
        }, o.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, o.prototype.onerror = function(t) {
            this.complete(t, "flickity-lazyerror")
        }, o.prototype.complete = function(t, e) {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            var n = this.flickity.getParentCell(this.img),
                i = n && n.element;
            this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i)
        }, e.LazyLoader = o, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
    }(window, function(i, r) {
        function a(t, e, n) {
            return (e - t) * n + t
        }
        i.createMethods.push("_createAsNavFor");
        var t = i.prototype;
        return t._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, t.setNavCompanion = function(t) {
            t = r.getQueryElement(t);
            var e = i.data(t);
            if (e && e != this) {
                this.navCompanion = e;
                var n = this;
                this.onNavCompanionSelect = function() {
                    n.navCompanionSelect()
                }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
            }
        }, t.navCompanionSelect = function(t) {
            if (this.navCompanion) {
                var e = this.navCompanion.selectedCells[0],
                    n = this.navCompanion.cells.indexOf(e),
                    i = n + this.navCompanion.selectedCells.length - 1,
                    r = Math.floor(a(n, i, this.navCompanion.cellAlign));
                if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                    var o = this.cells.slice(n, i + 1);
                    this.navSelectedElements = o.map(function(t) {
                        return t.element
                    }), this.changeNavSelectedClass("add")
                }
            }
        }, t.changeNavSelectedClass = function(e) {
            this.navSelectedElements.forEach(function(t) {
                t.classList[e]("is-nav-selected")
            })
        }, t.activateAsNavFor = function() {
            this.navCompanionSelect(!0)
        }, t.removeNavSelectedElements = function() {
            this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
        }, t.onNavStaticClick = function(t, e, n, i) {
            "number" == typeof i && this.navCompanion.selectCell(i)
        }, t.deactivateAsNavFor = function() {
            this.removeNavSelectedElements()
        }, t.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, i
    }),
    function(e, n) {
        "use strict";
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
            return n(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.imagesLoaded = n(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function r(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function o(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? u.call(t) : [t]
        }

        function a(t, e, n) {
            if (!(this instanceof a)) return new a(t, e, n);
            var i = t;
            return "string" == typeof t && (i = document.querySelectorAll(t)), i ? (this.elements = o(i), this.options = r({}, this.options), "function" == typeof e ? n = e : r(this.options, e), n && this.on("always", n), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (i || t))
        }

        function n(t) {
            this.img = t
        }

        function i(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var s = e.jQuery,
            l = e.console,
            u = Array.prototype.slice;
        a.prototype = Object.create(t.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, a.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (i = 0; i < o.length; i++) {
                        var a = o[i];
                        this.addElementBackgroundImages(a)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return a.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                    var r = i && i[2];
                    r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
                }
        }, a.prototype.addImage = function(t) {
            var e = new n(t);
            this.images.push(e)
        }, a.prototype.addBackground = function(t, e) {
            var n = new i(t, e);
            this.images.push(n)
        }, a.prototype.check = function() {
            function e(t, e, n) {
                setTimeout(function() {
                    i.progress(t, e, n)
                })
            }
            var i = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, a.prototype.progress = function(t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + n, t, e)
        }, a.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, n.prototype = Object.create(t.prototype), n.prototype.check = function() {
            return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, n.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, n.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, n.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, n.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, n.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, i.prototype = Object.create(n.prototype), i.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, i.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, i.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, a.makeJQueryPlugin = function(t) {
            (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
                return new a(this, t, e).jqDeferred.promise(s(this))
            })
        }, a.makeJQueryPlugin(), a
    }),
    function(n, i) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
            return i(n, t, e)
        }) : "object" == typeof module && module.exports ? module.exports = i(n, require("flickity"), require("imagesloaded")) : n.Flickity = i(n, n.Flickity, n.imagesLoaded)
    }(window, function(t, e, n) {
        "use strict";
        e.createMethods.push("_createImagesLoaded");
        var i = e.prototype;
        return i._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, i.imagesLoaded = function() {
            function t(t, e) {
                var n = i.getParentCell(e.img);
                i.cellSizeChange(n && n.element), i.options.freeScroll || i.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var i = this;
                n(this.slider).on("progress", t)
            }
        }, e
    }),
    function() {
        function t(t, i) {
            document.addEventListener(t, function(n) {
                u._elems.forEach(function(t) {
                    for (var e = n.target; e;) {
                        if (e === t.elem) return t[i](n), !1;
                        e = e.parentNode
                    }
                    return !1
                })
            })
        }

        function r(t) {
            var e = [].shift.call(arguments),
                n = t;
            for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i]);
            return e
        }
        var e, n = window.navigator.msPointerEnabled,
            i = {
                start: n ? "MSPointerDown" : "touchstart",
                move: n ? "MSPointerMove" : "touchmove",
                end: n ? "MSPointerUp" : "touchend"
            },
            o = (e = window.getComputedStyle(document.documentElement, ""), "-" + (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1] + "-"),
            a = function() {
                var t, e = document.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in n)
                    if (void 0 !== e.style[t]) return n[t]
            }(),
            s = {
                transition: o + "transition",
                transform: o + "transform"
            },
            l = function() {},
            u = function(t) {
                t = r({
                    duration: 200,
                    tolerance: 50,
                    time: 200,
                    dir: 1,
                    right: 0,
                    left: 0
                }, t || {}), this.duration = t.duration, this.tolerance = t.tolerance, this.time = t.time, this.width = t.left || t.right, this.elem = t.elem, this.list = t.list, this.dir = t.dir, this.group = t.group, this.id = u.elemId++, this.onOpen = "function" == typeof t.onOpen ? t.onOpen : l, this.onClose = "function" == typeof t.onClose ? t.onClose : l, this.right = t.right, this.left = t.left, (0 < t.right && t.tolerance > t.right || 0 < t.left && t.tolerance > t.left) && console.warn("tolerance must be less then left and right")
            };
        u._elems = [], u.groupCounter = 0, u.elemId = 0, u.init = function(n) {
            u.groupCounter++;
            var t = document.querySelectorAll(n.query),
                i = [];
            return delete n.query, [].forEach.call(t, function(t) {
                var e = r({
                    elem: t,
                    group: u.groupCounter
                }, n);
                i.push(new u(e))
            }), u._bindEvents(), u._elems = u._elems.concat(i), 1 === i.length ? i[0] : i
        }, u._closeAll = function(e) {
            u._elems.forEach(function(t) {
                t.group === e && t.close(!0)
            })
        }, u.prototype.transitionEnd = function(t, e) {
            function n() {
                e.call(i), t.removeEventListener(a, n)
            }
            var i = this;
            t.addEventListener(a, n)
        }, u.prototype.touchStart = function(t) {
            var e = t.changedTouches[0];
            1 === t.touches.length && (this.touchId = e.identifier, this.x = e.pageX, this.y = e.pageY, this.startTime = new Date, this.resetValue(), this.list ? u._closeAll(this.group) : this.close(!0))
        }, u.prototype.touchMove = function(t) {
            var e = t.changedTouches[0];
            this.isValidTouch(t) && (this.delta = e.pageX - this.x, this.dir = this.delta < 0 ? -1 : 1, this.width = this.delta < 0 ? this.right : this.left, this.defineUserAction(e), this.startSwipe && (this.move(), t.preventDefault()))
        }, u.prototype.touchEnd = function(t) {
            this.isValidTouch(t, !0) && this.startSwipe && (this.dir * this.delta > this.tolerance || new Date - this.startTime < this.time ? this.open() : this.close(), t.stopPropagation(), t.preventDefault())
        }, u.prototype.open = function(t) {
            this.animation(this.dir * this.width), this.swiped = !0, t || this.transitionEnd(this.elem, this.onOpen), this.resetValue()
        }, u.prototype.close = function(t) {
            this.animation(0), this.swiped = !1, t || this.transitionEnd(this.elem, this.onClose), this.resetValue()
        }, u.prototype.toggle = function() {
            this.swiped ? this.close() : this.open()
        }, u.prototype.resetValue = function() {
            this.startSwipe = !1, this.startScroll = !1, this.delta = 0
        }, u._bindEvents = function() {
            return !u.eventBinded && (t(i.move, "touchMove"), t(i.end, "touchEnd"), t(i.start, "touchStart"), void(u.eventBinded = !0))
        }, u.prototype.defineUserAction = function(t) {
            var e = 10,
                n = 10;
            Math.abs(this.y - t.pageY) > n && !this.startSwipe ? this.startScroll = !0 : Math.abs(this.delta) > e && !this.startScroll && (this.startSwipe = !0)
        }, u.prototype.isValidTouch = function(t, e) {
            return t[e ? "changedTouches" : "targetTouches"][0].identifier === this.touchId
        }, u.prototype.move = function() {
            if (0 < this.dir && (this.delta < 0 || 0 === this.left) || this.dir < 0 && (0 < this.delta || 0 === this.right)) return !1;
            var t = Math.abs(this.delta);
            t > this.width && (this.delta = this.dir * (this.width + (t - this.width) / 8)), this.animation(this.delta, 0)
        }, u.prototype.animation = function(t, e) {
            e = void 0 === e ? this.duration : e, this.elem.style.cssText = s.transition + ":" + s.transform + " " + e + "ms; " + s.transform + ":translate3d(" + t + "px, 0px, 0px)"
        }, u.prototype.destroy = function(t) {
            var n = this.id;
            u._elems.forEach(function(t, e) {
                t.id === n && u._elems.splice(e, 1)
            }), t && this.elem.parentNode.removeChild(this.elem)
        }, window.Swiped = u
    }();