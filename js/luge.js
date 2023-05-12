!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).luge = t()
}(this, (function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , t = function(e) {
        return e && e.Math == Math && e
    }
      , s = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || function() {
        return this
    }() || Function("return this")()
      , i = {}
      , r = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , n = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
      , o = !r((function() {
        var e = function() {}
        .bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    }
    ))
      , a = o
      , l = Function.prototype.call
      , c = a ? l.bind(l) : function() {
        return l.apply(l, arguments)
    }
      , d = {}
      , h = {}.propertyIsEnumerable
      , u = Object.getOwnPropertyDescriptor
      , p = u && !h.call({
        1: 2
    }, 1);
    d.f = p ? function(e) {
        var t = u(this, e);
        return !!t && t.enumerable
    }
    : h;
    var g, m, f = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }, v = o, b = Function.prototype, y = b.bind, w = b.call, S = v && y.bind(w, w), E = v ? function(e) {
        return e && S(e)
    }
    : function(e) {
        return e && function() {
            return w.apply(e, arguments)
        }
    }
    , T = E, x = T({}.toString), M = T("".slice), P = function(e) {
        return M(x(e), 8, -1)
    }, k = E, A = r, O = P, L = s.Object, C = k("".split), I = A((function() {
        return !L("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == O(e) ? C(e, "") : L(e)
    }
    : L, F = s.TypeError, B = function(e) {
        if (null == e)
            throw F("Can't call method on " + e);
        return e
    }, R = I, _ = B, j = function(e) {
        return R(_(e))
    }, N = function(e) {
        return "function" == typeof e
    }, H = N, q = function(e) {
        return "object" == typeof e ? null !== e : H(e)
    }, D = s, z = N, W = function(e) {
        return z(e) ? e : void 0
    }, Y = function(e, t) {
        return arguments.length < 2 ? W(D[e]) : D[e] && D[e][t]
    }, K = E({}.isPrototypeOf), V = s, X = Y("navigator", "userAgent") || "", G = V.process, U = V.Deno, Q = G && G.versions || U && U.version, Z = Q && Q.v8;
    Z && (m = (g = Z.split("."))[0] > 0 && g[0] < 4 ? 1 : +(g[0] + g[1])),
    !m && X && (!(g = X.match(/Edge\/(\d+)/)) || g[1] >= 74) && (g = X.match(/Chrome\/(\d+)/)) && (m = +g[1]);
    var $ = m
      , J = r
      , ee = !!Object.getOwnPropertySymbols && !J((function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && $ && $ < 41
    }
    ))
      , te = ee && !Symbol.sham && "symbol" == typeof Symbol.iterator
      , se = Y
      , ie = N
      , re = K
      , ne = te
      , oe = s.Object
      , ae = ne ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        var t = se("Symbol");
        return ie(t) && re(t.prototype, oe(e))
    }
      , le = s.String
      , ce = function(e) {
        try {
            return le(e)
        } catch (e) {
            return "Object"
        }
    }
      , de = N
      , he = ce
      , ue = s.TypeError
      , pe = function(e) {
        if (de(e))
            return e;
        throw ue(he(e) + " is not a function")
    }
      , ge = pe
      , me = function(e, t) {
        var s = e[t];
        return null == s ? void 0 : ge(s)
    }
      , fe = c
      , ve = N
      , be = q
      , ye = s.TypeError
      , we = {
        exports: {}
    }
      , Se = s
      , Ee = Object.defineProperty
      , Te = function(e, t) {
        try {
            Ee(Se, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (s) {
            Se[e] = t
        }
        return t
    }
      , xe = Te
      , Me = "__core-js_shared__"
      , Pe = s[Me] || xe(Me, {})
      , ke = Pe;
    (we.exports = function(e, t) {
        return ke[e] || (ke[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.21.1",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Ae = B
      , Oe = s.Object
      , Le = function(e) {
        return Oe(Ae(e))
    }
      , Ce = Le
      , Ie = E({}.hasOwnProperty)
      , Fe = Object.hasOwn || function(e, t) {
        return Ie(Ce(e), t)
    }
      , Be = E
      , Re = 0
      , _e = Math.random()
      , je = Be(1..toString)
      , Ne = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + je(++Re + _e, 36)
    }
      , He = s
      , qe = we.exports
      , De = Fe
      , ze = Ne
      , We = ee
      , Ye = te
      , Ke = qe("wks")
      , Ve = He.Symbol
      , Xe = Ve && Ve.for
      , Ge = Ye ? Ve : Ve && Ve.withoutSetter || ze
      , Ue = function(e) {
        if (!De(Ke, e) || !We && "string" != typeof Ke[e]) {
            var t = "Symbol." + e;
            We && De(Ve, e) ? Ke[e] = Ve[e] : Ke[e] = Ye && Xe ? Xe(t) : Ge(t)
        }
        return Ke[e]
    }
      , Qe = c
      , Ze = q
      , $e = ae
      , Je = me
      , et = function(e, t) {
        var s, i;
        if ("string" === t && ve(s = e.toString) && !be(i = fe(s, e)))
            return i;
        if (ve(s = e.valueOf) && !be(i = fe(s, e)))
            return i;
        if ("string" !== t && ve(s = e.toString) && !be(i = fe(s, e)))
            return i;
        throw ye("Can't convert object to primitive value")
    }
      , tt = Ue
      , st = s.TypeError
      , it = tt("toPrimitive")
      , rt = function(e, t) {
        if (!Ze(e) || $e(e))
            return e;
        var s, i = Je(e, it);
        if (i) {
            if (void 0 === t && (t = "default"),
            s = Qe(i, e, t),
            !Ze(s) || $e(s))
                return s;
            throw st("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"),
        et(e, t)
    }
      , nt = ae
      , ot = function(e) {
        var t = rt(e, "string");
        return nt(t) ? t : t + ""
    }
      , at = q
      , lt = s.document
      , ct = at(lt) && at(lt.createElement)
      , dt = function(e) {
        return ct ? lt.createElement(e) : {}
    }
      , ht = !n && !r((function() {
        return 7 != Object.defineProperty(dt("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , ut = n
      , pt = c
      , gt = d
      , mt = f
      , ft = j
      , vt = ot
      , bt = Fe
      , yt = ht
      , wt = Object.getOwnPropertyDescriptor;
    i.f = ut ? wt : function(e, t) {
        if (e = ft(e),
        t = vt(t),
        yt)
            try {
                return wt(e, t)
            } catch (e) {}
        if (bt(e, t))
            return mt(!pt(gt.f, e, t), e[t])
    }
    ;
    var St = {}
      , Et = n && r((function() {
        return 42 != Object.defineProperty((function() {}
        ), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    }
    ))
      , Tt = s
      , xt = q
      , Mt = Tt.String
      , Pt = Tt.TypeError
      , kt = function(e) {
        if (xt(e))
            return e;
        throw Pt(Mt(e) + " is not an object")
    }
      , At = n
      , Ot = ht
      , Lt = Et
      , Ct = kt
      , It = ot
      , Ft = s.TypeError
      , Bt = Object.defineProperty
      , Rt = Object.getOwnPropertyDescriptor
      , _t = "enumerable"
      , jt = "configurable"
      , Nt = "writable";
    St.f = At ? Lt ? function(e, t, s) {
        if (Ct(e),
        t = It(t),
        Ct(s),
        "function" == typeof e && "prototype" === t && "value"in s && Nt in s && !s[Nt]) {
            var i = Rt(e, t);
            i && i[Nt] && (e[t] = s.value,
            s = {
                configurable: jt in s ? s[jt] : i[jt],
                enumerable: _t in s ? s[_t] : i[_t],
                writable: !1
            })
        }
        return Bt(e, t, s)
    }
    : Bt : function(e, t, s) {
        if (Ct(e),
        t = It(t),
        Ct(s),
        Ot)
            try {
                return Bt(e, t, s)
            } catch (e) {}
        if ("get"in s || "set"in s)
            throw Ft("Accessors not supported");
        return "value"in s && (e[t] = s.value),
        e
    }
    ;
    var Ht = St
      , qt = f
      , Dt = n ? function(e, t, s) {
        return Ht.f(e, t, qt(1, s))
    }
    : function(e, t, s) {
        return e[t] = s,
        e
    }
      , zt = {
        exports: {}
    }
      , Wt = N
      , Yt = Pe
      , Kt = E(Function.toString);
    Wt(Yt.inspectSource) || (Yt.inspectSource = function(e) {
        return Kt(e)
    }
    );
    var Vt, Xt, Gt, Ut = Yt.inspectSource, Qt = N, Zt = Ut, $t = s.WeakMap, Jt = Qt($t) && /native code/.test(Zt($t)), es = we.exports, ts = Ne, ss = es("keys"), is = function(e) {
        return ss[e] || (ss[e] = ts(e))
    }, rs = {}, ns = Jt, os = s, as = E, ls = q, cs = Dt, ds = Fe, hs = Pe, us = is, ps = rs, gs = "Object already initialized", ms = os.TypeError, fs = os.WeakMap;
    if (ns || hs.state) {
        var vs = hs.state || (hs.state = new fs)
          , bs = as(vs.get)
          , ys = as(vs.has)
          , ws = as(vs.set);
        Vt = function(e, t) {
            if (ys(vs, e))
                throw new ms(gs);
            return t.facade = e,
            ws(vs, e, t),
            t
        }
        ,
        Xt = function(e) {
            return bs(vs, e) || {}
        }
        ,
        Gt = function(e) {
            return ys(vs, e)
        }
    } else {
        var Ss = us("state");
        ps[Ss] = !0,
        Vt = function(e, t) {
            if (ds(e, Ss))
                throw new ms(gs);
            return t.facade = e,
            cs(e, Ss, t),
            t
        }
        ,
        Xt = function(e) {
            return ds(e, Ss) ? e[Ss] : {}
        }
        ,
        Gt = function(e) {
            return ds(e, Ss)
        }
    }
    var Es = {
        set: Vt,
        get: Xt,
        has: Gt,
        enforce: function(e) {
            return Gt(e) ? Xt(e) : Vt(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var s;
                if (!ls(t) || (s = Xt(t)).type !== e)
                    throw ms("Incompatible receiver, " + e + " required");
                return s
            }
        }
    }
      , Ts = n
      , xs = Fe
      , Ms = Function.prototype
      , Ps = Ts && Object.getOwnPropertyDescriptor
      , ks = xs(Ms, "name")
      , As = ks && "something" === function() {}
    .name
      , Os = ks && (!Ts || Ts && Ps(Ms, "name").configurable)
      , Ls = s
      , Cs = N
      , Is = Fe
      , Fs = Dt
      , Bs = Te
      , Rs = Ut
      , _s = {
        EXISTS: ks,
        PROPER: As,
        CONFIGURABLE: Os
    }.CONFIGURABLE
      , js = Es.get
      , Ns = Es.enforce
      , Hs = String(String).split("String");
    (zt.exports = function(e, t, s, i) {
        var r, n = !!i && !!i.unsafe, o = !!i && !!i.enumerable, a = !!i && !!i.noTargetGet, l = i && void 0 !== i.name ? i.name : t;
        Cs(s) && ("Symbol(" === String(l).slice(0, 7) && (l = "[" + String(l).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!Is(s, "name") || _s && s.name !== l) && Fs(s, "name", l),
        (r = Ns(s)).source || (r.source = Hs.join("string" == typeof l ? l : ""))),
        e !== Ls ? (n ? !a && e[t] && (o = !0) : delete e[t],
        o ? e[t] = s : Fs(e, t, s)) : o ? e[t] = s : Bs(t, s)
    }
    )(Function.prototype, "toString", (function() {
        return Cs(this) && js(this).source || Rs(this)
    }
    ));
    var qs = {}
      , Ds = Math.ceil
      , zs = Math.floor
      , Ws = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : (t > 0 ? zs : Ds)(t)
    }
      , Ys = Ws
      , Ks = Math.max
      , Vs = Math.min
      , Xs = Ws
      , Gs = Math.min
      , Us = function(e) {
        return e > 0 ? Gs(Xs(e), 9007199254740991) : 0
    }
      , Qs = function(e) {
        return Us(e.length)
    }
      , Zs = j
      , $s = function(e, t) {
        var s = Ys(e);
        return s < 0 ? Ks(s + t, 0) : Vs(s, t)
    }
      , Js = Qs
      , ei = function(e) {
        return function(t, s, i) {
            var r, n = Zs(t), o = Js(n), a = $s(i, o);
            if (e && s != s) {
                for (; o > a; )
                    if ((r = n[a++]) != r)
                        return !0
            } else
                for (; o > a; a++)
                    if ((e || a in n) && n[a] === s)
                        return e || a || 0;
            return !e && -1
        }
    }
      , ti = {
        includes: ei(!0),
        indexOf: ei(!1)
    }
      , si = Fe
      , ii = j
      , ri = ti.indexOf
      , ni = rs
      , oi = E([].push)
      , ai = function(e, t) {
        var s, i = ii(e), r = 0, n = [];
        for (s in i)
            !si(ni, s) && si(i, s) && oi(n, s);
        for (; t.length > r; )
            si(i, s = t[r++]) && (~ri(n, s) || oi(n, s));
        return n
    }
      , li = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
    qs.f = Object.getOwnPropertyNames || function(e) {
        return ai(e, li)
    }
    ;
    var ci = {};
    ci.f = Object.getOwnPropertySymbols;
    var di = Y
      , hi = qs
      , ui = ci
      , pi = kt
      , gi = E([].concat)
      , mi = di("Reflect", "ownKeys") || function(e) {
        var t = hi.f(pi(e))
          , s = ui.f;
        return s ? gi(t, s(e)) : t
    }
      , fi = Fe
      , vi = mi
      , bi = i
      , yi = St
      , wi = r
      , Si = N
      , Ei = /#|\.prototype\./
      , Ti = function(e, t) {
        var s = Mi[xi(e)];
        return s == ki || s != Pi && (Si(t) ? wi(t) : !!t)
    }
      , xi = Ti.normalize = function(e) {
        return String(e).replace(Ei, ".").toLowerCase()
    }
      , Mi = Ti.data = {}
      , Pi = Ti.NATIVE = "N"
      , ki = Ti.POLYFILL = "P"
      , Ai = Ti
      , Oi = s
      , Li = i.f
      , Ci = Dt
      , Ii = zt.exports
      , Fi = Te
      , Bi = function(e, t, s) {
        for (var i = vi(t), r = yi.f, n = bi.f, o = 0; o < i.length; o++) {
            var a = i[o];
            fi(e, a) || s && fi(s, a) || r(e, a, n(t, a))
        }
    }
      , Ri = Ai
      , _i = function(e, t) {
        var s, i, r, n, o, a = e.target, l = e.global, c = e.stat;
        if (s = l ? Oi : c ? Oi[a] || Fi(a, {}) : (Oi[a] || {}).prototype)
            for (i in t) {
                if (n = t[i],
                r = e.noTargetGet ? (o = Li(s, i)) && o.value : s[i],
                !Ri(l ? i : a + (c ? "." : "#") + i, e.forced) && void 0 !== r) {
                    if (typeof n == typeof r)
                        continue;
                    Bi(n, r)
                }
                (e.sham || r && r.sham) && Ci(n, "sham", !0),
                Ii(s, i, n, e)
            }
    }
      , ji = c
      , Ni = pe
      , Hi = kt
      , qi = Y
      , Di = me
      , zi = s.TypeError
      , Wi = function(e) {
        var t = 0 == e
          , s = 1 == e
          , i = 2 == e
          , r = 3 == e;
        return function(e, n, o) {
            Hi(e);
            var a = qi("Promise")
              , l = Ni(e.next)
              , c = 0
              , d = void 0 !== n;
            return !d && t || Ni(n),
            new a((function(h, u) {
                var p = function(t, s) {
                    try {
                        var i = Di(e, "return");
                        if (i)
                            return a.resolve(ji(i, e)).then((function() {
                                t(s)
                            }
                            ), (function(e) {
                                u(e)
                            }
                            ))
                    } catch (e) {
                        return u(e)
                    }
                    t(s)
                }
                  , g = function(e) {
                    p(u, e)
                }
                  , m = function() {
                    try {
                        if (t && c > 9007199254740991 && d)
                            throw zi("The allowed number of iterations has been exceeded");
                        a.resolve(Hi(ji(l, e))).then((function(e) {
                            try {
                                if (Hi(e).done)
                                    t ? (o.length = c,
                                    h(o)) : h(!r && (i || void 0));
                                else {
                                    var l = e.value;
                                    d ? a.resolve(t ? n(l, c) : n(l)).then((function(e) {
                                        s ? m() : i ? e ? m() : p(h, !1) : t ? (o[c++] = e,
                                        m()) : e ? p(h, r || l) : m()
                                    }
                                    ), g) : (o[c++] = l,
                                    m())
                                }
                            } catch (e) {
                                g(e)
                            }
                        }
                        ), g)
                    } catch (e) {
                        g(e)
                    }
                };
                m()
            }
            ))
        }
    }
      , Yi = {
        toArray: Wi(0),
        forEach: Wi(1),
        every: Wi(2),
        some: Wi(3),
        find: Wi(4)
    }
      , Ki = Yi.forEach;
    _i({
        target: "AsyncIterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        forEach: function(e) {
            return Ki(this, e)
        }
    });
    var Vi = K
      , Xi = s.TypeError;
    Y("document", "documentElement"),
    rs[is("IE_PROTO")] = !0;
    var Gi, Ui, Qi, Zi = !r((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    )), $i = s, Ji = Fe, er = N, tr = Le, sr = Zi, ir = is("IE_PROTO"), rr = $i.Object, nr = rr.prototype, or = r, ar = N, lr = sr ? rr.getPrototypeOf : function(e) {
        var t = tr(e);
        if (Ji(t, ir))
            return t[ir];
        var s = t.constructor;
        return er(s) && t instanceof s ? s.prototype : t instanceof rr ? nr : null
    }
    , cr = zt.exports, dr = Ue("iterator"), hr = !1;
    [].keys && ("next"in (Qi = [].keys()) ? (Ui = lr(lr(Qi))) !== Object.prototype && (Gi = Ui) : hr = !0);
    var ur = null == Gi || or((function() {
        var e = {};
        return Gi[dr].call(e) !== e
    }
    ));
    ur && (Gi = {}),
    ar(Gi[dr]) || cr(Gi, dr, (function() {
        return this
    }
    ));
    var pr = _i
      , gr = s
      , mr = function(e, t) {
        if (Vi(t, e))
            return e;
        throw Xi("Incorrect invocation")
    }
      , fr = N
      , vr = Dt
      , br = r
      , yr = Fe
      , wr = {
        IteratorPrototype: Gi,
        BUGGY_SAFARI_ITERATORS: hr
    }.IteratorPrototype
      , Sr = Ue("toStringTag")
      , Er = gr.Iterator
      , Tr = !fr(Er) || Er.prototype !== wr || !br((function() {
        Er({})
    }
    ))
      , xr = function() {
        mr(this, wr)
    };
    yr(wr, Sr) || vr(wr, Sr, "Iterator"),
    !Tr && yr(wr, "constructor") && wr.constructor !== Object || vr(wr, "constructor", xr),
    xr.prototype = wr,
    pr({
        global: !0,
        forced: Tr
    }, {
        Iterator: xr
    });
    var Mr = pe
      , Pr = o
      , kr = E(E.bind)
      , Ar = {}
      , Or = Ar
      , Lr = Ue("iterator")
      , Cr = Array.prototype
      , Ir = {};
    Ir[Ue("toStringTag")] = "z";
    var Fr = s
      , Br = "[object z]" === String(Ir)
      , Rr = N
      , _r = P
      , jr = Ue("toStringTag")
      , Nr = Fr.Object
      , Hr = "Arguments" == _r(function() {
        return arguments
    }())
      , qr = Br ? _r : function(e) {
        var t, s, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (s = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Nr(e), jr)) ? s : Hr ? _r(t) : "Object" == (i = _r(t)) && Rr(t.callee) ? "Arguments" : i
    }
      , Dr = me
      , zr = Ar
      , Wr = Ue("iterator")
      , Yr = function(e) {
        if (null != e)
            return Dr(e, Wr) || Dr(e, "@@iterator") || zr[qr(e)]
    }
      , Kr = c
      , Vr = pe
      , Xr = kt
      , Gr = ce
      , Ur = Yr
      , Qr = s.TypeError
      , Zr = c
      , $r = kt
      , Jr = me
      , en = function(e, t) {
        return Mr(e),
        void 0 === t ? e : Pr ? kr(e, t) : function() {
            return e.apply(t, arguments)
        }
    }
      , tn = c
      , sn = kt
      , rn = ce
      , nn = function(e) {
        return void 0 !== e && (Or.Array === e || Cr[Lr] === e)
    }
      , on = Qs
      , an = K
      , ln = function(e, t) {
        var s = arguments.length < 2 ? Ur(e) : t;
        if (Vr(s))
            return Xr(Kr(s, e));
        throw Qr(Gr(e) + " is not iterable")
    }
      , cn = Yr
      , dn = function(e, t, s) {
        var i, r;
        $r(e);
        try {
            if (!(i = Jr(e, "return"))) {
                if ("throw" === t)
                    throw s;
                return s
            }
            i = Zr(i, e)
        } catch (e) {
            r = !0,
            i = e
        }
        if ("throw" === t)
            throw s;
        if (r)
            throw i;
        return $r(i),
        s
    }
      , hn = s.TypeError
      , un = function(e, t) {
        this.stopped = e,
        this.result = t
    }
      , pn = un.prototype
      , gn = function(e, t, s) {
        var i, r, n, o, a, l, c, d = s && s.that, h = !(!s || !s.AS_ENTRIES), u = !(!s || !s.IS_ITERATOR), p = !(!s || !s.INTERRUPTED), g = en(t, d), m = function(e) {
            return i && dn(i, "normal", e),
            new un(!0,e)
        }, f = function(e) {
            return h ? (sn(e),
            p ? g(e[0], e[1], m) : g(e[0], e[1])) : p ? g(e, m) : g(e)
        };
        if (u)
            i = e;
        else {
            if (!(r = cn(e)))
                throw hn(rn(e) + " is not iterable");
            if (nn(r)) {
                for (n = 0,
                o = on(e); o > n; n++)
                    if ((a = f(e[n])) && an(pn, a))
                        return a;
                return new un(!1)
            }
            i = ln(e, r)
        }
        for (l = i.next; !(c = tn(l, i)).done; ) {
            try {
                a = f(c.value)
            } catch (e) {
                dn(i, "throw", e)
            }
            if ("object" == typeof a && a && an(pn, a))
                return a
        }
        return new un(!1)
    }
      , mn = gn
      , fn = kt;
    _i({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        forEach: function(e) {
            mn(fn(this), e, {
                IS_ITERATOR: !0
            })
        }
    });
    var vn = new class {
        constructor() {
            this.events = []
        }
        on(e, t, s) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (this.events[e] || (this.events[e] = [])).push({
                cb: t,
                context: s,
                once: i
            })
        }
        once(e, t, s) {
            this.on(e, t, s, !0)
        }
        emit(e) {
            const t = this
              , s = [].slice.call(arguments, 1);
            this.events[e] && this.events[e].forEach(((i,r)=>{
                i.cb.apply(i.context, s),
                i.once && delete t.events[e][r]
            }
            ))
        }
        off(e, t) {
            const s = this;
            this.events[e] && this.events[e].forEach(((i,r)=>{
                i.cb === t && delete s.events[e][r]
            }
            ))
        }
    }
    ;
    class bn {
        static isArray(e) {
            return e && "object" == typeof e && Array.isArray(e)
        }
        static isObject(e) {
            return e && "object" == typeof e && !Array.isArray(e)
        }
        static isString(e) {
            return e && "string" == typeof e
        }
        static mergeDeep(e, t) {
            const s = Object.assign({}, e);
            return bn.isObject(e) && bn.isObject(t) && Object.keys(t).forEach((i=>{
                bn.isObject(t[i]) ? i in e ? bn.isObject(e[i]) && bn.isObject(t[i]) ? s[i] = bn.mergeDeep(e[i], t[i]) : s[i] = t[i] : Object.assign(s, {
                    [i]: t[i]
                }) : Object.assign(s, {
                    [i]: t[i]
                })
            }
            )),
            s
        }
        static toCamelCase(e) {
            return bn.isString(e) ? e.replace(/(?:^\w|[A-Z]|\b\w)/g, ((e,t)=>0 === t ? e.toLowerCase() : e.toUpperCase())).replace(/\W+/g, "") : e
        }
        static toUpperCamelCase(e) {
            return bn.isString(e) ? (e = bn.toCamelCase(e)).charAt(0).toUpperCase() + e.slice(1) : e
        }
        static isInPage(e) {
            return e !== document.body && document.body.contains(e)
        }
    }
    var yn = new class {
        constructor() {
            this.eventsName = ["siteInit", "pageInit", "siteLoad", "pageLoad", "siteIn", "pageIn", "reveal", "pageFetch", "pageOut", "pageCreate", "pageKill", "siteReload"],
            this.events = {},
            this.eventsName.forEach((e=>{
                this.events[e] = {
                    callbacks: [],
                    done: 0
                }
            }
            )),
            this.cycles = {
                load: {
                    events: ["siteInit", "pageInit", ["siteLoad", "pageLoad"], "siteIn", "pageIn", "reveal"]
                },
                reload: {
                    events: ["pageOut", "siteReload"]
                },
                transition: {
                    events: [["pageFetch", "pageOut"], "pageCreate", "pageKill", "pageInit", "pageLoad", "pageIn", "reveal"]
                },
                refresh: {
                    events: ["pageKill", "pageInit", "pageLoad", "pageIn", "reveal"]
                }
            },
            this.debug = !1
        }
        cycle(e) {
            if (this.cycles[e]) {
                this.cycles[e].current = 0,
                this.debug && console.log("Start cycle: " + e);
                for (const e in this.events)
                    this.events[e].done = 0;
                this.proceed(e)
            }
        }
        proceed(e) {
            const t = this.cycles[e].events
              , s = this.cycles[e].current;
            if (s < t.length) {
                const i = t[s];
                Array.isArray(i) ? i.forEach((t=>{
                    this.do(e, t)
                }
                )) : this.do(e, i)
            } else
                this.debug && console.log(e + " cycle ended")
        }
        next(e) {
            const t = this
              , s = this.cycles[e].events
              , i = this.cycles[e].current;
            if (i < s.length) {
                const r = s[i];
                let n = !0
                  , o = [];
                o = "string" == typeof r ? Array(r) : r,
                o.length > 1 && o.forEach((e=>{
                    (0 === t.events[e].done || t.events[e].done < t.events[e].callbacks.length) && (n = !1)
                }
                )),
                n && (this.cycles[e].current++,
                requestAnimationFrame(this.proceed.bind(this, e)))
            }
        }
        add(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.events[e] && this.events[e].callbacks.push({
                callback: t,
                position: s,
                cycle: i
            })
        }
        remove(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            const i = this;
            this.events[e] && this.events[e].callbacks.forEach(((r,n)=>{
                r.callback === t && r.cycle === s && delete i.events[e].callbacks[n]
            }
            ))
        }
        do(e, t) {
            if (this.events[t].done = 0,
            this.events[t].callbacks.length > 0) {
                this.debug && console.log("Do event: " + t + " (" + e + " cycle)"),
                vn.emit(bn.toCamelCase("before-" + t));
                this.events[t].callbacks.sort(((e,t)=>e.position - t.position)).forEach((s=>{
                    null === s.cycle || s.cycle === e ? s.callback((()=>this.done(e, t))) : this.done(e, t)
                }
                ))
            } else
                this.done(e, t)
        }
        done(e, t) {
            this.events[t].done++,
            this.debug && console.log("Done event: " + t + " " + this.events[t].done + "/" + this.events[t].callbacks.length + " (" + e + " cycle)"),
            vn.emit(bn.toCamelCase("after-" + t)),
            this.events[t].done >= this.events[t].callbacks.length && this.next(e, t)
        }
        enableDebug() {
            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.debug = e
        }
    }
    ;
    const wn = {
        "Amazon Silk": "amazon_silk",
        "Android Browser": "android",
        Bada: "bada",
        BlackBerry: "blackberry",
        Chrome: "chrome",
        Chromium: "chromium",
        Electron: "electron",
        Epiphany: "epiphany",
        Firefox: "firefox",
        Focus: "focus",
        Generic: "generic",
        "Google Search": "google_search",
        Googlebot: "googlebot",
        "Internet Explorer": "ie",
        "K-Meleon": "k_meleon",
        Maxthon: "maxthon",
        "Microsoft Edge": "edge",
        "MZ Browser": "mz",
        "NAVER Whale Browser": "naver",
        Opera: "opera",
        "Opera Coast": "opera_coast",
        PhantomJS: "phantomjs",
        Puffin: "puffin",
        QupZilla: "qupzilla",
        QQ: "qq",
        QQLite: "qqlite",
        Safari: "safari",
        Sailfish: "sailfish",
        "Samsung Internet for Android": "samsung_internet",
        SeaMonkey: "seamonkey",
        Sleipnir: "sleipnir",
        Swing: "swing",
        Tizen: "tizen",
        "UC Browser": "uc",
        Vivaldi: "vivaldi",
        "WebOS Browser": "webos",
        WeChat: "wechat",
        "Yandex Browser": "yandex",
        Roku: "roku"
    }
      , Sn = {
        amazon_silk: "Amazon Silk",
        android: "Android Browser",
        bada: "Bada",
        blackberry: "BlackBerry",
        chrome: "Chrome",
        chromium: "Chromium",
        electron: "Electron",
        epiphany: "Epiphany",
        firefox: "Firefox",
        focus: "Focus",
        generic: "Generic",
        googlebot: "Googlebot",
        google_search: "Google Search",
        ie: "Internet Explorer",
        k_meleon: "K-Meleon",
        maxthon: "Maxthon",
        edge: "Microsoft Edge",
        mz: "MZ Browser",
        naver: "NAVER Whale Browser",
        opera: "Opera",
        opera_coast: "Opera Coast",
        phantomjs: "PhantomJS",
        puffin: "Puffin",
        qupzilla: "QupZilla",
        qq: "QQ Browser",
        qqlite: "QQ Browser Lite",
        safari: "Safari",
        sailfish: "Sailfish",
        samsung_internet: "Samsung Internet for Android",
        seamonkey: "SeaMonkey",
        sleipnir: "Sleipnir",
        swing: "Swing",
        tizen: "Tizen",
        uc: "UC Browser",
        vivaldi: "Vivaldi",
        webos: "WebOS Browser",
        wechat: "WeChat",
        yandex: "Yandex Browser"
    }
      , En = {
        tablet: "tablet",
        mobile: "mobile",
        desktop: "desktop",
        tv: "tv"
    }
      , Tn = {
        WindowsPhone: "Windows Phone",
        Windows: "Windows",
        MacOS: "macOS",
        iOS: "iOS",
        Android: "Android",
        WebOS: "WebOS",
        BlackBerry: "BlackBerry",
        Bada: "Bada",
        Tizen: "Tizen",
        Linux: "Linux",
        ChromeOS: "Chrome OS",
        PlayStation4: "PlayStation 4",
        Roku: "Roku"
    }
      , xn = {
        EdgeHTML: "EdgeHTML",
        Blink: "Blink",
        Trident: "Trident",
        Presto: "Presto",
        Gecko: "Gecko",
        WebKit: "WebKit"
    };
    class Mn {
        static getFirstMatch(e, t) {
            const s = t.match(e);
            return s && s.length > 0 && s[1] || ""
        }
        static getSecondMatch(e, t) {
            const s = t.match(e);
            return s && s.length > 1 && s[2] || ""
        }
        static matchAndReturnConst(e, t, s) {
            if (e.test(t))
                return s
        }
        static getWindowsVersionName(e) {
            switch (e) {
            case "NT":
                return "NT";
            case "XP":
            case "NT 5.1":
                return "XP";
            case "NT 5.0":
                return "2000";
            case "NT 5.2":
                return "2003";
            case "NT 6.0":
                return "Vista";
            case "NT 6.1":
                return "7";
            case "NT 6.2":
                return "8";
            case "NT 6.3":
                return "8.1";
            case "NT 10.0":
                return "10";
            default:
                return
            }
        }
        static getMacOSVersionName(e) {
            const t = e.split(".").splice(0, 2).map((e=>parseInt(e, 10) || 0));
            if (t.push(0),
            10 === t[0])
                switch (t[1]) {
                case 5:
                    return "Leopard";
                case 6:
                    return "Snow Leopard";
                case 7:
                    return "Lion";
                case 8:
                    return "Mountain Lion";
                case 9:
                    return "Mavericks";
                case 10:
                    return "Yosemite";
                case 11:
                    return "El Capitan";
                case 12:
                    return "Sierra";
                case 13:
                    return "High Sierra";
                case 14:
                    return "Mojave";
                case 15:
                    return "Catalina";
                default:
                    return
                }
        }
        static getAndroidVersionName(e) {
            const t = e.split(".").splice(0, 2).map((e=>parseInt(e, 10) || 0));
            if (t.push(0),
            !(1 === t[0] && t[1] < 5))
                return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
        }
        static getVersionPrecision(e) {
            return e.split(".").length
        }
        static compareVersions(e, t, s=!1) {
            const i = Mn.getVersionPrecision(e)
              , r = Mn.getVersionPrecision(t);
            let n = Math.max(i, r)
              , o = 0;
            const a = Mn.map([e, t], (e=>{
                const t = n - Mn.getVersionPrecision(e)
                  , s = e + new Array(t + 1).join(".0");
                return Mn.map(s.split("."), (e=>new Array(20 - e.length).join("0") + e)).reverse()
            }
            ));
            for (s && (o = n - Math.min(i, r)),
            n -= 1; n >= o; ) {
                if (a[0][n] > a[1][n])
                    return 1;
                if (a[0][n] === a[1][n]) {
                    if (n === o)
                        return 0;
                    n -= 1
                } else if (a[0][n] < a[1][n])
                    return -1
            }
        }
        static map(e, t) {
            const s = [];
            let i;
            if (Array.prototype.map)
                return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i += 1)
                s.push(t(e[i]));
            return s
        }
        static find(e, t) {
            let s, i;
            if (Array.prototype.find)
                return Array.prototype.find.call(e, t);
            for (s = 0,
            i = e.length; s < i; s += 1) {
                const i = e[s];
                if (t(i, s))
                    return i
            }
        }
        static assign(e, ...t) {
            const s = e;
            let i, r;
            if (Object.assign)
                return Object.assign(e, ...t);
            for (i = 0,
            r = t.length; i < r; i += 1) {
                const e = t[i];
                if ("object" == typeof e && null !== e) {
                    Object.keys(e).forEach((t=>{
                        s[t] = e[t]
                    }
                    ))
                }
            }
            return e
        }
        static getBrowserAlias(e) {
            return wn[e]
        }
        static getBrowserTypeByAlias(e) {
            return Sn[e] || ""
        }
    }
    const Pn = /version\/(\d+(\.?_?\d+)+)/i
      , kn = [{
        test: [/googlebot/i],
        describe(e) {
            const t = {
                name: "Googlebot"
            }
              , s = Mn.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/opera/i],
        describe(e) {
            const t = {
                name: "Opera"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/opr\/|opios/i],
        describe(e) {
            const t = {
                name: "Opera"
            }
              , s = Mn.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/SamsungBrowser/i],
        describe(e) {
            const t = {
                name: "Samsung Internet for Android"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/Whale/i],
        describe(e) {
            const t = {
                name: "NAVER Whale Browser"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/MZBrowser/i],
        describe(e) {
            const t = {
                name: "MZ Browser"
            }
              , s = Mn.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/focus/i],
        describe(e) {
            const t = {
                name: "Focus"
            }
              , s = Mn.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/swing/i],
        describe(e) {
            const t = {
                name: "Swing"
            }
              , s = Mn.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/coast/i],
        describe(e) {
            const t = {
                name: "Opera Coast"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/opt\/\d+(?:.?_?\d+)+/i],
        describe(e) {
            const t = {
                name: "Opera Touch"
            }
              , s = Mn.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/yabrowser/i],
        describe(e) {
            const t = {
                name: "Yandex Browser"
            }
              , s = Mn.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/ucbrowser/i],
        describe(e) {
            const t = {
                name: "UC Browser"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/Maxthon|mxios/i],
        describe(e) {
            const t = {
                name: "Maxthon"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/epiphany/i],
        describe(e) {
            const t = {
                name: "Epiphany"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/puffin/i],
        describe(e) {
            const t = {
                name: "Puffin"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/sleipnir/i],
        describe(e) {
            const t = {
                name: "Sleipnir"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/k-meleon/i],
        describe(e) {
            const t = {
                name: "K-Meleon"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/micromessenger/i],
        describe(e) {
            const t = {
                name: "WeChat"
            }
              , s = Mn.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/qqbrowser/i],
        describe(e) {
            const t = {
                name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
            }
              , s = Mn.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/msie|trident/i],
        describe(e) {
            const t = {
                name: "Internet Explorer"
            }
              , s = Mn.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/\sedg\//i],
        describe(e) {
            const t = {
                name: "Microsoft Edge"
            }
              , s = Mn.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/edg([ea]|ios)/i],
        describe(e) {
            const t = {
                name: "Microsoft Edge"
            }
              , s = Mn.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/vivaldi/i],
        describe(e) {
            const t = {
                name: "Vivaldi"
            }
              , s = Mn.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/seamonkey/i],
        describe(e) {
            const t = {
                name: "SeaMonkey"
            }
              , s = Mn.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/sailfish/i],
        describe(e) {
            const t = {
                name: "Sailfish"
            }
              , s = Mn.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/silk/i],
        describe(e) {
            const t = {
                name: "Amazon Silk"
            }
              , s = Mn.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/phantom/i],
        describe(e) {
            const t = {
                name: "PhantomJS"
            }
              , s = Mn.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/slimerjs/i],
        describe(e) {
            const t = {
                name: "SlimerJS"
            }
              , s = Mn.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(e) {
            const t = {
                name: "BlackBerry"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/(web|hpw)[o0]s/i],
        describe(e) {
            const t = {
                name: "WebOS Browser"
            }
              , s = Mn.getFirstMatch(Pn, e) || Mn.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/bada/i],
        describe(e) {
            const t = {
                name: "Bada"
            }
              , s = Mn.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/tizen/i],
        describe(e) {
            const t = {
                name: "Tizen"
            }
              , s = Mn.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/qupzilla/i],
        describe(e) {
            const t = {
                name: "QupZilla"
            }
              , s = Mn.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/firefox|iceweasel|fxios/i],
        describe(e) {
            const t = {
                name: "Firefox"
            }
              , s = Mn.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/electron/i],
        describe(e) {
            const t = {
                name: "Electron"
            }
              , s = Mn.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/MiuiBrowser/i],
        describe(e) {
            const t = {
                name: "Miui"
            }
              , s = Mn.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/chromium/i],
        describe(e) {
            const t = {
                name: "Chromium"
            }
              , s = Mn.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/chrome|crios|crmo/i],
        describe(e) {
            const t = {
                name: "Chrome"
            }
              , s = Mn.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/GSA/i],
        describe(e) {
            const t = {
                name: "Google Search"
            }
              , s = Mn.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test(e) {
            const t = !e.test(/like android/i)
              , s = e.test(/android/i);
            return t && s
        },
        describe(e) {
            const t = {
                name: "Android Browser"
            }
              , s = Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/playstation 4/i],
        describe(e) {
            const t = {
                name: "PlayStation 4"
            }
              , s = Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/safari|applewebkit/i],
        describe(e) {
            const t = {
                name: "Safari"
            }
              , s = Mn.getFirstMatch(Pn, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/.*/i],
        describe(e) {
            const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return {
                name: Mn.getFirstMatch(t, e),
                version: Mn.getSecondMatch(t, e)
            }
        }
    }];
    var An = [{
        test: [/Roku\/DVP/],
        describe(e) {
            const t = Mn.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
            return {
                name: Tn.Roku,
                version: t
            }
        }
    }, {
        test: [/windows phone/i],
        describe(e) {
            const t = Mn.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
            return {
                name: Tn.WindowsPhone,
                version: t
            }
        }
    }, {
        test: [/windows /i],
        describe(e) {
            const t = Mn.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e)
              , s = Mn.getWindowsVersionName(t);
            return {
                name: Tn.Windows,
                version: t,
                versionName: s
            }
        }
    }, {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe(e) {
            const t = {
                name: Tn.iOS
            }
              , s = Mn.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/macintosh/i],
        describe(e) {
            const t = Mn.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, ".")
              , s = Mn.getMacOSVersionName(t)
              , i = {
                name: Tn.MacOS,
                version: t
            };
            return s && (i.versionName = s),
            i
        }
    }, {
        test: [/(ipod|iphone|ipad)/i],
        describe(e) {
            const t = Mn.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
            return {
                name: Tn.iOS,
                version: t
            }
        }
    }, {
        test(e) {
            const t = !e.test(/like android/i)
              , s = e.test(/android/i);
            return t && s
        },
        describe(e) {
            const t = Mn.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e)
              , s = Mn.getAndroidVersionName(t)
              , i = {
                name: Tn.Android,
                version: t
            };
            return s && (i.versionName = s),
            i
        }
    }, {
        test: [/(web|hpw)[o0]s/i],
        describe(e) {
            const t = Mn.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e)
              , s = {
                name: Tn.WebOS
            };
            return t && t.length && (s.version = t),
            s
        }
    }, {
        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
        describe(e) {
            const t = Mn.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || Mn.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || Mn.getFirstMatch(/\bbb(\d+)/i, e);
            return {
                name: Tn.BlackBerry,
                version: t
            }
        }
    }, {
        test: [/bada/i],
        describe(e) {
            const t = Mn.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
            return {
                name: Tn.Bada,
                version: t
            }
        }
    }, {
        test: [/tizen/i],
        describe(e) {
            const t = Mn.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
            return {
                name: Tn.Tizen,
                version: t
            }
        }
    }, {
        test: [/linux/i],
        describe: ()=>({
            name: Tn.Linux
        })
    }, {
        test: [/CrOS/],
        describe: ()=>({
            name: Tn.ChromeOS
        })
    }, {
        test: [/PlayStation 4/],
        describe(e) {
            const t = Mn.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
            return {
                name: Tn.PlayStation4,
                version: t
            }
        }
    }]
      , On = [{
        test: [/googlebot/i],
        describe: ()=>({
            type: "bot",
            vendor: "Google"
        })
    }, {
        test: [/huawei/i],
        describe(e) {
            const t = Mn.getFirstMatch(/(can-l01)/i, e) && "Nova"
              , s = {
                type: En.mobile,
                vendor: "Huawei"
            };
            return t && (s.model = t),
            s
        }
    }, {
        test: [/nexus\s*(?:7|8|9|10).*/i],
        describe: ()=>({
            type: En.tablet,
            vendor: "Nexus"
        })
    }, {
        test: [/ipad/i],
        describe: ()=>({
            type: En.tablet,
            vendor: "Apple",
            model: "iPad"
        })
    }, {
        test: [/Macintosh(.*?) FxiOS(.*?)\//],
        describe: ()=>({
            type: En.tablet,
            vendor: "Apple",
            model: "iPad"
        })
    }, {
        test: [/kftt build/i],
        describe: ()=>({
            type: En.tablet,
            vendor: "Amazon",
            model: "Kindle Fire HD 7"
        })
    }, {
        test: [/silk/i],
        describe: ()=>({
            type: En.tablet,
            vendor: "Amazon"
        })
    }, {
        test: [/tablet(?! pc)/i],
        describe: ()=>({
            type: En.tablet
        })
    }, {
        test(e) {
            const t = e.test(/ipod|iphone/i)
              , s = e.test(/like (ipod|iphone)/i);
            return t && !s
        },
        describe(e) {
            const t = Mn.getFirstMatch(/(ipod|iphone)/i, e);
            return {
                type: En.mobile,
                vendor: "Apple",
                model: t
            }
        }
    }, {
        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
        describe: ()=>({
            type: En.mobile,
            vendor: "Nexus"
        })
    }, {
        test: [/[^-]mobi/i],
        describe: ()=>({
            type: En.mobile
        })
    }, {
        test: e=>"blackberry" === e.getBrowserName(!0),
        describe: ()=>({
            type: En.mobile,
            vendor: "BlackBerry"
        })
    }, {
        test: e=>"bada" === e.getBrowserName(!0),
        describe: ()=>({
            type: En.mobile
        })
    }, {
        test: e=>"windows phone" === e.getBrowserName(),
        describe: ()=>({
            type: En.mobile,
            vendor: "Microsoft"
        })
    }, {
        test(e) {
            const t = Number(String(e.getOSVersion()).split(".")[0]);
            return "android" === e.getOSName(!0) && t >= 3
        },
        describe: ()=>({
            type: En.tablet
        })
    }, {
        test: e=>"android" === e.getOSName(!0),
        describe: ()=>({
            type: En.mobile
        })
    }, {
        test: e=>"macos" === e.getOSName(!0),
        describe: ()=>({
            type: En.desktop,
            vendor: "Apple"
        })
    }, {
        test: e=>"windows" === e.getOSName(!0),
        describe: ()=>({
            type: En.desktop
        })
    }, {
        test: e=>"linux" === e.getOSName(!0),
        describe: ()=>({
            type: En.desktop
        })
    }, {
        test: e=>"playstation 4" === e.getOSName(!0),
        describe: ()=>({
            type: En.tv
        })
    }, {
        test: e=>"roku" === e.getOSName(!0),
        describe: ()=>({
            type: En.tv
        })
    }]
      , Ln = [{
        test: e=>"microsoft edge" === e.getBrowserName(!0),
        describe(e) {
            if (/\sedg\//i.test(e))
                return {
                    name: xn.Blink
                };
            const t = Mn.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
            return {
                name: xn.EdgeHTML,
                version: t
            }
        }
    }, {
        test: [/trident/i],
        describe(e) {
            const t = {
                name: xn.Trident
            }
              , s = Mn.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: e=>e.test(/presto/i),
        describe(e) {
            const t = {
                name: xn.Presto
            }
              , s = Mn.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test(e) {
            const t = e.test(/gecko/i)
              , s = e.test(/like gecko/i);
            return t && !s
        },
        describe(e) {
            const t = {
                name: xn.Gecko
            }
              , s = Mn.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }, {
        test: [/(apple)?webkit\/537\.36/i],
        describe: ()=>({
            name: xn.Blink
        })
    }, {
        test: [/(apple)?webkit/i],
        describe(e) {
            const t = {
                name: xn.WebKit
            }
              , s = Mn.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
            return s && (t.version = s),
            t
        }
    }];
    class Cn {
        constructor(e, t=!1) {
            if (null == e || "" === e)
                throw new Error("UserAgent parameter can't be empty");
            this._ua = e,
            this.parsedResult = {},
            !0 !== t && this.parse()
        }
        getUA() {
            return this._ua
        }
        test(e) {
            return e.test(this._ua)
        }
        parseBrowser() {
            this.parsedResult.browser = {};
            const e = Mn.find(kn, (e=>{
                if ("function" == typeof e.test)
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some((e=>this.test(e)));
                throw new Error("Browser's test function is not valid")
            }
            ));
            return e && (this.parsedResult.browser = e.describe(this.getUA())),
            this.parsedResult.browser
        }
        getBrowser() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
        }
        getBrowserName(e) {
            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
        }
        getBrowserVersion() {
            return this.getBrowser().version
        }
        getOS() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
        }
        parseOS() {
            this.parsedResult.os = {};
            const e = Mn.find(An, (e=>{
                if ("function" == typeof e.test)
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some((e=>this.test(e)));
                throw new Error("Browser's test function is not valid")
            }
            ));
            return e && (this.parsedResult.os = e.describe(this.getUA())),
            this.parsedResult.os
        }
        getOSName(e) {
            const {name: t} = this.getOS();
            return e ? String(t).toLowerCase() || "" : t || ""
        }
        getOSVersion() {
            return this.getOS().version
        }
        getPlatform() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
        }
        getPlatformType(e=!1) {
            const {type: t} = this.getPlatform();
            return e ? String(t).toLowerCase() || "" : t || ""
        }
        parsePlatform() {
            this.parsedResult.platform = {};
            const e = Mn.find(On, (e=>{
                if ("function" == typeof e.test)
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some((e=>this.test(e)));
                throw new Error("Browser's test function is not valid")
            }
            ));
            return e && (this.parsedResult.platform = e.describe(this.getUA())),
            this.parsedResult.platform
        }
        getEngine() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
        }
        getEngineName(e) {
            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
        }
        parseEngine() {
            this.parsedResult.engine = {};
            const e = Mn.find(Ln, (e=>{
                if ("function" == typeof e.test)
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some((e=>this.test(e)));
                throw new Error("Browser's test function is not valid")
            }
            ));
            return e && (this.parsedResult.engine = e.describe(this.getUA())),
            this.parsedResult.engine
        }
        parse() {
            return this.parseBrowser(),
            this.parseOS(),
            this.parsePlatform(),
            this.parseEngine(),
            this
        }
        getResult() {
            return Mn.assign({}, this.parsedResult)
        }
        satisfies(e) {
            const t = {};
            let s = 0;
            const i = {};
            let r = 0;
            if (Object.keys(e).forEach((n=>{
                const o = e[n];
                "string" == typeof o ? (i[n] = o,
                r += 1) : "object" == typeof o && (t[n] = o,
                s += 1)
            }
            )),
            s > 0) {
                const e = Object.keys(t)
                  , s = Mn.find(e, (e=>this.isOS(e)));
                if (s) {
                    const e = this.satisfies(t[s]);
                    if (void 0 !== e)
                        return e
                }
                const i = Mn.find(e, (e=>this.isPlatform(e)));
                if (i) {
                    const e = this.satisfies(t[i]);
                    if (void 0 !== e)
                        return e
                }
            }
            if (r > 0) {
                const e = Object.keys(i)
                  , t = Mn.find(e, (e=>this.isBrowser(e, !0)));
                if (void 0 !== t)
                    return this.compareVersion(i[t])
            }
        }
        isBrowser(e, t=!1) {
            const s = this.getBrowserName().toLowerCase();
            let i = e.toLowerCase();
            const r = Mn.getBrowserTypeByAlias(i);
            return t && r && (i = r.toLowerCase()),
            i === s
        }
        compareVersion(e) {
            let t = [0]
              , s = e
              , i = !1;
            const r = this.getBrowserVersion();
            if ("string" == typeof r)
                return ">" === e[0] || "<" === e[0] ? (s = e.substr(1),
                "=" === e[1] ? (i = !0,
                s = e.substr(2)) : t = [],
                ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? s = e.substr(1) : "~" === e[0] && (i = !0,
                s = e.substr(1)),
                t.indexOf(Mn.compareVersions(r, s, i)) > -1
        }
        isOS(e) {
            return this.getOSName(!0) === String(e).toLowerCase()
        }
        isPlatform(e) {
            return this.getPlatformType(!0) === String(e).toLowerCase()
        }
        isEngine(e) {
            return this.getEngineName(!0) === String(e).toLowerCase()
        }
        is(e, t=!1) {
            return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
        }
        some(e=[]) {
            return e.some((e=>this.is(e)))
        }
    }
    /*!
	 * Bowser - a browser detector
	 * https://github.com/lancedikson/bowser
	 * MIT License | (c) Dustin Diaz 2012-2015
	 * MIT License | (c) Denis Demchenko 2015-2019
	 */
    class In {
        static getParser(e, t=!1) {
            if ("string" != typeof e)
                throw new Error("UserAgent should be a string");
            return new Cn(e,t)
        }
        static parse(e) {
            return new Cn(e).getResult()
        }
        static get BROWSER_MAP() {
            return Sn
        }
        static get ENGINE_MAP() {
            return xn
        }
        static get OS_MAP() {
            return Tn
        }
        static get PLATFORMS_MAP() {
            return En
        }
    }
    var Fn = new class {
        constructor() {
            this.settings = {
                cursor: {
                    disabled: ["tablet", "mobile"],
                    inertia: 1,
                    trailLength: 10
                },
                intersection: {
                    threshold: .3
                },
                lottie: {
                    renderer: "svg",
                    subFrame: !0
                },
                mouse: {
                    inertia: .1
                },
                parallax: {
                    inertia: .1
                },
                preloader: {
                    duration: 0
                },
                reveal: {
                    stagger: .1,
                    threshold: .15
                },
                scroll: {
                    inertia: .1
                },
                smooth: {
                    disabled: ["tablet", "mobile", {
                        safari: "<=12"
                    }],
                    inertia: .1
                },
                ticker: {
                    external: !1
                },
                transition: {
                    reload: !1
                },
                credits: {
                    show: !0
                }
            },
            this.timeouts = {
                resizeThrottle: null,
                scrollEnd: null
            },
            this.windowWidth = 1,
            this.windowHeight = 1,
            this.clientWidth = 1,
            window.scrollTop = window.scrollY,
            window.unifiedScrollTop = window.scrollTop,
            window.maxScrollTop = 1,
            window.scrollProgress = 0,
            this.previousScrollTop = window.scrollY,
            this.isScrolling = !1,
            window.mouseX = -1,
            window.mouseY = -1,
            window.mouseLastScrollTop = 0,
            window.browser = In.getParser(window.navigator.userAgent),
            document.documentElement.classList.add("is-" + window.browser.getPlatformType()),
            (window.browser.is("mobile") || window.browser.is("tablet")) && document.documentElement.classList.add("is-handheld"),
            window.browser.is("Safari") && (document.documentElement.classList.add("is-safari"),
            document.documentElement.classList.add("is-safari-" + window.browser.getBrowserVersion())),
            yn.add("siteInit", this.siteInit.bind(this), 999),
            this.bindEvents()
        }
        setSettings(e) {
            this.settings = bn.mergeDeep(this.settings, e)
        }
        siteInit(e) {
            this.showCredits(),
            this.setCSSProperties(),
            this.scrollHandler(),
            e()
        }
        bindEvents() {
            window.addEventListener("mousemove", this.mouseHandler.bind(this), {
                passive: !0
            }),
            window.addEventListener("resize", this.resizeThrottle.bind(this)),
            window.addEventListener("scroll", this.scrollHandler.bind(this), {
                passive: !0
            })
        }
        mouseHandler(e) {
            const t = e.pageX
              , s = e.pageY - window.scrollTop;
            window.mouseX = t,
            window.mouseY = s,
            vn.emit("mouseMove", e)
        }
        resizeThrottle() {
            clearTimeout(this.timeouts.resizeThrottle),
            this.timeouts.resizeThrottle = setTimeout(this.resizeHandler.bind(this), 200)
        }
        resizeHandler() {
            this.setCSSProperties(),
            vn.emit("resize")
        }
        setCSSProperties() {
            const e = window.innerWidth;
            this.windowWidth !== e && (this.windowWidth = e,
            this.clientWidth = document.body.clientWidth);
            const t = window.innerHeight;
            this.windowHeight !== t && (this.windowHeight = t,
            this.clientHeight = document.body.clientHeight),
            requestAnimationFrame((()=>{
                document.documentElement.style.setProperty("--vw", .01 * this.windowWidth + "px"),
                document.documentElement.style.setProperty("--cw", .01 * this.clientWidth + "px"),
                document.documentElement.style.setProperty("--vh", .01 * this.windowHeight + "px"),
                document.documentElement.style.setProperty("--ch", .01 * this.clientHeight + "px")
            }
            ))
        }
        scrollHandler() {
            window.scrollTop = window.scrollY,
            window.unifiedScrollTop = window.scrollTop,
            this.isScrolling || this.scrollStart(),
            clearTimeout(this.timeouts.scrollEnd),
            this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200),
            this.previousScrollTop = window.scrollTop,
            window.scrollProgress = window.scrollTop / window.maxScrollTop,
            vn.emit("scroll")
        }
        scrollStart() {
            this.isScrolling = !0,
            document.documentElement.classList.add("is-scrolling"),
            vn.emit("scrollStart")
        }
        scrollEnd() {
            this.isScrolling = !1,
            document.documentElement.classList.remove("is-scrolling"),
            vn.emit("scrollEnd")
        }
        showCredits() {
            if (this.settings.credits.show) {
                const e = "background-color: #00FFE5; color: black; font: 400 1em monospace; padding: 0.5em 0; "
                  , t = e + "font-weight: bold; "
                  , s = "color: black; font: 400 1em monospace; padding: 0.5em 0; ";
                console.log("%c powered by %cluge%c / 0.6.16-beta %c > https://luge.cool ", e, t, e, s)
            }
        }
    }
    ;
    var Bn = new class {
        constructor() {
            this.elements = [],
            yn.add("siteInit", this.init.bind(this), 20)
        }
        init(e) {
            this.createObserver(),
            e()
        }
        createObserver() {
            this.observer = new IntersectionObserver(this.intersectionCallback.bind(this),{
                threshold: [Fn.settings.intersection.threshold]
            })
        }
        intersectionCallback(e) {
            e.forEach((e=>{
                const t = e.target;
                let s = "in";
                e.isIntersecting || (s = e.boundingClientRect.y <= 0 ? "above" : "under"),
                t.luge.viewport.position !== s && (t.luge.viewport.position = s,
                t.dispatchEvent(new CustomEvent("viewportintersect")),
                "in" === s ? t.dispatchEvent(new CustomEvent("viewportin")) : (t.dispatchEvent(new CustomEvent("viewportout")),
                t.dispatchEvent(new CustomEvent("viewport" + s))))
            }
            ))
        }
        add(e) {
            this.observer.observe(e);
            const t = {
                viewport: {
                    position: "out"
                }
            };
            (e.luge || (e.luge = {})) && (e.luge = bn.mergeDeep(e.luge, t))
        }
        remove(e) {
            this.observer.unobserve(e)
        }
    }
      , Rn = _i
      , _n = Math.min
      , jn = Math.max;
    Rn({
        target: "Math",
        stat: !0,
        forced: !0
    }, {
        clamp: function(e, t, s) {
            return _n(s, jn(t, e))
        }
    });
    var Nn = new class {
        constructor() {
            this.callbacks = [],
            this.onceCallbacks = [],
            Fn.settings.ticker.external || (this.fps = 60,
            this.fpsInterval = 1e3 / this.fps,
            this.lastTickTime = null,
            requestAnimationFrame(this.tick.bind(this)))
        }
        add(e, t) {
            let s = !1;
            this.callbacks.forEach((i=>{
                i.cb === e && i.context === t && (s = !0)
            }
            )),
            s || this.callbacks.push({
                cb: e,
                context: t
            })
        }
        remove(e, t) {
            const s = this;
            this.callbacks.forEach(((i,r)=>{
                i.cb === e && i.context === t && delete s.callbacks[r]
            }
            ))
        }
        nextTick(e, t) {
            this.onceCallbacks.push({
                cb: e,
                context: t
            })
        }
        tick(e) {
            const t = this
              , s = e - this.lastTickTime;
            s > this.fpsInterval && (this.callbacks.forEach((t=>{
                t.cb.apply(t.context, [e])
            }
            )),
            this.onceCallbacks.forEach(((s,i)=>{
                s.cb.apply(s.context, [e]),
                delete t.onceCallbacks[i]
            }
            )),
            this.lastTickTime = e - s % this.fpsInterval),
            Fn.settings.ticker.external || requestAnimationFrame(this.tick.bind(this))
        }
    }
    ;
    var Hn = new class {
        constructor() {
            this.elements = [],
            this.elementsToBound = [],
            yn.add("pageKill", this.pageKill.bind(this)),
            yn.add("pageInit", this.init.bind(this), 20),
            Nn.add(this.tick, this),
            this.bindEvents()
        }
        bindEvents() {
            vn.on("mouseMove", this.mouseHandler, this),
            vn.on("resize", this.resizeHandler, this),
            vn.on("update", this.updateHandler, this)
        }
        pageKill(e) {
            this.elements = [],
            this.elementsToBound = [],
            e()
        }
        init(e) {
            this.getBoundingThrottle(),
            e()
        }
        resizeHandler() {
            this.getBoundingThrottle()
        }
        updateHandler() {
            Nn.nextTick((()=>{
                this.getBoundingThrottle()
            }
            ), this)
        }
        mouseHandler() {
            const e = this;
            this.elements.forEach((t=>{
                e.setElementPosition(t)
            }
            )),
            window.mouseLastScrollTop = window.scrollTop
        }
        getBoundingThrottle() {
            this.elements.forEach((e=>{
                this.elementsToBound.includes(e) || this.elementsToBound.push(e)
            }
            )),
            Nn.nextTick(this.getBounding.bind(this))
        }
        getBounding() {
            this.elementsToBound.forEach((e=>{
                this.setElementBounding(e),
                this.setElementPosition(e)
            }
            )),
            this.elementsToBound = []
        }
        setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect()
              , i = {
                anchor: {
                    x: s.left,
                    y: s.top + window.unifiedScrollTop
                },
                width: e.offsetWidth,
                height: e.offsetHeight
            };
            (e.luge || (e.luge = {})) && (e.luge = bn.mergeDeep(e.luge, i)),
            e.setAttribute("style", t)
        }
        setElementPosition(e) {
            if (e.luge && e.luge.anchor) {
                const t = {
                    x: window.mouseX - e.luge.anchor.x,
                    y: window.mouseY - e.luge.anchor.y + window.unifiedScrollTop
                };
                t.progressX = Math.clamp(t.x / e.luge.width, 0, 1),
                t.progressY = Math.clamp(t.y / e.luge.height, 0, 1),
                e.luge.mouse = bn.mergeDeep(e.luge.mouse, t)
            }
        }
        add(e) {
            this.elements.includes(e) || (this.elementsToBound.includes(e) || this.elementsToBound.push(e),
            this.elements.push(e))
        }
        remove(e) {
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1),
            this.elementsToBound.includes(e) && this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1)
        }
        tick() {
            const e = this;
            0 !== window.scrollTop - window.mouseLastScrollTop && this.elements.forEach((t=>{
                e.setElementPosition(t)
            }
            ))
        }
    }
    ;
    var qn = new class {
        constructor() {
            this.elements = [],
            this.elementsToBound = [],
            this.elementsToCheck = [],
            this.setMaxScrollTop(),
            yn.add("pageKill", this.pageKill.bind(this)),
            yn.add("pageInit", this.init.bind(this), 20),
            this.bindEvents()
        }
        bindEvents() {
            vn.on("resize", this.resizeHandler, this),
            vn.on("scroll", this.scrollHandler, this),
            vn.on("update", this.updateHandler, this)
        }
        pageKill(e) {
            this.elements = [],
            this.elementsToBound = [],
            this.elementsToCheck = [],
            e()
        }
        init(e) {
            this.getBoundingThrottle(),
            this.checkElementsThrottle(),
            e()
        }
        resizeHandler() {
            this.getBoundingThrottle(),
            this.checkElementsThrottle()
        }
        scrollHandler() {
            this.checkElementsThrottle()
        }
        updateHandler() {
            Nn.nextTick((()=>{
                this.getBoundingThrottle(),
                this.checkElementsThrottle()
            }
            ), this)
        }
        setMaxScrollTop() {
            window.maxScrollTop = Math.max(document.body ? document.body.scrollHeight : 0, document.body ? document.body.offsetHeight : 0, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight
        }
        getBoundingThrottle() {
            this.setMaxScrollTop(),
            this.elements.forEach((e=>{
                this.elementsToBound.includes(e) || (e.scrollProgress = 0,
                this.elementsToBound.push(e))
            }
            )),
            Nn.nextTick(this.getBounding.bind(this))
        }
        getBounding() {
            this.elementsToBound.forEach((e=>{
                this.setElementBounding(e)
            }
            )),
            this.elementsToBound = []
        }
        setElementBounding(e) {
            const t = e.getAttribute("style");
            e.setAttribute("style", "");
            const s = e.getBoundingClientRect();
            e.scrollStart = s.top + window.unifiedScrollTop - window.innerHeight,
            e.scrollEnd = e.scrollStart + e.clientHeight + window.innerHeight,
            e.scrollEnd = Math.min(e.scrollEnd, window.maxScrollTop),
            e.scrollMiddle = e.scrollStart + (e.scrollEnd - e.scrollStart) / 2,
            e.setAttribute("style", t)
        }
        checkElementsThrottle() {
            this.elements.forEach((e=>{
                this.elementsToCheck.includes(e) || this.elementsToCheck.push(e)
            }
            )),
            Nn.nextTick(this.checkElements.bind(this))
        }
        checkElements() {
            this.elementsToCheck.forEach((e=>{
                this.checkElement(e)
            }
            )),
            this.elementsToCheck = []
        }
        checkElement(e) {
            const t = window.unifiedScrollTop;
            let s = ""
              , i = 0;
            i = e.scrollStart < 0 ? Math.min(Math.max(t / e.scrollEnd, 0), 1) : Math.min(Math.max((t - e.scrollStart) / (e.scrollEnd - e.scrollStart), 0), 1),
            isNaN(i) && (i = 0),
            s = i <= 0 && e.scrollStart > 0 ? "under" : i >= 1 && e.scrollEnd < window.maxScrollTop ? "above" : "in",
            e.scrollProgress = i,
            e.viewportPosition !== s ? (e.viewportPosition = s,
            e.dispatchEvent(new CustomEvent("viewportintersect")),
            e.dispatchEvent(new CustomEvent("viewport" + s)),
            "in" !== s && e.dispatchEvent(new CustomEvent("viewportout")),
            e.dispatchEvent(new CustomEvent("scrollprogress"))) : i > 0 && i < 1 && e.dispatchEvent(new CustomEvent("scrollprogress"))
        }
        add(e) {
            this.elements.includes(e) || (e.scrollProgress = 0,
            this.elementsToBound.includes(e) || (this.elementsToBound.push(e),
            this.elementsToCheck.push(e)),
            this.elements.push(e))
        }
        remove(e) {
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1),
            this.elementsToBound.includes(e) && this.elementsToBound.splice(this.elementsToBound.indexOf(e), 1),
            this.elementsToCheck.includes(e) && this.elementsToCheck.splice(this.elementsToCheck.indexOf(e), 1)
        }
    }
      , Dn = _i
      , zn = s
      , Wn = c
      , Yn = pe
      , Kn = kt
      , Vn = Y("Promise")
      , Xn = zn.TypeError;
    Dn({
        target: "AsyncIterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        reduce: function(e) {
            var t = Kn(this)
              , s = Yn(t.next)
              , i = arguments.length < 2
              , r = i ? void 0 : arguments[1];
            return Yn(e),
            new Vn((function(n, o) {
                var a = function() {
                    try {
                        Vn.resolve(Kn(Wn(s, t))).then((function(t) {
                            try {
                                if (Kn(t).done)
                                    i ? o(Xn("Reduce of empty iterator with no initial value")) : n(r);
                                else {
                                    var s = t.value;
                                    i ? (i = !1,
                                    r = s,
                                    a()) : Vn.resolve(e(r, s)).then((function(e) {
                                        r = e,
                                        a()
                                    }
                                    ), o)
                                }
                            } catch (e) {
                                o(e)
                            }
                        }
                        ), o)
                    } catch (e) {
                        o(e)
                    }
                };
                a()
            }
            ))
        }
    });
    var Gn = _i
      , Un = gn
      , Qn = pe
      , Zn = kt
      , $n = s.TypeError;
    Gn({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        reduce: function(e) {
            Zn(this),
            Qn(e);
            var t = arguments.length < 2
              , s = t ? void 0 : arguments[1];
            if (Un(this, (function(i) {
                t ? (t = !1,
                s = i) : s = e(s, i)
            }
            ), {
                IS_ITERATOR: !0
            }),
            t)
                throw $n("Reduce of empty iterator with no initial value");
            return s
        }
    });
    var Jn = Yi.some;
    _i({
        target: "AsyncIterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        some: function(e) {
            return Jn(this, e)
        }
    });
    var eo = gn
      , to = pe
      , so = kt;
    _i({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        some: function(e) {
            return so(this),
            to(e),
            eo(this, (function(t, s) {
                if (e(t))
                    return s()
            }
            ), {
                IS_ITERATOR: !0,
                INTERRUPTED: !0
            }).stopped
        }
    });
    class io {
        constructor(e) {
            this.pluginSlug = e,
            yn.add("siteInit", this.beforeInit.bind(this), 5)
        }
        beforeInit(e) {
            this.isDisabled = this.disabled(),
            this.isDisabled ? document.documentElement.classList.add("lg-" + this.pluginSlug + "-disabled") : this.init(),
            e()
        }
        init() {
            this.setAttributes()
        }
        disabled() {
            let e = !1;
            return void 0 !== Fn.settings[this.pluginSlug] && void 0 !== Fn.settings[this.pluginSlug].disabled && (e = Fn.settings[this.pluginSlug].disabled),
            bn.isString(e) ? e = window.browser.is(e, !0) : bn.isArray(e) ? e = e.some((e=>bn.isString(e) ? window.browser.is(e, !0) : !!bn.isObject(e) && window.browser.satisfies(e))) : bn.isObject(e) && (e = window.browser.satisfies(e)),
            e
        }
        setAttributes() {
            this.pluginAttributes = {}
        }
        getAttributes(e) {
            const t = this.pluginAttributes
              , s = {};
            for (const i in t) {
                const r = t[i];
                let n = "lg-" + this.pluginSlug;
                "root" !== i && (n += "-" + i),
                n = bn.toCamelCase(n);
                const o = e.dataset[n];
                let a, l, c;
                "object" == typeof r ? (a = r[0],
                c = r[1]) : a = r,
                l = void 0 === o && void 0 !== c ? a(c) : (void 0 !== o || a !== Boolean) && (void 0 !== o ? a === Boolean ? "false" !== o : a(o) : void 0),
                s[i] = l
            }
            return (e.luge || (e.luge = {})) && (e.luge[this.pluginSlug] = s),
            s
        }
    }
    new class extends io {
        constructor() {
            super("cursor"),
            this.cursors = [],
            this.pointers = [],
            this.trails = [],
            this.hoverTags = ["a", "button", "input"]
        }
        init() {
            super.init(),
            yn.add("pageInit", this.pageInit.bind(this)),
            Nn.add(this.tick, this),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                inertia: [Number, Fn.settings.cursor.inertia],
                length: [Number, Fn.settings.cursor.trailLength],
                hide: Boolean
            }
        }
        bindEvents() {
            document.documentElement.addEventListener("mouseenter", this.hoverHandler.bind(this), {
                capture: !0,
                passive: !0
            }),
            document.documentElement.addEventListener("mouseleave", this.hoverHandler.bind(this), {
                capture: !0,
                passive: !0
            })
        }
        pageInit(e) {
            const t = this
              , s = document.querySelectorAll("[data-lg-cursor]:not(.lg-cursor)");
            s.length > 0 && s.forEach((e=>{
                const s = this.getAttributes(e);
                s.hide && document.documentElement.classList.add("lg-cursor-hide");
                e.querySelectorAll("[data-lg-cursor-pointer").forEach((e=>{
                    e.luge = {
                        cursor: {
                            position: {
                                x: 0,
                                y: 0
                            },
                            smoothPosition: {
                                x: 0,
                                y: 0
                            }
                        }
                    },
                    e.hasAttribute("data-lg-cursor-inertia") ? e.luge.cursor.inertia = Number(e.getAttribute("data-lg-cursor-inertia")) : e.luge.cursor.inertia = s.inertia,
                    e.classList.add("lg-cursor-pointer"),
                    t.pointers.push(e)
                }
                ));
                e.querySelectorAll("[data-lg-cursor-trail").forEach((e=>{
                    const i = document.createElementNS("http://www.w3.org/2000/svg", "svg")
                      , r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    i.appendChild(r),
                    e.appendChild(i),
                    e.luge = {
                        cursor: {
                            position: {
                                x: 0,
                                y: 0
                            },
                            smoothPosition: {
                                x: 0,
                                y: 0
                            },
                            points: [],
                            path: r
                        }
                    },
                    e.hasAttribute("data-lg-cursor-inertia") ? e.luge.cursor.inertia = Number(e.getAttribute("data-lg-cursor-inertia")) : e.luge.cursor.inertia = s.inertia,
                    e.hasAttribute("data-lg-cursor-length") ? e.luge.cursor.length = Number(e.getAttribute("data-lg-cursor-length")) : e.luge.cursor.length = s.length,
                    e.classList.add("lg-cursor-trail"),
                    t.trails.push(e)
                }
                )),
                e.classList.add("lg-cursor"),
                this.cursors.push(e)
            }
            )),
            e()
        }
        hoverHandler(e) {
            const t = e.target
              , s = t.tagName.toLowerCase()
              , i = t.getAttribute("data-lg-hover");
            let r = null;
            (this.hoverTags.includes(s) || null !== i) && (r = "mouseenter" === e.type),
            null !== r && this.cursors.forEach((e=>{
                e.classList.toggle("lg-cursor--hover", r),
                null !== i && "" !== i && e.classList.toggle("lg-cursor--hover--" + i, r)
            }
            ))
        }
        tick(e) {
            this.pointers.forEach((e=>{
                const t = e.luge.cursor.position
                  , s = e.luge.cursor.smoothPosition;
                t.x = window.mouseX,
                t.y = window.mouseY,
                s.x += (t.x - s.x) * e.luge.cursor.inertia,
                s.y += (t.y - s.y) * e.luge.cursor.inertia,
                e.style.transform = "translate3d(" + s.x + "px, " + s.y + "px, 0)"
            }
            )),
            this.trails.forEach((e=>{
                const t = e.luge.cursor.position
                  , s = e.luge.cursor.smoothPosition;
                if (t.x = window.mouseX,
                t.y = window.mouseY,
                -1 !== window.mouseX) {
                    s.x += (t.x - s.x) * e.luge.cursor.inertia,
                    s.y += (t.y - s.y) * e.luge.cursor.inertia;
                    const i = e.luge.cursor.points
                      , r = {
                        x: s.x,
                        y: s.y
                    };
                    i.push(r),
                    i.length > e.luge.cursor.length && i.shift();
                    let n = ""
                      , o = 0;
                    const a = (e,t)=>{
                        const s = e.reduce(((e,s,i,r)=>0 === i ? `M ${s.x},${s.y}` : `${e} ${t(s, i, r)}`), "");
                        return `${s}`
                    }
                      , l = (e,t)=>{
                        const s = t.x - e.x
                          , i = t.y - e.y;
                        return {
                            length: Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2)),
                            angle: Math.atan2(i, s)
                        }
                    }
                      , c = (e,t,s,i)=>{
                        const r = l(t || e, s || e);
                        o += r.length;
                        const n = r.angle + (i ? Math.PI : 0)
                          , a = .2 * r.length;
                        return [e.x + Math.cos(n) * a, e.y + Math.sin(n) * a]
                    }
                      , d = (e,t,s)=>{
                        const [i,r] = c(s[t - 1], s[t - 2], e)
                          , [n,o] = c(e, s[t - 1], s[t + 1], !0);
                        return `C ${i},${r} ${n},${o} ${e.x},${e.y}`
                    }
                    ;
                    n = a(i, d),
                    e.luge.cursor.path.setAttribute("d", n),
                    e.style.setProperty("--length", o)
                }
            }
            ))
        }
    }
    ;
    new class extends io {
        constructor() {
            super("intersection"),
            this.listeners = {
                onViewportIntersect: this.onViewportIntersect.bind(this)
            }
        }
        init() {
            super.init(),
            this.elements = [],
            yn.add("pageInit", this.pageInit.bind(this)),
            yn.add("pageKill", this.pageKill.bind(this)),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                class: String
            }
        }
        bindEvents() {
            vn.on("update", this.updateHandler, this)
        }
        updateHandler() {
            this.addElements()
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        addElements() {
            const e = document.querySelectorAll("[data-lg-intersection]")
              , t = this;
            e.forEach((e=>{
                t.addElement(e)
            }
            ))
        }
        addElement(e) {
            this.elements.includes(e) || (this.getAttributes(e),
            Bn.add(e),
            e.addEventListener("viewportintersect", this.listeners.onViewportIntersect),
            this.elements.push(e))
        }
        removeElement(e) {
            this.elements.includes(e) && (Bn.remove(e),
            e.removeEventListener("viewportintersect", this.listeners.onViewportIntersect),
            this.elements.splice(this.elements.indexOf(e), 1))
        }
        pageKill(e) {
            const t = this;
            this.elements.forEach((e=>{
                t.removeElement(e)
            }
            )),
            e()
        }
        onViewportIntersect(e) {
            const t = e.target
              , s = t.luge.viewport.position
              , i = !!t.luge.intersection.class && t.luge.intersection.class.split(" ");
            t.classList.remove("is-in", "is-out", "is-out-top", "is-out-bottom"),
            "in" === s ? (t.classList.add("is-in"),
            i && document.documentElement.classList.add(...i)) : (i && document.documentElement.classList.remove(...i),
            "above" === s ? t.classList.add("is-out", "is-out-top") : t.classList.add("is-out", "is-out-bottom"))
        }
    }
    ;
    new class extends io {
        constructor() {
            super("lottie"),
            this.elements = [],
            this.doneLoad = null,
            this.onViewportIntersect = this.onViewportIntersect.bind(this),
            this.onScrollProgress = this.onScrollProgress.bind(this)
        }
        init() {
            super.init(),
            "object" == typeof lottie && (yn.add("pageInit", this.pageInit.bind(this)),
            yn.add("pageLoad", this.pageLoad.bind(this)),
            yn.add("pageKill", this.pageKill.bind(this)),
            yn.add("reveal", this.reveal.bind(this))),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                autoplay: Boolean,
                scroll: Boolean,
                loop: Boolean,
                loopFrame: [Number, 0],
                reverse: Boolean,
                required: Boolean,
                force: Boolean,
                renderer: [String, Fn.settings.lottie.renderer],
                subframe: [Boolean, Fn.settings.lottie.subFrame]
            }
        }
        bindEvents() {
            vn.on("update", this.updateHandler, this)
        }
        updateHandler() {
            this.addElements(),
            this.reveal((()=>{}
            ))
        }
        pageLoad(e) {
            let t = !1;
            this.elements.length > 0 && this.elements.forEach((e=>{
                e.luge.lottie.required && !e.player.isLoaded && (t = !0)
            }
            )),
            t ? this.doneLoad = e : e()
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        addElements() {
            const e = this;
            this.elements = document.querySelectorAll("[data-lg-lottie]"),
            this.toAutoplay = [],
            this.toLoad = 0,
            this.requireds = 0,
            this.elements.forEach((t=>{
                t.player || (qn.add(t),
                e.initPlayer(t),
                t.addEventListener("revealin", e.play),
                t.addEventListener("viewportintersect", e.onViewportIntersect))
            }
            ))
        }
        pageKill(e) {
            const t = this;
            let s = [];
            const i = document.querySelector("[data-lg-page] + [data-lg-page]");
            s = i ? i.querySelectorAll("[data-lg-lottie]") : this.elements,
            s.forEach((e=>{
                e.removeEventListener("revealin", t.play),
                e.removeEventListener("viewportintersect", t.onViewportIntersect),
                e.hasAttribute("data-lg-lottie-scroll") && e.removeEventListener("scrollprogress", t.onScrollProgress),
                e.player && (e.player.destroy(),
                delete e.player)
            }
            )),
            e()
        }
        reveal(e) {
            this.toAutoplay.forEach((e=>{
                "in" === e.viewportPosition && e.play()
            }
            )),
            e()
        }
        onViewportIntersect(e) {
            const t = e.target;
            t.luge.lottie.force || ("in" === t.viewportPosition ? t.player.isPaused && (t.player.scrollPaused || t.hasAttribute("data-lg-lottie-autoplay")) && (t.player.scrollPaused = !1,
            t.play()) : t.player.isPaused || (t.player.scrollPaused = !0,
            t.pause()))
        }
        initPlayer(e) {
            const t = this;
            this.toLoad++;
            const s = this.getAttributes(e);
            e.player = lottie.loadAnimation({
                container: e,
                renderer: s.renderer,
                loop: s.loop && !s.reverse,
                autoplay: !1,
                path: s.root
            }),
            void 0 !== s.subframe && e.player.setSubframe(s.subframe),
            e.classList.add("lg-lottie"),
            this.setPlayerStateClasses(e, !1),
            s.autoplay && this.toAutoplay.push(e),
            s.required && this.requireds++,
            s.scroll ? e.addEventListener("scrollprogress", this.onScrollProgress) : s.loop && e.player.addEventListener("enterFrame", (function() {
                if (e.player.totalFrames > 0) {
                    const i = Math.round(e.player.currentFrame);
                    1 === e.player.playDirection ? i === e.player.totalFrames - 1 && (e.player.pause(),
                    s.reverse ? Nn.nextTick((()=>{
                        e.player.setDirection(-1),
                        e.player.goToAndPlay(e.player.totalFrames, !0),
                        t.setPlayerStateClasses(e, "backward")
                    }
                    ), this) : Nn.nextTick((()=>{
                        e.player.goToAndPlay(s.loopFrame, !0)
                    }
                    ), this)) : i === s.loopFrame && (e.player.pause(),
                    Nn.nextTick((()=>{
                        e.player.setDirection(1),
                        e.player.goToAndPlay(s.loopFrame, !0),
                        t.setPlayerStateClasses(e, "forward")
                    }
                    ), this))
                }
            }
            )),
            e.play = this.play.bind(this, e),
            e.pause = this.pause.bind(this, e),
            e.stop = this.stop.bind(this, e),
            e.player.addEventListener("DOMLoaded", (()=>{
                e.classList.add("is-loaded"),
                t.playerLoaded(s.required)
            }
            ), {
                once: !0
            })
        }
        setPlayerStateClasses(e, t) {
            e.classList.remove("is-playing", "is-playing-forward", "is-playing-backward", "is-paused"),
            t ? (e.classList.add("is-playing"),
            "backward" === t ? e.classList.add("is-playing-backward") : e.classList.add("is-playing-forward")) : e.classList.add("is-paused")
        }
        playerLoaded() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.toLoad--,
            e && this.requireds--,
            0 === this.requireds && "function" == typeof this.doneLoad && (this.doneLoad(),
            this.doneLoad = null),
            0 === this.toLoad && Nn.nextTick((()=>{
                vn.emit("resize")
            }
            ))
        }
        play(e) {
            e && e.player && (e.player.play(),
            this.setPlayerStateClasses(e, "forward"))
        }
        pause(e) {
            e && e.player && (e.player.pause(),
            this.setPlayerStateClasses(e, !1))
        }
        stop(e) {
            e && e.player && (e.player.stop(),
            this.setPlayerStateClasses(e, !1))
        }
        onScrollProgress(e) {
            const t = e.target;
            t.player.goToAndStop(t.player.totalFrames * t.scrollProgress, !0)
        }
    }
    ;
    new class extends io {
        constructor() {
            super("mouse"),
            this.elements = [],
            this.mouse = {
                x: window.mouseX,
                y: window.mouseY
            },
            window.mouseSpeed = 0
        }
        init() {
            super.init(),
            yn.add("pageInit", this.pageInit.bind(this)),
            yn.add("pageKill", this.pageKill.bind(this)),
            Nn.add(this.tick, this),
            this.getMouseMovement(),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                inertia: [String, Fn.settings.mouse.inertia]
            }
        }
        getAttributes(e) {
            const t = super.getAttributes(e);
            if (t.inertia) {
                const e = t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
                t.inertia = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.inertia),
                t.inertia = Math.max(Math.min(t.inertia, .99), 0)
            }
            return t
        }
        bindEvents() {
            vn.on("update", this.updateHandler, this)
        }
        updateHandler() {
            this.addElements()
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        addElements() {
            const e = document.querySelectorAll("[data-lg-mouse]")
              , t = this;
            e.forEach((e=>{
                t.addElement(e)
            }
            ))
        }
        addElement(e) {
            this.elements.includes(e) || (this.getAttributes(e),
            Hn.add(e),
            e.luge.mouse.smoothX = 0,
            e.luge.mouse.smoothY = 0,
            e.luge.mouse.smoothProgressX = 0,
            e.luge.mouse.smoothProgressY = 0,
            this.elements.push(e))
        }
        removeElement(e) {
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1)
        }
        pageKill(e) {
            const t = this;
            this.elements.forEach((e=>{
                t.removeElement(e)
            }
            )),
            e()
        }
        getMouseMovement() {
            const e = this.mouse.x - window.mouseX
              , t = this.mouse.y - window.mouseY
              , s = Math.hypot(e, t);
            if (window.mouseSpeed += .5 * (s - window.mouseSpeed),
            window.mouseSpeed < .001 && (window.mouseSpeed = 0),
            s > 1) {
                const s = Math.atan2(t, e) * (180 / Math.PI) + 180;
                window.mouseAngle = s,
                window.mouseDirection = s >= 45 && s < 135 ? "down" : s >= 135 && s < 225 ? "left" : s >= 225 && s < 315 ? "up" : "right"
            }
            this.mouse = {
                x: window.mouseX,
                y: window.mouseY
            },
            setTimeout(this.getMouseMovement.bind(this), 20)
        }
        tick() {
            this.elements.forEach((e=>{
                const t = e.luge.mouse;
                if (t.x)
                    if (t.inertia) {
                        t.smoothX += (t.x - t.smoothX) * t.inertia,
                        t.smoothY += (t.y - t.smoothY) * t.inertia,
                        t.smoothProgressX += (t.progressX - t.smoothProgressX) * t.inertia,
                        t.smoothProgressY += (t.progressY - t.smoothProgressY) * t.inertia,
                        e.style.setProperty("--mouse-x", t.smoothX),
                        e.style.setProperty("--mouse-y", t.smoothY),
                        e.style.setProperty("--mouse-progress-x", t.smoothProgressX),
                        e.style.setProperty("--mouse-progress-y", t.smoothProgressY);
                        const s = Math.round(1e3 * (t.x - t.smoothX)) / 1e3
                          , i = Math.round(1e3 * (t.y - t.smoothY)) / 1e3;
                        e.style.setProperty("--abs-diff-x", Math.abs(s)),
                        e.style.setProperty("--diff-x", s),
                        e.style.setProperty("--abs-diff-y", Math.abs(i)),
                        e.style.setProperty("--diff-y", i)
                    } else
                        e.style.setProperty("--mouse-x", t.x),
                        e.style.setProperty("--mouse-y", t.y),
                        e.style.setProperty("--mouse-progress-x", t.progressX),
                        e.style.setProperty("--mouse-progress-y", t.progressY)
            }
            ))
        }
    }
    ;
    new class extends io {
        constructor() {
            super("parallax"),
            this.elements = [],
            this.onScrollProgress = this.onScrollProgress.bind(this)
        }
        init() {
            super.init(),
            yn.add("pageInit", this.pageInit.bind(this), 30),
            yn.add("pageKill", this.pageKill.bind(this)),
            Nn.add(this.tick, this),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                disable: String,
                amplitude: [String, 1],
                anchor: String,
                inertia: [String, Fn.settings.parallax.inertia]
            }
        }
        getAttributes(e) {
            const t = super.getAttributes(e);
            if (t.amplitude) {
                const e = t.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
                t.amplitude = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.amplitude)
            }
            return t
        }
        bindEvents() {
            vn.on("update", this.updateHandler, this)
        }
        updateHandler() {
            this.addElements()
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        pageKill(e) {
            const t = this;
            this.elements.forEach((e=>{
                t.removeElement(e)
            }
            )),
            e()
        }
        addElements() {
            document.querySelectorAll("[data-lg-parallax]").forEach((e=>{
                const t = this.getAttributes(e).disable;
                let s = !0;
                t && ("desktop" === t && window.browser.is("desktop") || "handheld" === t && !window.browser.is("desktop") || "mobile" === t && window.browser.is("mobile") || "tablet" === t && window.browser.is("tablet")) && (s = !1),
                s && this.addElement(e)
            }
            ))
        }
        addElement(e) {
            this.elements.includes(e) || (qn.add(e),
            "child" === e.luge.parallax.root && (e.style.overflow = "hidden",
            e.luge.parallax.child = e.firstElementChild),
            e.luge.parallax.movement = 0,
            e.luge.parallax.smoothMovement = 0,
            this.elements.push(e),
            Nn.nextTick((()=>{
                e.addEventListener("scrollprogress", this.onScrollProgress),
                this.moveElement(e)
            }
            )))
        }
        removeElement(e) {
            e.removeEventListener("scrollprogress", this.onScrollProgress),
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1)
        }
        onScrollProgress(e) {
            this.moveElement(e.target)
        }
        moveElement(e) {
            let t = 0;
            t = e.scrollStart < 0 ? e.scrollProgress : 1 - 2 * e.scrollProgress,
            "bottom" === e.luge.parallax.anchor ? t += 1 : "top" === e.luge.parallax.anchor && (t -= 1),
            "child" === e.luge.parallax.root ? e.luge.parallax.movement = 5 * e.luge.parallax.amplitude * t : e.luge.parallax.movement = e.clientHeight * t * e.luge.parallax.amplitude / 2
        }
        tick() {
            this.elements.forEach((e=>{
                e.luge.parallax.smoothMovement += (e.luge.parallax.movement - e.luge.parallax.smoothMovement) * e.luge.parallax.inertia,
                "child" === e.luge.parallax.root && e.luge.parallax.child ? e.luge.parallax.child.style.transform = "translate3d(0, " + e.luge.parallax.smoothMovement + "%, 0) scale(1." + String(Math.abs(e.luge.parallax.amplitude)).replace(".", "") + ")" : e.style.transform = "translate3d(0, " + e.luge.parallax.smoothMovement + "px, 0)"
            }
            ))
        }
    }
    ;
    var ro = new class extends io {
        constructor() {
            super("preloader"),
            this.intro = !1,
            this.playerIn = !1,
            this.startTime = Date.now(),
            this.doneLoad = null
        }
        init() {
            super.init(),
            this.el = document.querySelector("[data-lg-preloader]"),
            this.el && (this.attributes = this.getAttributes(this.el),
            this.el.classList.add("lg-preloader", "lg-preloader--" + this.attributes.root),
            this.initLottie(),
            yn.add("siteIn", this.siteIn.bind(this))),
            yn.add("pageLoad", this.pageLoad.bind(this))
        }
        setAttributes() {
            this.pluginAttributes = {
                root: [String, ""],
                duration: [Number, Fn.settings.preloader.duration],
                in: String,
                reverse: Boolean
            }
        }
        pageLoad(e) {
            this.attributes && "lottie" === this.attributes.root && "object" == typeof lottie ? this.doneLoad = e : e()
        }
        siteIn(e) {
            const t = (Date.now() - this.startTime) / 1e3
              , s = this.attributes.duration - t;
            if (s <= 0) {
                const t = this.clear.bind(this, e);
                if (this.playerIn)
                    this.playerIn.play(),
                    this.playerIn.addEventListener("complete", t, {
                        once: !0
                    });
                else if ("function" == typeof this.intro)
                    this.intro(e, this.remove.bind(this));
                else {
                    const e = window.getComputedStyle(this.el).getPropertyValue("transition-duration");
                    "" !== e && "0s" !== e ? (this.el.addEventListener("transitionend", t, {
                        once: !0
                    }),
                    this.el.classList.add("is-hidden")) : t()
                }
            } else
                setTimeout(this.siteIn.bind(this, e), 1e3 * s)
        }
        clear(e) {
            this.playerIn && this.playerIn.destroy(),
            this.remove(),
            e()
        }
        remove(e) {
            this.el.parentNode.removeChild(this.el),
            this.el = null
        }
        add(e) {
            this.intro = e
        }
        initLottie() {
            const e = this;
            if ("lottie" === this.attributes.root && "object" == typeof lottie) {
                const t = this.attributes.in;
                let s = !1;
                t && (s = lottie.loadAnimation({
                    container: this.el,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: t,
                    rendererSettings: {
                        preserveAspectRatio: "none"
                    }
                }),
                this.attributes.reverse && s.setDirection(-1)),
                s.addEventListener("DOMLoaded", (()=>{
                    e.attributes.reverse && s.goToAndStop(s.totalFrames - 1, !0),
                    e.el.setAttribute("style", ""),
                    "function" == typeof e.doneLoad && (e.doneLoad(),
                    e.doneLoad = null)
                }
                ), {
                    once: !0
                }),
                this.playerIn = s
            }
        }
    }
    ;
    var no = new class extends io {
        constructor() {
            super("reveal"),
            this.elements = [],
            this.toRevealIn = [],
            this.toRevealOut = [],
            this.reveals = {
                in: {},
                out: {}
            },
            this.canReveal = !1,
            this.onScrollProgress = this.onScrollProgress.bind(this)
        }
        init() {
            super.init(),
            yn.add("pageInit", this.pageInit.bind(this), 11),
            yn.add("pageKill", this.pageKill.bind(this)),
            yn.add("reveal", this.reveal.bind(this)),
            this.bindEvents()
        }
        setAttributes() {
            super.setAttributes(),
            this.pluginAttributes = {
                root: String,
                stagger: String,
                manual: [Boolean, !1],
                multiple: Boolean,
                delay: [Number, 0]
            }
        }
        getAttributes(e) {
            const t = super.getAttributes(e);
            return void 0 !== t.stagger && "" === t.stagger ? t.stagger = Fn.settings.reveal.stagger : void 0 === t.stagger && (t.stagger = !1),
            t
        }
        bindEvents() {
            vn.on("resize", this.resizeHandler, this),
            vn.on("scroll", this.scrollHandler, this),
            vn.on("update", this.updateHandler, this)
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        addElements() {
            const e = document.querySelectorAll("[data-lg-reveal]")
              , t = this;
            e.forEach((e=>{
                t.addElement(e)
            }
            ))
        }
        addElement(e) {
            if (!this.elements.includes(e)) {
                const t = this.getAttributes(e);
                if (!t.stagger && null !== e.closest("[data-lg-reveal-stagger]"))
                    return;
                const s = t.root;
                e.luge.reveal.name = bn.toCamelCase(s),
                t.manual ? (e.luge.reveal.in = ()=>{
                    this.revealCallback(e, e.luge.reveal.name, "in"),
                    this.setRevealClasses(e, "is-in")
                }
                ,
                e.luge.reveal.out = ()=>{
                    this.revealCallback(e, e.luge.reveal.name, "out"),
                    this.setRevealClasses(e, "is-out")
                }
                ) : (qn.add(e),
                e.addEventListener("scrollprogress", this.onScrollProgress)),
                e.luge.reveal.delay = 1e3 * t.delay,
                t.stagger ? Array.from(e.children).forEach((e=>{
                    const t = e.dataset.lgReveal;
                    e.style.transition = "none",
                    Nn.nextTick((()=>{
                        e.style.transition = ""
                    }
                    )),
                    e.classList.add("lg-reveal", "is-out"),
                    (t || s) && e.classList.add("lg-reveal--" + (null != t ? t : s)),
                    e.dataset.lgRevealChild = "",
                    (e.luge || (e.luge = {})) && (e.luge.reveal = {
                        isRevealed: !1
                    })
                }
                )) : (e.style.transition = "none",
                Nn.nextTick((()=>{
                    e.style.transition = ""
                }
                )),
                e.classList.add("lg-reveal", "is-out"),
                s && e.classList.add("lg-reveal--" + s)),
                this.elements.push(e)
            }
        }
        removeElement(e) {
            e.removeEventListener("scrollprogress", this.onScrollProgress),
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1)
        }
        pageKill(e) {
            const t = this;
            this.canReveal = !1,
            this.elements.forEach((e=>{
                t.removeElement(e)
            }
            )),
            e()
        }
        onScrollProgress(e) {
            const t = e.target
              , s = Fn.settings.reveal.threshold;
            t.scrollProgress >= s && t.scrollProgress <= 1 - s && !t.luge.reveal.isRevealed ? (this.toRevealOut.includes(t) && this.toRevealOut.splice(this.toRevealOut.indexOf(t), 1),
            this.toRevealIn.includes(t) || this.toRevealIn.push(t)) : (t.scrollProgress < s || t.scrollProgress > 1 - s && t.scrollEnd < Math.round(window.unifiedScrollTop)) && t.luge.reveal.isRevealed && (this.toRevealIn.includes(t) && this.toRevealIn.splice(this.toRevealIn.indexOf(t), 1),
            this.toRevealOut.includes(t) || this.toRevealOut.push(t))
        }
        reveal(e) {
            this.canReveal = !0,
            this.elements.forEach((e=>{
                e.scrollStart < 0 && (this.toRevealIn.includes(e) || this.toRevealIn.push(e))
            }
            )),
            this.revealElements(),
            e()
        }
        resizeHandler() {
            this.revealElements()
        }
        scrollHandler() {
            this.revealElements()
        }
        updateHandler() {
            this.addElements(),
            this.revealElements()
        }
        revealElements() {
            const e = this;
            if (this.canReveal) {
                let t = 0;
                this.toRevealIn.forEach((s=>{
                    const i = bn.toCamelCase(s.luge.reveal.root);
                    t += s.luge.reveal.delay,
                    setTimeout((function() {
                        e.revealCallback(s, i, "in"),
                        s.luge.reveal.stagger ? Array.from(s.children).forEach(((t,r)=>{
                            const n = bn.toCamelCase(t.dataset.lgReveal);
                            setTimeout((()=>{
                                (n || i) && e.revealCallback(t, null != n ? n : i, "in"),
                                e.setRevealClasses(t, "is-in")
                            }
                            ), r * s.luge.reveal.stagger * 1e3)
                        }
                        )) : e.setRevealClasses(s, "is-in")
                    }
                    ), t),
                    t += 1e3 * Fn.settings.reveal.stagger,
                    s.luge.reveal.multiple || e.removeElement(s)
                }
                )),
                this.toRevealOut.forEach((t=>{
                    const s = bn.toCamelCase(t.luge.reveal.root);
                    void 0 !== t.luge.reveal.isRevealed && e.revealCallback(t, s, "out");
                    let i = "";
                    i = t.scrollProgress > .5 ? "is-out is-out-top" : "is-out is-out-bottom",
                    t.luge.reveal.stagger ? Array.from(t.children).forEach(((r,n)=>{
                        const o = bn.toCamelCase(r.dataset.lgReveal);
                        setTimeout((()=>{
                            (o || s) && e.revealCallback(r, null != o ? o : s, "out"),
                            e.setRevealClasses(r, i)
                        }
                        ), n * t.luge.reveal.stagger * 1e3)
                    }
                    )) : e.setRevealClasses(t, i)
                }
                )),
                this.toRevealIn = [],
                this.toRevealOut = []
            }
        }
        setRevealClasses(e, t) {
            t = t.split(" "),
            e.classList.remove("is-in", "is-out", "is-out-top", "is-out-bottom"),
            t.forEach((t=>{
                e.classList.add(t)
            }
            ))
        }
        revealCallback(e, t, s) {
            e.dispatchEvent(new CustomEvent("reveal" + s)),
            e.luge.reveal.isRevealed = "in" === s,
            "function" == typeof this.reveals[s][t] ? this.reveals[s][t](e) : "function" == typeof e["onreveal" + s] && e["onreveal" + s]()
        }
        add(e, t, s) {
            this.reveals[e] && (t = bn.toCamelCase(t),
            this.reveals[e][t] ? console.log("Reveal animation named " + t + " already exists.") : this.reveals[e][t] = s)
        }
    }
    ;
    new class extends io {
        constructor() {
            super("scroll"),
            this.elements = [],
            this.allowedProperties = ["opacity", "background-x", "background-y"],
            this.transformProperties = ["x", "y", "z", "translate3d", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ"],
            this.presets = {
                "background-x": {
                    "background-x": ["0%", "100%"]
                },
                "background-y": {
                    "background-y": ["0%", "100%"]
                }
            },
            this.onScrollProgress = this.onScrollProgress.bind(this)
        }
        init() {
            super.init(),
            yn.add("pageInit", this.pageInit.bind(this)),
            yn.add("pageKill", this.pageKill.bind(this)),
            Nn.add(this.tick, this),
            this.bindEvents()
        }
        setAttributes() {
            this.pluginAttributes = {
                root: String,
                yoyo: Boolean,
                inertia: [String, Fn.settings.scroll.inertia],
                animate: String
            }
        }
        getAttributes(e) {
            const t = super.getAttributes(e);
            if (t.inertia) {
                const e = t.inertia.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);
                t.inertia = e ? Number(e[1]) + (Number(e[2]) - Number(e[1])) * Math.random() : Number(t.inertia),
                t.inertia = Math.max(Math.min(t.inertia, .99), 0)
            }
            return t
        }
        bindEvents() {
            vn.on("update", this.updateHandler, this)
        }
        updateHandler() {
            this.addElements()
        }
        pageInit(e) {
            this.addElements(),
            e()
        }
        addElements() {
            const e = document.querySelectorAll("[data-lg-scroll]")
              , t = this;
            e.forEach((e=>{
                t.addElement(e)
            }
            ))
        }
        addElement(e) {
            if (!this.elements.includes(e)) {
                const t = this.getAttributes(e);
                qn.add(e),
                e.addEventListener("scrollprogress", this.onScrollProgress);
                const s = {};
                s.smoothProgress = void 0 !== e.scrollProgress ? e.scrollProgress : 0,
                s.yoyo = t.yoyo,
                s.inertia = t.inertia;
                let i = !1;
                if (void 0 !== t.animate ? i = JSON.parse(t.animate.replace(/'/g, '"')) : this.presets[t.root] && (i = this.presets[t.root]),
                i) {
                    const e = {};
                    for (const t in i)
                        if (this.allowedProperties.includes(t) || this.transformProperties.includes(t)) {
                            const s = i[t];
                            let r = String(s[0])
                              , n = String(s[1])
                              , o = r.match(/\d+([a-zA-Z%]+)/m);
                            o ? o = o[1] : 0 === t.indexOf("rotate") && (o = "deg"),
                            r = Number(r.replace(o, "")),
                            n = Number(n.replace(o, ""));
                            let a = t;
                            "background-x" === t ? a = "background-position-x" : "background-y" === t && (a = "background-position-y"),
                            e[a] = {
                                from: r,
                                to: n,
                                current: r,
                                unit: o
                            }
                        }
                    s.properties = e
                }
                e.luge.scroll.animation = s,
                this.elements.push(e)
            }
        }
        removeElement(e) {
            e.removeEventListener("scrollprogress", this.onScrollProgress),
            this.elements.includes(e) && this.elements.splice(this.elements.indexOf(e), 1)
        }
        pageKill(e) {
            const t = this;
            this.elements.forEach((e=>{
                t.removeElement(e)
            }
            )),
            e()
        }
        onScrollProgress(e) {
            e.target.luge.scroll.animation.atDest = !1
        }
        tick() {
            for (const e of this.elements) {
                if (e.luge.scroll.animation.atDest)
                    continue;
                let t = e.scrollProgress;
                if (e.luge.scroll.yoyo && (t = 1 - Math.abs(1 - 2 * t)),
                e.luge.scroll.animation.smoothProgress += (t - e.luge.scroll.animation.smoothProgress) * (1 - e.luge.scroll.inertia),
                e.luge.scroll.animation.properties) {
                    const t = {};
                    for (const [s,i] of Object.entries(e.luge.scroll.animation.properties))
                        i.current = i.from + (i.to - i.from) * e.luge.scroll.animation.smoothProgress,
                        ["x", "y", "z"].includes(s) ? (t.translate3d || (t.translate3d = {})) && (t.translate3d[s] = i.current + i.unit) : t[s] = i.current + i.unit;
                    const s = [];
                    for (const [e,i] of Object.entries(t))
                        if (this.transformProperties.includes(e)) {
                            if ("object" == typeof i)
                                if ("translate3d" === e) {
                                    const e = Object.assign({
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }, i);
                                    i.string = e.x + ", " + e.y + ", " + e.z
                                } else
                                    i.string = Object.values(i).join(", ");
                            s.push(e + "(" + ("object" != typeof i ? i : i.string) + ")")
                        }
                    const i = {}
                      , r = [];
                    s.length > 0 && (i.transform = s.join(" "),
                    r.push("transform"));
                    for (const [e,s] of Object.entries(t))
                        this.transformProperties.includes(e) || (i[e] = s,
                        r.push(e));
                    for (const [t,s] of Object.entries(i))
                        e.style.setProperty(t, s);
                    e.style.setProperty("will-change", r.join(", "))
                } else {
                    const t = Math.round(1e3 * (e.scrollProgress - e.luge.scroll.animation.smoothProgress)) / 1e3;
                    e.style.setProperty("--progress", e.luge.scroll.animation.smoothProgress),
                    e.style.setProperty("--abs-diff", Math.abs(t)),
                    e.style.setProperty("--diff", t)
                }
                Math.abs(t - e.luge.scroll.animation.smoothProgress) < 1e-4 && (e.luge.scroll.animation.atDest = !0)
            }
        }
    }
    ;
    var oo = Yi.find;
    _i({
        target: "AsyncIterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        find: function(e) {
            return oo(this, e)
        }
    });
    var ao = gn
      , lo = pe
      , co = kt;
    _i({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: !0
    }, {
        find: function(e) {
            return co(this),
            lo(e),
            ao(this, (function(t, s) {
                if (e(t))
                    return s(t)
            }
            ), {
                IS_ITERATOR: !0,
                INTERRUPTED: !0
            }).result
        }
    });
    var ho = {
        exports: {}
    };
    !function(e, t) {
        e.exports = function() {
            var e = 0;
            function t(t) {
                return "__private_" + e++ + "_" + t
            }
            function s(e, t) {
                if (!Object.prototype.hasOwnProperty.call(e, t))
                    throw new TypeError("attempted to use private field on non-instance");
                return e
            }
            function i() {}
            i.prototype = {
                on: function(e, t, s) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({
                        fn: t,
                        ctx: s
                    }),
                    this
                },
                once: function(e, t, s) {
                    var i = this;
                    function r() {
                        i.off(e, r),
                        t.apply(s, arguments)
                    }
                    return r._ = t,
                    this.on(e, r, s)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), s = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = s.length; i < r; i++)
                        s[i].fn.apply(s[i].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var s = this.e || (this.e = {})
                      , i = s[e]
                      , r = [];
                    if (i && t)
                        for (var n = 0, o = i.length; n < o; n++)
                            i[n].fn !== t && i[n].fn._ !== t && r.push(i[n]);
                    return r.length ? s[e] = r : delete s[e],
                    this
                }
            };
            var r = i;
            r.TinyEmitter = i;
            var n, o = "virtualscroll", a = t("options"), l = t("el"), c = t("emitter"), d = t("event"), h = t("touchStart"), u = t("bodyTouchAction");
            return function() {
                function e(e) {
                    var t = this;
                    Object.defineProperty(this, a, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, l, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, c, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, d, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, h, {
                        writable: !0,
                        value: void 0
                    }),
                    Object.defineProperty(this, u, {
                        writable: !0,
                        value: void 0
                    }),
                    this._onWheel = function(e) {
                        var i = s(t, a)[a]
                          , r = s(t, d)[d];
                        r.deltaX = e.wheelDeltaX || -1 * e.deltaX,
                        r.deltaY = e.wheelDeltaY || -1 * e.deltaY,
                        n.isFirefox && 1 === e.deltaMode && (r.deltaX *= i.firefoxMultiplier,
                        r.deltaY *= i.firefoxMultiplier),
                        r.deltaX *= i.mouseMultiplier,
                        r.deltaY *= i.mouseMultiplier,
                        t._notify(e)
                    }
                    ,
                    this._onMouseWheel = function(e) {
                        var i = s(t, d)[d];
                        i.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0,
                        i.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta,
                        t._notify(e)
                    }
                    ,
                    this._onTouchStart = function(e) {
                        var i = e.targetTouches ? e.targetTouches[0] : e;
                        s(t, h)[h].x = i.pageX,
                        s(t, h)[h].y = i.pageY
                    }
                    ,
                    this._onTouchMove = function(e) {
                        var i = s(t, a)[a];
                        i.preventTouch && !e.target.classList.contains(i.unpreventTouchClass) && e.preventDefault();
                        var r = s(t, d)[d]
                          , n = e.targetTouches ? e.targetTouches[0] : e;
                        r.deltaX = (n.pageX - s(t, h)[h].x) * i.touchMultiplier,
                        r.deltaY = (n.pageY - s(t, h)[h].y) * i.touchMultiplier,
                        s(t, h)[h].x = n.pageX,
                        s(t, h)[h].y = n.pageY,
                        t._notify(e)
                    }
                    ,
                    this._onKeyDown = function(e) {
                        var i = s(t, d)[d];
                        i.deltaX = i.deltaY = 0;
                        var r = window.innerHeight - 40;
                        switch (e.keyCode) {
                        case 37:
                        case 38:
                            i.deltaY = s(t, a)[a].keyStep;
                            break;
                        case 39:
                        case 40:
                            i.deltaY = -s(t, a)[a].keyStep;
                            break;
                        case 32:
                            i.deltaY = r * (e.shiftKey ? 1 : -1);
                            break;
                        default:
                            return
                        }
                        t._notify(e)
                    }
                    ,
                    s(this, l)[l] = window,
                    e && e.el && (s(this, l)[l] = e.el,
                    delete e.el),
                    n || (n = {
                        hasWheelEvent: "onwheel"in document,
                        hasMouseWheelEvent: "onmousewheel"in document,
                        hasTouch: "ontouchstart"in document,
                        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                        hasPointer: !!window.navigator.msPointerEnabled,
                        hasKeyDown: "onkeydown"in document,
                        isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                    }),
                    s(this, a)[a] = Object.assign({
                        mouseMultiplier: 1,
                        touchMultiplier: 2,
                        firefoxMultiplier: 15,
                        keyStep: 120,
                        preventTouch: !1,
                        unpreventTouchClass: "vs-touchmove-allowed",
                        useKeyboard: !0,
                        useTouch: !0
                    }, e),
                    s(this, c)[c] = new r,
                    s(this, d)[d] = {
                        y: 0,
                        x: 0,
                        deltaX: 0,
                        deltaY: 0
                    },
                    s(this, h)[h] = {
                        x: null,
                        y: null
                    },
                    s(this, u)[u] = null,
                    void 0 !== s(this, a)[a].passive && (this.listenerOptions = {
                        passive: s(this, a)[a].passive
                    })
                }
                var t = e.prototype;
                return t._notify = function(e) {
                    var t = s(this, d)[d];
                    t.x += t.deltaX,
                    t.y += t.deltaY,
                    s(this, c)[c].emit(o, {
                        x: t.x,
                        y: t.y,
                        deltaX: t.deltaX,
                        deltaY: t.deltaY,
                        originalEvent: e
                    })
                }
                ,
                t._bind = function() {
                    n.hasWheelEvent && s(this, l)[l].addEventListener("wheel", this._onWheel, this.listenerOptions),
                    n.hasMouseWheelEvent && s(this, l)[l].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                    n.hasTouch && s(this, a)[a].useTouch && (s(this, l)[l].addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                    s(this, l)[l].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                    n.hasPointer && n.hasTouchWin && (s(this, u)[u] = document.body.style.msTouchAction,
                    document.body.style.msTouchAction = "none",
                    s(this, l)[l].addEventListener("MSPointerDown", this._onTouchStart, !0),
                    s(this, l)[l].addEventListener("MSPointerMove", this._onTouchMove, !0)),
                    n.hasKeyDown && s(this, a)[a].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                }
                ,
                t._unbind = function() {
                    n.hasWheelEvent && s(this, l)[l].removeEventListener("wheel", this._onWheel),
                    n.hasMouseWheelEvent && s(this, l)[l].removeEventListener("mousewheel", this._onMouseWheel),
                    n.hasTouch && (s(this, l)[l].removeEventListener("touchstart", this._onTouchStart),
                    s(this, l)[l].removeEventListener("touchmove", this._onTouchMove)),
                    n.hasPointer && n.hasTouchWin && (document.body.style.msTouchAction = s(this, u)[u],
                    s(this, l)[l].removeEventListener("MSPointerDown", this._onTouchStart, !0),
                    s(this, l)[l].removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                    n.hasKeyDown && s(this, a)[a].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                }
                ,
                t.on = function(e, t) {
                    s(this, c)[c].on(o, e, t);
                    var i = s(this, c)[c].e;
                    i && i[o] && 1 === i[o].length && this._bind()
                }
                ,
                t.off = function(e, t) {
                    s(this, c)[c].off(o, e, t);
                    var i = s(this, c)[c].e;
                    (!i[o] || i[o].length <= 0) && this._unbind()
                }
                ,
                t.destroy = function() {
                    s(this, c)[c].off(),
                    this._unbind()
                }
                ,
                e
            }()
        }()
    }(ho);
    var uo = ho.exports;
    new class extends io {
        constructor() {
            super("smooth"),
            window.hasSmoothScroll = !1,
            window.isSmoothScrolling = !1
        }
        init() {
            if (super.init(),
            this.element = document.documentElement,
            this.hasSmooth = this.element.hasAttribute("data-lg-smooth"),
            this.hasSmooth) {
                var e, t, s;
                window.hasSmoothScroll = !0,
                this.smoothScroll = window.scrollTop,
                this.targetScroll = window.scrollTop,
                this.targetSmoothScroll = window.scrollTop,
                document.documentElement.classList.add("has-smooth-scroll");
                const i = (null === (e = navigator) || void 0 === e || null === (t = e.userAgentData) || void 0 === t ? void 0 : t.platform) || (null === (s = navigator) || void 0 === s ? void 0 : s.platform) || "unknown";
                this.virtualScroll = new uo({
                    el: this.element,
                    firefoxMultiplier: 50,
                    mouseMultiplier: i.indexOf("Win") > -1 ? 1 : .4,
                    useKeyboard: !1,
                    useTouch: !1,
                    passive: !0
                }),
                this.virtualScroll.on(this.onVirtualScroll.bind(this)),
                Nn.add(this.tick, this),
                this.bindEvents()
            }
        }
        bindEvents() {
            vn.on("scroll", this.onScroll, this)
        }
        onScroll() {
            window.isSmoothScrolling || (this.targetScroll = window.scrollTop,
            this.targetSmoothScroll = window.scrollTop,
            this.smoothScroll = window.scrollTop)
        }
        onVirtualScroll(e) {
            let {deltaY: t, originalEvent: s} = e;
            const i = !!s.composedPath().find((e=>{
                var t;
                return null == e || null === (t = e.hasAttribute) || void 0 === t ? void 0 : t.call(e, "data-lg-smooth-prevent")
            }
            ));
            s.ctrlKey || i || (this.targetScroll -= t,
            this.targetScroll = Math.clamp(0, this.targetScroll, window.maxScrollTop),
            window.isSmoothScrolling = !0)
        }
        tick() {
            this.targetSmoothScroll += (this.targetScroll - this.targetSmoothScroll) * Fn.settings.smooth.inertia,
            this.smoothScroll += (this.targetSmoothScroll - this.smoothScroll) * Fn.settings.smooth.inertia;
            const e = Math.abs(this.targetSmoothScroll - this.smoothScroll);
            window.isSmoothScrolling && e > .5 ? window.scrollTo({
                top: this.smoothScroll,
                behavior: "auto"
            }) : window.isSmoothScrolling && (this.smoothScroll = this.targetSmoothScroll,
            window.isSmoothScrolling = !1)
        }
    }
    ;
    var po = new class extends io {
        constructor() {
            super("transition"),
            this.url = window.location.href,
            this.pathname = window.location.pathname,
            this.pageFetched = null,
            this.currentPage = null,
            this.reload = Fn.settings.transition.reload,
            this.prevScrollTop = 0,
            this.newScrollTop = 0,
            this.transitions = {
                in: {},
                out: {}
            },
            this.listeners = {
                linkHandler: this.linkHandler.bind(this)
            }
        }
        init() {
            this.currentPage = document.querySelector("[data-lg-page]"),
            this.currentPage && (this.reload = !!this.currentPage.hasAttribute("data-lg-reload") || Fn.settings.transition.reload),
            this.initLoader(),
            this.reload || window.addEventListener("popstate", this.historyStateChanged.bind(this)),
            yn.add("pageInit", this.pageInit.bind(this)),
            yn.add("pageFetch", this.pageFetch.bind(this)),
            yn.add("pageOut", this.pageOut.bind(this)),
            yn.add("pageIn", this.pageIn.bind(this), 10, "transition"),
            yn.add("pageCreate", this.pageCreate.bind(this)),
            yn.add("pageKill", this.pageKill.bind(this), 999, "transition")
        }
        bindLinksEvent() {
            document.querySelector("[data-lg-page]") && document.querySelectorAll("a").forEach((e=>{
                e.addEventListener("click", this.listeners.linkHandler)
            }
            ))
        }
        unbindLinksEvent() {
            document.querySelectorAll("a").forEach((e=>{
                e.removeEventListener("click", this.listeners.linkHandler)
            }
            ))
        }
        linkHandler(e) {
            const t = e.currentTarget
              , s = t.getAttribute("href");
            if (s && 0 !== s.indexOf("#") && 0 !== s.indexOf("tel") && 0 !== s.indexOf("mailto") && !t.closest("#wpadminbar") && "disabled" !== t.getAttribute("data-lg-transition") && "_blank" !== t.getAttribute("target") && (0 === s.indexOf(window.location.origin) || 0 === s.indexOf("/") || -1 === s.indexOf("/"))) {
                if (e.preventDefault(),
                window.location.href === s)
                    return;
                this.navigateTo(s),
                history.pushState(null, null, this.url)
            }
        }
        navigateTo(e) {
            if (this.url = e,
            this.reload) {
                const t = document.createElement("link");
                t.rel = "prefetch",
                t.href = e,
                document.head.appendChild(t),
                yn.add("siteReload", (t=>{
                    window.location = e
                }
                )),
                yn.cycle("reload")
            } else
                yn.cycle("transition")
        }
        pageInit(e) {
            this.bindLinksEvent(),
            e()
        }
        initLoader() {
            const e = document.querySelector("[data-lg-loader]");
            if (e && (e.style.transition = "none",
            e.classList.add("lg-loader", "lg-loader--" + e.getAttribute("data-lg-loader")),
            Nn.nextTick((()=>{
                e.style.transition = ""
            }
            ))),
            e && "lottie" === e.getAttribute("data-lg-loader") && "object" == typeof lottie) {
                const t = e.getAttribute("data-lg-loader-out");
                let s = !1
                  , i = e.getAttribute("data-lg-loader-in")
                  , r = !1;
                t && (s = lottie.loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: t,
                    rendererSettings: {
                        preserveAspectRatio: "none"
                    }
                })),
                "reverse" === i && (i = t),
                i && (r = lottie.loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: i,
                    rendererSettings: {
                        preserveAspectRatio: "none"
                    }
                }),
                i === t && r.setDirection(-1)),
                e.playerOut = s,
                e.playerIn = r
            }
        }
        pageFetch(e) {
            const t = this;
            this.url && fetch(this.url, {
                credentials: "include"
            }).then((function(e) {
                return e.text()
            }
            )).then((function(s) {
                t.pageFetched = s,
                e()
            }
            ))
        }
        pageCreate(e) {
            const t = (new DOMParser).parseFromString(this.pageFetched, "text/html")
              , s = t.querySelector("[data-lg-page]");
            if (s) {
                {
                    this.currentPage.insertAdjacentElement("beforebegin", s),
                    s.style.opacity = 0,
                    this.currentPage.style.opacity = 0,
                    this.currentPage.style.position = "absolute",
                    this.currentPage.style.top = 0,
                    this.currentPage.style.left = "-999em",
                    this.currentPage.style.width = "100%",
                    document.querySelector("body").className = t.querySelector("body").className,
                    document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e=>{
                        e.parentNode.removeChild(e)
                    }
                    )),
                    t.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach((e=>{
                        document.querySelector("head title").insertAdjacentElement("afterend", e)
                    }
                    ));
                    const e = document.querySelector("head title")
                      , i = t.querySelector("head title");
                    e && i && (e.innerText = i.innerText)
                }
                window.scroll({
                    top: this.newScrollTop,
                    left: 0,
                    behavior: "instant"
                }),
                window.scrollTop = 0,
                window.smoothScrollTop = 0,
                window.unifiedScrollTop = 0,
                this.prevScrollTop = 0,
                this.newScrollTop = 0,
                vn.emit("pageTransition", t),
                e()
            } else
                window.location = this.url
        }
        pageKill(e) {
            const t = this.currentPage;
            t.parentNode.removeChild(t),
            this.currentPage = document.querySelector("[data-lg-page]"),
            this.reload = !!this.currentPage.hasAttribute("data-lg-reload") || Fn.settings.transition.reload,
            e()
        }
        pageOut(e) {
            const t = this
              , s = document.querySelector("[data-lg-page]");
            if (s) {
                const i = bn.toCamelCase(s.getAttribute("data-lg-page"));
                let r = !1;
                if ("function" == typeof this.transitions.out[i] ? r = this.transitions.out[i] : "function" == typeof s.onpageout ? r = s.onpageout : "function" == typeof this.transitions.out.default && (r = this.transitions.out.default),
                r)
                    r(s, e);
                else {
                    const s = document.querySelector("[data-lg-loader]");
                    if (s) {
                        if (s.playerOut)
                            s.playerOut.stop(),
                            s.playerOut.renderer.svgElement.style.opacity = 1,
                            s.playerOut.play(),
                            s.playerOut.addEventListener("complete", (()=>{
                                t.reload || (s.playerOut.renderer.svgElement.style.opacity = ""),
                                e()
                            }
                            ), {
                                once: !0
                            });
                        else {
                            const t = window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");
                            "" !== t && "0s" !== t ? s.addEventListener("transitionend", e, {
                                once: !0
                            }) : e()
                        }
                        s.classList.add("is-visible")
                    } else
                        e()
                }
            } else
                e();
            this.unbindLinksEvent.bind(this)
        }
        pageIn(e) {
            const t = document.querySelector("[data-lg-page]");
            if (t) {
                const s = bn.toCamelCase(t.getAttribute("data-lg-page"));
                let i = !1;
                if (t.style.opacity = "",
                "function" == typeof this.transitions.in[s] ? i = this.transitions.in[s] : "function" == typeof t.onpagein ? i = t.onpagein : "function" == typeof this.transitions.in.default && (i = this.transitions.in.default),
                i)
                    i(t, e);
                else {
                    const t = document.querySelector("[data-lg-loader]");
                    if (t && t.classList.contains("is-visible"))
                        if (t.playerIn)
                            t.playerIn.stop(),
                            t.playerIn.renderer.svgElement.style.opacity = 1,
                            "reverse" === t.getAttribute("data-lg-loader-in") ? t.playerIn.goToAndPlay(t.playerIn.totalFrames, !0) : t.playerIn.play(),
                            t.playerIn.addEventListener("complete", (()=>{
                                t.playerIn.renderer.svgElement.style.opacity = "",
                                t.classList.remove("is-visible"),
                                e()
                            }
                            ), {
                                once: !0
                            });
                        else {
                            const s = window.getComputedStyle(document.querySelector("[data-lg-loader]")).getPropertyValue("transition-duration");
                            "" !== s && "0s" !== s ? t.addEventListener("transitionend", e, {
                                once: !0
                            }) : e(),
                            t.classList.remove("is-visible")
                        }
                    else
                        e()
                }
            } else
                e()
        }
        historyStateChanged() {
            let e = "";
            e = 0 === this.url.indexOf(window.location.origin) ? new URL(this.url) : new URL(window.location.origin + this.url),
            e.pathname !== window.location.pathname && (this.prevScrollTop = window.scrollY,
            Nn.nextTick((()=>{
                this.newScrollTop = window.scrollY,
                window.scroll({
                    top: this.prevScrollTop,
                    left: 0,
                    behavior: "instant"
                })
            }
            )),
            this.navigateTo(window.location.href))
        }
        add(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default"
              , s = arguments.length > 2 ? arguments[2] : void 0;
            this.transitions[e] && (t = bn.toCamelCase(t),
            this.transitions[e][t] ? console.log("Transition animation for " + t + " page already exists.") : this.transitions[e][t] = s)
        }
    }
    ;
    const go = {
        cursor: {},
        emitter: {
            emit: vn.emit.bind(vn),
            off: vn.off.bind(vn),
            on: vn.on.bind(vn),
            once: vn.once.bind(vn)
        },
        viewportobserver: {
            add: Bn.add.bind(Bn),
            remove: Bn.remove.bind(Bn)
        },
        lifecycle: {
            add: yn.add.bind(yn),
            refresh: yn.cycle.bind(yn, "refresh"),
            remove: yn.remove.bind(yn),
            debug: yn.enableDebug.bind(yn)
        },
        mouseobserver: {
            add: Hn.add.bind(Hn),
            remove: Hn.remove.bind(Hn)
        },
        preloader: {
            add: ro.add.bind(ro)
        },
        reveal: {
            add: no.add.bind(no)
        },
        scrollobserver: {
            add: qn.add.bind(qn),
            remove: qn.remove.bind(qn)
        },
        ticker: {
            add: Nn.add.bind(Nn),
            nextTick: Nn.nextTick.bind(Nn),
            remove: Nn.remove.bind(Nn),
            tick: Nn.tick.bind(Nn)
        },
        transition: {
            add: po.add.bind(po)
        },
        settings: Fn.setSettings.bind(Fn)
    };
    return window.luge = go,
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", yn.cycle.bind(yn, "load"), {
        once: !0
    }) : Nn.nextTick((()=>{
        yn.cycle("load")
    }
    ), null),
    go
}
));
