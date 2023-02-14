/*! For license information please see main.bc669894.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          i = n(296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          u = {};
        function s(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            y[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = y.hasOwnProperty(t) ? y[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, g);
            y[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, g);
              y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, g);
            y[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          E = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          O = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          D = Symbol.for("react.suspense_list"),
          I = Symbol.for("react.memo"),
          P = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          L = Object.assign;
        function M(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var z = !1;
        function V(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var i = l.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  u = a.length - 1;
                1 <= o && 0 <= u && i[o] !== a[u];

              )
                u--;
              for (; 1 <= o && 0 <= u; o--, u--)
                if (i[o] !== a[u]) {
                  if (1 !== o || 1 !== u)
                    do {
                      if ((o--, 0 > --u || i[o] !== a[u])) {
                        var s = "\n" + i[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= u);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case E:
              return "Portal";
            case _:
              return "Profiler";
            case x:
              return "StrictMode";
            case T:
              return "Suspense";
            case D:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case I:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function B(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function H(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = B(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Z(e, t);
          var n = B(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, B(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + B(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: B(n) };
        }
        function ae(e, t) {
          var n = B(t.value),
            r = B(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var me = L(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          Se = null,
          xe = null;
        function _e(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof Ee) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ki(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = xe;
            if (((xe = Se = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Te() {}
        var De = !1;
        function Ie(e, t, n) {
          if (De) return e(t, n);
          De = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (De = !1), (null !== Se || null !== xe) && (Te(), Ne());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ki(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            je = !1;
          }
        function Ae(e, t, n, r, i, a, o, u, s) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var Fe = !1,
          Le = null,
          Me = !1,
          ze = null,
          Ve = {
            onError: function (e) {
              (Fe = !0), (Le = e);
            },
          };
        function Qe(e, t, n, r, i, a, o, u, s) {
          (Fe = !1), (Le = null), Ae.apply(Ve, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Be(e) {
          if (qe(e) !== e) throw Error(a(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Be(i), e;
                    if (o === r) return Be(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var u = !1, s = i.child; s; ) {
                    if (s === n) {
                      (u = !0), (n = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (u = !0), (r = i), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (u = !0), (n = o), (r = i);
                        break;
                      }
                      if (s === r) {
                        (u = !0), (r = o), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!u) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? He(e)
            : null;
        }
        function He(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = He(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = i.unstable_scheduleCallback,
          Ke = i.unstable_cancelCallback,
          Ge = i.unstable_shouldYield,
          Je = i.unstable_requestPaint,
          Ze = i.unstable_now,
          Xe = i.unstable_getCurrentPriorityLevel,
          $e = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          at = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ut(e) / st) | 0)) | 0;
              },
          ut = Math.log,
          st = Math.LN2;
        var lt = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            a = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var u = o & ~i;
            0 !== u ? (r = ft(u)) : 0 !== (a &= o) && (r = ft(a));
          } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (a = t & -t) || (16 === i && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = lt;
          return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          Et,
          St,
          xt,
          _t,
          Ot = !1,
          Nt = [],
          Ct = null,
          Tt = null,
          Dt = null,
          It = new Map(),
          Pt = new Map(),
          jt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Dt = null;
              break;
            case "pointerover":
            case "pointerout":
              It.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Pt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && Et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function Lt(e) {
          var t = gi(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && Et(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Vt() {
          (Ot = !1),
            null !== Ct && Mt(Ct) && (Ct = null),
            null !== Tt && Mt(Tt) && (Tt = null),
            null !== Dt && Mt(Dt) && (Dt = null),
            It.forEach(zt),
            Pt.forEach(zt);
        }
        function Qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Vt)));
        }
        function qt(e) {
          function t(t) {
            return Qt(t, e);
          }
          if (0 < Nt.length) {
            Qt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Qt(Ct, e),
              null !== Tt && Qt(Tt, e),
              null !== Dt && Qt(Dt, e),
              It.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            Lt(n), null === n.blockedOn && jt.shift();
        }
        var Ut = w.ReactCurrentBatchConfig,
          Bt = !0;
        function Wt(e, t, n, r) {
          var i = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = a);
          }
        }
        function Ht(e, t, n, r) {
          var i = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = a);
          }
        }
        function Yt(e, t, n, r) {
          if (Bt) {
            var i = Gt(e, t, n, r);
            if (null === i) Br(e, t, r, Kt, n), At(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Ct = Ft(Ct, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Tt = Ft(Tt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Dt = Ft(Dt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return It.set(a, Ft(It.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      Pt.set(a, Ft(Pt.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && kt(a),
                  null === (a = Gt(e, t, n, r)) && Br(e, t, r, Kt, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Br(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Gt(e, t, n, r) {
          if (((Kt = null), null !== (e = gi((e = ke(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Xt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Xt,
            r = n.length,
            i = "value" in Zt ? Zt.value : Zt.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return ($t = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          un,
          sn,
          ln = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(ln),
          fn = L({}, ln, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = L({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (un = e.screenY - sn.screenY))
                      : (un = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          hn = an(pn),
          vn = an(L({}, pn, { dataTransfer: 0 })),
          yn = an(L({}, fn, { relatedTarget: 0 })),
          mn = an(
            L({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = L({}, ln, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(L({}, ln, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          En = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function _n() {
          return xn;
        }
        var On = L({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? En[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(On),
          Cn = an(
            L({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = an(
            L({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          Dn = an(
            L({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          In = L({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = an(In),
          jn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var Fn = c && "TextEvent" in window && !An,
          Ln = c && (!Rn || (An && 8 < An && 11 >= An)),
          Mn = String.fromCharCode(32),
          zn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Bn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Oe(r),
            0 < (t = Hr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Hn = null,
          Yn = null;
        function Kn(e) {
          Mr(e, 0);
        }
        function Gn(e) {
          if (Y(wi(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (c) {
          var Xn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Xn = $n;
          } else Xn = !1;
          Zn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Hn && (Hn.detachEvent("onpropertychange", nr), (Yn = Hn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Yn)) {
            var t = [];
            Wn(t, Yn, e, ke(e)), Ie(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Hn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Yn);
        }
        function ar(e, t) {
          if ("click" === e) return Gn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ur =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !ur(e[i], t[i])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = lr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !e.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          mr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == yr ||
            yr !== K(r) ||
            ("selectionStart" in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && sr(gr, r)) ||
              ((gr = r),
              0 < (r = Hr(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Er = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          xr = {};
        function _r(e) {
          if (Sr[e]) return Sr[e];
          if (!Er[e]) return e;
          var t,
            n = Er[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
          "TransitionEvent" in window || delete Er.transitionend.transition);
        var Or = _r("animationend"),
          Nr = _r("animationiteration"),
          Cr = _r("animationstart"),
          Tr = _r("transitionend"),
          Dr = new Map(),
          Ir =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Pr(e, t) {
          Dr.set(e, t), s(t, [e]);
        }
        for (var jr = 0; jr < Ir.length; jr++) {
          var Rr = Ir[jr];
          Pr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Pr(Or, "onAnimationEnd"),
          Pr(Nr, "onAnimationIteration"),
          Pr(Cr, "onAnimationStart"),
          Pr("dblclick", "onDoubleClick"),
          Pr("focusin", "onFocus"),
          Pr("focusout", "onBlur"),
          Pr(Tr, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, u, s, l) {
              if ((Qe.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(a(198));
                var c = Le;
                (Fe = !1), (Le = null), Me || ((Me = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var u = r[o],
                    s = u.instance,
                    l = u.currentTarget;
                  if (((u = u.listener), s !== a && i.isPropagationStopped()))
                    break e;
                  Lr(i, u, l), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (u = r[o]).instance),
                    (l = u.currentTarget),
                    (u = u.listener),
                    s !== a && i.isPropagationStopped())
                  )
                    break e;
                  Lr(i, u, l), (a = s);
                }
            }
          }
          if (Me) throw ((e = ze), (Me = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Qr = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Qr]) {
            (e[Qr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Qr] || ((t[Qr] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var i = Wt;
              break;
            case 4:
              i = Ht;
              break;
            default:
              i = Yt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Br(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === i || (8 === u.nodeType && u.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== u; ) {
                  if (null === (o = gi(u))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = a = o;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          Ie(function () {
            var r = a,
              i = ke(n),
              o = [];
            e: {
              var u = Dr.get(e);
              if (void 0 !== u) {
                var s = cn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Nn;
                    break;
                  case "focusin":
                    (l = "focus"), (s = yn);
                    break;
                  case "focusout":
                    (l = "blur"), (s = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tn;
                    break;
                  case Or:
                  case Nr:
                  case Cr:
                    s = mn;
                    break;
                  case Tr:
                    s = Dn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Pn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Cn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Pe(h, d)) &&
                        c.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new s(u, l, null, n, i)),
                  o.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!gi(l) && !l[hi])) &&
                  (s || u) &&
                  ((u =
                    i.window === i
                      ? i
                      : (u = i.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? gi(l)
                          : null) &&
                        (l !== (f = qe(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((s = null), (l = r)),
                  s !== l))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? u : wi(s)),
                  (p = null == l ? u : wi(l)),
                  ((u = new c(v, h + "leave", s, n, i)).target = f),
                  (u.relatedTarget = p),
                  (v = null),
                  gi(i) === r &&
                    (((c = new c(d, h + "enter", l, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && l)
                )
                  e: {
                    for (d = l, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, v = d; v; v = Yr(v)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(o, u, s, c, !1),
                  null !== l && null !== f && Kr(o, f, l, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (u = r ? wi(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === s && "file" === u.type)
              )
                var y = Jn;
              else if (Bn(u))
                if (Zn) y = or;
                else {
                  y = ir;
                  var m = rr;
                }
              else
                (s = u.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (y = ar);
              switch (
                (y && (y = y(e, r))
                  ? Wn(o, y, n, i)
                  : (m && m(e, u, r),
                    "focusout" === e &&
                      (m = u._wrapperState) &&
                      m.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (m = r ? wi(r) : window),
                e)
              ) {
                case "focusin":
                  (Bn(m) || "true" === m.contentEditable) &&
                    ((yr = m), (mr = r), (gr = null));
                  break;
                case "focusout":
                  gr = mr = yr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, i);
              }
              var g;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ln &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (g = en())
                    : ((Xt = "value" in (Zt = i) ? Zt.value : Zt.textContent),
                      (qn = !0))),
                0 < (m = Hr(r, b)).length &&
                  ((b = new wn(b, e, null, n, i)),
                  o.push({ event: b, listeners: m }),
                  g ? (b.data = g) : null !== (g = Qn(n)) && (b.data = g))),
                (g = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Rn && Vn(e, t))
                          ? ((e = en()), ($t = Xt = Zt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Hr(r, "onBeforeInput")).length &&
                  ((i = new wn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = g));
            }
            Mr(o, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Hr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Pe(e, n)) && r.unshift(Wr(e, a, i)),
              null != (a = Pe(e, t)) && r.push(Wr(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var u = n,
              s = u.alternate,
              l = u.stateNode;
            if (null !== s && s === r) break;
            5 === u.tag &&
              null !== l &&
              ((u = l),
              i
                ? null != (s = Pe(n, a)) && o.unshift(Wr(n, s, u))
                : i || (null != (s = Pe(n, a)) && o.push(Wr(n, s, u)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Jr, "");
        }
        function Xr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(a(425));
        }
        function $r() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ai = "function" === typeof Promise ? Promise : void 0,
          oi =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ai
              ? function (e) {
                  return ai.resolve(null).then(e).catch(ui);
                }
              : ri;
        function ui(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function si(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          qt(t);
        }
        function li(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          yi = "__reactListeners$" + fi,
          mi = "__reactHandles$" + fi;
        function gi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ki(e) {
          return e[pi] || null;
        }
        var Ei = [],
          Si = -1;
        function xi(e) {
          return { current: e };
        }
        function _i(e) {
          0 > Si || ((e.current = Ei[Si]), (Ei[Si] = null), Si--);
        }
        function Oi(e, t) {
          Si++, (Ei[Si] = e.current), (e.current = t);
        }
        var Ni = {},
          Ci = xi(Ni),
          Ti = xi(!1),
          Di = Ni;
        function Ii(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ni;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Pi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ji() {
          _i(Ti), _i(Ci);
        }
        function Ri(e, t, n) {
          if (Ci.current !== Ni) throw Error(a(168));
          Oi(Ci, t), Oi(Ti, n);
        }
        function Ai(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(a(108, U(e) || "Unknown", i));
          return L({}, n, r);
        }
        function Fi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ni),
            (Di = Ci.current),
            Oi(Ci, e),
            Oi(Ti, Ti.current),
            !0
          );
        }
        function Li(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Ai(e, t, Di)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _i(Ti),
              _i(Ci),
              Oi(Ci, e))
            : _i(Ti),
            Oi(Ti, n);
        }
        var Mi = null,
          zi = !1,
          Vi = !1;
        function Qi(e) {
          null === Mi ? (Mi = [e]) : Mi.push(e);
        }
        function qi() {
          if (!Vi && null !== Mi) {
            Vi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Mi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Mi = null), (zi = !1);
            } catch (i) {
              throw (null !== Mi && (Mi = Mi.slice(e + 1)), Ye($e, qi), i);
            } finally {
              (bt = t), (Vi = !1);
            }
          }
          return null;
        }
        var Ui = [],
          Bi = 0,
          Wi = null,
          Hi = 0,
          Yi = [],
          Ki = 0,
          Gi = null,
          Ji = 1,
          Zi = "";
        function Xi(e, t) {
          (Ui[Bi++] = Hi), (Ui[Bi++] = Wi), (Wi = e), (Hi = t);
        }
        function $i(e, t, n) {
          (Yi[Ki++] = Ji), (Yi[Ki++] = Zi), (Yi[Ki++] = Gi), (Gi = e);
          var r = Ji;
          e = Zi;
          var i = 32 - ot(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - ot(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Ji = (1 << (32 - ot(t) + i)) | (n << i) | r),
              (Zi = a + e);
          } else (Ji = (1 << a) | (n << i) | r), (Zi = e);
        }
        function ea(e) {
          null !== e.return && (Xi(e, 1), $i(e, 1, 0));
        }
        function ta(e) {
          for (; e === Wi; )
            (Wi = Ui[--Bi]), (Ui[Bi] = null), (Hi = Ui[--Bi]), (Ui[Bi] = null);
          for (; e === Gi; )
            (Gi = Yi[--Ki]),
              (Yi[Ki] = null),
              (Zi = Yi[--Ki]),
              (Yi[Ki] = null),
              (Ji = Yi[--Ki]),
              (Yi[Ki] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(e, t) {
          var n = Pl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (na = e), (ra = li(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Gi ? { id: Ji, overflow: Zi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pl(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (na = e),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function la(e) {
          if (ia) {
            var t = ra;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = li(n.nextSibling);
                var r = na;
                t && ua(e, t)
                  ? oa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e);
            }
          }
        }
        function ca(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!ia) return ca(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ra))
          ) {
            if (sa(e)) throw (da(), Error(a(418)));
            for (; t; ) oa(e, t), (t = li(t.nextSibling));
          }
          if ((ca(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ra = li(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? li(e.stateNode.nextSibling) : null;
          return !0;
        }
        function da() {
          for (var e = ra; e; ) e = li(e.nextSibling);
        }
        function pa() {
          (ra = na = null), (ia = !1);
        }
        function ha(e) {
          null === aa ? (aa = [e]) : aa.push(e);
        }
        var va = w.ReactCurrentBatchConfig;
        function ya(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ma = xi(null),
          ga = null,
          ba = null,
          wa = null;
        function ka() {
          wa = ba = ga = null;
        }
        function Ea(e) {
          var t = ma.current;
          _i(ma), (e._currentValue = t);
        }
        function Sa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xa(e, t) {
          (ga = e),
            (wa = ba = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wu = !0), (e.firstContext = null));
        }
        function _a(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ba)
            ) {
              if (null === ga) throw Error(a(308));
              (ba = e), (ga.dependencies = { lanes: 0, firstContext: e });
            } else ba = ba.next = e;
          return t;
        }
        var Oa = null;
        function Na(e) {
          null === Oa ? (Oa = [e]) : Oa.push(e);
        }
        function Ca(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Na(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Ta(e, r)
          );
        }
        function Ta(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Da = !1;
        function Ia(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Pa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ja(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ra(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Ta(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Na(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Ta(e, n)
          );
        }
        function Aa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Fa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function La(e, t, n, r) {
          var i = e.updateQueue;
          Da = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            u = i.shared.pending;
          if (null !== u) {
            i.shared.pending = null;
            var s = u,
              l = s.next;
            (s.next = null), null === o ? (a = l) : (o.next = l), (o = s);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === u ? (c.firstBaseUpdate = l) : (u.next = l),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = l = s = null, u = a; ; ) {
              var d = u.lane,
                p = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = u;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = L({}, f, d);
                      break e;
                    case 2:
                      Da = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [u]) : d.push(u));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((l = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (u = u.next)) {
                if (null === (u = i.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (i.baseState = s),
              (i.firstBaseUpdate = l),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === a && (i.shared.lanes = 0);
            (Ls |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Ma(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var za = new r.Component().refs;
        function Va(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Qa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tl(),
              i = nl(e),
              a = ja(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ra(e, a, i)) && (rl(t, e, i, r), Aa(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tl(),
              i = nl(e),
              a = ja(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ra(e, a, i)) && (rl(t, e, i, r), Aa(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tl(),
              r = nl(e),
              i = ja(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = Ra(e, i, r)) && (rl(t, e, r, n), Aa(t, e, r));
          },
        };
        function qa(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, a);
        }
        function Ua(e, t, n) {
          var r = !1,
            i = Ni,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = _a(a))
              : ((i = Pi(t) ? Di : Ci.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ii(e, i)
                  : Ni)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Qa),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ba(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
        }
        function Wa(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = za), Ia(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = _a(a))
            : ((a = Pi(t) ? Di : Ci.current), (i.context = Ii(e, a))),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Va(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && Qa.enqueueReplaceState(i, i.state, null),
              La(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Ha(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === za && (t = i.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ya(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ka(e) {
          return (0, e._init)(e._payload);
        }
        function Ga(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Rl(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ml(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var a = n.type;
            return a === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === P &&
                    Ka(a) === t.type))
              ? (((r = i(t, n.props)).ref = Ha(e, t, n)), (r.return = e), r)
              : (((r = Al(n.type, n.key, n.props, null, e.mode, r)).ref = Ha(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zl(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Fl(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ml("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Al(t.type, t.key, t.props, null, e.mode, n)).ref = Ha(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = zl(t, e.mode, n)).return = e), t;
                case P:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Fl(t, e.mode, n, null)).return = e), t;
              Ya(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i ? l(e, t, n, r) : null;
                case E:
                  return n.key === i ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== i ? null : f(e, t, n, r, null);
              Ya(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case P:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Ya(t, r);
            }
            return null;
          }
          function v(i, a, u, s) {
            for (
              var l = null, c = null, f = a, v = (a = 0), y = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((y = f), (f = null)) : (y = f.sibling);
              var m = p(i, f, u[v], s);
              if (null === m) {
                null === f && (f = y);
                break;
              }
              e && f && null === m.alternate && t(i, f),
                (a = o(m, a, v)),
                null === c ? (l = m) : (c.sibling = m),
                (c = m),
                (f = y);
            }
            if (v === u.length) return n(i, f), ia && Xi(i, v), l;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(i, u[v], s)) &&
                  ((a = o(f, a, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return ia && Xi(i, v), l;
            }
            for (f = r(i, f); v < u.length; v++)
              null !== (y = h(f, i, v, u[v], s)) &&
                (e &&
                  null !== y.alternate &&
                  f.delete(null === y.key ? v : y.key),
                (a = o(y, a, v)),
                null === c ? (l = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Xi(i, v),
              l
            );
          }
          function y(i, u, s, l) {
            var c = A(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), v = u, y = (u = 0), m = null, g = s.next();
              null !== v && !g.done;
              y++, g = s.next()
            ) {
              v.index > y ? ((m = v), (v = null)) : (m = v.sibling);
              var b = p(i, v, g.value, l);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (u = o(b, u, y)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (g.done) return n(i, v), ia && Xi(i, y), c;
            if (null === v) {
              for (; !g.done; y++, g = s.next())
                null !== (g = d(i, g.value, l)) &&
                  ((u = o(g, u, y)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ia && Xi(i, y), c;
            }
            for (v = r(i, v); !g.done; y++, g = s.next())
              null !== (g = h(v, i, y, g.value, l)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? y : g.key),
                (u = o(g, u, y)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              ia && Xi(i, y),
              c
            );
          }
          return function e(r, a, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var l = o.key, c = a; null !== c; ) {
                      if (c.key === l) {
                        if ((l = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === P &&
                            Ka(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = Ha(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((a = Fl(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = a))
                      : (((s = Al(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ha(r, a, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return u(r);
                case E:
                  e: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = zl(o, r.mode, s)).return = r), (r = a);
                  }
                  return u(r);
                case P:
                  return e(r, a, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, a, o, s);
              if (A(o)) return y(r, a, o, s);
              Ya(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = Ml(o, r.mode, s)).return = r), (r = a)),
                u(r))
              : n(r, a);
          };
        }
        var Ja = Ga(!0),
          Za = Ga(!1),
          Xa = {},
          $a = xi(Xa),
          eo = xi(Xa),
          to = xi(Xa);
        function no(e) {
          if (e === Xa) throw Error(a(174));
          return e;
        }
        function ro(e, t) {
          switch ((Oi(to, t), Oi(eo, e), Oi($a, Xa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          _i($a), Oi($a, t);
        }
        function io() {
          _i($a), _i(eo), _i(to);
        }
        function ao(e) {
          no(to.current);
          var t = no($a.current),
            n = se(t, e.type);
          t !== n && (Oi(eo, e), Oi($a, n));
        }
        function oo(e) {
          eo.current === e && (_i($a), _i(eo));
        }
        var uo = xi(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var lo = [];
        function co() {
          for (var e = 0; e < lo.length; e++)
            lo[e]._workInProgressVersionPrimary = null;
          lo.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          po = w.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          yo = null,
          mo = null,
          go = !1,
          bo = !1,
          wo = 0,
          ko = 0;
        function Eo() {
          throw Error(a(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function xo(e, t, n, r, i, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? uu : su),
            (e = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (mo = yo = null),
                (t.updateQueue = null),
                (fo.current = lu),
                (e = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = ou),
            (t = null !== yo && null !== yo.next),
            (ho = 0),
            (mo = yo = vo = null),
            (go = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function _o() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Oo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e), mo
          );
        }
        function No() {
          if (null === yo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = yo.next;
          var t = null === mo ? vo.memoizedState : mo.next;
          if (null !== t) (mo = t), (yo = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (yo = e).memoizedState,
              baseState: yo.baseState,
              baseQueue: yo.baseQueue,
              queue: yo.queue,
              next: null,
            }),
              null === mo ? (vo.memoizedState = mo = e) : (mo = mo.next = e);
          }
          return mo;
        }
        function Co(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function To(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = yo,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var u = i.next;
              (i.next = o.next), (o.next = u);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var s = (u = null),
              l = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((s = l = d), (u = r)) : (l = l.next = d),
                  (vo.lanes |= f),
                  (Ls |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === l ? (u = r) : (l.next = s),
              ur(r, t.memoizedState) || (wu = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (o = i.lane), (vo.lanes |= o), (Ls |= o), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Do(e) {
          var t = No(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var u = (i = i.next);
            do {
              (o = e(o, u.action)), (u = u.next);
            } while (u !== i);
            ur(o, t.memoizedState) || (wu = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Io() {}
        function Po(e, t) {
          var n = vo,
            r = No(),
            i = t(),
            o = !ur(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (wu = !0)),
            (r = r.queue),
            Bo(Ao.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== mo && 1 & mo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zo(9, Ro.bind(null, n, r, i, t), void 0, null),
              null === Ds)
            )
              throw Error(a(349));
            0 !== (30 & ho) || jo(n, t, i);
          }
          return i;
        }
        function jo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ro(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Fo(t) && Lo(e);
        }
        function Ao(e, t, n) {
          return n(function () {
            Fo(t) && Lo(e);
          });
        }
        function Fo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ur(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Lo(e) {
          var t = Ta(e, 1);
          null !== t && rl(t, e, 1, -1);
        }
        function Mo(e) {
          var t = Oo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Co,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nu.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function zo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Vo() {
          return No().memoizedState;
        }
        function Qo(e, t, n, r) {
          var i = Oo();
          (vo.flags |= e),
            (i.memoizedState = zo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function qo(e, t, n, r) {
          var i = No();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== yo) {
            var o = yo.memoizedState;
            if (((a = o.destroy), null !== r && So(r, o.deps)))
              return void (i.memoizedState = zo(t, n, a, r));
          }
          (vo.flags |= e), (i.memoizedState = zo(1 | t, n, a, r));
        }
        function Uo(e, t) {
          return Qo(8390656, 8, e, t);
        }
        function Bo(e, t) {
          return qo(2048, 8, e, t);
        }
        function Wo(e, t) {
          return qo(4, 2, e, t);
        }
        function Ho(e, t) {
          return qo(4, 4, e, t);
        }
        function Yo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            qo(4, 4, Yo.bind(null, t, e), n)
          );
        }
        function Go() {}
        function Jo(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Zo(e, t) {
          var n = No();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (wu = !0)),
              (e.memoizedState = n))
            : (ur(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Ls |= n), (e.baseState = !0)),
              t);
        }
        function $o(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function eu() {
          return No().memoizedState;
        }
        function tu(e, t, n) {
          var r = nl(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ru(e))
          )
            iu(t, n);
          else if (null !== (n = Ca(e, t, n, r))) {
            rl(n, e, r, tl()), au(n, t, r);
          }
        }
        function nu(e, t, n) {
          var r = nl(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ru(e)) iu(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  u = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = u), ur(u, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), Na(t))
                      : ((i.next = s.next), (s.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (l) {}
            null !== (n = Ca(e, t, i, r)) &&
              (rl(n, e, r, (i = tl())), au(n, t, r));
          }
        }
        function ru(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function iu(e, t) {
          bo = go = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function au(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var ou = {
            readContext: _a,
            useCallback: Eo,
            useContext: Eo,
            useEffect: Eo,
            useImperativeHandle: Eo,
            useInsertionEffect: Eo,
            useLayoutEffect: Eo,
            useMemo: Eo,
            useReducer: Eo,
            useRef: Eo,
            useState: Eo,
            useDebugValue: Eo,
            useDeferredValue: Eo,
            useTransition: Eo,
            useMutableSource: Eo,
            useSyncExternalStore: Eo,
            useId: Eo,
            unstable_isNewReconciler: !1,
          },
          uu = {
            readContext: _a,
            useCallback: function (e, t) {
              return (Oo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _a,
            useEffect: Uo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Qo(4194308, 4, Yo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Qo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Qo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tu.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oo().memoizedState = e);
            },
            useState: Mo,
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return (Oo().memoizedState = e);
            },
            useTransition: function () {
              var e = Mo(!1),
                t = e[0];
              return (
                (e = $o.bind(null, e[1])), (Oo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                i = Oo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ds)) throw Error(a(349));
                0 !== (30 & ho) || jo(r, t, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (i.queue = o),
                Uo(Ao.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                zo(9, Ro.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oo(),
                t = Ds.identifierPrefix;
              if (ia) {
                var n = Zi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ji & ~(1 << (32 - ot(Ji) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          su = {
            readContext: _a,
            useCallback: Jo,
            useContext: _a,
            useEffect: Bo,
            useImperativeHandle: Ko,
            useInsertionEffect: Wo,
            useLayoutEffect: Ho,
            useMemo: Zo,
            useReducer: To,
            useRef: Vo,
            useState: function () {
              return To(Co);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return Xo(No(), yo.memoizedState, e);
            },
            useTransition: function () {
              return [To(Co)[0], No().memoizedState];
            },
            useMutableSource: Io,
            useSyncExternalStore: Po,
            useId: eu,
            unstable_isNewReconciler: !1,
          },
          lu = {
            readContext: _a,
            useCallback: Jo,
            useContext: _a,
            useEffect: Bo,
            useImperativeHandle: Ko,
            useInsertionEffect: Wo,
            useLayoutEffect: Ho,
            useMemo: Zo,
            useReducer: Do,
            useRef: Vo,
            useState: function () {
              return Do(Co);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              var t = No();
              return null === yo
                ? (t.memoizedState = e)
                : Xo(t, yo.memoizedState, e);
            },
            useTransition: function () {
              return [Do(Co)[0], No().memoizedState];
            },
            useMutableSource: Io,
            useSyncExternalStore: Po,
            useId: eu,
            unstable_isNewReconciler: !1,
          };
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fu(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function du(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pu = "function" === typeof WeakMap ? WeakMap : Map;
        function hu(e, t, n) {
          ((n = ja(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ws || ((Ws = !0), (Hs = r)), du(0, t);
            }),
            n
          );
        }
        function vu(e, t, n) {
          (n = ja(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                du(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                du(0, t),
                  "function" !== typeof r &&
                    (null === Ys ? (Ys = new Set([this])) : Ys.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function yu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pu();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Ol.bind(null, e, t, n)), t.then(e, e));
        }
        function mu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gu(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ja(-1, 1)).tag = 2), Ra(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bu = w.ReactCurrentOwner,
          wu = !1;
        function ku(e, t, n, r) {
          t.child = null === e ? Za(t, null, n, r) : Ja(t, e.child, n, r);
        }
        function Eu(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            xa(t, i),
            (r = xo(e, t, n, r, a, i)),
            (n = _o()),
            null === e || wu
              ? (ia && n && ea(t), (t.flags |= 1), ku(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wu(e, t, i))
          );
        }
        function Su(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              jl(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Al(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), xu(e, t, a, r, i));
          }
          if (((a = e.child), 0 === (e.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Wu(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Rl(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xu(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((wu = !1), (t.pendingProps = r = a), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Wu(e, t, i);
              0 !== (131072 & e.flags) && (wu = !0);
            }
          }
          return Nu(e, t, n, r, i);
        }
        function _u(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Oi(Rs, js),
                (js |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Oi(Rs, js),
                  (js |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Oi(Rs, js),
                (js |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Oi(Rs, js),
              (js |= r);
          return ku(e, t, i, n), t.child;
        }
        function Ou(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Nu(e, t, n, r, i) {
          var a = Pi(n) ? Di : Ci.current;
          return (
            (a = Ii(t, a)),
            xa(t, i),
            (n = xo(e, t, n, r, a, i)),
            (r = _o()),
            null === e || wu
              ? (ia && r && ea(t), (t.flags |= 1), ku(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Wu(e, t, i))
          );
        }
        function Cu(e, t, n, r, i) {
          if (Pi(n)) {
            var a = !0;
            Fi(t);
          } else a = !1;
          if ((xa(t, i), null === t.stateNode))
            Bu(e, t), Ua(t, n, r), Wa(t, n, r, i), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              u = t.memoizedProps;
            o.props = u;
            var s = o.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = _a(l))
              : (l = Ii(t, (l = Pi(n) ? Di : Ci.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== r || s !== l) && Ba(t, o, r, l)),
              (Da = !1);
            var d = t.memoizedState;
            (o.state = d),
              La(t, r, o, i),
              (s = t.memoizedState),
              u !== r || d !== s || Ti.current || Da
                ? ("function" === typeof c &&
                    (Va(t, n, c, r), (s = t.memoizedState)),
                  (u = Da || qa(t, n, u, r, d, s, l))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = l),
                  (r = u))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Pa(e, t),
              (u = t.memoizedProps),
              (l = t.type === t.elementType ? u : ya(t.type, u)),
              (o.props = l),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = _a(s))
                : (s = Ii(t, (s = Pi(n) ? Di : Ci.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== f || d !== s) && Ba(t, o, r, s)),
              (Da = !1),
              (d = t.memoizedState),
              (o.state = d),
              La(t, r, o, i);
            var h = t.memoizedState;
            u !== f || d !== h || Ti.current || Da
              ? ("function" === typeof p &&
                  (Va(t, n, p, r), (h = t.memoizedState)),
                (l = Da || qa(t, n, l, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = l))
              : ("function" !== typeof o.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Tu(e, t, n, r, a, i);
        }
        function Tu(e, t, n, r, i, a) {
          Ou(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return i && Li(t, n, !1), Wu(e, t, a);
          (r = t.stateNode), (bu.current = t);
          var u =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ja(t, e.child, null, a)),
                (t.child = Ja(t, null, u, a)))
              : ku(e, t, u, a),
            (t.memoizedState = r.state),
            i && Li(t, n, !0),
            t.child
          );
        }
        function Du(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ri(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Iu(e, t, n, r, i) {
          return pa(), ha(i), (t.flags |= 256), ku(e, t, n, r), t.child;
        }
        var Pu,
          ju,
          Ru,
          Au,
          Fu = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Lu(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Mu(e, t, n) {
          var r,
            i = t.pendingProps,
            o = uo.current,
            u = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Oi(uo, 1 & o),
            null === e)
          )
            return (
              la(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  u
                    ? ((i = t.mode),
                      (u = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & i) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = s))
                        : (u = Ll(s, i, 0, null)),
                      (e = Fl(e, i, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Lu(n)),
                      (t.memoizedState = Fu),
                      e)
                    : zu(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, i, o, u) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vu(e, t, u, (r = fu(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = t.mode),
                    (r = Ll(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Fl(o, i, u, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ja(t, e.child, null, u),
                    (t.child.memoizedState = Lu(u)),
                    (t.memoizedState = Fu),
                    o);
              if (0 === (1 & t.mode)) return Vu(e, t, u, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Vu(e, t, u, (r = fu((o = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (u & e.childLanes)), wu || s)) {
                if (null !== (r = Ds)) {
                  switch (u & -u) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | u)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Ta(e, i), rl(r, e, i, -1));
                }
                return yl(), Vu(e, t, u, (r = fu(Error(a(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cl.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ra = li(i.nextSibling)),
                  (na = t),
                  (ia = !0),
                  (aa = null),
                  null !== e &&
                    ((Yi[Ki++] = Ji),
                    (Yi[Ki++] = Zi),
                    (Yi[Ki++] = Gi),
                    (Ji = e.id),
                    (Zi = e.overflow),
                    (Gi = t)),
                  (t = zu(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, i, r, o, n);
          if (u) {
            (u = i.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var l = { mode: "hidden", children: i.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = l),
                  (t.deletions = null))
                : ((i = Rl(o, l)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (u = Rl(r, u))
                : ((u = Fl(u, s, n, null)).flags |= 2),
              (u.return = t),
              (i.return = t),
              (i.sibling = u),
              (t.child = i),
              (i = u),
              (u = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Lu(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (u.memoizedState = s),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = Fu),
              i
            );
          }
          return (
            (e = (u = e.child).sibling),
            (i = Rl(u, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function zu(e, t) {
          return (
            ((t = Ll(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Vu(e, t, n, r) {
          return (
            null !== r && ha(r),
            Ja(t, e.child, null, n),
            ((e = zu(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Qu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sa(e.return, t, n);
        }
        function qu(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Uu(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((ku(e, t, r.children, n), 0 !== (2 & (r = uo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Qu(e, n, t);
                else if (19 === e.tag) Qu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Oi(uo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  qu(t, !1, i, n, a);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === so(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                qu(t, !0, n, null, a);
                break;
              case "together":
                qu(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Bu(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wu(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ls |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Rl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hu(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ku(e, t, n) {
          var r = t.pendingProps;
          switch ((ta(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yu(t), null;
            case 1:
            case 17:
              return Pi(t.type) && ji(), Yu(t), null;
            case 3:
              return (
                (r = t.stateNode),
                io(),
                _i(Ti),
                _i(Ci),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== aa && (ul(aa), (aa = null)))),
                ju(e, t),
                Yu(t),
                null
              );
            case 5:
              oo(t);
              var i = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ru(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Yu(t), null;
                }
                if (((e = no($a.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Ar.length; i++) zr(Ar[i], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      J(r, o), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, o), zr("invalid", r);
                  }
                  for (var s in (ge(n, o), (i = null), o))
                    if (o.hasOwnProperty(s)) {
                      var l = o[s];
                      "children" === s
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (i = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (i = ["children", "" + l]))
                        : u.hasOwnProperty(s) &&
                          null != l &&
                          "onScroll" === s &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      H(r), $(r, o, !0);
                      break;
                    case "textarea":
                      H(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = $r);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    Pu(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < Ar.length; i++) zr(Ar[i], e);
                        i = r;
                        break;
                      case "source":
                        zr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (i = r);
                        break;
                      case "details":
                        zr("toggle", e), (i = r);
                        break;
                      case "input":
                        J(e, r), (i = G(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = L({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), zr("invalid", e);
                    }
                    for (o in (ge(n, i), (l = i)))
                      if (l.hasOwnProperty(o)) {
                        var c = l[o];
                        "style" === o
                          ? ye(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (u.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && zr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        H(e), $(e, r, !1);
                        break;
                      case "textarea":
                        H(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + B(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Yu(t), null;
            case 6:
              if (e && null != t.stateNode) Au(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = no(to.current)), no($a.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (o = r.nodeValue !== n) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return Yu(t), null;
            case 13:
              if (
                (_i(uo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  da(), pa(), (t.flags |= 98560), (o = !1);
                else if (((o = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[di] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yu(t), (o = !1);
                } else null !== aa && (ul(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & uo.current)
                        ? 0 === As && (As = 3)
                        : yl())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Yu(t),
                  null);
            case 4:
              return (
                io(),
                ju(e, t),
                null === e && qr(t.stateNode.containerInfo),
                Yu(t),
                null
              );
            case 10:
              return Ea(t.type._context), Yu(t), null;
            case 19:
              if ((_i(uo), null === (o = t.memoizedState))) return Yu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) Hu(o, !1);
                else {
                  if (0 !== As || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Hu(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Oi(uo, (1 & uo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ze() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hu(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hu(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ia)
                    )
                      return Yu(t), null;
                  } else
                    2 * Ze() - o.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hu(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = uo.current),
                  Oi(uo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Yu(t), null);
            case 22:
            case 23:
              return (
                dl(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & js) &&
                    (Yu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yu(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Gu(e, t) {
          switch ((ta(t), t.tag)) {
            case 1:
              return (
                Pi(t.type) && ji(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                io(),
                _i(Ti),
                _i(Ci),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (_i(uo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _i(uo), null;
            case 4:
              return io(), null;
            case 10:
              return Ea(t.type._context), null;
            case 22:
            case 23:
              return dl(), null;
            default:
              return null;
          }
        }
        (Pu = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (ju = function () {}),
          (Ru = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), no($a.current);
              var a,
                o = null;
              switch (n) {
                case "input":
                  (i = G(e, i)), (r = G(e, r)), (o = []);
                  break;
                case "select":
                  (i = L({}, i, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ge(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var s = i[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && l !== s && (null != l || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (l && l.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in l)
                        l.hasOwnProperty(a) &&
                          s[a] !== l[a] &&
                          (n || (n = {}), (n[a] = l[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != l && s !== l && (o = o || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (o = o || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && zr("scroll", e),
                            o || s === l || (o = []))
                          : (o = o || []).push(c, l));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Au = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ju = !1,
          Zu = !1,
          Xu = "function" === typeof WeakSet ? WeakSet : Set,
          $u = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                _l(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            _l(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function is(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[vi],
              delete t[yi],
              delete t[mi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function us(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || us(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ls(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ls(e, t, n), e = e.sibling; null !== e; )
              ls(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var fs = null,
          ds = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(it, n);
            } catch (u) {}
          switch (n.tag) {
            case 5:
              Zu || es(n, t);
            case 6:
              var r = fs,
                i = ds;
              (fs = null),
                ps(e, t, n),
                (ds = i),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fs.removeChild(n.stateNode));
              break;
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? si(e.parentNode, n)
                      : 1 === e.nodeType && si(e, n),
                    qt(e))
                  : si(fs, n.stateNode));
              break;
            case 4:
              (r = fs),
                (i = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                ps(e, t, n),
                (fs = r),
                (ds = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zu &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, o),
                    (i = i.next);
                } while (i !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Zu &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                  _l(n, t, u);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zu = (r = Zu) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Zu = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xu()),
              t.forEach(function (t) {
                var r = Tl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ys(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = e,
                  u = t,
                  s = u;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (fs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (fs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === fs) throw Error(a(160));
                hs(o, u, i), (fs = null), (ds = !1);
                var l = i.alternate;
                null !== l && (l.return = null), (i.return = null);
              } catch (c) {
                _l(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
        }
        function ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ys(t, e), gs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), is(3, e);
                } catch (y) {
                  _l(e, e.return, y);
                }
                try {
                  rs(5, e, e.return);
                } catch (y) {
                  _l(e, e.return, y);
                }
              }
              break;
            case 1:
              ys(t, e), gs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (ys(t, e),
                gs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (y) {
                  _l(e, e.return, y);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var o = e.memoizedProps,
                  u = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      Z(i, o),
                      be(s, u);
                    var c = be(s, o);
                    for (u = 0; u < l.length; u += 2) {
                      var f = l[u],
                        d = l[u + 1];
                      "style" === f
                        ? ye(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        X(i, o);
                        break;
                      case "textarea":
                        ae(i, o);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(i, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(i, !!o.multiple, o.defaultValue, !0)
                              : ne(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[pi] = o;
                  } catch (y) {
                    _l(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((ys(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (y) {
                  _l(e, e.return, y);
                }
              }
              break;
            case 3:
              if (
                (ys(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (y) {
                  _l(e, e.return, y);
                }
              break;
            case 4:
            default:
              ys(t, e), gs(e);
              break;
            case 13:
              ys(t, e),
                gs(e),
                8192 & (i = e.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (qs = Ze())),
                4 & r && vs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zu = (c = Zu) || f), ys(t, e), (Zu = c))
                  : ys(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for ($u = e, f = e.child; null !== f; ) {
                    for (d = $u = f; null !== $u; ) {
                      switch (((h = (p = $u).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (y) {
                              _l(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Es(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($u = h)) : Es(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (i = d.stateNode),
                          c
                            ? "function" === typeof (o = i.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = d.stateNode),
                              (u =
                                void 0 !== (l = d.memoizedProps.style) &&
                                null !== l &&
                                l.hasOwnProperty("display")
                                  ? l.display
                                  : null),
                              (s.style.display = ve("display", u)));
                      } catch (y) {
                        _l(e, e.return, y);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (y) {
                        _l(e, e.return, y);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ys(t, e), gs(e), 4 & r && vs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (us(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    cs(e, ss(e), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ls(e, ss(e), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (u) {
              _l(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          ($u = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $u; ) {
            var i = $u,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Ju;
              if (!o) {
                var u = i.alternate,
                  s = (null !== u && null !== u.memoizedState) || Zu;
                u = Ju;
                var l = Zu;
                if (((Ju = o), (Zu = s) && !l))
                  for ($u = i; null !== $u; )
                    (s = (o = $u).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Ss(i)
                        : null !== s
                        ? ((s.return = o), ($u = s))
                        : Ss(i);
                for (; null !== a; ) ($u = a), ws(a, t, n), (a = a.sibling);
                ($u = i), (Ju = u), (Zu = l);
              }
              ks(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), ($u = a))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== $u; ) {
            var t = $u;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zu || is(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zu)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ya(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ma(t, o, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ma(t, u, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && n.focus();
                            break;
                          case "img":
                            l.src && (n.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && qt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Zu || (512 & t.flags && as(t));
              } catch (p) {
                _l(t, t.return, p);
              }
            }
            if (t === e) {
              $u = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($u = n);
              break;
            }
            $u = t.return;
          }
        }
        function Es(e) {
          for (; null !== $u; ) {
            var t = $u;
            if (t === e) {
              $u = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($u = n);
              break;
            }
            $u = t.return;
          }
        }
        function Ss(e) {
          for (; null !== $u; ) {
            var t = $u;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    is(4, t);
                  } catch (s) {
                    _l(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      _l(t, i, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    _l(t, a, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    _l(t, o, s);
                  }
              }
            } catch (s) {
              _l(t, t.return, s);
            }
            if (t === e) {
              $u = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), ($u = u);
              break;
            }
            $u = t.return;
          }
        }
        var xs,
          _s = Math.ceil,
          Os = w.ReactCurrentDispatcher,
          Ns = w.ReactCurrentOwner,
          Cs = w.ReactCurrentBatchConfig,
          Ts = 0,
          Ds = null,
          Is = null,
          Ps = 0,
          js = 0,
          Rs = xi(0),
          As = 0,
          Fs = null,
          Ls = 0,
          Ms = 0,
          zs = 0,
          Vs = null,
          Qs = null,
          qs = 0,
          Us = 1 / 0,
          Bs = null,
          Ws = !1,
          Hs = null,
          Ys = null,
          Ks = !1,
          Gs = null,
          Js = 0,
          Zs = 0,
          Xs = null,
          $s = -1,
          el = 0;
        function tl() {
          return 0 !== (6 & Ts) ? Ze() : -1 !== $s ? $s : ($s = Ze());
        }
        function nl(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ps
            ? Ps & -Ps
            : null !== va.transition
            ? (0 === el && (el = vt()), el)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function rl(e, t, n, r) {
          if (50 < Zs) throw ((Zs = 0), (Xs = null), Error(a(185)));
          mt(e, n, r),
            (0 !== (2 & Ts) && e === Ds) ||
              (e === Ds && (0 === (2 & Ts) && (Ms |= n), 4 === As && sl(e, Ps)),
              il(e, r),
              1 === n &&
                0 === Ts &&
                0 === (1 & t.mode) &&
                ((Us = Ze() + 500), zi && qi()));
        }
        function il(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var o = 31 - ot(a),
                u = 1 << o,
                s = i[o];
              -1 === s
                ? (0 !== (u & n) && 0 === (u & r)) || (i[o] = pt(u, t))
                : s <= t && (e.expiredLanes |= u),
                (a &= ~u);
            }
          })(e, t);
          var r = dt(e, e === Ds ? Ps : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (zi = !0), Qi(e);
                  })(ll.bind(null, e))
                : Qi(ll.bind(null, e)),
                oi(function () {
                  0 === (6 & Ts) && qi();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Dl(n, al.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function al(e, t) {
          if ((($s = -1), (el = 0), 0 !== (6 & Ts))) throw Error(a(327));
          var n = e.callbackNode;
          if (Sl() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ds ? Ps : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ml(e, r);
          else {
            t = r;
            var i = Ts;
            Ts |= 2;
            var o = vl();
            for (
              (Ds === e && Ps === t) ||
              ((Bs = null), (Us = Ze() + 500), pl(e, t));
              ;

            )
              try {
                bl();
                break;
              } catch (s) {
                hl(e, s);
              }
            ka(),
              (Os.current = o),
              (Ts = i),
              null !== Is ? (t = 0) : ((Ds = null), (Ps = 0), (t = As));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = ol(e, i))),
              1 === t)
            )
              throw ((n = Fs), pl(e, 0), sl(e, r), il(e, Ze()), n);
            if (6 === t) sl(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!ur(a(), i)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = ml(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ol(e, o))),
                  1 === t))
              )
                throw ((n = Fs), pl(e, 0), sl(e, r), il(e, Ze()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  El(e, Qs, Bs);
                  break;
                case 3:
                  if (
                    (sl(e, r),
                    (130023424 & r) === r && 10 < (t = qs + 500 - Ze()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      tl(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(El.bind(null, e, Qs, Bs), t);
                    break;
                  }
                  El(e, Qs, Bs);
                  break;
                case 4:
                  if ((sl(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var u = 31 - ot(r);
                    (o = 1 << u), (u = t[u]) > i && (i = u), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _s(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(El.bind(null, e, Qs, Bs), r);
                    break;
                  }
                  El(e, Qs, Bs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return il(e, Ze()), e.callbackNode === n ? al.bind(null, e) : null;
        }
        function ol(e, t) {
          var n = Vs;
          return (
            e.current.memoizedState.isDehydrated && (pl(e, t).flags |= 256),
            2 !== (e = ml(e, t)) && ((t = Qs), (Qs = n), null !== t && ul(t)),
            e
          );
        }
        function ul(e) {
          null === Qs ? (Qs = e) : Qs.push.apply(Qs, e);
        }
        function sl(e, t) {
          for (
            t &= ~zs,
              t &= ~Ms,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ll(e) {
          if (0 !== (6 & Ts)) throw Error(a(327));
          Sl();
          var t = dt(e, 0);
          if (0 === (1 & t)) return il(e, Ze()), null;
          var n = ml(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ol(e, r)));
          }
          if (1 === n) throw ((n = Fs), pl(e, 0), sl(e, t), il(e, Ze()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            El(e, Qs, Bs),
            il(e, Ze()),
            null
          );
        }
        function cl(e, t) {
          var n = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && ((Us = Ze() + 500), zi && qi());
          }
        }
        function fl(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ts) && Sl();
          var t = Ts;
          Ts |= 1;
          var n = Cs.transition,
            r = bt;
          try {
            if (((Cs.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cs.transition = n), 0 === (6 & (Ts = t)) && qi();
          }
        }
        function dl() {
          (js = Rs.current), _i(Rs);
        }
        function pl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Is))
            for (n = Is.return; null !== n; ) {
              var r = n;
              switch ((ta(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    ji();
                  break;
                case 3:
                  io(), _i(Ti), _i(Ci), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  _i(uo);
                  break;
                case 10:
                  Ea(r.type._context);
                  break;
                case 22:
                case 23:
                  dl();
              }
              n = n.return;
            }
          if (
            ((Ds = e),
            (Is = e = Rl(e.current, null)),
            (Ps = js = t),
            (As = 0),
            (Fs = null),
            (zs = Ms = Ls = 0),
            (Qs = Vs = null),
            null !== Oa)
          ) {
            for (t = 0; t < Oa.length; t++)
              if (null !== (r = (n = Oa[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Oa = null;
          }
          return e;
        }
        function hl(e, t) {
          for (;;) {
            var n = Is;
            try {
              if ((ka(), (fo.current = ou), go)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                go = !1;
              }
              if (
                ((ho = 0),
                (mo = yo = vo = null),
                (bo = !1),
                (wo = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (As = 1), (Fs = t), (Is = null);
                break;
              }
              e: {
                var o = e,
                  u = n.return,
                  s = n,
                  l = t;
                if (
                  ((t = Ps),
                  (s.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = mu(u);
                  if (null !== h) {
                    (h.flags &= -257),
                      gu(h, u, s, 0, t),
                      1 & h.mode && yu(o, c, t),
                      (l = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var y = new Set();
                      y.add(l), (t.updateQueue = y);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    yu(o, c, t), yl();
                    break e;
                  }
                  l = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var m = mu(u);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      gu(m, u, s, 0, t),
                      ha(cu(l, s));
                    break e;
                  }
                }
                (o = l = cu(l, s)),
                  4 !== As && (As = 2),
                  null === Vs ? (Vs = [o]) : Vs.push(o),
                  (o = u);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Fa(o, hu(0, l, t));
                      break e;
                    case 1:
                      s = l;
                      var g = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ys || !Ys.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Fa(o, vu(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              kl(n);
            } catch (w) {
              (t = w), Is === n && null !== n && (Is = n = n.return);
              continue;
            }
            break;
          }
        }
        function vl() {
          var e = Os.current;
          return (Os.current = ou), null === e ? ou : e;
        }
        function yl() {
          (0 !== As && 3 !== As && 2 !== As) || (As = 4),
            null === Ds ||
              (0 === (268435455 & Ls) && 0 === (268435455 & Ms)) ||
              sl(Ds, Ps);
        }
        function ml(e, t) {
          var n = Ts;
          Ts |= 2;
          var r = vl();
          for ((Ds === e && Ps === t) || ((Bs = null), pl(e, t)); ; )
            try {
              gl();
              break;
            } catch (i) {
              hl(e, i);
            }
          if ((ka(), (Ts = n), (Os.current = r), null !== Is))
            throw Error(a(261));
          return (Ds = null), (Ps = 0), As;
        }
        function gl() {
          for (; null !== Is; ) wl(Is);
        }
        function bl() {
          for (; null !== Is && !Ge(); ) wl(Is);
        }
        function wl(e) {
          var t = xs(e.alternate, e, js);
          (e.memoizedProps = e.pendingProps),
            null === t ? kl(e) : (Is = t),
            (Ns.current = null);
        }
        function kl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ku(n, t, js))) return void (Is = n);
            } else {
              if (null !== (n = Gu(n, t)))
                return (n.flags &= 32767), void (Is = n);
              if (null === e) return (As = 6), void (Is = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Is = t);
            Is = t = e;
          } while (null !== t);
          0 === As && (As = 5);
        }
        function El(e, t, n) {
          var r = bt,
            i = Cs.transition;
          try {
            (Cs.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Sl();
                } while (null !== Gs);
                if (0 !== (6 & Ts)) throw Error(a(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - ot(n),
                        a = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
                    }
                  })(e, o),
                  e === Ds && ((Is = Ds = null), (Ps = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Dl(tt, function () {
                      return Sl(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Cs.transition), (Cs.transition = null);
                  var u = bt;
                  bt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ei = Bt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                s = -1,
                                l = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (s = u + i),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (s = u),
                                    p === o && ++f === r && (l = u),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === l
                                  ? null
                                  : { start: s, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Bt = !1,
                          $u = t;
                        null !== $u;

                      )
                        if (
                          ((e = (t = $u).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($u = e);
                        else
                          for (; null !== $u; ) {
                            t = $u;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var y = v.memoizedProps,
                                        m = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? y
                                            : ya(t.type, y),
                                          m
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              _l(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($u = e);
                              break;
                            }
                            $u = t.return;
                          }
                      (v = ns), (ns = !1);
                    })(e, n),
                    ms(n, e),
                    hr(ti),
                    (Bt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    bs(n, e, i),
                    Je(),
                    (Ts = s),
                    (bt = u),
                    (Cs.transition = o);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Gs = e), (Js = i)),
                  (o = e.pendingLanes),
                  0 === o && (Ys = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  il(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Ws) throw ((Ws = !1), (e = Hs), (Hs = null), e);
                0 !== (1 & Js) && 0 !== e.tag && Sl(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Xs
                      ? Zs++
                      : ((Zs = 0), (Xs = e))
                    : (Zs = 0),
                  qi();
              })(e, t, n, r);
          } finally {
            (Cs.transition = i), (bt = r);
          }
          return null;
        }
        function Sl() {
          if (null !== Gs) {
            var e = wt(Js),
              t = Cs.transition,
              n = bt;
            try {
              if (((Cs.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Js = 0), 0 !== (6 & Ts)))
                  throw Error(a(331));
                var i = Ts;
                for (Ts |= 4, $u = e.current; null !== $u; ) {
                  var o = $u,
                    u = o.child;
                  if (0 !== (16 & $u.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var l = 0; l < s.length; l++) {
                        var c = s[l];
                        for ($u = c; null !== $u; ) {
                          var f = $u;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), ($u = d);
                          else
                            for (; null !== $u; ) {
                              var p = (f = $u).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                $u = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($u = p);
                                break;
                              }
                              $u = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var y = v.child;
                        if (null !== y) {
                          v.child = null;
                          do {
                            var m = y.sibling;
                            (y.sibling = null), (y = m);
                          } while (null !== y);
                        }
                      }
                      $u = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== u)
                    (u.return = o), ($u = u);
                  else
                    e: for (; null !== $u; ) {
                      if (0 !== (2048 & (o = $u).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), ($u = g);
                        break e;
                      }
                      $u = o.return;
                    }
                }
                var b = e.current;
                for ($u = b; null !== $u; ) {
                  var w = (u = $u).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== w)
                    (w.return = u), ($u = w);
                  else
                    e: for (u = b; null !== $u; ) {
                      if (0 !== (2048 & (s = $u).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              is(9, s);
                          }
                        } catch (E) {
                          _l(s, s.return, E);
                        }
                      if (s === u) {
                        $u = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), ($u = k);
                        break e;
                      }
                      $u = s.return;
                    }
                }
                if (
                  ((Ts = i),
                  qi(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(it, e);
                  } catch (E) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cs.transition = t);
            }
          }
          return !1;
        }
        function xl(e, t, n) {
          (e = Ra(e, (t = hu(0, (t = cu(n, t)), 1)), 1)),
            (t = tl()),
            null !== e && (mt(e, 1, t), il(e, t));
        }
        function _l(e, t, n) {
          if (3 === e.tag) xl(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xl(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ys || !Ys.has(r)))
                ) {
                  (t = Ra(t, (e = vu(t, (e = cu(n, e)), 1)), 1)),
                    (e = tl()),
                    null !== t && (mt(t, 1, e), il(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ol(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ds === e &&
              (Ps & n) === n &&
              (4 === As ||
              (3 === As && (130023424 & Ps) === Ps && 500 > Ze() - qs)
                ? pl(e, 0)
                : (zs |= n)),
            il(e, t);
        }
        function Nl(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tl();
          null !== (e = Ta(e, t)) && (mt(e, t, n), il(e, n));
        }
        function Cl(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nl(e, n);
        }
        function Tl(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Nl(e, n);
        }
        function Dl(e, t) {
          return Ye(e, t);
        }
        function Il(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pl(e, t, n, r) {
          return new Il(e, t, n, r);
        }
        function jl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Al(e, t, n, r, i, o) {
          var u = 2;
          if (((r = e), "function" === typeof e)) jl(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case S:
                return Fl(n.children, i, o, t);
              case x:
                (u = 8), (i |= 8);
                break;
              case _:
                return (
                  ((e = Pl(12, n, t, 2 | i)).elementType = _), (e.lanes = o), e
                );
              case T:
                return (
                  ((e = Pl(13, n, t, i)).elementType = T), (e.lanes = o), e
                );
              case D:
                return (
                  ((e = Pl(19, n, t, i)).elementType = D), (e.lanes = o), e
                );
              case j:
                return Ll(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      u = 10;
                      break e;
                    case N:
                      u = 9;
                      break e;
                    case C:
                      u = 11;
                      break e;
                    case I:
                      u = 14;
                      break e;
                    case P:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pl(u, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Fl(e, t, n, r) {
          return ((e = Pl(7, e, r, t)).lanes = n), e;
        }
        function Ll(e, t, n, r) {
          return (
            ((e = Pl(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ml(e, t, n) {
          return ((e = Pl(6, e, null, t)).lanes = n), e;
        }
        function zl(e, t, n) {
          return (
            ((t = Pl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vl(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ql(e, t, n, r, i, a, o, u, s) {
          return (
            (e = new Vl(e, t, n, u, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Pl(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ia(a),
            e
          );
        }
        function ql(e) {
          if (!e) return Ni;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pi(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pi(n)) return Ai(e, n, t);
          }
          return t;
        }
        function Ul(e, t, n, r, i, a, o, u, s) {
          return (
            ((e = Ql(n, r, !0, e, 0, a, 0, u, s)).context = ql(null)),
            (n = e.current),
            ((a = ja((r = tl()), (i = nl(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ra(n, a, i),
            (e.current.lanes = i),
            mt(e, i, r),
            il(e, r),
            e
          );
        }
        function Bl(e, t, n, r) {
          var i = t.current,
            a = tl(),
            o = nl(i);
          return (
            (n = ql(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ja(a, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ra(i, t, o)) && (rl(e, i, o, a), Aa(e, i, o)),
            o
          );
        }
        function Wl(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hl(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yl(e, t) {
          Hl(e, t), (e = e.alternate) && Hl(e, t);
        }
        xs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ti.current) wu = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wu = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Du(t), pa();
                        break;
                      case 5:
                        ao(t);
                        break;
                      case 1:
                        Pi(t.type) && Fi(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Oi(ma, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Oi(uo, 1 & uo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Mu(e, t, n)
                            : (Oi(uo, 1 & uo.current),
                              null !== (e = Wu(e, t, n)) ? e.sibling : null);
                        Oi(uo, 1 & uo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Uu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Oi(uo, uo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), _u(e, t, n);
                    }
                    return Wu(e, t, n);
                  })(e, t, n)
                );
              wu = 0 !== (131072 & e.flags);
            }
          else (wu = !1), ia && 0 !== (1048576 & t.flags) && $i(t, Hi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Bu(e, t), (e = t.pendingProps);
              var i = Ii(t, Ci.current);
              xa(t, n), (i = xo(null, t, r, e, i, n));
              var o = _o();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pi(r) ? ((o = !0), Fi(t)) : (o = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Ia(t),
                    (i.updater = Qa),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    Wa(t, r, e, n),
                    (t = Tu(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ia && o && ea(t),
                    ku(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Bu(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return jl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === I) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ya(r, e)),
                  i)
                ) {
                  case 0:
                    t = Nu(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Eu(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Su(null, t, r, ya(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Nu(e, t, r, (i = t.elementType === r ? i : ya(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cu(e, t, r, (i = t.elementType === r ? i : ya(r, i)), n)
              );
            case 3:
              e: {
                if ((Du(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (i = (o = t.memoizedState).element),
                  Pa(e, t),
                  La(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Iu(e, t, r, n, (i = cu(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Iu(e, t, r, n, (i = cu(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    ra = li(t.stateNode.containerInfo.firstChild),
                      na = t,
                      ia = !0,
                      aa = null,
                      n = Za(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === i)) {
                    t = Wu(e, t, n);
                    break e;
                  }
                  ku(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ao(t),
                null === e && la(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (u = i.children),
                ni(r, i)
                  ? (u = null)
                  : null !== o && ni(r, o) && (t.flags |= 32),
                Ou(e, t),
                ku(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && la(t), null;
            case 13:
              return Mu(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ja(t, null, r, n)) : ku(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Eu(e, t, r, (i = t.elementType === r ? i : ya(r, i)), n)
              );
            case 7:
              return ku(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ku(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (o = t.memoizedProps),
                  (u = i.value),
                  Oi(ma, r._currentValue),
                  (r._currentValue = u),
                  null !== o)
                )
                  if (ur(o.value, u)) {
                    if (o.children === i.children && !Ti.current) {
                      t = Wu(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        u = o.child;
                        for (var l = s.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === o.tag) {
                              (l = ja(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (l.next = l)
                                  : ((l.next = f.next), (f.next = l)),
                                  (c.pending = l);
                              }
                            }
                            (o.lanes |= n),
                              null !== (l = o.alternate) && (l.lanes |= n),
                              Sa(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === o.tag)
                        u = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (u = o.return)) throw Error(a(341));
                        (u.lanes |= n),
                          null !== (s = u.alternate) && (s.lanes |= n),
                          Sa(u, n, t),
                          (u = o.sibling);
                      } else u = o.child;
                      if (null !== u) u.return = o;
                      else
                        for (u = o; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (o = u.sibling)) {
                            (o.return = u.return), (u = o);
                            break;
                          }
                          u = u.return;
                        }
                      o = u;
                    }
                ku(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                xa(t, n),
                (r = r((i = _a(i)))),
                (t.flags |= 1),
                ku(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = ya((r = t.type), t.pendingProps)),
                Su(e, t, r, (i = ya(r.type, i)), n)
              );
            case 15:
              return xu(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : ya(r, i)),
                Bu(e, t),
                (t.tag = 1),
                Pi(r) ? ((e = !0), Fi(t)) : (e = !1),
                xa(t, n),
                Ua(t, r, i),
                Wa(t, r, i, n),
                Tu(null, t, r, !0, e, n)
              );
            case 19:
              return Uu(e, t, n);
            case 22:
              return _u(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Kl =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gl(e) {
          this._internalRoot = e;
        }
        function Jl(e) {
          this._internalRoot = e;
        }
        function Zl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $l() {}
        function ec(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ("function" === typeof i) {
              var u = i;
              i = function () {
                var e = Wl(o);
                u.call(e);
              };
            }
            Bl(t, o, e, i);
          } else
            o = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Wl(o);
                    a.call(e);
                  };
                }
                var o = Ul(t, r, e, 0, null, !1, 0, "", $l);
                return (
                  (e._reactRootContainer = o),
                  (e[hi] = o.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  fl(),
                  o
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = Wl(s);
                  u.call(e);
                };
              }
              var s = Ql(e, 0, !1, null, 0, !1, 0, "", $l);
              return (
                (e._reactRootContainer = s),
                (e[hi] = s.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                fl(function () {
                  Bl(t, s, n, r);
                }),
                s
              );
            })(n, t, e, i, r);
          return Wl(o);
        }
        (Jl.prototype.render = Gl.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Bl(e, t, null, null);
          }),
          (Jl.prototype.unmount = Gl.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fl(function () {
                  Bl(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Jl.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    il(t, Ze()),
                    0 === (6 & Ts) && ((Us = Ze() + 500), qi()));
                }
                break;
              case 13:
                fl(function () {
                  var t = Ta(e, 1);
                  if (null !== t) {
                    var n = tl();
                    rl(t, e, 1, n);
                  }
                }),
                  Yl(e, 1);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = Ta(e, 134217728);
              if (null !== t) rl(t, e, 134217728, tl());
              Yl(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nl(e),
                n = Ta(e, t);
              if (null !== n) rl(n, e, t, tl());
              Yl(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ki(r);
                      if (!i) throw Error(a(90));
                      Y(r), X(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = cl),
          (Te = fl);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, wi, ki, Oe, Ne, cl],
          },
          nc = {
            findFiberByHostInstance: gi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (at = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zl(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: E,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zl(e)) throw Error(a(299));
            var n = !1,
              r = "",
              i = Kl;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Ql(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Gl(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fl(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xl(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zl(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = "",
              u = Kl;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Ul(t, null, e, 1, null != n ? n : null, i, 0, o, u)),
              (e[hi] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Jl(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xl(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xl(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fl(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cl),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xl(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          i = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            a = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: l,
            ref: c,
            props: a,
            _owner: u.current,
          };
        }
        (t.Fragment = a), (t.jsx = l), (t.jsxs = l);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          y = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = m.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, m.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          E = Object.prototype.hasOwnProperty,
          S = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var i,
            a = {},
            o = null,
            u = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              E.call(t, i) && !x.hasOwnProperty(i) && (a[i] = t[i]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
            a.children = l;
          }
          if (e && e.defaultProps)
            for (i in (s = e.defaultProps)) void 0 === a[i] && (a[i] = s[i]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: u,
            props: a,
            _owner: S.current,
          };
        }
        function O(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, i, a, o) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (u) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === a ? "." + C(s, 0) : a),
              k(o)
                ? ((i = ""),
                  null != e && (i = e.replace(N, "$&/") + "/"),
                  T(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (O(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), k(e)))
            for (var l = 0; l < e.length; l++) {
              var c = a + C((u = e[l]), l);
              s += T(u, t, i, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), l = 0; !(u = e.next()).done; )
              s += T((u = u.value), t, i, (c = a + C(u, l++)), o);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function D(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          j = { transition: null },
          R = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: D,
          forEach: function (e, t, n) {
            D(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              D(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              D(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              a = e.key,
              o = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (u = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (l in t)
                E.call(t, l) &&
                  !x.hasOwnProperty(l) &&
                  (i[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) i.children = r;
            else if (1 < l) {
              s = Array(l);
              for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: o,
              props: i,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var u = 2 * (r + 1) - 1,
                s = e[u],
                l = u + 1,
                c = e[l];
              if (0 > a(s, n))
                l < i && 0 > a(c, s)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = s), (e[u] = n), (r = u));
              else {
                if (!(l < i && 0 > a(c, n))) break e;
                (e[r] = c), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var u = Date,
            s = u.now();
          t.unstable_now = function () {
            return u.now() - s;
          };
        }
        var l = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          y = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(l, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((y = !1), w(e), !v))
            if (null !== r(l)) (v = !0), j(E);
            else {
              var t = r(c);
              null !== t && R(k, t.startTime - e);
            }
        }
        function E(e, n) {
          (v = !1), y && ((y = !1), g(O), (O = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var u = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(l) && i(l),
                  w(n);
              } else i(l);
              d = r(l);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && R(k, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          x = !1,
          _ = null,
          O = -1,
          N = 5,
          C = -1;
        function T() {
          return !(t.unstable_now() - C < N);
        }
        function D() {
          if (null !== _) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? S() : ((x = !1), (_ = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(D);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var I = new MessageChannel(),
            P = I.port2;
          (I.port1.onmessage = D),
            (S = function () {
              P.postMessage(null);
            });
        } else
          S = function () {
            m(D, 0);
          };
        function j(e) {
          (_ = e), x || ((x = !0), S());
        }
        function R(e, n) {
          O = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), j(E));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (u = a + u),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (y ? (g(O), (O = -1)) : (y = !0), R(k, a - o)))
                : ((e.sortIndex = u), n(l, e), v || h || ((v = !0), j(E))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, i) {
        if ((1 & i && (r = this(r)), 8 & i)) return r;
        if ("object" === typeof r && r) {
          if (4 & i && r.__esModule) return r;
          if (16 & i && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var u = 2 & i && r;
          "object" == typeof u && !~e.indexOf(u);
          u = t(u)
        )
          Object.getOwnPropertyNames(u).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(a, o),
          a
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".c4e7f8f9.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "client:";
      n.l = function (r, i, a, o) {
        if (e[r]) e[r].push(i);
        else {
          var u, s;
          if (void 0 !== a)
            for (
              var l = document.getElementsByTagName("script"), c = 0;
              c < l.length;
              c++
            ) {
              var f = l[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + a
              ) {
                u = f;
                break;
              }
            }
          u ||
            ((s = !0),
            ((u = document.createElement("script")).charset = "utf-8"),
            (u.timeout = 120),
            n.nc && u.setAttribute("nonce", n.nc),
            u.setAttribute("data-webpack", t + a),
            (u.src = r)),
            (e[r] = [i]);
          var d = function (t, n) {
              (u.onerror = u.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                u.parentNode && u.parentNode.removeChild(u),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: u }),
              12e4
            );
          (u.onerror = d.bind(null, u.onerror)),
            (u.onload = d.bind(null, u.onload)),
            s && document.head.appendChild(u);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              u = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = a),
                    (u.request = o),
                    i[1](u);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var i,
            a,
            o = r[0],
            u = r[1],
            s = r[2],
            l = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in u) n.o(u, i) && (n.m[i] = u[i]);
            if (s) s(n);
          }
          for (t && t(r); l < o.length; l++)
            (a = o[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkclient = self.webpackChunkclient || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        i = n(250);
      function a(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function s() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function l(e, t) {
        return (
          a(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                a,
                o,
                u = [],
                s = !0,
                l = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = a.call(n)).done) &&
                    (u.push(r.value), u.length !== t);
                    s = !0
                  );
              } catch (c) {
                (l = !0), (i = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (l) throw i;
                }
              }
              return u;
            }
          })(e, t) ||
          u(e, t) ||
          s()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          c(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function y(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function m(e, t) {
        return (
          (m = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          m(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && m(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function w() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function E(e) {
        var t = w();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var i = b(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === p(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return k(e);
          })(this, n);
        };
      }
      function S(e, t, n) {
        return (
          (S = w()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && m(i, n.prototype), i;
              }),
          S.apply(null, arguments)
        );
      }
      function x(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (x = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return S(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              m(r, e)
            );
          }),
          x(e)
        );
      }
      function _(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = u(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          O.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var N,
        C = "popstate";
      function T(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function D(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function I(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          O(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? j(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function P(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          i = void 0 === r ? "" : r,
          a = e.hash,
          o = void 0 === a ? "" : a;
        return (
          i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function j(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function R(t, n, r, i) {
        void 0 === i && (i = {});
        var a = i,
          o = a.window,
          u = void 0 === o ? document.defaultView : o,
          s = a.v5Compat,
          l = void 0 !== s && s,
          c = u.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: m.location, delta: n });
        }
        function y(e) {
          var t =
              "null" !== u.location.origin
                ? u.location.origin
                : u.location.href,
            n = "string" === typeof e ? e : P(e);
          return (
            T(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(O({}, c.state, { idx: p }), ""));
        var m = {
          get action() {
            return f;
          },
          get location() {
            return t(u, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              u.addEventListener(C, v),
              (d = e),
              function () {
                u.removeEventListener(C, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(u, e);
          },
          createURL: y,
          encodeLocation: function (e) {
            var t = y(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var i = I(m.location, t, n);
            r && r(i, t);
            var a = D(i, (p = h() + 1)),
              o = m.createHref(i);
            try {
              c.pushState(a, "", o);
            } catch (s) {
              u.location.assign(o);
            }
            l && d && d({ action: f, location: m.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var i = I(m.location, t, n);
            r && r(i, t);
            var a = D(i, (p = h())),
              o = m.createHref(i);
            c.replaceState(a, "", o),
              l && d && d({ action: f, location: m.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return m;
      }
      function A(e, t, n) {
        void 0 === n && (n = "/");
        var r = G(("string" === typeof t ? j(t) : t).pathname || "/", n);
        if (null == r) return null;
        var i = F(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(i);
        for (var a = null, o = 0; null == a && o < i.length; ++o)
          a = H(i[o], K(r));
        return a;
      }
      function F(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var i = function (e, i, a) {
          var o = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (T(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var u = ee([r, o.relativePath]),
            s = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (T(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                u +
                '".'
            ),
            F(e.children, t, s, u)),
            (null != e.path || e.index) &&
              t.push({ path: u, score: W(u, e.index), routesMeta: s });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                a = _(L(e.path));
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  i(e, t, o);
                }
              } catch (u) {
                a.e(u);
              } finally {
                a.f();
              }
            } else i(e, t);
          }),
          t
        );
      }
      function L(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = a((n = t)) || c(n) || u(n) || s(),
          i = r[0],
          o = r.slice(1),
          l = i.endsWith("?"),
          d = i.replace(/\?$/, "");
        if (0 === o.length) return l ? [d, ""] : [d];
        var p = L(o.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          l && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(N || (N = {}));
      var M = /^:\w+$/,
        z = 3,
        V = 2,
        Q = 1,
        q = 10,
        U = -2,
        B = function (e) {
          return "*" === e;
        };
      function W(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(B) && (r += U),
          t && (r += V),
          n
            .filter(function (e) {
              return !B(e);
            })
            .reduce(function (e, t) {
              return e + (M.test(t) ? z : "" === t ? Q : q);
            }, r)
        );
      }
      function H(e, t) {
        for (
          var n = e.routesMeta, r = {}, i = "/", a = [], o = 0;
          o < n.length;
          ++o
        ) {
          var u = n[o],
            s = o === n.length - 1,
            l = "/" === i ? t : t.slice(i.length) || "/",
            c = Y(
              { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          a.push({
            params: r,
            pathname: ee([i, c.pathname]),
            pathnameBase: te(ee([i, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (i = ee([i, c.pathnameBase]));
        }
        return a;
      }
      function Y(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            J(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              i =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (i += "\\/*$")
              : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
            var a = new RegExp(i, t ? void 0 : "i");
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          r = l(n, 2),
          i = r[0],
          a = r[1],
          o = t.match(i);
        if (!o) return null;
        var u = o[0],
          s = u.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: a.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    J(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function K(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            J(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function G(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function J(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Z(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function $(e, t, n, r) {
        var i;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (i = j(e))
            : (T(
                !(i = O({}, e)).pathname || !i.pathname.includes("?"),
                Z("?", "pathname", "search", i)
              ),
              T(
                !i.pathname || !i.pathname.includes("#"),
                Z("#", "pathname", "hash", i)
              ),
              T(
                !i.search || !i.search.includes("#"),
                Z("#", "search", "hash", i)
              ));
        var a,
          o = "" === e || "" === i.pathname,
          u = o ? "/" : i.pathname;
        if (r || null == u) a = n;
        else {
          var s = t.length - 1;
          if (u.startsWith("..")) {
            for (var l = u.split("/"); ".." === l[0]; ) l.shift(), (s -= 1);
            i.pathname = l.join("/");
          }
          a = s >= 0 ? t[s] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? j(e) : e,
              r = n.pathname,
              i = n.search,
              a = void 0 === i ? "" : i,
              o = n.hash,
              u = void 0 === o ? "" : o,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: ne(a), hash: re(u) };
          })(i, a),
          f = u && "/" !== u && u.endsWith("/"),
          d = (o || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ee = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        te = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ne = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        re = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ie = (function (e) {
          g(n, e);
          var t = E(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return y(n);
        })(x(Error));
      function ae(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var oe = ["post", "put", "patch", "delete"],
        ue = (new Set(oe), ["get"].concat(oe));
      new Set(ue),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          se.apply(this, arguments)
        );
      }
      var le =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ce = t.useState,
        fe = t.useEffect,
        de = t.useLayoutEffect,
        pe = t.useDebugValue;
      function he(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !le(n, r);
        } catch (i) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ve = t.createContext(null);
      var ye = t.createContext(null);
      var me = t.createContext(null);
      var ge = t.createContext(null);
      var be = t.createContext(null);
      var we = t.createContext({ outlet: null, matches: [] });
      var ke = t.createContext(null);
      function Ee() {
        return null != t.useContext(be);
      }
      function Se() {
        return Ee() || T(!1), t.useContext(be).location;
      }
      function xe() {
        Ee() || T(!1);
        var e = t.useContext(ge),
          n = e.basename,
          r = e.navigator,
          i = t.useContext(we).matches,
          a = Se().pathname,
          o = JSON.stringify(
            X(i).map(function (e) {
              return e.pathnameBase;
            })
          ),
          u = t.useRef(!1);
        return (
          t.useEffect(function () {
            u.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), u.current))
                if ("number" !== typeof e) {
                  var i = $(e, JSON.parse(o), a, "path" === t.relative);
                  "/" !== n &&
                    (i.pathname = "/" === i.pathname ? n : ee([n, i.pathname])),
                    (t.replace ? r.replace : r.push)(i, t.state, t);
                } else r.go(e);
            },
            [n, r, o, a]
          )
        );
      }
      function _e(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          i = t.useContext(we).matches,
          a = Se().pathname,
          o = JSON.stringify(
            X(i).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return $(e, JSON.parse(o), a, "path" === r);
          },
          [e, o, a, r]
        );
      }
      function Oe() {
        var e = (function () {
            var e,
              n = t.useContext(ke),
              r = Pe(Ce.UseRouteError),
              i = je(Ce.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[i];
          })(),
          n = ae(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          i = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: i };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: a }, r) : null,
          null
        );
      }
      var Ne,
        Ce,
        Te = (function (e) {
          g(r, e);
          var n = E(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            y(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          we.Provider,
                          { value: this.props.routeContext },
                          t.createElement(ke.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function De(e) {
        var n = e.routeContext,
          r = e.match,
          i = e.children,
          a = t.useContext(ve);
        return (
          a &&
            a.static &&
            a.staticContext &&
            r.route.errorElement &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(we.Provider, { value: n }, i)
        );
      }
      function Ie(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var i = e,
          a = null == r ? void 0 : r.errors;
        if (null != a) {
          var o = i.findIndex(function (e) {
            return e.route.id && (null == a ? void 0 : a[e.route.id]);
          });
          o >= 0 || T(!1), (i = i.slice(0, Math.min(i.length, o + 1)));
        }
        return i.reduceRight(function (e, o, u) {
          var s = o.route.id ? (null == a ? void 0 : a[o.route.id]) : null,
            l = r ? o.route.errorElement || t.createElement(Oe, null) : null,
            c = n.concat(i.slice(0, u + 1)),
            f = function () {
              return t.createElement(
                De,
                { match: o, routeContext: { outlet: e, matches: c } },
                s ? l : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === u)
            ? t.createElement(Te, {
                location: r.location,
                component: l,
                error: s,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Pe(e) {
        var n = t.useContext(ye);
        return n || T(!1), n;
      }
      function je(e) {
        var n = (function (e) {
            var n = t.useContext(we);
            return n || T(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || T(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Ne || (Ne = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Ce || (Ce = {}));
      var Re;
      function Ae(e) {
        T(!1);
      }
      function Fe(n) {
        var r = n.basename,
          i = void 0 === r ? "/" : r,
          a = n.children,
          o = void 0 === a ? null : a,
          u = n.location,
          s = n.navigationType,
          l = void 0 === s ? e.Pop : s,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        Ee() && T(!1);
        var p = i.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof u && (u = j(u));
        var v = u,
          y = v.pathname,
          m = void 0 === y ? "/" : y,
          g = v.search,
          b = void 0 === g ? "" : g,
          w = v.hash,
          k = void 0 === w ? "" : w,
          E = v.state,
          S = void 0 === E ? null : E,
          x = v.key,
          _ = void 0 === x ? "default" : x,
          O = t.useMemo(
            function () {
              var e = G(m, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: k, state: S, key: _ };
            },
            [p, m, b, k, S, _]
          );
        return null == O
          ? null
          : t.createElement(
              ge.Provider,
              { value: h },
              t.createElement(be.Provider, {
                children: o,
                value: { location: O, navigationType: l },
              })
            );
      }
      function Le(n) {
        var r = n.children,
          i = n.location,
          a = t.useContext(ve);
        return (function (n, r) {
          Ee() || T(!1);
          var i,
            a = t.useContext(ge).navigator,
            o = t.useContext(ye),
            u = t.useContext(we).matches,
            s = u[u.length - 1],
            l = s ? s.params : {},
            c = (s && s.pathname, s ? s.pathnameBase : "/"),
            f = (s && s.route, Se());
          if (r) {
            var d,
              p = "string" === typeof r ? j(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              T(!1),
              (i = p);
          } else i = f;
          var h = i.pathname || "/",
            v = A(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            y = Ie(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, l, e.params),
                    pathname: ee([
                      c,
                      a.encodeLocation
                        ? a.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : ee([
                            c,
                            a.encodeLocation
                              ? a.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              u,
              o || void 0
            );
          return r && y
            ? t.createElement(
                be.Provider,
                {
                  value: {
                    location: se(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      i
                    ),
                    navigationType: e.Pop,
                  },
                },
                y
              )
            : y;
        })(a && !r ? a.router.routes : ze(r), i);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Re || (Re = {}));
      var Me = new Promise(function () {});
      t.Component;
      function ze(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, i) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Ae && T(!1),
                  e.props.index && e.props.children && T(!1);
                var a = [].concat(f(n), [i]),
                  o = {
                    id: e.props.id || a.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = ze(e.props.children, a)),
                  r.push(o);
              } else r.push.apply(r, ze(e.props.children, n));
          }),
          r
        );
      }
      function Ve() {
        return (
          (Ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ve.apply(this, arguments)
        );
      }
      function Qe(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var qe = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      function Ue(e) {
        var n,
          r = e.basename,
          i = e.children,
          a = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: a, v5Compat: !0 }) && (n = {}),
            R(
              function (e, t) {
                var n = e.location;
                return I(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : P(t);
              },
              null,
              n
            )));
        var u = o.current,
          s = l(t.useState({ action: u.action, location: u.location }), 2),
          c = s[0],
          f = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(Fe, {
            basename: r,
            children: i,
            location: c.location,
            navigationType: c.action,
            navigator: u,
          })
        );
      }
      var Be =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        We = t.forwardRef(function (e, n) {
          var r,
            i = e.onClick,
            a = e.relative,
            o = e.reloadDocument,
            u = e.replace,
            s = e.state,
            l = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = Qe(e, qe),
            p = !1;
          if (
            Be &&
            "string" === typeof c &&
            /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)
          ) {
            r = c;
            var h = new URL(window.location.href),
              v = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c);
            v.origin === h.origin
              ? (c = v.pathname + v.search + v.hash)
              : (p = !0);
          }
          var y = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              Ee() || T(!1);
              var i = t.useContext(ge),
                a = i.basename,
                o = i.navigator,
                u = _e(e, { relative: r }),
                s = u.hash,
                l = u.pathname,
                c = u.search,
                f = l;
              return (
                "/" !== a && (f = "/" === l ? a : ee([a, l])),
                o.createHref({ pathname: f, search: c, hash: s })
              );
            })(c, { relative: a }),
            m = (function (e, n) {
              var r = void 0 === n ? {} : n,
                i = r.target,
                a = r.replace,
                o = r.state,
                u = r.preventScrollReset,
                s = r.relative,
                l = xe(),
                c = Se(),
                f = _e(e, { relative: s });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, i)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== a ? a : P(c) === P(f);
                    l(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: u,
                      relative: s,
                    });
                  }
                },
                [c, l, f, a, o, i, e, u, s]
              );
            })(c, {
              replace: u,
              state: s,
              target: l,
              preventScrollReset: f,
              relative: a,
            });
          return t.createElement(
            "a",
            Ve({}, d, {
              href: r || y,
              onClick:
                p || o
                  ? i
                  : function (e) {
                      i && i(e), e.defaultPrevented || m(e);
                    },
              ref: n,
              target: l,
            })
          );
        });
      var He, Ye;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(He || (He = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ye || (Ye = {}));
      var Ke =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTAxVDA4OjI2OjM3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0wMVQwODoyODo1OS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNi0wMVQwODoyODo1OS0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTRhMzg5Mi0zMjk4LTkxNDYtYjMwOC0yYzFiNmQ1ZGRjYjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YzQ2NGFmMjktMDFkYS0xYTRjLWIzYzItOWM5YWI0ZTA4OTk0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzQ2NGFmMjktMDFkYS0xYTRjLWIzYzItOWM5YWI0ZTA4OTk0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNDY0YWYyOS0wMWRhLTFhNGMtYjNjMi05YzlhYjRlMDg5OTQiIHN0RXZ0OndoZW49IjIwMjItMDYtMDFUMDg6MjY6MzctMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODk0YTM4OTItMzI5OC05MTQ2LWIzMDgtMmMxYjZkNWRkY2I5IiBzdEV2dDp3aGVuPSIyMDIyLTA2LTAxVDA4OjI4OjU5LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/ZnA/QAAD9dJREFUaAXFwQ2wpmV93/Hv739d9/Occ9gFwei0hmiFxFhblbRRaiwqkxiTNBqN+FriG7UgBgvRKSNLlIUFixhFhFUajZmQpNpA3uwkqdKxQzPWqRqD1FjTEUx8q05kcV/OeZ7nvq//r2d3WfZZOGdZOLvm86m2OeBbT/9TwgNET0shz3BUBFhgkjozppAdmGTT1x9BnXS4JGtyotzMnsffTd/dfWoMo3Nd9BMYyXw6xI19a39dl5JaE1usSeAGw6RDLkRCRGWgByWWsCEMioHmIFpHmVUefcfzOaCyQbKIFCmxJgtlgPnBLH63WrwAm70sfsLwjyHeAPk3hCFZmwCJjapskItpNXFJ1qKEtrB781Ant8n1FGTmJfpZhW4TPJUW92CxJgHJhlU2QClWHrWLVGKZNRk8bu8OxynRdyBzKBPhx7bJ6Drn6FU8gAEhGccUBJiHrbJBWRIXg0ESIPYxq8Sqk0n9IgZk1mKLVS/MMj0FuJNVBiQQgga4ogwojY2obJASRMEYaIQDR4CMSVY9UXASD0bebPmJwJ0YZIgQIFINqXE0VI4Kc5CxDWHIBGsHIY5EafVuKzFBZEMhjMACCTAbVTkWzCqhLMjlxzIGjoTJ07A/jcCAOPoqx4r1z1zyWjOcwX4GxFqEATn8fuBszIXAZzkGKkffPyDYhvIcDJZB+pNoPNLidDAg9hNgaPockd9G/CusZ6L2GcSHDVuAb3EUVY4WI0JvzuBK5BE2KJrgLd1KbB9GebsFSDuVVFZZrQedEOKkWFl4VluYnkPktRDFwWuxz4a8VPAuIDkKKhth9hMvIPwepFOw2cfxhwpfVHaVr7bCB7L6iTQIdy9E7XbbIfFEHLe55CnZDe9n0r1GC8MfO/xu4MXGnfHVks4D3iz4AzaosiYBYtXJwI8DI+AO4EvME0+yuJbwc9nLgHSHWnmznJ/AE3KhnDl0o3MFdNPy29HnJ/vNBsFo99KfD93woWFh+Dcaz149mh3/kVhe/LPZwu6zHPlThN4leKrF43H7/TS3gi4EvsihfhR4KtADnwP+lnVU5hgQYDO2fDWKN4Fl9hP6mPBrDd8F3kf4jUhiL/M9wSWWthNQZxU4jn40bFUmCpYZlW3ZAWEihcZQiCtaq7/o0k7qF1cuq7vH/9W9nIt5q9Bp0eJcwu9AnGj8U0b/G3K7FG8EnWD5Q6AXYxBgCaPtwFuAFe6nMkcEJki1PzWcKYv7GBDPH6r+J3gF8RQsMMh6n+HthHdgiAngJEe83sQZlAaTblub6ctIeFqIsaEYJX9bel/RFO9xaaf3m3a/cbxnfL12j5kt9Vi+URkftXwZwb8TYPn8pjwDZmPLT5DFQQbifOQng54NMnMqc0Q/bmpvtX1mIB7AgPQjrFKC5VtF+WWZLzsSGcoEYgau7YSh5pZUUDK+EnvqdcMAYlUUiozDYKgebU/PXp/wpCh6a5fxkTrr/i5STI6bYvkekgsRNwiuF/rphCeLRBYP4EDRzpDyKuxtwB7uVZmTTF4IfrUQhyfA50nciMEYS0gVLQgvQEsuNX5cYHLC1qyTPe7ANkQwLIwhAAOKmahb5eGjNo9ZWfTbWPCbQhUQRA82q/6vUs9LfA6FD2KxNoODVJ7t0eyvgJu4V+UQfjroH/GgjMU3sRAgzGhWkECCLPnUVttFrCp9vbVOxzdlJGKVAAPTxkGJWvznfqSz28jPH8azC2LKTR74DIMIghwNEMYY8Dfk4LAMiJNzlP8cuIl7VealBgID4sHYS6xKBooKQcFp3JJWhy2MXRyNyPr2cS6RamBWCUhyZReQgNhLKYi8Ikf+OaQi9ZfGtPyCWWUIFVwNhoClVHIkNDAwpzLHEZ925J1KnyrEehxtgvQF9jG4o9UKiDabvigjXyIJT+qNs6k/NdSdgNnHQEBZGkEA5iCNPiMPN9j9m7LzC7SpvaKo/SfLpAr2iDB73e7od8mxGcTaBNZdQf4v5lTmjPaM/qCV4dS20F+DAPMAxmg2uoVx+5KVRCvUWUEJVothYfhVA6XFjsWVpSttcCQHCUh6loEExAGyiD6vyo6Xo/pod3lJLI9vwZopTL95xmzBKOMrdXb8LR72vEZpkDiUQEZ1zweDdgtzKnPKnkq35HdNoz+9bzorwmDuYwMlv7SJE/5trIxAMGvfg9ZDBK0bLrDzxyRwckVWvoYMiIMEiK5nDUbWt0W3te/aDSn+6Sziom5arq4tWGzQL+xA7qgTzpsd59Nc62lqjXmOAfXjPyzKqxgtM68yx8VQDeYlbv4Vgi3ASezXO/n1WsuWUrUckxEDuwhPENDX/uTZON8WGdD0+WGIa2ejPdyfZSKDE6abiQwsM0+IOgzbM1Ze1QqnD5tWttQY/V5MuztFZXR3wHA3ZE6HhX/47KGLy+V2HmLMfjuE/4PwO+0KFOZV5iiFUmCQ/W7Bn1n6ImavCwXbkQkqbZgy825CI7BozC7BnGSJ4oWrImRjHsACJdOl7wEJiAcyLrnNdB8rLTancsu09ec4wEsnUqfJePkeyNwJvhBxB/BBVgnONLodsSpBjXmVOcPijKyJWRXCZgLMgBGwkwAsJuyhdVPSPanAKs8YRn6DZMokbqm9b1aY9ZmhBPuJtZTZ6L9Qy++2bvZKd/k6jcpNGuK/m0J2JzLbZAihTFbtYj8bVrAwxnQwHMe8ypz+EVOcoBRR2CuAYL9OgjaIPbqHsjgDAiVkdFuhICtri23KGTbrMBCMZpuAAMxaZNG62bZppxc7PNYCl9WV0XNcErPAZPEHgBnKZFXHfgKEA6KRHsNskXmVORqEODzJFArKRbBQln+dbs+lJEl5z2xc/pKF4MGM2cODkfWlaPzaELoko392P5qdY/JDhKEVpGB9AhKUzKs8DGpCCYQXh9Iuc0C08rUyHV0psUo8KI14MAYi/Y4YDy9z5Kmuenud1t+LGTuzQhsD5iGpPESyUAsig6b2Fqv9sIHoy7Y6bTsc5rDMKuFujNnLHE7JsjvbyrahtA8r4oeCcnE367Y0J20046GqPASWCYKoHY58QsO/gkQ0/jw9+4+TRQ4rMsiSuIqIJAhAgFhPMhAuv1n6enbW4Sdni76w1dFHyrB0h2wypsjBkaocKYEQdVel9sHKSZOLM/wIorGwvHlrN1nCpbEWJyAYuil9neKSOBuNhigUAkiMWZOh2pfPrJ9EXnKZXhITvSKceEE8FJWHIkFZGGo+0/LrhPCg38q+3dpInMmhhJrI0UC/tEKrA7JQskrsZRqNgbAQBTBrcdFtEr+e1uut9vKm3R+OoXy8IRBgjkjlSNkoCtNH9mQOV8ki0rvZNdo6a8ksdjIvUmQYjmswNhSjFjyQMNAUiEq4IoPF/Ygy5FbHylkuPrEtxeWR8XHceCgqR8iyx9NFsvSvmnb5LBdTp+PrFnLpzqzJfSwwtPHAbDSljRJlQBPrE2CsKeme0qAk9zIHKPlGjnlXI6508ems1HMj48Y8fpq04EhUDjGAAhxgQOxjmaCsyKYxbJGFky+7aVuTMWavyELWxmxhwlAH9lILjphFRpIjiAZdL8IixT4W1KZriHxZKzyFUb+FwTdaWhZzBBhcGkQyrzJHPJKYzsi6QnZCzQmkLDBfnHZ7zmnBE0JQlsdXtL6urJQZIjDGCxM8ahBGKR4OWeyVBWYBpYnS2E8ikr4McXmLvNnd8EMROk+z8oksiYwRdi+imm7n8XilY15ljnU8MexGWiHHoCGrFR17JT9jxVlEQ63eNtLC73hsyIKjMZSe7HpkQYqNksGCoSYpE5nICQLDLXL9BIrnyjrX6eMpBiTkjgQJuuUlvGOReZV5HoAGEqDzDb+KEAYXX42IyJjEZPrGnmWIwLUja2AlyuBoktkni8hSGM2CUQtKiqGP85YX21+24tMIniLLgDCfRFwJvNelkd3AvMocUXF0pNtv2eWXpABzQFhJtPqdYWH4ukhwwQVkI4tjRWaf2SjIAYobMeg7yvId6mwzjuAA61EuXOvwM+jry0vfMa8yL3cyLAwXWPql6BMk5ikDRz42R/HekuNX0wKZ7xvZDBUm0eg6XwdxKhncXwSk/bLZ0q7PqVu5hjmVef7uz2P9Miog1lWnCy+F/IjFF4AT+D6S2dkN5UctXiLWF63Qn7TzvKzDXcDN3KsyL7p/gThFNodjeQHHn4D5e6FAmMOxTPTdKTHUpwM3c6/KvNAIZ+VIhDEg8/0ngzkCRqnKnMoct9lnLd0llcfzIJTxAeErUn6S0KOAAMyxIYQxK9ifwn4x0g0cjgzo6x7q55lTmdPGJ/wRtCeVYeXtJCCxHuOXCn830DsxOxGYOQLMwyPAHGRQCjAWZyMuQIBZnwzDwm/j0e8zpzJvtGlaJ8uXkcvPyVqfrZYcQsboqzIzwk+w2QK8Vfgao22R2m01rEApLPOwpEGCZJUBQfqlrrzH8mNkIPVx5B9E/idYzMtqSl8+pUm5JKvMnMo8N5QDcvxsOn4N2htA7GfU6q3Cr4L8lqUPEX4ddli+GPRaw8Xg3wyEUmQZEBUDxpAgjEOAEYFJQOxjQwIGVWME6DTC2x08wzKydkh6m5quV8RjkvyNVD5PFvsZXD4IcZFsg5lXuR+LVVqROZ/wNaSeBnSYv6Lp84SABugcWTdgv9fSvwQ/2uEPg84XvNnwPzjARgIjjLmPgQAZ3AABAgyYxxC+EngNMjiI1Pul3AKxg1UivqnkZxT5FODJ4F6Oz4bjTjCIB6gc3l3AXRwgs48EYpX+Qs1nELzMwTsRj8V6WpK3Sfpd0MXA1zlUBX4EEPDXwMChRgRvstiKWAIj65NGFym5nWIOMMYY0BeAL3AEKkfHR2XdbHwp6FLkmuFXCr0I8w7gCsxe5xK+BDiZVZa/CbwTeB8Ggp+3fL3Q45DB+ptwuQDyY8hYQmxM5ahxw9oq+A2sq5FfAV5M5eWC5wm+g/JFIA7yyZjrjJ9FaA/Bq0GsmirjUuz3OtTLHDWVo818DfNKQtcTXCt4GuaZZi+xjrMoxpiwbkLl34P/H5ijrXKsiE/ReHo4znf1DbZZn7GDMnQvUPQfy2KOlcqx4gSZxJ/GMiAOQxgrv404pipHjQBxUAAG8UhAHJZAkLX/ARDQIEBAkICxQAgQG1HZCAMSlkEgBGIfWdzr/5jcAT6RwzG7isqXmSfAIAfRAkgsIx6+ykYISIMaDmNzkLiXvyZ1f4T1GkhAzJNNq6DW/XG3e/ErllmLLIbxBNPYiMqGiLK8TBl6iGAtshnq9KLhhE1nhuJx2GDu0wpEn99YmC1dSLeIaKxn1Jboyz1kTIDCw1HZKBsyWY8Smvp7cD6nuPtAoz2PA2woo/82Wpme2036v5tt2oTSrK+wUZWNEiCBxJoESEj6agx5YSrPd4kfx0iOv5DLdql8xcEqA2Z9yUb9f7zaiUxe0+nXAAAAAElFTkSuQmCC",
        Ge = n(184);
      function Je() {
        return (0, Ge.jsx)("nav", {
          className: "navbar bg-light mb-4 p-0",
          children: (0, Ge.jsx)("div", {
            className: "container",
            children: (0, Ge.jsx)("a", {
              className: "navbar-brand",
              href: "/",
              children: (0, Ge.jsxs)("div", {
                className: "d-flex",
                children: [
                  (0, Ge.jsx)("img", {
                    src: Ke,
                    alt: "logo",
                    className: "mr-2",
                  }),
                  (0, Ge.jsx)("div", { children: "ProjectMgmt" }),
                ],
              }),
            }),
          }),
        });
      }
      var Ze = function (e, t) {
        return (
          (Ze =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          Ze(e, t)
        );
      };
      function Xe(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        Ze(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var $e = function () {
        return (
          ($e =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          $e.apply(this, arguments)
        );
      };
      function et(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function tt(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              s(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (t) {
              a(t);
            }
          }
          function s(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function nt(e, t) {
        var n,
          r,
          i,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = { next: u(0), throw: u(1), return: u(2) }),
          "function" === typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(u) {
          return function (s) {
            return (function (u) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && ((a = 0), u[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, u[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                    case 0:
                    case 1:
                      i = u;
                      break;
                    case 4:
                      return o.label++, { value: u[1], done: !1 };
                    case 5:
                      o.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === u[0] || 2 === u[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                        o.label = u[1];
                        break;
                      }
                      if (6 === u[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = u);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(u);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  u = t.call(e, o);
                } catch (s) {
                  (u = [6, s]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, s]);
          };
        }
      }
      Object.create;
      function rt(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, a = t.length; i < a; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var it = "Invariant Violation",
        at = Object.setPrototypeOf,
        ot =
          void 0 === at
            ? function (e, t) {
                return (e.__proto__ = t), e;
              }
            : at,
        ut = (function (e) {
          function t(n) {
            void 0 === n && (n = it);
            var r =
              e.call(
                this,
                "number" === typeof n
                  ? it +
                      ": " +
                      n +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : n
              ) || this;
            return (r.framesToPop = 1), (r.name = it), ot(r, t.prototype), r;
          }
          return Xe(t, e), t;
        })(Error);
      function st(e, t) {
        if (!e) throw new ut(t);
      }
      var lt = ["debug", "log", "warn", "error", "silent"],
        ct = lt.indexOf("log");
      function ft(e) {
        return function () {
          if (lt.indexOf(e) >= ct)
            return (console[e] || console.log).apply(console, arguments);
        };
      }
      !(function (e) {
        (e.debug = ft("debug")),
          (e.log = ft("log")),
          (e.warn = ft("warn")),
          (e.error = ft("error"));
      })(st || (st = {}));
      function dt(e) {
        try {
          return e();
        } catch (at) {}
      }
      var pt =
          dt(function () {
            return globalThis;
          }) ||
          dt(function () {
            return window;
          }) ||
          dt(function () {
            return self;
          }) ||
          dt(function () {
            return global;
          }) ||
          dt(function () {
            return dt.constructor("return this")();
          }),
        ht = "__",
        vt = [ht, ht].join("DEV");
      var yt = (function () {
        try {
          return Boolean(__DEV__);
        } catch (at) {
          return (
            Object.defineProperty(pt, vt, {
              value:
                "production" !==
                dt(function () {
                  return "production";
                }),
              enumerable: !1,
              configurable: !0,
              writable: !0,
            }),
            pt[vt]
          );
        }
      })();
      function mt(e) {
        try {
          return e();
        } catch (t) {}
      }
      var gt =
          mt(function () {
            return globalThis;
          }) ||
          mt(function () {
            return window;
          }) ||
          mt(function () {
            return self;
          }) ||
          mt(function () {
            return global;
          }) ||
          mt(function () {
            return mt.constructor("return this")();
          }),
        bt = !1;
      function wt() {
        bt && (delete gt.process, (bt = !1));
      }
      function kt(e, t) {
        if (!Boolean(e)) throw new Error(t);
      }
      !gt ||
        mt(function () {
          return "production";
        }) ||
        mt(function () {
          return process;
        }) ||
        (Object.defineProperty(gt, "process", {
          value: { env: { NODE_ENV: "production" } },
          configurable: !0,
          enumerable: !1,
          writable: !0,
        }),
        (bt = !0));
      var Et = 10,
        St = 2;
      function xt(e) {
        return _t(e, []);
      }
      function _t(e, t) {
        switch (typeof e) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? "[function ".concat(e.name, "]") : "[function]";
          case "object":
            return (function (e, t) {
              if (null === e) return "null";
              if (t.includes(e)) return "[Circular]";
              var n = [].concat(f(t), [e]);
              if (
                (function (e) {
                  return "function" === typeof e.toJSON;
                })(e)
              ) {
                var r = e.toJSON();
                if (r !== e) return "string" === typeof r ? r : _t(r, n);
              } else if (Array.isArray(e))
                return (function (e, t) {
                  if (0 === e.length) return "[]";
                  if (t.length > St) return "[Array]";
                  for (
                    var n = Math.min(Et, e.length),
                      r = e.length - n,
                      i = [],
                      a = 0;
                    a < n;
                    ++a
                  )
                    i.push(_t(e[a], t));
                  1 === r
                    ? i.push("... 1 more item")
                    : r > 1 && i.push("... ".concat(r, " more items"));
                  return "[" + i.join(", ") + "]";
                })(e, n);
              return (function (e, t) {
                var n = Object.entries(e);
                if (0 === n.length) return "{}";
                if (t.length > St)
                  return (
                    "[" +
                    (function (e) {
                      var t = Object.prototype.toString
                        .call(e)
                        .replace(/^\[object /, "")
                        .replace(/]$/, "");
                      if (
                        "Object" === t &&
                        "function" === typeof e.constructor
                      ) {
                        var n = e.constructor.name;
                        if ("string" === typeof n && "" !== n) return n;
                      }
                      return t;
                    })(e) +
                    "]"
                  );
                var r = n.map(function (e) {
                  var n = l(e, 2);
                  return n[0] + ": " + _t(n[1], t);
                });
                return "{ " + r.join(", ") + " }";
              })(e, n);
            })(e, t);
          default:
            return String(e);
        }
      }
      var Ot = function (e, t) {
          return e instanceof t;
        },
        Nt = (function (e) {
          function t(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "GraphQL request",
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { line: 1, column: 1 };
            d(this, t),
              "string" === typeof e ||
                kt(!1, "Body must be a string. Received: ".concat(xt(e), ".")),
              (this.body = e),
              (this.name = n),
              (this.locationOffset = r),
              this.locationOffset.line > 0 ||
                kt(
                  !1,
                  "line in locationOffset is 1-indexed and must be positive."
                ),
              this.locationOffset.column > 0 ||
                kt(
                  !1,
                  "column in locationOffset is 1-indexed and must be positive."
                );
          }
          return (
            y(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Source";
                },
              },
            ]),
            t
          );
        })();
      function Ct(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Tt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Tt(e, t);
          })(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function Tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function It(e, t, n) {
        return (
          t && Dt(e.prototype, t),
          n && Dt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      wt(),
        __DEV__
          ? st("boolean" === typeof yt, yt)
          : st("boolean" === typeof yt, 39);
      var Pt = function () {
          return "function" === typeof Symbol;
        },
        jt = function (e) {
          return Pt() && Boolean(Symbol[e]);
        },
        Rt = function (e) {
          return jt(e) ? Symbol[e] : "@@" + e;
        };
      Pt() && !jt("observable") && (Symbol.observable = Symbol("observable"));
      var At = Rt("iterator"),
        Ft = Rt("observable"),
        Lt = Rt("species");
      function Mt(e, t) {
        var n = e[t];
        if (null != n) {
          if ("function" !== typeof n)
            throw new TypeError(n + " is not a function");
          return n;
        }
      }
      function zt(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[Lt]) && (t = void 0),
          void 0 !== t ? t : Gt
        );
      }
      function Vt(e) {
        return e instanceof Gt;
      }
      function Qt(e) {
        Qt.log
          ? Qt.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function qt(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (t) {
            Qt(t);
          }
        });
      }
      function Ut(e) {
        var t = e._cleanup;
        if (void 0 !== t && ((e._cleanup = void 0), t))
          try {
            if ("function" === typeof t) t();
            else {
              var n = Mt(t, "unsubscribe");
              n && n.call(t);
            }
          } catch (r) {
            Qt(r);
          }
      }
      function Bt(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
      }
      function Wt(e, t, n) {
        e._state = "running";
        var r = e._observer;
        try {
          var i = Mt(r, t);
          switch (t) {
            case "next":
              i && i.call(r, n);
              break;
            case "error":
              if ((Bt(e), !i)) throw n;
              i.call(r, n);
              break;
            case "complete":
              Bt(e), i && i.call(r);
          }
        } catch (a) {
          Qt(a);
        }
        "closed" === e._state
          ? Ut(e)
          : "running" === e._state && (e._state = "ready");
      }
      function Ht(e, t, n) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state)
            return "ready" !== e._state
              ? ((e._state = "buffering"),
                (e._queue = [{ type: t, value: n }]),
                void qt(function () {
                  return (function (e) {
                    var t = e._queue;
                    if (t) {
                      (e._queue = void 0), (e._state = "ready");
                      for (
                        var n = 0;
                        n < t.length &&
                        (Wt(e, t[n].type, t[n].value), "closed" !== e._state);
                        ++n
                      );
                    }
                  })(e);
                }))
              : void Wt(e, t, n);
          e._queue.push({ type: t, value: n });
        }
      }
      var Yt = (function () {
          function e(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            var n = new Kt(this);
            try {
              this._cleanup = t.call(void 0, n);
            } catch (r) {
              n.error(r);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          return (
            (e.prototype.unsubscribe = function () {
              "closed" !== this._state && (Bt(this), Ut(this));
            }),
            It(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        Kt = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              Ht(this._subscription, "next", e);
            }),
            (t.error = function (e) {
              Ht(this._subscription, "error", e);
            }),
            (t.complete = function () {
              Ht(this._subscription, "complete");
            }),
            It(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        Gt = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Observable cannot be called as a function");
            if ("function" !== typeof t)
              throw new TypeError("Observable initializer must be a function");
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return (
                ("object" === typeof e && null !== e) ||
                  (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2],
                  }),
                new Yt(e, this._subscriber)
              );
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                if ("function" === typeof e)
                  var i = t.subscribe({
                    next: function (t) {
                      try {
                        e(t, a);
                      } catch (n) {
                        r(n), i.unsubscribe();
                      }
                    },
                    error: r,
                    complete: n,
                  });
                else r(new TypeError(e + " is not a function"));
                function a() {
                  i.unsubscribe(), n();
                }
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              return new (zt(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (r) {
                      return n.error(r);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              return new (zt(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (r) {
                      return n.error(r);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              var n = zt(this),
                r = arguments.length > 1,
                i = !1,
                a = arguments[1];
              return new n(function (n) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || r))
                      try {
                        a = e(a, t);
                      } catch (u) {
                        return n.error(u);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    if (!i && !r)
                      return n.error(
                        new TypeError("Cannot reduce an empty sequence")
                      );
                    n.next(a), n.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (
                var e = this, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var i = zt(this);
              return new i(function (t) {
                var r,
                  a = 0;
                return (
                  (function e(o) {
                    r = o.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        a === n.length
                          ? ((r = void 0), t.complete())
                          : e(i.from(n[a++]));
                      },
                    });
                  })(e),
                  function () {
                    r && (r.unsubscribe(), (r = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              var n = zt(this);
              return new n(function (r) {
                var i = [],
                  a = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (u) {
                          return r.error(u);
                        }
                      var a = n.from(t).subscribe({
                        next: function (e) {
                          r.next(e);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(a);
                          e >= 0 && i.splice(e, 1), o();
                        },
                      });
                      i.push(a);
                    },
                    error: function (e) {
                      r.error(e);
                    },
                    complete: function () {
                      o();
                    },
                  });
                function o() {
                  a.closed && 0 === i.length && r.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    a.unsubscribe();
                };
              });
            }),
            (t[Ft] = function () {
              return this;
            }),
            (e.from = function (t) {
              var n = "function" === typeof this ? this : e;
              if (null == t) throw new TypeError(t + " is not an object");
              var r = Mt(t, Ft);
              if (r) {
                var i = r.call(t);
                if (Object(i) !== i)
                  throw new TypeError(i + " is not an object");
                return Vt(i) && i.constructor === n
                  ? i
                  : new n(function (e) {
                      return i.subscribe(e);
                    });
              }
              if (jt("iterator") && (r = Mt(t, At)))
                return new n(function (e) {
                  qt(function () {
                    if (!e.closed) {
                      for (var n, i = Ct(r.call(t)); !(n = i()).done; ) {
                        var a = n.value;
                        if ((e.next(a), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new n(function (e) {
                  qt(function () {
                    if (!e.closed) {
                      for (var n = 0; n < t.length; ++n)
                        if ((e.next(t[n]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw new TypeError(t + " is not observable");
            }),
            (e.of = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return new ("function" === typeof this ? this : e)(function (e) {
                qt(function () {
                  if (!e.closed) {
                    for (var t = 0; t < n.length; ++t)
                      if ((e.next(n[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            It(e, null, [
              {
                key: Lt,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      function Jt(e) {
        return null !== e && "object" === typeof e;
      }
      function Zt(e, t) {
        var n = t,
          r = [];
        return (
          e.definitions.forEach(function (e) {
            if ("OperationDefinition" === e.kind)
              throw __DEV__
                ? new ut(
                    "Found a "
                      .concat(e.operation, " operation")
                      .concat(
                        e.name ? " named '".concat(e.name.value, "'") : "",
                        ". "
                      ) +
                      "No operations are allowed when using a fragment as a query. Only fragments are allowed."
                  )
                : new ut(44);
            "FragmentDefinition" === e.kind && r.push(e);
          }),
          "undefined" === typeof n &&
            (__DEV__
              ? st(
                  1 === r.length,
                  "Found ".concat(
                    r.length,
                    " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."
                  )
                )
              : st(1 === r.length, 45),
            (n = r[0].name.value)),
          $e($e({}, e), {
            definitions: rt(
              [
                {
                  kind: "OperationDefinition",
                  operation: "query",
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: n },
                      },
                    ],
                  },
                },
              ],
              e.definitions,
              !0
            ),
          })
        );
      }
      function Xt(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function $t(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var n = e.name.value;
            if ("function" === typeof t) return t(n);
            var r = t && t[n];
            return (
              __DEV__ ? st(r, "No fragment named ".concat(n)) : st(r, 46),
              r || null
            );
          default:
            return null;
        }
      }
      function en(e) {
        return { __ref: String(e) };
      }
      function tn(e) {
        return Boolean(
          e && "object" === typeof e && "string" === typeof e.__ref
        );
      }
      function nn(e, t, n, r) {
        if (
          (function (e) {
            return "IntValue" === e.kind;
          })(n) ||
          (function (e) {
            return "FloatValue" === e.kind;
          })(n)
        )
          e[t.value] = Number(n.value);
        else if (
          (function (e) {
            return "BooleanValue" === e.kind;
          })(n) ||
          (function (e) {
            return "StringValue" === e.kind;
          })(n)
        )
          e[t.value] = n.value;
        else if (
          (function (e) {
            return "ObjectValue" === e.kind;
          })(n)
        ) {
          var i = {};
          n.fields.map(function (e) {
            return nn(i, e.name, e.value, r);
          }),
            (e[t.value] = i);
        } else if (
          (function (e) {
            return "Variable" === e.kind;
          })(n)
        ) {
          var a = (r || {})[n.name.value];
          e[t.value] = a;
        } else if (
          (function (e) {
            return "ListValue" === e.kind;
          })(n)
        )
          e[t.value] = n.values.map(function (e) {
            var n = {};
            return nn(n, t, e, r), n[t.value];
          });
        else if (
          (function (e) {
            return "EnumValue" === e.kind;
          })(n)
        )
          e[t.value] = n.value;
        else {
          if (
            !(function (e) {
              return "NullValue" === e.kind;
            })(n)
          )
            throw __DEV__
              ? new ut(
                  'The inline argument "'
                    .concat(t.value, '" of kind "')
                    .concat(n.kind, '"') +
                    "is not supported. Use variables instead of inline arguments to overcome this limitation."
                )
              : new ut(55);
          e[t.value] = null;
        }
      }
      Pt() &&
        Object.defineProperty(Gt, Symbol("extensions"), {
          value: { symbol: Ft, hostReportError: Qt },
          configurable: !0,
        });
      var rn = ["connection", "include", "skip", "client", "rest", "export"],
        an = Object.assign(
          function (e, t, n) {
            if (t && n && n.connection && n.connection.key) {
              if (n.connection.filter && n.connection.filter.length > 0) {
                var r = n.connection.filter ? n.connection.filter : [];
                r.sort();
                var i = {};
                return (
                  r.forEach(function (e) {
                    i[e] = t[e];
                  }),
                  "".concat(n.connection.key, "(").concat(on(i), ")")
                );
              }
              return n.connection.key;
            }
            var a = e;
            if (t) {
              var o = on(t);
              a += "(".concat(o, ")");
            }
            return (
              n &&
                Object.keys(n).forEach(function (e) {
                  -1 === rn.indexOf(e) &&
                    (n[e] && Object.keys(n[e]).length
                      ? (a += "@".concat(e, "(").concat(on(n[e]), ")"))
                      : (a += "@".concat(e)));
                }),
              a
            );
          },
          {
            setStringify: function (e) {
              var t = on;
              return (on = e), t;
            },
          }
        ),
        on = function (e) {
          return JSON.stringify(e, un);
        };
      function un(e, t) {
        return (
          Jt(t) &&
            !Array.isArray(t) &&
            (t = Object.keys(t)
              .sort()
              .reduce(function (e, n) {
                return (e[n] = t[n]), e;
              }, {})),
          t
        );
      }
      function sn(e, t) {
        if (e.arguments && e.arguments.length) {
          var n = {};
          return (
            e.arguments.forEach(function (e) {
              var r = e.name,
                i = e.value;
              return nn(n, r, i, t);
            }),
            n
          );
        }
        return null;
      }
      function ln(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function cn(e, t, n) {
        if ("string" === typeof e.__typename) return e.__typename;
        for (var r = 0, i = t.selections; r < i.length; r++) {
          var a = i[r];
          if (fn(a)) {
            if ("__typename" === a.name.value) return e[ln(a)];
          } else {
            var o = cn(e, $t(a, n).selectionSet, n);
            if ("string" === typeof o) return o;
          }
        }
      }
      function fn(e) {
        return "Field" === e.kind;
      }
      function dn(e) {
        return "InlineFragment" === e.kind;
      }
      function pn(e) {
        __DEV__
          ? st(
              e && "Document" === e.kind,
              'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
            )
          : st(e && "Document" === e.kind, 47);
        var t = e.definitions
          .filter(function (e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function (e) {
            if ("OperationDefinition" !== e.kind)
              throw __DEV__
                ? new ut(
                    'Schema type definitions not allowed in queries. Found: "'.concat(
                      e.kind,
                      '"'
                    )
                  )
                : new ut(48);
            return e;
          });
        return (
          __DEV__
            ? st(
                t.length <= 1,
                "Ambiguous GraphQL document: contains ".concat(
                  t.length,
                  " operations"
                )
              )
            : st(t.length <= 1, 49),
          e
        );
      }
      function hn(e) {
        return (
          pn(e),
          e.definitions.filter(function (e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function vn(e) {
        return (
          e.definitions
            .filter(function (e) {
              return "OperationDefinition" === e.kind && e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function yn(e) {
        return e.definitions.filter(function (e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function mn(e) {
        var t = hn(e);
        return (
          __DEV__
            ? st(
                t && "query" === t.operation,
                "Must contain a query definition."
              )
            : st(t && "query" === t.operation, 50),
          t
        );
      }
      function gn(e) {
        var t;
        pn(e);
        for (var n = 0, r = e.definitions; n < r.length; n++) {
          var i = r[n];
          if ("OperationDefinition" === i.kind) {
            var a = i.operation;
            if ("query" === a || "mutation" === a || "subscription" === a)
              return i;
          }
          "FragmentDefinition" !== i.kind || t || (t = i);
        }
        if (t) return t;
        throw __DEV__
          ? new ut(
              "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
            )
          : new ut(54);
      }
      function bn(e) {
        var t = Object.create(null),
          n = e && e.variableDefinitions;
        return (
          n &&
            n.length &&
            n.forEach(function (e) {
              e.defaultValue && nn(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
      function wn(e, t) {
        return t ? t(e) : Gt.of();
      }
      function kn(e) {
        return "function" === typeof e ? new On(e) : e;
      }
      function En(e) {
        return e.request.length <= 1;
      }
      var Sn,
        xn,
        _n = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.link = n), r;
          }
          return Xe(t, e), t;
        })(Error),
        On = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return Gt.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(kn).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, n, r) {
              var i = kn(n),
                a = kn(r || new e(wn));
              return En(i) && En(a)
                ? new e(function (e) {
                    return t(e)
                      ? i.request(e) || Gt.of()
                      : a.request(e) || Gt.of();
                  })
                : new e(function (e, n) {
                    return t(e)
                      ? i.request(e, n) || Gt.of()
                      : a.request(e, n) || Gt.of();
                  });
            }),
            (e.execute = function (e, t) {
              return (
                e.request(
                  (function (e, t) {
                    var n = $e({}, e);
                    return (
                      Object.defineProperty(t, "setContext", {
                        enumerable: !1,
                        value: function (e) {
                          n = $e($e({}, n), "function" === typeof e ? e(n) : e);
                        },
                      }),
                      Object.defineProperty(t, "getContext", {
                        enumerable: !1,
                        value: function () {
                          return $e({}, n);
                        },
                      }),
                      t
                    );
                  })(
                    t.context,
                    (function (e) {
                      var t = {
                        variables: e.variables || {},
                        extensions: e.extensions || {},
                        operationName: e.operationName,
                        query: e.query,
                      };
                      return (
                        t.operationName ||
                          (t.operationName =
                            "string" !== typeof t.query
                              ? vn(t.query) || void 0
                              : ""),
                        t
                      );
                    })(
                      (function (e) {
                        for (
                          var t = [
                              "query",
                              "operationName",
                              "variables",
                              "extensions",
                              "context",
                            ],
                            n = 0,
                            r = Object.keys(e);
                          n < r.length;
                          n++
                        ) {
                          var i = r[n];
                          if (t.indexOf(i) < 0)
                            throw __DEV__
                              ? new ut("illegal argument: ".concat(i))
                              : new ut(27);
                        }
                        return e;
                      })(t)
                    )
                  )
                ) || Gt.of()
              );
            }),
            (e.concat = function (t, n) {
              var r = kn(t);
              if (En(r))
                return (
                  __DEV__ &&
                    st.warn(
                      new _n(
                        "You are calling concat on a terminating link, which will have no effect",
                        r
                      )
                    ),
                  r
                );
              var i = kn(n);
              return En(i)
                ? new e(function (e) {
                    return (
                      r.request(e, function (e) {
                        return i.request(e) || Gt.of();
                      }) || Gt.of()
                    );
                  })
                : new e(function (e, t) {
                    return (
                      r.request(e, function (e) {
                        return i.request(e, t) || Gt.of();
                      }) || Gt.of()
                    );
                  });
            }),
            (e.prototype.split = function (t, n, r) {
              return this.concat(e.split(t, n, r || new e(wn)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw __DEV__ ? new ut("request is not implemented") : new ut(22);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })(),
        Nn = On.execute,
        Cn = "3.7.7",
        Tn = (function (e) {
          function t(e, n, r) {
            d(this, t),
              (this.start = e.start),
              (this.end = n.end),
              (this.startToken = e),
              (this.endToken = n),
              (this.source = r);
          }
          return (
            y(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Location";
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return { start: this.start, end: this.end };
                },
              },
            ]),
            t
          );
        })(),
        Dn = (function (e) {
          function t(e, n, r, i, a, o) {
            d(this, t),
              (this.kind = e),
              (this.start = n),
              (this.end = r),
              (this.line = i),
              (this.column = a),
              (this.value = o),
              (this.prev = null),
              (this.next = null);
          }
          return (
            y(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Token";
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column,
                  };
                },
              },
            ]),
            t
          );
        })(),
        In = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        Pn = new Set(Object.keys(In));
      function jn(e) {
        var t = null === e || void 0 === e ? void 0 : e.kind;
        return "string" === typeof t && Pn.has(t);
      }
      !(function (e) {
        (e.QUERY = "query"),
          (e.MUTATION = "mutation"),
          (e.SUBSCRIPTION = "subscription");
      })(Sn || (Sn = {})),
        (function (e) {
          (e.NAME = "Name"),
            (e.DOCUMENT = "Document"),
            (e.OPERATION_DEFINITION = "OperationDefinition"),
            (e.VARIABLE_DEFINITION = "VariableDefinition"),
            (e.SELECTION_SET = "SelectionSet"),
            (e.FIELD = "Field"),
            (e.ARGUMENT = "Argument"),
            (e.FRAGMENT_SPREAD = "FragmentSpread"),
            (e.INLINE_FRAGMENT = "InlineFragment"),
            (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
            (e.VARIABLE = "Variable"),
            (e.INT = "IntValue"),
            (e.FLOAT = "FloatValue"),
            (e.STRING = "StringValue"),
            (e.BOOLEAN = "BooleanValue"),
            (e.NULL = "NullValue"),
            (e.ENUM = "EnumValue"),
            (e.LIST = "ListValue"),
            (e.OBJECT = "ObjectValue"),
            (e.OBJECT_FIELD = "ObjectField"),
            (e.DIRECTIVE = "Directive"),
            (e.NAMED_TYPE = "NamedType"),
            (e.LIST_TYPE = "ListType"),
            (e.NON_NULL_TYPE = "NonNullType"),
            (e.SCHEMA_DEFINITION = "SchemaDefinition"),
            (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
            (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
            (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
            (e.FIELD_DEFINITION = "FieldDefinition"),
            (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
            (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
            (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
            (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
            (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
            (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
            (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
            (e.SCHEMA_EXTENSION = "SchemaExtension"),
            (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
            (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
            (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
            (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
            (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
            (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
        })(xn || (xn = {}));
      var Rn = Object.freeze({});
      function An(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : In,
            r = new Map(),
            i = 0,
            a = Object.values(xn);
          i < a.length;
          i++
        ) {
          var o = a[i];
          r.set(o, Fn(t, o));
        }
        var u = void 0,
          s = Array.isArray(e),
          c = [e],
          f = -1,
          d = [],
          p = e,
          h = void 0,
          v = void 0,
          y = [],
          m = [];
        do {
          var g = ++f === c.length,
            b = g && 0 !== d.length;
          if (g) {
            if (
              ((h = 0 === m.length ? void 0 : y[y.length - 1]),
              (p = v),
              (v = m.pop()),
              b)
            )
              if (s) {
                p = p.slice();
                var w,
                  k = 0,
                  E = _(d);
                try {
                  for (E.s(); !(w = E.n()).done; ) {
                    var S = l(w.value, 2),
                      x = S[0],
                      O = S[1],
                      N = x - k;
                    null === O ? (p.splice(N, 1), k++) : (p[N] = O);
                  }
                } catch (M) {
                  E.e(M);
                } finally {
                  E.f();
                }
              } else {
                p = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(p)
                );
                var C,
                  T = _(d);
                try {
                  for (T.s(); !(C = T.n()).done; ) {
                    var D = l(C.value, 2),
                      I = D[0],
                      P = D[1];
                    p[I] = P;
                  }
                } catch (M) {
                  T.e(M);
                } finally {
                  T.f();
                }
              }
            (f = u.index),
              (c = u.keys),
              (d = u.edits),
              (s = u.inArray),
              (u = u.prev);
          } else if (v) {
            if (null === (p = v[(h = s ? f : c[f])]) || void 0 === p) continue;
            y.push(h);
          }
          var j,
            R = void 0;
          if (!Array.isArray(p)) {
            var A, F;
            jn(p) || kt(!1, "Invalid AST Node: ".concat(xt(p), "."));
            var L = g
              ? null === (A = r.get(p.kind)) || void 0 === A
                ? void 0
                : A.leave
              : null === (F = r.get(p.kind)) || void 0 === F
              ? void 0
              : F.enter;
            if (
              (R =
                null === L || void 0 === L
                  ? void 0
                  : L.call(t, p, h, v, y, m)) === Rn
            )
              break;
            if (!1 === R) {
              if (!g) {
                y.pop();
                continue;
              }
            } else if (void 0 !== R && (d.push([h, R]), !g)) {
              if (!jn(R)) {
                y.pop();
                continue;
              }
              p = R;
            }
          }
          if ((void 0 === R && b && d.push([h, p]), g)) y.pop();
          else
            (u = { inArray: s, index: f, keys: c, edits: d, prev: u }),
              (c = (s = Array.isArray(p))
                ? p
                : null !== (j = n[p.kind]) && void 0 !== j
                ? j
                : []),
              (f = -1),
              (d = []),
              v && m.push(v),
              (v = p);
        } while (void 0 !== u);
        return 0 !== d.length ? d[d.length - 1][1] : e;
      }
      function Fn(e, t) {
        var n = e[t];
        return "object" === typeof n
          ? n
          : "function" === typeof n
          ? { enter: n, leave: void 0 }
          : { enter: e.enter, leave: e.leave };
      }
      function Ln(e, t) {
        var n = e.directives;
        return (
          !n ||
          !n.length ||
          (function (e) {
            var t = [];
            e &&
              e.length &&
              e.forEach(function (e) {
                if (
                  (function (e) {
                    var t = e.name.value;
                    return "skip" === t || "include" === t;
                  })(e)
                ) {
                  var n = e.arguments,
                    r = e.name.value;
                  __DEV__
                    ? st(
                        n && 1 === n.length,
                        "Incorrect number of arguments for the @".concat(
                          r,
                          " directive."
                        )
                      )
                    : st(n && 1 === n.length, 41);
                  var i = n[0];
                  __DEV__
                    ? st(
                        i.name && "if" === i.name.value,
                        "Invalid argument for the @".concat(r, " directive.")
                      )
                    : st(i.name && "if" === i.name.value, 42);
                  var a = i.value;
                  __DEV__
                    ? st(
                        a &&
                          ("Variable" === a.kind || "BooleanValue" === a.kind),
                        "Argument for the @".concat(
                          r,
                          " directive must be a variable or a boolean value."
                        )
                      )
                    : st(
                        a &&
                          ("Variable" === a.kind || "BooleanValue" === a.kind),
                        43
                      ),
                    t.push({ directive: e, ifArgument: i });
                }
              });
            return t;
          })(n).every(function (e) {
            var n = e.directive,
              r = e.ifArgument,
              i = !1;
            return (
              "Variable" === r.value.kind
                ? ((i = t && t[r.value.name.value]),
                  __DEV__
                    ? st(
                        void 0 !== i,
                        "Invalid variable referenced in @".concat(
                          n.name.value,
                          " directive."
                        )
                      )
                    : st(void 0 !== i, 40))
                : (i = r.value.value),
              "skip" === n.name.value ? !i : i
            );
          })
        );
      }
      function Mn(e, t, n) {
        var r = new Set(e),
          i = r.size;
        return (
          An(t, {
            Directive: function (e) {
              if (r.delete(e.name.value) && (!n || !r.size)) return Rn;
            },
          }),
          n ? !r.size : r.size < i
        );
      }
      function zn(e) {
        return e && Mn(["client", "export"], e, !0);
      }
      var Vn = function (e, t) {
          var n;
          try {
            n = JSON.stringify(e);
          } catch (i) {
            var r = __DEV__
              ? new ut(
                  "Network request failed. "
                    .concat(t, " is not serializable: ")
                    .concat(i.message)
                )
              : new ut(24);
            throw ((r.parseError = i), r);
          }
          return n;
        },
        Qn =
          "function" === typeof WeakMap &&
          "ReactNative" !==
            dt(function () {
              return navigator.product;
            }),
        qn = "function" === typeof WeakSet,
        Un = "function" === typeof Symbol && "function" === typeof Symbol.for,
        Bn = Un && Symbol.asyncIterator,
        Wn =
          "function" ===
          typeof dt(function () {
            return window.document.createElement;
          }),
        Hn =
          dt(function () {
            return navigator.userAgent.indexOf("jsdom") >= 0;
          }) || !1,
        Yn = Wn && !Hn;
      function Kn(e) {
        var t = null,
          n = null,
          r = !1,
          i = [],
          a = [];
        function o(e) {
          if (!n) {
            if (a.length) {
              var t = a.shift();
              if (Array.isArray(t) && t[0]) return t[0]({ value: e, done: !1 });
            }
            i.push(e);
          }
        }
        function u(e) {
          (n = e),
            a.slice().forEach(function (t) {
              t[1](e);
            }),
            !t || t();
        }
        function s() {
          (r = !0),
            a.slice().forEach(function (e) {
              e[0]({ value: void 0, done: !0 });
            }),
            !t || t();
        }
        (t = function () {
          (t = null),
            e.removeListener("data", o),
            e.removeListener("error", u),
            e.removeListener("end", s),
            e.removeListener("finish", s),
            e.removeListener("close", s);
        }),
          e.on("data", o),
          e.on("error", u),
          e.on("end", s),
          e.on("finish", s),
          e.on("close", s);
        var l = {
          next: function () {
            return new Promise(function (e, t) {
              return n
                ? t(n)
                : i.length
                ? e({ value: i.shift(), done: !1 })
                : r
                ? e({ value: void 0, done: !0 })
                : void a.push([e, t]);
            });
          },
        };
        return (
          Bn &&
            (l[Symbol.asyncIterator] = function () {
              return this;
            }),
          l
        );
      }
      function Gn(e) {
        var t = {
          next: function () {
            return e.read();
          },
        };
        return (
          Bn &&
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
          t
        );
      }
      function Jn(e) {
        var t = e;
        if (
          (e.body && (t = e.body),
          (function (e) {
            return !(!Bn || !e[Symbol.asyncIterator]);
          })(t))
        )
          return (function (e) {
            var t,
              n = e[Symbol.asyncIterator]();
            return (
              ((t = {
                next: function () {
                  return n.next();
                },
              })[Symbol.asyncIterator] = function () {
                return this;
              }),
              t
            );
          })(t);
        if (
          (function (e) {
            return !!e.getReader;
          })(t)
        )
          return Gn(t.getReader());
        if (
          (function (e) {
            return !!e.stream;
          })(t)
        )
          return Gn(t.stream().getReader());
        if (
          (function (e) {
            return !!e.arrayBuffer;
          })(t)
        )
          return (function (e) {
            var t = !1,
              n = {
                next: function () {
                  return t
                    ? Promise.resolve({ value: void 0, done: !0 })
                    : ((t = !0),
                      new Promise(function (t, n) {
                        e.then(function (e) {
                          t({ value: e, done: !1 });
                        }).catch(n);
                      }));
                },
              };
            return (
              Bn &&
                (n[Symbol.asyncIterator] = function () {
                  return this;
                }),
              n
            );
          })(t.arrayBuffer());
        if (
          (function (e) {
            return !!e.pipe;
          })(t)
        )
          return Kn(t);
        throw new Error(
          "Unknown body type for responseIterator. Please pass a streamable response."
        );
      }
      var Zn = function (e, t, n) {
          var r = new Error(n);
          throw (
            ((r.name = "ServerError"),
            (r.response = e),
            (r.statusCode = e.status),
            (r.result = t),
            r)
          );
        },
        Xn = Object.prototype.hasOwnProperty;
      function $n(e) {
        var t = {};
        return (
          e.split("\n").forEach(function (e) {
            var n = e.indexOf(":");
            if (n > -1) {
              var r = e.slice(0, n).trim().toLowerCase(),
                i = e.slice(n + 1).trim();
              t[r] = i;
            }
          }),
          t
        );
      }
      function er(e, t) {
        if (e.status >= 300) {
          Zn(
            e,
            (function () {
              try {
                return JSON.parse(t);
              } catch (e) {
                return t;
              }
            })(),
            "Response not successful: Received status code ".concat(e.status)
          );
        }
        try {
          return JSON.parse(t);
        } catch (r) {
          var n = r;
          throw (
            ((n.name = "ServerParseError"),
            (n.response = e),
            (n.statusCode = e.status),
            (n.bodyText = t),
            n)
          );
        }
      }
      function tr(e, t) {
        var n, r;
        "AbortError" !== e.name &&
          (e.result &&
            e.result.errors &&
            e.result.data &&
            (null === (n = t.next) || void 0 === n || n.call(t, e.result)),
          null === (r = t.error) || void 0 === r || r.call(t, e));
      }
      function nr(e, t, n) {
        var r;
        ((r = t),
        function (e) {
          return e
            .text()
            .then(function (t) {
              return er(e, t);
            })
            .then(function (t) {
              return (
                e.status >= 300 &&
                  Zn(
                    e,
                    t,
                    "Response not successful: Received status code ".concat(
                      e.status
                    )
                  ),
                Array.isArray(t) ||
                  Xn.call(t, "data") ||
                  Xn.call(t, "errors") ||
                  Zn(
                    e,
                    t,
                    "Server response was missing for query '".concat(
                      Array.isArray(r)
                        ? r.map(function (e) {
                            return e.operationName;
                          })
                        : r.operationName,
                      "'."
                    )
                  ),
                t
              );
            });
        })(e)
          .then(function (e) {
            var t, r;
            null === (t = n.next) || void 0 === t || t.call(n, e),
              null === (r = n.complete) || void 0 === r || r.call(n);
          })
          .catch(function (e) {
            return tr(e, n);
          });
      }
      function rr(e) {
        return 9 === e || 32 === e;
      }
      function ir(e) {
        return e >= 48 && e <= 57;
      }
      function ar(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function or(e) {
        return ar(e) || 95 === e;
      }
      function ur(e) {
        return ar(e) || ir(e) || 95 === e;
      }
      function sr(e) {
        for (
          var t, n = Number.MAX_SAFE_INTEGER, r = null, i = -1, a = 0;
          a < e.length;
          ++a
        ) {
          var o,
            u = e[a],
            s = lr(u);
          s !== u.length &&
            ((r = null !== (o = r) && void 0 !== o ? o : a),
            (i = a),
            0 !== a && s < n && (n = s));
        }
        return e
          .map(function (e, t) {
            return 0 === t ? e : e.slice(n);
          })
          .slice(null !== (t = r) && void 0 !== t ? t : 0, i + 1);
      }
      function lr(e) {
        for (var t = 0; t < e.length && rr(e.charCodeAt(t)); ) ++t;
        return t;
      }
      var cr = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function fr(e) {
        return dr[e.charCodeAt(0)];
      }
      var dr = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F",
      ];
      function pr(e) {
        return An(e, hr);
      }
      var hr = {
        Name: {
          leave: function (e) {
            return e.value;
          },
        },
        Variable: {
          leave: function (e) {
            return "$" + e.name;
          },
        },
        Document: {
          leave: function (e) {
            return vr(e.definitions, "\n\n");
          },
        },
        OperationDefinition: {
          leave: function (e) {
            var t = mr("(", vr(e.variableDefinitions, ", "), ")"),
              n = vr(
                [e.operation, vr([e.name, t]), vr(e.directives, " ")],
                " "
              );
            return ("query" === n ? "" : n + " ") + e.selectionSet;
          },
        },
        VariableDefinition: {
          leave: function (e) {
            var t = e.variable,
              n = e.type,
              r = e.defaultValue,
              i = e.directives;
            return t + ": " + n + mr(" = ", r) + mr(" ", vr(i, " "));
          },
        },
        SelectionSet: {
          leave: function (e) {
            return yr(e.selections);
          },
        },
        Field: {
          leave: function (e) {
            var t = e.alias,
              n = e.name,
              r = e.arguments,
              i = e.directives,
              a = e.selectionSet,
              o = mr("", t, ": ") + n,
              u = o + mr("(", vr(r, ", "), ")");
            return (
              u.length > 80 && (u = o + mr("(\n", gr(vr(r, "\n")), "\n)")),
              vr([u, vr(i, " "), a], " ")
            );
          },
        },
        Argument: {
          leave: function (e) {
            return e.name + ": " + e.value;
          },
        },
        FragmentSpread: {
          leave: function (e) {
            return "..." + e.name + mr(" ", vr(e.directives, " "));
          },
        },
        InlineFragment: {
          leave: function (e) {
            var t = e.typeCondition,
              n = e.directives,
              r = e.selectionSet;
            return vr(["...", mr("on ", t), vr(n, " "), r], " ");
          },
        },
        FragmentDefinition: {
          leave: function (e) {
            var t = e.name,
              n = e.typeCondition,
              r = e.variableDefinitions,
              i = e.directives,
              a = e.selectionSet;
            return (
              "fragment ".concat(t).concat(mr("(", vr(r, ", "), ")"), " ") +
              "on ".concat(n, " ").concat(mr("", vr(i, " "), " ")) +
              a
            );
          },
        },
        IntValue: {
          leave: function (e) {
            return e.value;
          },
        },
        FloatValue: {
          leave: function (e) {
            return e.value;
          },
        },
        StringValue: {
          leave: function (e) {
            var t = e.value;
            return e.block
              ? (function (e, t) {
                  var n = e.replace(/"""/g, '\\"""'),
                    r = n.split(/\r\n|[\n\r]/g),
                    i = 1 === r.length,
                    a =
                      r.length > 1 &&
                      r.slice(1).every(function (e) {
                        return 0 === e.length || rr(e.charCodeAt(0));
                      }),
                    o = n.endsWith('\\"""'),
                    u = e.endsWith('"') && !o,
                    s = e.endsWith("\\"),
                    l = u || s,
                    c =
                      !(null !== t && void 0 !== t && t.minimize) &&
                      (!i || e.length > 70 || l || a || o),
                    f = "",
                    d = i && rr(e.charCodeAt(0));
                  return (
                    ((c && !d) || a) && (f += "\n"),
                    (f += n),
                    (c || l) && (f += "\n"),
                    '"""' + f + '"""'
                  );
                })(t)
              : '"'.concat(t.replace(cr, fr), '"');
          },
        },
        BooleanValue: {
          leave: function (e) {
            return e.value ? "true" : "false";
          },
        },
        NullValue: {
          leave: function () {
            return "null";
          },
        },
        EnumValue: {
          leave: function (e) {
            return e.value;
          },
        },
        ListValue: {
          leave: function (e) {
            return "[" + vr(e.values, ", ") + "]";
          },
        },
        ObjectValue: {
          leave: function (e) {
            return "{" + vr(e.fields, ", ") + "}";
          },
        },
        ObjectField: {
          leave: function (e) {
            return e.name + ": " + e.value;
          },
        },
        Directive: {
          leave: function (e) {
            return "@" + e.name + mr("(", vr(e.arguments, ", "), ")");
          },
        },
        NamedType: {
          leave: function (e) {
            return e.name;
          },
        },
        ListType: {
          leave: function (e) {
            return "[" + e.type + "]";
          },
        },
        NonNullType: {
          leave: function (e) {
            return e.type + "!";
          },
        },
        SchemaDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.directives,
              r = e.operationTypes;
            return mr("", t, "\n") + vr(["schema", vr(n, " "), yr(r)], " ");
          },
        },
        OperationTypeDefinition: {
          leave: function (e) {
            return e.operation + ": " + e.type;
          },
        },
        ScalarTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives;
            return mr("", t, "\n") + vr(["scalar", n, vr(r, " ")], " ");
          },
        },
        ObjectTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.interfaces,
              i = e.directives,
              a = e.fields;
            return (
              mr("", t, "\n") +
              vr(
                ["type", n, mr("implements ", vr(r, " & ")), vr(i, " "), yr(a)],
                " "
              )
            );
          },
        },
        FieldDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.arguments,
              i = e.type,
              a = e.directives;
            return (
              mr("", t, "\n") +
              n +
              (br(r)
                ? mr("(\n", gr(vr(r, "\n")), "\n)")
                : mr("(", vr(r, ", "), ")")) +
              ": " +
              i +
              mr(" ", vr(a, " "))
            );
          },
        },
        InputValueDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.type,
              i = e.defaultValue,
              a = e.directives;
            return (
              mr("", t, "\n") + vr([n + ": " + r, mr("= ", i), vr(a, " ")], " ")
            );
          },
        },
        InterfaceTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.interfaces,
              i = e.directives,
              a = e.fields;
            return (
              mr("", t, "\n") +
              vr(
                [
                  "interface",
                  n,
                  mr("implements ", vr(r, " & ")),
                  vr(i, " "),
                  yr(a),
                ],
                " "
              )
            );
          },
        },
        UnionTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.types;
            return (
              mr("", t, "\n") +
              vr(["union", n, vr(r, " "), mr("= ", vr(i, " | "))], " ")
            );
          },
        },
        EnumTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.values;
            return mr("", t, "\n") + vr(["enum", n, vr(r, " "), yr(i)], " ");
          },
        },
        EnumValueDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives;
            return mr("", t, "\n") + vr([n, vr(r, " ")], " ");
          },
        },
        InputObjectTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.fields;
            return mr("", t, "\n") + vr(["input", n, vr(r, " "), yr(i)], " ");
          },
        },
        DirectiveDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.arguments,
              i = e.repeatable,
              a = e.locations;
            return (
              mr("", t, "\n") +
              "directive @" +
              n +
              (br(r)
                ? mr("(\n", gr(vr(r, "\n")), "\n)")
                : mr("(", vr(r, ", "), ")")) +
              (i ? " repeatable" : "") +
              " on " +
              vr(a, " | ")
            );
          },
        },
        SchemaExtension: {
          leave: function (e) {
            var t = e.directives,
              n = e.operationTypes;
            return vr(["extend schema", vr(t, " "), yr(n)], " ");
          },
        },
        ScalarTypeExtension: {
          leave: function (e) {
            return vr(["extend scalar", e.name, vr(e.directives, " ")], " ");
          },
        },
        ObjectTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.interfaces,
              r = e.directives,
              i = e.fields;
            return vr(
              [
                "extend type",
                t,
                mr("implements ", vr(n, " & ")),
                vr(r, " "),
                yr(i),
              ],
              " "
            );
          },
        },
        InterfaceTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.interfaces,
              r = e.directives,
              i = e.fields;
            return vr(
              [
                "extend interface",
                t,
                mr("implements ", vr(n, " & ")),
                vr(r, " "),
                yr(i),
              ],
              " "
            );
          },
        },
        UnionTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.types;
            return vr(
              ["extend union", t, vr(n, " "), mr("= ", vr(r, " | "))],
              " "
            );
          },
        },
        EnumTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.values;
            return vr(["extend enum", t, vr(n, " "), yr(r)], " ");
          },
        },
        InputObjectTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.fields;
            return vr(["extend input", t, vr(n, " "), yr(r)], " ");
          },
        },
      };
      function vr(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null !==
          (t =
            null === e || void 0 === e
              ? void 0
              : e
                  .filter(function (e) {
                    return e;
                  })
                  .join(n)) && void 0 !== t
          ? t
          : "";
      }
      function yr(e) {
        return mr("{\n", gr(vr(e, "\n")), "\n}");
      }
      function mr(e, t) {
        return null != t && "" !== t
          ? e +
              t +
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "")
          : "";
      }
      function gr(e) {
        return mr("  ", e.replace(/\n/g, "\n  "));
      }
      function br(e) {
        var t;
        return (
          null !==
            (t =
              null === e || void 0 === e
                ? void 0
                : e.some(function (e) {
                    return e.includes("\n");
                  })) &&
          void 0 !== t &&
          t
        );
      }
      var wr = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1,
          },
          headers: { accept: "*/*", "content-type": "application/json" },
          options: { method: "POST" },
        },
        kr = function (e, t) {
          return t(e);
        };
      function Er(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = {},
          a = {};
        n.forEach(function (e) {
          (i = $e($e($e({}, i), e.options), {
            headers: $e($e({}, i.headers), e.headers),
          })),
            e.credentials && (i.credentials = e.credentials),
            (a = $e($e({}, a), e.http));
        }),
          i.headers &&
            (i.headers = (function (e, t) {
              if (!t) {
                var n = Object.create(null);
                return (
                  Object.keys(Object(e)).forEach(function (t) {
                    n[t.toLowerCase()] = e[t];
                  }),
                  n
                );
              }
              var r = Object.create(null);
              Object.keys(Object(e)).forEach(function (t) {
                r[t.toLowerCase()] = { originalName: t, value: e[t] };
              });
              var i = Object.create(null);
              return (
                Object.keys(r).forEach(function (e) {
                  i[r[e].originalName] = r[e].value;
                }),
                i
              );
            })(i.headers, a.preserveHeaderCase));
        var o = e.operationName,
          u = e.extensions,
          s = e.variables,
          l = e.query,
          c = { operationName: o, variables: s };
        return (
          a.includeExtensions && (c.extensions = u),
          a.includeQuery && (c.query = t(l, pr)),
          { options: i, body: c }
        );
      }
      function Sr(e) {
        return new Gt(function (t) {
          t.error(e);
        });
      }
      var xr = dt(function () {
          return fetch;
        }),
        _r = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            n = void 0 === t ? "/graphql" : t,
            r = e.fetch,
            i = e.print,
            a = void 0 === i ? kr : i,
            o = e.includeExtensions,
            u = e.preserveHeaderCase,
            s = e.useGETForQueries,
            l = e.includeUnusedVariables,
            c = void 0 !== l && l,
            f = et(e, [
              "uri",
              "fetch",
              "print",
              "includeExtensions",
              "preserveHeaderCase",
              "useGETForQueries",
              "includeUnusedVariables",
            ]);
          __DEV__ &&
            (function (e) {
              if (!e && "undefined" === typeof fetch)
                throw __DEV__
                  ? new ut(
                      "\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "
                    )
                  : new ut(23);
            })(r || xr);
          var d = {
            http: { includeExtensions: o, preserveHeaderCase: u },
            options: f.fetchOptions,
            credentials: f.credentials,
            headers: f.headers,
          };
          return new On(function (e) {
            var t = (function (e, t) {
                var n = e.getContext().uri;
                return n || ("function" === typeof t ? t(e) : t || "/graphql");
              })(e, n),
              i = e.getContext(),
              o = {};
            if (i.clientAwareness) {
              var u = i.clientAwareness,
                l = u.name,
                f = u.version;
              l && (o["apollographql-client-name"] = l),
                f && (o["apollographql-client-version"] = f);
            }
            var p,
              h = $e($e({}, o), i.headers),
              v = {
                http: i.http,
                options: i.fetchOptions,
                credentials: i.credentials,
                headers: h,
              },
              y = Er(e, a, wr, d, v),
              m = y.options,
              g = y.body;
            if (g.variables && !c) {
              var b = new Set(Object.keys(g.variables));
              An(e.query, {
                Variable: function (e, t, n) {
                  n &&
                    "VariableDefinition" !== n.kind &&
                    b.delete(e.name.value);
                },
              }),
                b.size &&
                  ((g.variables = $e({}, g.variables)),
                  b.forEach(function (e) {
                    delete g.variables[e];
                  }));
            }
            if (!m.signal) {
              var w = (function () {
                  if ("undefined" === typeof AbortController)
                    return { controller: !1, signal: !1 };
                  var e = new AbortController();
                  return { controller: e, signal: e.signal };
                })(),
                k = w.controller,
                E = w.signal;
              (p = k) && (m.signal = E);
            }
            if (
              (s &&
                !e.query.definitions.some(function (e) {
                  return (
                    "OperationDefinition" === e.kind &&
                    "mutation" === e.operation
                  );
                }) &&
                (m.method = "GET"),
              Mn(["defer"], e.query) &&
                ((m.headers = m.headers || {}),
                (m.headers.accept =
                  "multipart/mixed; deferSpec=20220824, application/json")),
              "GET" === m.method)
            ) {
              var S = (function (e, t) {
                  var n = [],
                    r = function (e, t) {
                      n.push("".concat(e, "=").concat(encodeURIComponent(t)));
                    };
                  if (
                    ("query" in t && r("query", t.query),
                    t.operationName && r("operationName", t.operationName),
                    t.variables)
                  ) {
                    var i = void 0;
                    try {
                      i = Vn(t.variables, "Variables map");
                    } catch (_) {
                      return { parseError: _ };
                    }
                    r("variables", i);
                  }
                  if (t.extensions) {
                    var a = void 0;
                    try {
                      a = Vn(t.extensions, "Extensions map");
                    } catch (_) {
                      return { parseError: _ };
                    }
                    r("extensions", a);
                  }
                  var o = "",
                    u = e,
                    s = e.indexOf("#");
                  -1 !== s && ((o = e.substr(s)), (u = e.substr(0, s)));
                  var l = -1 === u.indexOf("?") ? "?" : "&";
                  return { newURI: u + l + n.join("&") + o };
                })(t, g),
                x = S.newURI,
                _ = S.parseError;
              if (_) return Sr(_);
              t = x;
            } else
              try {
                m.body = Vn(g, "Payload");
              } catch (_) {
                return Sr(_);
              }
            return new Gt(function (n) {
              return (
                (
                  r ||
                  dt(function () {
                    return fetch;
                  }) ||
                  xr
                )(t, m)
                  .then(function (t) {
                    var r;
                    e.setContext({ response: t });
                    var i =
                      null === (r = t.headers) || void 0 === r
                        ? void 0
                        : r.get("content-type");
                    return null !== i && /^multipart\/mixed/i.test(i)
                      ? (function (e, t) {
                          var n, r, i;
                          return tt(this, void 0, void 0, function () {
                            var a,
                              o,
                              u,
                              s,
                              l,
                              c,
                              f,
                              d,
                              p,
                              h,
                              v,
                              y,
                              m,
                              g,
                              b,
                              w,
                              k,
                              E,
                              S,
                              x;
                            return nt(this, function (_) {
                              switch (_.label) {
                                case 0:
                                  if (void 0 === TextDecoder)
                                    throw new Error(
                                      "TextDecoder must be defined in the environment: please import a polyfill."
                                    );
                                  (a = new TextDecoder("utf-8")),
                                    (o =
                                      null === (n = e.headers) || void 0 === n
                                        ? void 0
                                        : n.get("content-type")),
                                    (u = "boundary="),
                                    (s = (
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.includes(u)
                                    )
                                      ? null === o || void 0 === o
                                        ? void 0
                                        : o
                                            .substring(
                                              (null === o || void 0 === o
                                                ? void 0
                                                : o.indexOf(u)) + u.length
                                            )
                                            .replace(/['"]/g, "")
                                            .replace(/\;(.*)/gm, "")
                                            .trim()
                                      : "-"),
                                    (l = "--".concat(s)),
                                    (c = ""),
                                    (f = Jn(e)),
                                    (d = !0),
                                    (_.label = 1);
                                case 1:
                                  return d ? [4, f.next()] : [3, 3];
                                case 2:
                                  for (
                                    p = _.sent(),
                                      h = p.value,
                                      v = p.done,
                                      y =
                                        "string" === typeof h ? h : a.decode(h),
                                      d = !v,
                                      m = (c += y).indexOf(l);
                                    m > -1;

                                  ) {
                                    if (
                                      ((g = void 0),
                                      (x = [
                                        c.slice(0, m),
                                        c.slice(m + l.length),
                                      ]),
                                      (c = x[1]),
                                      (g = x[0]).trim())
                                    ) {
                                      if (
                                        ((b = g.indexOf("\r\n\r\n")),
                                        (w = $n(g.slice(0, b))),
                                        (k = w["content-type"]) &&
                                          -1 ===
                                            k
                                              .toLowerCase()
                                              .indexOf("application/json"))
                                      )
                                        throw new Error(
                                          "Unsupported patch content type: application/json is required."
                                        );
                                      E = g.slice(b);
                                      try {
                                        (S = er(e, E.replace("\r\n", ""))),
                                          (Object.keys(S).length > 1 ||
                                            "data" in S ||
                                            "incremental" in S ||
                                            "errors" in S) &&
                                            (null === (r = t.next) ||
                                              void 0 === r ||
                                              r.call(t, S));
                                      } catch (O) {
                                        tr(O, t);
                                      }
                                    }
                                    m = c.indexOf(l);
                                  }
                                  return [3, 1];
                                case 3:
                                  return (
                                    null === (i = t.complete) ||
                                      void 0 === i ||
                                      i.call(t),
                                    [2]
                                  );
                              }
                            });
                          });
                        })(t, n)
                      : nr(t, e, n);
                  })
                  .catch(function (e) {
                    return tr(e, n);
                  }),
                function () {
                  p && p.abort();
                }
              );
            });
          });
        },
        Or = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, _r(t).request) || this;
            return (n.options = t), n;
          }
          return Xe(t, e), t;
        })(On),
        Nr = Object.prototype,
        Cr = Nr.toString,
        Tr = Nr.hasOwnProperty,
        Dr = Function.prototype.toString,
        Ir = new Map();
      function Pr(e, t) {
        try {
          return jr(e, t);
        } finally {
          Ir.clear();
        }
      }
      function jr(e, t) {
        if (e === t) return !0;
        var n = Cr.call(e);
        if (n !== Cr.call(t)) return !1;
        switch (n) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]":
            if (Lr(e, t)) return !0;
            var r = Rr(e),
              i = Rr(t),
              a = r.length;
            if (a !== i.length) return !1;
            for (var o = 0; o < a; ++o) if (!Tr.call(t, r[o])) return !1;
            for (o = 0; o < a; ++o) {
              var u = r[o];
              if (!jr(e[u], t[u])) return !1;
            }
            return !0;
          case "[object Error]":
            return e.name === t.name && e.message === t.message;
          case "[object Number]":
            if (e !== e) return t !== t;
          case "[object Boolean]":
          case "[object Date]":
            return +e === +t;
          case "[object RegExp]":
          case "[object String]":
            return e == "".concat(t);
          case "[object Map]":
          case "[object Set]":
            if (e.size !== t.size) return !1;
            if (Lr(e, t)) return !0;
            for (var s = e.entries(), l = "[object Map]" === n; ; ) {
              var c = s.next();
              if (c.done) break;
              var f = c.value,
                d = f[0],
                p = f[1];
              if (!t.has(d)) return !1;
              if (l && !jr(p, t.get(d))) return !1;
            }
            return !0;
          case "[object Uint16Array]":
          case "[object Uint8Array]":
          case "[object Uint32Array]":
          case "[object Int32Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object ArrayBuffer]":
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          case "[object DataView]":
            var h = e.byteLength;
            if (h === t.byteLength) for (; h-- && e[h] === t[h]; );
            return -1 === h;
          case "[object AsyncFunction]":
          case "[object GeneratorFunction]":
          case "[object AsyncGeneratorFunction]":
          case "[object Function]":
            var v = Dr.call(e);
            return (
              v === Dr.call(t) &&
              !(function (e, t) {
                var n = e.length - t.length;
                return n >= 0 && e.indexOf(t, n) === n;
              })(v, Fr)
            );
        }
        return !1;
      }
      function Rr(e) {
        return Object.keys(e).filter(Ar, e);
      }
      function Ar(e) {
        return void 0 !== this[e];
      }
      var Fr = "{ [native code] }";
      function Lr(e, t) {
        var n = Ir.get(e);
        if (n) {
          if (n.has(t)) return !0;
        } else Ir.set(e, (n = new Set()));
        return n.add(t), !1;
      }
      function Mr(e) {
        return Array.isArray(e) && e.length > 0;
      }
      var zr = Object.prototype.hasOwnProperty;
      function Vr() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Qr(e);
      }
      function Qr(e) {
        var t = e[0] || {},
          n = e.length;
        if (n > 1)
          for (var r = new Ur(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
        return t;
      }
      var qr = function (e, t, n) {
          return this.merge(e[n], t[n]);
        },
        Ur = (function () {
          function e(e) {
            void 0 === e && (e = qr),
              (this.reconciler = e),
              (this.isObject = Jt),
              (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var n = this, r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              return Jt(t) && Jt(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (zr.call(e, i)) {
                      var a = e[i];
                      if (t[i] !== a) {
                        var o = n.reconciler.apply(n, rt([e, t, i], r, !1));
                        o !== a && ((e = n.shallowCopyForMerge(e))[i] = o);
                      }
                    } else (e = n.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (
                Jt(e) &&
                  (this.pastCopies.has(e) ||
                    ((e = Array.isArray(e)
                      ? e.slice(0)
                      : $e({ __proto__: Object.getPrototypeOf(e) }, e)),
                    this.pastCopies.add(e))),
                e
              );
            }),
            e
          );
        })();
      function Br(e) {
        return "incremental" in e;
      }
      function Wr(e, t) {
        var n = e,
          r = new Ur();
        return (
          Br(t) &&
            Mr(t.incremental) &&
            t.incremental.forEach(function (e) {
              for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
                var o = i[a],
                  u = !isNaN(+o) ? [] : {};
                (u[o] = t), (t = u);
              }
              n = r.merge(n, t);
            }),
          n
        );
      }
      var Hr = function () {
          return Object.create(null);
        },
        Yr = Array.prototype,
        Kr = Yr.forEach,
        Gr = Yr.slice,
        Jr = (function () {
          function e(e, t) {
            void 0 === e && (e = !0),
              void 0 === t && (t = Hr),
              (this.weakness = e),
              (this.makeData = t);
          }
          return (
            (e.prototype.lookup = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this.lookupArray(e);
            }),
            (e.prototype.lookupArray = function (e) {
              var t = this;
              return (
                Kr.call(e, function (e) {
                  return (t = t.getChildTrie(e));
                }),
                t.data || (t.data = this.makeData(Gr.call(e)))
              );
            }),
            (e.prototype.getChildTrie = function (t) {
              var n =
                  this.weakness &&
                  (function (e) {
                    switch (typeof e) {
                      case "object":
                        if (null === e) break;
                      case "function":
                        return !0;
                    }
                    return !1;
                  })(t)
                    ? this.weak || (this.weak = new WeakMap())
                    : this.strong || (this.strong = new Map()),
                r = n.get(t);
              return (
                r || n.set(t, (r = new e(this.weakness, this.makeData))), r
              );
            }),
            e
          );
        })();
      function Zr() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Object.create(null);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (t) {
                var r = e[t];
                void 0 !== r && (n[t] = r);
              });
          }),
          n
        );
      }
      var Xr = Object.prototype.hasOwnProperty;
      function $r(e) {
        return null === e || void 0 === e;
      }
      var ei = Array.isArray;
      function ti(e, t) {
        var n = e.__typename,
          r = e.id,
          i = e._id;
        if (
          "string" === typeof n &&
          (t &&
            (t.keyObject = $r(r) ? ($r(i) ? void 0 : { _id: i }) : { id: r }),
          $r(r) && !$r(i) && (r = i),
          !$r(r))
        )
          return ""
            .concat(n, ":")
            .concat(
              "number" === typeof r || "string" === typeof r
                ? r
                : JSON.stringify(r)
            );
      }
      var ni = {
        dataIdFromObject: ti,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1,
      };
      function ri(e) {
        var t = e.canonizeResults;
        return void 0 === t ? ni.canonizeResults : t;
      }
      var ii = /^[_a-z][_0-9a-z]*/i;
      function ai(e) {
        var t = e.match(ii);
        return t ? t[0] : e;
      }
      function oi(e, t, n) {
        return (
          !!Jt(t) &&
          (ei(t)
            ? t.every(function (t) {
                return oi(e, t, n);
              })
            : e.selections.every(function (e) {
                if (fn(e) && Ln(e, n)) {
                  var r = ln(e);
                  return (
                    Xr.call(t, r) &&
                    (!e.selectionSet || oi(e.selectionSet, t[r], n))
                  );
                }
                return !0;
              }))
        );
      }
      function ui(e) {
        return Jt(e) && !tn(e) && !ei(e);
      }
      function si(e, t) {
        var n = Xt(yn(e));
        return {
          fragmentMap: n,
          lookupFragment: function (e) {
            var r = n[e];
            return !r && t && (r = t.lookup(e)), r || null;
          },
        };
      }
      var li,
        ci,
        fi = (function () {
          function e() {
            (this.known = new (qn ? WeakSet : Set)()),
              (this.pool = new Jr(Qn)),
              (this.passes = new WeakMap()),
              (this.keysByJSON = new Map()),
              (this.empty = this.admit({}));
          }
          return (
            (e.prototype.isKnown = function (e) {
              return Jt(e) && this.known.has(e);
            }),
            (e.prototype.pass = function (e) {
              if (Jt(e)) {
                var t = (function (e) {
                  return Jt(e)
                    ? ei(e)
                      ? e.slice(0)
                      : $e({ __proto__: Object.getPrototypeOf(e) }, e)
                    : e;
                })(e);
                return this.passes.set(t, e), t;
              }
              return e;
            }),
            (e.prototype.admit = function (e) {
              var t = this;
              if (Jt(e)) {
                var n = this.passes.get(e);
                if (n) return n;
                switch (Object.getPrototypeOf(e)) {
                  case Array.prototype:
                    if (this.known.has(e)) return e;
                    var r = e.map(this.admit, this);
                    return (
                      (u = this.pool.lookupArray(r)).array ||
                        (this.known.add((u.array = r)),
                        __DEV__ && Object.freeze(r)),
                      u.array
                    );
                  case null:
                  case Object.prototype:
                    if (this.known.has(e)) return e;
                    var i = Object.getPrototypeOf(e),
                      a = [i],
                      o = this.sortedKeys(e);
                    a.push(o.json);
                    var u,
                      s = a.length;
                    if (
                      (o.sorted.forEach(function (n) {
                        a.push(t.admit(e[n]));
                      }),
                      !(u = this.pool.lookupArray(a)).object)
                    ) {
                      var l = (u.object = Object.create(i));
                      this.known.add(l),
                        o.sorted.forEach(function (e, t) {
                          l[e] = a[s + t];
                        }),
                        __DEV__ && Object.freeze(l);
                    }
                    return u.object;
                }
              }
              return e;
            }),
            (e.prototype.sortedKeys = function (e) {
              var t = Object.keys(e),
                n = this.pool.lookupArray(t);
              if (!n.keys) {
                t.sort();
                var r = JSON.stringify(t);
                (n.keys = this.keysByJSON.get(r)) ||
                  this.keysByJSON.set(r, (n.keys = { sorted: t, json: r }));
              }
              return n.keys;
            }),
            e
          );
        })(),
        di = Object.assign(
          function (e) {
            if (Jt(e)) {
              void 0 === li && pi();
              var t = li.admit(e),
                n = ci.get(t);
              return void 0 === n && ci.set(t, (n = JSON.stringify(t))), n;
            }
            return JSON.stringify(e);
          },
          { reset: pi }
        );
      function pi() {
        (li = new fi()), (ci = new (Qn ? WeakMap : Map)());
      }
      function hi(e, t, n) {
        return new Gt(function (r) {
          var i = r.next,
            a = r.error,
            o = r.complete,
            u = 0,
            s = !1,
            l = {
              then: function (e) {
                return new Promise(function (t) {
                  return t(e());
                });
              },
            };
          function c(e, t) {
            return e
              ? function (t) {
                  ++u;
                  var n = function () {
                    return e(t);
                  };
                  l = l
                    .then(n, n)
                    .then(
                      function (e) {
                        --u, i && i.call(r, e), s && f.complete();
                      },
                      function (e) {
                        throw (--u, e);
                      }
                    )
                    .catch(function (e) {
                      a && a.call(r, e);
                    });
                }
              : function (e) {
                  return t && t.call(r, e);
                };
          }
          var f = {
              next: c(t, i),
              error: c(n, a),
              complete: function () {
                (s = !0), u || (o && o.call(r));
              },
            },
            d = e.subscribe(f);
          return function () {
            return d.unsubscribe();
          };
        });
      }
      function vi(e) {
        return Mr(yi(e));
      }
      function yi(e) {
        var t = Mr(e.errors) ? e.errors.slice(0) : [];
        return (
          Br(e) &&
            Mr(e.incremental) &&
            e.incremental.forEach(function (e) {
              e.errors && t.push.apply(t, e.errors);
            }),
          t
        );
      }
      function mi(e, t, n) {
        var r = 0;
        return (
          e.forEach(function (n, i) {
            t.call(this, n, i, e) && (e[r++] = n);
          }, n),
          (e.length = r),
          e
        );
      }
      var gi = { kind: "Field", name: { kind: "Name", value: "__typename" } };
      function bi(e, t) {
        return (
          !e ||
          e.selectionSet.selections.every(function (e) {
            return "FragmentSpread" === e.kind && bi(t[e.name.value], t);
          })
        );
      }
      function wi(e) {
        return bi(
          hn(e) ||
            (function (e) {
              __DEV__
                ? st(
                    "Document" === e.kind,
                    'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
                  )
                : st("Document" === e.kind, 51),
                __DEV__
                  ? st(
                      e.definitions.length <= 1,
                      "Fragment must have exactly one definition."
                    )
                  : st(e.definitions.length <= 1, 52);
              var t = e.definitions[0];
              return (
                __DEV__
                  ? st(
                      "FragmentDefinition" === t.kind,
                      "Must be a fragment definition."
                    )
                  : st("FragmentDefinition" === t.kind, 53),
                t
              );
            })(e),
          Xt(yn(e))
        )
          ? null
          : e;
      }
      function ki(e) {
        return function (t) {
          return e.some(function (e) {
            return (e.name && e.name === t.name.value) || (e.test && e.test(t));
          });
        };
      }
      function Ei(e, t) {
        var n = Object.create(null),
          r = [],
          i = Object.create(null),
          a = [],
          o = wi(
            An(t, {
              Variable: {
                enter: function (e, t, r) {
                  "VariableDefinition" !== r.kind && (n[e.name.value] = !0);
                },
              },
              Field: {
                enter: function (t) {
                  if (
                    e &&
                    t.directives &&
                    e.some(function (e) {
                      return e.remove;
                    }) &&
                    t.directives &&
                    t.directives.some(ki(e))
                  )
                    return (
                      t.arguments &&
                        t.arguments.forEach(function (e) {
                          "Variable" === e.value.kind &&
                            r.push({ name: e.value.name.value });
                        }),
                      t.selectionSet &&
                        _i(t.selectionSet).forEach(function (e) {
                          a.push({ name: e.name.value });
                        }),
                      null
                    );
                },
              },
              FragmentSpread: {
                enter: function (e) {
                  i[e.name.value] = !0;
                },
              },
              Directive: {
                enter: function (t) {
                  if (ki(e)(t)) return null;
                },
              },
            })
          );
        return (
          o &&
            mi(r, function (e) {
              return !!e.name && !n[e.name];
            }).length &&
            (o = (function (e, t) {
              var n = (function (e) {
                return function (t) {
                  return e.some(function (e) {
                    return (
                      t.value &&
                      "Variable" === t.value.kind &&
                      t.value.name &&
                      (e.name === t.value.name.value || (e.test && e.test(t)))
                    );
                  });
                };
              })(e);
              return wi(
                An(t, {
                  OperationDefinition: {
                    enter: function (t) {
                      return $e($e({}, t), {
                        variableDefinitions: t.variableDefinitions
                          ? t.variableDefinitions.filter(function (t) {
                              return !e.some(function (e) {
                                return e.name === t.variable.name.value;
                              });
                            })
                          : [],
                      });
                    },
                  },
                  Field: {
                    enter: function (t) {
                      if (
                        e.some(function (e) {
                          return e.remove;
                        })
                      ) {
                        var r = 0;
                        if (
                          (t.arguments &&
                            t.arguments.forEach(function (e) {
                              n(e) && (r += 1);
                            }),
                          1 === r)
                        )
                          return null;
                      }
                    },
                  },
                  Argument: {
                    enter: function (e) {
                      if (n(e)) return null;
                    },
                  },
                })
              );
            })(r, o)),
          o &&
            mi(a, function (e) {
              return !!e.name && !i[e.name];
            }).length &&
            (o = (function (e, t) {
              function n(t) {
                if (
                  e.some(function (e) {
                    return e.name === t.name.value;
                  })
                )
                  return null;
              }
              return wi(
                An(t, {
                  FragmentSpread: { enter: n },
                  FragmentDefinition: { enter: n },
                })
              );
            })(a, o)),
          o
        );
      }
      var Si = Object.assign(
          function (e) {
            return An(e, {
              SelectionSet: {
                enter: function (e, t, n) {
                  if (!n || "OperationDefinition" !== n.kind) {
                    var r = e.selections;
                    if (r)
                      if (
                        !r.some(function (e) {
                          return (
                            fn(e) &&
                            ("__typename" === e.name.value ||
                              0 === e.name.value.lastIndexOf("__", 0))
                          );
                        })
                      ) {
                        var i = n;
                        if (
                          !(
                            fn(i) &&
                            i.directives &&
                            i.directives.some(function (e) {
                              return "export" === e.name.value;
                            })
                          )
                        )
                          return $e($e({}, e), {
                            selections: rt(rt([], r, !0), [gi], !1),
                          });
                      }
                  }
                },
              },
            });
          },
          {
            added: function (e) {
              return e === gi;
            },
          }
        ),
        xi = {
          test: function (e) {
            var t = "connection" === e.name.value;
            return (
              t &&
                ((e.arguments &&
                  e.arguments.some(function (e) {
                    return "key" === e.name.value;
                  })) ||
                  (__DEV__ &&
                    st.warn(
                      "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
                    ))),
              t
            );
          },
        };
      function _i(e) {
        var t = [];
        return (
          e.selections.forEach(function (e) {
            (fn(e) || dn(e)) && e.selectionSet
              ? _i(e.selectionSet).forEach(function (e) {
                  return t.push(e);
                })
              : "FragmentSpread" === e.kind && t.push(e);
          }),
          t
        );
      }
      function Oi(e) {
        return "query" === gn(e).operation
          ? e
          : An(e, {
              OperationDefinition: {
                enter: function (e) {
                  return $e($e({}, e), { operation: "query" });
                },
              },
            });
      }
      var Ni = new Map();
      function Ci(e) {
        var t = Ni.get(e) || 1;
        return (
          Ni.set(e, t + 1),
          ""
            .concat(e, ":")
            .concat(t, ":")
            .concat(Math.random().toString(36).slice(2))
        );
      }
      function Ti(e, t, n) {
        var r = [];
        e.forEach(function (e) {
          return e[t] && r.push(e);
        }),
          r.forEach(function (e) {
            return e[t](n);
          });
      }
      function Di(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: Gt });
        }
        return Un && Symbol.species && t(Symbol.species), t("@@species"), e;
      }
      function Ii(e) {
        return e && "function" === typeof e.then;
      }
      var Pi = (function (e) {
        function t(t) {
          var n =
            e.call(this, function (e) {
              return (
                n.addObserver(e),
                function () {
                  return n.removeObserver(e);
                }
              );
            }) || this;
          return (
            (n.observers = new Set()),
            (n.promise = new Promise(function (e, t) {
              (n.resolve = e), (n.reject = t);
            })),
            (n.handlers = {
              next: function (e) {
                null !== n.sub &&
                  ((n.latest = ["next", e]),
                  n.notify("next", e),
                  Ti(n.observers, "next", e));
              },
              error: function (e) {
                var t = n.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (n.sub = null),
                  (n.latest = ["error", e]),
                  n.reject(e),
                  n.notify("error", e),
                  Ti(n.observers, "error", e));
              },
              complete: function () {
                var e = n.sub;
                if (null !== e) {
                  var t = n.sources.shift();
                  t
                    ? Ii(t)
                      ? t.then(function (e) {
                          return (n.sub = e.subscribe(n.handlers));
                        })
                      : (n.sub = t.subscribe(n.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (n.sub = null),
                      n.latest && "next" === n.latest[0]
                        ? n.resolve(n.latest[1])
                        : n.resolve(),
                      n.notify("complete"),
                      Ti(n.observers, "complete"));
                }
              },
            }),
            (n.nextResultListeners = new Set()),
            (n.cancel = function (e) {
              n.reject(e), (n.sources = []), n.handlers.complete();
            }),
            n.promise.catch(function (e) {}),
            "function" === typeof t && (t = [new Gt(t)]),
            Ii(t)
              ? t.then(function (e) {
                  return n.start(e);
                }, n.handlers.error)
              : n.start(t),
            n
          );
        }
        return (
          Xe(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub &&
              ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                n = e[t];
              n && n.call(e, this.latest[1]),
                null === this.sub && "next" === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) ||
              (this.deliverLastMessage(e), this.observers.add(e));
          }),
          (t.prototype.removeObserver = function (e) {
            this.observers.delete(e) &&
              this.observers.size < 1 &&
              this.handlers.complete();
          }),
          (t.prototype.notify = function (e, t) {
            var n = this.nextResultListeners;
            n.size &&
              ((this.nextResultListeners = new Set()),
              n.forEach(function (n) {
                return n(e, t);
              }));
          }),
          (t.prototype.beforeNext = function (e) {
            var t = !1;
            this.nextResultListeners.add(function (n, r) {
              t || ((t = !0), e(n, r));
            });
          }),
          t
        );
      })(Gt);
      Di(Pi);
      var ji,
        Ri = function (e) {
          var t = "";
          (Mr(e.graphQLErrors) || Mr(e.clientErrors)) &&
            (e.graphQLErrors || [])
              .concat(e.clientErrors || [])
              .forEach(function (e) {
                var n = e ? e.message : "Error message not found.";
                t += "".concat(n, "\n");
              });
          return (
            e.networkError && (t += "".concat(e.networkError.message, "\n")),
            (t = t.replace(/\n$/, ""))
          );
        },
        Ai = (function (e) {
          function t(n) {
            var r = n.graphQLErrors,
              i = n.clientErrors,
              a = n.networkError,
              o = n.errorMessage,
              u = n.extraInfo,
              s = e.call(this, o) || this;
            return (
              (s.name = "ApolloError"),
              (s.graphQLErrors = r || []),
              (s.clientErrors = i || []),
              (s.networkError = a || null),
              (s.message = o || Ri(s)),
              (s.extraInfo = u),
              (s.__proto__ = t.prototype),
              s
            );
          }
          return Xe(t, e), t;
        })(Error);
      function Fi(e) {
        return !!e && e < 7;
      }
      !(function (e) {
        (e[(e.loading = 1)] = "loading"),
          (e[(e.setVariables = 2)] = "setVariables"),
          (e[(e.fetchMore = 3)] = "fetchMore"),
          (e[(e.refetch = 4)] = "refetch"),
          (e[(e.poll = 6)] = "poll"),
          (e[(e.ready = 7)] = "ready"),
          (e[(e.error = 8)] = "error");
      })(ji || (ji = {}));
      var Li = Object.prototype.toString;
      function Mi(e) {
        return zi(e);
      }
      function zi(e, t) {
        switch (Li.call(e)) {
          case "[object Array]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var n = e.slice(0);
            return (
              t.set(e, n),
              n.forEach(function (e, r) {
                n[r] = zi(e, t);
              }),
              n
            );
          case "[object Object]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var r = Object.create(Object.getPrototypeOf(e));
            return (
              t.set(e, r),
              Object.keys(e).forEach(function (n) {
                r[n] = zi(e[n], t);
              }),
              r
            );
          default:
            return e;
        }
      }
      var Vi = Object.assign,
        Qi = Object.hasOwnProperty,
        qi = (function (e) {
          function t(t) {
            var n = t.queryManager,
              r = t.queryInfo,
              i = t.options,
              a =
                e.call(this, function (e) {
                  try {
                    var n = e._subscription._observer;
                    n && !n.error && (n.error = Bi);
                  } catch (t) {}
                  var r = !a.observers.size;
                  a.observers.add(e);
                  var i = a.last;
                  return (
                    i && i.error
                      ? e.error && e.error(i.error)
                      : i && i.result && e.next && e.next(i.result),
                    r && a.reobserve().catch(function () {}),
                    function () {
                      a.observers.delete(e) &&
                        !a.observers.size &&
                        a.tearDownQuery();
                    }
                  );
                }) || this;
            (a.observers = new Set()),
              (a.subscriptions = new Set()),
              (a.queryInfo = r),
              (a.queryManager = n),
              (a.isTornDown = !1);
            var o = n.defaultOptions.watchQuery,
              u = (void 0 === o ? {} : o).fetchPolicy,
              s = void 0 === u ? "cache-first" : u,
              l = i.fetchPolicy,
              c = void 0 === l ? s : l,
              f = i.initialFetchPolicy,
              d = void 0 === f ? ("standby" === c ? s : c) : f;
            (a.options = $e($e({}, i), {
              initialFetchPolicy: d,
              fetchPolicy: c,
            })),
              (a.queryId = r.queryId || n.generateQueryId());
            var p = hn(a.query);
            return (a.queryName = p && p.name && p.name.value), a;
          }
          return (
            Xe(t, e),
            Object.defineProperty(t.prototype, "query", {
              get: function () {
                return this.queryManager.transform(this.options.query).document;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "variables", {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, n) {
                var r = {
                    next: function (n) {
                      t(n),
                        e.observers.delete(r),
                        e.observers.size ||
                          e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: n,
                  },
                  i = e.subscribe(r);
              });
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                n =
                  this.queryInfo.networkStatus ||
                  (t && t.networkStatus) ||
                  ji.ready,
                r = $e($e({}, t), { loading: Fi(n), networkStatus: n }),
                i = this.options.fetchPolicy,
                a = void 0 === i ? "cache-first" : i;
              if (
                "network-only" === a ||
                "no-cache" === a ||
                "standby" === a ||
                this.queryManager.transform(this.options.query)
                  .hasForcedResolvers
              );
              else {
                var o = this.queryInfo.getDiff();
                (o.complete || this.options.returnPartialData) &&
                  (r.data = o.result),
                  Pr(r.data, {}) && (r.data = void 0),
                  o.complete
                    ? (delete r.partial,
                      !o.complete ||
                        r.networkStatus !== ji.loading ||
                        ("cache-first" !== a && "cache-only" !== a) ||
                        ((r.networkStatus = ji.ready), (r.loading = !1)))
                    : (r.partial = !0),
                  !__DEV__ ||
                    o.complete ||
                    this.options.partialRefetch ||
                    r.loading ||
                    r.data ||
                    r.error ||
                    Wi(o.missing);
              }
              return e && this.updateLastResult(r), r;
            }),
            (t.prototype.isDifferentFromLastResult = function (e, t) {
              return (
                !this.last ||
                !Pr(this.last.result, e) ||
                (t && !Pr(this.last.variables, t))
              );
            }),
            (t.prototype.getLast = function (e, t) {
              var n = this.last;
              if (n && n[e] && (!t || Pr(n.variables, this.variables)))
                return n[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast("result", e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast("error", e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                n = { pollInterval: 0 },
                r = this.options.fetchPolicy;
              if (
                ((n.fetchPolicy =
                  "cache-and-network" === r
                    ? r
                    : "no-cache" === r
                    ? "no-cache"
                    : "network-only"),
                __DEV__ && e && Qi.call(e, "variables"))
              ) {
                var i = mn(this.query),
                  a = i.variableDefinitions;
                (a &&
                  a.some(function (e) {
                    return "variables" === e.variable.name.value;
                  })) ||
                  (__DEV__ &&
                    st.warn(
                      "Called refetch("
                        .concat(JSON.stringify(e), ") for query ")
                        .concat(
                          (null === (t = i.name) || void 0 === t
                            ? void 0
                            : t.value) || JSON.stringify(i),
                          ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"
                        )
                    ));
              }
              return (
                e &&
                  !Pr(this.options.variables, e) &&
                  (n.variables = this.options.variables =
                    $e($e({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(n, ji.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                n = $e(
                  $e(
                    {},
                    e.query
                      ? e
                      : $e(
                          $e(
                            $e($e({}, this.options), { query: this.query }),
                            e
                          ),
                          {
                            variables: $e(
                              $e({}, this.options.variables),
                              e.variables
                            ),
                          }
                        )
                  ),
                  { fetchPolicy: "no-cache" }
                ),
                r = this.queryManager.generateQueryId(),
                i = this.queryInfo,
                a = i.networkStatus;
              (i.networkStatus = ji.fetchMore),
                n.notifyOnNetworkStatusChange && this.observe();
              var o = new Set();
              return this.queryManager
                .fetchQuery(r, n, ji.fetchMore)
                .then(function (u) {
                  return (
                    t.queryManager.removeQuery(r),
                    i.networkStatus === ji.fetchMore && (i.networkStatus = a),
                    t.queryManager.cache.batch({
                      update: function (r) {
                        var i = e.updateQuery;
                        i
                          ? r.updateQuery(
                              {
                                query: t.query,
                                variables: t.variables,
                                returnPartialData: !0,
                                optimistic: !1,
                              },
                              function (e) {
                                return i(e, {
                                  fetchMoreResult: u.data,
                                  variables: n.variables,
                                });
                              }
                            )
                          : r.writeQuery({
                              query: n.query,
                              variables: n.variables,
                              data: u.data,
                            });
                      },
                      onWatchUpdated: function (e) {
                        o.add(e.query);
                      },
                    }),
                    u
                  );
                })
                .finally(function () {
                  o.has(t.query) || Ui(t);
                });
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                n = this.queryManager
                  .startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context,
                  })
                  .subscribe({
                    next: function (n) {
                      var r = e.updateQuery;
                      r &&
                        t.updateQuery(function (e, t) {
                          var i = t.variables;
                          return r(e, { subscriptionData: n, variables: i });
                        });
                    },
                    error: function (t) {
                      e.onError
                        ? e.onError(t)
                        : __DEV__ &&
                          st.error("Unhandled GraphQL subscription error", t);
                    },
                  });
              return (
                this.subscriptions.add(n),
                function () {
                  t.subscriptions.delete(n) && n.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.setVariables = function (e) {
              return Pr(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e),
                  this.observers.size
                    ? this.reobserve(
                        {
                          fetchPolicy: this.options.initialFetchPolicy,
                          variables: e,
                        },
                        ji.setVariables
                      )
                    : Promise.resolve());
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                n = e(
                  t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result,
                  { variables: this.variables }
                );
              n &&
                (t.cache.writeQuery({
                  query: this.options.query,
                  data: n,
                  variables: this.variables,
                }),
                t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var n = t.fetchPolicy,
                  r = void 0 === n ? "cache-first" : n,
                  i = t.initialFetchPolicy,
                  a = void 0 === i ? r : i;
                "standby" === r ||
                  ("function" === typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(r, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: a,
                      }))
                    : (t.fetchPolicy =
                        "variables-changed" === e ? a : t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t) {
              return (
                this.queryManager.setObservableQuery(this),
                this.queryManager.fetchQueryObservable(this.queryId, e, t)
              );
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  n = this.options.pollInterval;
                if (n) {
                  if (!t || t.interval !== n) {
                    __DEV__
                      ? st(
                          n,
                          "Attempted to start a polling query without a polling interval."
                        )
                      : st(n, 13),
                      ((t || (this.pollingInfo = {})).interval = n);
                    var r = function () {
                        e.pollingInfo &&
                          (Fi(e.queryInfo.networkStatus)
                            ? i()
                            : e
                                .reobserve(
                                  {
                                    fetchPolicy:
                                      "no-cache" ===
                                      e.options.initialFetchPolicy
                                        ? "no-cache"
                                        : "network-only",
                                  },
                                  ji.poll
                                )
                                .then(i, i));
                      },
                      i = function () {
                        var t = e.pollingInfo;
                        t &&
                          (clearTimeout(t.timeout),
                          (t.timeout = setTimeout(r, t.interval)));
                      };
                    i();
                  }
                } else t && (clearTimeout(t.timeout), delete this.pollingInfo);
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              return (
                void 0 === t && (t = this.variables),
                (this.last = $e($e({}, this.last), {
                  result: this.queryManager.assumeImmutableResults ? e : Mi(e),
                  variables: t,
                })),
                Mr(e.errors) || delete this.last.error,
                this.last
              );
            }),
            (t.prototype.reobserve = function (e, t) {
              var n = this;
              this.isTornDown = !1;
              var r = t === ji.refetch || t === ji.fetchMore || t === ji.poll,
                i = this.options.variables,
                a = this.options.fetchPolicy,
                o = Zr(this.options, e || {}),
                u = r ? o : Vi(this.options, o);
              r ||
                (this.updatePolling(),
                e &&
                  e.variables &&
                  !Pr(e.variables, i) &&
                  "standby" !== u.fetchPolicy &&
                  u.fetchPolicy === a &&
                  (this.applyNextFetchPolicy("variables-changed", u),
                  void 0 === t && (t = ji.setVariables)));
              var s = u.variables && $e({}, u.variables),
                l = this.fetch(u, t),
                c = {
                  next: function (e) {
                    n.reportResult(e, s);
                  },
                  error: function (e) {
                    n.reportError(e, s);
                  },
                };
              return (
                r ||
                  (this.concast &&
                    this.observer &&
                    this.concast.removeObserver(this.observer),
                  (this.concast = l),
                  (this.observer = c)),
                l.addObserver(c),
                l.promise
              );
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var n = this.getLastError();
              (n || this.isDifferentFromLastResult(e, t)) &&
                ((n || !e.partial || this.options.returnPartialData) &&
                  this.updateLastResult(e, t),
                Ti(this.observers, "next", e));
            }),
            (t.prototype.reportError = function (e, t) {
              var n = $e($e({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: ji.error,
                loading: !1,
              });
              this.updateLastResult(n, t),
                Ti(this.observers, "error", (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast &&
                  this.observer &&
                  (this.concast.removeObserver(this.observer),
                  delete this.concast,
                  delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            t
          );
        })(Gt);
      function Ui(e) {
        var t = e.options,
          n = t.fetchPolicy,
          r = t.nextFetchPolicy;
        return "cache-and-network" === n || "network-only" === n
          ? e.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function () {
                return (
                  (this.nextFetchPolicy = r),
                  "function" === typeof r ? r.apply(this, arguments) : n
                );
              },
            })
          : e.reobserve();
      }
      function Bi(e) {
        __DEV__ && st.error("Unhandled error", e.message, e.stack);
      }
      function Wi(e) {
        __DEV__ &&
          e &&
          __DEV__ &&
          st.debug(
            "Missing cache result fields: ".concat(JSON.stringify(e)),
            e
          );
      }
      function Hi(e) {
        return (
          e.kind === xn.FIELD ||
          e.kind === xn.FRAGMENT_SPREAD ||
          e.kind === xn.INLINE_FRAGMENT
        );
      }
      Di(qi);
      var Yi = null,
        Ki = {},
        Gi = 1;
      function Ji(e) {
        try {
          return e();
        } catch (t) {}
      }
      var Zi = "@wry/context:Slot",
        Xi =
          Ji(function () {
            return globalThis;
          }) ||
          Ji(function () {
            return n.g;
          }) ||
          Object.create(null),
        $i =
          Xi[Zi] ||
          Array[Zi] ||
          (function (e) {
            try {
              Object.defineProperty(Xi, Zi, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            } finally {
              return e;
            }
          })(
            (function () {
              function e() {
                this.id = [
                  "slot",
                  Gi++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(":");
              }
              return (
                (e.prototype.hasValue = function () {
                  for (var e = Yi; e; e = e.parent)
                    if (this.id in e.slots) {
                      var t = e.slots[this.id];
                      if (t === Ki) break;
                      return e !== Yi && (Yi.slots[this.id] = t), !0;
                    }
                  return Yi && (Yi.slots[this.id] = Ki), !1;
                }),
                (e.prototype.getValue = function () {
                  if (this.hasValue()) return Yi.slots[this.id];
                }),
                (e.prototype.withValue = function (e, t, n, r) {
                  var i,
                    a = (((i = { __proto__: null })[this.id] = e), i),
                    o = Yi;
                  Yi = { parent: o, slots: a };
                  try {
                    return t.apply(r, n);
                  } finally {
                    Yi = o;
                  }
                }),
                (e.bind = function (e) {
                  var t = Yi;
                  return function () {
                    var n = Yi;
                    try {
                      return (Yi = t), e.apply(this, arguments);
                    } finally {
                      Yi = n;
                    }
                  };
                }),
                (e.noContext = function (e, t, n) {
                  if (!Yi) return e.apply(n, t);
                  var r = Yi;
                  try {
                    return (Yi = null), e.apply(n, t);
                  } finally {
                    Yi = r;
                  }
                }),
                e
              );
            })()
          );
      $i.bind, $i.noContext;
      function ea() {}
      var ta,
        na = (function () {
          function e(e, t) {
            void 0 === e && (e = 1 / 0),
              void 0 === t && (t = ea),
              (this.max = e),
              (this.dispose = t),
              (this.map = new Map()),
              (this.newest = null),
              (this.oldest = null);
          }
          return (
            (e.prototype.has = function (e) {
              return this.map.has(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getNode(e);
              return t && t.value;
            }),
            (e.prototype.getNode = function (e) {
              var t = this.map.get(e);
              if (t && t !== this.newest) {
                var n = t.older,
                  r = t.newer;
                r && (r.older = n),
                  n && (n.newer = r),
                  (t.older = this.newest),
                  (t.older.newer = t),
                  (t.newer = null),
                  (this.newest = t),
                  t === this.oldest && (this.oldest = r);
              }
              return t;
            }),
            (e.prototype.set = function (e, t) {
              var n = this.getNode(e);
              return n
                ? (n.value = t)
                : ((n = { key: e, value: t, newer: null, older: this.newest }),
                  this.newest && (this.newest.newer = n),
                  (this.newest = n),
                  (this.oldest = this.oldest || n),
                  this.map.set(e, n),
                  n.value);
            }),
            (e.prototype.clean = function () {
              for (; this.oldest && this.map.size > this.max; )
                this.delete(this.oldest.key);
            }),
            (e.prototype.delete = function (e) {
              var t = this.map.get(e);
              return (
                !!t &&
                (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
              );
            }),
            e
          );
        })(),
        ra = new $i(),
        ia = Object.prototype.hasOwnProperty,
        aa =
          void 0 === (ta = Array.from)
            ? function (e) {
                var t = [];
                return (
                  e.forEach(function (e) {
                    return t.push(e);
                  }),
                  t
                );
              }
            : ta;
      function oa(e) {
        var t = e.unsubscribe;
        "function" === typeof t && ((e.unsubscribe = void 0), t());
      }
      var ua = [],
        sa = 100;
      function la(e, t) {
        if (!e) throw new Error(t || "assertion failure");
      }
      function ca(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      var fa = (function () {
        function e(t) {
          (this.fn = t),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++e.count;
        }
        return (
          (e.prototype.peek = function () {
            if (1 === this.value.length && !ha(this))
              return da(this), this.value[0];
          }),
          (e.prototype.recompute = function (e) {
            return (
              la(!this.recomputing, "already recomputing"),
              da(this),
              ha(this)
                ? (function (e, t) {
                    ka(e),
                      ra.withValue(e, pa, [e, t]),
                      (function (e, t) {
                        if ("function" === typeof e.subscribe)
                          try {
                            oa(e), (e.unsubscribe = e.subscribe.apply(null, t));
                          } catch (n) {
                            return e.setDirty(), !1;
                          }
                        return !0;
                      })(e, t) &&
                        (function (e) {
                          if (((e.dirty = !1), ha(e))) return;
                          ya(e);
                        })(e);
                    return ca(e.value);
                  })(this, e)
                : ca(this.value)
            );
          }),
          (e.prototype.setDirty = function () {
            this.dirty ||
              ((this.dirty = !0), (this.value.length = 0), va(this), oa(this));
          }),
          (e.prototype.dispose = function () {
            var e = this;
            this.setDirty(),
              ka(this),
              ma(this, function (t, n) {
                t.setDirty(), Ea(t, e);
              });
          }),
          (e.prototype.forget = function () {
            this.dispose();
          }),
          (e.prototype.dependOn = function (e) {
            e.add(this),
              this.deps || (this.deps = ua.pop() || new Set()),
              this.deps.add(e);
          }),
          (e.prototype.forgetDeps = function () {
            var e = this;
            this.deps &&
              (aa(this.deps).forEach(function (t) {
                return t.delete(e);
              }),
              this.deps.clear(),
              ua.push(this.deps),
              (this.deps = null));
          }),
          (e.count = 0),
          e
        );
      })();
      function da(e) {
        var t = ra.getValue();
        if (t)
          return (
            e.parents.add(t),
            t.childValues.has(e) || t.childValues.set(e, []),
            ha(e) ? ga(t, e) : ba(t, e),
            t
          );
      }
      function pa(e, t) {
        (e.recomputing = !0), (e.value.length = 0);
        try {
          e.value[0] = e.fn.apply(null, t);
        } catch (n) {
          e.value[1] = n;
        }
        e.recomputing = !1;
      }
      function ha(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
      }
      function va(e) {
        ma(e, ga);
      }
      function ya(e) {
        ma(e, ba);
      }
      function ma(e, t) {
        var n = e.parents.size;
        if (n) for (var r = aa(e.parents), i = 0; i < n; ++i) t(r[i], e);
      }
      function ga(e, t) {
        la(e.childValues.has(t)), la(ha(t));
        var n = !ha(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = ua.pop() || new Set();
        e.dirtyChildren.add(t), n && va(e);
      }
      function ba(e, t) {
        la(e.childValues.has(t)), la(!ha(t));
        var n = e.childValues.get(t);
        0 === n.length
          ? e.childValues.set(t, t.value.slice(0))
          : (function (e, t) {
              var n = e.length;
              return n > 0 && n === t.length && e[n - 1] === t[n - 1];
            })(n, t.value) || e.setDirty(),
          wa(e, t),
          ha(e) || ya(e);
      }
      function wa(e, t) {
        var n = e.dirtyChildren;
        n &&
          (n.delete(t),
          0 === n.size &&
            (ua.length < sa && ua.push(n), (e.dirtyChildren = null)));
      }
      function ka(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach(function (t, n) {
            Ea(e, n);
          }),
          e.forgetDeps(),
          la(null === e.dirtyChildren);
      }
      function Ea(e, t) {
        t.parents.delete(e), e.childValues.delete(t), wa(e, t);
      }
      var Sa = { setDirty: !0, dispose: !0, forget: !0 };
      function xa(e) {
        var t = new Map(),
          n = e && e.subscribe;
        function r(e) {
          var r = ra.getValue();
          if (r) {
            var i = t.get(e);
            i || t.set(e, (i = new Set())),
              r.dependOn(i),
              "function" === typeof n && (oa(i), (i.unsubscribe = n(e)));
          }
        }
        return (
          (r.dirty = function (e, n) {
            var r = t.get(e);
            if (r) {
              var i = n && ia.call(Sa, n) ? n : "setDirty";
              aa(r).forEach(function (e) {
                return e[i]();
              }),
                t.delete(e),
                oa(r);
            }
          }),
          r
        );
      }
      function _a() {
        var e = new Jr("function" === typeof WeakMap);
        return function () {
          return e.lookupArray(arguments);
        };
      }
      _a();
      var Oa = new Set();
      function Na(e, t) {
        void 0 === t && (t = Object.create(null));
        var n = new na(t.max || Math.pow(2, 16), function (e) {
            return e.dispose();
          }),
          r = t.keyArgs,
          i = t.makeCacheKey || _a(),
          a = function () {
            var a = i.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === a) return e.apply(null, arguments);
            var o = n.get(a);
            o ||
              (n.set(a, (o = new fa(e))),
              (o.subscribe = t.subscribe),
              (o.forget = function () {
                return n.delete(a);
              }));
            var u = o.recompute(Array.prototype.slice.call(arguments));
            return (
              n.set(a, o),
              Oa.add(n),
              ra.hasValue() ||
                (Oa.forEach(function (e) {
                  return e.clean();
                }),
                Oa.clear()),
              u
            );
          };
        function o(e) {
          var t = n.get(e);
          t && t.setDirty();
        }
        function u(e) {
          var t = n.get(e);
          if (t) return t.peek();
        }
        function s(e) {
          return n.delete(e);
        }
        return (
          Object.defineProperty(a, "size", {
            get: function () {
              return n.map.size;
            },
            configurable: !1,
            enumerable: !1,
          }),
          (a.dirtyKey = o),
          (a.dirty = function () {
            o(i.apply(null, arguments));
          }),
          (a.peekKey = u),
          (a.peek = function () {
            return u(i.apply(null, arguments));
          }),
          (a.forgetKey = s),
          (a.forget = function () {
            return s(i.apply(null, arguments));
          }),
          (a.makeCacheKey = i),
          (a.getKey = r
            ? function () {
                return i.apply(null, r.apply(null, arguments));
              }
            : i),
          Object.freeze(a)
        );
      }
      var Ca = new $i(),
        Ta = new WeakMap();
      function Da(e) {
        var t = Ta.get(e);
        return t || Ta.set(e, (t = { vars: new Set(), dep: xa() })), t;
      }
      function Ia(e) {
        Da(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function Pa(e) {
        var t = new Set(),
          n = new Set(),
          r = function r(a) {
            if (arguments.length > 0) {
              if (e !== a) {
                (e = a),
                  t.forEach(function (e) {
                    Da(e).dep.dirty(r),
                      (function (e) {
                        e.broadcastWatches && e.broadcastWatches();
                      })(e);
                  });
                var o = Array.from(n);
                n.clear(),
                  o.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var u = Ca.getValue();
              u && (i(u), Da(u).dep(r));
            }
            return e;
          };
        r.onNextChange = function (e) {
          return (
            n.add(e),
            function () {
              n.delete(e);
            }
          );
        };
        var i = (r.attachCache = function (e) {
          return t.add(e), Da(e).vars.add(r), r;
        });
        return (
          (r.forgetCache = function (e) {
            return t.delete(e);
          }),
          r
        );
      }
      var ja = (function () {
          function e(e) {
            var t = e.cache,
              n = e.client,
              r = e.resolvers,
              i = e.fragmentMatcher;
            (this.selectionsToResolveCache = new WeakMap()),
              (this.cache = t),
              n && (this.client = n),
              r && this.addResolvers(r),
              i && this.setFragmentMatcher(i);
          }
          return (
            (e.prototype.addResolvers = function (e) {
              var t = this;
              (this.resolvers = this.resolvers || {}),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.resolvers = Vr(t.resolvers, e);
                    })
                  : (this.resolvers = Vr(this.resolvers, e));
            }),
            (e.prototype.setResolvers = function (e) {
              (this.resolvers = {}), this.addResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.resolvers || {};
            }),
            (e.prototype.runResolvers = function (e) {
              var t = e.document,
                n = e.remoteResult,
                r = e.context,
                i = e.variables,
                a = e.onlyRunForcedResolvers,
                o = void 0 !== a && a;
              return tt(this, void 0, void 0, function () {
                return nt(this, function (e) {
                  return t
                    ? [
                        2,
                        this.resolveDocument(
                          t,
                          n.data,
                          r,
                          i,
                          this.fragmentMatcher,
                          o
                        ).then(function (e) {
                          return $e($e({}, n), { data: e.result });
                        }),
                      ]
                    : [2, n];
                });
              });
            }),
            (e.prototype.setFragmentMatcher = function (e) {
              this.fragmentMatcher = e;
            }),
            (e.prototype.getFragmentMatcher = function () {
              return this.fragmentMatcher;
            }),
            (e.prototype.clientQuery = function (e) {
              return Mn(["client"], e) && this.resolvers ? e : null;
            }),
            (e.prototype.serverQuery = function (e) {
              return (function (e) {
                pn(e);
                var t = Ei(
                  [
                    {
                      test: function (e) {
                        return "client" === e.name.value;
                      },
                      remove: !0,
                    },
                  ],
                  e
                );
                return (
                  t &&
                    (t = An(t, {
                      FragmentDefinition: {
                        enter: function (e) {
                          if (
                            e.selectionSet &&
                            e.selectionSet.selections.every(function (e) {
                              return fn(e) && "__typename" === e.name.value;
                            })
                          )
                            return null;
                        },
                      },
                    })),
                  t
                );
              })(e);
            }),
            (e.prototype.prepareContext = function (e) {
              var t = this.cache;
              return $e($e({}, e), {
                cache: t,
                getCacheKey: function (e) {
                  return t.identify(e);
                },
              });
            }),
            (e.prototype.addExportedVariables = function (e, t, n) {
              return (
                void 0 === t && (t = {}),
                void 0 === n && (n = {}),
                tt(this, void 0, void 0, function () {
                  return nt(this, function (r) {
                    return e
                      ? [
                          2,
                          this.resolveDocument(
                            e,
                            this.buildRootValueFromCache(e, t) || {},
                            this.prepareContext(n),
                            t
                          ).then(function (e) {
                            return $e($e({}, t), e.exportedVariables);
                          }),
                        ]
                      : [2, $e({}, t)];
                  });
                })
              );
            }),
            (e.prototype.shouldForceResolvers = function (e) {
              var t = !1;
              return (
                An(e, {
                  Directive: {
                    enter: function (e) {
                      if (
                        "client" === e.name.value &&
                        e.arguments &&
                        (t = e.arguments.some(function (e) {
                          return (
                            "always" === e.name.value &&
                            "BooleanValue" === e.value.kind &&
                            !0 === e.value.value
                          );
                        }))
                      )
                        return Rn;
                    },
                  },
                }),
                t
              );
            }),
            (e.prototype.buildRootValueFromCache = function (e, t) {
              return this.cache.diff({
                query: Oi(e),
                variables: t,
                returnPartialData: !0,
                optimistic: !1,
              }).result;
            }),
            (e.prototype.resolveDocument = function (e, t, n, r, i, a) {
              return (
                void 0 === n && (n = {}),
                void 0 === r && (r = {}),
                void 0 === i &&
                  (i = function () {
                    return !0;
                  }),
                void 0 === a && (a = !1),
                tt(this, void 0, void 0, function () {
                  var o, u, s, l, c, f, d, p, h, v;
                  return nt(this, function (y) {
                    return (
                      (o = gn(e)),
                      (u = yn(e)),
                      (s = Xt(u)),
                      (l = this.collectSelectionsToResolve(o, s)),
                      (c = o.operation),
                      (f = c
                        ? c.charAt(0).toUpperCase() + c.slice(1)
                        : "Query"),
                      (p = (d = this).cache),
                      (h = d.client),
                      (v = {
                        fragmentMap: s,
                        context: $e($e({}, n), { cache: p, client: h }),
                        variables: r,
                        fragmentMatcher: i,
                        defaultOperationType: f,
                        exportedVariables: {},
                        selectionsToResolve: l,
                        onlyRunForcedResolvers: a,
                      }),
                      !1,
                      [
                        2,
                        this.resolveSelectionSet(
                          o.selectionSet,
                          false,
                          t,
                          v
                        ).then(function (e) {
                          return {
                            result: e,
                            exportedVariables: v.exportedVariables,
                          };
                        }),
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.resolveSelectionSet = function (e, t, n, r) {
              return tt(this, void 0, void 0, function () {
                var i,
                  a,
                  o,
                  u,
                  s,
                  l = this;
                return nt(this, function (c) {
                  return (
                    (i = r.fragmentMap),
                    (a = r.context),
                    (o = r.variables),
                    (u = [n]),
                    (s = function (e) {
                      return tt(l, void 0, void 0, function () {
                        var s, l;
                        return nt(this, function (c) {
                          return (t || r.selectionsToResolve.has(e)) && Ln(e, o)
                            ? fn(e)
                              ? [
                                  2,
                                  this.resolveField(e, t, n, r).then(function (
                                    t
                                  ) {
                                    var n;
                                    "undefined" !== typeof t &&
                                      u.push((((n = {})[ln(e)] = t), n));
                                  }),
                                ]
                              : (dn(e)
                                  ? (s = e)
                                  : ((s = i[e.name.value]),
                                    __DEV__
                                      ? st(
                                          s,
                                          "No fragment named ".concat(
                                            e.name.value
                                          )
                                        )
                                      : st(s, 11)),
                                s &&
                                s.typeCondition &&
                                ((l = s.typeCondition.name.value),
                                r.fragmentMatcher(n, l, a))
                                  ? [
                                      2,
                                      this.resolveSelectionSet(
                                        s.selectionSet,
                                        t,
                                        n,
                                        r
                                      ).then(function (e) {
                                        u.push(e);
                                      }),
                                    ]
                                  : [2])
                            : [2];
                        });
                      });
                    }),
                    [
                      2,
                      Promise.all(e.selections.map(s)).then(function () {
                        return Qr(u);
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveField = function (e, t, n, r) {
              return tt(this, void 0, void 0, function () {
                var i,
                  a,
                  o,
                  u,
                  s,
                  l,
                  c,
                  f,
                  d,
                  p = this;
                return nt(this, function (h) {
                  return n
                    ? ((i = r.variables),
                      (a = e.name.value),
                      (o = ln(e)),
                      (u = a !== o),
                      (s = n[o] || n[a]),
                      (l = Promise.resolve(s)),
                      (r.onlyRunForcedResolvers &&
                        !this.shouldForceResolvers(e)) ||
                        ((c = n.__typename || r.defaultOperationType),
                        (f = this.resolvers && this.resolvers[c]) &&
                          (d = f[u ? a : o]) &&
                          (l = Promise.resolve(
                            Ca.withValue(this.cache, d, [
                              n,
                              sn(e, i),
                              r.context,
                              { field: e, fragmentMap: r.fragmentMap },
                            ])
                          ))),
                      [
                        2,
                        l.then(function (n) {
                          var i, a;
                          if (
                            (void 0 === n && (n = s),
                            e.directives &&
                              e.directives.forEach(function (e) {
                                "export" === e.name.value &&
                                  e.arguments &&
                                  e.arguments.forEach(function (e) {
                                    "as" === e.name.value &&
                                      "StringValue" === e.value.kind &&
                                      (r.exportedVariables[e.value.value] = n);
                                  });
                              }),
                            !e.selectionSet)
                          )
                            return n;
                          if (null == n) return n;
                          var o =
                            null !==
                              (a =
                                null === (i = e.directives) || void 0 === i
                                  ? void 0
                                  : i.some(function (e) {
                                      return "client" === e.name.value;
                                    })) &&
                            void 0 !== a &&
                            a;
                          return Array.isArray(n)
                            ? p.resolveSubSelectedArray(e, t || o, n, r)
                            : e.selectionSet
                            ? p.resolveSelectionSet(
                                e.selectionSet,
                                t || o,
                                n,
                                r
                              )
                            : void 0;
                        }),
                      ])
                    : [2, null];
                });
              });
            }),
            (e.prototype.resolveSubSelectedArray = function (e, t, n, r) {
              var i = this;
              return Promise.all(
                n.map(function (n) {
                  return null === n
                    ? null
                    : Array.isArray(n)
                    ? i.resolveSubSelectedArray(e, t, n, r)
                    : e.selectionSet
                    ? i.resolveSelectionSet(e.selectionSet, t, n, r)
                    : void 0;
                })
              );
            }),
            (e.prototype.collectSelectionsToResolve = function (e, t) {
              var n = function (e) {
                  return !Array.isArray(e);
                },
                r = this.selectionsToResolveCache;
              return (function e(i) {
                if (!r.has(i)) {
                  var a = new Set();
                  r.set(i, a),
                    An(i, {
                      Directive: function (e, t, r, i, o) {
                        "client" === e.name.value &&
                          o.forEach(function (e) {
                            n(e) && Hi(e) && a.add(e);
                          });
                      },
                      FragmentSpread: function (r, i, o, u, s) {
                        var l = t[r.name.value];
                        __DEV__
                          ? st(l, "No fragment named ".concat(r.name.value))
                          : st(l, 12);
                        var c = e(l);
                        c.size > 0 &&
                          (s.forEach(function (e) {
                            n(e) && Hi(e) && a.add(e);
                          }),
                          a.add(r),
                          c.forEach(function (e) {
                            a.add(e);
                          }));
                      },
                    });
                }
                return r.get(i);
              })(e);
            }),
            e
          );
        })(),
        Ra = new (Qn ? WeakMap : Map)();
      function Aa(e, t) {
        var n = e[t];
        "function" === typeof n &&
          (e[t] = function () {
            return Ra.set(e, (Ra.get(e) + 1) % 1e15), n.apply(this, arguments);
          });
      }
      function Fa(e) {
        e.notifyTimeout &&
          (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var La = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.subscriptions = new Set()),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var n = (this.cache = e.cache);
          Ra.has(n) ||
            (Ra.set(n, 0), Aa(n, "evict"), Aa(n, "modify"), Aa(n, "reset"));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || ji.loading;
            return (
              this.variables &&
                this.networkStatus !== ji.loading &&
                !Pr(this.variables, e.variables) &&
                (t = ji.setVariables),
              Pr(e.variables, this.variables) || (this.lastDiff = void 0),
              Object.assign(this, {
                document: e.document,
                variables: e.variables,
                networkError: null,
                graphQLErrors: this.graphQLErrors || [],
                networkStatus: t,
              }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            Fa(this), (this.dirty = !1);
          }),
          (e.prototype.getDiff = function (e) {
            void 0 === e && (e = this.variables);
            var t = this.getDiffOptions(e);
            if (this.lastDiff && Pr(t, this.lastDiff.options))
              return this.lastDiff.diff;
            this.updateWatch((this.variables = e));
            var n = this.observableQuery;
            if (n && "no-cache" === n.options.fetchPolicy)
              return { complete: !1 };
            var r = this.cache.diff(t);
            return this.updateLastDiff(r, t), r;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e
              ? { diff: e, options: t || this.getDiffOptions() }
              : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              {
                query: this.document,
                variables: e,
                returnPartialData: !0,
                optimistic: !0,
                canonizeResults:
                  null === (t = this.observableQuery) || void 0 === t
                    ? void 0
                    : t.options.canonizeResults,
              }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t = this,
              n = this.lastDiff && this.lastDiff.diff;
            this.updateLastDiff(e),
              this.dirty ||
                Pr(n && n.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return t.notify();
                  }, 0)));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction
                        ? e.observe()
                        : Ui(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            Fa(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if (Fi(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ("cache-only" !== e && "cache-and-network" !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                });
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var n = this.observableQuery;
            if (!n || "no-cache" !== n.options.fetchPolicy) {
              var r = $e($e({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && Pr(r, this.lastWatch)) ||
                (this.cancel(),
                (this.cancel = this.cache.watch((this.lastWatch = r))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var n = this.lastWrite;
            return !(
              n &&
              n.dmCount === Ra.get(this.cache) &&
              Pr(t, n.variables) &&
              Pr(e.data, n.result.data)
            );
          }),
          (e.prototype.markResult = function (e, t, n, r) {
            var i = this,
              a = new Ur(),
              o = Mr(e.errors) ? e.errors.slice(0) : [];
            if ((this.reset(), "incremental" in e && Mr(e.incremental))) {
              var u = Wr(this.getDiff().result, e);
              e.data = u;
            } else if ("hasNext" in e && e.hasNext) {
              var s = this.getDiff();
              e.data = a.merge(s.result, e.data);
            }
            (this.graphQLErrors = o),
              "no-cache" === n.fetchPolicy
                ? this.updateLastDiff(
                    { result: e.data, complete: !0 },
                    this.getDiffOptions(n.variables)
                  )
                : 0 !== r &&
                  (Ma(e, n.errorPolicy)
                    ? this.cache.performTransaction(function (a) {
                        if (i.shouldWrite(e, n.variables))
                          a.writeQuery({
                            query: t,
                            data: e.data,
                            variables: n.variables,
                            overwrite: 1 === r,
                          }),
                            (i.lastWrite = {
                              result: e,
                              variables: n.variables,
                              dmCount: Ra.get(i.cache),
                            });
                        else if (i.lastDiff && i.lastDiff.diff.complete)
                          return void (e.data = i.lastDiff.diff.result);
                        var o = i.getDiffOptions(n.variables),
                          u = a.diff(o);
                        i.stopped || i.updateWatch(n.variables),
                          i.updateLastDiff(u, o),
                          u.complete && (e.data = u.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (this.networkError = null), (this.networkStatus = ji.ready);
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = ji.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function Ma(e, t) {
        void 0 === t && (t = "none");
        var n = "ignore" === t || "all" === t,
          r = !vi(e);
        return !r && n && e.data && (r = !0), r;
      }
      var za = Object.prototype.hasOwnProperty,
        Va = (function () {
          function e(e) {
            var t = e.cache,
              n = e.link,
              r = e.defaultOptions,
              i = e.queryDeduplication,
              a = void 0 !== i && i,
              o = e.onBroadcast,
              u = e.ssrMode,
              s = void 0 !== u && u,
              l = e.clientAwareness,
              c = void 0 === l ? {} : l,
              f = e.localState,
              d = e.assumeImmutableResults;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new (Qn ? WeakMap : Map)()),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new Map()),
              (this.cache = t),
              (this.link = n),
              (this.defaultOptions = r || Object.create(null)),
              (this.queryDeduplication = a),
              (this.clientAwareness = c),
              (this.localState = f || new ja({ cache: t })),
              (this.ssrMode = s),
              (this.assumeImmutableResults = !!d),
              (this.onBroadcast = o) &&
                (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, n) {
                e.stopQueryNoBroadcast(n);
              }),
                this.cancelPendingFetches(
                  __DEV__
                    ? new ut("QueryManager stopped while query was in flight")
                    : new ut(14)
                );
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              var t,
                n,
                r = e.mutation,
                i = e.variables,
                a = e.optimisticResponse,
                o = e.updateQueries,
                u = e.refetchQueries,
                s = void 0 === u ? [] : u,
                l = e.awaitRefetchQueries,
                c = void 0 !== l && l,
                f = e.update,
                d = e.onQueryUpdated,
                p = e.fetchPolicy,
                h =
                  void 0 === p
                    ? (null === (t = this.defaultOptions.mutate) || void 0 === t
                        ? void 0
                        : t.fetchPolicy) || "network-only"
                    : p,
                v = e.errorPolicy,
                y =
                  void 0 === v
                    ? (null === (n = this.defaultOptions.mutate) || void 0 === n
                        ? void 0
                        : n.errorPolicy) || "none"
                    : v,
                m = e.keepRootFields,
                g = e.context;
              return tt(this, void 0, void 0, function () {
                var e, t, n, u, l, p;
                return nt(this, function (v) {
                  switch (v.label) {
                    case 0:
                      return (
                        __DEV__
                          ? st(
                              r,
                              "mutation option is required. You must specify your GraphQL document in the mutation option."
                            )
                          : st(r, 15),
                        __DEV__
                          ? st(
                              "network-only" === h || "no-cache" === h,
                              "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                            )
                          : st("network-only" === h || "no-cache" === h, 16),
                        (e = this.generateMutationId()),
                        (t = this.transform(r)),
                        (n = t.document),
                        (u = t.hasClientExports),
                        (r = this.cache.transformForLink(n)),
                        (i = this.getVariables(r, i)),
                        u
                          ? [4, this.localState.addExportedVariables(r, i, g)]
                          : [3, 2]
                      );
                    case 1:
                      (i = v.sent()), (v.label = 2);
                    case 2:
                      return (
                        (l =
                          this.mutationStore &&
                          (this.mutationStore[e] = {
                            mutation: r,
                            variables: i,
                            loading: !0,
                            error: null,
                          })),
                        a &&
                          this.markMutationOptimistic(a, {
                            mutationId: e,
                            document: r,
                            variables: i,
                            fetchPolicy: h,
                            errorPolicy: y,
                            context: g,
                            updateQueries: o,
                            update: f,
                            keepRootFields: m,
                          }),
                        this.broadcastQueries(),
                        (p = this),
                        [
                          2,
                          new Promise(function (t, n) {
                            return hi(
                              p.getObservableFromLink(
                                r,
                                $e($e({}, g), { optimisticResponse: a }),
                                i,
                                !1
                              ),
                              function (t) {
                                if (vi(t) && "none" === y)
                                  throw new Ai({ graphQLErrors: yi(t) });
                                l && ((l.loading = !1), (l.error = null));
                                var n = $e({}, t);
                                return (
                                  "function" === typeof s && (s = s(n)),
                                  "ignore" === y && vi(n) && delete n.errors,
                                  p.markMutationResult({
                                    mutationId: e,
                                    result: n,
                                    document: r,
                                    variables: i,
                                    fetchPolicy: h,
                                    errorPolicy: y,
                                    context: g,
                                    update: f,
                                    updateQueries: o,
                                    awaitRefetchQueries: c,
                                    refetchQueries: s,
                                    removeOptimistic: a ? e : void 0,
                                    onQueryUpdated: d,
                                    keepRootFields: m,
                                  })
                                );
                              }
                            ).subscribe({
                              next: function (e) {
                                p.broadcastQueries(),
                                  ("hasNext" in e && !1 !== e.hasNext) || t(e);
                              },
                              error: function (t) {
                                l && ((l.loading = !1), (l.error = t)),
                                  a && p.cache.removeOptimistic(e),
                                  p.broadcastQueries(),
                                  n(
                                    t instanceof Ai
                                      ? t
                                      : new Ai({ networkError: t })
                                  );
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var n = this;
              void 0 === t && (t = this.cache);
              var r = e.result,
                i = [],
                a = "no-cache" === e.fetchPolicy;
              if (!a && Ma(r, e.errorPolicy)) {
                if (
                  (Br(r) ||
                    i.push({
                      result: r.data,
                      dataId: "ROOT_MUTATION",
                      query: e.document,
                      variables: e.variables,
                    }),
                  Br(r) && Mr(r.incremental))
                ) {
                  var o = t.diff({
                      id: "ROOT_MUTATION",
                      query: this.transform(e.document).asQuery,
                      variables: e.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    }),
                    u = void 0;
                  o.result && (u = Wr(o.result, r)),
                    "undefined" !== typeof u &&
                      ((r.data = u),
                      i.push({
                        result: u,
                        dataId: "ROOT_MUTATION",
                        query: e.document,
                        variables: e.variables,
                      }));
                }
                var s = e.updateQueries;
                s &&
                  this.queries.forEach(function (e, a) {
                    var o = e.observableQuery,
                      u = o && o.queryName;
                    if (u && za.call(s, u)) {
                      var l = s[u],
                        c = n.queries.get(a),
                        f = c.document,
                        d = c.variables,
                        p = t.diff({
                          query: f,
                          variables: d,
                          returnPartialData: !0,
                          optimistic: !1,
                        }),
                        h = p.result;
                      if (p.complete && h) {
                        var v = l(h, {
                          mutationResult: r,
                          queryName: (f && vn(f)) || void 0,
                          queryVariables: d,
                        });
                        v &&
                          i.push({
                            result: v,
                            dataId: "ROOT_QUERY",
                            query: f,
                            variables: d,
                          });
                      }
                    }
                  });
              }
              if (
                i.length > 0 ||
                e.refetchQueries ||
                e.update ||
                e.onQueryUpdated ||
                e.removeOptimistic
              ) {
                var l = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      a ||
                        i.forEach(function (e) {
                          return t.write(e);
                        });
                      var o,
                        u = e.update,
                        s =
                          !(
                            Br((o = r)) ||
                            (function (e) {
                              return "hasNext" in e && "data" in e;
                            })(o)
                          ) ||
                          (Br(r) && !r.hasNext);
                      if (u) {
                        if (!a) {
                          var l = t.diff({
                            id: "ROOT_MUTATION",
                            query: n.transform(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0,
                          });
                          l.complete &&
                            ("incremental" in
                              (r = $e($e({}, r), { data: l.result })) &&
                              delete r.incremental,
                            "hasNext" in r && delete r.hasNext);
                        }
                        s &&
                          u(t, r, {
                            context: e.context,
                            variables: e.variables,
                          });
                      }
                      a ||
                        e.keepRootFields ||
                        !s ||
                        t.modify({
                          id: "ROOT_MUTATION",
                          fields: function (e, t) {
                            var n = t.fieldName,
                              r = t.DELETE;
                            return "__typename" === n ? e : r;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return l.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(l).then(function () {
                    return r;
                  });
              }
              return Promise.resolve(r);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var n = this,
                r = "function" === typeof e ? e(t.variables) : e;
              return this.cache.recordOptimisticTransaction(function (e) {
                try {
                  n.markMutationResult(
                    $e($e({}, t), { result: { data: r } }),
                    e
                  );
                } catch (i) {
                  __DEV__ && st.error(i);
                }
              }, t.mutationId);
            }),
            (e.prototype.fetchQuery = function (e, t, n) {
              return this.fetchQueryObservable(e, t, n).promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, n) {
                  e[n] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors,
                  };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var n = this.cache.transformDocument(e),
                  r = Ei([xi], pn(n)),
                  i = this.localState.clientQuery(n),
                  a = r && this.localState.serverQuery(r),
                  o = {
                    document: n,
                    hasClientExports: zn(n),
                    hasForcedResolvers: this.localState.shouldForceResolvers(n),
                    clientQuery: i,
                    serverQuery: a,
                    defaultVars: bn(hn(n)),
                    asQuery: $e($e({}, n), {
                      definitions: n.definitions.map(function (e) {
                        return "OperationDefinition" === e.kind &&
                          "query" !== e.operation
                          ? $e($e({}, e), { operation: "query" })
                          : e;
                      }),
                    }),
                  },
                  u = function (e) {
                    e && !t.has(e) && t.set(e, o);
                  };
                u(e), u(n), u(i), u(a);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return $e($e({}, this.transform(e).defaultVars), t);
            }),
            (e.prototype.watchQuery = function (e) {
              "undefined" ===
                typeof (e = $e($e({}, e), {
                  variables: this.getVariables(e.query, e.variables),
                })).notifyOnNetworkStatusChange &&
                (e.notifyOnNetworkStatusChange = !1);
              var t = new La(this),
                n = new qi({ queryManager: this, queryInfo: t, options: e });
              return (
                this.queries.set(n.queryId, t),
                t.init({
                  document: n.query,
                  observableQuery: n,
                  variables: n.variables,
                }),
                n
              );
            }),
            (e.prototype.query = function (e, t) {
              var n = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                __DEV__
                  ? st(
                      e.query,
                      "query option is required. You must specify your GraphQL document in the query option."
                    )
                  : st(e.query, 17),
                __DEV__
                  ? st(
                      "Document" === e.query.kind,
                      'You must wrap the query string in a "gql" tag.'
                    )
                  : st("Document" === e.query.kind, 18),
                __DEV__
                  ? st(
                      !e.returnPartialData,
                      "returnPartialData option only supported on watchQuery."
                    )
                  : st(!e.returnPartialData, 19),
                __DEV__
                  ? st(
                      !e.pollInterval,
                      "pollInterval option only supported on watchQuery."
                    )
                  : st(!e.pollInterval, 20),
                this.fetchQuery(t, e).finally(function () {
                  return n.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches(
                  __DEV__
                    ? new ut(
                        "Store reset while query was in flight (not completed in link chain)"
                      )
                    : new ut(21)
                ),
                this.queries.forEach(function (e) {
                  e.observableQuery ? (e.networkStatus = ji.loading) : e.stop();
                }),
                this.mutationStore &&
                  (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = "active");
              var n = new Map(),
                r = new Map(),
                i = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    var n;
                    "string" === typeof e
                      ? r.set(e, !1)
                      : Jt((n = e)) &&
                        "Document" === n.kind &&
                        Array.isArray(n.definitions)
                      ? r.set(t.transform(e).document, !1)
                      : Jt(e) && e.query && i.add(e);
                  }),
                this.queries.forEach(function (t, i) {
                  var a = t.observableQuery,
                    o = t.document;
                  if (a) {
                    if ("all" === e) return void n.set(i, a);
                    var u = a.queryName;
                    if (
                      "standby" === a.options.fetchPolicy ||
                      ("active" === e && !a.hasObservers())
                    )
                      return;
                    ("active" === e || (u && r.has(u)) || (o && r.has(o))) &&
                      (n.set(i, a), u && r.set(u, !0), o && r.set(o, !0));
                  }
                }),
                i.size &&
                  i.forEach(function (e) {
                    var r = Ci("legacyOneTimeQuery"),
                      i = t
                        .getQuery(r)
                        .init({ document: e.query, variables: e.variables }),
                      a = new qi({
                        queryManager: t,
                        queryInfo: i,
                        options: $e($e({}, e), { fetchPolicy: "network-only" }),
                      });
                    st(a.queryId === r), i.setObservableQuery(a), n.set(r, a);
                  }),
                __DEV__ &&
                  r.size &&
                  r.forEach(function (e, t) {
                    e ||
                      (__DEV__ &&
                        st.warn(
                          "Unknown query "
                            .concat("string" === typeof t ? "named " : "")
                            .concat(
                              JSON.stringify(t, null, 2),
                              " requested in refetchQueries options.include array"
                            )
                        ));
                  }),
                n
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var n = [];
              return (
                this.getObservableQueries(e ? "all" : "active").forEach(
                  function (r, i) {
                    var a = r.options.fetchPolicy;
                    r.resetLastResults(),
                      (e || ("standby" !== a && "cache-only" !== a)) &&
                        n.push(r.refetch()),
                      t.getQuery(i).setDiff(null);
                  }
                ),
                this.broadcastQueries(),
                Promise.all(n)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                n = e.query,
                r = e.fetchPolicy,
                i = e.errorPolicy,
                a = e.variables,
                o = e.context,
                u = void 0 === o ? {} : o;
              (n = this.transform(n).document), (a = this.getVariables(n, a));
              var s = function (e) {
                return t.getObservableFromLink(n, u, e).map(function (a) {
                  if (
                    ("no-cache" !== r &&
                      (Ma(a, i) &&
                        t.cache.write({
                          query: n,
                          result: a.data,
                          dataId: "ROOT_SUBSCRIPTION",
                          variables: e,
                        }),
                      t.broadcastQueries()),
                    vi(a))
                  )
                    throw new Ai({ graphQLErrors: a.errors });
                  return a;
                });
              };
              if (this.transform(n).hasClientExports) {
                var l = this.localState.addExportedVariables(n, a, u).then(s);
                return new Gt(function (e) {
                  var t = null;
                  return (
                    l.then(function (n) {
                      return (t = n.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return s(a);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e),
                this.queries.has(e) &&
                  (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, n, r) {
              var i,
                a,
                o = this;
              void 0 === r &&
                (r =
                  null !==
                    (i =
                      null === t || void 0 === t
                        ? void 0
                        : t.queryDeduplication) && void 0 !== i
                    ? i
                    : this.queryDeduplication);
              var u = this.transform(e).serverQuery;
              if (u) {
                var s = this.inFlightLinkObservables,
                  l = this.link,
                  c = {
                    query: u,
                    variables: n,
                    operationName: vn(u) || void 0,
                    context: this.prepareContext(
                      $e($e({}, t), { forceFetch: !r })
                    ),
                  };
                if (((t = c.context), r)) {
                  var f = s.get(u) || new Map();
                  s.set(u, f);
                  var d = di(n);
                  if (!(a = f.get(d))) {
                    var p = new Pi([Nn(l, c)]);
                    f.set(d, (a = p)),
                      p.beforeNext(function () {
                        f.delete(d) && f.size < 1 && s.delete(u);
                      });
                  }
                } else a = new Pi([Nn(l, c)]);
              } else
                (a = new Pi([Gt.of({ data: {} })])),
                  (t = this.prepareContext(t));
              var h = this.transform(e).clientQuery;
              return (
                h &&
                  (a = hi(a, function (e) {
                    return o.localState.runResolvers({
                      document: h,
                      remoteResult: e,
                      context: t,
                      variables: n,
                    });
                  })),
                a
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, n) {
              var r = (e.lastRequestId = this.generateRequestId()),
                i = this.cache.transformForLink(
                  this.transform(e.document).document
                );
              return hi(
                this.getObservableFromLink(i, n.context, n.variables),
                function (a) {
                  var o = yi(a),
                    u = o.length > 0;
                  if (r >= e.lastRequestId) {
                    if (u && "none" === n.errorPolicy)
                      throw e.markError(new Ai({ graphQLErrors: o }));
                    e.markResult(a, i, n, t), e.markReady();
                  }
                  var s = {
                    data: a.data,
                    loading: !1,
                    networkStatus: ji.ready,
                  };
                  return (
                    u &&
                      "ignore" !== n.errorPolicy &&
                      ((s.errors = o), (s.networkStatus = ji.error)),
                    s
                  );
                },
                function (t) {
                  var n = t.hasOwnProperty("graphQLErrors")
                    ? t
                    : new Ai({ networkError: t });
                  throw (r >= e.lastRequestId && e.markError(n), n);
                }
              );
            }),
            (e.prototype.fetchQueryObservable = function (e, t, n) {
              var r = this;
              void 0 === n && (n = ji.loading);
              var i = this.transform(t.query).document,
                a = this.getVariables(i, t.variables),
                o = this.getQuery(e),
                u = this.defaultOptions.watchQuery,
                s = t.fetchPolicy,
                l = void 0 === s ? (u && u.fetchPolicy) || "cache-first" : s,
                c = t.errorPolicy,
                f = void 0 === c ? (u && u.errorPolicy) || "none" : c,
                d = t.returnPartialData,
                p = void 0 !== d && d,
                h = t.notifyOnNetworkStatusChange,
                v = void 0 !== h && h,
                y = t.context,
                m = void 0 === y ? {} : y,
                g = Object.assign({}, t, {
                  query: i,
                  variables: a,
                  fetchPolicy: l,
                  errorPolicy: f,
                  returnPartialData: p,
                  notifyOnNetworkStatusChange: v,
                  context: m,
                }),
                b = function (e) {
                  g.variables = e;
                  var i = r.fetchQueryByPolicy(o, g, n);
                  return (
                    "standby" !== g.fetchPolicy &&
                      i.length > 0 &&
                      o.observableQuery &&
                      o.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    i
                  );
                },
                w = function () {
                  return r.fetchCancelFns.delete(e);
                };
              this.fetchCancelFns.set(e, function (e) {
                w(),
                  setTimeout(function () {
                    return k.cancel(e);
                  });
              });
              var k = new Pi(
                this.transform(g.query).hasClientExports
                  ? this.localState
                      .addExportedVariables(g.query, g.variables, g.context)
                      .then(b)
                  : b(g.variables)
              );
              return k.promise.then(w, w), k;
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                n = e.updateCache,
                r = e.include,
                i = e.optimistic,
                a = void 0 !== i && i,
                o = e.removeOptimistic,
                u = void 0 === o ? (a ? Ci("refetchQueries") : void 0) : o,
                s = e.onQueryUpdated,
                l = new Map();
              r &&
                this.getObservableQueries(r).forEach(function (e, n) {
                  l.set(n, { oq: e, lastDiff: t.getQuery(n).getDiff() });
                });
              var c = new Map();
              return (
                n &&
                  this.cache.batch({
                    update: n,
                    optimistic: (a && u) || !1,
                    removeOptimistic: u,
                    onWatchUpdated: function (e, t, n) {
                      var r =
                        e.watcher instanceof La && e.watcher.observableQuery;
                      if (r) {
                        if (s) {
                          l.delete(r.queryId);
                          var i = s(r, t, n);
                          return (
                            !0 === i && (i = r.refetch()),
                            !1 !== i && c.set(r, i),
                            i
                          );
                        }
                        null !== s &&
                          l.set(r.queryId, { oq: r, lastDiff: n, diff: t });
                      }
                    },
                  }),
                l.size &&
                  l.forEach(function (e, n) {
                    var r,
                      i = e.oq,
                      a = e.lastDiff,
                      o = e.diff;
                    if (s) {
                      if (!o) {
                        var u = i.queryInfo;
                        u.reset(), (o = u.getDiff());
                      }
                      r = s(i, o, a);
                    }
                    (s && !0 !== r) || (r = i.refetch()),
                      !1 !== r && c.set(i, r),
                      n.indexOf("legacyOneTimeQuery") >= 0 &&
                        t.stopQueryNoBroadcast(n);
                  }),
                u && this.cache.removeOptimistic(u),
                c
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, n) {
              var r = this,
                i = t.query,
                a = t.variables,
                o = t.fetchPolicy,
                u = t.refetchWritePolicy,
                s = t.errorPolicy,
                l = t.returnPartialData,
                c = t.context,
                f = t.notifyOnNetworkStatusChange,
                d = e.networkStatus;
              e.init({
                document: this.transform(i).document,
                variables: a,
                networkStatus: n,
              });
              var p = function () {
                  return e.getDiff(a);
                },
                h = function (t, n) {
                  void 0 === n && (n = e.networkStatus || ji.loading);
                  var o = t.result;
                  !__DEV__ || l || Pr(o, {}) || Wi(t.missing);
                  var u = function (e) {
                    return Gt.of(
                      $e(
                        { data: e, loading: Fi(n), networkStatus: n },
                        t.complete ? null : { partial: !0 }
                      )
                    );
                  };
                  return o && r.transform(i).hasForcedResolvers
                    ? r.localState
                        .runResolvers({
                          document: i,
                          remoteResult: { data: o },
                          context: c,
                          variables: a,
                          onlyRunForcedResolvers: !0,
                        })
                        .then(function (e) {
                          return u(e.data || void 0);
                        })
                    : "none" === s &&
                      n === ji.refetch &&
                      Array.isArray(t.missing)
                    ? u(void 0)
                    : u(o);
                },
                v =
                  "no-cache" === o
                    ? 0
                    : n === ji.refetch && "merge" !== u
                    ? 1
                    : 2,
                y = function () {
                  return r.getResultsFromLink(e, v, {
                    variables: a,
                    context: c,
                    fetchPolicy: o,
                    errorPolicy: s,
                  });
                },
                m = f && "number" === typeof d && d !== n && Fi(n);
              switch (o) {
                default:
                case "cache-first":
                  return (g = p()).complete
                    ? [h(g, e.markReady())]
                    : l || m
                    ? [h(g), y()]
                    : [y()];
                case "cache-and-network":
                  var g;
                  return (g = p()).complete || l || m ? [h(g), y()] : [y()];
                case "cache-only":
                  return [h(p(), e.markReady())];
                case "network-only":
                  return m ? [h(p()), y()] : [y()];
                case "no-cache":
                  return m ? [h(e.getDiff()), y()] : [y()];
                case "standby":
                  return [];
              }
            }),
            (e.prototype.getQuery = function (e) {
              return (
                e &&
                  !this.queries.has(e) &&
                  this.queries.set(e, new La(this, e)),
                this.queries.get(e)
              );
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return $e($e({}, t), { clientAwareness: this.clientAwareness });
            }),
            e
          );
        })();
      function Qa(e, t) {
        return Zr(
          e,
          t,
          t.variables && {
            variables: $e($e({}, e && e.variables), t.variables),
          }
        );
      }
      var qa = !1,
        Ua = (function () {
          function e(e) {
            var t = this;
            (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
            var n = e.uri,
              r = e.credentials,
              i = e.headers,
              a = e.cache,
              o = e.ssrMode,
              u = void 0 !== o && o,
              s = e.ssrForceFetchDelay,
              l = void 0 === s ? 0 : s,
              c = e.connectToDevTools,
              f =
                void 0 === c
                  ? "object" === typeof window &&
                    !window.__APOLLO_CLIENT__ &&
                    __DEV__
                  : c,
              d = e.queryDeduplication,
              p = void 0 === d || d,
              h = e.defaultOptions,
              v = e.assumeImmutableResults,
              y = void 0 !== v && v,
              m = e.resolvers,
              g = e.typeDefs,
              b = e.fragmentMatcher,
              w = e.name,
              k = e.version,
              E = e.link;
            if (
              (E ||
                (E = n
                  ? new Or({ uri: n, credentials: r, headers: i })
                  : On.empty()),
              !a)
            )
              throw __DEV__
                ? new ut(
                    "To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs"
                  )
                : new ut(9);
            if (
              ((this.link = E),
              (this.cache = a),
              (this.disableNetworkFetches = u || l > 0),
              (this.queryDeduplication = p),
              (this.defaultOptions = h || Object.create(null)),
              (this.typeDefs = g),
              l &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, l),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries =
                this.reFetchObservableQueries.bind(this)),
              f &&
                "object" === typeof window &&
                (window.__APOLLO_CLIENT__ = this),
              !qa &&
                f &&
                __DEV__ &&
                ((qa = !0),
                "undefined" !== typeof window &&
                  window.document &&
                  window.top === window.self &&
                  !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
            ) {
              var S = window.navigator,
                x = S && S.userAgent,
                _ = void 0;
              "string" === typeof x &&
                (x.indexOf("Chrome/") > -1
                  ? (_ =
                      "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                  : x.indexOf("Firefox/") > -1 &&
                    (_ =
                      "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                _ &&
                  __DEV__ &&
                  st.log(
                    "Download the Apollo DevTools for a better development experience: " +
                      _
                  );
            }
            (this.version = Cn),
              (this.localState = new ja({
                cache: a,
                client: this,
                resolvers: m,
                fragmentMatcher: b,
              })),
              (this.queryManager = new Va({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                queryDeduplication: p,
                ssrMode: u,
                clientAwareness: { name: w, version: k },
                localState: this.localState,
                assumeImmutableResults: y,
                onBroadcast: f
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {},
                          },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              }));
          }
          return (
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = Qa(this.defaultOptions.watchQuery, e)),
                !this.disableNetworkFetches ||
                  ("network-only" !== e.fetchPolicy &&
                    "cache-and-network" !== e.fetchPolicy) ||
                  (e = $e($e({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = Qa(this.defaultOptions.query, e)),
                __DEV__
                  ? st(
                      "cache-and-network" !== e.fetchPolicy,
                      "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
                    )
                  : st("cache-and-network" !== e.fetchPolicy, 10),
                this.disableNetworkFetches &&
                  "network-only" === e.fetchPolicy &&
                  (e = $e($e({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = Qa(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              this.cache.writeQuery(e), this.queryManager.broadcastQueries();
            }),
            (e.prototype.writeFragment = function (e) {
              this.cache.writeFragment(e), this.queryManager.broadcastQueries();
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return Nn(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                n = [],
                r = [];
              t.forEach(function (e, t) {
                n.push(t), r.push(e);
              });
              var i = Promise.all(r);
              return (
                (i.queries = n),
                (i.results = r),
                i.catch(function (e) {
                  __DEV__ &&
                    st.debug(
                      "In client.refetchQueries, Promise.all promise rejected with error ".concat(
                        e
                      )
                    );
                }),
                i
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return (
                void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
              );
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            e
          );
        })(),
        Ba = (function () {
          function e() {
            this.getFragmentDoc = Na(Zt);
          }
          return (
            (e.prototype.batch = function (e) {
              var t,
                n = this,
                r =
                  "string" === typeof e.optimistic
                    ? e.optimistic
                    : !1 === e.optimistic
                    ? null
                    : void 0;
              return (
                this.performTransaction(function () {
                  return (t = e.update(n));
                }, r),
                t
              );
            }),
            (e.prototype.recordOptimisticTransaction = function (e, t) {
              this.performTransaction(e, t);
            }),
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.identify = function (e) {}),
            (e.prototype.gc = function () {
              return [];
            }),
            (e.prototype.modify = function (e) {
              return !1;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  $e($e({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })
                )
              );
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  $e($e({}, e), {
                    query: this.getFragmentDoc(e.fragment, e.fragmentName),
                    rootId: e.id,
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.writeQuery = function (e) {
              var t = e.id,
                n = e.data,
                r = et(e, ["id", "data"]);
              return this.write(
                Object.assign(r, { dataId: t || "ROOT_QUERY", result: n })
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = e.id,
                n = e.data,
                r = e.fragment,
                i = e.fragmentName,
                a = et(e, ["id", "data", "fragment", "fragmentName"]);
              return this.write(
                Object.assign(a, {
                  query: this.getFragmentDoc(r, i),
                  dataId: t,
                  result: n,
                })
              );
            }),
            (e.prototype.updateQuery = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readQuery(e),
                    i = t(r);
                  return void 0 === i || null === i
                    ? r
                    : (n.writeQuery($e($e({}, e), { data: i })), i);
                },
              });
            }),
            (e.prototype.updateFragment = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readFragment(e),
                    i = t(r);
                  return void 0 === i || null === i
                    ? r
                    : (n.writeFragment($e($e({}, e), { data: i })), i);
                },
              });
            }),
            e
          );
        })(),
        Wa = (function (e) {
          function t(n, r, i, a) {
            var o,
              u = e.call(this, n) || this;
            if (
              ((u.message = n),
              (u.path = r),
              (u.query = i),
              (u.variables = a),
              Array.isArray(u.path))
            ) {
              u.missing = u.message;
              for (var s = u.path.length - 1; s >= 0; --s)
                u.missing = (((o = {})[u.path[s]] = u.missing), o);
            } else u.missing = u.path;
            return (u.__proto__ = t.prototype), u;
          }
          return Xe(t, e), t;
        })(Error);
      function Ha(e) {
        var t = new Set([e]);
        return (
          t.forEach(function (e) {
            Jt(e) &&
              (function (e) {
                if (__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (t) {
                    if (t instanceof TypeError) return null;
                    throw t;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (n) {
                Jt(e[n]) && t.add(e[n]);
              });
          }),
          e
        );
      }
      function Ya(e) {
        return __DEV__ && Ha(e), e;
      }
      var Ka = Object.create(null),
        Ga = function () {
          return Ka;
        },
        Ja = Object.create(null),
        Za = (function () {
          function e(e, t) {
            var n = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return Ya(tn(e) ? n.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return tn(e) ? n.has(e.__ref) : "object" === typeof e;
              }),
              (this.toReference = function (e, t) {
                if ("string" === typeof e) return en(e);
                if (tn(e)) return e;
                var r = n.policies.identify(e)[0];
                if (r) {
                  var i = en(r);
                  return t && n.merge(r, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return $e({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), Xr.call(this.data, e))) {
                var n = this.data[e];
                if (n && Xr.call(n, t)) return n[t];
              }
              return "__typename" === t &&
                Xr.call(this.policies.rootTypenamesById, e)
                ? this.policies.rootTypenamesById[e]
                : this instanceof to
                ? this.parent.get(e, t)
                : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (
                t && this.group.depend(e, "__exists"),
                Xr.call(this.data, e)
                  ? this.data[e]
                  : this instanceof to
                  ? this.parent.lookup(e, t)
                  : this.policies.rootTypenamesById[e]
                  ? Object.create(null)
                  : void 0
              );
            }),
            (e.prototype.merge = function (e, t) {
              var n,
                r = this;
              tn(e) && (e = e.__ref), tn(t) && (t = t.__ref);
              var i = "string" === typeof e ? this.lookup((n = e)) : e,
                a = "string" === typeof t ? this.lookup((n = t)) : t;
              if (a) {
                __DEV__
                  ? st("string" === typeof n, "store.merge expects a string ID")
                  : st("string" === typeof n, 1);
                var o = new Ur(ro).merge(i, a);
                if (
                  ((this.data[n] = o),
                  o !== i && (delete this.refs[n], this.group.caching))
                ) {
                  var u = Object.create(null);
                  i || (u.__exists = 1),
                    Object.keys(a).forEach(function (e) {
                      if (!i || i[e] !== o[e]) {
                        u[e] = 1;
                        var t = ai(e);
                        t === e ||
                          r.policies.hasKeyArgs(o.__typename, t) ||
                          (u[t] = 1),
                          void 0 !== o[e] || r instanceof to || delete o[e];
                      }
                    }),
                    !u.__typename ||
                      (i && i.__typename) ||
                      this.policies.rootTypenamesById[n] !== o.__typename ||
                      delete u.__typename,
                    Object.keys(u).forEach(function (e) {
                      return r.group.dirty(n, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var n = this,
                r = this.lookup(e);
              if (r) {
                var i = Object.create(null),
                  a = !1,
                  o = !0,
                  u = {
                    DELETE: Ka,
                    INVALIDATE: Ja,
                    isReference: tn,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, r) {
                      return n.policies.readField(
                        "string" === typeof t
                          ? { fieldName: t, from: r || en(e) }
                          : t,
                        { store: n }
                      );
                    },
                  };
                if (
                  (Object.keys(r).forEach(function (s) {
                    var l = ai(s),
                      c = r[s];
                    if (void 0 !== c) {
                      var f = "function" === typeof t ? t : t[s] || t[l];
                      if (f) {
                        var d =
                          f === Ga
                            ? Ka
                            : f(
                                Ya(c),
                                $e($e({}, u), {
                                  fieldName: l,
                                  storeFieldName: s,
                                  storage: n.getStorage(e, s),
                                })
                              );
                        d === Ja
                          ? n.group.dirty(e, s)
                          : (d === Ka && (d = void 0),
                            d !== c && ((i[s] = d), (a = !0), (c = d)));
                      }
                      void 0 !== c && (o = !1);
                    }
                  }),
                  a)
                )
                  return (
                    this.merge(e, i),
                    o &&
                      (this instanceof to
                        ? (this.data[e] = void 0)
                        : delete this.data[e],
                      this.group.dirty(e, "__exists")),
                    !0
                  );
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, n) {
              var r,
                i = this.lookup(e);
              if (i) {
                var a = this.getFieldValue(i, "__typename"),
                  o =
                    t && n
                      ? this.policies.getStoreFieldName({
                          typename: a,
                          fieldName: t,
                          args: n,
                        })
                      : t;
                return this.modify(e, o ? (((r = {})[o] = Ga), r) : Ga);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var n = !1;
              return (
                e.id &&
                  (Xr.call(this.data, e.id) &&
                    (n = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof to &&
                    this !== t &&
                    (n = this.parent.evict(e, t) || n),
                  (e.fieldName || n) &&
                    this.group.dirty(e.id, e.fieldName || "__exists")),
                n
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                n = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  Xr.call(e.policies.rootTypenamesById, t) || n.push(t);
                }),
                n.length && (t.__META = { extraRootIds: n.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (n) {
                  (e && Xr.call(e, n)) || t.delete(n);
                }),
                e)
              ) {
                var n = e.__META,
                  r = et(e, ["__META"]);
                Object.keys(r).forEach(function (e) {
                  t.merge(e, r[e]);
                }),
                  n && n.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof to
                  ? this.parent.getRootIdSet(e)
                  : Object.keys(this.policies.rootTypenamesById).forEach(
                      e.add,
                      e
                    ),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                n = this.toObject();
              t.forEach(function (r) {
                Xr.call(n, r) &&
                  (Object.keys(e.findChildRefIds(r)).forEach(t.add, t),
                  delete n[r]);
              });
              var r = Object.keys(n);
              if (r.length) {
                for (var i = this; i instanceof to; ) i = i.parent;
                r.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return r;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!Xr.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  n = this.data[e];
                if (!n) return t;
                var r = new Set([n]);
                r.forEach(function (e) {
                  tn(e) && (t[e.__ref] = !0),
                    Jt(e) &&
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        Jt(n) && r.add(n);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        Xa = (function () {
          function e(e, t) {
            void 0 === t && (t = null),
              (this.caching = e),
              (this.parent = t),
              (this.d = null),
              this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? xa() : null),
                (this.keyMaker = new Jr(Qn));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d($a(e, t));
                var n = ai(t);
                n !== t && this.d($a(e, n)),
                  this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d &&
                this.d.dirty(
                  $a(e, t),
                  "__exists" === t ? "forget" : "setDirty"
                );
            }),
            e
          );
        })();
      function $a(e, t) {
        return t + "#" + e;
      }
      function eo(e, t) {
        io(e) && e.group.depend(t, "__exists");
      }
      !(function (e) {
        var t = (function (e) {
          function t(t) {
            var n = t.policies,
              r = t.resultCaching,
              i = void 0 === r || r,
              a = t.seed,
              o = e.call(this, n, new Xa(i)) || this;
            return (
              (o.stump = new no(o)),
              (o.storageTrie = new Jr(Qn)),
              a && o.replace(a),
              o
            );
          }
          return (
            Xe(t, e),
            (t.prototype.addLayer = function (e, t) {
              return this.stump.addLayer(e, t);
            }),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.getStorage = function () {
              return this.storageTrie.lookupArray(arguments);
            }),
            t
          );
        })(e);
        e.Root = t;
      })(Za || (Za = {}));
      var to = (function (e) {
          function t(t, n, r, i) {
            var a = e.call(this, n.policies, i) || this;
            return (
              (a.id = t), (a.parent = n), (a.replay = r), (a.group = i), r(a), a
            );
          }
          return (
            Xe(t, e),
            (t.prototype.addLayer = function (e, n) {
              return new t(e, this, n, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                n = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var r = t.data[e],
                        i = n.lookup(e);
                      i
                        ? r
                          ? r !== i &&
                            Object.keys(r).forEach(function (n) {
                              Pr(r[n], i[n]) || t.group.dirty(e, n);
                            })
                          : (t.group.dirty(e, "__exists"),
                            Object.keys(i).forEach(function (n) {
                              t.group.dirty(e, n);
                            }))
                        : t.delete(e);
                    }),
                  n)
                : n === this.parent
                ? this
                : n.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return $e($e({}, this.parent.toObject()), this.data);
            }),
            (t.prototype.findChildRefIds = function (t) {
              var n = this.parent.findChildRefIds(t);
              return Xr.call(this.data, t)
                ? $e($e({}, n), e.prototype.findChildRefIds.call(this, t))
                : n;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(Za),
        no = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                "EntityStore.Stump",
                t,
                function () {},
                new Xa(t.group.caching, t.group)
              ) || this
            );
          }
          return (
            Xe(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function () {
              return this.parent.merge.apply(this.parent, arguments);
            }),
            t
          );
        })(to);
      function ro(e, t, n) {
        var r = e[n],
          i = t[n];
        return Pr(r, i) ? r : i;
      }
      function io(e) {
        return !!(e instanceof Za && e.group.caching);
      }
      function ao(e) {
        return [
          e.selectionSet,
          e.objectOrReference,
          e.context,
          e.context.canonizeResults,
        ];
      }
      var oo = (function () {
        function e(e) {
          var t = this;
          (this.knownResults = new (Qn ? WeakMap : Map)()),
            (this.config = Zr(e, {
              addTypename: !1 !== e.addTypename,
              canonizeResults: ri(e),
            })),
            (this.canon = e.canon || new fi()),
            (this.executeSelectionSet = Na(
              function (e) {
                var n,
                  r = e.context.canonizeResults,
                  i = ao(e);
                i[3] = !r;
                var a = (n = t.executeSelectionSet).peek.apply(n, i);
                return a
                  ? r
                    ? $e($e({}, a), { result: t.canon.admit(a.result) })
                    : a
                  : (eo(e.context.store, e.enclosingRef.__ref),
                    t.execSelectionSetImpl(e));
              },
              {
                max: this.config.resultCacheMaxSize,
                keyArgs: ao,
                makeCacheKey: function (e, t, n, r) {
                  if (io(n.store))
                    return n.store.makeCacheKey(
                      e,
                      tn(t) ? t.__ref : t,
                      n.varString,
                      r
                    );
                },
              }
            )),
            (this.executeSubSelectedArray = Na(
              function (e) {
                return (
                  eo(e.context.store, e.enclosingRef.__ref),
                  t.execSubSelectedArrayImpl(e)
                );
              },
              {
                max: this.config.resultCacheMaxSize,
                makeCacheKey: function (e) {
                  var t = e.field,
                    n = e.array,
                    r = e.context;
                  if (io(r.store))
                    return r.store.makeCacheKey(t, n, r.varString);
                },
              }
            ));
        }
        return (
          (e.prototype.resetCanon = function () {
            this.canon = new fi();
          }),
          (e.prototype.diffQueryAgainstStore = function (e) {
            var t = e.store,
              n = e.query,
              r = e.rootId,
              i = void 0 === r ? "ROOT_QUERY" : r,
              a = e.variables,
              o = e.returnPartialData,
              u = void 0 === o || o,
              s = e.canonizeResults,
              l = void 0 === s ? this.config.canonizeResults : s,
              c = this.config.cache.policies;
            a = $e($e({}, bn(mn(n))), a);
            var f,
              d = en(i),
              p = this.executeSelectionSet({
                selectionSet: gn(n).selectionSet,
                objectOrReference: d,
                enclosingRef: d,
                context: $e(
                  {
                    store: t,
                    query: n,
                    policies: c,
                    variables: a,
                    varString: di(a),
                    canonizeResults: l,
                  },
                  si(n, this.config.fragments)
                ),
              });
            if (
              p.missing &&
              ((f = [new Wa(uo(p.missing), p.missing, n, a)]), !u)
            )
              throw f[0];
            return { result: p.result, complete: !f, missing: f };
          }),
          (e.prototype.isFresh = function (e, t, n, r) {
            if (io(r.store) && this.knownResults.get(e) === n) {
              var i = this.executeSelectionSet.peek(
                n,
                t,
                r,
                this.canon.isKnown(e)
              );
              if (i && e === i.result) return !0;
            }
            return !1;
          }),
          (e.prototype.execSelectionSetImpl = function (e) {
            var t = this,
              n = e.selectionSet,
              r = e.objectOrReference,
              i = e.enclosingRef,
              a = e.context;
            if (
              tn(r) &&
              !a.policies.rootTypenamesById[r.__ref] &&
              !a.store.has(r.__ref)
            )
              return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(
                  r.__ref,
                  " object"
                ),
              };
            var o,
              u = a.variables,
              s = a.policies,
              l = a.store.getFieldValue(r, "__typename"),
              c = [],
              f = new Ur();
            function d(e, t) {
              var n;
              return (
                e.missing && (o = f.merge(o, (((n = {})[t] = e.missing), n))),
                e.result
              );
            }
            this.config.addTypename &&
              "string" === typeof l &&
              !s.rootIdsByTypename[l] &&
              c.push({ __typename: l });
            var p = new Set(n.selections);
            p.forEach(function (e) {
              var n, h;
              if (Ln(e, u))
                if (fn(e)) {
                  var v = s.readField(
                      {
                        fieldName: e.name.value,
                        field: e,
                        variables: a.variables,
                        from: r,
                      },
                      a
                    ),
                    y = ln(e);
                  void 0 === v
                    ? Si.added(e) ||
                      (o = f.merge(
                        o,
                        (((n = {})[y] = "Can't find field '"
                          .concat(e.name.value, "' on ")
                          .concat(
                            tn(r)
                              ? r.__ref + " object"
                              : "object " + JSON.stringify(r, null, 2)
                          )),
                        n)
                      ))
                    : ei(v)
                    ? (v = d(
                        t.executeSubSelectedArray({
                          field: e,
                          array: v,
                          enclosingRef: i,
                          context: a,
                        }),
                        y
                      ))
                    : e.selectionSet
                    ? null != v &&
                      (v = d(
                        t.executeSelectionSet({
                          selectionSet: e.selectionSet,
                          objectOrReference: v,
                          enclosingRef: tn(v) ? v : i,
                          context: a,
                        }),
                        y
                      ))
                    : a.canonizeResults && (v = t.canon.pass(v)),
                    void 0 !== v && c.push((((h = {})[y] = v), h));
                } else {
                  var m = $t(e, a.lookupFragment);
                  if (!m && e.kind === xn.FRAGMENT_SPREAD)
                    throw __DEV__
                      ? new ut("No fragment named ".concat(e.name.value))
                      : new ut(5);
                  m &&
                    s.fragmentMatches(m, l) &&
                    m.selectionSet.selections.forEach(p.add, p);
                }
            });
            var h = { result: Qr(c), missing: o },
              v = a.canonizeResults ? this.canon.admit(h) : Ya(h);
            return v.result && this.knownResults.set(v.result, n), v;
          }),
          (e.prototype.execSubSelectedArrayImpl = function (e) {
            var t,
              n = this,
              r = e.field,
              i = e.array,
              a = e.enclosingRef,
              o = e.context,
              u = new Ur();
            function s(e, n) {
              var r;
              return (
                e.missing && (t = u.merge(t, (((r = {})[n] = e.missing), r))),
                e.result
              );
            }
            return (
              r.selectionSet && (i = i.filter(o.store.canRead)),
              (i = i.map(function (e, t) {
                return null === e
                  ? null
                  : ei(e)
                  ? s(
                      n.executeSubSelectedArray({
                        field: r,
                        array: e,
                        enclosingRef: a,
                        context: o,
                      }),
                      t
                    )
                  : r.selectionSet
                  ? s(
                      n.executeSelectionSet({
                        selectionSet: r.selectionSet,
                        objectOrReference: e,
                        enclosingRef: tn(e) ? e : a,
                        context: o,
                      }),
                      t
                    )
                  : (__DEV__ &&
                      (function (e, t, n) {
                        if (!t.selectionSet) {
                          var r = new Set([n]);
                          r.forEach(function (n) {
                            Jt(n) &&
                              (__DEV__
                                ? st(
                                    !tn(n),
                                    "Missing selection set for object of type "
                                      .concat(
                                        (function (e, t) {
                                          return tn(t)
                                            ? e.get(t.__ref, "__typename")
                                            : t && t.__typename;
                                        })(e, n),
                                        " returned for query field "
                                      )
                                      .concat(t.name.value)
                                  )
                                : st(!tn(n), 6),
                              Object.values(n).forEach(r.add, r));
                          });
                        }
                      })(o.store, r, e),
                    e);
              })),
              {
                result: o.canonizeResults ? this.canon.admit(i) : i,
                missing: t,
              }
            );
          }),
          e
        );
      })();
      function uo(e) {
        try {
          JSON.stringify(e, function (e, t) {
            if ("string" === typeof t) throw t;
            return t;
          });
        } catch (t) {
          return t;
        }
      }
      var so = Object.create(null);
      function lo(e) {
        var t = JSON.stringify(e);
        return so[t] || (so[t] = Object.create(null));
      }
      function co(e) {
        var t = lo(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, n) {
            var r = function (e, t) {
                return n.readField(t, e);
              },
              i = (n.keyObject = po(e, function (e) {
                var i = yo(n.storeObject, e, r);
                return (
                  void 0 === i &&
                    t !== n.storeObject &&
                    Xr.call(t, e[0]) &&
                    (i = yo(t, e, vo)),
                  __DEV__
                    ? st(
                        void 0 !== i,
                        "Missing field '"
                          .concat(
                            e.join("."),
                            "' while extracting keyFields from "
                          )
                          .concat(JSON.stringify(t))
                      )
                    : st(void 0 !== i, 2),
                  i
                );
              }));
            return "".concat(n.typename, ":").concat(JSON.stringify(i));
          })
        );
      }
      function fo(e) {
        var t = lo(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, n) {
            var r = n.field,
              i = n.variables,
              a = n.fieldName,
              o = po(e, function (e) {
                var n = e[0],
                  a = n.charAt(0);
                if ("@" !== a)
                  if ("$" !== a) {
                    if (t) return yo(t, e);
                  } else {
                    var o = n.slice(1);
                    if (i && Xr.call(i, o)) {
                      var u = e.slice(0);
                      return (u[0] = o), yo(i, u);
                    }
                  }
                else if (r && Mr(r.directives)) {
                  var s = n.slice(1),
                    l = r.directives.find(function (e) {
                      return e.name.value === s;
                    }),
                    c = l && sn(l, i);
                  return c && yo(c, e.slice(1));
                }
              }),
              u = JSON.stringify(o);
            return (t || "{}" !== u) && (a += ":" + u), a;
          })
        );
      }
      function po(e, t) {
        var n = new Ur();
        return ho(e).reduce(function (e, r) {
          var i,
            a = t(r);
          if (void 0 !== a) {
            for (var o = r.length - 1; o >= 0; --o)
              ((i = {})[r[o]] = a), (a = i);
            e = n.merge(e, a);
          }
          return e;
        }, Object.create(null));
      }
      function ho(e) {
        var t = lo(e);
        if (!t.paths) {
          var n = (t.paths = []),
            r = [];
          e.forEach(function (t, i) {
            ei(t)
              ? (ho(t).forEach(function (e) {
                  return n.push(r.concat(e));
                }),
                (r.length = 0))
              : (r.push(t),
                ei(e[i + 1]) || (n.push(r.slice(0)), (r.length = 0)));
          });
        }
        return t.paths;
      }
      function vo(e, t) {
        return e[t];
      }
      function yo(e, t, n) {
        return (
          (n = n || vo),
          mo(
            t.reduce(function e(t, r) {
              return ei(t)
                ? t.map(function (t) {
                    return e(t, r);
                  })
                : t && n(t, r);
            }, e)
          )
        );
      }
      function mo(e) {
        return Jt(e)
          ? ei(e)
            ? e.map(mo)
            : po(Object.keys(e).sort(), function (t) {
                return yo(e, t);
              })
          : e;
      }
      function go(e) {
        return void 0 !== e.args
          ? e.args
          : e.field
          ? sn(e.field, e.variables)
          : null;
      }
      an.setStringify(di);
      var bo = function () {},
        wo = function (e, t) {
          return t.fieldName;
        },
        ko = function (e, t, n) {
          return (0, n.mergeObjects)(e, t);
        },
        Eo = function (e, t) {
          return t;
        },
        So = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = $e({ dataIdFromObject: ti }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename("Query"),
              this.setRootTypename("Mutation"),
              this.setRootTypename("Subscription"),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var n,
                r = this,
                i =
                  (t &&
                    (t.typename ||
                      (null === (n = t.storeObject) || void 0 === n
                        ? void 0
                        : n.__typename))) ||
                  e.__typename;
              if (i === this.rootTypenamesById.ROOT_QUERY)
                return ["ROOT_QUERY"];
              for (
                var a,
                  o = (t && t.storeObject) || e,
                  u = $e($e({}, t), {
                    typename: i,
                    storeObject: o,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = _o(arguments, o);
                        return r.readField(e, {
                          store: r.cache.data,
                          variables: e.variables,
                        });
                      },
                  }),
                  s = i && this.getTypePolicy(i),
                  l = (s && s.keyFn) || this.config.dataIdFromObject;
                l;

              ) {
                var c = l(e, u);
                if (!ei(c)) {
                  a = c;
                  break;
                }
                l = co(c);
              }
              return (
                (a = a ? String(a) : void 0),
                u.keyObject ? [a, u.keyObject] : [a]
              );
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                var r = e[n],
                  i = r.queryType,
                  a = r.mutationType,
                  o = r.subscriptionType,
                  u = et(r, ["queryType", "mutationType", "subscriptionType"]);
                i && t.setRootTypename("Query", n),
                  a && t.setRootTypename("Mutation", n),
                  o && t.setRootTypename("Subscription", n),
                  Xr.call(t.toBeAdded, n)
                    ? t.toBeAdded[n].push(u)
                    : (t.toBeAdded[n] = [u]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var n = this,
                r = this.getTypePolicy(e),
                i = t.keyFields,
                a = t.fields;
              function o(e, t) {
                e.merge =
                  "function" === typeof t
                    ? t
                    : !0 === t
                    ? ko
                    : !1 === t
                    ? Eo
                    : e.merge;
              }
              o(r, t.merge),
                (r.keyFn =
                  !1 === i
                    ? bo
                    : ei(i)
                    ? co(i)
                    : "function" === typeof i
                    ? i
                    : r.keyFn),
                a &&
                  Object.keys(a).forEach(function (t) {
                    var r = n.getFieldPolicy(e, t, !0),
                      i = a[t];
                    if ("function" === typeof i) r.read = i;
                    else {
                      var u = i.keyArgs,
                        s = i.read,
                        l = i.merge;
                      (r.keyFn =
                        !1 === u
                          ? wo
                          : ei(u)
                          ? fo(u)
                          : "function" === typeof u
                          ? u
                          : r.keyFn),
                        "function" === typeof s && (r.read = s),
                        o(r, l);
                    }
                    r.read && r.merge && (r.keyFn = r.keyFn || wo);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var n = "ROOT_" + e.toUpperCase(),
                r = this.rootTypenamesById[n];
              t !== r &&
                (__DEV__
                  ? st(
                      !r || r === e,
                      "Cannot change root ".concat(
                        e,
                        " __typename more than once"
                      )
                    )
                  : st(!r || r === e, 3),
                r && delete this.rootIdsByTypename[r],
                (this.rootIdsByTypename[t] = n),
                (this.rootTypenamesById[n] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (n) {
                  t.getSupertypeSet(n, !0),
                    e[n].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(n);
                      var r = e.match(ii);
                      (r && r[0] === e) ||
                        t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!Xr.call(this.typePolicies, e)) {
                var n = (this.typePolicies[e] = Object.create(null));
                n.fields = Object.create(null);
                var r = this.supertypeMap.get(e);
                r &&
                  r.size &&
                  r.forEach(function (e) {
                    var r = t.getTypePolicy(e),
                      i = r.fields,
                      a = et(r, ["fields"]);
                    Object.assign(n, a), Object.assign(n.fields, i);
                  });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (n) {
                    t.updateTypePolicy(e, n);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, n) {
              if (e) {
                var r = this.getTypePolicy(e).fields;
                return r[t] || (n && (r[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var n = this.supertypeMap.get(e);
              return !n && t && this.supertypeMap.set(e, (n = new Set())), n;
            }),
            (e.prototype.fragmentMatches = function (e, t, n, r) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var a = e.typeCondition.name.value;
              if (t === a) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(a))
                for (
                  var o = this.getSupertypeSet(t, !0),
                    u = [o],
                    s = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && u.indexOf(t) < 0 && u.push(t);
                    },
                    l = !(!n || !this.fuzzySubtypes.size),
                    c = !1,
                    f = 0;
                  f < u.length;
                  ++f
                ) {
                  var d = u[f];
                  if (d.has(a))
                    return (
                      o.has(a) ||
                        (c &&
                          __DEV__ &&
                          st.warn(
                            "Inferring subtype "
                              .concat(t, " of supertype ")
                              .concat(a)
                          ),
                        o.add(a)),
                      !0
                    );
                  d.forEach(s),
                    l &&
                      f === u.length - 1 &&
                      oi(e.selectionSet, n, r) &&
                      ((l = !1),
                      (c = !0),
                      this.fuzzySubtypes.forEach(function (e, n) {
                        var r = t.match(e);
                        r && r[0] === t && s(n);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return !(!n || !n.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                n = e.typename,
                r = e.fieldName,
                i = this.getFieldPolicy(n, r, !1),
                a = i && i.keyFn;
              if (a && n)
                for (
                  var o = {
                      typename: n,
                      fieldName: r,
                      field: e.field || null,
                      variables: e.variables,
                    },
                    u = go(e);
                  a;

                ) {
                  var s = a(u, o);
                  if (!ei(s)) {
                    t = s || r;
                    break;
                  }
                  a = fo(s);
                }
              return (
                void 0 === t &&
                  (t = e.field
                    ? (function (e, t) {
                        var n = null;
                        e.directives &&
                          ((n = {}),
                          e.directives.forEach(function (e) {
                            (n[e.name.value] = {}),
                              e.arguments &&
                                e.arguments.forEach(function (r) {
                                  var i = r.name,
                                    a = r.value;
                                  return nn(n[e.name.value], i, a, t);
                                });
                          }));
                        var r = null;
                        return (
                          e.arguments &&
                            e.arguments.length &&
                            ((r = {}),
                            e.arguments.forEach(function (e) {
                              var n = e.name,
                                i = e.value;
                              return nn(r, n, i, t);
                            })),
                          an(e.name.value, r, n)
                        );
                      })(e.field, e.variables)
                    : an(r, go(e))),
                !1 === t ? r : r === ai(t) ? t : r + ":" + t
              );
            }),
            (e.prototype.readField = function (e, t) {
              var n = e.from;
              if (n && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var r = t.store.getFieldValue(n, "__typename");
                  r && (e.typename = r);
                }
                var i = this.getStoreFieldName(e),
                  a = ai(i),
                  o = t.store.getFieldValue(n, i),
                  u = this.getFieldPolicy(e.typename, a, !1),
                  s = u && u.read;
                if (s) {
                  var l = xo(
                    this,
                    n,
                    e,
                    t,
                    t.store.getStorage(tn(n) ? n.__ref : n, i)
                  );
                  return Ca.withValue(this.cache, s, [o, l]);
                }
                return o;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return n && n.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, n) {
              var r = this.getFieldPolicy(e, t, !1),
                i = r && r.merge;
              return !i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, n, r, i) {
              var a = n.field,
                o = n.typename,
                u = n.merge;
              return u === ko
                ? Oo(r.store)(e, t)
                : u === Eo
                ? t
                : (r.overwrite && (e = void 0),
                  u(
                    e,
                    t,
                    xo(
                      this,
                      void 0,
                      {
                        typename: o,
                        fieldName: a.name.value,
                        field: a,
                        variables: r.variables,
                      },
                      r,
                      i || Object.create(null)
                    )
                  ));
            }),
            e
          );
        })();
      function xo(e, t, n, r, i) {
        var a = e.getStoreFieldName(n),
          o = ai(a),
          u = n.variables || r.variables,
          s = r.store,
          l = s.toReference,
          c = s.canRead;
        return {
          args: go(n),
          field: n.field || null,
          fieldName: o,
          storeFieldName: a,
          variables: u,
          isReference: tn,
          toReference: l,
          storage: i,
          cache: e.cache,
          canRead: c,
          readField: function () {
            return e.readField(_o(arguments, t, u), r);
          },
          mergeObjects: Oo(r.store),
        };
      }
      function _o(e, t, n) {
        var r,
          i = e[0],
          a = e[1],
          o = e.length;
        return (
          "string" === typeof i
            ? (r = { fieldName: i, from: o > 1 ? a : t })
            : ((r = $e({}, i)), Xr.call(r, "from") || (r.from = t)),
          __DEV__ &&
            void 0 === r.from &&
            __DEV__ &&
            st.warn(
              "Undefined 'from' passed to readField with arguments ".concat(
                (function (e) {
                  var t = Ci("stringifyForDisplay");
                  return JSON.stringify(e, function (e, n) {
                    return void 0 === n ? t : n;
                  })
                    .split(JSON.stringify(t))
                    .join("<undefined>");
                })(Array.from(e))
              )
            ),
          void 0 === r.variables && (r.variables = n),
          r
        );
      }
      function Oo(e) {
        return function (t, n) {
          if (ei(t) || ei(n))
            throw __DEV__
              ? new ut("Cannot automatically merge arrays")
              : new ut(4);
          if (Jt(t) && Jt(n)) {
            var r = e.getFieldValue(t, "__typename"),
              i = e.getFieldValue(n, "__typename");
            if (r && i && r !== i) return n;
            if (tn(t) && ui(n)) return e.merge(t.__ref, n), t;
            if (ui(t) && tn(n)) return e.merge(t, n.__ref), n;
            if (ui(t) && ui(n)) return $e($e({}, t), n);
          }
          return n;
        };
      }
      function No(e, t, n) {
        var r = "".concat(t).concat(n),
          i = e.flavors.get(r);
        return (
          i ||
            e.flavors.set(
              r,
              (i =
                e.clientOnly === t && e.deferred === n
                  ? e
                  : $e($e({}, e), { clientOnly: t, deferred: n }))
            ),
          i
        );
      }
      var Co = (function () {
          function e(e, t, n) {
            (this.cache = e), (this.reader = t), (this.fragments = n);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var n = this,
                r = t.query,
                i = t.result,
                a = t.dataId,
                o = t.variables,
                u = t.overwrite,
                s = hn(r),
                l = new Ur();
              o = $e($e({}, bn(s)), o);
              var c = $e(
                  $e(
                    {
                      store: e,
                      written: Object.create(null),
                      merge: function (e, t) {
                        return l.merge(e, t);
                      },
                      variables: o,
                      varString: di(o),
                    },
                    si(r, this.fragments)
                  ),
                  {
                    overwrite: !!u,
                    incomingById: new Map(),
                    clientOnly: !1,
                    deferred: !1,
                    flavors: new Map(),
                  }
                ),
                f = this.processSelectionSet({
                  result: i || Object.create(null),
                  dataId: a,
                  selectionSet: s.selectionSet,
                  mergeTree: { map: new Map() },
                  context: c,
                });
              if (!tn(f))
                throw __DEV__
                  ? new ut(
                      "Could not identify object ".concat(JSON.stringify(i))
                    )
                  : new ut(7);
              return (
                c.incomingById.forEach(function (t, r) {
                  var i = t.storeObject,
                    a = t.mergeTree,
                    o = t.fieldNodeSet,
                    u = en(r);
                  if (a && a.map.size) {
                    var s = n.applyMerges(a, u, i, c);
                    if (tn(s)) return;
                    i = s;
                  }
                  if (__DEV__ && !c.overwrite) {
                    var l = Object.create(null);
                    o.forEach(function (e) {
                      e.selectionSet && (l[e.name.value] = !0);
                    });
                    Object.keys(i).forEach(function (e) {
                      (function (e) {
                        return !0 === l[ai(e)];
                      })(e) &&
                        !(function (e) {
                          var t = a && a.map.get(e);
                          return Boolean(t && t.info && t.info.merge);
                        })(e) &&
                        (function (e, t, n, r) {
                          var i = function (e) {
                              var t = r.getFieldValue(e, n);
                              return "object" === typeof t && t;
                            },
                            a = i(e);
                          if (!a) return;
                          var o = i(t);
                          if (!o) return;
                          if (tn(a)) return;
                          if (Pr(a, o)) return;
                          if (
                            Object.keys(a).every(function (e) {
                              return void 0 !== r.getFieldValue(o, e);
                            })
                          )
                            return;
                          var u =
                              r.getFieldValue(e, "__typename") ||
                              r.getFieldValue(t, "__typename"),
                            s = ai(n),
                            l = "".concat(u, ".").concat(s);
                          if (Ro.has(l)) return;
                          Ro.add(l);
                          var c = [];
                          ei(a) ||
                            ei(o) ||
                            [a, o].forEach(function (e) {
                              var t = r.getFieldValue(e, "__typename");
                              "string" !== typeof t ||
                                c.includes(t) ||
                                c.push(t);
                            });
                          __DEV__ &&
                            st.warn(
                              "Cache data may be lost when replacing the "
                                .concat(s, " field of a ")
                                .concat(
                                  u,
                                  " object.\n\nTo address this problem (which is not a bug in Apollo Client), "
                                )
                                .concat(
                                  c.length
                                    ? "either ensure all objects of type " +
                                        c.join(" and ") +
                                        " have an ID or a custom merge function, or "
                                    : "",
                                  "define a custom merge function for the "
                                )
                                .concat(
                                  l,
                                  " field, so InMemoryCache can safely merge these objects:\n\n  existing: "
                                )
                                .concat(
                                  JSON.stringify(a).slice(0, 1e3),
                                  "\n  incoming: "
                                )
                                .concat(
                                  JSON.stringify(o).slice(0, 1e3),
                                  "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"
                                )
                            );
                        })(u, i, e, c.store);
                    });
                  }
                  e.merge(r, i);
                }),
                e.retain(f.__ref),
                f
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                n = e.dataId,
                r = e.result,
                i = e.selectionSet,
                a = e.context,
                o = e.mergeTree,
                u = this.cache.policies,
                s = Object.create(null),
                l =
                  (n && u.rootTypenamesById[n]) ||
                  cn(r, i, a.fragmentMap) ||
                  (n && a.store.get(n, "__typename"));
              "string" === typeof l && (s.__typename = l);
              var c = function () {
                  var e = _o(arguments, s, a.variables);
                  if (tn(e.from)) {
                    var t = a.incomingById.get(e.from.__ref);
                    if (t) {
                      var n = u.readField(
                        $e($e({}, e), { from: t.storeObject }),
                        a
                      );
                      if (void 0 !== n) return n;
                    }
                  }
                  return u.readField(e, a);
                },
                f = new Set();
              this.flattenFields(i, r, a, l).forEach(function (e, n) {
                var i,
                  a = ln(n),
                  d = r[a];
                if ((f.add(n), void 0 !== d)) {
                  var p = u.getStoreFieldName({
                      typename: l,
                      fieldName: n.name.value,
                      field: n,
                      variables: e.variables,
                    }),
                    h = Do(o, p),
                    v = t.processFieldValue(
                      d,
                      n,
                      n.selectionSet ? No(e, !1, !1) : e,
                      h
                    ),
                    y = void 0;
                  n.selectionSet &&
                    (tn(v) || ui(v)) &&
                    (y = c("__typename", v));
                  var m = u.getMergeFunction(l, n.name.value, y);
                  m ? (h.info = { field: n, typename: l, merge: m }) : jo(o, p),
                    (s = e.merge(s, (((i = {})[p] = v), i)));
                } else !__DEV__ || e.clientOnly || e.deferred || Si.added(n) || u.getReadFunction(l, n.name.value) || (__DEV__ && st.error("Missing field '".concat(ln(n), "' while writing result ").concat(JSON.stringify(r, null, 2)).substring(0, 1e3)));
              });
              try {
                var d = u.identify(r, {
                    typename: l,
                    selectionSet: i,
                    fragmentMap: a.fragmentMap,
                    storeObject: s,
                    readField: c,
                  }),
                  p = d[0],
                  h = d[1];
                (n = n || p), h && (s = a.merge(s, h));
              } catch (g) {
                if (!n) throw g;
              }
              if ("string" === typeof n) {
                var v = en(n),
                  y = a.written[n] || (a.written[n] = []);
                if (y.indexOf(i) >= 0) return v;
                if ((y.push(i), this.reader && this.reader.isFresh(r, v, i, a)))
                  return v;
                var m = a.incomingById.get(n);
                return (
                  m
                    ? ((m.storeObject = a.merge(m.storeObject, s)),
                      (m.mergeTree = Io(m.mergeTree, o)),
                      f.forEach(function (e) {
                        return m.fieldNodeSet.add(e);
                      }))
                    : a.incomingById.set(n, {
                        storeObject: s,
                        mergeTree: Po(o) ? void 0 : o,
                        fieldNodeSet: f,
                      }),
                  v
                );
              }
              return s;
            }),
            (e.prototype.processFieldValue = function (e, t, n, r) {
              var i = this;
              return t.selectionSet && null !== e
                ? ei(e)
                  ? e.map(function (e, a) {
                      var o = i.processFieldValue(e, t, n, Do(r, a));
                      return jo(r, a), o;
                    })
                  : this.processSelectionSet({
                      result: e,
                      selectionSet: t.selectionSet,
                      context: n,
                      mergeTree: r,
                    })
                : __DEV__
                ? Mi(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, n, r) {
              void 0 === r && (r = cn(t, e, n.fragmentMap));
              var i = new Map(),
                a = this.cache.policies,
                o = new Jr(!1);
              return (
                (function e(u, s) {
                  var l = o.lookup(u, s.clientOnly, s.deferred);
                  l.visited ||
                    ((l.visited = !0),
                    u.selections.forEach(function (o) {
                      if (Ln(o, n.variables)) {
                        var u = s.clientOnly,
                          l = s.deferred;
                        if (
                          ((u && l) ||
                            !Mr(o.directives) ||
                            o.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (("client" === t && (u = !0), "defer" === t)) {
                                var r = sn(e, n.variables);
                                (r && !1 === r.if) || (l = !0);
                              }
                            }),
                          fn(o))
                        ) {
                          var c = i.get(o);
                          c && ((u = u && c.clientOnly), (l = l && c.deferred)),
                            i.set(o, No(n, u, l));
                        } else {
                          var f = $t(o, n.lookupFragment);
                          if (!f && o.kind === xn.FRAGMENT_SPREAD)
                            throw __DEV__
                              ? new ut(
                                  "No fragment named ".concat(o.name.value)
                                )
                              : new ut(8);
                          f &&
                            a.fragmentMatches(f, r, t, n.variables) &&
                            e(f.selectionSet, No(n, u, l));
                        }
                      }
                    }));
                })(e, n),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, n, r, i) {
              var a,
                o = this;
              if (e.map.size && !tn(n)) {
                var u,
                  s = ei(n) || (!tn(t) && !ui(t)) ? void 0 : t,
                  l = n;
                s && !i && (i = [tn(s) ? s.__ref : s]);
                var c = function (e, t) {
                  return ei(e)
                    ? "number" === typeof t
                      ? e[t]
                      : void 0
                    : r.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var n = c(s, t),
                    a = c(l, t);
                  if (void 0 !== a) {
                    i && i.push(t);
                    var f = o.applyMerges(e, n, a, r, i);
                    f !== a && (u = u || new Map()).set(t, f),
                      i && st(i.pop() === t);
                  }
                }),
                  u &&
                    ((n = ei(l) ? l.slice(0) : $e({}, l)),
                    u.forEach(function (e, t) {
                      n[t] = e;
                    }));
              }
              return e.info
                ? this.cache.policies.runMergeFunction(
                    t,
                    n,
                    e.info,
                    r,
                    i && (a = r.store).getStorage.apply(a, i)
                  )
                : n;
            }),
            e
          );
        })(),
        To = [];
      function Do(e, t) {
        var n = e.map;
        return n.has(t) || n.set(t, To.pop() || { map: new Map() }), n.get(t);
      }
      function Io(e, t) {
        if (e === t || !t || Po(t)) return e;
        if (!e || Po(e)) return t;
        var n =
            e.info && t.info ? $e($e({}, e.info), t.info) : e.info || t.info,
          r = e.map.size && t.map.size,
          i = { info: n, map: r ? new Map() : e.map.size ? e.map : t.map };
        if (r) {
          var a = new Set(t.map.keys());
          e.map.forEach(function (e, n) {
            i.map.set(n, Io(e, t.map.get(n))), a.delete(n);
          }),
            a.forEach(function (n) {
              i.map.set(n, Io(t.map.get(n), e.map.get(n)));
            });
        }
        return i;
      }
      function Po(e) {
        return !e || !(e.info || e.map.size);
      }
      function jo(e, t) {
        var n = e.map,
          r = n.get(t);
        r && Po(r) && (To.push(r), n.delete(t));
      }
      var Ro = new Set();
      var Ao = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this) || this;
            return (
              (n.watches = new Set()),
              (n.typenameDocumentCache = new Map()),
              (n.makeVar = Pa),
              (n.txCount = 0),
              (n.config = (function (e) {
                return Zr(ni, e);
              })(t)),
              (n.addTypename = !!n.config.addTypename),
              (n.policies = new So({
                cache: n,
                dataIdFromObject: n.config.dataIdFromObject,
                possibleTypes: n.config.possibleTypes,
                typePolicies: n.config.typePolicies,
              })),
              n.init(),
              n
            );
          }
          return (
            Xe(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new Za.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching,
              }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                n = this.storeReader,
                r = this.config.fragments;
              (this.storeWriter = new Co(
                this,
                (this.storeReader = new oo({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: ri(this.config),
                  canon: e ? void 0 : n && n.canon,
                  fragments: r,
                })),
                r
              )),
                (this.maybeBroadcastWatch = Na(
                  function (e, n) {
                    return t.broadcastWatch(e, n);
                  },
                  {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function (e) {
                      var n = e.optimistic ? t.optimisticData : t.data;
                      if (io(n)) {
                        var r = e.optimistic,
                          i = e.id,
                          a = e.variables;
                        return n.makeCacheKey(
                          e.query,
                          e.callback,
                          di({ optimistic: r, id: i, variables: a })
                        );
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(
                  function (e) {
                    return e.resetCaching();
                  }
                );
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
              );
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData,
                n = void 0 !== t && t;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    $e($e({}, e), {
                      store: e.optimistic ? this.optimisticData : this.data,
                      config: this.config,
                      returnPartialData: n,
                    })
                  ).result || null
                );
              } catch (r) {
                if (r instanceof Wa) return null;
                throw r;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return (
                  ++this.txCount, this.storeWriter.writeToStore(this.data, e)
                );
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (Xr.call(e, "id") && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore(
                $e($e({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  rootId: e.id || "ROOT_QUERY",
                  config: this.config,
                })
              );
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size ||
                  (function (e) {
                    Da(e).vars.forEach(function (t) {
                      return t.attachCache(e);
                    });
                  })(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && Ia(t),
                    t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              di.reset();
              var t = this.optimisticData.gc();
              return (
                e &&
                  !this.txCount &&
                  (e.resetResultCache
                    ? this.resetResultCache(e.resetResultIdentities)
                    : e.resetResultIdentities && this.storeReader.resetCanon()),
                t
              );
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if (tn(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (t) {
                __DEV__ && st.warn(t);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (Xr.call(e, "id")) return !1;
                e = $e($e({}, e), { id: "ROOT_QUERY" });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                di.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    Ia(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData &&
                ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                n = this,
                r = e.update,
                i = e.optimistic,
                a = void 0 === i || i,
                o = e.removeOptimistic,
                u = e.onWatchUpdated,
                s = function (e) {
                  var i = n,
                    a = i.data,
                    o = i.optimisticData;
                  ++n.txCount, e && (n.data = n.optimisticData = e);
                  try {
                    return (t = r(n));
                  } finally {
                    --n.txCount, (n.data = a), (n.optimisticData = o);
                  }
                },
                l = new Set();
              return (
                u &&
                  !this.txCount &&
                  this.broadcastWatches(
                    $e($e({}, e), {
                      onWatchUpdated: function (e) {
                        return l.add(e), !1;
                      },
                    })
                  ),
                "string" === typeof a
                  ? (this.optimisticData = this.optimisticData.addLayer(a, s))
                  : !1 === a
                  ? s(this.data)
                  : s(),
                "string" === typeof o &&
                  (this.optimisticData = this.optimisticData.removeLayer(o)),
                u && l.size
                  ? (this.broadcastWatches(
                      $e($e({}, e), {
                        onWatchUpdated: function (e, t) {
                          var n = u.call(this, e, t);
                          return !1 !== n && l.delete(e), n;
                        },
                      })
                    ),
                    l.size &&
                      l.forEach(function (e) {
                        return n.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              if (this.addTypename) {
                var t = this.typenameDocumentCache.get(e);
                return (
                  t ||
                    ((t = Si(e)),
                    this.typenameDocumentCache.set(e, t),
                    this.typenameDocumentCache.set(t, t)),
                  t
                );
              }
              return e;
            }),
            (t.prototype.transformForLink = function (e) {
              var t = this.config.fragments;
              return t ? t.transform(e) : e;
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (n) {
                  return t.maybeBroadcastWatch(n, e);
                });
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var n = e.lastDiff,
                r = this.diff(e);
              (t &&
                (e.optimistic &&
                  "string" === typeof t.optimistic &&
                  (r.fromOptimisticTransaction = !0),
                t.onWatchUpdated &&
                  !1 === t.onWatchUpdated.call(this, e, r, n))) ||
                (n && Pr(n.result, r.result)) ||
                e.callback((e.lastDiff = r), n);
            }),
            t
          );
        })(Ba),
        Fo = Un ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
      function Lo() {
        var e = t.createContext[Fo];
        return (
          e ||
            (Object.defineProperty(t.createContext, Fo, {
              value: (e = t.createContext({})),
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            (e.displayName = "ApolloContext")),
          e
        );
      }
      var Mo = function (e) {
          var n = e.client,
            r = e.children,
            i = Lo();
          return t.createElement(i.Consumer, null, function (e) {
            return (
              void 0 === e && (e = {}),
              n && e.client !== n && (e = Object.assign({}, e, { client: n })),
              __DEV__
                ? st(
                    e.client,
                    'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'
                  )
                : st(e.client, 29),
              t.createElement(i.Provider, { value: e }, r)
            );
          });
        },
        zo = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Vo = t.createContext && t.createContext(zo),
        Qo = function () {
          return (
            (Qo =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Qo.apply(this, arguments)
          );
        },
        qo = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        };
      function Uo(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, Qo({ key: n }, e.attr), Uo(e.child));
          })
        );
      }
      function Bo(e) {
        return function (n) {
          return t.createElement(
            Wo,
            Qo({ attr: Qo({}, e.attr) }, n),
            Uo(e.child)
          );
        };
      }
      function Wo(e) {
        var n = function (n) {
          var r,
            i = e.attr,
            a = e.size,
            o = e.title,
            u = qo(e, ["attr", "size", "title"]),
            s = a || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              Qo(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                i,
                u,
                {
                  className: r,
                  style: Qo(
                    Qo({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && t.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Vo
          ? t.createElement(Vo.Consumer, null, function (e) {
              return n(e);
            })
          : n(zo);
      }
      function Ho(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
              },
            },
          ],
        })(e);
      }
      function Yo(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 576 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
              },
            },
          ],
        })(e);
      }
      function Ko(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 384 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z",
              },
            },
          ],
        })(e);
      }
      function Go(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",
              },
            },
          ],
        })(e);
      }
      function Jo(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
              },
            },
          ],
        })(e);
      }
      function Zo(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
              },
            },
          ],
        })(e);
      }
      function Xo(e) {
        return Bo({
          tag: "svg",
          attr: { viewBox: "0 0 448 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
              },
            },
          ],
        })(e);
      }
      function $o() {
        return (0, Ge.jsxs)("div", {
          className:
            "d-flex flex-column justify-content-center align-items-center mt-5",
          children: [
            (0, Ge.jsx)(Yo, { className: "text-danger", size: "5em" }),
            (0, Ge.jsx)("h1", { children: "404" }),
            (0, Ge.jsx)("p", {
              className: "lead",
              children: "Sorry, this page does not exist",
            }),
            (0, Ge.jsx)(We, {
              to: "/",
              className: "btn btn-primary",
              children: "Go Back",
            }),
          ],
        });
      }
      var eu,
        tu = !1,
        nu =
          r.useSyncExternalStore ||
          function (e, n, r) {
            var i = n();
            __DEV__ &&
              !tu &&
              i !== n() &&
              ((tu = !0),
              __DEV__ &&
                st.error(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                ));
            var a = t.useState({ inst: { value: i, getSnapshot: n } }),
              o = a[0].inst,
              u = a[1];
            return (
              Yn
                ? t.useLayoutEffect(
                    function () {
                      Object.assign(o, { value: i, getSnapshot: n }),
                        ru(o) && u({ inst: o });
                    },
                    [e, i, n]
                  )
                : Object.assign(o, { value: i, getSnapshot: n }),
              t.useEffect(
                function () {
                  return (
                    ru(o) && u({ inst: o }),
                    e(function () {
                      ru(o) && u({ inst: o });
                    })
                  );
                },
                [e]
              ),
              i
            );
          };
      function ru(e) {
        var t = e.value,
          n = e.getSnapshot;
        try {
          return t !== n();
        } catch (r) {
          return !0;
        }
      }
      !(function (e) {
        (e[(e.Query = 0)] = "Query"),
          (e[(e.Mutation = 1)] = "Mutation"),
          (e[(e.Subscription = 2)] = "Subscription");
      })(eu || (eu = {}));
      var iu = new Map();
      function au(e) {
        var t;
        switch (e) {
          case eu.Query:
            t = "Query";
            break;
          case eu.Mutation:
            t = "Mutation";
            break;
          case eu.Subscription:
            t = "Subscription";
        }
        return t;
      }
      function ou(e, t) {
        var n = (function (e) {
            var t,
              n,
              r = iu.get(e);
            if (r) return r;
            __DEV__
              ? st(
                  !!e && !!e.kind,
                  "Argument of ".concat(
                    e,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : st(!!e && !!e.kind, 33);
            for (
              var i = [], a = [], o = [], u = [], s = 0, l = e.definitions;
              s < l.length;
              s++
            ) {
              var c = l[s];
              if ("FragmentDefinition" !== c.kind) {
                if ("OperationDefinition" === c.kind)
                  switch (c.operation) {
                    case "query":
                      a.push(c);
                      break;
                    case "mutation":
                      o.push(c);
                      break;
                    case "subscription":
                      u.push(c);
                  }
              } else i.push(c);
            }
            __DEV__
              ? st(
                  !i.length || a.length || o.length || u.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : st(!i.length || a.length || o.length || u.length, 34),
              __DEV__
                ? st(
                    a.length + o.length + u.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(e, " had ")
                        .concat(a.length, " queries, ")
                        .concat(u.length, " ") +
                      "subscriptions and ".concat(o.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : st(a.length + o.length + u.length <= 1, 35),
              (n = a.length ? eu.Query : eu.Mutation),
              a.length || o.length || (n = eu.Subscription);
            var f = a.length ? a : o.length ? o : u;
            __DEV__
              ? st(
                  1 === f.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    e,
                    " had "
                  ) +
                    "".concat(f.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : st(1 === f.length, 36);
            var d = f[0];
            t = d.variableDefinitions || [];
            var p = {
              name: d.name && "Name" === d.name.kind ? d.name.value : "data",
              type: n,
              variables: t,
            };
            return iu.set(e, p), p;
          })(e),
          r = au(t),
          i = au(n.type);
        __DEV__
          ? st(
              n.type === t,
              "Running a ".concat(r, " requires a graphql ") +
                "".concat(r, ", but a ").concat(i, " was used instead.")
            )
          : st(n.type === t, 37);
      }
      function uu(e) {
        var n = (0, t.useContext)(Lo()),
          r = e || n.client;
        return (
          __DEV__
            ? st(
                !!r,
                'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'
              )
            : st(!!r, 32),
          r
        );
      }
      var su = Object.prototype.hasOwnProperty;
      function lu(e, n) {
        return (
          void 0 === n && (n = Object.create(null)),
          (function (e, n) {
            var r = (0, t.useRef)();
            (r.current && e === r.current.client && n === r.current.query) ||
              (r.current = new cu(e, n, r.current));
            var i = r.current,
              a = (0, t.useState)(0),
              o = (a[0], a[1]);
            return (
              (i.forceUpdate = function () {
                o(function (e) {
                  return e + 1;
                });
              }),
              i
            );
          })(uu(n.client), e).useQuery(n)
        );
      }
      var cu = (function () {
        function e(e, t, n) {
          (this.client = e),
            (this.query = t),
            (this.asyncResolveFns = new Set()),
            (this.optionsToIgnoreOnce = new (qn ? WeakSet : Set)()),
            (this.ssrDisabledResult = Ya({
              loading: !0,
              data: void 0,
              error: void 0,
              networkStatus: ji.loading,
            })),
            (this.skipStandbyResult = Ya({
              loading: !1,
              data: void 0,
              error: void 0,
              networkStatus: ji.ready,
            })),
            (this.toQueryResultCache = new (Qn ? WeakMap : Map)()),
            ou(t, eu.Query);
          var r = n && n.result,
            i = r && r.data;
          i && (this.previousData = i);
        }
        return (
          (e.prototype.forceUpdate = function () {
            __DEV__ &&
              st.warn(
                "Calling default no-op implementation of InternalState#forceUpdate"
              );
          }),
          (e.prototype.asyncUpdate = function (e) {
            var t = this;
            return new Promise(function (n, r) {
              var i = t.watchQueryOptions;
              t.asyncResolveFns.add(n),
                t.optionsToIgnoreOnce.add(i),
                e.addEventListener("abort", function a() {
                  t.asyncResolveFns.delete(n),
                    t.optionsToIgnoreOnce.delete(i),
                    e.removeEventListener("abort", a),
                    r(e.reason);
                }),
                t.forceUpdate();
            });
          }),
          (e.prototype.useQuery = function (e) {
            var n = this;
            (this.renderPromises = (0, t.useContext)(Lo()).renderPromises),
              this.useOptions(e);
            var r = this.useObservableQuery(),
              i = nu(
                (0, t.useCallback)(
                  function () {
                    if (n.renderPromises) return function () {};
                    var e = function () {
                        var e = n.result,
                          t = r.getCurrentResult();
                        (e &&
                          e.loading === t.loading &&
                          e.networkStatus === t.networkStatus &&
                          Pr(e.data, t.data)) ||
                          n.setResult(t);
                      },
                      t = r.subscribe(e, function i(a) {
                        var o = r.last;
                        t.unsubscribe();
                        try {
                          r.resetLastResults(), (t = r.subscribe(e, i));
                        } finally {
                          r.last = o;
                        }
                        if (!su.call(a, "graphQLErrors")) throw a;
                        var u = n.result;
                        (!u || (u && u.loading) || !Pr(a, u.error)) &&
                          n.setResult({
                            data: u && u.data,
                            error: a,
                            loading: !1,
                            networkStatus: ji.error,
                          });
                      });
                    return function () {
                      return t.unsubscribe();
                    };
                  },
                  [r, this.renderPromises, this.client.disableNetworkFetches]
                ),
                function () {
                  return n.getCurrentResult();
                },
                function () {
                  return n.getCurrentResult();
                }
              );
            this.unsafeHandlePartialRefetch(i);
            var a = this.toQueryResult(i);
            return (
              !a.loading &&
                this.asyncResolveFns.size &&
                (this.asyncResolveFns.forEach(function (e) {
                  return e(a);
                }),
                this.asyncResolveFns.clear()),
              a
            );
          }),
          (e.prototype.useOptions = function (t) {
            var n,
              r = this.createWatchQueryOptions((this.queryHookOptions = t)),
              i = this.watchQueryOptions;
            (!this.optionsToIgnoreOnce.has(i) && Pr(r, i)) ||
              ((this.watchQueryOptions = r),
              i &&
                this.observable &&
                (this.optionsToIgnoreOnce.delete(i),
                this.observable.reobserve(this.getObsQueryOptions()),
                (this.previousData =
                  (null === (n = this.result) || void 0 === n
                    ? void 0
                    : n.data) || this.previousData),
                (this.result = void 0))),
              (this.onCompleted = t.onCompleted || e.prototype.onCompleted),
              (this.onError = t.onError || e.prototype.onError),
              (!this.renderPromises && !this.client.disableNetworkFetches) ||
              !1 !== this.queryHookOptions.ssr ||
              this.queryHookOptions.skip
                ? this.queryHookOptions.skip ||
                  "standby" === this.watchQueryOptions.fetchPolicy
                  ? (this.result = this.skipStandbyResult)
                  : (this.result !== this.ssrDisabledResult &&
                      this.result !== this.skipStandbyResult) ||
                    (this.result = void 0)
                : (this.result = this.ssrDisabledResult);
          }),
          (e.prototype.getObsQueryOptions = function () {
            var e = [],
              t = this.client.defaultOptions.watchQuery;
            return (
              t && e.push(t),
              this.queryHookOptions.defaultOptions &&
                e.push(this.queryHookOptions.defaultOptions),
              e.push(
                Zr(
                  this.observable && this.observable.options,
                  this.watchQueryOptions
                )
              ),
              e.reduce(Qa)
            );
          }),
          (e.prototype.createWatchQueryOptions = function (e) {
            var t;
            void 0 === e && (e = {});
            var n = e.skip,
              r =
                (e.ssr,
                e.onCompleted,
                e.onError,
                e.defaultOptions,
                et(e, [
                  "skip",
                  "ssr",
                  "onCompleted",
                  "onError",
                  "defaultOptions",
                ])),
              i = Object.assign(r, { query: this.query });
            if (
              (!this.renderPromises ||
                ("network-only" !== i.fetchPolicy &&
                  "cache-and-network" !== i.fetchPolicy) ||
                (i.fetchPolicy = "cache-first"),
              i.variables || (i.variables = {}),
              n)
            ) {
              var a = i.fetchPolicy,
                o = void 0 === a ? this.getDefaultFetchPolicy() : a,
                u = i.initialFetchPolicy,
                s = void 0 === u ? o : u;
              Object.assign(i, {
                initialFetchPolicy: s,
                fetchPolicy: "standby",
              });
            } else
              i.fetchPolicy ||
                (i.fetchPolicy =
                  (null === (t = this.observable) || void 0 === t
                    ? void 0
                    : t.options.initialFetchPolicy) ||
                  this.getDefaultFetchPolicy());
            return i;
          }),
          (e.prototype.getDefaultFetchPolicy = function () {
            var e, t;
            return (
              (null === (e = this.queryHookOptions.defaultOptions) ||
              void 0 === e
                ? void 0
                : e.fetchPolicy) ||
              (null === (t = this.client.defaultOptions.watchQuery) ||
              void 0 === t
                ? void 0
                : t.fetchPolicy) ||
              "cache-first"
            );
          }),
          (e.prototype.onCompleted = function (e) {}),
          (e.prototype.onError = function (e) {}),
          (e.prototype.useObservableQuery = function () {
            var e = (this.observable =
              (this.renderPromises &&
                this.renderPromises.getSSRObservable(this.watchQueryOptions)) ||
              this.observable ||
              this.client.watchQuery(this.getObsQueryOptions()));
            this.obsQueryFields = (0, t.useMemo)(
              function () {
                return {
                  refetch: e.refetch.bind(e),
                  reobserve: e.reobserve.bind(e),
                  fetchMore: e.fetchMore.bind(e),
                  updateQuery: e.updateQuery.bind(e),
                  startPolling: e.startPolling.bind(e),
                  stopPolling: e.stopPolling.bind(e),
                  subscribeToMore: e.subscribeToMore.bind(e),
                };
              },
              [e]
            );
            var n = !(
              !1 === this.queryHookOptions.ssr || this.queryHookOptions.skip
            );
            return (
              this.renderPromises &&
                n &&
                (this.renderPromises.registerSSRObservable(e),
                e.getCurrentResult().loading &&
                  this.renderPromises.addObservableQueryPromise(e)),
              e
            );
          }),
          (e.prototype.setResult = function (e) {
            var t = this.result;
            t && t.data && (this.previousData = t.data),
              (this.result = e),
              this.forceUpdate(),
              this.handleErrorOrCompleted(e);
          }),
          (e.prototype.handleErrorOrCompleted = function (e) {
            var t = this;
            if (!e.loading) {
              var n = this.toApolloError(e);
              Promise.resolve()
                .then(function () {
                  n ? t.onError(n) : e.data && t.onCompleted(e.data);
                })
                .catch(function (e) {
                  __DEV__ && st.warn(e);
                });
            }
          }),
          (e.prototype.toApolloError = function (e) {
            return Mr(e.errors) ? new Ai({ graphQLErrors: e.errors }) : e.error;
          }),
          (e.prototype.getCurrentResult = function () {
            return (
              this.result ||
                this.handleErrorOrCompleted(
                  (this.result = this.observable.getCurrentResult())
                ),
              this.result
            );
          }),
          (e.prototype.toQueryResult = function (e) {
            var t = this.toQueryResultCache.get(e);
            if (t) return t;
            var n = e.data,
              r = (e.partial, et(e, ["data", "partial"]));
            return (
              this.toQueryResultCache.set(
                e,
                (t = $e($e($e({ data: n }, r), this.obsQueryFields), {
                  client: this.client,
                  observable: this.observable,
                  variables: this.observable.variables,
                  called: !this.queryHookOptions.skip,
                  previousData: this.previousData,
                }))
              ),
              !t.error &&
                Mr(e.errors) &&
                (t.error = new Ai({ graphQLErrors: e.errors })),
              t
            );
          }),
          (e.prototype.unsafeHandlePartialRefetch = function (e) {
            !e.partial ||
              !this.queryHookOptions.partialRefetch ||
              e.loading ||
              (e.data && 0 !== Object.keys(e.data).length) ||
              "cache-only" === this.observable.options.fetchPolicy ||
              (Object.assign(e, { loading: !0, networkStatus: ji.refetch }),
              this.observable.refetch());
          }),
          e
        );
      })();
      function fu(e, n) {
        var r = uu(null === n || void 0 === n ? void 0 : n.client);
        ou(e, eu.Mutation);
        var i = (0, t.useState)({ called: !1, loading: !1, client: r }),
          a = i[0],
          o = i[1],
          u = (0, t.useRef)({
            result: a,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: n,
          });
        Object.assign(u.current, { client: r, options: n, mutation: e });
        var s = (0, t.useCallback)(function (e) {
            void 0 === e && (e = {});
            var t = u.current,
              n = t.client,
              r = t.options,
              i = t.mutation,
              a = $e($e({}, r), { mutation: i });
            u.current.result.loading ||
              a.ignoreResults ||
              !u.current.isMounted ||
              o(
                (u.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: n,
                })
              );
            var s = ++u.current.mutationId,
              l = Qa(a, e);
            return n
              .mutate(l)
              .then(function (t) {
                var r,
                  i = t.data,
                  a = t.errors,
                  c = a && a.length > 0 ? new Ai({ graphQLErrors: a }) : void 0;
                if (s === u.current.mutationId && !l.ignoreResults) {
                  var f = {
                    called: !0,
                    loading: !1,
                    data: i,
                    error: c,
                    client: n,
                  };
                  u.current.isMounted &&
                    !Pr(u.current.result, f) &&
                    o((u.current.result = f));
                }
                var d =
                  e.onCompleted ||
                  (null === (r = u.current.options) || void 0 === r
                    ? void 0
                    : r.onCompleted);
                return null === d || void 0 === d || d(t.data, l), t;
              })
              .catch(function (t) {
                var r;
                if (s === u.current.mutationId && u.current.isMounted) {
                  var i = {
                    loading: !1,
                    error: t,
                    data: void 0,
                    called: !0,
                    client: n,
                  };
                  Pr(u.current.result, i) || o((u.current.result = i));
                }
                var a =
                  e.onError ||
                  (null === (r = u.current.options) || void 0 === r
                    ? void 0
                    : r.onError);
                if (a) return a(t, l), { data: void 0, errors: t };
                throw t;
              });
          }, []),
          l = (0, t.useCallback)(function () {
            u.current.isMounted && o({ called: !1, loading: !1, client: r });
          }, []);
        return (
          (0, t.useEffect)(function () {
            return (
              (u.current.isMounted = !0),
              function () {
                u.current.isMounted = !1;
              }
            );
          }, []),
          [s, $e({ reset: l }, a)]
        );
      }
      function du(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function pu(e, t) {
        if (!Boolean(e))
          throw new Error(null != t ? t : "Unexpected invariant triggered.");
      }
      var hu = /\r\n|[\n\r]/g;
      function vu(e, t) {
        var n,
          r = 0,
          i = 1,
          a = _(e.body.matchAll(hu));
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var o = n.value;
            if (("number" === typeof o.index || pu(!1), o.index >= t)) break;
            (r = o.index + o[0].length), (i += 1);
          }
        } catch (u) {
          a.e(u);
        } finally {
          a.f();
        }
        return { line: i, column: t + 1 - r };
      }
      function yu(e) {
        return mu(e.source, vu(e.source, e.start));
      }
      function mu(e, t) {
        var n = e.locationOffset.column - 1,
          r = "".padStart(n) + e.body,
          i = t.line - 1,
          a = e.locationOffset.line - 1,
          o = t.line + a,
          u = 1 === t.line ? n : 0,
          s = t.column + u,
          l = "".concat(e.name, ":").concat(o, ":").concat(s, "\n"),
          c = r.split(/\r\n|[\n\r]/g),
          d = c[i];
        if (d.length > 120) {
          for (
            var p = Math.floor(s / 80), h = s % 80, v = [], y = 0;
            y < d.length;
            y += 80
          )
            v.push(d.slice(y, y + 80));
          return (
            l +
            gu(
              [["".concat(o, " |"), v[0]]].concat(
                f(
                  v.slice(1, p + 1).map(function (e) {
                    return ["|", e];
                  })
                ),
                [
                  ["|", "^".padStart(h)],
                  ["|", v[p + 1]],
                ]
              )
            )
          );
        }
        return (
          l +
          gu([
            ["".concat(o - 1, " |"), c[i - 1]],
            ["".concat(o, " |"), d],
            ["|", "^".padStart(s)],
            ["".concat(o + 1, " |"), c[i + 1]],
          ])
        );
      }
      function gu(e) {
        var t = e.filter(function (e) {
            var t = l(e, 2);
            t[0];
            return void 0 !== t[1];
          }),
          n = Math.max.apply(
            Math,
            f(
              t.map(function (e) {
                return l(e, 1)[0].length;
              })
            )
          );
        return t
          .map(function (e) {
            var t = l(e, 2),
              r = t[0],
              i = t[1];
            return r.padStart(n) + (i ? " " + i : "");
          })
          .join("\n");
      }
      var bu,
        wu,
        ku = (function (e, t) {
          g(r, e);
          var n = E(r);
          function r(e) {
            var t, i, a, o;
            d(this, r);
            for (
              var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), l = 1;
              l < u;
              l++
            )
              s[l - 1] = arguments[l];
            var c = (function (e) {
                var t = e[0];
                return null == t || "kind" in t || "length" in t
                  ? {
                      nodes: t,
                      source: e[1],
                      positions: e[2],
                      path: e[3],
                      originalError: e[4],
                      extensions: e[5],
                    }
                  : t;
              })(s),
              f = c.nodes,
              p = c.source,
              h = c.positions,
              v = c.path,
              y = c.originalError,
              m = c.extensions;
            ((t = n.call(this, e)).name = "GraphQLError"),
              (t.path = null !== v && void 0 !== v ? v : void 0),
              (t.originalError = null !== y && void 0 !== y ? y : void 0),
              (t.nodes = Eu(Array.isArray(f) ? f : f ? [f] : void 0));
            var g = Eu(
              null === (i = t.nodes) || void 0 === i
                ? void 0
                : i
                    .map(function (e) {
                      return e.loc;
                    })
                    .filter(function (e) {
                      return null != e;
                    })
            );
            (t.source =
              null !== p && void 0 !== p
                ? p
                : null === g ||
                  void 0 === g ||
                  null === (a = g[0]) ||
                  void 0 === a
                ? void 0
                : a.source),
              (t.positions =
                null !== h && void 0 !== h
                  ? h
                  : null === g || void 0 === g
                  ? void 0
                  : g.map(function (e) {
                      return e.start;
                    })),
              (t.locations =
                h && p
                  ? h.map(function (e) {
                      return vu(p, e);
                    })
                  : null === g || void 0 === g
                  ? void 0
                  : g.map(function (e) {
                      return vu(e.source, e.start);
                    }));
            var b,
              w =
                "object" ==
                  typeof (b =
                    null === y || void 0 === y ? void 0 : y.extensions) &&
                null !== b
                  ? null === y || void 0 === y
                    ? void 0
                    : y.extensions
                  : void 0;
            return (
              (t.extensions =
                null !== (o = null !== m && void 0 !== m ? m : w) &&
                void 0 !== o
                  ? o
                  : Object.create(null)),
              Object.defineProperties(k(t), {
                message: { writable: !0, enumerable: !0 },
                name: { enumerable: !1 },
                nodes: { enumerable: !1 },
                source: { enumerable: !1 },
                positions: { enumerable: !1 },
                originalError: { enumerable: !1 },
              }),
              null !== y && void 0 !== y && y.stack
                ? Object.defineProperty(k(t), "stack", {
                    value: y.stack,
                    writable: !0,
                    configurable: !0,
                  })
                : Error.captureStackTrace
                ? Error.captureStackTrace(k(t), r)
                : Object.defineProperty(k(t), "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0,
                  }),
              t
            );
          }
          return (
            y(r, [
              {
                key: t,
                get: function () {
                  return "GraphQLError";
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = this.message;
                  if (this.nodes) {
                    var t,
                      n = _(this.nodes);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value;
                        r.loc && (e += "\n\n" + yu(r.loc));
                      }
                    } catch (u) {
                      n.e(u);
                    } finally {
                      n.f();
                    }
                  } else if (this.source && this.locations) {
                    var i,
                      a = _(this.locations);
                    try {
                      for (a.s(); !(i = a.n()).done; ) {
                        var o = i.value;
                        e += "\n\n" + mu(this.source, o);
                      }
                    } catch (u) {
                      a.e(u);
                    } finally {
                      a.f();
                    }
                  }
                  return e;
                },
              },
              {
                key: "toJSON",
                value: function () {
                  var e = { message: this.message };
                  return (
                    null != this.locations && (e.locations = this.locations),
                    null != this.path && (e.path = this.path),
                    null != this.extensions &&
                      Object.keys(this.extensions).length > 0 &&
                      (e.extensions = this.extensions),
                    e
                  );
                },
              },
            ]),
            r
          );
        })(x(Error), Symbol.toStringTag);
      function Eu(e) {
        return void 0 === e || 0 === e.length ? void 0 : e;
      }
      function Su(e, t, n) {
        return new ku("Syntax Error: ".concat(n), {
          source: e,
          positions: [t],
        });
      }
      !(function (e) {
        (e.QUERY = "QUERY"),
          (e.MUTATION = "MUTATION"),
          (e.SUBSCRIPTION = "SUBSCRIPTION"),
          (e.FIELD = "FIELD"),
          (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
          (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
          (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
          (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
          (e.SCHEMA = "SCHEMA"),
          (e.SCALAR = "SCALAR"),
          (e.OBJECT = "OBJECT"),
          (e.FIELD_DEFINITION = "FIELD_DEFINITION"),
          (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
          (e.INTERFACE = "INTERFACE"),
          (e.UNION = "UNION"),
          (e.ENUM = "ENUM"),
          (e.ENUM_VALUE = "ENUM_VALUE"),
          (e.INPUT_OBJECT = "INPUT_OBJECT"),
          (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
      })(bu || (bu = {})),
        (function (e) {
          (e.SOF = "<SOF>"),
            (e.EOF = "<EOF>"),
            (e.BANG = "!"),
            (e.DOLLAR = "$"),
            (e.AMP = "&"),
            (e.PAREN_L = "("),
            (e.PAREN_R = ")"),
            (e.SPREAD = "..."),
            (e.COLON = ":"),
            (e.EQUALS = "="),
            (e.AT = "@"),
            (e.BRACKET_L = "["),
            (e.BRACKET_R = "]"),
            (e.BRACE_L = "{"),
            (e.PIPE = "|"),
            (e.BRACE_R = "}"),
            (e.NAME = "Name"),
            (e.INT = "Int"),
            (e.FLOAT = "Float"),
            (e.STRING = "String"),
            (e.BLOCK_STRING = "BlockString"),
            (e.COMMENT = "Comment");
        })(wu || (wu = {}));
      var xu = (function (e) {
        function t(e) {
          d(this, t);
          var n = new Dn(wu.SOF, 0, 0, 0, 0);
          (this.source = e),
            (this.lastToken = n),
            (this.token = n),
            (this.line = 1),
            (this.lineStart = 0);
        }
        return (
          y(t, [
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Lexer";
              },
            },
            {
              key: "advance",
              value: function () {
                return (
                  (this.lastToken = this.token), (this.token = this.lookahead())
                );
              },
            },
            {
              key: "lookahead",
              value: function () {
                var e = this.token;
                if (e.kind !== wu.EOF)
                  do {
                    if (e.next) e = e.next;
                    else {
                      var t = Iu(this, e.end);
                      (e.next = t), (t.prev = e), (e = t);
                    }
                  } while (e.kind === wu.COMMENT);
                return e;
              },
            },
          ]),
          t
        );
      })();
      function _u(e) {
        return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
      }
      function Ou(e, t) {
        return Nu(e.charCodeAt(t)) && Cu(e.charCodeAt(t + 1));
      }
      function Nu(e) {
        return e >= 55296 && e <= 56319;
      }
      function Cu(e) {
        return e >= 56320 && e <= 57343;
      }
      function Tu(e, t) {
        var n = e.source.body.codePointAt(t);
        if (void 0 === n) return wu.EOF;
        if (n >= 32 && n <= 126) {
          var r = String.fromCodePoint(n);
          return '"' === r ? "'\"'" : '"'.concat(r, '"');
        }
        return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
      }
      function Du(e, t, n, r, i) {
        var a = e.line,
          o = 1 + n - e.lineStart;
        return new Dn(t, n, r, a, o, i);
      }
      function Iu(e, t) {
        for (var n = e.source.body, r = n.length, i = t; i < r; ) {
          var a = n.charCodeAt(i);
          switch (a) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++i;
              continue;
            case 10:
              ++i, ++e.line, (e.lineStart = i);
              continue;
            case 13:
              10 === n.charCodeAt(i + 1) ? (i += 2) : ++i,
                ++e.line,
                (e.lineStart = i);
              continue;
            case 35:
              return Pu(e, i);
            case 33:
              return Du(e, wu.BANG, i, i + 1);
            case 36:
              return Du(e, wu.DOLLAR, i, i + 1);
            case 38:
              return Du(e, wu.AMP, i, i + 1);
            case 40:
              return Du(e, wu.PAREN_L, i, i + 1);
            case 41:
              return Du(e, wu.PAREN_R, i, i + 1);
            case 46:
              if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2))
                return Du(e, wu.SPREAD, i, i + 3);
              break;
            case 58:
              return Du(e, wu.COLON, i, i + 1);
            case 61:
              return Du(e, wu.EQUALS, i, i + 1);
            case 64:
              return Du(e, wu.AT, i, i + 1);
            case 91:
              return Du(e, wu.BRACKET_L, i, i + 1);
            case 93:
              return Du(e, wu.BRACKET_R, i, i + 1);
            case 123:
              return Du(e, wu.BRACE_L, i, i + 1);
            case 124:
              return Du(e, wu.PIPE, i, i + 1);
            case 125:
              return Du(e, wu.BRACE_R, i, i + 1);
            case 34:
              return 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2)
                ? Qu(e, i)
                : Au(e, i);
          }
          if (ir(a) || 45 === a) return ju(e, i, a);
          if (or(a)) return qu(e, i);
          throw Su(
            e.source,
            i,
            39 === a
              ? "Unexpected single quote character ('), did you mean to use a double quote (\")?"
              : _u(a) || Ou(n, i)
              ? "Unexpected character: ".concat(Tu(e, i), ".")
              : "Invalid character: ".concat(Tu(e, i), ".")
          );
        }
        return Du(e, wu.EOF, r, r);
      }
      function Pu(e, t) {
        for (var n = e.source.body, r = n.length, i = t + 1; i < r; ) {
          var a = n.charCodeAt(i);
          if (10 === a || 13 === a) break;
          if (_u(a)) ++i;
          else {
            if (!Ou(n, i)) break;
            i += 2;
          }
        }
        return Du(e, wu.COMMENT, t, i, n.slice(t + 1, i));
      }
      function ju(e, t, n) {
        var r = e.source.body,
          i = t,
          a = n,
          o = !1;
        if ((45 === a && (a = r.charCodeAt(++i)), 48 === a)) {
          if (ir((a = r.charCodeAt(++i))))
            throw Su(
              e.source,
              i,
              "Invalid number, unexpected digit after 0: ".concat(Tu(e, i), ".")
            );
        } else (i = Ru(e, i, a)), (a = r.charCodeAt(i));
        if (
          (46 === a &&
            ((o = !0),
            (a = r.charCodeAt(++i)),
            (i = Ru(e, i, a)),
            (a = r.charCodeAt(i))),
          (69 !== a && 101 !== a) ||
            ((o = !0),
            (43 !== (a = r.charCodeAt(++i)) && 45 !== a) ||
              (a = r.charCodeAt(++i)),
            (i = Ru(e, i, a)),
            (a = r.charCodeAt(i))),
          46 === a || or(a))
        )
          throw Su(
            e.source,
            i,
            "Invalid number, expected digit but got: ".concat(Tu(e, i), ".")
          );
        return Du(e, o ? wu.FLOAT : wu.INT, t, i, r.slice(t, i));
      }
      function Ru(e, t, n) {
        if (!ir(n))
          throw Su(
            e.source,
            t,
            "Invalid number, expected digit but got: ".concat(Tu(e, t), ".")
          );
        for (var r = e.source.body, i = t + 1; ir(r.charCodeAt(i)); ) ++i;
        return i;
      }
      function Au(e, t) {
        for (
          var n = e.source.body, r = n.length, i = t + 1, a = i, o = "";
          i < r;

        ) {
          var u = n.charCodeAt(i);
          if (34 === u)
            return (o += n.slice(a, i)), Du(e, wu.STRING, t, i + 1, o);
          if (92 !== u) {
            if (10 === u || 13 === u) break;
            if (_u(u)) ++i;
            else {
              if (!Ou(n, i))
                throw Su(
                  e.source,
                  i,
                  "Invalid character within String: ".concat(Tu(e, i), ".")
                );
              i += 2;
            }
          } else {
            o += n.slice(a, i);
            var s =
              117 === n.charCodeAt(i + 1)
                ? 123 === n.charCodeAt(i + 2)
                  ? Fu(e, i)
                  : Lu(e, i)
                : Vu(e, i);
            (o += s.value), (a = i += s.size);
          }
        }
        throw Su(e.source, i, "Unterminated string.");
      }
      function Fu(e, t) {
        for (var n = e.source.body, r = 0, i = 3; i < 12; ) {
          var a = n.charCodeAt(t + i++);
          if (125 === a) {
            if (i < 5 || !_u(r)) break;
            return { value: String.fromCodePoint(r), size: i };
          }
          if ((r = (r << 4) | zu(a)) < 0) break;
        }
        throw Su(
          e.source,
          t,
          'Invalid Unicode escape sequence: "'.concat(n.slice(t, t + i), '".')
        );
      }
      function Lu(e, t) {
        var n = e.source.body,
          r = Mu(n, t + 2);
        if (_u(r)) return { value: String.fromCodePoint(r), size: 6 };
        if (
          Nu(r) &&
          92 === n.charCodeAt(t + 6) &&
          117 === n.charCodeAt(t + 7)
        ) {
          var i = Mu(n, t + 8);
          if (Cu(i)) return { value: String.fromCodePoint(r, i), size: 12 };
        }
        throw Su(
          e.source,
          t,
          'Invalid Unicode escape sequence: "'.concat(n.slice(t, t + 6), '".')
        );
      }
      function Mu(e, t) {
        return (
          (zu(e.charCodeAt(t)) << 12) |
          (zu(e.charCodeAt(t + 1)) << 8) |
          (zu(e.charCodeAt(t + 2)) << 4) |
          zu(e.charCodeAt(t + 3))
        );
      }
      function zu(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : -1;
      }
      function Vu(e, t) {
        var n = e.source.body;
        switch (n.charCodeAt(t + 1)) {
          case 34:
            return { value: '"', size: 2 };
          case 92:
            return { value: "\\", size: 2 };
          case 47:
            return { value: "/", size: 2 };
          case 98:
            return { value: "\b", size: 2 };
          case 102:
            return { value: "\f", size: 2 };
          case 110:
            return { value: "\n", size: 2 };
          case 114:
            return { value: "\r", size: 2 };
          case 116:
            return { value: "\t", size: 2 };
        }
        throw Su(
          e.source,
          t,
          'Invalid character escape sequence: "'.concat(n.slice(t, t + 2), '".')
        );
      }
      function Qu(e, t) {
        for (
          var n = e.source.body,
            r = n.length,
            i = e.lineStart,
            a = t + 3,
            o = a,
            u = "",
            s = [];
          a < r;

        ) {
          var l = n.charCodeAt(a);
          if (
            34 === l &&
            34 === n.charCodeAt(a + 1) &&
            34 === n.charCodeAt(a + 2)
          ) {
            (u += n.slice(o, a)), s.push(u);
            var c = Du(e, wu.BLOCK_STRING, t, a + 3, sr(s).join("\n"));
            return (e.line += s.length - 1), (e.lineStart = i), c;
          }
          if (
            92 !== l ||
            34 !== n.charCodeAt(a + 1) ||
            34 !== n.charCodeAt(a + 2) ||
            34 !== n.charCodeAt(a + 3)
          )
            if (10 !== l && 13 !== l)
              if (_u(l)) ++a;
              else {
                if (!Ou(n, a))
                  throw Su(
                    e.source,
                    a,
                    "Invalid character within String: ".concat(Tu(e, a), ".")
                  );
                a += 2;
              }
            else
              (u += n.slice(o, a)),
                s.push(u),
                13 === l && 10 === n.charCodeAt(a + 1) ? (a += 2) : ++a,
                (u = ""),
                (o = a),
                (i = a);
          else (u += n.slice(o, a)), (o = a + 1), (a += 4);
        }
        throw Su(e.source, a, "Unterminated string.");
      }
      function qu(e, t) {
        for (var n = e.source.body, r = n.length, i = t + 1; i < r; ) {
          if (!ur(n.charCodeAt(i))) break;
          ++i;
        }
        return Du(e, wu.NAME, t, i, n.slice(t, i));
      }
      var Uu = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          d(this, e);
          var r = (function (e) {
            return Ot(e, Nt);
          })(t)
            ? t
            : new Nt(t);
          (this._lexer = new xu(r)),
            (this._options = n),
            (this._tokenCounter = 0);
        }
        return (
          y(e, [
            {
              key: "parseName",
              value: function () {
                var e = this.expectToken(wu.NAME);
                return this.node(e, { kind: xn.NAME, value: e.value });
              },
            },
            {
              key: "parseDocument",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: xn.DOCUMENT,
                  definitions: this.many(wu.SOF, this.parseDefinition, wu.EOF),
                });
              },
            },
            {
              key: "parseDefinition",
              value: function () {
                if (this.peek(wu.BRACE_L))
                  return this.parseOperationDefinition();
                var e = this.peekDescription(),
                  t = e ? this._lexer.lookahead() : this._lexer.token;
                if (t.kind === wu.NAME) {
                  switch (t.value) {
                    case "schema":
                      return this.parseSchemaDefinition();
                    case "scalar":
                      return this.parseScalarTypeDefinition();
                    case "type":
                      return this.parseObjectTypeDefinition();
                    case "interface":
                      return this.parseInterfaceTypeDefinition();
                    case "union":
                      return this.parseUnionTypeDefinition();
                    case "enum":
                      return this.parseEnumTypeDefinition();
                    case "input":
                      return this.parseInputObjectTypeDefinition();
                    case "directive":
                      return this.parseDirectiveDefinition();
                  }
                  if (e)
                    throw Su(
                      this._lexer.source,
                      this._lexer.token.start,
                      "Unexpected description, descriptions are supported only on type definitions."
                    );
                  switch (t.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                      return this.parseOperationDefinition();
                    case "fragment":
                      return this.parseFragmentDefinition();
                    case "extend":
                      return this.parseTypeSystemExtension();
                  }
                }
                throw this.unexpected(t);
              },
            },
            {
              key: "parseOperationDefinition",
              value: function () {
                var e = this._lexer.token;
                if (this.peek(wu.BRACE_L))
                  return this.node(e, {
                    kind: xn.OPERATION_DEFINITION,
                    operation: Sn.QUERY,
                    name: void 0,
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: this.parseSelectionSet(),
                  });
                var t,
                  n = this.parseOperationType();
                return (
                  this.peek(wu.NAME) && (t = this.parseName()),
                  this.node(e, {
                    kind: xn.OPERATION_DEFINITION,
                    operation: n,
                    name: t,
                    variableDefinitions: this.parseVariableDefinitions(),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                  })
                );
              },
            },
            {
              key: "parseOperationType",
              value: function () {
                var e = this.expectToken(wu.NAME);
                switch (e.value) {
                  case "query":
                    return Sn.QUERY;
                  case "mutation":
                    return Sn.MUTATION;
                  case "subscription":
                    return Sn.SUBSCRIPTION;
                }
                throw this.unexpected(e);
              },
            },
            {
              key: "parseVariableDefinitions",
              value: function () {
                return this.optionalMany(
                  wu.PAREN_L,
                  this.parseVariableDefinition,
                  wu.PAREN_R
                );
              },
            },
            {
              key: "parseVariableDefinition",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: xn.VARIABLE_DEFINITION,
                  variable: this.parseVariable(),
                  type: (this.expectToken(wu.COLON), this.parseTypeReference()),
                  defaultValue: this.expectOptionalToken(wu.EQUALS)
                    ? this.parseConstValueLiteral()
                    : void 0,
                  directives: this.parseConstDirectives(),
                });
              },
            },
            {
              key: "parseVariable",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.expectToken(wu.DOLLAR),
                  this.node(e, { kind: xn.VARIABLE, name: this.parseName() })
                );
              },
            },
            {
              key: "parseSelectionSet",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: xn.SELECTION_SET,
                  selections: this.many(
                    wu.BRACE_L,
                    this.parseSelection,
                    wu.BRACE_R
                  ),
                });
              },
            },
            {
              key: "parseSelection",
              value: function () {
                return this.peek(wu.SPREAD)
                  ? this.parseFragment()
                  : this.parseField();
              },
            },
            {
              key: "parseField",
              value: function () {
                var e,
                  t,
                  n = this._lexer.token,
                  r = this.parseName();
                return (
                  this.expectOptionalToken(wu.COLON)
                    ? ((e = r), (t = this.parseName()))
                    : (t = r),
                  this.node(n, {
                    kind: xn.FIELD,
                    alias: e,
                    name: t,
                    arguments: this.parseArguments(!1),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.peek(wu.BRACE_L)
                      ? this.parseSelectionSet()
                      : void 0,
                  })
                );
              },
            },
            {
              key: "parseArguments",
              value: function (e) {
                var t = e ? this.parseConstArgument : this.parseArgument;
                return this.optionalMany(wu.PAREN_L, t, wu.PAREN_R);
              },
            },
            {
              key: "parseArgument",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = this._lexer.token,
                  n = this.parseName();
                return (
                  this.expectToken(wu.COLON),
                  this.node(t, {
                    kind: xn.ARGUMENT,
                    name: n,
                    value: this.parseValueLiteral(e),
                  })
                );
              },
            },
            {
              key: "parseConstArgument",
              value: function () {
                return this.parseArgument(!0);
              },
            },
            {
              key: "parseFragment",
              value: function () {
                var e = this._lexer.token;
                this.expectToken(wu.SPREAD);
                var t = this.expectOptionalKeyword("on");
                return !t && this.peek(wu.NAME)
                  ? this.node(e, {
                      kind: xn.FRAGMENT_SPREAD,
                      name: this.parseFragmentName(),
                      directives: this.parseDirectives(!1),
                    })
                  : this.node(e, {
                      kind: xn.INLINE_FRAGMENT,
                      typeCondition: t ? this.parseNamedType() : void 0,
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                    });
              },
            },
            {
              key: "parseFragmentDefinition",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.expectKeyword("fragment"),
                  !0 === this._options.allowLegacyFragmentVariables
                    ? this.node(e, {
                        kind: xn.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition:
                          (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                      })
                    : this.node(e, {
                        kind: xn.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition:
                          (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                      })
                );
              },
            },
            {
              key: "parseFragmentName",
              value: function () {
                if ("on" === this._lexer.token.value) throw this.unexpected();
                return this.parseName();
              },
            },
            {
              key: "parseValueLiteral",
              value: function (e) {
                var t = this._lexer.token;
                switch (t.kind) {
                  case wu.BRACKET_L:
                    return this.parseList(e);
                  case wu.BRACE_L:
                    return this.parseObject(e);
                  case wu.INT:
                    return (
                      this.advanceLexer(),
                      this.node(t, { kind: xn.INT, value: t.value })
                    );
                  case wu.FLOAT:
                    return (
                      this.advanceLexer(),
                      this.node(t, { kind: xn.FLOAT, value: t.value })
                    );
                  case wu.STRING:
                  case wu.BLOCK_STRING:
                    return this.parseStringLiteral();
                  case wu.NAME:
                    switch ((this.advanceLexer(), t.value)) {
                      case "true":
                        return this.node(t, { kind: xn.BOOLEAN, value: !0 });
                      case "false":
                        return this.node(t, { kind: xn.BOOLEAN, value: !1 });
                      case "null":
                        return this.node(t, { kind: xn.NULL });
                      default:
                        return this.node(t, { kind: xn.ENUM, value: t.value });
                    }
                  case wu.DOLLAR:
                    if (e) {
                      if (
                        (this.expectToken(wu.DOLLAR),
                        this._lexer.token.kind === wu.NAME)
                      ) {
                        var n = this._lexer.token.value;
                        throw Su(
                          this._lexer.source,
                          t.start,
                          'Unexpected variable "$'.concat(
                            n,
                            '" in constant value.'
                          )
                        );
                      }
                      throw this.unexpected(t);
                    }
                    return this.parseVariable();
                  default:
                    throw this.unexpected();
                }
              },
            },
            {
              key: "parseConstValueLiteral",
              value: function () {
                return this.parseValueLiteral(!0);
              },
            },
            {
              key: "parseStringLiteral",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.advanceLexer(),
                  this.node(e, {
                    kind: xn.STRING,
                    value: e.value,
                    block: e.kind === wu.BLOCK_STRING,
                  })
                );
              },
            },
            {
              key: "parseList",
              value: function (e) {
                var t = this;
                return this.node(this._lexer.token, {
                  kind: xn.LIST,
                  values: this.any(
                    wu.BRACKET_L,
                    function () {
                      return t.parseValueLiteral(e);
                    },
                    wu.BRACKET_R
                  ),
                });
              },
            },
            {
              key: "parseObject",
              value: function (e) {
                var t = this;
                return this.node(this._lexer.token, {
                  kind: xn.OBJECT,
                  fields: this.any(
                    wu.BRACE_L,
                    function () {
                      return t.parseObjectField(e);
                    },
                    wu.BRACE_R
                  ),
                });
              },
            },
            {
              key: "parseObjectField",
              value: function (e) {
                var t = this._lexer.token,
                  n = this.parseName();
                return (
                  this.expectToken(wu.COLON),
                  this.node(t, {
                    kind: xn.OBJECT_FIELD,
                    name: n,
                    value: this.parseValueLiteral(e),
                  })
                );
              },
            },
            {
              key: "parseDirectives",
              value: function (e) {
                for (var t = []; this.peek(wu.AT); )
                  t.push(this.parseDirective(e));
                return t;
              },
            },
            {
              key: "parseConstDirectives",
              value: function () {
                return this.parseDirectives(!0);
              },
            },
            {
              key: "parseDirective",
              value: function (e) {
                var t = this._lexer.token;
                return (
                  this.expectToken(wu.AT),
                  this.node(t, {
                    kind: xn.DIRECTIVE,
                    name: this.parseName(),
                    arguments: this.parseArguments(e),
                  })
                );
              },
            },
            {
              key: "parseTypeReference",
              value: function () {
                var e,
                  t = this._lexer.token;
                if (this.expectOptionalToken(wu.BRACKET_L)) {
                  var n = this.parseTypeReference();
                  this.expectToken(wu.BRACKET_R),
                    (e = this.node(t, { kind: xn.LIST_TYPE, type: n }));
                } else e = this.parseNamedType();
                return this.expectOptionalToken(wu.BANG)
                  ? this.node(t, { kind: xn.NON_NULL_TYPE, type: e })
                  : e;
              },
            },
            {
              key: "parseNamedType",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: xn.NAMED_TYPE,
                  name: this.parseName(),
                });
              },
            },
            {
              key: "peekDescription",
              value: function () {
                return this.peek(wu.STRING) || this.peek(wu.BLOCK_STRING);
              },
            },
            {
              key: "parseDescription",
              value: function () {
                if (this.peekDescription()) return this.parseStringLiteral();
              },
            },
            {
              key: "parseSchemaDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("schema");
                var n = this.parseConstDirectives(),
                  r = this.many(
                    wu.BRACE_L,
                    this.parseOperationTypeDefinition,
                    wu.BRACE_R
                  );
                return this.node(e, {
                  kind: xn.SCHEMA_DEFINITION,
                  description: t,
                  directives: n,
                  operationTypes: r,
                });
              },
            },
            {
              key: "parseOperationTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseOperationType();
                this.expectToken(wu.COLON);
                var n = this.parseNamedType();
                return this.node(e, {
                  kind: xn.OPERATION_TYPE_DEFINITION,
                  operation: t,
                  type: n,
                });
              },
            },
            {
              key: "parseScalarTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("scalar");
                var n = this.parseName(),
                  r = this.parseConstDirectives();
                return this.node(e, {
                  kind: xn.SCALAR_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                });
              },
            },
            {
              key: "parseObjectTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("type");
                var n = this.parseName(),
                  r = this.parseImplementsInterfaces(),
                  i = this.parseConstDirectives(),
                  a = this.parseFieldsDefinition();
                return this.node(e, {
                  kind: xn.OBJECT_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  interfaces: r,
                  directives: i,
                  fields: a,
                });
              },
            },
            {
              key: "parseImplementsInterfaces",
              value: function () {
                return this.expectOptionalKeyword("implements")
                  ? this.delimitedMany(wu.AMP, this.parseNamedType)
                  : [];
              },
            },
            {
              key: "parseFieldsDefinition",
              value: function () {
                return this.optionalMany(
                  wu.BRACE_L,
                  this.parseFieldDefinition,
                  wu.BRACE_R
                );
              },
            },
            {
              key: "parseFieldDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseName(),
                  r = this.parseArgumentDefs();
                this.expectToken(wu.COLON);
                var i = this.parseTypeReference(),
                  a = this.parseConstDirectives();
                return this.node(e, {
                  kind: xn.FIELD_DEFINITION,
                  description: t,
                  name: n,
                  arguments: r,
                  type: i,
                  directives: a,
                });
              },
            },
            {
              key: "parseArgumentDefs",
              value: function () {
                return this.optionalMany(
                  wu.PAREN_L,
                  this.parseInputValueDef,
                  wu.PAREN_R
                );
              },
            },
            {
              key: "parseInputValueDef",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseName();
                this.expectToken(wu.COLON);
                var r,
                  i = this.parseTypeReference();
                this.expectOptionalToken(wu.EQUALS) &&
                  (r = this.parseConstValueLiteral());
                var a = this.parseConstDirectives();
                return this.node(e, {
                  kind: xn.INPUT_VALUE_DEFINITION,
                  description: t,
                  name: n,
                  type: i,
                  defaultValue: r,
                  directives: a,
                });
              },
            },
            {
              key: "parseInterfaceTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("interface");
                var n = this.parseName(),
                  r = this.parseImplementsInterfaces(),
                  i = this.parseConstDirectives(),
                  a = this.parseFieldsDefinition();
                return this.node(e, {
                  kind: xn.INTERFACE_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  interfaces: r,
                  directives: i,
                  fields: a,
                });
              },
            },
            {
              key: "parseUnionTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("union");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseUnionMemberTypes();
                return this.node(e, {
                  kind: xn.UNION_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  types: i,
                });
              },
            },
            {
              key: "parseUnionMemberTypes",
              value: function () {
                return this.expectOptionalToken(wu.EQUALS)
                  ? this.delimitedMany(wu.PIPE, this.parseNamedType)
                  : [];
              },
            },
            {
              key: "parseEnumTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("enum");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseEnumValuesDefinition();
                return this.node(e, {
                  kind: xn.ENUM_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  values: i,
                });
              },
            },
            {
              key: "parseEnumValuesDefinition",
              value: function () {
                return this.optionalMany(
                  wu.BRACE_L,
                  this.parseEnumValueDefinition,
                  wu.BRACE_R
                );
              },
            },
            {
              key: "parseEnumValueDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseEnumValueName(),
                  r = this.parseConstDirectives();
                return this.node(e, {
                  kind: xn.ENUM_VALUE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                });
              },
            },
            {
              key: "parseEnumValueName",
              value: function () {
                if (
                  "true" === this._lexer.token.value ||
                  "false" === this._lexer.token.value ||
                  "null" === this._lexer.token.value
                )
                  throw Su(
                    this._lexer.source,
                    this._lexer.token.start,
                    "".concat(
                      Bu(this._lexer.token),
                      " is reserved and cannot be used for an enum value."
                    )
                  );
                return this.parseName();
              },
            },
            {
              key: "parseInputObjectTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("input");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseInputFieldsDefinition();
                return this.node(e, {
                  kind: xn.INPUT_OBJECT_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseInputFieldsDefinition",
              value: function () {
                return this.optionalMany(
                  wu.BRACE_L,
                  this.parseInputValueDef,
                  wu.BRACE_R
                );
              },
            },
            {
              key: "parseTypeSystemExtension",
              value: function () {
                var e = this._lexer.lookahead();
                if (e.kind === wu.NAME)
                  switch (e.value) {
                    case "schema":
                      return this.parseSchemaExtension();
                    case "scalar":
                      return this.parseScalarTypeExtension();
                    case "type":
                      return this.parseObjectTypeExtension();
                    case "interface":
                      return this.parseInterfaceTypeExtension();
                    case "union":
                      return this.parseUnionTypeExtension();
                    case "enum":
                      return this.parseEnumTypeExtension();
                    case "input":
                      return this.parseInputObjectTypeExtension();
                  }
                throw this.unexpected(e);
              },
            },
            {
              key: "parseSchemaExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("schema");
                var t = this.parseConstDirectives(),
                  n = this.optionalMany(
                    wu.BRACE_L,
                    this.parseOperationTypeDefinition,
                    wu.BRACE_R
                  );
                if (0 === t.length && 0 === n.length) throw this.unexpected();
                return this.node(e, {
                  kind: xn.SCHEMA_EXTENSION,
                  directives: t,
                  operationTypes: n,
                });
              },
            },
            {
              key: "parseScalarTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("scalar");
                var t = this.parseName(),
                  n = this.parseConstDirectives();
                if (0 === n.length) throw this.unexpected();
                return this.node(e, {
                  kind: xn.SCALAR_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                });
              },
            },
            {
              key: "parseObjectTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("type");
                var t = this.parseName(),
                  n = this.parseImplementsInterfaces(),
                  r = this.parseConstDirectives(),
                  i = this.parseFieldsDefinition();
                if (0 === n.length && 0 === r.length && 0 === i.length)
                  throw this.unexpected();
                return this.node(e, {
                  kind: xn.OBJECT_TYPE_EXTENSION,
                  name: t,
                  interfaces: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseInterfaceTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("interface");
                var t = this.parseName(),
                  n = this.parseImplementsInterfaces(),
                  r = this.parseConstDirectives(),
                  i = this.parseFieldsDefinition();
                if (0 === n.length && 0 === r.length && 0 === i.length)
                  throw this.unexpected();
                return this.node(e, {
                  kind: xn.INTERFACE_TYPE_EXTENSION,
                  name: t,
                  interfaces: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseUnionTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("union");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseUnionMemberTypes();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: xn.UNION_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  types: r,
                });
              },
            },
            {
              key: "parseEnumTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("enum");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseEnumValuesDefinition();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: xn.ENUM_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  values: r,
                });
              },
            },
            {
              key: "parseInputObjectTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("input");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseInputFieldsDefinition();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: xn.INPUT_OBJECT_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  fields: r,
                });
              },
            },
            {
              key: "parseDirectiveDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("directive"), this.expectToken(wu.AT);
                var n = this.parseName(),
                  r = this.parseArgumentDefs(),
                  i = this.expectOptionalKeyword("repeatable");
                this.expectKeyword("on");
                var a = this.parseDirectiveLocations();
                return this.node(e, {
                  kind: xn.DIRECTIVE_DEFINITION,
                  description: t,
                  name: n,
                  arguments: r,
                  repeatable: i,
                  locations: a,
                });
              },
            },
            {
              key: "parseDirectiveLocations",
              value: function () {
                return this.delimitedMany(wu.PIPE, this.parseDirectiveLocation);
              },
            },
            {
              key: "parseDirectiveLocation",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseName();
                if (Object.prototype.hasOwnProperty.call(bu, t.value)) return t;
                throw this.unexpected(e);
              },
            },
            {
              key: "node",
              value: function (e, t) {
                return (
                  !0 !== this._options.noLocation &&
                    (t.loc = new Tn(
                      e,
                      this._lexer.lastToken,
                      this._lexer.source
                    )),
                  t
                );
              },
            },
            {
              key: "peek",
              value: function (e) {
                return this._lexer.token.kind === e;
              },
            },
            {
              key: "expectToken",
              value: function (e) {
                var t = this._lexer.token;
                if (t.kind === e) return this.advanceLexer(), t;
                throw Su(
                  this._lexer.source,
                  t.start,
                  "Expected ".concat(Wu(e), ", found ").concat(Bu(t), ".")
                );
              },
            },
            {
              key: "expectOptionalToken",
              value: function (e) {
                return (
                  this._lexer.token.kind === e && (this.advanceLexer(), !0)
                );
              },
            },
            {
              key: "expectKeyword",
              value: function (e) {
                var t = this._lexer.token;
                if (t.kind !== wu.NAME || t.value !== e)
                  throw Su(
                    this._lexer.source,
                    t.start,
                    'Expected "'.concat(e, '", found ').concat(Bu(t), ".")
                  );
                this.advanceLexer();
              },
            },
            {
              key: "expectOptionalKeyword",
              value: function (e) {
                var t = this._lexer.token;
                return (
                  t.kind === wu.NAME &&
                  t.value === e &&
                  (this.advanceLexer(), !0)
                );
              },
            },
            {
              key: "unexpected",
              value: function (e) {
                var t = null !== e && void 0 !== e ? e : this._lexer.token;
                return Su(
                  this._lexer.source,
                  t.start,
                  "Unexpected ".concat(Bu(t), ".")
                );
              },
            },
            {
              key: "any",
              value: function (e, t, n) {
                this.expectToken(e);
                for (var r = []; !this.expectOptionalToken(n); )
                  r.push(t.call(this));
                return r;
              },
            },
            {
              key: "optionalMany",
              value: function (e, t, n) {
                if (this.expectOptionalToken(e)) {
                  var r = [];
                  do {
                    r.push(t.call(this));
                  } while (!this.expectOptionalToken(n));
                  return r;
                }
                return [];
              },
            },
            {
              key: "many",
              value: function (e, t, n) {
                this.expectToken(e);
                var r = [];
                do {
                  r.push(t.call(this));
                } while (!this.expectOptionalToken(n));
                return r;
              },
            },
            {
              key: "delimitedMany",
              value: function (e, t) {
                this.expectOptionalToken(e);
                var n = [];
                do {
                  n.push(t.call(this));
                } while (this.expectOptionalToken(e));
                return n;
              },
            },
            {
              key: "advanceLexer",
              value: function () {
                var e = this._options.maxTokens,
                  t = this._lexer.advance();
                if (
                  void 0 !== e &&
                  t.kind !== wu.EOF &&
                  (++this._tokenCounter, this._tokenCounter > e)
                )
                  throw Su(
                    this._lexer.source,
                    t.start,
                    "Document contains more that ".concat(
                      e,
                      " tokens. Parsing aborted."
                    )
                  );
              },
            },
          ]),
          e
        );
      })();
      function Bu(e) {
        var t = e.value;
        return Wu(e.kind) + (null != t ? ' "'.concat(t, '"') : "");
      }
      function Wu(e) {
        return (function (e) {
          return (
            e === wu.BANG ||
            e === wu.DOLLAR ||
            e === wu.AMP ||
            e === wu.PAREN_L ||
            e === wu.PAREN_R ||
            e === wu.SPREAD ||
            e === wu.COLON ||
            e === wu.EQUALS ||
            e === wu.AT ||
            e === wu.BRACKET_L ||
            e === wu.BRACKET_R ||
            e === wu.BRACE_L ||
            e === wu.PIPE ||
            e === wu.BRACE_R
          );
        })(e)
          ? '"'.concat(e, '"')
          : e;
      }
      var Hu = new Map(),
        Yu = new Map(),
        Ku = !0,
        Gu = !1;
      function Ju(e) {
        return e.replace(/[\s,]+/g, " ").trim();
      }
      function Zu(e) {
        var t = new Set(),
          n = [];
        return (
          e.definitions.forEach(function (e) {
            if ("FragmentDefinition" === e.kind) {
              var r = e.name.value,
                i = Ju((o = e.loc).source.body.substring(o.start, o.end)),
                a = Yu.get(r);
              a && !a.has(i)
                ? Ku &&
                  console.warn(
                    "Warning: fragment with name " +
                      r +
                      " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"
                  )
                : a || Yu.set(r, (a = new Set())),
                a.add(i),
                t.has(i) || (t.add(i), n.push(e));
            } else n.push(e);
            var o;
          }),
          $e($e({}, e), { definitions: n })
        );
      }
      function Xu(e) {
        var t = Ju(e);
        if (!Hu.has(t)) {
          var n = (function (e, t) {
            return new Uu(e, t).parseDocument();
          })(e, {
            experimentalFragmentVariables: Gu,
            allowLegacyFragmentVariables: Gu,
          });
          if (!n || "Document" !== n.kind)
            throw new Error("Not a valid GraphQL document.");
          Hu.set(
            t,
            (function (e) {
              var t = new Set(e.definitions);
              t.forEach(function (e) {
                e.loc && delete e.loc,
                  Object.keys(e).forEach(function (n) {
                    var r = e[n];
                    r && "object" === typeof r && t.add(r);
                  });
              });
              var n = e.loc;
              return n && (delete n.startToken, delete n.endToken), e;
            })(Zu(n))
          );
        }
        return Hu.get(t);
      }
      function $u(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        "string" === typeof e && (e = [e]);
        var r = e[0];
        return (
          t.forEach(function (t, n) {
            t && "Document" === t.kind ? (r += t.loc.source.body) : (r += t),
              (r += e[n + 1]);
          }),
          Xu(r)
        );
      }
      var es,
        ts = $u,
        ns = function () {
          Hu.clear(), Yu.clear();
        },
        rs = function () {
          Ku = !1;
        },
        is = function () {
          Gu = !0;
        },
        as = function () {
          Gu = !1;
        };
      ((es = $u || ($u = {})).gql = ts),
        (es.resetCaches = ns),
        (es.disableFragmentWarnings = rs),
        (es.enableExperimentalFragmentVariables = is),
        (es.disableExperimentalFragmentVariables = as),
        ($u.default = $u);
      var os,
        us,
        ss,
        ls,
        cs,
        fs,
        ds,
        ps,
        hs = $u(
          os ||
            (os = du([
              "\n  mutation addClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n      email\n      phone\n    }\n  }\n",
            ]))
        ),
        vs = $u(
          us ||
            (us = du([
              "\n  mutation deleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n      email\n      phone\n    }\n  }\n",
            ]))
        ),
        ys = $u(
          ss ||
            (ss = du([
              "\n  query getClients {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n  }\n",
            ]))
        ),
        ms = $u(
          ls ||
            (ls = du([
              "\n  query getProjects {\n    projects {\n      id\n      name\n      status\n    }\n  }\n",
            ]))
        ),
        gs = $u(
          cs ||
            (cs = du([
              "\n  query getProject($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n",
            ]))
        );
      function bs(e) {
        var t = e.client,
          n = l(
            fu(vs, {
              variables: { id: t.id },
              refetchQueries: [{ query: ys }, { query: ms }],
            }),
            1
          )[0];
        return (0, Ge.jsxs)("tr", {
          children: [
            (0, Ge.jsx)("td", { children: t.name }),
            (0, Ge.jsx)("td", { children: t.email }),
            (0, Ge.jsx)("td", { children: t.phone }),
            (0, Ge.jsx)("td", {
              children: (0, Ge.jsx)("button", {
                className: "btn btn-danger btn-sm",
                onClick: n,
                children: (0, Ge.jsx)(Zo, {}),
              }),
            }),
          ],
        });
      }
      function ws() {
        var e = lu(ys),
          t = e.loading,
          n = e.error,
          r = e.data;
        return t
          ? (0, Ge.jsx)("p", { children: "Loading" })
          : n
          ? (0, Ge.jsx)("p", { children: "Something went wrong" })
          : (0, Ge.jsx)(Ge.Fragment, {
              children:
                !t &&
                !n &&
                (0, Ge.jsxs)("table", {
                  className: "table table-hover mt-3",
                  children: [
                    (0, Ge.jsx)("thead", {
                      children: (0, Ge.jsxs)("tr", {
                        children: [
                          (0, Ge.jsx)("th", { children: "Name" }),
                          (0, Ge.jsx)("th", { children: "Email" }),
                          (0, Ge.jsx)("th", { children: "Phone" }),
                          (0, Ge.jsx)("th", {}),
                        ],
                      }),
                    }),
                    (0, Ge.jsx)("tbody", {
                      children: r.clients.map(function (e) {
                        return (0, Ge.jsx)(bs, { client: e }, e.id);
                      }),
                    }),
                  ],
                }),
            });
      }
      function ks(e) {
        var t = e.project;
        return (0, Ge.jsx)("div", {
          className: "col-md-6",
          children: (0, Ge.jsx)("div", {
            className: "card mb-3",
            children: (0, Ge.jsxs)("div", {
              className: "card-body",
              children: [
                (0, Ge.jsxs)("div", {
                  className:
                    "d-flex justify-content-between align-items-center",
                  children: [
                    (0, Ge.jsx)("h5", {
                      className: "card-title",
                      children: t.name,
                    }),
                    (0, Ge.jsx)("a", {
                      className: "btn btn-light",
                      href: "/projects/".concat(t.id),
                      children: "View",
                    }),
                  ],
                }),
                (0, Ge.jsxs)("p", {
                  className: "small",
                  children: [
                    "Status: ",
                    (0, Ge.jsx)("strong", { children: t.status }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function Es() {
        var e = lu(ms),
          t = e.loading,
          n = e.error,
          r = e.data;
        return t
          ? (0, Ge.jsx)("p", { children: "loading..." })
          : n
          ? (0, Ge.jsx)("p", { children: "Something Went Wrong" })
          : (0, Ge.jsx)(Ge.Fragment, {
              children:
                r.projects.length > 0
                  ? (0, Ge.jsx)("div", {
                      className: "row mt-4",
                      children: r.projects.map(function (e) {
                        return (0, Ge.jsx)(ks, { project: e }, e.id);
                      }),
                    })
                  : (0, Ge.jsx)("p", { children: "No Projects" }),
            });
      }
      function Ss() {
        var e = l((0, t.useState)(""), 2),
          n = e[0],
          r = e[1],
          i = l((0, t.useState)(""), 2),
          a = i[0],
          o = i[1],
          u = l((0, t.useState)(""), 2),
          s = u[0],
          c = u[1],
          d = fu(hs, {
            variables: { name: n, email: a, phone: s },
            update: function (e, t) {
              var n = t.data.addClient,
                r = e.readQuery({ query: ys }).clients;
              e.writeQuery({
                query: ys,
                data: { clients: [].concat(f(r), [n]) },
              });
            },
          }),
          p = l(d, 1)[0];
        return (0, Ge.jsxs)(Ge.Fragment, {
          children: [
            (0, Ge.jsx)("button", {
              type: "button",
              className: "btn btn-secondary",
              "data-bs-toggle": "modal",
              "data-bs-target": "#addClientModal",
              children: (0, Ge.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [
                  (0, Ge.jsx)(Xo, { className: "icon" }),
                  (0, Ge.jsx)("div", { children: "Add Client" }),
                ],
              }),
            }),
            (0, Ge.jsx)("div", {
              className: "modal fade",
              id: "addClientModal",
              "aria-labelledby": "addClientModalLabel",
              "aria-hidden": "true",
              children: (0, Ge.jsx)("div", {
                className: "modal-dialog",
                children: (0, Ge.jsxs)("div", {
                  className: "modal-content",
                  children: [
                    (0, Ge.jsxs)("div", {
                      className: "modal-header",
                      children: [
                        (0, Ge.jsx)("h5", {
                          className: "modal-title",
                          id: "addClientModalLabel",
                          children: "Add Client",
                        }),
                        (0, Ge.jsx)("button", {
                          type: "button",
                          className: "btn-close",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Close",
                        }),
                      ],
                    }),
                    (0, Ge.jsx)("div", {
                      className: "modal-body",
                      children: (0, Ge.jsxs)("form", {
                        onSubmit: function (e) {
                          if (
                            (e.preventDefault(),
                            "" === n || "" === a || "" === s)
                          )
                            return alert("Please fill in all fields");
                          p(n, a, s), r(""), o(""), c("");
                        },
                        children: [
                          (0, Ge.jsxs)("div", {
                            className: "mb-3",
                            children: [
                              (0, Ge.jsx)("label", {
                                className: "form-label",
                                children: "Name",
                              }),
                              (0, Ge.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                id: "name",
                                value: n,
                                onChange: function (e) {
                                  return r(e.target.value);
                                },
                              }),
                            ],
                          }),
                          (0, Ge.jsxs)("div", {
                            className: "mb-3",
                            children: [
                              (0, Ge.jsx)("label", {
                                className: "form-label",
                                children: "Email",
                              }),
                              (0, Ge.jsx)("input", {
                                type: "email",
                                className: "form-control",
                                id: "email",
                                value: a,
                                onChange: function (e) {
                                  return o(e.target.value);
                                },
                              }),
                            ],
                          }),
                          (0, Ge.jsxs)("div", {
                            className: "mb-3",
                            children: [
                              (0, Ge.jsx)("label", {
                                className: "form-label",
                                children: "Phone",
                              }),
                              (0, Ge.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                id: "phone",
                                value: s,
                                onChange: function (e) {
                                  return c(e.target.value);
                                },
                              }),
                            ],
                          }),
                          (0, Ge.jsx)("button", {
                            type: "submit",
                            className: "btn btn-secondary",
                            children: "Submit",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var xs = $u(
          fs ||
            (fs = du([
              "\n  mutation AddProject(\n    $name: String!\n    $description: String!\n    $status: ProjectStatus!\n    $clientId: ID!\n  ) {\n    addProject(\n      name: $name\n      description: $description\n      status: $status\n      clientId: $clientId\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n",
            ]))
        ),
        _s = $u(
          ds ||
            (ds = du([
              "\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n    }\n  }\n",
            ]))
        ),
        Os = $u(
          ps ||
            (ps = du([
              "\n  mutation UpdateProject(\n    $id: ID!\n    $name: String!\n    $description: String!\n    $status: ProjectStatusUpdate!\n  ) {\n    updateProject(\n      id: $id\n      name: $name\n      description: $description\n      status: $status\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n",
            ]))
        );
      function Ns() {
        var e = l((0, t.useState)(""), 2),
          n = e[0],
          r = e[1],
          i = l((0, t.useState)(""), 2),
          a = i[0],
          o = i[1],
          u = l((0, t.useState)(""), 2),
          s = u[0],
          c = u[1],
          d = l((0, t.useState)("new"), 2),
          p = d[0],
          h = d[1],
          v = fu(xs, {
            variables: { name: n, description: a, clientId: s, status: p },
            update: function (e, t) {
              var n = t.data.addProject,
                r = e.readQuery({ query: ms }).projects;
              e.writeQuery({
                query: ms,
                data: { projects: [].concat(f(r), [n]) },
              });
            },
          }),
          y = l(v, 1)[0],
          m = lu(ys),
          g = m.loading,
          b = m.error,
          w = m.data;
        return g
          ? null
          : b
          ? "Something Went Wrong"
          : (0, Ge.jsx)(Ge.Fragment, {
              children:
                !g &&
                !b &&
                (0, Ge.jsxs)(Ge.Fragment, {
                  children: [
                    (0, Ge.jsx)("button", {
                      type: "button",
                      className: "btn btn-primary",
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#addProjectModal",
                      children: (0, Ge.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                          (0, Ge.jsx)(Go, { className: "icon" }),
                          (0, Ge.jsx)("div", { children: "New Project" }),
                        ],
                      }),
                    }),
                    (0, Ge.jsx)("div", {
                      className: "modal fade",
                      id: "addProjectModal",
                      "aria-labelledby": "addProjectModalLabel",
                      "aria-hidden": "true",
                      children: (0, Ge.jsx)("div", {
                        className: "modal-dialog",
                        children: (0, Ge.jsxs)("div", {
                          className: "modal-content",
                          children: [
                            (0, Ge.jsxs)("div", {
                              className: "modal-header",
                              children: [
                                (0, Ge.jsx)("h5", {
                                  className: "modal-title",
                                  id: "addProjectModalLabel",
                                  children: "New Project",
                                }),
                                (0, Ge.jsx)("button", {
                                  type: "button",
                                  className: "btn-close",
                                  "data-bs-dismiss": "modal",
                                  "aria-label": "Close",
                                }),
                              ],
                            }),
                            (0, Ge.jsx)("div", {
                              className: "modal-body",
                              children: (0, Ge.jsxs)("form", {
                                onSubmit: function (e) {
                                  if (
                                    (e.preventDefault(),
                                    "" === n || "" === a || "" === p)
                                  )
                                    return alert("Please fill in all fields");
                                  y(n, a, s, p), r(""), o(""), h("new"), c("");
                                },
                                children: [
                                  (0, Ge.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      (0, Ge.jsx)("label", {
                                        className: "form-label",
                                        children: "Name",
                                      }),
                                      (0, Ge.jsx)("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "name",
                                        value: n,
                                        onChange: function (e) {
                                          return r(e.target.value);
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, Ge.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      (0, Ge.jsx)("label", {
                                        className: "form-label",
                                        children: "Description",
                                      }),
                                      (0, Ge.jsx)("textarea", {
                                        className: "form-control",
                                        id: "description",
                                        value: a,
                                        onChange: function (e) {
                                          return o(e.target.value);
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, Ge.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      (0, Ge.jsx)("label", {
                                        className: "form-label",
                                        children: "Status",
                                      }),
                                      (0, Ge.jsxs)("select", {
                                        id: "status",
                                        className: "form-select",
                                        value: p,
                                        onChange: function (e) {
                                          return h(e.target.value);
                                        },
                                        children: [
                                          (0, Ge.jsx)("option", {
                                            value: "new",
                                            children: "Not Started",
                                          }),
                                          (0, Ge.jsx)("option", {
                                            value: "progress",
                                            children: "In Progress",
                                          }),
                                          (0, Ge.jsx)("option", {
                                            value: "completed",
                                            children: "Completed",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Ge.jsxs)("div", {
                                    className: "mb-3",
                                    children: [
                                      (0, Ge.jsx)("label", {
                                        className: "form-label",
                                        children: "Client",
                                      }),
                                      (0, Ge.jsxs)("select", {
                                        id: "clientId",
                                        className: "form-select",
                                        value: s,
                                        onChange: function (e) {
                                          return c(e.target.value);
                                        },
                                        children: [
                                          (0, Ge.jsx)("option", {
                                            value: "",
                                            children: "Select Client",
                                          }),
                                          w.clients.map(function (e) {
                                            return (0,
                                            Ge.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Ge.jsx)("button", {
                                    type: "submit",
                                    "data-bs-dismiss": "modal",
                                    className: "btn btn-primary",
                                    children: "Submit",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
            });
      }
      function Cs() {
        return (0, Ge.jsxs)(Ge.Fragment, {
          children: [
            (0, Ge.jsxs)("div", {
              className: "d-flex gap-3 mb-4",
              children: [(0, Ge.jsx)(Ss, {}), (0, Ge.jsx)(Ns, {})],
            }),
            (0, Ge.jsx)(Es, {}),
            (0, Ge.jsx)("hr", {}),
            (0, Ge.jsx)(ws, {}),
          ],
        });
      }
      function Ts(e) {
        var t = e.client;
        return (0, Ge.jsxs)(Ge.Fragment, {
          children: [
            (0, Ge.jsx)("h5", {
              className: "mt-5",
              children: "Client Information",
            }),
            (0, Ge.jsxs)("ul", {
              className: "list-group",
              children: [
                (0, Ge.jsxs)("li", {
                  className: "list-group-item",
                  children: [
                    (0, Ge.jsx)(Ko, { className: "icon" }),
                    " ",
                    t.name,
                  ],
                }),
                (0, Ge.jsxs)("li", {
                  className: "list-group-item",
                  children: [
                    (0, Ge.jsx)(Ho, { className: "icon" }),
                    " ",
                    t.email,
                  ],
                }),
                (0, Ge.jsxs)("li", {
                  className: "list-group-item",
                  children: [
                    (0, Ge.jsx)(Jo, { className: "icon" }),
                    " ",
                    t.phone,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Ds(e) {
        var t = e.projectId,
          n = xe(),
          r = l(
            fu(_s, {
              variables: { id: t },
              onCompleted: function () {
                return n("/");
              },
              refetchQueries: [{ query: ms }],
            }),
            1
          )[0];
        return (0, Ge.jsx)("div", {
          className: "d-flex mt-5 ms-auto",
          children: (0, Ge.jsxs)("button", {
            className: "btn btn-danger m-2",
            onClick: r,
            children: [
              (0, Ge.jsx)(Zo, { className: "icon" }),
              " Delete Project",
            ],
          }),
        });
      }
      function Is(e) {
        var n = e.project,
          r = l((0, t.useState)(n.name), 2),
          i = r[0],
          a = r[1],
          o = l((0, t.useState)(n.description), 2),
          u = o[0],
          s = o[1],
          c = l(
            (0, t.useState)(function () {
              switch (n.status) {
                case "Not Started":
                  return "new";
                case "In Progress":
                  return "progress";
                case "Completed":
                  return "completed";
                default:
                  throw new Error("Unknown status: ".concat(n.status));
              }
            }),
            2
          ),
          f = c[0],
          d = c[1],
          p = l(
            fu(Os, {
              variables: { id: n.id, name: i, description: u, status: f },
              refetchQueries: [{ query: gs, variables: { id: n.id } }],
            }),
            1
          )[0];
        return (0, Ge.jsxs)("div", {
          className: "mt-5",
          children: [
            (0, Ge.jsx)("h3", { children: "Update Project Details" }),
            (0, Ge.jsxs)("form", {
              onSubmit: function (e) {
                if ((e.preventDefault(), !i || !u || !f))
                  return alert("Please fill out all fields");
                p(i, u, f);
              },
              children: [
                (0, Ge.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    (0, Ge.jsx)("label", {
                      className: "form-label",
                      children: "Name",
                    }),
                    (0, Ge.jsx)("input", {
                      type: "text",
                      className: "form-control",
                      id: "name",
                      value: i,
                      onChange: function (e) {
                        return a(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, Ge.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    (0, Ge.jsx)("label", {
                      className: "form-label",
                      children: "Description",
                    }),
                    (0, Ge.jsx)("textarea", {
                      className: "form-control",
                      id: "description",
                      value: u,
                      onChange: function (e) {
                        return s(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, Ge.jsxs)("div", {
                  className: "mb-3",
                  children: [
                    (0, Ge.jsx)("label", {
                      className: "form-label",
                      children: "Status",
                    }),
                    (0, Ge.jsxs)("select", {
                      id: "status",
                      className: "form-select",
                      value: f,
                      onChange: function (e) {
                        return d(e.target.value);
                      },
                      children: [
                        (0, Ge.jsx)("option", {
                          value: "new",
                          children: "Not Started",
                        }),
                        (0, Ge.jsx)("option", {
                          value: "progress",
                          children: "In Progress",
                        }),
                        (0, Ge.jsx)("option", {
                          value: "completed",
                          children: "Completed",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ge.jsx)("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      }
      function Ps() {
        var e = (function () {
            var e = t.useContext(we).matches,
              n = e[e.length - 1];
            return n ? n.params : {};
          })().id,
          n = lu(gs, { variables: { id: e } }),
          r = n.loading,
          i = n.error,
          a = n.data;
        return r
          ? (0, Ge.jsx)("p", { children: "Loading..." })
          : i
          ? (0, Ge.jsx)("p", { children: "Something Went Wrong" })
          : (0, Ge.jsx)(Ge.Fragment, {
              children:
                !r &&
                !i &&
                (0, Ge.jsxs)("div", {
                  className: "mx-auto w-75 card p-5",
                  children: [
                    (0, Ge.jsx)(We, {
                      to: "/",
                      className: "btn btn-light btn-sm w-25 d-inline ms-auto",
                      children: "Back",
                    }),
                    (0, Ge.jsx)("h1", { children: a.project.name }),
                    (0, Ge.jsx)("p", { children: a.project.description }),
                    (0, Ge.jsx)("h5", {
                      className: "mt-3",
                      children: "Project Status",
                    }),
                    (0, Ge.jsx)("p", {
                      className: "lead",
                      children: a.project.status,
                    }),
                    (0, Ge.jsx)(Ts, { client: a.project.client }),
                    (0, Ge.jsx)(Is, { project: a.project }),
                    (0, Ge.jsx)(Ds, { projectId: a.project.id }),
                  ],
                }),
            });
      }
      var js = new Ua({
        uri: "http://localhost:5000/graphql",
        cache: new Ao(),
      });
      var Rs = function () {
          return (0, Ge.jsx)(Ge.Fragment, {
            children: (0, Ge.jsx)(Mo, {
              client: js,
              children: (0, Ge.jsxs)(Ue, {
                children: [
                  (0, Ge.jsx)(Je, {}),
                  (0, Ge.jsx)("div", {
                    className: "container",
                    children: (0, Ge.jsxs)(Le, {
                      children: [
                        (0, Ge.jsx)(Ae, {
                          path: "/",
                          element: (0, Ge.jsx)(Cs, {}),
                        }),
                        (0, Ge.jsx)(Ae, {
                          path: "/projects/:id",
                          element: (0, Ge.jsx)(Ps, {}),
                        }),
                        (0, Ge.jsx)(Ae, {
                          path: "*",
                          element: (0, Ge.jsx)($o, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        As = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  i = t.getFCP,
                  a = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), i(e), a(e), o(e);
              });
        };
      i
        .createRoot(document.getElementById("root"))
        .render((0, Ge.jsx)(t.StrictMode, { children: (0, Ge.jsx)(Rs, {}) })),
        As();
    })();
})();
//# sourceMappingURL=main.bc669894.js.map
